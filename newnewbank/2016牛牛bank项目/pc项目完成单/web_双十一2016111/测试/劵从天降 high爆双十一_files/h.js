(function(){var h={},mt={},c={id:"d2e2acd3dca23a5a68c9fdfbcaac24c1",dm:["newnewbank.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,w=!1;mt.h={};mt.h.ya=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.wa=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Aa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,e){var d;e.G&&(d=new Date,d.setTime(d.getTime()+e.G));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Ra?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.o={};mt.o.ia=function(a){return document.getElementById(a)};mt.o.La=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};
(mt.o.U=function(){function a(){if(!a.A){a.A=s;for(var b=0,e=d.length;b<e;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var e=w,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,w);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=s,"complete"===document.readyState)a.A=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=w;try{d=window.frameElement==t}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.A?b():d.push(b)}}()).A=w;mt.event={};mt.event.c=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],k=d.length,n,f,l;for(f=0;f<k;f++)switch(l=d[f],typeof l){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.j.stringify(l)),n=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];f=mt.j.stringify;for(k in d)if(Object.prototype.hasOwnProperty.call(d,k))switch(l=
d[k],typeof l){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(k)+":"+f(l))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Oa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Qa=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.D=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return w}return s};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.D()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.D())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.D())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=t;e=window[d]=t;b&&b(a)};e.src=a};mt.C={};
mt.C.oa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.C.ba=function(a,b,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Na=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.la=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.P=function(a){return(a=mt.url.la(a))?a.replace(/:\d+$/,""):a};mt.url.Ma=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=w,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,g=0;g<d;g++){var k=e[g].src;if(k&&0===k.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.ha=a})();var A=h.ha;
h.r={va:"http://tongji.baidu.com/hm-web/welcome/ico",T:"hm.baidu.com/hm.gif",Z:"baidu.com",sa:"hmmd",ta:"hmpl",ra:"hmkw",pa:"hmci",ua:"hmsr",qa:"hmcu",m:0,k:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",K:A()||"https:"===document.location.protocol?"https:":"http:",Pa:0,Ia:6E5,Ja:10,Ka:1024,Ha:1,L:2147483647,W:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")};
(function(){var a={l:{},c:function(a,e){this.l[a]=this.l[a]||[];this.l[a].push(e)},s:function(a,e){this.l[a]=this.l[a]||[];for(var d=this.l[a].length,g=0;g<d;g++)this.l[a][g](e)}};return h.w=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=a;var k=document.getElementsByTagName("script")[0];k.parentNode.insertBefore(g,k)}var b=mt.lang;return h.load=a})();
(function(){var a=h.r,b=mt.C,e={init:function(){if(""!==c.icon){var d;d=c.icon.split("|");var e=a.va+"?s="+c.id,k=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+d[0]+"."+d[1];switch(d[1]){case "swf":d=b.ba("HolmesIcon"+a.k,k,d[2],d[3],"s="+e);break;case "gif":d='<a href="'+e+'" target="_blank"><img border="0" src="'+k+'" width="'+d[2]+'" height="'+d[3]+'"></a>';break;default:d='<a href="'+e+'" target="_blank">'+d[0]+"</a>"}document.write(d)}}};h.w.c("pv-b",e.init);return e})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.F.ma()+","+h.F.ka();h.b.g()}}function b(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);f="undefined"==typeof a?s:a;if((!n||!l)&&f&&m)u=s,p=+new Date;else if(n&&l&&(!f||!m))u=w,q+=+new Date-p;n=f;l=m;y=setTimeout(b,100)}function e(a){var p=document,l="";if(a in p)l=a;else for(var b=["webkit","ms","moz","o"],d=0;d<b.length;d++){var q=b[d]+a.charAt(0).toUpperCase()+a.slice(1);if(q in p){l=
q;break}}return l}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?s:w,b()}var g=mt.event,k=h.w,n=s,f=s,l=s,m=s,v=+new Date,p=v,q=0,u=s,x=e("visibilityState"),z=e("hidden"),y;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.F={ma:function(){return+new Date-v},ka:function(){return u?+new Date-p+q:q}};k.c("pv-b",function(){g.c(window,"unload",a())});return h.F})();
(function(){var a=mt.lang,b=h.r,e=h.load,d={xa:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=h.b.H();e([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),d)}},Ga:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.ca=d})();
(function(){function a(l){for(var d in l)if({}.hasOwnProperty.call(l,d)){var b=l[d];e.d(b,"Object")||e.d(b,"Array")?a(b):l[d]=String(b)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,d=mt.j,g=h.r,k=h.w,n=h.ca,f={p:[],B:0,R:w,init:function(){f.e=0;k.c("pv-b",function(){f.da();f.fa()});k.c("pv-d",f.ga);k.c("stag-b",function(){h.b.a.api=f.e||f.B?f.e+"_"+f.B:""});k.c("stag-d",function(){h.b.a.api=0;f.e=0;f.B=0})},da:function(){var a=window._hmt||
[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,l=0;l<arguments.length;l++){var p=arguments[l];e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},fa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,q=d.length;p<q;p++){var e=d[p];
b.test(e[0])?f.p.push(e):f.M(e)}a.cmd[c.id]={push:f.M}},ga:function(){if(0<f.p.length)for(var a=0,d=f.p.length;a<d;a++)f.M(f.p[a]);f.p=t},M:function(a){var d=a[0];if(f.hasOwnProperty(d)&&e.d(f[d],"Function"))f[d](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||s===a))f.e|=2,h.b.Q=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.I?(h.b.a.nv=0,h.b.a.st=
4):h.b.I=s;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];f.R||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=d;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],e=a[4]||3;if(0<d&&6>d&&0<e&&4>e){f.B++;for(var p=(h.b.a.cv||"*").split("!"),q=p.length;q<d-1;q++)p.push("*");p[d-1]=e+"*"+b(a[2])+
"*"+b(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.za("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.R=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(f.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},k=b.length;if(900>=k)m.call(this,b);else for(var k=Math.ceil(k/900),p="block|"+Math.round(Math.random()*
g.L).toString(16)+"|"+k+"|",q=[],u=0;u<k;u++)q.push(u),q.push(b.substring(900*u,900*u+900)),m.call(this,p+q.join("|")),q=[]}},_setUserId:function(a){a=a[1];n.xa();n.Ga(a)}};f.init();h.$=f;return h.$})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.Q=s,this.I=w,this.init())}var b=mt.url,e=mt.V,d=mt.C,g=mt.lang,k=mt.cookie,n=mt.h,f=mt.localStorage,l=mt.sessionStorage,m=h.r,v=h.w;a.prototype={J:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},S:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},z:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.S(a,c.dm[d]))return s}else{var e=b.P(a);if(e&&this.J(e,c.dm[d]))return s}return w},H:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.J(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},O:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.S(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},na:function(){if(!document.referrer)return m.k-m.m>c.vdur?1:4;var a=
w;this.z(document.referrer)&&this.z(document.location.href)?a=s:(a=b.P(document.referrer),a=this.J(a||"",document.location.hostname));return a?m.k-m.m>c.vdur?1:4:3},getData:function(a){try{return k.get(a)||l.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{k.set(a,b,{domain:this.H(),path:this.O(),G:d}),d?f.set(a,b,d):l.set(a,b)}catch(e){}},za:function(a){try{k.set(a,"",{domain:this.H(),path:this.O(),G:-1}),l.remove(a),f.remove(a)}catch(b){}},Ea:function(){var a,b,d,e,f;m.m=this.getData("Hm_lpvt_"+
c.id)||0;13===m.m.length&&(m.m=Math.round(m.m/1E3));b=this.na();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.k-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.k);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.k,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.k);d=m.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.z(document.location.href)&&
(""===document.referrer||this.z(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},Da:function(){for(var a=[],b=this.a.et,d=0,e=m.W.length;d<e;d++){var f=m.W[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Fa:function(){this.Ea();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Aa;
this.a.cl=n.colorDepth+"-bit";this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.oa();this.a.v="1.1.31";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.i(a,m.sa)||"";this.a.cp=b.i(a,m.ta)||"";this.a.cw=b.i(a,m.ra)||"";this.a.ci=b.i(a,m.pa)||"";this.a.cf=b.i(a,m.ua)||"";this.a.cu=b.i(a,m.qa)||""},init:function(){try{this.Fa(),0===this.a.nv?
this.Ca():this.N(".*"),h.b=this,this.aa(),v.s("pv-b"),this.Ba()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.K+"//"+m.T+"?"+b.join("&"))}},Ba:function(){function a(){v.s("pv-d")}this.Q?(this.I=s,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.L);v.s("stag-b");var d=m.K+"//"+m.T+"?"+b.Da();v.s("stag-d");b.Y(d);e.log(d,
function(d){b.N(d);g.d(a,"Function")&&a.call(b)})},aa:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.Z),f=b.i(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*m.L),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},Y:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},N:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},Ca:function(){var a=this,b=
l.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.K+"//"+decodeURIComponent(b),function(b){a.N(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();
(function(){var a=mt.o,b=mt.event,e=mt.url,d=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,k=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=t;a.U(function(){n=+new Date});var f=function(){var a,b,f;f=k("navigation");b=k("request");f={netAll:b.start-f.start,netDns:k("domainLookup").value,netTcp:k("connect").value,srv:k("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:k("loadEvent").end-f.start};a=document.referrer;var l=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=t;b=t;if("www.baidu.com"===l[2]||"m.baidu.com"===l[2])u=e.i(a,"qid"),b=e.i(a,"click_t");a=u;f.qid=a!=t?a:"";b!=t?(f.bdDom=n?n-b:0,f.bdRun=g-b,f.bdDef=k("navigation").start-b):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(f);h.b.g()};b.c(window,"load",function(){setTimeout(f,500)})}}catch(l){}})();
(function(){var a=mt.h,b=mt.lang,e=mt.event,d=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.ya||7<a.wa)&&c.cvcc)){var g,k,n,f,l=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,e){var f={};f.n=g;f.t="clk";f.v=a;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";n.test(k)?(f.sn="mediate",
f.snv=k):b.d(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.g();for(f=+new Date;400>=+new Date-f;);};if(c.med)k="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,f={click:function(){for(var a=[],b=l(document.getElementsByTagName("a")),b=[].concat.apply(b,l(document.getElementsByTagName("area"))),b=[].concat.apply(b,l(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){k="/other-comm";g="other";n=c.cvcc.q||r;var p=c.cvcc.id||r;f={click:function(){for(var a=[],b=l(document.getElementsByTagName("a")),b=[].concat.apply(b,l(document.getElementsByTagName("area"))),b=[].concat.apply(b,l(document.getElementsByTagName("img"))),d,e,f,g=0,k=b.length;g<k;g++)d=b[g],n!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||p.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof f&&"undefined"!==typeof n){var q;k+=/\/$/.test(k)?"":"/";var u=function(a,d){if(q===d)return v(k+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(k+a+"/"+(e+1),d[e]),w};e.c(document,"mousedown",function(a){a=a||window.event;q=a.target||a.srcElement;var d={};for(m(f,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&m(d,u)!==w;)q=q.parentNode})}}})();(function(){var a=mt.o,b=mt.lang,e=mt.event,d=mt.j;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={X:function(){for(var b=c.cvcf.length,d,f=0;f<b;f++)(d=a.ia(decodeURIComponent(c.cvcf[f])))&&e.c(d,"click",g.ea())},ea:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.g()}}};a.U(function(){g.X()})}})();
(function(){var a=mt.event,b=mt.j;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.g()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-e;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
