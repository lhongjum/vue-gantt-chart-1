import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_TIME_UNIT_WIDTH,
  DEFAULT_TASK_HEIGHT,
  TIME_PERIODS,
} from "../constants";
import { uuidv4 } from "@/utils";
import moment from "moment";
import { momentCeil, momentFloor } from "../date-utils";

export class GanttChartTimeline {
  constructor(data) {
    const clone = Object.assign({}, data);

    this.chart = clone.chart;

    this.id = `gantt-timeline-${uuidv4()}`;
    this.timePeriod = clone.timePeriod || TIME_PERIODS.days;
    this.timePeriodData = {
      primary: [],
      secondary: [],
      totalWidth: 0,
      dividersV: [],
      dividersH: [],
    };

    this.TIME_UNIT_WIDTH = DEFAULT_TIME_UNIT_WIDTH;
    this.TASK_HEIGHT = DEFAULT_TASK_HEIGHT;

    this.year = 2022;
    this.month = 1;
    this.day = 13;
    this.hour = 10;
    this.minute = 0;

    this.update();
  }

  get el() {
    return document.getElementById(this.id) || {};
  }

  get scrollLeft() {
    return this.el.scrollLeft;
  }

  set scrollLeft(scrollLeft) {
    this.el.scrollLeft = scrollLeft;
  }

  get scrollWidth() {
    return this.timePeriodData.totalWidth;
  }

  get scrollbarThumbWidth() {
    const scrollbarArrowWidth = 20;
    const viewableRatio = window.innerWidth / this.scrollWidth;
    const scrollBarArea = window.innerWidth - scrollbarArrowWidth * 2;

    return scrollBarArea * viewableRatio;
  }

  scrollToAction() {
    if (!this.el) return;

    //? why is timeouts needed?
    //? when we set scrollLeft property of an element,
    //? it seems to be setting the width somehow relative
    //? to the total width (scrollWidth property) of a scrollable element.
    //? As scrollWidth property is read-only, we need to wait
    //? for DOM to update and re-calculate the scrollWidth,
    //? then we can properly set the scrollLeft.
    setTimeout(() => {
      this.scrollLeft =
        this.getPositionFromDate(this.getCurrentMoment()) -
        this.scrollbarThumbWidth;
    }, 25);
  }

  update() {
    this.getTimePeriod();
    this.scrollToAction();
  }

  updateDividers() {
    Object.assign(this.timePeriodData, this.getDividers());
  }

  getBoundingClientRect() {
    return this.el.getBoundingClientRect();
  }

  /* -------------------------------------------------------------------------- */
  /*                             time period methods                            */
  /* -------------------------------------------------------------------------- */

  getPrimaryUnit() {
    return this.timePeriodData.primary.unit || "days";
  }

  getSecondaryUnit() {
    return this.timePeriodData.secondary.unit || "hours";
  }

  getCurrentDate() {
    return `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}`;
  }

  getCurrentTimestamp() {
    return this.getCurrentMoment().unix();
  }

  getCurrentMoment() {
    return moment(this.getCurrentDate(), DEFAULT_DATE_FORMAT);
  }

  getStartDate() {
    const roundTo = this.timePeriod.roundTo || "day";
    return momentFloor(
      this.getCurrentMoment().subtract(
        this.timePeriod.startDate.term,
        this.timePeriod.startDate.unit
      ),
      roundTo
    );
  }

  getEndDate() {
    const roundTo = this.timePeriod.roundTo || "day";
    return momentCeil(
      this.getCurrentMoment().add(
        this.timePeriod.endDate.term,
        this.timePeriod.endDate.unit
      ),
      roundTo
    );
  }

  setTimePeriodOffset(offset = 1) {
    const keys = Object.keys(TIME_PERIODS);
    const currentTimePeriodIndex = keys.indexOf(this.timePeriod.name);
    const newPeriod = TIME_PERIODS[keys[currentTimePeriodIndex + offset]];
    if (!newPeriod) return;

    this.setTimePeriod(newPeriod);
  }

  setTimePeriod(timePeriod) {
    if (typeof timePeriod != "object") timePeriod = TIME_PERIODS[timePeriod];
    if (!TIME_PERIODS[timePeriod?.name]) return;

    this.timePeriod = timePeriod;
    this.update();
  }

  /* -------------------------------------------------------------------------- */
  /*                            main timeline methods                           */
  /* -------------------------------------------------------------------------- */

