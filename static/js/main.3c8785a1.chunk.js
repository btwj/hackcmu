(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{24:function(e,a,t){e.exports=t(34)},29:function(e,a,t){},3:function(e,a,t){e.exports={input:"ClassForm_input__2MR32",selectedClass:"ClassForm_selectedClass__1hH6b",delete:"ClassForm_delete__fzcDn",classHeader:"ClassForm_classHeader__1-7mu",section:"ClassForm_section__1clSM",courseNumber:"ClassForm_courseNumber__1EVxv",dayTime:"ClassForm_dayTime__3Y4kj",courseName:"ClassForm_courseName__j1Wxn",timeInfo:"ClassForm_timeInfo__hezp9",extraTime:"ClassForm_extraTime__3BEYe",lecture:"ClassForm_lecture__3MRMn"}},30:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),s=t.n(c),o=(t(29),t(30),t(2)),l=t(1),i=t(13),u=t(6),m=t.n(u),d=t(10),f=t.n(d),v=t(19),h=t(3),p=t.n(h),y=t(11),_=t(4),E=t(15),b=Object(E.a)((function(e,a){return{classes:[],addClass:function(t){var n,r=a().classes,c=Object(l.a)(r);try{for(c.s();!(n=c.n()).done;){if(n.value.courseData.courseID==t.courseData.courseID)return}}catch(s){c.e(s)}finally{c.f()}e((function(e){return{classes:[].concat(Object(_.a)(e.classes),[t])}}))},deleteClass:function(a){e((function(e){return{classes:e.classes.filter((function(e){return e.courseData.courseID!=a}))}}))},updateLecture:function(t,n){var r=a().classes,c=r.filter((function(e){return e.courseData.courseID==t}))[0];console.log(c),c.lecture=n,e((function(e){return{classes:r}}))}}})),g=Object(E.a)((function(e,a){return{fceData:{},getFceData:function(){var t=Object(v.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0==Object.keys(a().fceData).length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("https://cmu-student-government.github.io/cmunit/fce.json",{method:"GET"});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,e({fceData:r});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}})),N=function(e){var a=e.split(":"),t=Object(o.a)(a,2),n=t[0],r=t[1];return 60*(n=parseInt(n))+(r=parseInt(r))},k=function(e){var a=parseInt(e.slice(0,2)),t=parseInt(e.slice(3,5));return"PM"==e.slice(5)&&12!=a&&(a+=12),60*a+t},T=function(e){var a=Math.floor(e/60),t=e%60,n=(a<10?"0":"")+a;return"24"==n&&(n="00"),n+":"+((t<10?"0":"")+t)},j=["","M","T","W","R","F","S","U"],C=function(e,a,t){var n,r="",c=Object(l.a)(e.sort());try{for(c.s();!(n=c.n()).done;){var s=n.value;r+=j[s]}}catch(o){c.e(o)}finally{c.f()}return r+=" ",r+=T(a),r+="\u2013",r+=T(t)},w=function(e){var a=b((function(e){return e.deleteClass})),t=b((function(e){return e.updateLecture}));return r.a.createElement("div",{className:p.a.selectedClass},r.a.createElement("div",{className:p.a.delete,onClick:function(){console.log("deleting",e.courseNumber),a(e.courseNumber)}},r.a.createElement(y.b,null)),r.a.createElement("div",null,r.a.createElement("div",{className:p.a.classHeader},r.a.createElement("span",{className:p.a.courseNumber},e.courseNumber),e.section?r.a.createElement("span",{className:p.a.section},e.section):"",r.a.createElement("span",{className:p.a.courseName},e.courseName),r.a.createElement("div",{className:p.a.dayTime},r.a.createElement("select",{className:p.a.lecture,value:e.lecture,onChange:function(a){console.log("selecting",a.target.value),t(e.courseNumber,a.target.value)}},e.lectureDayTimes.map((function(e){return r.a.createElement("option",{value:e.idx},e.name," \u2013 ",e.dayTimeStr)}))),r.a.createElement("div",{className:p.a.recitation},e.dayTime))),r.a.createElement("div",{className:p.a.timeInfo},r.a.createElement("div",{className:p.a.units},e.units," units"),r.a.createElement("div",{className:p.a.extraTime},e.extraTime," extra hours"))))},D=function(e){var a=Object(n.useRef)(),t=b((function(e){return e.classes})),c=b((function(e){return e.addClass})),s=g((function(e){return e.fceData})),i=g((function(e){return e.getFceData}));i();var u=function(){var e=Object(v.a)(f.a.mark((function e(){var n,r,u,m,d,v,h,p,y,_,E,b,g,N,T,j,w,D,O,I,x,M,F,H,S,W,R,q,A,B,J,L,G,z,P;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.current.value,a.current.value="",r=n.split(" "),u=Object(o.a)(r,2),m=u[0],d=u[1],v=Object(l.a)(t),e.prev=4,v.s();case 6:if((h=v.n()).done){e.next=12;break}if(h.value.courseData.courseID!=m){e.next=10;break}return e.abrupt("return");case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),v.e(e.t0);case 17:return e.prev=17,v.f(),e.finish(17);case 20:return e.prev=20,e.next=23,Promise.all([fetch("https://apis.scottylabs.org/course/courses/courseID/".concat(m),{method:"GET"}),i()]);case 23:return p=e.sent,y=Object(o.a)(p,2),_=y[0],y[1],e.next=29,_.json();case 29:E=e.sent,b=!1,g=E.lectures,N=[],T=0,j=Object(l.a)(g.entries());try{for(j.s();!(w=j.n()).done;)D=Object(o.a)(w.value,2),O=D[0],I=D[1],x=k(I.times[0].begin),M=k(I.times[0].end),T=I.times[0].days.length*(M-x),N.push({idx:O,name:I.name,dayTimeStr:C(I.times[0].days,x,M)})}catch(f){j.e(f)}finally{j.f()}if(console.log("lecture time",T),F=0,0==E.sections.length)(H=m.replace("-",""))in s?(S=60*s[H].hrs-T,W=Math.floor(S/60/3*2),c({courseData:E,dayTime:"",lecture:0,extraTime:W,lectureTime:T,lectureDayTimes:N,fceData:s[H]})):c({courseData:E,dayTime:"",extraTime:0,lecture:0,lectureTime:T,lectureDayTimes:N});else{R=Object(l.a)(E.sections);try{for(R.s();!(q=R.n()).done;)(A=q.value).name==d&&(b=!0,B=m.replace("-",""),J=k(A.times[0].begin),L=k(A.times[0].end),G=A.times.map((function(e){return e.days})).flat(1),F=G.length*(L-J),B in s?(z=60*s[B].hrs-(F+T),P=Math.floor(z/60/3*2),c({courseData:E,sectionData:A,dayTime:C(G,J,L),section:A.name,lecture:0,extraTime:P,lectureTime:T,lectureDayTimes:N,fceData:s[B]})):c({courseData:E,dayTime:C(G,J,L),section:A.name,extraTime:0,lecture:0,lectureTime:T,lectureDayTimes:N}))}catch(f){R.e(f)}finally{R.f()}}b||console.log("no section found"),e.next=45;break;case 42:e.prev=42,e.t1=e.catch(20),console.log(e.t1);case 45:case"end":return e.stop()}}),e,null,[[4,14,17,20],[20,42]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:p.a.input},r.a.createElement("input",{placeholder:"Number & Section, e.g. 01-234 B, or just Number if only lectures",ref:a}),r.a.createElement("div",{onClick:u},r.a.createElement(y.a,null))),r.a.createElement("h4",null,"Added Classes (",t.length,")"),r.a.createElement("div",{className:p.a.selected},t.map((function(e){var a=e.courseData,t=e.lectureDayTimes,n=e.section,c=e.dayTime,s=e.extraTime;return r.a.createElement(w,{courseNumber:a.courseID,section:n,courseName:a.name,key:a.courseID,lectureDayTimes:t,dayTime:c,units:a.units,extraTime:s})}))))},O=t(5),I=t.n(O),x=t(20),M=Object(E.a)((function(e,a){return{commitmentId:0,commitments:[],addCommitment:function(t){var n=N(t.toStr),r=N(t.fromStr),c=(n-r)/60,s=Object(x.a)({},t,{id:a().commitmentId,hours:c,from:r,to:n,dayTime:C([t.day],r,n)});console.log("adding commitment",s),e((function(e){return{commitmentId:e.commitmentId+1,commitments:[].concat(Object(_.a)(e.commitments),[s])}}))},deleteCommitment:function(a){e((function(e){return{commitments:e.commitments.filter((function(e){return e.id!=a}))}}))},taskId:0,tasks:[],addTask:function(a){e((function(e){return{id:e.taskId,taskId:e.taskId+1,tasks:[].concat(Object(_.a)(e.tasks),[a])}}))},deleteTask:function(a){e((function(e){return{tasks:e.tasks.filter((function(e){return e.id!=a}))}}))},calendarData:[[],[],[],[],[],[],[]],setCalendarData:function(a){e((function(e){return{calendarData:a}}))},sleepTime:1320,wakeTime:360,setSleepTime:function(a){e((function(e){return{sleepTime:a}}))},setWakeTime:function(a){e((function(e){return{wakeTime:a}}))}}})),F=function(e){var a=M((function(e){return e.deleteCommitment}));return r.a.createElement("div",{className:I.a.commitment},r.a.createElement("div",{className:I.a.delete,onClick:function(){console.log("deleting commitment",e.id),a(e.id)}},r.a.createElement(y.b,null)),r.a.createElement("div",null,r.a.createElement("div",{className:I.a.header},r.a.createElement("span",{className:I.a.name},e.name),r.a.createElement("div",{className:I.a.dayTime},e.dayTime)),r.a.createElement("div",{className:I.a.timeInfo},e.hours," hours")))},H=function(e){var a=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),o=M((function(e){return e.commitments})),l=M((function(e){return e.addCommitment}));return r.a.createElement("div",null,r.a.createElement("div",{className:I.a.timeInput},r.a.createElement(i.a,{className:I.a.select,options:[{value:0,label:"Monday"},{value:1,label:"Tuesday"},{value:2,label:"Wednesday"},{value:3,label:"Thursday"},{value:4,label:"Friday"},{value:5,label:"Saturday"},{value:6,label:"Sunday"}],ref:s}),r.a.createElement("label",null,"from"),r.a.createElement("input",{ref:t,className:I.a.from,type:"time",step:"1800"}),r.a.createElement("label",null,"to"),r.a.createElement("input",{ref:c,className:I.a.to,type:"time",step:"1800"})),r.a.createElement("div",{className:I.a.input},r.a.createElement("input",{placeholder:"e.g. Club GBM",ref:a}),r.a.createElement("div",{className:I.a.add,onClick:function(){try{var e=a.current.value,n=t.current.value,r=c.current.value,o=s.current.state.value.value;t.current.value="",c.current.value="",a.current.value="",l({name:e,fromStr:n,toStr:r,day:o})}catch(i){}}},r.a.createElement(y.a,null))),r.a.createElement("h4",null,"Added Commitments (",o.length,")"),r.a.createElement("div",{className:I.a.selected},o.map((function(e){return r.a.createElement(F,{name:e.name,dayTime:e.dayTime,hours:e.hours,key:e.id,id:e.id})}))))},S=t(9),W=t.n(S),R=function(e){var a=M((function(e){return e.deleteTask}));return r.a.createElement("div",{className:W.a.task},r.a.createElement("div",{className:W.a.delete,onClick:function(){console.log("deleting commitment",e.id),a(e.id)}},r.a.createElement(y.b,null)),r.a.createElement("div",null,r.a.createElement("div",{className:W.a.header},r.a.createElement("span",{className:W.a.name},e.name)),r.a.createElement("div",{className:W.a.timeInfo},e.hours," hours")))},q=function(e){var a=Object(n.useRef)(),t=Object(n.useRef)(),c=M((function(e){return e.tasks})),s=M((function(e){return e.addTask}));return r.a.createElement("div",null,r.a.createElement("div",{className:W.a.input},r.a.createElement("input",{placeholder:"e.g. Exercise",ref:a,className:W.a.inputName}),r.a.createElement("input",{placeholder:"hours per week",ref:t,type:"number",className:W.a.inputHours,min:"0",step:"0.25"}),r.a.createElement("div",{className:W.a.add,onClick:function(){var e=a.current.value,n=t.current.value;a.current.value="",t.current.value="",s({name:e,hours:n})}},r.a.createElement(y.a,null))),r.a.createElement("h4",null,"Added Tasks (",c.length,")"),r.a.createElement("div",{className:W.a.selected},c.map((function(e){return r.a.createElement(R,{name:e.name,hours:e.hours,key:e.id,id:e.id})}))))},A=function e(a){return a.end-a.start<=30?[]:a.end-a.start<=90?[a]:[{start:a.start,end:a.start+60}].concat(Object(_.a)(e({start:a.start+60,end:a.end})))},B=function(e,a,t,n,r,c){var s,i=0,u=function(e,a,t){var n={};return a.map((function(a,t){var r=e[t];a in n||(n[a]=0),n[a]+=r.end-r.start})),n}(a,t),m=Object(l.a)(n.entries());try{for(m.s();!(s=m.n()).done;){var d=Object(o.a)(s.value,2),f=d[0],v=d[1],h=v.mins;"rest"!=v.info.type&&(f in u?u[f]<h?i+=10*Math.pow(u[f]-h,2):i+=Math.pow(u[f]-h,2):i+=50*Math.pow(h,2))}}catch(B){m.e(B)}finally{m.f()}c&&console.log(i);var p,y=0,_=0,E=0,b=new Array(n.length).fill(0),g=Object(l.a)(t.entries());try{for(g.s();!(p=g.n()).done;){var N=Object(o.a)(p.value,2),k=N[0],T=N[1],j=a[k];if(j.day!=_){b[E]+=1,_=j.day;var C,w=Object(l.a)(b.entries());try{for(w.s();!(C=w.n()).done;){var D=Object(o.a)(C.value,2),O=(D[0],D[1]);O>1&&(i+=10*Math.pow(20*O,2))}}catch(B){w.e(B)}finally{w.f()}E=T,b=new Array(n.length).fill(0)}else T==E||(b[E]+=1,E=T)}}catch(B){g.e(B)}finally{g.f()}c&&console.log(i),b[E]+=1;var I,x=Object(l.a)(b.entries());try{for(x.s();!(I=x.n()).done;){var M=Object(o.a)(I.value,2),F=(M[0],M[1]);F>1&&(i+=10*Math.pow(20*F,2))}}catch(B){x.e(B)}finally{x.f()}y=0,_=0;var H,S=Object(l.a)(t.entries());try{for(S.s();!(H=S.n()).done;){var W=Object(o.a)(H.value,2),R=W[0],q=W[1],A=a[R];A.day>=5&&"study"==n[q].info.type&&(i+=Math.pow(A.end-A.start,2)),"night"==r&&A.start<720&&"study"==n[q].info.type&&(i+=Math.pow(A.end-A.start,2)),"day"==r&&A.start>1200&&"study"==n[q].info.type&&(i+=Math.pow(A.end-A.start,2)),A.start<480&&"rest"!=n[q].info.type?i+=Math.pow(A.start-480,2):A.start>1320&&"rest"!=n[q].info.type&&(i+=Math.pow(A.start-1260,2)),_!=A.day&&(y=0,_=A.day),"study"==n[q].info.type?(y+=A.end-A.start,"study"==n[q].info.type&&y>=150&&(i+=10*Math.pow(y,2))):y=0}}catch(B){S.e(B)}finally{S.f()}return c&&console.log(i),i},J=function(e,a){return Math.random()<a?0:Math.floor(Math.random()*e.length)},L=function(e,a,t){var n=Math.floor(Math.random()*e.length);if(Math.random()<.5)e[n]=J(a,t);else{var r=Math.floor(Math.random()*e.length),c=e[n];e[n]=e[r],e[r]=c}},G=function(e,a,t){return e.map((function(e){return J(a,t)}))},z=function(e){var a,t=0,n=Object(l.a)(e);try{for(n.s();!(a=n.n()).done;){var r,c=a.value,s=Object(l.a)(c);try{for(s.s();!(r=s.n()).done;){var o=r.value;o.to>t&&(t=o.to)}}catch(i){s.e(i)}finally{s.f()}}}catch(i){n.e(i)}finally{n.f()}return t},P=function(e){var a=b((function(e){return e.classes})),t=M((function(e){return e.tasks})),c=M((function(e){return e.commitments})),s=M((function(e){return e.setCalendarData})),u=M((function(e){return e.setSleepTime})),d=M((function(e){return e.setWakeTime})),f=Object(n.useRef)(),v=function(){return{selectedClasses:a,tasks:t,commitments:c}};return r.a.createElement("div",{className:m.a.form},r.a.createElement("div",{className:m.a.header},r.a.createElement("div",{className:m.a.quote},"\u201cI feel the need; the need for ",r.a.createElement("strong",null,"sleep"),".\u201d"),r.a.createElement("h1",null,"\ud83d\uddd3\ufe0f CMU Schedule Helper"),r.a.createElement("p",null,"To all CMU students, we know the pain of scheduling, especially with remote and online classes being the norm now due to COVID-19. This schedule maker helps you make a well-balanced schedule: classes, study, meals, relaxation and at least 8 hours of sleep every day, so you can make the most of your time."),r.a.createElement("p",null,"Let's get started with a few questions.")),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.question},"Are you a day or night person?"),r.a.createElement("p",null,"We'll use this to plan your relaxation and work time slots so you can be the most productive!"),r.a.createElement(i.a,{options:[{value:"day",label:"\u2600\ufe0f Day"},{value:"night",label:"\ud83c\udf19 Night"}],ref:f})),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.question},"What classes are you taking?"),r.a.createElement("p",null,"We'll automatically fill in your lecture and recitation times, and use FCE data to predict how much study time you'll need."),r.a.createElement(D,null)),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.question},"What fixed commitments do you have?"),r.a.createElement("p",null,"This could be meetings, club sessions or other commitments that recur every week."),r.a.createElement(H,null)),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.question},"What else do you need to get done each week?"),r.a.createElement("p",null,"Just put things you'd like to dedicate some time to each week, like practicing an instrument or exercising."),r.a.createElement(q,null)),r.a.createElement("div",{className:m.a.button,onClick:function(){var e,a,t,n=null===(e=f.current)||void 0===e||null===(a=e.state)||void 0===a||null===(t=a.value)||void 0===t?void 0:t.value;void 0===n&&console.log("no type");for(var r=v(),c=r.selectedClasses,i=r.tasks,m=r.commitments,h=[],p=[{name:"Rest",info:{type:"rest"}}],y=0;y<7;y++)h.push([]);console.log("selectedClasses",c),console.log("tasks",i),console.log("commitments",m);var E,b=Object(l.a)(c);try{for(b.s();!(E=b.n()).done;){var g=E.value;if("sectionData"in g){var N,T=Object(l.a)(g.sectionData.times);try{for(T.s();!(N=T.n()).done;){var j=N.value,C=k(j.begin),w=k(j.end),D=j.days;console.log(C,w,D);var O,I=Object(l.a)(D);try{for(I.s();!(O=I.n()).done;){h[O.value-1].push({data:g,info:{type:"recitation",course:g.courseData.courseID},name:"".concat(g.courseData.courseID," ").concat(g.section),from:C,to:w})}}catch(Ne){I.e(Ne)}finally{I.f()}}}catch(Ne){T.e(Ne)}finally{T.f()}}var M,F=g.courseData.lectures[g.lecture],H=Object(l.a)(F.times);try{for(H.s();!(M=H.n()).done;){var S,W=M.value,R=k(W.begin),q=k(W.end),J=Object(l.a)(W.days);try{for(J.s();!(S=J.n()).done;){h[S.value-1].push({data:g,info:{type:"lecture",course:g.courseData.courseID},name:"".concat(g.courseData.courseID," ").concat(F.name),from:R,to:q})}}catch(Ne){J.e(Ne)}finally{J.f()}}}catch(Ne){H.e(Ne)}finally{H.f()}"extraTime"in g&&0!=g.extraTime&&p.push({info:{type:"study",course:g.courseData.courseID},name:"".concat(g.courseData.courseID," HW"),mins:60*g.extraTime})}}catch(Ne){b.e(Ne)}finally{b.f()}var P,V=Object(l.a)(m);try{for(V.s();!(P=V.n()).done;){var U=P.value;h[U.day].push({data:U,info:{type:"commitment",id:U.id},name:U.name,from:U.from,to:U.to})}}catch(Ne){V.e(Ne)}finally{V.f()}var Y,X=Object(l.a)(i);try{for(X.s();!(Y=X.n()).done;){var Z=Y.value;p.push({name:Z.name,mins:60*Z.hours,info:{type:"others"}})}}catch(Ne){X.e(Ne)}finally{X.f()}s(h),console.log("unfixed",p);var K=function(e,a){var t=1,n=0,r=z(e),c=z(e);return"day"==a?n=480-(1440-(t=r<=1290?1320:r+30)):t=c>=540?(n=510)-480:(n=c-30)>=510?n-480:(1410-(480-n))%1440,t<720&&(t=1440),t<1320&&(t=1320),n<0&&(n=360),[t,n]}(h,n),Q=Object(o.a)(K,2),$=Q[0],ee=Q[1];console.log("sleep",$-30,"wake",ee+30),d(ee),u($);var ae=function(e){var a=[],t=[];return e.map((function(e,n){var r=Object(_.a)(e).sort((function(e,a){return Math.pow(e.start-720,2)-Math.pow(a.start-720,2)}))[0],c=Object(_.a)(e).sort((function(e,a){return Math.pow(e.start-1080,2)-Math.pow(a.start-1080,2)}))[0];a.push([r,c]),t=t.concat(e.filter((function(e){return e.start!=c.start&&e.start!=r.start})).map((function(e){return Object(x.a)({},e,{day:n})})))})),[a,t]}(function(e,a,t){var n,r=Object(l.a)(e);try{for(r.s();!(n=r.n()).done;){n.value.sort((function(e,a){return e.from-a.from}))}}catch(Ne){r.e(Ne)}finally{r.f()}return e.map((function(e,n){var r,c=a,s=[],o=Object(l.a)(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.from-c<=20?c=i.to:(s.push({start:c,end:i.from}),c=i.to)}}catch(Ne){o.e(Ne)}finally{o.f()}s.push({start:c,end:t});for(var u=[],m=0,d=s;m<d.length;m++){var f=d[m];u=u.concat(A(f))}return u}))}(h,ee+30,$-30)),te=Object(o.a)(ae,2),ne=te[0],re=te[1],ce=function(e,a,t,n){var r,c=0,s=0,o=Object(l.a)(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;"mins"in i&&(s+=i.mins)}}catch(Ne){o.e(Ne)}finally{o.f()}var u,m=Object(l.a)(a);try{for(m.s();!(u=m.n()).done;){var d=u.value;c+=d.end-d.start}}catch(Ne){m.e(Ne)}finally{m.f()}var f=1-1.5*s/c;console.log("rest_chance",f);for(var v=G(a,t,f),h=B(0,a,v,t,n),p=0;p<1;p++)for(var y=G(a,t,f),E=0;E<5e4;E++){var b=B(0,a,y,t,n);b<h&&(console.log("new best",h,v,y),v=Object(_.a)(y),h=b),y=Object(_.a)(v);for(var g=Math.floor(10*Math.random())+1,N=0;N<g;N++)L(y,t,f)}return[Object(_.a)(v),h]}(0,re,p,n),se=Object(o.a)(ce,2),oe=se[0],le=se[1];console.log(B(0,re,oe,p,n,!0));var ie=function(e,a){var t,n=0,r=e[0],c=a[0].start,s=a[0].end,i=[],u=[],m=!1,d=Object(l.a)(a.entries());try{for(d.s();!(t=d.n()).done;){var f=Object(o.a)(t.value,2),v=f[0],h=f[1],p=e[v];(m=r==p&&h.start==s&&n==h.day)?s=h.end:(i.push({day:n,start:c,end:s}),u.push(r),c=h.start,s=h.end,r=p,n=h.day)}}catch(Ne){d.e(Ne)}finally{d.f()}return m&&(i.push({day:n,start:c,end:s}),u.push(r)),[u,i]}(oe,re),ue=Object(o.a)(ie,2);oe=ue[0],re=ue[1];var me,de=Object(l.a)(ne.entries());try{for(de.s();!(me=de.n()).done;){var fe=Object(o.a)(me.value,2),ve=fe[0],he=fe[1];h[ve].push({info:{type:"meal"},name:"Lunch",from:he[0].start,to:he[0].end}),h[ve].push({info:{type:"meal"},name:"Dinner",from:he[1].start,to:he[1].end})}}catch(Ne){de.e(Ne)}finally{de.f()}var pe,ye=Object(l.a)(oe.entries());try{for(ye.s();!(pe=ye.n()).done;){var _e=Object(o.a)(pe.value,2),Ee=_e[0],be=_e[1],ge=re[Ee];"rest"!=p[be].info.type&&h[ge.day].push({info:p[be].info,name:p[be].name,from:ge.start,to:ge.end})}}catch(Ne){ye.e(Ne)}finally{ye.f()}console.log(h),s(h),console.log(le)}},"Generate a Schedule \u2193"))},V=t(7),U=t.n(V),Y=t(18),X=t.n(Y),Z=function(e){for(var a=[],t=b((function(e){return e.classes})),n=M((function(e){return e.tasks})),c={},s={},o=0;o<t.length;o++)c[t[o].courseData.courseID]=new X.a([360*o/t.length,50,70]);for(o=0;o<n.length;o++)s[n[o].name]=new X.a([360*o/n.length+100,20,50]);for(var l=240;l<1560;l+=120)a.push(r.a.createElement("span",null,T(l)));return r.a.createElement("div",{className:U.a.calendar},r.a.createElement("div",{className:U.a.times},a),r.a.createElement("div",{className:U.a.right},e.data.map((function(a,t){return r.a.createElement("div",{className:U.a.calendarItems},r.a.createElement("div",{className:U.a.dotw},j[t+1]),r.a.createElement("div",{className:U.a.dayItems},r.a.createElement("div",{className:U.a.wakeItem,style:{bottom:"".concat(100-(e.wakeTime-240)/1320*100,"%")}},3==t?T(e.wakeTime):""),r.a.createElement("div",{className:U.a.sleepItem,style:{top:"".concat((e.sleepTime-240)/1320*100,"%")}},3==t?T(e.sleepTime):""),a.map((function(e){var a="grey";return["lecture","recitation","study"].includes(e.info.type)?(a=new X.a(c[e.info.course]),"recitation"==e.info.type&&(a.l+=20),"study"==e.info.type&&(a.s+=20),a=a.getHex()):"meal"==e.info.type?a="#ddd":"others"==e.info.type&&(a=(a=new X.a(s[e.name])).getHex()),r.a.createElement("div",{className:U.a.item,style:{top:"".concat((e.from-240)/1320*100,"%"),height:"".concat((e.to-e.from)/1320*100-.5,"%"),backgroundColor:a,color:"others"==e.info.type?"white":"black"}},r.a.createElement("div",{className:U.a.itemName},e.name),r.a.createElement("div",{className:U.a.timeInfo},T(e.from)+" \u2013 "+T(e.to)))}))))}))))},K=t(8),Q=t.n(K),$=function(e){return r.a.createElement("div",{className:Q.a.explanation},r.a.createElement("div",{className:Q.a.header},r.a.createElement("h1",null,"How was this generated?"),r.a.createElement("p",null,"We use a few different heuristics to plan a schedule. Remember, computers can be dumb too. Adjust the schedule to suit your needs!")),r.a.createElement("div",{className:Q.a.card},r.a.createElement("h1",{className:Q.a.cardHeader},"Consistent Sleep Schedule"),r.a.createElement("p",null,"We generate a schedule with a consistent sleep/wake time, and with at least eight hours of sleep.")),r.a.createElement("div",{className:Q.a.card},r.a.createElement("h1",{className:Q.a.cardHeader},"Study Breaks"),r.a.createElement("p",null,"We minimise back-to-back study sessions so that your productivity remains high.")),r.a.createElement("div",{className:Q.a.card},r.a.createElement("h1",{className:Q.a.cardHeader},"Productive Studying"),r.a.createElement("p",null,"Based on whether you are a day or night person, we prioritise placing study sessions either in the day or night.")),r.a.createElement("div",{className:Q.a.card},r.a.createElement("h1",{className:Q.a.cardHeader},"Better Weekends"),r.a.createElement("p",null,"Aim to have a lighter workload on the weekends.")),r.a.createElement("div",{className:Q.a.footer},r.a.createElement("p",null,"Made for HackCMU 2020.")))};var ee=function(){var e=M((function(e){return e.calendarData})),a=M((function(e){return e.sleepTime})),t=M((function(e){return e.wakeTime}));return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(Z,{data:e,wakeTime:t,sleepTime:a}),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports={timeInput:"CommitmentForm_timeInput__1fB42",select:"CommitmentForm_select__271DD",input:"CommitmentForm_input__1nCCH",add:"CommitmentForm_add__21p3A",commitment:"CommitmentForm_commitment__3LCTd",delete:"CommitmentForm_delete__1Ers1",header:"CommitmentForm_header__2v1aL",dayTime:"CommitmentForm_dayTime__3VQKM",timeInfo:"CommitmentForm_timeInfo__Welsx"}},6:function(e,a,t){e.exports={form:"Form_form__L3m-E",header:"Form_header__1XDMy",quote:"Form_quote__11Kw1",card:"Form_card__29Ilx",question:"Form_question__waxFX",button:"Form_button__-gZDD"}},7:function(e,a,t){e.exports={calendar:"Calendar_calendar__3jvP9",times:"Calendar_times__2Hjdk",calendarItems:"Calendar_calendarItems__6h0nS",dotw:"Calendar_dotw__3sYDA",dayItems:"Calendar_dayItems__2WZJe",wakeItem:"Calendar_wakeItem__2eyDn",sleepItem:"Calendar_sleepItem__3ECg7",item:"Calendar_item__3cfDJ",timeInfo:"Calendar_timeInfo__3YTOB",itemName:"Calendar_itemName__2oiz_",right:"Calendar_right__rgHpW"}},8:function(e,a,t){e.exports={explanation:"CalendarExplanation_explanation__FzoiX",header:"CalendarExplanation_header__2jG5D",card:"CalendarExplanation_card__LC9qN",cardHeader:"CalendarExplanation_cardHeader__1JE7I",footer:"CalendarExplanation_footer__21GPa"}},9:function(e,a,t){e.exports={input:"TaskForm_input__224G7",inputName:"TaskForm_inputName__noQZu",inputHours:"TaskForm_inputHours__16VnN",task:"TaskForm_task__7rb-J",delete:"TaskForm_delete__lakFv",header:"TaskForm_header__F5IJa",timeInfo:"TaskForm_timeInfo__jVz2v"}}},[[24,1,2]]]);
//# sourceMappingURL=main.3c8785a1.chunk.js.map