(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[576],{70296:function(t,e,n){"use strict";function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t,e){a(2,arguments);var n=r(t),i=r(e),o=n.getTime()-i.getTime();return o<0?-1:o>0?1:o}function o(t,e){a(2,arguments);var n=r(t),i=r(e),o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth();return 12*o+s}function s(t,e){a(2,arguments);var n=r(t),s=r(e),l=i(n,s),u=Math.abs(o(n,s));n.setMonth(n.getMonth()-l*u);var c=i(n,s)===-l,d=l*(u-c);return 0===d?0:d}function l(t,e){a(2,arguments);var n=r(t),i=r(e);return n.getTime()-i.getTime()}function u(t,e){a(2,arguments);var n=l(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}n.d(e,{Z:function(){return k}});var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var f={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;a=t.values[l]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function p(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=a.match(o);if(!s)return null;var l,u=s[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(c,(function(t){return t.test(u)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(c,(function(t){return t.test(u)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(u.length)}}}var b,g={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof c[t]?c[t]:1===e?c[t].one:c[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:f,formatRelative:function(t,e,n,a){return h[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(b.matchPattern);if(!r)return null;var i=r[0],o=n.match(b.parsePattern);if(!o)return null;var s=b.valueCallback?b.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function y(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},t)}var v=6e4;function x(t){return t.getTime()%v}function w(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var a=n>0?(v+x(e))%v:x(e);return n*v+a}var _=1440,M=43200;function k(t,e,n){a(2,arguments);var o=n||{},l=o.locale||g;if(!l.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=i(t,e);if(isNaN(c))throw new RangeError("Invalid time value");var d,f,h=y(o);h.addSuffix=Boolean(o.addSuffix),h.comparison=c,c>0?(d=r(e),f=r(t)):(d=r(t),f=r(e));var m,p=u(f,d),b=(w(f)-w(d))/1e3,v=Math.round((p-b)/60);if(v<2)return o.includeSeconds?p<5?l.formatDistance("lessThanXSeconds",5,h):p<10?l.formatDistance("lessThanXSeconds",10,h):p<20?l.formatDistance("lessThanXSeconds",20,h):p<40?l.formatDistance("halfAMinute",null,h):p<60?l.formatDistance("lessThanXMinutes",1,h):l.formatDistance("xMinutes",1,h):0===v?l.formatDistance("lessThanXMinutes",1,h):l.formatDistance("xMinutes",v,h);if(v<45)return l.formatDistance("xMinutes",v,h);if(v<90)return l.formatDistance("aboutXHours",1,h);if(v<_){var x=Math.round(v/60);return l.formatDistance("aboutXHours",x,h)}if(v<2520)return l.formatDistance("xDays",1,h);if(v<M){var k=Math.round(v/_);return l.formatDistance("xDays",k,h)}if(v<86400)return m=Math.round(v/M),l.formatDistance("aboutXMonths",m,h);if((m=s(f,d))<12){var S=Math.round(v/M);return l.formatDistance("xMonths",S,h)}var D=m%12,W=Math.floor(m/12);return D<3?l.formatDistance("aboutXYears",W,h):D<9?l.formatDistance("overXYears",W,h):l.formatDistance("almostXYears",W+1,h)}},66018:function(t,e,n){"use strict";t.exports=n(28875)},28875:function(t,e,n){"use strict";var a,r=n(67294),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e.indexOf(n=i[a])>=0||(r[n]=t[n]);return r}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".rtf{box-sizing:border-box;margin:25px;position:fixed;white-space:nowrap;z-index:9998;padding-left:0;list-style:none}.rtf.open .rtf--mb>*{transform-origin:center center;transform:rotate(315deg);transition:transform .2s ease-in-out}.rtf.open .rtf--mb>ul{list-style:none;margin:0;padding:0}.rtf.open .rtf--ab__c:hover>span,.rtf.open .rtf--ab__c>span.always-show{transition:opacity .2s ease-in-out;opacity:.9}.rtf.open .rtf--ab__c:first-child{transform:translateY(-60px) scale(1);transition-delay:.03s}.rtf.open .rtf--ab__c:first-child.top{transform:translateY(60px) scale(1)}.rtf.open .rtf--ab__c:nth-child(2){transform:translateY(-120px) scale(1);transition-delay:.09s}.rtf.open .rtf--ab__c:nth-child(2).top{transform:translateY(120px) scale(1)}.rtf.open .rtf--ab__c:nth-child(3){transform:translateY(-180px) scale(1);transition-delay:.12s}.rtf.open .rtf--ab__c:nth-child(3).top{transform:translateY(180px) scale(1)}.rtf.open .rtf--ab__c:nth-child(4){transform:translateY(-240px) scale(1);transition-delay:.15s}.rtf.open .rtf--ab__c:nth-child(4).top{transform:translateY(240px) scale(1)}.rtf.open .rtf--ab__c:nth-child(5){transform:translateY(-300px) scale(1);transition-delay:.18s}.rtf.open .rtf--ab__c:nth-child(5).top{transform:translateY(300px) scale(1)}.rtf.open .rtf--ab__c:nth-child(6){transform:translateY(-360px) scale(1);transition-delay:.21s}.rtf.open .rtf--ab__c:nth-child(6).top{transform:translateY(360px) scale(1)}.rtf--mb__c{padding:25px;margin:-25px}.rtf--mb__c :last-child{margin-bottom:0}.rtf--mb__c:hover>span,.rtf--mb__c>span.always-show{transition:opacity .2s ease-in-out;opacity:.9}.rtf--mb__c>span{opacity:0;transition:opacity .2s ease-in-out;position:absolute;top:50%;transform:translateY(-50%);margin-right:6px;margin-left:4px;background:rgba(0,0,0,.75);padding:2px 4px;border-radius:2px;color:#fff;font-size:13px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)}.rtf--mb__c>span.right{right:100%}.rtf--mb{height:56px;width:56px;z-index:9999;background-color:#666;display:inline-flex;justify-content:center;align-items:center;position:relative;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);cursor:pointer;outline:none;padding:0;-webkit-user-drag:none;font-weight:700;color:#f1f1f1;font-size:18px}.rtf--ab__c,.rtf--mb>*{transition:transform .2s ease-in-out}.rtf--ab__c{display:block;position:absolute;top:0;right:1px;padding:10px 0;margin:-10px 0}.rtf--ab__c>span{opacity:0;transition:opacity .2s ease-in-out;position:absolute;top:50%;transform:translateY(-50%);margin-right:6px;background:rgba(0,0,0,.75);padding:2px 4px;border-radius:2px;color:#fff;font-size:13px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)}.rtf--ab__c>span.right{right:100%}.rtf--ab__c:first-child{transform:translateY(-60px) scale(0);transition-delay:.21s}.rtf--ab__c:first-child.top{transform:translateY(60px) scale(0)}.rtf--ab__c:nth-child(2){transform:translateY(-120px) scale(0);transition-delay:.18s}.rtf--ab__c:nth-child(2).top{transform:translateY(120px) scale(0)}.rtf--ab__c:nth-child(3){transform:translateY(-180px) scale(0);transition-delay:.15s}.rtf--ab__c:nth-child(3).top{transform:translateY(180px) scale(0)}.rtf--ab__c:nth-child(4){transform:translateY(-240px) scale(0);transition-delay:.12s}.rtf--ab__c:nth-child(4).top{transform:translateY(240px) scale(0)}.rtf--ab__c:nth-child(5){transform:translateY(-300px) scale(0);transition-delay:.09s}.rtf--ab__c:nth-child(5).top{transform:translateY(300px) scale(0)}.rtf--ab__c:nth-child(6){transform:translateY(-360px) scale(0);transition-delay:.03s}.rtf--ab__c:nth-child(6).top{transform:translateY(360px) scale(0)}.rtf--ab{height:48px;width:48px;background-color:#aaa;display:inline-flex;justify-content:center;align-items:center;position:relative;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);cursor:pointer;outline:none;padding:0;-webkit-user-drag:none;font-weight:700;color:#f1f1f1;margin-right:4px;font-size:16px;z-index:10000}");var l=function(t){var e=t.children,n=s(t,["children"]);return i.createElement("button",Object.assign({type:"button",className:"rtf--mb"},n),e)},u={bottom:24,right:24};e.Action=function(t){var e=t.children,n=s(t,["children"]);return i.createElement("button",Object.assign({type:"button"},n,{className:"rtf--ab"}),e)},e.Fab=function(t){var e=t.event,n=void 0===e?"hover":e,a=t.style,c=void 0===a?u:a,d=t.alwaysShowTitle,f=void 0!==d&&d,h=t.children,m=t.icon,p=t.mainButtonStyles,b=t.onClick,g=t.text,y=s(t,["event","style","alwaysShowTitle","children","icon","mainButtonStyles","onClick","text"]),v=r.useState(!1),x=v[0],w=v[1],_=f||!x,M=function(){return w(!0)},k=function(){return w(!1)};return i.createElement("ul",Object.assign({onMouseEnter:function(){return"hover"===n&&M()},onMouseLeave:function(){return"hover"===n&&k()},className:"rtf "+(x?"open":"closed"),"data-testid":"fab",style:c},y),i.createElement("li",{className:"rtf--mb__c"},i.createElement(l,{onClick:function(t){return b?b(t):(t.persist(),"click"===n?x?k():M():null)},style:p,"data-testid":"main-button",role:"button","aria-label":"Floating menu",tabIndex:0},m),g&&i.createElement("span",{className:("right"in c?"right":"")+" "+(f?"always-show":""),"aria-hidden":_},g),i.createElement("ul",null,i.Children.map(h,(function(t,e){return i.isValidElement(t)?i.createElement("li",{className:"rtf--ab__c "+("top"in c?"top":"")},i.cloneElement(t,o({"data-testid":"action-button-"+e,"aria-label":t.props.text||"Menu button "+(e+1),"aria-hidden":_,tabIndex:x?0:-1},t.props,{onClick:function(e){t.props.onClick&&function(t,e){t.persist(),w(!1),setTimeout((function(){e(t)}),1)}(e,t.props.onClick)}})),t.props.text&&i.createElement("span",{className:("right"in c?"right":"")+" "+(f?"always-show":""),"aria-hidden":_},t.props.text)):null})))))}}}]);
//# sourceMappingURL=576.c632403cfb649584e271.js.map