  getTimePeriod(period) {
    period = period || this.timePeriod;
    if (typeof period != "object") period = { name: period };

    const primaryUnit = period.primary.unit || "days";
    const secondaryUnit = period.secondary.unit || "hours";

    const secondaryUnitsPerPrimaryUnit = period.primary.secondaryPerUnit || 1;

    const primaryFormat = period.primary.format || "MM/YYYY DD";
    const secondaryFormat = period.secondary.format || "HH:mm";
    const secondaryStep = period.secondary.step || 1;

    const startDate = this.getStartDate();
    const endDate = this.getEndDate();

    const pSource = GanttChartTimeline.getTimeRange(
      startDate,
      endDate,
      primaryUnit
    );

    const primary = [];
    const primaryUnitWidth =
      this.TIME_UNIT_WIDTH * secondaryUnitsPerPrimaryUnit;
    let widthsSum = 0;
    for (const item of pSource) {
      const name = item.format(primaryFormat);
      const width = primaryUnitWidth;

      primary.push({
        name,
        width,
        left: widthsSum,
      });

      widthsSum += width;
    }

    const sSource = GanttChartTimeline.getTimeRange(
      startDate,
      endDate,
      secondaryUnit,
      { step: secondaryStep }
    );

    const expectedLength = pSource.length * secondaryUnitsPerPrimaryUnit;
    if (sSource.length > expectedLength) {
      sSource.splice(expectedLength, sSource.length - expectedLength);
    }

    const secondary = [];
    for (const item of sSource) {
      const name = item.format(secondaryFormat);

      secondary.push({
        name,
        width: this.TIME_UNIT_WIDTH,
      });
    }

    const data = {
      primary,
      secondary,
      totalWidth: widthsSum,
      primaryUnitWidth,
    };
    Object.assign(this.timePeriodData, data);

    const dividers = this.getDividers();
    Object.assign(this.timePeriodData, dividers);

    return this.timePeriodData;
  }

  static getTimeRange(start, end, type, options = {}) {
    const step = options.step || 1;
    const format = options.format || null;
    const stringify = options.stringify || false;

    const startDate = !(start instanceof moment) ? moment(start) : start;
    const endDate = !(end instanceof moment) ? moment(end) : end;

    let diff = endDate.diff(startDate, type);
    if (diff < 0) return [];

    let range = [];
    for (let i = 0; i < diff; i += step) {
      let date = moment(startDate).add(i, type);
      if (format) date = date.format(format);
      if (stringify) date = date.toString();
      range.push(date);
    }

    return range;
  }

  getDividers() {
    const primaryUnitWidth = this.timePeriodData.primaryUnitWidth;
    const totalWidth = this.timePeriodData.totalWidth;

    const vPrimaryAmount = Math.floor(totalWidth / primaryUnitWidth);
    const vSecondaryAmount = Math.floor(totalWidth / this.TIME_UNIT_WIDTH);
    const dividersV = {};

    for (let i = 0; i < vPrimaryAmount; i++) {
      const left = i * primaryUnitWidth;
      dividersV[left] = {
        left,
        emphasize: true,
      };
    }

    for (let i = 0; i < vSecondaryAmount; i++) {
      const left = i * this.TIME_UNIT_WIDTH;
      if (dividersV[left]) continue;

      dividersV[left] = {
        left,
      };
    }

    const hAmount = this.chart.resources.length;
    const dividersH = [];

    let prevTop = 0;
    for (let i = 1; i <= hAmount; i++) {
      const resource = this.chart.getResourceByIndex(i - 1);
      const top = prevTop + resource.getHeightPx();
      prevTop = top;

      dividersH.push({
        top,
        emphasize: true,
      });
    }

    return {
      dividersV: Object.values(dividersV),
      dividersH,
    };
  }

  /* -------------------- pixel to date relativity methods -------------------- */

  getPixelsPerSecond() {
    return (
      this.timePeriodData.totalWidth /
      this.getEndDate().diff(this.getStartDate(), "seconds")
    );
  }

  getDateFromPosition(x) {
    const rectLeft = this.el.getBoundingClientRect().left;
    const delta = x - rectLeft + this.scrollLeft;

    return this.getStartDate().add(
      delta / this.getPixelsPerSecond(),
      "seconds"
    );
  }

  getPositionFromDate(date) {
    const diff = date.diff(this.getStartDate(), "seconds");
    const pps = this.getPixelsPerSecond();

    return diff * pps;
  }

  /* -------------------------------------------------------------------------- */
  /*                                misc methods                                */
  /* -------------------------------------------------------------------------- */

  toJSON() {
    return {
      timePeriod: this.timePeriod,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
    };
  }

  static fromJSON(json) {
    return new GanttChartTimeline(json);
  }
}
