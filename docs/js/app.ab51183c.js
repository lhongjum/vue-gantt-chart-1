(function(t){function e(e){for(var n,i,o=e[0],c=e[1],d=e[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-gantt-chart/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("GanttChart")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gantt-chart",style:t.cssVars,on:{mousewheel:t.scale}},[s("div",{staticStyle:{"margin-right":"20px",display:"flex","flex-direction":"column"}},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.snapToGrid,expression:"snapToGrid"}],attrs:{type:"checkbox",id:"snap-mode"},domProps:{checked:Array.isArray(t.snapToGrid)?t._i(t.snapToGrid,null)>-1:t.snapToGrid},on:{change:function(e){var s=t.snapToGrid,n=e.target,a=!!n.checked;if(Array.isArray(s)){var r=null,i=t._i(s,r);n.checked?i<0&&(t.snapToGrid=s.concat([r])):i>-1&&(t.snapToGrid=s.slice(0,i).concat(s.slice(i+1)))}else t.snapToGrid=a}}}),s("label",{attrs:{for:"snap-mode"}},[t._v("Snap to days")])]),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.verbose,expression:"verbose"}],attrs:{type:"checkbox",id:"verbose"},domProps:{checked:Array.isArray(t.verbose)?t._i(t.verbose,null)>-1:t.verbose},on:{change:function(e){var s=t.verbose,n=e.target,a=!!n.checked;if(Array.isArray(s)){var r=null,i=t._i(s,r);n.checked?i<0&&(t.verbose=s.concat([r])):i>-1&&(t.verbose=s.slice(0,i).concat(s.slice(i+1)))}else t.verbose=a}}}),s("label",{attrs:{for:"verbose"}},[t._v("Verbose")])])]),s("div",{staticClass:"gantt-resources"},[t._l(t.resources,(function(e){return s("div",{key:e.id,staticClass:"gantt-resource",domProps:{textContent:t._s(e.name)}})})),s("div",{staticClass:"gantt-resource"},[s("button",{staticStyle:{width:"100%",height:"100%"},on:{click:t.newResource}},[t._v(" + ")])])],2),s("div",{staticClass:"gantt-timeline",attrs:{id:t.timeline.id}},[s("div",{staticClass:"gantt-timeunits-primary"},t._l(t.timelineData.primary,(function(e){return s("div",{key:e.name,staticClass:"gantt-timeunit-primary",style:{width:e.width+"px",left:e.left+"px"},domProps:{textContent:t._s(e.name)}})})),0),s("div",{staticClass:"gantt-timeunits-secondary"},t._l(t.timelineData.secondary,(function(e,n){return s("div",{key:"time-unit-"+e.name+"-"+n,staticClass:"gantt-timeunit-secondary",style:{width:e.width+"px"},domProps:{textContent:t._s(e.name)}})})),0),s("div",{staticClass:"tasks"},t._l(t.tasks,(function(e){return s("div",{key:"task-"+e.id,staticClass:"task",style:Object.assign({},{width:e.width+"px",transform:"translate("+e.left+"px, "+e.top+"px)"},e.style),on:{mousedown:function(s){return s.preventDefault(),s.stopPropagation(),t.taskMove(e,s)}}},[s("div",{staticClass:"resize-handle left",on:{mousedown:function(s){return s.preventDefault(),s.stopPropagation(),t.taskResize(e,t.SIDES.left,s)}}}),s("div",{staticClass:"task-name",domProps:{textContent:t._s(""+e.name)}}),s("div",{staticClass:"resize-handle right",on:{mousedown:function(s){return s.preventDefault(),s.stopPropagation(),t.taskResize(e,t.SIDES.right,s)}}})])})),0)])])},o=[],c=s("5530"),d=(s("d3b7"),s("159b"),s("c1df")),u=s.n(d),h=(s("b64b"),{left:0,right:1}),f={none:0,move:1,resize:2,regroup:3};var m=40,l=40,b={hours:{name:"hours",startDate:{unit:"days",term:1},endDate:{unit:"days",term:1},primary:{unit:"hours",format:"HH:mm MMM DD YYYY",secondaryPerUnit:6},secondary:{unit:"minutes",format:"HH:mm",step:10}},days:{name:"days",startDate:{unit:"weeks",term:1},endDate:{unit:"weeks",term:1},primary:{unit:"days",format:"ddd DD MMM YYYY",secondaryPerUnit:4},secondary:{unit:"hours",format:"HH:mm",step:6}},weeks:{name:"weeks",startDate:{unit:"months",term:1},endDate:{unit:"months",term:1},primary:{unit:"weeks",format:"ddd DD MMM YYYY",secondaryPerUnit:7},secondary:{unit:"days",format:"DD"}},months:{name:"months",startDate:{unit:"years",term:1},endDate:{unit:"years",term:1},primary:{unit:"months",format:"MMM YYYY",secondaryPerUnit:4},secondary:{unit:"weeks",format:"w"}},quarters:{name:"quarters",startDate:{unit:"years",term:2},endDate:{unit:"years",term:2},primary:{unit:"quarters",format:"[Q]Q YYYY",secondaryPerUnit:3},secondary:{unit:"months",format:"MMM"}},years:{name:"years",startDate:{unit:"years",term:5},endDate:{unit:"years",term:5},primary:{unit:"years",format:"YYYY",secondaryPerUnit:4},secondary:{unit:"quarters",format:"[Q]Q"}}},v=s("d4ec"),y=s("bee2");s("b0c0"),s("a9e3"),s("99af"),s("a15b"),s("fb6a"),s("a434"),s("ac1f"),s("5319"),s("25f0"),s("5cc6"),s("907a"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7");function j(t,e){var s=t.slice(),n=s.indexOf(e);return n>-1&&s.splice(n,1),s}function p(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}var g=function(){function t(e){Object(v["a"])(this,t),this.id=p(),this.name=e.name,this.start=Number(e.start)||0,this.end=Number(e.end)||1,this.x=this.start*m,this.y=(Number(e.y)||0)*l,this.style=e.style||{},this.interaction=f.none,this.methodsReferences={},this.eventsMeta={},this.verbose=e.verbose||!1}return Object(y["a"])(t,[{key:"duration",get:function(){return this.end-this.start}},{key:"width",get:function(){return this.duration*m}},{key:"left",get:function(){return this.start*m}},{key:"top",get:function(){return this.y*l}},{key:"setVerbose",value:function(t){this.verbose=Boolean(t)}},{key:"interactionIs",value:function(t){return this.interaction===t}},{key:"setInteraction",value:function(t){return this.interaction!=f.none&&t!=f.none?(this.verbose&&console.warn(this.say("can't set interaction to ".concat(t," because ").concat(this.interaction," is already set"))),!1):(this.interaction=t,!0)}},{key:"setStart",value:function(t){t<0||t>this.end?this.verbose&&console.warn(this.say("start day ".concat(t," is out of bound\n"),"start day must be between 1 and ".concat(this.end))):this.start=Number(t)}},{key:"setEnd",value:function(t){t<this.start||t>u()().daysInMonth()?this.verbose&&console.warn(this.say("end day ".concat(t," is out of bound"))):this.end=Number(t)}},{key:"setY",value:function(t){this.y=Number(t)}},{key:"resizeStart",value:function(t,e,s){var n=this.setInteraction(f.resize);if(n){var a=(null===s||void 0===s?void 0:s.snapToGrid)||!1;this.eventsMeta["resizeStart"]={side:t,snapToGrid:a,startX:e.clientX,start:this.start,end:this.end},this.methodsReferences["resize"]=this.resize.bind(this),window.addEventListener("mousemove",this.methodsReferences["resize"]),window.addEventListener("mouseup",this.resizeEnd.bind(this),{once:!0})}}},{key:"resize",value:function(t){if(this.interactionIs(f.resize)&&this.eventsMeta["resizeStart"]){var e=this.eventsMeta["resizeStart"],s=e.startX,n=e.start,a=e.end,r=e.side,i=e.snapToGrid,o=(t.clientX-s)/m;i&&Math.abs(o)<1||(i&&(o=parseInt(o)),r===h.left?this.setStart(n+o):r===h.right&&this.setEnd(a+o))}}},{key:"resizeEnd",value:function(){if(this.interactionIs(f.resize)){var t=this.eventsMeta["resizeStart"].snapToGrid;t||(this.setStart(Math.round(this.start)),this.setEnd(Math.round(this.end))),window.removeEventListener("mousemove",this.methodsReferences["resize"]),delete this.eventsMeta["resizeStart"],this.setInteraction(f.none)}}},{key:"moveStart",value:function(t,e){this.setInteraction(f.move);var s=(null===e||void 0===e?void 0:e.snapToGrid)||!1;this.eventsMeta["moveStart"]={snapToGrid:s,startX:t.clientX,startY:t.clientY,oldStart:this.start,oldEnd:this.end,oldY:this.y},this.methodsReferences["move"]=this.move.bind(this),window.addEventListener("mousemove",this.methodsReferences["move"]),window.addEventListener("mouseup",this.moveEnd.bind(this),{once:!0})}},{key:"move",value:function(t){if(this.interactionIs(f.move)&&this.eventsMeta["moveStart"]){var e=this.eventsMeta["moveStart"],s=e.startX,n=e.startY,a=e.oldStart,r=e.oldEnd,i=e.oldY,o=e.snapToGrid,c=t.clientX-s,d=t.clientY-n,u=c/m,h=d/l;if(o){var b=Math.abs(u)>=1,v=Math.abs(h)>=1;u=b?parseInt(u):0,h=v?parseInt(h):0}this.setStart(a+u),this.setEnd(r+u),this.setY(i+h)}}},{key:"moveEnd",value:function(){if(this.interactionIs(f.move)){var t=this.eventsMeta["moveStart"].snapToGrid;t||(this.setStart(Math.round(this.start)),this.setEnd(Math.round(this.end)),this.setY(Math.round(this.y))),window.removeEventListener("mousemove",this.methodsReferences["move"]),delete this.eventsMeta["moveStart"],this.setInteraction(f.none)}}},{key:"say",value:function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];return"Task ".concat(this.id," says: ").concat(e.join(" "))}},{key:"toJSON",value:function(){return{id:this.id,name:this.name,start:this.start,end:this.end}}}],[{key:"fromJSON",value:function(e){return new t(e)}}]),t}(),k=s("2f62"),w=Object(y["a"])((function t(e){Object(v["a"])(this,t),this.id=p(),this.name=e.name,this.style=e.style||{}})),T={name:"GanttChart",computed:Object(c["a"])(Object(c["a"])({},Object(k["c"])("ganttChart",{ganttChart:"ganttChart"})),{},{cssVars:function(){return{"--gantt-time-unit-width":"".concat(this.timeline.TIME_UNIT_WIDTH,"px")}},tasks:function(){return this.ganttChart.tasks},resources:function(){return this.ganttChart.resources},timeline:function(){return this.ganttChart.timeline},timelineData:function(){return this.timeline.getTimePeriod()},settings:function(){return this.ganttChart.settings},verbose:{get:function(){return this.settings.verbose},set:function(t){this.setSettings({verbose:t})}},snapToGrid:{get:function(){return this.settings.snapToGrid},set:function(t){this.setSettings({snapToGrid:t})}}}),data:function(){return{SIDES:h,TIME_PERIODS:b,currentMonth:u()().format("MMMM"),currentMonthDays:u()().daysInMonth()}},mounted:function(){var t=this,e=[new g({name:"Task 1",start:5,end:15}),new g({name:"Task 2",start:10,end:20,y:1,style:{backgroundColor:"wheat"}})],s=[new w({name:"Resource 1"})];s.forEach((function(e){return t.addResource(e)})),e.forEach((function(e){e.y>t.resources.length&&(e.y=0),t.addTask(e)}))},methods:Object(c["a"])(Object(c["a"])({},Object(k["b"])("ganttChart",{addTask:"addTask",addResource:"addResource",setSettings:"setSettings"})),{},{taskResize:function(t,e,s){t.resizeStart(e,s,{snapToGrid:this.snapToGrid})},taskMove:function(t,e){t.moveStart(e,{snapToGrid:this.snapToGrid})},newResource:function(){this.addResource(new w({name:"New resource"}))},scale:function(t){if(t.ctrlKey){t.preventDefault();var e=t.deltaY;e>0?this.timeline.changeTimePeriod(1):this.timeline.changeTimePeriod(-1)}}})},M=T,S=(s("7682"),s("2877")),z=Object(S["a"])(M,i,o,!1,null,"58ca32a0",null),D=z.exports,O={name:"App",components:{GanttChart:D}},C=O,Y=(s("5c0b"),Object(S["a"])(C,a,r,!1,null,null,null)),P=Y.exports,_=s("b85c"),x=s("53ca"),R=function(){function t(e){Object(v["a"])(this,t),this.id="gantt-timeline-".concat(p()),this.timePeriod=(null===e||void 0===e?void 0:e.timePeriod)||b.days,this.container=document.getElementById(this.id),this.TIME_UNIT_WIDTH=m,this.year=2022,this.month=1,this.day=22,this.hour=16,this.minute=30}return Object(y["a"])(t,[{key:"containerWidth",get:function(){return this.container.clientWidth}},{key:"containerHeight",get:function(){return this.container.clientHeight}},{key:"containerScrollLeft",get:function(){return this.container.scrollLeft},set:function(t){this.container.scrollLeft=t}},{key:"containerScrollWidth",get:function(){return this.container.scrollWidth}},{key:"getCurrentDate",value:function(){return"".concat(this.year,"/").concat(this.month,"/").concat(this.day," ").concat(this.hour,":").concat(this.minute)}},{key:"getCurrentMoment",value:function(){return u()(this.getCurrentDate(),"YYYY/M/DD HH:mm")}},{key:"changeTimePeriod",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Object.keys(b),s=e.indexOf(this.timePeriod.name),n=b[e[s+t]];n&&this.setTimePeriod(n)}},{key:"setTimePeriod",value:function(t){b[null===t||void 0===t?void 0:t.name]&&(this.timePeriod=t)}},{key:"getTimePeriod",value:function(e){e=e||this.timePeriod,"object"!=Object(x["a"])(e)&&(e={name:e});var s,n=e.startDate,a=e.endDate,r=e.primary.unit||"days",i=e.secondary.unit||"hours",o=e.primary.secondaryPerUnit||1,c=e.primary.format||"MM/YYYY DD",d=e.secondary.format||"HH:mm",h=e.secondary.step||1,f=this.getCurrentMoment(),m=u()(this.getCurrentMoment()).subtract(n.term,n.unit),l=f.add(a.term,a.unit),b=t.getTimeRange(m,l,r),v=[],y=0,j=Object(_["a"])(b);try{for(j.s();!(s=j.n()).done;){var p=s.value,g=p.format(c).toString(),k=this.TIME_UNIT_WIDTH*o;v.push({name:g,width:k,left:y}),y+=k}}catch(D){j.e(D)}finally{j.f()}b=t.getTimeRange(m,l,i,{step:h});var w,T=[],M=Object(_["a"])(b);try{for(M.s();!(w=M.n()).done;){var S=w.value,z=S.format(d).toString();T.push({name:z,width:this.TIME_UNIT_WIDTH})}}catch(D){M.e(D)}finally{M.f()}return{primary:v,secondary:T}}}],[{key:"getTimeRange",value:function(t,e,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t instanceof u.a||(t=u()(t)),e instanceof u.a||(e=u()(e));var a=n.step||1,r=n.format||null,i=n.stringify||!1,o=n.excludeLast||!1,c=e.diff(t,s);if(c<0)return[];o||(c+=1);for(var d=[],h=0;h<c;h+=a){var f=u()(t).add(h,s);r&&(f=f.format(r)),i&&(f=f.toString()),d.push(f)}return d}}]),t}(),E=function(){function t(e){Object(v["a"])(this,t),null!=e&&"object"==Object(x["a"])(e)||(e={});var s={verbose:!1,snapToGrid:!1};this.tasks=e.tasks||[],this.resources=e.resources||[],this.settings=Object.assign(s,e.settings),this.timeline=new R(e.timeline)}return Object(y["a"])(t,[{key:"addTask",value:function(t){t instanceof g?this.tasks.push(t):this.settings.verbose&&console.warn("Task must be an instance of Task class")}},{key:"removeTask",value:function(t){this.tasks=j(this.tasks,t)}},{key:"addResource",value:function(t){t instanceof w?this.resources.push(t):this.settings.verbose&&console.warn("Resource must be an instance of Resource class")}},{key:"removeResource",value:function(t){this.resources=j(this.resources,t)}},{key:"setSettings",value:function(t){for(var e in t)Object.prototype.hasOwnProperty.call(this.settings,e)&&(this.settings[e]=t[e])}}]),t}(),I={namespaced:!0,state:{ganttChart:new E},mutations:{addTask:function(t,e){t.ganttChart.addTask(e)},removeTask:function(t,e){t.ganttChart.removeTask(e)},addResource:function(t,e){t.ganttChart.addResource(e)},removeResource:function(t,e){t.ganttChart.removeResource(e)},setSettings:function(t,e){t.ganttChart.setSettings(e)}},actions:{addTask:function(t,e){var s=t.commit;s("addTask",e)},removeTask:function(t,e){var s=t.commit;s("removeTask",e)},addResource:function(t,e){var s=t.commit;s("addResource",e)},removeResource:function(t,e){var s=t.commit;s("removeResource",e)},setSettings:function(t,e){var s=t.commit;s("setSettings",e)}}};n["a"].use(k["a"]);var G=new k["a"].Store({state:{},mutations:{},actions:{},modules:{ganttChart:I}});n["a"].config.productionTip=!1,new n["a"]({store:G,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"639e":function(t,e,s){},7682:function(t,e,s){"use strict";s("639e")},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.ab51183c.js.map