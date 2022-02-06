/// <reference path="./task.d.ts" />

import {
  SIDES,
  TASK_INTERACTIONS,
  DEFAULT_TIME_UNIT_WIDTH,
  RESOURCE_HEIGHT_PX,
  DEFAULT_DATE_FORMAT,
} from "@/constants";
import moment from "moment";
import { roundToNearest, uuidv4 } from "../utils";

export class Task {
  constructor(data) {
    const clone = Object.assign({}, data);

    this.chart = clone.chart;

    this.id = uuidv4();
    this.name = clone.name;

    this.start =
      moment(clone.start, DEFAULT_DATE_FORMAT).unix() || moment.now();
    this.end = moment(clone.end, DEFAULT_DATE_FORMAT).unix() || moment.now();
    this.resource = clone.resource;

    this.x = this.start * DEFAULT_TIME_UNIT_WIDTH;
    this.y = (Number(clone.y) || 0) * RESOURCE_HEIGHT_PX;

    this.style = clone.style || {};

    //? interaction property is used to determine
    //? if there is any interaction with the task
    //? and what type of interaction is it
    //? Note: at the end of interaction,
    //? it must be set to TASK_INTERACTIONS.none
    //? otherwise any other interactions will be blocked
    this.interaction = TASK_INTERACTIONS.none;
    this.methodsRefs = {};
    this.eventsMeta = {};
  }

  get duration() {
    return this.end - this.start;
  }

  get width() {
    const width = this.duration * this.getPixelsPerSecond();
    const scrollWidth = this.chart.timeline.scrollWidth;
    return width + this.left > scrollWidth ? scrollWidth - this.left : width;
  }

  get left() {
    return this.chart.timeline.getPositionFromDate(moment.unix(this.start));
  }

  get visible() {
    return (
      this.left + this.width >= 0 &&
      this.left <= this.chart.timeline.scrollWidth
    );
  }

  get top() {
    return this.y * RESOURCE_HEIGHT_PX;
  }

  getStartDate(options) {
    const o = Object.assign(
      { format: DEFAULT_DATE_FORMAT, stringify: false },
      options
    );

    const date = moment.unix(this.start).format(o.format);
    return o.stringify ? date.toString() : date;
  }

  getDurationString() {
    const duration = moment.duration(this.duration, "seconds");
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    if (years) return `${years} years`;
    if (months) return `${months} months`;
    if (days) return `${days} days`;
    if (hours) return `${hours} hours`;
    return `${minutes} minutes`;
  }

  getPixelsPerSecond() {
    return this.chart.timeline.getPixelsPerSecond();
  }

  interactionIs(interaction) {
    return this.interaction === interaction;
  }

  setInteraction(interaction) {
    if (
      this.interaction != TASK_INTERACTIONS.none &&
      interaction != TASK_INTERACTIONS.none
    ) {
      if (this.chart.settings.verbose) {
        console.warn(
          this.say(
            `can't set interaction to ${interaction} because ${this.interaction} is already set`
          )
        );
      }
      return false;
    }

    this.interaction = interaction;
    return true;
  }

  setStart(day) {
    if (day < 0 || day > this.end) {
      if (this.chart.settings.verbose) {
        console.warn(
          this.say(
            `start day ${day} is out of bound\n`,
            `start day must be between 1 and ${this.end}`
          )
        );
      }

      return;
    }

    this.start = Number(day);
  }

  setEnd(day) {
    // moment current month length
    if (day < this.start || day > moment().daysInMonth()) {
      if (this.chart.settings.verbose) {
        console.warn(this.say(`end day ${day} is out of bound`));
      }

      return;
    }

    this.end = Number(day);
  }

  setY(y) {
    this.y = Number(y);
  }

