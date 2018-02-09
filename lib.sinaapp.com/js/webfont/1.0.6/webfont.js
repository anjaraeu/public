/*
 * Copyright 2010 Small Batch, Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function(window,document,undefined){
function i(a){return function(){return this[a]}}var k;function n(a,b){var c=arguments.length>2?Array.prototype.slice.call(arguments,2):[];return function(){c.push.apply(c,arguments);return b.apply(a,c)}};function o(a,b){this.u=a;this.a=b}o.prototype.createElement=function(a,b,c){a=this.u.createElement(a);if(b)for(var d in b)if(b.hasOwnProperty(d))if(d=="style"&&this.a.getName()=="MSIE")a.style.cssText=b[d];else a.setAttribute(d,b[d]);c&&a.appendChild(this.u.createTextNode(c));return a};function p(a,b,c){a=a.u.getElementsByTagName(b)[0];if(!a)a=document.documentElement;if(a&&a.lastChild){a.insertBefore(c,a.lastChild);return true}return false}
function q(a,b){function c(){document.body?b():setTimeout(c,0)}c()}function r(a,b){if(b.parentNode){b.parentNode.removeChild(b);return true}return false}function s(a,b){return a.createElement("link",{rel:"stylesheet",href:b})}function t(a,b,c){a=b.className.split(/\s+/);for(var d=0,e=a.length;d<e;d++)if(a[d]==c)return;a.push(c);b.className=a.join(" ").replace(/^\s+/,"")}
function u(a,b,c){a=b.className.split(/\s+/);for(var d=[],e=0,f=a.length;e<f;e++)a[e]!=c&&d.push(a[e]);b.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")};function v(a,b,c,d,e,f,g){this.da=a;this.ia=b;this.V=c;this.U=d;this.ga=e;this.fa=f;this.ja=g}k=v.prototype;k.getName=i("da");k.$=i("ia");k.X=i("V");k.Y=i("U");k.K=i("ga");k.Z=i("fa");k.o=i("ja");function w(a){this.a=a}var x=new v("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",false);w.prototype.parse=function(){return this.a.indexOf("MSIE")!=-1?y(this):this.a.indexOf("Opera")!=-1?z(this):this.a.indexOf("AppleWebKit")!=-1?A(this):this.a.indexOf("Gecko")!=-1?B(this):x};function C(a){var b=D(a,a.a,/(iPod|iPad|iPhone|Android)/,1);if(b!="")return b;a=D(a,a.a,/(Linux|Mac_PowerPC|Macintosh|Windows)/,1);if(a!=""){if(a=="Mac_PowerPC")a="Macintosh";return a}return"Unknown"}
function E(a){var b=D(a,a.a,/(OS X|Windows NT|Android) ([^;]+)/,2);if(b)return b;if(b=D(a,a.a,/(iPhone )?OS ([\d_]+)/,2))return b;if(a=D(a,a.a,/Linux ([i\d]+)/,1))return a;return"Unknown"}function y(a){var b=D(a,a.a,/(MSIE [\d\w\.]+)/,1);if(b!=""){var c=b.split(" ");b=c[0];c=c[1];return new v(b,c,b,c,C(a),E(a),F(a,c)>=6)}return new v("MSIE","Unknown","MSIE","Unknown",C(a),E(a),false)}
function z(a){var b="Unknown",c="Unknown",d=D(a,a.a,/(Presto\/[\d\w\.]+)/,1);if(d!=""){c=d.split("/");b=c[0];c=c[1]}else{if(a.a.indexOf("Gecko")!=-1)b="Gecko";d=D(a,a.a,/rv:([^\)]+)/,1);if(d!="")c=d}if(a.a.indexOf("Version/")!=-1){d=D(a,a.a,/Version\/([\d\.]+)/,1);if(d!="")return new v("Opera",d,b,c,C(a),E(a),F(a,d)>=10)}d=D(a,a.a,/Opera[\/ ]([\d\.]+)/,1);if(d!="")return new v("Opera",d,b,c,C(a),E(a),F(a,d)>=10);return new v("Opera","Unknown",b,c,C(a),E(a),false)}
function A(a){var b=C(a),c=E(a),d=D(a,a.a,/AppleWebKit\/([\d\.\+]+)/,1);if(d=="")d="Unknown";var e="Unknown";if(a.a.indexOf("Chrome")!=-1)e="Chrome";else if(a.a.indexOf("Safari")!=-1)e="Safari";var f="Unknown";if(a.a.indexOf("Version/")!=-1)f=D(a,a.a,/Version\/([\d\.\w]+)/,1);else if(e=="Chrome")f=D(a,a.a,/Chrome\/([\d\.]+)/,1);var g=D(a,d,/\d+\.(\d+)/,1);return new v(e,f,"AppleWebKit",d,b,c,F(a,d)>=526||F(a,d)>=525&&parseInt(g,10)>=13)}
function B(a){var b="Unknown",c="Unknown",d=false;if(a.a.indexOf("Firefox")!=-1){b="Firefox";var e=D(a,a.a,/Firefox\/([\d\w\.]+)/,1);if(e!=""){d=D(a,e,/\d+\.(\d+)/,1);c=e;d=e!=""&&F(a,e)>=3&&parseInt(d,10)>=5}}else if(a.a.indexOf("Mozilla")!=-1)b="Mozilla";e=D(a,a.a,/rv:([^\)]+)/,1);if(e=="")e="Unknown";else if(!d){d=F(a,e);var f=parseInt(D(a,e,/\d+\.(\d+)/,1),10),g=parseInt(D(a,e,/\d+\.\d+\.(\d+)/,1),10);d=d>1||d==1&&f>9||d==1&&f==9&&g>=2||e.match(/1\.9\.1b[123]/)!=null||e.match(/1\.9\.1\.[\d\.]+/)!=
null}return new v(b,c,"Gecko",e,C(a),E(a),d)}function F(a,b){a=D(a,b,/(\d+)/,1);if(a!="")return parseInt(a,10);return-1}function D(a,b,c,d){if((a=b.match(c))&&a[d])return a[d];return""};function G(a,b,c,d){this.c=a;this.f=b;this.F=c;this.j=d||aa;this.h=new H("-")}var aa="wf";function I(a){t(a.c,a.f,a.h.e(a.j,"loading"));J(a,"loading")}function K(a,b,c){u(a.c,a.f,a.h.e(a.j,b,c,"loading"));t(a.c,a.f,a.h.e(a.j,b,c,"active"));J(a,"fontactive",b,c)}function L(a){t(a.c,a.f,a.h.e(a.j,"inactive"));J(a,"inactive")}function ba(a){u(a.c,a.f,a.h.e(a.j,"loading"));t(a.c,a.f,a.h.e(a.j,"active"));J(a,"active")}function J(a,b,c,d){a.F[b]&&a.F[b](c,d)};function ca(){this.O={}}function da(a,b){var c=[];for(var d in b)if(b.hasOwnProperty(d)){var e=a.O[d];e&&c.push(e(b[d]))}return c};function M(a,b,c,d,e){this.c=a;this.m=b;this.v=c;this.p=d;this.L=e;this.G=0;this.C=this.N=false;this.ca=new N;this.q=new O}
M.prototype.watch=function(a,b,c){for(var d=a.length,e=0;e<d;e++){var f=a[e];b[f]||(b[f]=["n4"]);this.G+=b[f].length}if(c)this.N=c;for(e=0;e<d;e++){f=a[e];c=b[f];for(var g=0,j=c.length;g<j;g++){var h=c[g],l=P(this,"_,arial,helvetica",h),Q=this.v.w(l);r(this.c,l);l=f;var m=this.m;t(m.c,m.f,m.h.e(m.j,l,h,"loading"));J(m,"fontloading",l,h);m=P(this,this.ca.quote(l),h);if(Q!=this.v.w(m)){r(this.c,m);K(this.m,l,h);this.C=true;R(this)}else S(this,this.L(),Q,m,l,h)}}};
function R(a){if(--a.G==0&&a.N)a.C?ba(a.m):L(a.m)}M.prototype.T=function(a,b,c,d,e){if(b!=this.v.w(c)){r(this.c,c);K(this.m,d,e);this.C=true;R(this)}else if(this.L()-a<5E3)S(this,a,b,c,d,e);else{r(this.c,c);a=this.m;u(a.c,a.f,a.h.e(a.j,d,e,"loading"));t(a.c,a.f,a.h.e(a.j,d,e,"inactive"));J(a,"fontinactive",d,e);R(this)}};function S(a,b,c,d,e,f){a.p(function(g,j){return function(){j.call(g,b,c,d,e,f)}}(a,a.T),50)}
function P(a,b,c){c=a.q.expand(c);b=a.c.createElement("span",{style:"position:absolute;top:-999px;font-size:300px;font-family:"+b+",_,arial,helvetica;"+c},"Mm");p(a.c,"body",b);return b};function T(a,b,c,d,e){this.c=a;this.I=b;this.f=c;this.p=d;this.a=e;this.A=this.B=0}T.prototype.n=function(a,b){this.I.O[a]=b};T.prototype.load=function(a){var b=new G(this.c,this.f,a);this.a.o()?ea(this,b,a):L(b)};T.prototype.aa=function(a,b,c,d){if(d)a.load(n(this,this.ea,b,c));else{a=--this.B==0;this.A--;if(a)this.A==0?L(b):I(b);c.watch([],{},a)}};T.prototype.ea=function(a,b,c,d){var e=--this.B==0;e&&I(a);this.p(n(this,function(f,g,j,h){f.watch(g,j||{},h)},b,c,d,e))};
function ea(a,b,c){c=da(a.I,c);a.A=a.B=c.length;for(var d=new M(a.c,b,{w:function(j){return j.offsetWidth}},a.p,function(){return(new Date).getTime()}),e=0,f=c.length;e<f;e++){var g=c[e];g.t(a.a,n(a,a.aa,g,b,d))}};function H(a){this.ba=a||fa}var fa="-";H.prototype.e=function(){for(var a=[],b=0;b<arguments.length;b++)a.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return a.join(this.ba)};function N(){this.Q='"'}N.prototype.quote=function(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");d.indexOf(" ")==-1?b.push(d):b.push(this.Q+d+this.Q)}return b.join(",")};function O(){this.s=ga;this.k=ha}var ga=["font-style","font-weight"],ha={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function U(a,b,c){this.M=a;this.ha=b;this.k=c}U.prototype.compact=function(a,b){for(var c=0;c<this.k.length;c++)if(b==this.k[c][1]){a[this.M]=this.k[c][0];return}};
U.prototype.expand=function(a,b){for(var c=0;c<this.k.length;c++)if(b==this.k[c][0]){a[this.M]=this.ha+":"+this.k[c][1];return}};O.prototype.compact=function(a){var b=["n","4"];a=a.split(";");for(var c=0,d=a.length;c<d;c++){var e=a[c].replace(/\s+/g,"").split(":");if(e.length==2){var f=e[1];a:{e=e[0];for(var g=0;g<this.s.length;g++)if(e==this.s[g]){e=new U(g,e,this.k[e]);break a}e=null}e&&e.compact(b,f)}}return b.join("")};
O.prototype.expand=function(a){if(a.length!=2)return null;for(var b=[null,null],c=0,d=this.s.length;c<d;c++){var e=this.s[c],f=a.substr(c,1);(new U(c,e,this.k[e])).expand(b,f)}return b[0]&&b[1]?b.join(";")+";":null};window.WebFont=function(){var a=(new w(navigator.userAgent)).parse();return new T(new o(document,a),new ca,document.documentElement,function(b,c){setTimeout(b,c)},a)}();window.WebFont.load=window.WebFont.load;window.WebFont.addModule=window.WebFont.n;v.prototype.getName=v.prototype.getName;v.prototype.getVersion=v.prototype.$;v.prototype.getEngine=v.prototype.X;v.prototype.getEngineVersion=v.prototype.Y;v.prototype.getPlatform=v.prototype.K;v.prototype.getPlatformVersion=v.prototype.Z;
v.prototype.isSupportingWebFont=v.prototype.o;function V(a,b){this.c=a;this.d=b}var ia={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};V.prototype.t=function(a,b){return b(a.o())};
V.prototype.load=function(a){p(this.c,"head",s(this.c,("https:"==document.location.protocol?"https:":"http:")+"//webfonts.fontslive.com/css/"+this.d.key+".css"));var b;b=this.d.families;var c,d,e;c=[];d={};for(var f=0,g=b.length;f<g;f++){e=void 0;var j=void 0;j=void 0;j=b[f].split(":");e=j[0];j=j[1]?ja(this,j[1]):["n4"];e={H:e,D:j};c.push(e.H);d[e.H]=e.D}b={W:c,D:d};a(b.W,b.D)};
function ja(a,b){a=b.split(",");b=[];for(var c=0,d=a.length;c<d;c++){var e=a[c];if(e){var f=ia[e];b.push(f?f:e)}}return b}window.WebFont.n("ascender",function(a){var b=(new w(navigator.userAgent)).parse();return new V(new o(document,b),a)});function W(a){this.S=a?a:("https:"==window.location.protocol?"https:":"http:")+ka;this.g=null}var ka="//fonts.googleapis.com/css";W.prototype.e=function(){if(!this.g)throw new Error("No fonts to load !");for(var a=this.g.length,b=[],c=0;c<a;c++)b.push(this.g[c].replace(/ /g,"+"));return this.S+"?family="+b.join("%7C")};function X(a){this.g=a;this.P=[];this.R={};this.q=new O}var la={ultralight:"n2",light:"n3",regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",ul:"n2",l:"n3",r:"n4",b:"n7",i:"i4",bi:"i7"};
X.prototype.parse=function(){for(var a=this.g.length,b=0;b<a;b++){var c=this.g[b].split(":"),d=c[0],e=null;if(c.length==2){var f=[];c=c[1].split(",");for(var g=c.length,j=0;j<g;j++){var h;h=c[j];if(h.match(/^[\w ]+$/)){var l=la[h];if(l)h=l;else{l=h.match(/^(\d*)(\w*)$/);h=l[1];l=l[2];h=(h=this.q.expand([l?l:"n",h?h.substr(0,1):"4"].join("")))?this.q.compact(h):null}}else h="";h&&f.push(h)}if(f.length>0)e=f}else e=["n4"];this.P.push(d);this.R[d]=e}};function Y(a,b,c){this.a=a;this.c=b;this.d=c}Y.prototype.t=function(a,b){a.K().match(/iPad|iPod|iPhone/)!=null&&b(false);return b(a.o())};Y.prototype.load=function(a){var b=new W(this.d.api),c=this.d.families,d=this.c,e=this.a.getName()=="MSIE"&&this.d.blocking!=true;b.g=c;e?q(d,function(){p(d,"head",s(d,b.e()))}):p(d,"head",s(d,b.e()));c=new X(c);c.parse();a(c.P,c.R)};window.WebFont.n("google",function(a){var b=(new w(navigator.userAgent)).parse();return new Y(b,new o(document,b),a)});function Z(a,b){this.c=a;this.d=b}Z.prototype.load=function(a){for(var b=this.d.urls||[],c=this.d.families||[],d=0,e=b.length;d<e;d++)p(this.c,"head",s(this.c,b[d]));a(c)};Z.prototype.t=function(a,b){return b(a.o())};window.WebFont.n("custom",function(a){var b=(new w(navigator.userAgent)).parse();return new Z(new o(document,b),a)});function $(a,b,c){this.z=a;this.c=b;this.d=c;this.g=[];this.J={}}$.prototype.t=function(a,b){var c=this.d.id,d=this.d,e=this;if(c){this.z.__webfonttypekitmodule__||(this.z.__webfonttypekitmodule__={});this.z.__webfonttypekitmodule__[c]=function(f){f(a,d,function(g,j,h){e.g=j;e.J=h;b(g)})};p(this.c,"head",this.c.createElement("script",{src:(this.d.api||"http://use.typekit.com")+"/"+c+".js"}))}else b(true)};$.prototype.load=function(a){a(this.g,this.J)};
window.WebFont.n("typekit",function(a){var b=(new w(navigator.userAgent)).parse();return new $(window,new o(document,b),a)});window.WebFontConfig&&window.WebFont.load(window.WebFontConfig);
})(this,document);
