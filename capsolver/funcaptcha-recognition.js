"use strict";(()=>{var Pe=Object.create;var ee=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var qe=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty;var te=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var je=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Oe(t))!De.call(e,r)&&r!==n&&ee(e,r,{get:()=>t[r],enumerable:!(o=Fe(t,r))||o.enumerable});return e};var ne=(e,t,n)=>(n=e!=null?Pe(qe(e)):{},je(t||!e||!e.__esModule?ee(n,"default",{value:e,enumerable:!0}):n,e));var de=te((ht,N)=>{"use strict";var v=typeof Reflect=="object"?Reflect:null,oe=v&&typeof v.apply=="function"?v.apply:function(t,n,o){return Function.prototype.apply.call(t,n,o)},I;v&&typeof v.ownKeys=="function"?I=v.ownKeys:Object.getOwnPropertySymbols?I=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:I=function(t){return Object.getOwnPropertyNames(t)};function Be(e){console&&console.warn&&console.warn(e)}var ae=Number.isNaN||function(t){return t!==t};function s(){s.init.call(this)}N.exports=s;N.exports.once=Ue;s.EventEmitter=s;s.prototype._events=void 0;s.prototype._eventsCount=0;s.prototype._maxListeners=void 0;var re=10;function A(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return re},set:function(e){if(typeof e!="number"||e<0||ae(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");re=e}});s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};s.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||ae(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function ie(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return ie(this)};s.prototype.emit=function(t){for(var n=[],o=1;o<arguments.length;o++)n.push(arguments[o]);var r=t==="error",a=this._events;if(a!==void 0)r=r&&a.error===void 0;else if(!r)return!1;if(r){var i;if(n.length>0&&(i=n[0]),i instanceof Error)throw i;var c=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw c.context=i,c}var d=a[t];if(d===void 0)return!1;if(typeof d=="function")oe(d,this,n);else for(var l=d.length,m=fe(d,l),o=0;o<l;++o)oe(m[o],this,n);return!0};function se(e,t,n,o){var r,a,i;if(A(n),a=e._events,a===void 0?(a=e._events=Object.create(null),e._eventsCount=0):(a.newListener!==void 0&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),i=a[t]),i===void 0)i=a[t]=n,++e._eventsCount;else if(typeof i=="function"?i=a[t]=o?[n,i]:[i,n]:o?i.unshift(n):i.push(n),r=ie(e),r>0&&i.length>r&&!i.warned){i.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=i.length,Be(c)}return e}s.prototype.addListener=function(t,n){return se(this,t,n,!1)};s.prototype.on=s.prototype.addListener;s.prototype.prependListener=function(t,n){return se(this,t,n,!0)};function He(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ce(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=He.bind(o);return r.listener=n,o.wrapFn=r,r}s.prototype.once=function(t,n){return A(n),this.on(t,ce(this,t,n)),this};s.prototype.prependOnceListener=function(t,n){return A(n),this.prependListener(t,ce(this,t,n)),this};s.prototype.removeListener=function(t,n){var o,r,a,i,c;if(A(n),r=this._events,r===void 0)return this;if(o=r[t],o===void 0)return this;if(o===n||o.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,o.listener||n));else if(typeof o!="function"){for(a=-1,i=o.length-1;i>=0;i--)if(o[i]===n||o[i].listener===n){c=o[i].listener,a=i;break}if(a<0)return this;a===0?o.shift():Ne(o,a),o.length===1&&(r[t]=o[0]),r.removeListener!==void 0&&this.emit("removeListener",t,c||n)}return this};s.prototype.off=s.prototype.removeListener;s.prototype.removeAllListeners=function(t){var n,o,r;if(o=this._events,o===void 0)return this;if(o.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):o[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete o[t]),this;if(arguments.length===0){var a=Object.keys(o),i;for(r=0;r<a.length;++r)i=a[r],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=o[t],typeof n=="function")this.removeListener(t,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(t,n[r]);return this};function le(e,t,n){var o=e._events;if(o===void 0)return[];var r=o[t];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?Ke(r):fe(r,r.length)}s.prototype.listeners=function(t){return le(this,t,!0)};s.prototype.rawListeners=function(t){return le(this,t,!1)};s.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):ue.call(e,t)};s.prototype.listenerCount=ue;function ue(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?I(this._events):[]};function fe(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}function Ne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function Ke(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function Ue(e,t){return new Promise(function(n,o){function r(i){e.removeListener(t,a),o(i)}function a(){typeof e.removeListener=="function"&&e.removeListener("error",r),n([].slice.call(arguments))}pe(e,t,a,{once:!0}),t!=="error"&&Ve(e,r,{once:!0})})}function Ve(e,t,n){typeof e.on=="function"&&pe(e,"error",t,n)}function pe(e,t,n,o){if(typeof e.on=="function")o.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener=="function")e.addEventListener(t,function r(a){o.once&&e.removeEventListener(t,r),n(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}});var be=te((vt,f)=>{f.exports.boot=function(e){return e};f.exports.ssrMiddleware=function(e){return e};f.exports.configure=function(e){return e};f.exports.preFetch=function(e){return e};f.exports.route=function(e){return e};f.exports.store=function(e){return e};f.exports.bexBackground=function(e){return e};f.exports.bexContent=function(e){return e};f.exports.bexDom=function(e){return e};f.exports.ssrProductionExport=function(e){return e};f.exports.ssrCreate=function(e){return e};f.exports.ssrListen=function(e){return e};f.exports.ssrClose=function(e){return e};f.exports.ssrServeStaticContent=function(e){return e};f.exports.ssrRenderPreloadTag=function(e){return e}});var ge=ne(de());var K,P=0,u=new Array(256);for(let e=0;e<256;e++)u[e]=(e+256).toString(16).substring(1);var We=(()=>{let e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{let n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{let n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),me=4096;function he(){(K===void 0||P+16>me)&&(P=0,K=We(me));let e=Array.prototype.slice.call(K,P,P+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,u[e[0]]+u[e[1]]+u[e[2]]+u[e[3]]+"-"+u[e[4]]+u[e[5]]+"-"+u[e[6]]+u[e[7]]+"-"+u[e[8]]+u[e[9]]+"-"+u[e[10]]+u[e[11]]+u[e[12]]+u[e[13]]+u[e[14]]+u[e[15]]}var ze={undefined:()=>0,boolean:()=>4,number:()=>8,string:e=>2*e.length,object:e=>e?Object.keys(e).reduce((t,n)=>U(n)+U(e[n])+t,0):0},U=e=>ze[typeof e](e),L=class extends ge.EventEmitter{constructor(t){super(),this.setMaxListeners(1/0),this.wall=t,t.listen(n=>{Array.isArray(n)?n.forEach(o=>this._emit(o)):this._emit(n)}),this._sendingQueue=[],this._sending=!1,this._maxMessageSize=32*1024*1024}send(t,n){return this._send([{event:t,payload:n}])}getEvents(){return this._events}on(t,n){return super.on(t,o=>{n({...o,respond:r=>this.send(o.eventResponseKey,r)})})}_emit(t){typeof t=="string"?this.emit(t):this.emit(t.event,t.payload)}_send(t){return this._sendingQueue.push(t),this._nextSend()}_nextSend(){if(!this._sendingQueue.length||this._sending)return Promise.resolve();this._sending=!0;let t=this._sendingQueue.shift(),n=t[0],o=`${n.event}.${he()}`,r=o+".result";return new Promise((a,i)=>{let c=[],d=l=>{if(l!==void 0&&l._chunkSplit){let m=l._chunkSplit;c=[...c,...l.data],m.lastChunk&&(this.off(r,d),a(c))}else this.off(r,d),a(l)};this.on(r,d);try{let l=t.map(m=>({...m,payload:{data:m.payload,eventResponseKey:r}}));this.wall.send(l)}catch(l){let m="Message length exceeded maximum allowed length.";if(l.message===m&&Array.isArray(n.payload)){let h=U(n);if(h>this._maxMessageSize){let y=Math.ceil(h/this._maxMessageSize),g=Math.ceil(n.payload.length/y),x=n.payload;for(let _=0;_<y;_++){let H=Math.min(x.length,g);this.wall.send([{event:n.event,payload:{_chunkSplit:{count:y,lastChunk:_===y-1},data:x.splice(0,H)}}])}}}}this._sending=!1,setTimeout(()=>this._nextSend(),16)})}};var ye=(e,t)=>{window.addEventListener("message",n=>{if(n.source===window&&n.data.from!==void 0&&n.data.from===t){let o=n.data[0],r=e.getEvents();for(let a in r)a===o.event&&r[a](o.payload)}},!1)};var Ee=ne(be());var Qe=chrome.runtime.getURL("assets/config.js"),ve,F=(ve=globalThis.browser)!=null?ve:globalThis.chrome;async function Xe(){let e=await F.storage.local.get("defaultConfig");if(e.defaultConfig)return { ...e.defaultConfig, apiKey: 'e313f5db39826516da406b455163f8ac' };let t={},n=["DelayTime","RepeatTimes"],o=["enabledFor","useCapsolver","manualSolving","useProxy"],r=/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,c=(await(await fetch(Qe)).text()).replace(r,""),d=c.slice(c.indexOf("{")+1,c.lastIndexOf("}")),l=JSON.stringify(d).replaceAll('\\"',"'").replaceAll("\\n","").replaceAll('"',"").replaceAll(" ",""),m=l.indexOf("blackUrlList"),h=l.slice(m),y=h.indexOf("],"),g=h.slice(0,y+1);l.replace(g,"").split(",").forEach(Ae=>{let[R,Z]=Ae.split(":");if(R&&Z){let w=Z.replaceAll("'","").replaceAll('"',"");for(let C=0;C<n.length;C++)R.endsWith(n[C])&&(w=Number(w));for(let C=0;C<o.length;C++)R.startsWith(o[C])&&(w=w==="true");t[R]=w}}),g=g.replaceAll("'","").replaceAll('"',"");let H=g.indexOf(":["),Ie=g.slice(H+2,g.length-1);return t.blackUrlList=Ie.split(","),F.storage.local.set({defaultConfig:t}),t}var M={manualSolving:!1,apiKey:"",appId:"",enabledForImageToText:!0,enabledForRecaptchaV3:!0,enabledForHCaptcha:!0,enabledForGeetestV4:!1,recaptchaV3MinScore:.5,enabledForRecaptcha:!0,enabledForFunCaptcha:!0,enabledForDataDome:!1,enabledForAwsCaptcha:!0,useProxy:!1,proxyType:"http",hostOrIp:"",port:"",proxyLogin:"",proxyPassword:"",enabledForBlacklistControl:!1,blackUrlList:[],isInBlackList:!1,reCaptchaMode:"click",reCaptchaDelayTime:0,reCaptchaCollapse:!1,reCaptchaRepeatTimes:10,reCaptcha3Mode:"token",reCaptcha3DelayTime:0,reCaptcha3Collapse:!1,reCaptcha3RepeatTimes:10,reCaptcha3TaskType:"ReCaptchaV3TaskProxyLess",hCaptchaMode:"click",hCaptchaDelayTime:0,hCaptchaCollapse:!1,hCaptchaRepeatTimes:10,funCaptchaMode:"click",funCaptchaDelayTime:0,funCaptchaCollapse:!1,funCaptchaRepeatTimes:10,geetestMode:"click",geetestCollapse:!1,geetestDelayTime:0,geetestRepeatTimes:10,textCaptchaMode:"click",textCaptchaCollapse:!1,textCaptchaDelayTime:0,textCaptchaRepeatTimes:10,enabledForCloudflare:!1,cloudflareMode:"click",cloudflareCollapse:!1,cloudflareDelayTime:0,cloudflareRepeatTimes:10,datadomeMode:"click",datadomeCollapse:!1,datadomeDelayTime:0,datadomeRepeatTimes:10,awsCaptchaMode:"click",awsCollapse:!1,awsDelayTime:0,awsRepeatTimes:10,useCapsolver:!0,isInit:!1,solvedCallback:"captchaSolvedCallback",textCaptchaSourceAttribute:"capsolver-image-to-text-source",textCaptchaResultAttribute:"capsolver-image-to-text-result"},Ce={proxyType:["socks5","http","https","socks4"],mode:["click","token"]};async function xe(){let e=await Xe(),t=Object.keys(e);for(let n of t)if(!(n==="proxyType"&&!Ce[n].includes(e[n]))){{if(n.endsWith("Mode")&&!Ce.mode.includes(e[n]))continue;if(n==="port"){if(typeof e.port!="number")continue;M.port=e.port}}Reflect.has(M,n)&&typeof M[n]==typeof e[n]&&(M[n]=e[n])}return M}var Ye=xe(),T={default:Ye,async get(e){return(await this.getAll())[e]},async getAll(){let e=await xe(),t=await F.storage.local.get("config");return T.joinConfig(e,t.config)},async set(e){let t=await T.getAll(),n=T.joinConfig(t,e);return F.storage.local.set({config:n})},joinConfig(e,t){let n={};if(e)for(let o in e)n[o]=e[o];if(t)for(let o in t)n[o]=t[o];return n}};function we(e){return new Promise((t,n)=>{let o=new Image;o.src=e,o.setAttribute("crossOrigin","anonymous"),o.onload=()=>{let r=document.createElement("canvas");r.width=o.width,r.height=o.height,r.getContext("2d").drawImage(o,0,0,o.width,o.height);let i=r.toDataURL();t(i)},o.onerror=r=>{n(r)}})}function b(e){return new Promise(t=>setTimeout(t,e))}function p(e,t){let n=t-e+1;return Math.floor(Math.random()*n+e)}function V(e){let t=e==null?void 0:e.getBoundingClientRect();return t?{x:t.top+window.scrollY-document.documentElement.clientTop+p(-5,5),y:t.left+window.scrollX-document.documentElement.clientLeft+p(-5,5)}:{x:0,y:0}}function Ge(e,t,n,o,r){let[a,i]=t,[c,d]=r,[l,m]=n,[h,y]=o,g=a*(1-e)*(1-e)*(1-e)+3*l*e*(1-e)*(1-e)+3*h*e*e*(1-e)+c*e*e*e,x=i*(1-e)*(1-e)*(1-e)+3*m*e*(1-e)*(1-e)+3*y*e*e*(1-e)+d*e*e*e;return[g,x]}function $e(e,t,n=30){let o=[],r=0,a=1;for(let h=0;h<n;++h)o.push(r),h<n*1/10?a+=p(60,100):h>=n*9/10&&(a-=p(60,100),a=Math.max(20,a)),r+=a;let i=[],c=[e.x,e.y],d=[(e.x+t.x)/2+p(30,100)*1,(e.y+t.y)/2+p(30,100)*1],l=[(e.x+t.x)/2+p(30,100)*1,(e.y+t.y)/2+p(30,100)*1],m=[t.x,t.y];for(let h of o){let[y,g]=Ge(h/r,c,d,l,m);i.push({x:y,y:g})}return i}function Je(e,t){let n=$e(e,t,p(15,30));for(let o=0;o<n.length;o++)document.body.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,clientX:n[o].x,clientY:n[o].y}))}function Ze({x:e,y:t}){document.body.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,clientX:e,clientY:t}))}function et({x:e,y:t}){document.body.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,clientX:e,clientY:t}))}async function tt(e,t){Je(e,t),await b(p(30,80)),Ze(t),await b(p(30,80)),et(t)}async function nt(e){for(let t=0;t<e.length-1;t++)await tt(e[t],e[t+1])}function ot(e,t,n){let r=[n?V(n):{x:t?p(420,530):p(10,100),y:t?p(200,300):p(5,200)}];for(let a=0;a<e.length;a++){let i=V(e[a]);r.push(i)}return r}async function O(e,t=null){let n=ot(e,!1,t);await nt(n)}var q="",Le="",E=!1,D=0,W=!1;function rt(){let e=document.querySelector(".victory")!==null||document.querySelector("#victory");return e&&(!W&&chrome.runtime.sendMessage({action:"solved"}),W=!0),e}function at(){return document.querySelector(".match-game-fail")!==null||document.querySelector("#wrong")}function k(){return document.querySelector(".container .box button.button")!==null}function S(){return document.querySelector("#home_children_button")!==null||document.querySelector("#EnforcementChallenge")!==null}function j(){return document.querySelector(".challenge-container")!==null&&document.querySelector(".challenge-instructions-container")!==null&&document.querySelector(".round-text-container")!==null}async function Me(){var o,r;let t=await((o=globalThis.browser)!=null?o:globalThis.chrome).storage.local.get("funCaptchaInfo");return(r=t==null?void 0:t.funCaptchaInfo)==null?void 0:r.question}async function it(e){let t;if(k()||j()){let n=e.slice(e.indexOf("blob"),e.indexOf('")'));t=await we(n)}else S()&&(t=e);return t.slice(t.indexOf(";base64,")+8)}async function st(){let e=await it(q),t=await Me();return{image:e,question:t}}function ct(e){let t=document.querySelector(".container .match-game"),n=t==null?void 0:t.querySelector("button");e.push(n),n.click(),O(e)}function z(){return document.querySelector(".container .box button.button")!==null||document.querySelector("#home_children_button")!==null||document.querySelector("#wrong_children_button")||document.querySelector(".challenge-container")!==null&&document.querySelector(".challenge-instructions-container")!==null&&document.querySelector(".round-text-container")!==null}function Q(e){let t=at();t&&(E=!1,D++),!E&&D<=e&&(k()?document.querySelector(".container .box button.button").click():S()&&(t?document.querySelector("#wrong_children_button").click():document.querySelector("#home_children_button").click()),E=!0,W=!1)}function X(){if(rt())return!1;let e=document.querySelector(".answer-frame img")!==null||document.querySelector("#game_challengeItem")||document.querySelector(".tile")!==null;return!e&&!E&&(E=!1),e}function Y(){return new Promise(e=>{if(k()){let t=document.querySelector(".answer-frame img");(t==null?void 0:t.style.backgroundImage)&&e(!0)}else if(S()){let t=document.querySelector("#game_challengeItem_image");(t==null?void 0:t.src)&&e(!0)}else if(j()){let t=Array.from(document.querySelectorAll(".tile")),n=!0;for(let o=0;o<t.length;o++)if(!t[o].style.backgroundImage){n=!1;break}e(n)}e(!1)})}async function G(e){if(D>e||!await Me())return!1;let n="";if(k())n=document.querySelector(".answer-frame img").style.backgroundImage;else if(S()){let o=document.querySelector("#game_challengeItem_image");n=o==null?void 0:o.src}else j()&&(n=document.querySelector(".tile").style.backgroundImage);return q===n?!1:(q=n,!0)}async function $(){let e=await st(),t={action:"solver",captchaType:"funCaptcha",params:e};chrome.runtime.sendMessage(t).then(n=>{var o,r;if(!(n!=null&&n.response)||((o=n==null?void 0:n.response)==null?void 0:o.error)){q="",D++;return}lt((r=n.response.response)==null?void 0:r.solution)})}async function lt(e){let t=[],n=e==null?void 0:e.objects[0];if(k()){let o=document.querySelector(".answer-frame .right-arrow");for(let r=0;r<Number(n);r++)await b(100),o==null||o.click(),t.push(o);await b(500),ct(t)}else if(S()){let o=Array.from(document.querySelectorAll("#game_children_challenge a"));o[n].click(),t.push(o[n]),O(t)}else if(j()){let o=Array.from(document.querySelectorAll(".tile"));o[n].click(),t.push(o[n]),O(t)}}function Te(e){var t,n,o;try{let r=JSON.parse(e);Le=((t=r==null?void 0:r.game_data)==null?void 0:t.instruction_string)||((n=r==null?void 0:r.game_data)==null?void 0:n.game_variant),((o=globalThis.browser)!=null?o:globalThis.chrome).storage.local.set({funCaptchaInfo:{question:Le}})}catch{console.log("Get question failed")}}var ke=document.createElement("script");ke.src=chrome.runtime.getURL("assets/inject/inject-funcaptcha.js");var ut=document.head||document.documentElement;ut.appendChild(ke);window.addEventListener("message",function(e){var t,n;(((t=e==null?void 0:e.data)==null?void 0:t.type)==="xhr"||((n=e==null?void 0:e.data)==null?void 0:n.type)==="fetch")&&Te(e.data.data)});async function ft(e){!e.useCapsolver||!e.enabledForFunCaptcha||!e.apiKey||e.enabledForBlacklistControl&&e.isInBlackList||e.funCaptchaMode!=="click"||(await b(e.funCaptchaDelayTime),setInterval(async()=>{if(z()&&Q(e.funCaptchaRepeatTimes),X()){if(!await Y()||!await G(e.funCaptchaRepeatTimes))return;await $()}},1e3))}async function pt(e){setInterval(async()=>{if(z()&&Q(e.funCaptchaRepeatTimes),X()){if(!await Y()||!await G(e.funCaptchaRepeatTimes))return;await $()}},1e3)}var B=null;B&&window.clearInterval(B);B=window.setInterval(async()=>{let e=await T.getAll();!e.isInit||(e.manualSolving?chrome.runtime.onMessage.addListener(t=>{t.command==="execute"&&pt(e)}):ft(e),window.clearInterval(B))},100);var Se=(0,Ee.bexContent)(e=>{});var J=chrome.runtime.connect({name:"contentScript"}),_e=!1;J.onDisconnect.addListener(()=>{_e=!0});var Re=new L({listen(e){J.onMessage.addListener(e)},send(e){_e||(J.postMessage(e),window.postMessage({...e,from:"bex-content-script"},"*"))}});function dt(e){let t=document.createElement("script");t.src=e,t.onload=function(){this.remove()},(document.head||document.documentElement).appendChild(t)}document instanceof HTMLDocument&&dt(chrome.runtime.getURL("dom.js"));ye(Re,"bex-dom");Se(Re);})();