  resizeStart(side, event) {
    const set = this.setInteraction(TASK_INTERACTIONS.resize);
    if (!set) return;

    const snapToGrid = this.chart.getSetting("snapToGrid", false);

    this.eventsMeta["resizeStart"] = {
      side,
      snapToGrid,
      startX: event.clientX,
      startOld: this.start,
      endOld: this.end,
    };

    this.methodsRefs["resize"] = this.resize.bind(this);

    window.addEventListener("mousemove", this.methodsRefs["resize"]);
    window.addEventListener("mouseup", this.resizeEnd.bind(this), {
      once: true,
    });
  }

  resize(event) {
    if (
      !this.interactionIs(TASK_INTERACTIONS.resize) ||
      !this.eventsMeta["resizeStart"]
    )
      return;

    const { startX, startOld, endOld, side, snapToGrid } =
      this.eventsMeta["resizeStart"];

    let delta = (event.clientX - startX) / this.getPixelsPerSecond();
    if (snapToGrid && Math.abs(delta) < 1) return;
    else if (snapToGrid) delta = parseInt(delta);

    if (side === SIDES.left) {
      this.start = startOld + delta;
    } else if (side === SIDES.right) {
      this.end = endOld + delta;
    }
  }

  resizeEnd() {
    if (!this.interactionIs(TASK_INTERACTIONS.resize)) return;

    //! TODO: fix rounding for unix timestamps
    // const { snapToGrid } = this.eventsMeta["resizeStart"];
    // if (!snapToGrid) {
    //   this.setStart(Math.round(this.start));
    //   this.setEnd(Math.round(this.end));
    // }

    window.removeEventListener("mousemove", this.methodsRefs["resize"]);
    delete this.eventsMeta["resizeStart"];
    this.setInteraction(TASK_INTERACTIONS.none);
  }

  moveStart(event) {
    this.setInteraction(TASK_INTERACTIONS.move);

    const snapToGrid = this.chart.getSetting("snapToGrid", false);

    this.eventsMeta["moveStart"] = {
      snapToGrid,
      startX: event.clientX,
      startY: event.clientY,
      startOld: this.start,
      endOld: this.end,
      yOld: this.y,
    };

    this.methodsRefs["move"] = this.move.bind(this);

    window.addEventListener("mousemove", this.methodsRefs["move"]);
    window.addEventListener("mouseup", this.moveEnd.bind(this), {
      once: true,
    });
  }

  move(event) {
    if (
      !this.interactionIs(TASK_INTERACTIONS.move) ||
      !this.eventsMeta["moveStart"]
    )
      return;

    const { startX, startY, startOld, endOld, yOld, snapToGrid } =
      this.eventsMeta["moveStart"];

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    let deltaTime = 0;
    let deltaResources = 0;

    if (snapToGrid) {
      const unitWidth = this.chart.timeline.TIME_UNIT_WIDTH;
      const xMovement = Math.abs(deltaX) >= unitWidth;
      const yMovement = Math.abs(deltaY) >= RESOURCE_HEIGHT_PX;

      if (xMovement) {
        deltaTime =
          roundToNearest(deltaX, unitWidth) / this.getPixelsPerSecond();
      }

      if (yMovement) {
        deltaResources = Math.round(deltaY / RESOURCE_HEIGHT_PX);
      }
    } else {
      deltaTime = deltaX / this.getPixelsPerSecond();
      deltaResources = deltaY / RESOURCE_HEIGHT_PX;
    }

    this.start = startOld + deltaTime;
    this.end = endOld + deltaTime;
    this.setY(yOld + deltaResources);
  }

  moveEnd() {
    if (!this.interactionIs(TASK_INTERACTIONS.move)) return;

    const { snapToGrid } = this.eventsMeta["moveStart"];
    if (!snapToGrid) this.setY(Math.round(this.y));

    window.removeEventListener("mousemove", this.methodsRefs["move"]);
    delete this.eventsMeta["moveStart"];
    this.setInteraction(TASK_INTERACTIONS.none);
  }

  say(...args) {
    return `Task ${this.id} says: ${args.join(" ")}`;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      start: this.start,
      end: this.end,
    };
  }

  static fromJSON(json) {
    return new Task(json);
  }
}
