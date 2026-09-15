(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ov={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(o,e){(function(t,n){o.exports=n()})(sv,function(){const t=new Map,n={set(x,l,_){t.has(x)||t.set(x,new Map);const T=t.get(x);T.has(l)||T.size===0?T.set(l,_):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(T.keys())[0]}.`)},get:(x,l)=>t.has(x)&&t.get(x).get(l)||null,remove(x,l){if(!t.has(x))return;const _=t.get(x);_.delete(l),_.size===0&&t.delete(x)}},i="transitionend",r=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(l,_)=>`#${CSS.escape(_)}`)),x),a=x=>x==null?`${x}`:Object.prototype.toString.call(x).match(/\s([a-z]+)/i)[1].toLowerCase(),s=x=>{x.dispatchEvent(new Event(i))},c=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),u=x=>c(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(r(x)):null,h=x=>{if(!c(x)||x.getClientRects().length===0)return!1;const l=getComputedStyle(x).getPropertyValue("visibility")==="visible",_=x.closest("details:not([open])");if(!_)return l;if(_!==x){const T=x.closest("summary");if(T&&T.parentNode!==_||T===null)return!1}return l},p=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),f=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const l=x.getRootNode();return l instanceof ShadowRoot?l:null}return x instanceof ShadowRoot?x:x.parentNode?f(x.parentNode):null},m=()=>{},v=x=>{x.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],y=()=>document.documentElement.dir==="rtl",w=x=>{var l;l=()=>{const _=d();if(_){const T=x.NAME,k=_.fn[T];_.fn[T]=x.jQueryInterface,_.fn[T].Constructor=x,_.fn[T].noConflict=()=>(_.fn[T]=k,x.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const _ of g)_()}),g.push(l)):l()},M=(x,l=[],_=x)=>typeof x=="function"?x.call(...l):_,b=(x,l,_=!0)=>{if(!_)return void M(x);const T=(ee=>{if(!ee)return 0;let{transitionDuration:le,transitionDelay:_e}=window.getComputedStyle(ee);const De=Number.parseFloat(le),Re=Number.parseFloat(_e);return De||Re?(le=le.split(",")[0],_e=_e.split(",")[0],1e3*(Number.parseFloat(le)+Number.parseFloat(_e))):0})(l)+5;let k=!1;const B=({target:ee})=>{ee===l&&(k=!0,l.removeEventListener(i,B),M(x))};l.addEventListener(i,B),setTimeout(()=>{k||s(l)},T)},E=(x,l,_,T)=>{const k=x.length;let B=x.indexOf(l);return B===-1?!_&&T?x[k-1]:x[0]:(B+=_?1:-1,T&&(B=(B+k)%k),x[Math.max(0,Math.min(B,k-1))])},I=/[^.]*(?=\..*)\.|.*/,D=/\..*/,S=/::\d+$/,C={};let O=1;const K={mouseenter:"mouseover",mouseleave:"mouseout"},H=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function V(x,l){return l&&`${l}::${O++}`||x.uidEvent||O++}function N(x){const l=V(x);return x.uidEvent=l,C[l]=C[l]||{},C[l]}function Y(x,l,_=null){return Object.values(x).find(T=>T.callable===l&&T.delegationSelector===_)}function te(x,l,_){const T=typeof l=="string",k=T?_:l||_;let B=P(x);return H.has(B)||(B=x),[T,k,B]}function Q(x,l,_,T,k){if(typeof l!="string"||!x)return;let[B,ee,le]=te(l,_,T);l in K&&(ee=(et=>function(Je){if(!Je.relatedTarget||Je.relatedTarget!==Je.delegateTarget&&!Je.delegateTarget.contains(Je.relatedTarget))return et.call(this,Je)})(ee));const _e=N(x),De=_e[le]||(_e[le]={}),Re=Y(De,ee,B?_:null);if(Re)return void(Re.oneOff=Re.oneOff&&k);const Te=V(ee,l.replace(I,"")),st=B?function(Ze,et,Je){return function tt(Rt){const zt=Ze.querySelectorAll(et);for(let{target:ut}=Rt;ut&&ut!==this;ut=ut.parentNode)for(const St of zt)if(St===ut)return q(Rt,{delegateTarget:ut}),tt.oneOff&&U.off(Ze,Rt.type,et,Je),Je.apply(ut,[Rt])}}(x,_,ee):function(Ze,et){return function Je(tt){return q(tt,{delegateTarget:Ze}),Je.oneOff&&U.off(Ze,tt.type,et),et.apply(Ze,[tt])}}(x,ee);st.delegationSelector=B?_:null,st.callable=ee,st.oneOff=k,st.uidEvent=Te,De[Te]=st,x.addEventListener(le,st,B)}function j(x,l,_,T,k){const B=Y(l[_],T,k);B&&(x.removeEventListener(_,B,!!k),delete l[_][B.uidEvent])}function oe(x,l,_,T){const k=l[_]||{};for(const[B,ee]of Object.entries(k))B.includes(T)&&j(x,l,_,ee.callable,ee.delegationSelector)}function P(x){return x=x.replace(D,""),K[x]||x}const U={on(x,l,_,T){Q(x,l,_,T,!1)},one(x,l,_,T){Q(x,l,_,T,!0)},off(x,l,_,T){if(typeof l!="string"||!x)return;const[k,B,ee]=te(l,_,T),le=ee!==l,_e=N(x),De=_e[ee]||{},Re=l.startsWith(".");if(B===void 0){if(Re)for(const Te of Object.keys(_e))oe(x,_e,Te,l.slice(1));for(const[Te,st]of Object.entries(De)){const Ze=Te.replace(S,"");le&&!l.includes(Ze)||j(x,_e,ee,st.callable,st.delegationSelector)}}else{if(!Object.keys(De).length)return;j(x,_e,ee,B,k?_:null)}},trigger(x,l,_){if(typeof l!="string"||!x)return null;const T=d();let k=null,B=!0,ee=!0,le=!1;l!==P(l)&&T&&(k=T.Event(l,_),T(x).trigger(k),B=!k.isPropagationStopped(),ee=!k.isImmediatePropagationStopped(),le=k.isDefaultPrevented());const _e=q(new Event(l,{bubbles:B,cancelable:!0}),_);return le&&_e.preventDefault(),ee&&x.dispatchEvent(_e),_e.defaultPrevented&&k&&k.preventDefault(),_e}};function q(x,l={}){for(const[_,T]of Object.entries(l))try{x[_]=T}catch{Object.defineProperty(x,_,{configurable:!0,get:()=>T})}return x}function ce(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function he(x){return x.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const G={setDataAttribute(x,l,_){x.setAttribute(`data-bs-${he(l)}`,_)},removeDataAttribute(x,l){x.removeAttribute(`data-bs-${he(l)}`)},getDataAttributes(x){if(!x)return{};const l={},_=Object.keys(x.dataset).filter(T=>T.startsWith("bs")&&!T.startsWith("bsConfig"));for(const T of _){let k=T.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1),l[k]=ce(x.dataset[T])}return l},getDataAttribute:(x,l)=>ce(x.getAttribute(`data-bs-${he(l)}`))};class ge{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,_){const T=c(_)?G.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof T=="object"?T:{},...c(_)?G.getDataAttributes(_):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,_=this.constructor.DefaultType){for(const[T,k]of Object.entries(_)){const B=l[T],ee=c(B)?"element":a(B);if(!new RegExp(k).test(ee))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${T}" provided type "${ee}" but expected type "${k}".`)}}}class de extends ge{constructor(l,_){super(),(l=u(l))&&(this._element=l,this._config=this._getConfig(_),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),U.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,_,T=!0){b(l,_,T)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return n.get(u(l),this.DATA_KEY)}static getOrCreateInstance(l,_={}){return this.getInstance(l)||new this(l,typeof _=="object"?_:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const Me=x=>{let l=x.getAttribute("data-bs-target");if(!l||l==="#"){let _=x.getAttribute("href");if(!_||!_.includes("#")&&!_.startsWith("."))return null;_.includes("#")&&!_.startsWith("#")&&(_=`#${_.split("#")[1]}`),l=_&&_!=="#"?_.trim():null}return l?l.split(",").map(_=>r(_)).join(","):null},ne={find:(x,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,x)),findOne:(x,l=document.documentElement)=>Element.prototype.querySelector.call(l,x),children:(x,l)=>[].concat(...x.children).filter(_=>_.matches(l)),parents(x,l){const _=[];let T=x.parentNode.closest(l);for(;T;)_.push(T),T=T.parentNode.closest(l);return _},prev(x,l){let _=x.previousElementSibling;for(;_;){if(_.matches(l))return[_];_=_.previousElementSibling}return[]},next(x,l){let _=x.nextElementSibling;for(;_;){if(_.matches(l))return[_];_=_.nextElementSibling}return[]},focusableChildren(x){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(_=>`${_}:not([tabindex^="-"])`).join(",");return this.find(l,x).filter(_=>!p(_)&&h(_))},getSelectorFromElement(x){const l=Me(x);return l&&ne.findOne(l)?l:null},getElementFromSelector(x){const l=Me(x);return l?ne.findOne(l):null},getMultipleElementsFromSelector(x){const l=Me(x);return l?ne.find(l):[]}},Ne=(x,l="hide")=>{const _=`click.dismiss${x.EVENT_KEY}`,T=x.NAME;U.on(document,_,`[data-bs-dismiss="${T}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),p(this))return;const B=ne.getElementFromSelector(this)||this.closest(`.${T}`);x.getOrCreateInstance(B)[l]()})},Ve=".bs.alert",qe=`close${Ve}`,Ce=`closed${Ve}`;class nt extends de{static get NAME(){return"alert"}close(){if(U.trigger(this._element,qe).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),U.trigger(this._element,Ce),this.dispose()}static jQueryInterface(l){return this.each(function(){const _=nt.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}Ne(nt,"close"),w(nt);const Et='[data-bs-toggle="button"]';class xt extends de{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const _=xt.getOrCreateInstance(this);l==="toggle"&&_[l]()})}}U.on(document,"click.bs.button.data-api",Et,x=>{x.preventDefault();const l=x.target.closest(Et);xt.getOrCreateInstance(l).toggle()}),w(xt);const $=".bs.swipe",ct=`touchstart${$}`,gt=`touchmove${$}`,jt=`touchend${$}`,pt=`pointerdown${$}`,R=`pointerup${$}`,L={endCallback:null,leftCallback:null,rightCallback:null},re={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ue extends ge{constructor(l,_){super(),this._element=l,l&&ue.isSupported()&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return L}static get DefaultType(){return re}static get NAME(){return"swipe"}dispose(){U.off(this._element,$)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),M(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const _=l/this._deltaX;this._deltaX=0,_&&M(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(U.on(this._element,pt,l=>this._start(l)),U.on(this._element,R,l=>this._end(l)),this._element.classList.add("pointer-event")):(U.on(this._element,ct,l=>this._start(l)),U.on(this._element,gt,l=>this._move(l)),U.on(this._element,jt,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const fe=".bs.carousel",pe=".data-api",Pe="ArrowLeft",ye="ArrowRight",se="next",Ue="prev",me="left",We="right",ke=`slide${fe}`,Fe=`slid${fe}`,rt=`keydown${fe}`,yt=`mouseenter${fe}`,Dt=`mouseleave${fe}`,F=`dragstart${fe}`,ie=`load${fe}${pe}`,ae=`click${fe}${pe}`,ve="carousel",Se="active",mt=".active",Pt=".carousel-item",Ot=mt+Pt,ln={[Pe]:We,[ye]:me},Le={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Oe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class je extends de{constructor(l,_){super(l,_),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ve&&this.cycle()}static get Default(){return Le}static get DefaultType(){return Oe}static get NAME(){return"carousel"}next(){this._slide(se)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(Ue)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?U.one(this._element,Fe,()=>this.cycle()):this.cycle())}to(l){const _=this._getItems();if(l>_.length-1||l<0)return;if(this._isSliding)return void U.one(this._element,Fe,()=>this.to(l));const T=this._getItemIndex(this._getActive());if(T===l)return;const k=l>T?se:Ue;this._slide(k,_[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&U.on(this._element,rt,l=>this._keydown(l)),this._config.pause==="hover"&&(U.on(this._element,yt,()=>this.pause()),U.on(this._element,Dt,()=>this._maybeEnableCycle())),this._config.touch&&ue.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const _ of ne.find(".carousel-item img",this._element))U.on(_,F,T=>T.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(me)),rightCallback:()=>this._slide(this._directionToOrder(We)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new ue(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const _=ln[l.key];_&&(l.preventDefault(),this._slide(this._directionToOrder(_)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const _=ne.findOne(mt,this._indicatorsElement);_.classList.remove(Se),_.removeAttribute("aria-current");const T=ne.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);T&&(T.classList.add(Se),T.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const _=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=_||this._config.defaultInterval}_slide(l,_=null){if(this._isSliding)return;const T=this._getActive(),k=l===se,B=_||E(this._getItems(),T,k,this._config.wrap);if(B===T)return;const ee=this._getItemIndex(B),le=Te=>U.trigger(this._element,Te,{relatedTarget:B,direction:this._orderToDirection(l),from:this._getItemIndex(T),to:ee});if(le(ke).defaultPrevented||!T||!B)return;const _e=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(ee),this._activeElement=B;const De=k?"carousel-item-start":"carousel-item-end",Re=k?"carousel-item-next":"carousel-item-prev";B.classList.add(Re),v(B),T.classList.add(De),B.classList.add(De),this._queueCallback(()=>{B.classList.remove(De,Re),B.classList.add(Se),T.classList.remove(Se,Re,De),this._isSliding=!1,le(Fe)},T,this._isAnimated()),_e&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ne.findOne(Ot,this._element)}_getItems(){return ne.find(Pt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return y()?l===me?Ue:se:l===me?se:Ue}_orderToDirection(l){return y()?l===Ue?me:We:l===Ue?We:me}static jQueryInterface(l){return this.each(function(){const _=je.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}}else _.to(l)})}}U.on(document,ae,"[data-bs-slide], [data-bs-slide-to]",function(x){const l=ne.getElementFromSelector(this);if(!l||!l.classList.contains(ve))return;x.preventDefault();const _=je.getOrCreateInstance(l),T=this.getAttribute("data-bs-slide-to");return T?(_.to(T),void _._maybeEnableCycle()):G.getDataAttribute(this,"slide")==="next"?(_.next(),void _._maybeEnableCycle()):(_.prev(),void _._maybeEnableCycle())}),U.on(window,ie,()=>{const x=ne.find('[data-bs-ride="carousel"]');for(const l of x)je.getOrCreateInstance(l)}),w(je);const xe=".bs.collapse",Ke=`show${xe}`,He=`shown${xe}`,A=`hide${xe}`,W=`hidden${xe}`,X=`click${xe}.data-api`,z="show",Z="collapse",be="collapsing",Ee=`:scope .${Z} .${Z}`,Ae='[data-bs-toggle="collapse"]',Ye={parent:null,toggle:!0},Ge={parent:"(null|element)",toggle:"boolean"};class Xe extends de{constructor(l,_){super(l,_),this._isTransitioning=!1,this._triggerArray=[];const T=ne.find(Ae);for(const k of T){const B=ne.getSelectorFromElement(k),ee=ne.find(B).filter(le=>le===this._element);B!==null&&ee.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ye}static get DefaultType(){return Ge}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(k=>k!==this._element).map(k=>Xe.getOrCreateInstance(k,{toggle:!1}))),l.length&&l[0]._isTransitioning||U.trigger(this._element,Ke).defaultPrevented)return;for(const k of l)k.hide();const _=this._getDimension();this._element.classList.remove(Z),this._element.classList.add(be),this._element.style[_]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const T=`scroll${_[0].toUpperCase()+_.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(be),this._element.classList.add(Z,z),this._element.style[_]="",U.trigger(this._element,He)},this._element,!0),this._element.style[_]=`${this._element[T]}px`}hide(){if(this._isTransitioning||!this._isShown()||U.trigger(this._element,A).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,v(this._element),this._element.classList.add(be),this._element.classList.remove(Z,z);for(const _ of this._triggerArray){const T=ne.getElementFromSelector(_);T&&!this._isShown(T)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(be),this._element.classList.add(Z),U.trigger(this._element,W)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(z)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=u(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Ae);for(const _ of l){const T=ne.getElementFromSelector(_);T&&this._addAriaAndCollapsedClass([_],this._isShown(T))}}_getFirstLevelChildren(l){const _=ne.find(Ee,this._config.parent);return ne.find(l,this._config.parent).filter(T=>!_.includes(T))}_addAriaAndCollapsedClass(l,_){if(l.length)for(const T of l)T.classList.toggle("collapsed",!_),T.setAttribute("aria-expanded",_)}static jQueryInterface(l){const _={};return typeof l=="string"&&/show|hide/.test(l)&&(_.toggle=!1),this.each(function(){const T=Xe.getOrCreateInstance(this,_);if(typeof l=="string"){if(T[l]===void 0)throw new TypeError(`No method named "${l}"`);T[l]()}})}}U.on(document,X,Ae,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const l of ne.getMultipleElementsFromSelector(this))Xe.getOrCreateInstance(l,{toggle:!1}).toggle()}),w(Xe);var ze="top",$e="bottom",Qe="right",it="left",Qt="auto",bt=[ze,$e,Qe,it],Be="start",wt="end",Mt="clippingParents",An="viewport",_i="popper",Vn="reference",cn=bt.reduce(function(x,l){return x.concat([l+"-"+Be,l+"-"+wt])},[]),Ut=[].concat(bt,[Qt]).reduce(function(x,l){return x.concat([l,l+"-"+Be,l+"-"+wt])},[]),Cn="beforeRead",Ln="read",xn="afterRead",Os="beforeMain",Wa="main",No="afterMain",nf="beforeWrite",rf="write",sf="afterWrite",of=[Cn,Ln,xn,Os,Wa,No,nf,rf,sf];function Bi(x){return x?(x.nodeName||"").toLowerCase():null}function Jn(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var l=x.ownerDocument;return l&&l.defaultView||window}return x}function Xr(x){return x instanceof Jn(x).Element||x instanceof Element}function vi(x){return x instanceof Jn(x).HTMLElement||x instanceof HTMLElement}function bc(x){return typeof ShadowRoot<"u"&&(x instanceof Jn(x).ShadowRoot||x instanceof ShadowRoot)}const Mc={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var l=x.state;Object.keys(l.elements).forEach(function(_){var T=l.styles[_]||{},k=l.attributes[_]||{},B=l.elements[_];vi(B)&&Bi(B)&&(Object.assign(B.style,T),Object.keys(k).forEach(function(ee){var le=k[ee];le===!1?B.removeAttribute(ee):B.setAttribute(ee,le===!0?"":le)}))})},effect:function(x){var l=x.state,_={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,_.popper),l.styles=_,l.elements.arrow&&Object.assign(l.elements.arrow.style,_.arrow),function(){Object.keys(l.elements).forEach(function(T){var k=l.elements[T],B=l.attributes[T]||{},ee=Object.keys(l.styles.hasOwnProperty(T)?l.styles[T]:_[T]).reduce(function(le,_e){return le[_e]="",le},{});vi(k)&&Bi(k)&&(Object.assign(k.style,ee),Object.keys(B).forEach(function(le){k.removeAttribute(le)}))})}},requires:["computeStyles"]};function Gi(x){return x.split("-")[0]}var qr=Math.max,Ha=Math.min,Fs=Math.round;function Sc(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function af(){return!/^((?!chrome|android).)*safari/i.test(Sc())}function Ns(x,l,_){l===void 0&&(l=!1),_===void 0&&(_=!1);var T=x.getBoundingClientRect(),k=1,B=1;l&&vi(x)&&(k=x.offsetWidth>0&&Fs(T.width)/x.offsetWidth||1,B=x.offsetHeight>0&&Fs(T.height)/x.offsetHeight||1);var ee=(Xr(x)?Jn(x):window).visualViewport,le=!af()&&_,_e=(T.left+(le&&ee?ee.offsetLeft:0))/k,De=(T.top+(le&&ee?ee.offsetTop:0))/B,Re=T.width/k,Te=T.height/B;return{width:Re,height:Te,top:De,right:_e+Re,bottom:De+Te,left:_e,x:_e,y:De}}function wc(x){var l=Ns(x),_=x.offsetWidth,T=x.offsetHeight;return Math.abs(l.width-_)<=1&&(_=l.width),Math.abs(l.height-T)<=1&&(T=l.height),{x:x.offsetLeft,y:x.offsetTop,width:_,height:T}}function lf(x,l){var _=l.getRootNode&&l.getRootNode();if(x.contains(l))return!0;if(_&&bc(_)){var T=l;do{if(T&&x.isSameNode(T))return!0;T=T.parentNode||T.host}while(T)}return!1}function nr(x){return Jn(x).getComputedStyle(x)}function m_(x){return["table","td","th"].indexOf(Bi(x))>=0}function xr(x){return((Xr(x)?x.ownerDocument:x.document)||window.document).documentElement}function Xa(x){return Bi(x)==="html"?x:x.assignedSlot||x.parentNode||(bc(x)?x.host:null)||xr(x)}function cf(x){return vi(x)&&nr(x).position!=="fixed"?x.offsetParent:null}function ko(x){for(var l=Jn(x),_=cf(x);_&&m_(_)&&nr(_).position==="static";)_=cf(_);return _&&(Bi(_)==="html"||Bi(_)==="body"&&nr(_).position==="static")?l:_||function(T){var k=/firefox/i.test(Sc());if(/Trident/i.test(Sc())&&vi(T)&&nr(T).position==="fixed")return null;var B=Xa(T);for(bc(B)&&(B=B.host);vi(B)&&["html","body"].indexOf(Bi(B))<0;){var ee=nr(B);if(ee.transform!=="none"||ee.perspective!=="none"||ee.contain==="paint"||["transform","perspective"].indexOf(ee.willChange)!==-1||k&&ee.willChange==="filter"||k&&ee.filter&&ee.filter!=="none")return B;B=B.parentNode}return null}(x)||l}function Tc(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function zo(x,l,_){return qr(x,Ha(l,_))}function uf(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function hf(x,l){return l.reduce(function(_,T){return _[T]=x,_},{})}const ff={name:"arrow",enabled:!0,phase:"main",fn:function(x){var l,_=x.state,T=x.name,k=x.options,B=_.elements.arrow,ee=_.modifiersData.popperOffsets,le=Gi(_.placement),_e=Tc(le),De=[it,Qe].indexOf(le)>=0?"height":"width";if(B&&ee){var Re=function(It,Ct){return uf(typeof(It=typeof It=="function"?It(Object.assign({},Ct.rects,{placement:Ct.placement})):It)!="number"?It:hf(It,bt))}(k.padding,_),Te=wc(B),st=_e==="y"?ze:it,Ze=_e==="y"?$e:Qe,et=_.rects.reference[De]+_.rects.reference[_e]-ee[_e]-_.rects.popper[De],Je=ee[_e]-_.rects.reference[_e],tt=ko(B),Rt=tt?_e==="y"?tt.clientHeight||0:tt.clientWidth||0:0,zt=et/2-Je/2,ut=Re[st],St=Rt-Te[De]-Re[Ze],ot=Rt/2-Te[De]/2+zt,_t=zo(ut,ot,St),At=_e;_.modifiersData[T]=((l={})[At]=_t,l.centerOffset=_t-ot,l)}},effect:function(x){var l=x.state,_=x.options.element,T=_===void 0?"[data-popper-arrow]":_;T!=null&&(typeof T!="string"||(T=l.elements.popper.querySelector(T)))&&lf(l.elements.popper,T)&&(l.elements.arrow=T)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ks(x){return x.split("-")[1]}var g_={top:"auto",right:"auto",bottom:"auto",left:"auto"};function df(x){var l,_=x.popper,T=x.popperRect,k=x.placement,B=x.variation,ee=x.offsets,le=x.position,_e=x.gpuAcceleration,De=x.adaptive,Re=x.roundOffsets,Te=x.isFixed,st=ee.x,Ze=st===void 0?0:st,et=ee.y,Je=et===void 0?0:et,tt=typeof Re=="function"?Re({x:Ze,y:Je}):{x:Ze,y:Je};Ze=tt.x,Je=tt.y;var Rt=ee.hasOwnProperty("x"),zt=ee.hasOwnProperty("y"),ut=it,St=ze,ot=window;if(De){var _t=ko(_),At="clientHeight",It="clientWidth";_t===Jn(_)&&nr(_t=xr(_)).position!=="static"&&le==="absolute"&&(At="scrollHeight",It="scrollWidth"),(k===ze||(k===it||k===Qe)&&B===wt)&&(St=$e,Je-=(Te&&_t===ot&&ot.visualViewport?ot.visualViewport.height:_t[At])-T.height,Je*=_e?1:-1),k!==it&&(k!==ze&&k!==$e||B!==wt)||(ut=Qe,Ze-=(Te&&_t===ot&&ot.visualViewport?ot.visualViewport.width:_t[It])-T.width,Ze*=_e?1:-1)}var Ct,Zt=Object.assign({position:le},De&&g_),Qn=Re===!0?function(Ii,Dn){var yi=Ii.x,bi=Ii.y,$t=Dn.devicePixelRatio||1;return{x:Fs(yi*$t)/$t||0,y:Fs(bi*$t)/$t||0}}({x:Ze,y:Je},Jn(_)):{x:Ze,y:Je};return Ze=Qn.x,Je=Qn.y,_e?Object.assign({},Zt,((Ct={})[St]=zt?"0":"",Ct[ut]=Rt?"0":"",Ct.transform=(ot.devicePixelRatio||1)<=1?"translate("+Ze+"px, "+Je+"px)":"translate3d("+Ze+"px, "+Je+"px, 0)",Ct)):Object.assign({},Zt,((l={})[St]=zt?Je+"px":"",l[ut]=Rt?Ze+"px":"",l.transform="",l))}const Ec={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var l=x.state,_=x.options,T=_.gpuAcceleration,k=T===void 0||T,B=_.adaptive,ee=B===void 0||B,le=_.roundOffsets,_e=le===void 0||le,De={placement:Gi(l.placement),variation:ks(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:k,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,df(Object.assign({},De,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:ee,roundOffsets:_e})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,df(Object.assign({},De,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_e})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var qa={passive:!0};const Ac={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var l=x.state,_=x.instance,T=x.options,k=T.scroll,B=k===void 0||k,ee=T.resize,le=ee===void 0||ee,_e=Jn(l.elements.popper),De=[].concat(l.scrollParents.reference,l.scrollParents.popper);return B&&De.forEach(function(Re){Re.addEventListener("scroll",_.update,qa)}),le&&_e.addEventListener("resize",_.update,qa),function(){B&&De.forEach(function(Re){Re.removeEventListener("scroll",_.update,qa)}),le&&_e.removeEventListener("resize",_.update,qa)}},data:{}};var __={left:"right",right:"left",bottom:"top",top:"bottom"};function $a(x){return x.replace(/left|right|bottom|top/g,function(l){return __[l]})}var v_={start:"end",end:"start"};function pf(x){return x.replace(/start|end/g,function(l){return v_[l]})}function Cc(x){var l=Jn(x);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function Lc(x){return Ns(xr(x)).left+Cc(x).scrollLeft}function Dc(x){var l=nr(x),_=l.overflow,T=l.overflowX,k=l.overflowY;return/auto|scroll|overlay|hidden/.test(_+k+T)}function mf(x){return["html","body","#document"].indexOf(Bi(x))>=0?x.ownerDocument.body:vi(x)&&Dc(x)?x:mf(Xa(x))}function Uo(x,l){var _;l===void 0&&(l=[]);var T=mf(x),k=T===((_=x.ownerDocument)==null?void 0:_.body),B=Jn(T),ee=k?[B].concat(B.visualViewport||[],Dc(T)?T:[]):T,le=l.concat(ee);return k?le:le.concat(Uo(Xa(ee)))}function Pc(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function gf(x,l,_){return l===An?Pc(function(T,k){var B=Jn(T),ee=xr(T),le=B.visualViewport,_e=ee.clientWidth,De=ee.clientHeight,Re=0,Te=0;if(le){_e=le.width,De=le.height;var st=af();(st||!st&&k==="fixed")&&(Re=le.offsetLeft,Te=le.offsetTop)}return{width:_e,height:De,x:Re+Lc(T),y:Te}}(x,_)):Xr(l)?function(T,k){var B=Ns(T,!1,k==="fixed");return B.top=B.top+T.clientTop,B.left=B.left+T.clientLeft,B.bottom=B.top+T.clientHeight,B.right=B.left+T.clientWidth,B.width=T.clientWidth,B.height=T.clientHeight,B.x=B.left,B.y=B.top,B}(l,_):Pc(function(T){var k,B=xr(T),ee=Cc(T),le=(k=T.ownerDocument)==null?void 0:k.body,_e=qr(B.scrollWidth,B.clientWidth,le?le.scrollWidth:0,le?le.clientWidth:0),De=qr(B.scrollHeight,B.clientHeight,le?le.scrollHeight:0,le?le.clientHeight:0),Re=-ee.scrollLeft+Lc(T),Te=-ee.scrollTop;return nr(le||B).direction==="rtl"&&(Re+=qr(B.clientWidth,le?le.clientWidth:0)-_e),{width:_e,height:De,x:Re,y:Te}}(xr(x)))}function _f(x){var l,_=x.reference,T=x.element,k=x.placement,B=k?Gi(k):null,ee=k?ks(k):null,le=_.x+_.width/2-T.width/2,_e=_.y+_.height/2-T.height/2;switch(B){case ze:l={x:le,y:_.y-T.height};break;case $e:l={x:le,y:_.y+_.height};break;case Qe:l={x:_.x+_.width,y:_e};break;case it:l={x:_.x-T.width,y:_e};break;default:l={x:_.x,y:_.y}}var De=B?Tc(B):null;if(De!=null){var Re=De==="y"?"height":"width";switch(ee){case Be:l[De]=l[De]-(_[Re]/2-T[Re]/2);break;case wt:l[De]=l[De]+(_[Re]/2-T[Re]/2)}}return l}function zs(x,l){l===void 0&&(l={});var _=l,T=_.placement,k=T===void 0?x.placement:T,B=_.strategy,ee=B===void 0?x.strategy:B,le=_.boundary,_e=le===void 0?Mt:le,De=_.rootBoundary,Re=De===void 0?An:De,Te=_.elementContext,st=Te===void 0?_i:Te,Ze=_.altBoundary,et=Ze!==void 0&&Ze,Je=_.padding,tt=Je===void 0?0:Je,Rt=uf(typeof tt!="number"?tt:hf(tt,bt)),zt=st===_i?Vn:_i,ut=x.rects.popper,St=x.elements[et?zt:st],ot=function(Dn,yi,bi,$t){var Vi=yi==="clippingParents"?function(Ft){var Pn=Uo(Xa(Ft)),Mi=["absolute","fixed"].indexOf(nr(Ft).position)>=0&&vi(Ft)?ko(Ft):Ft;return Xr(Mi)?Pn.filter(function(br){return Xr(br)&&lf(br,Mi)&&Bi(br)!=="body"}):[]}(Dn):[].concat(yi),Wi=[].concat(Vi,[bi]),Gs=Wi[0],un=Wi.reduce(function(Ft,Pn){var Mi=gf(Dn,Pn,$t);return Ft.top=qr(Mi.top,Ft.top),Ft.right=Ha(Mi.right,Ft.right),Ft.bottom=Ha(Mi.bottom,Ft.bottom),Ft.left=qr(Mi.left,Ft.left),Ft},gf(Dn,Gs,$t));return un.width=un.right-un.left,un.height=un.bottom-un.top,un.x=un.left,un.y=un.top,un}(Xr(St)?St:St.contextElement||xr(x.elements.popper),_e,Re,ee),_t=Ns(x.elements.reference),At=_f({reference:_t,element:ut,placement:k}),It=Pc(Object.assign({},ut,At)),Ct=st===_i?It:_t,Zt={top:ot.top-Ct.top+Rt.top,bottom:Ct.bottom-ot.bottom+Rt.bottom,left:ot.left-Ct.left+Rt.left,right:Ct.right-ot.right+Rt.right},Qn=x.modifiersData.offset;if(st===_i&&Qn){var Ii=Qn[k];Object.keys(Zt).forEach(function(Dn){var yi=[Qe,$e].indexOf(Dn)>=0?1:-1,bi=[ze,$e].indexOf(Dn)>=0?"y":"x";Zt[Dn]+=Ii[bi]*yi})}return Zt}function x_(x,l){l===void 0&&(l={});var _=l,T=_.placement,k=_.boundary,B=_.rootBoundary,ee=_.padding,le=_.flipVariations,_e=_.allowedAutoPlacements,De=_e===void 0?Ut:_e,Re=ks(T),Te=Re?le?cn:cn.filter(function(et){return ks(et)===Re}):bt,st=Te.filter(function(et){return De.indexOf(et)>=0});st.length===0&&(st=Te);var Ze=st.reduce(function(et,Je){return et[Je]=zs(x,{placement:Je,boundary:k,rootBoundary:B,padding:ee})[Gi(Je)],et},{});return Object.keys(Ze).sort(function(et,Je){return Ze[et]-Ze[Je]})}const vf={name:"flip",enabled:!0,phase:"main",fn:function(x){var l=x.state,_=x.options,T=x.name;if(!l.modifiersData[T]._skip){for(var k=_.mainAxis,B=k===void 0||k,ee=_.altAxis,le=ee===void 0||ee,_e=_.fallbackPlacements,De=_.padding,Re=_.boundary,Te=_.rootBoundary,st=_.altBoundary,Ze=_.flipVariations,et=Ze===void 0||Ze,Je=_.allowedAutoPlacements,tt=l.options.placement,Rt=Gi(tt),zt=_e||(Rt!==tt&&et?function(Ft){if(Gi(Ft)===Qt)return[];var Pn=$a(Ft);return[pf(Ft),Pn,pf(Pn)]}(tt):[$a(tt)]),ut=[tt].concat(zt).reduce(function(Ft,Pn){return Ft.concat(Gi(Pn)===Qt?x_(l,{placement:Pn,boundary:Re,rootBoundary:Te,padding:De,flipVariations:et,allowedAutoPlacements:Je}):Pn)},[]),St=l.rects.reference,ot=l.rects.popper,_t=new Map,At=!0,It=ut[0],Ct=0;Ct<ut.length;Ct++){var Zt=ut[Ct],Qn=Gi(Zt),Ii=ks(Zt)===Be,Dn=[ze,$e].indexOf(Qn)>=0,yi=Dn?"width":"height",bi=zs(l,{placement:Zt,boundary:Re,rootBoundary:Te,altBoundary:st,padding:De}),$t=Dn?Ii?Qe:it:Ii?$e:ze;St[yi]>ot[yi]&&($t=$a($t));var Vi=$a($t),Wi=[];if(B&&Wi.push(bi[Qn]<=0),le&&Wi.push(bi[$t]<=0,bi[Vi]<=0),Wi.every(function(Ft){return Ft})){It=Zt,At=!1;break}_t.set(Zt,Wi)}if(At)for(var Gs=function(Ft){var Pn=ut.find(function(Mi){var br=_t.get(Mi);if(br)return br.slice(0,Ft).every(function(nl){return nl})});if(Pn)return It=Pn,"break"},un=et?3:1;un>0&&Gs(un)!=="break";un--);l.placement!==It&&(l.modifiersData[T]._skip=!0,l.placement=It,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function xf(x,l,_){return _===void 0&&(_={x:0,y:0}),{top:x.top-l.height-_.y,right:x.right-l.width+_.x,bottom:x.bottom-l.height+_.y,left:x.left-l.width-_.x}}function yf(x){return[ze,Qe,$e,it].some(function(l){return x[l]>=0})}const bf={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var l=x.state,_=x.name,T=l.rects.reference,k=l.rects.popper,B=l.modifiersData.preventOverflow,ee=zs(l,{elementContext:"reference"}),le=zs(l,{altBoundary:!0}),_e=xf(ee,T),De=xf(le,k,B),Re=yf(_e),Te=yf(De);l.modifiersData[_]={referenceClippingOffsets:_e,popperEscapeOffsets:De,isReferenceHidden:Re,hasPopperEscaped:Te},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":Re,"data-popper-escaped":Te})}},Mf={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var l=x.state,_=x.options,T=x.name,k=_.offset,B=k===void 0?[0,0]:k,ee=Ut.reduce(function(Re,Te){return Re[Te]=function(st,Ze,et){var Je=Gi(st),tt=[it,ze].indexOf(Je)>=0?-1:1,Rt=typeof et=="function"?et(Object.assign({},Ze,{placement:st})):et,zt=Rt[0],ut=Rt[1];return zt=zt||0,ut=(ut||0)*tt,[it,Qe].indexOf(Je)>=0?{x:ut,y:zt}:{x:zt,y:ut}}(Te,l.rects,B),Re},{}),le=ee[l.placement],_e=le.x,De=le.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=_e,l.modifiersData.popperOffsets.y+=De),l.modifiersData[T]=ee}},Rc={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var l=x.state,_=x.name;l.modifiersData[_]=_f({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},Sf={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var l=x.state,_=x.options,T=x.name,k=_.mainAxis,B=k===void 0||k,ee=_.altAxis,le=ee!==void 0&&ee,_e=_.boundary,De=_.rootBoundary,Re=_.altBoundary,Te=_.padding,st=_.tether,Ze=st===void 0||st,et=_.tetherOffset,Je=et===void 0?0:et,tt=zs(l,{boundary:_e,rootBoundary:De,padding:Te,altBoundary:Re}),Rt=Gi(l.placement),zt=ks(l.placement),ut=!zt,St=Tc(Rt),ot=St==="x"?"y":"x",_t=l.modifiersData.popperOffsets,At=l.rects.reference,It=l.rects.popper,Ct=typeof Je=="function"?Je(Object.assign({},l.rects,{placement:l.placement})):Je,Zt=typeof Ct=="number"?{mainAxis:Ct,altAxis:Ct}:Object.assign({mainAxis:0,altAxis:0},Ct),Qn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,Ii={x:0,y:0};if(_t){if(B){var Dn,yi=St==="y"?ze:it,bi=St==="y"?$e:Qe,$t=St==="y"?"height":"width",Vi=_t[St],Wi=Vi+tt[yi],Gs=Vi-tt[bi],un=Ze?-It[$t]/2:0,Ft=zt===Be?At[$t]:It[$t],Pn=zt===Be?-It[$t]:-At[$t],Mi=l.elements.arrow,br=Ze&&Mi?wc(Mi):{width:0,height:0},nl=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},cd=nl[yi],ud=nl[bi],il=zo(0,At[$t],br[$t]),K0=ut?At[$t]/2-un-il-cd-Zt.mainAxis:Ft-il-cd-Zt.mainAxis,J0=ut?-At[$t]/2+un+il+ud+Zt.mainAxis:Pn+il+ud+Zt.mainAxis,qc=l.elements.arrow&&ko(l.elements.arrow),Q0=qc?St==="y"?qc.clientTop||0:qc.clientLeft||0:0,hd=(Dn=Qn==null?void 0:Qn[St])!=null?Dn:0,ev=Vi+J0-hd,fd=zo(Ze?Ha(Wi,Vi+K0-hd-Q0):Wi,Vi,Ze?qr(Gs,ev):Gs);_t[St]=fd,Ii[St]=fd-Vi}if(le){var dd,tv=St==="x"?ze:it,nv=St==="x"?$e:Qe,es=_t[ot],rl=ot==="y"?"height":"width",pd=es+tt[tv],md=es-tt[nv],$c=[ze,it].indexOf(Rt)!==-1,gd=(dd=Qn==null?void 0:Qn[ot])!=null?dd:0,_d=$c?pd:es-At[rl]-It[rl]-gd+Zt.altAxis,vd=$c?es+At[rl]+It[rl]-gd-Zt.altAxis:md,xd=Ze&&$c?function(iv,rv,Yc){var yd=zo(iv,rv,Yc);return yd>Yc?Yc:yd}(_d,es,vd):zo(Ze?_d:pd,es,Ze?vd:md);_t[ot]=xd,Ii[ot]=xd-es}l.modifiersData[T]=Ii}},requiresIfExists:["offset"]};function y_(x,l,_){_===void 0&&(_=!1);var T,k,B=vi(l),ee=vi(l)&&function(Te){var st=Te.getBoundingClientRect(),Ze=Fs(st.width)/Te.offsetWidth||1,et=Fs(st.height)/Te.offsetHeight||1;return Ze!==1||et!==1}(l),le=xr(l),_e=Ns(x,ee,_),De={scrollLeft:0,scrollTop:0},Re={x:0,y:0};return(B||!B&&!_)&&((Bi(l)!=="body"||Dc(le))&&(De=(T=l)!==Jn(T)&&vi(T)?{scrollLeft:(k=T).scrollLeft,scrollTop:k.scrollTop}:Cc(T)),vi(l)?((Re=Ns(l,!0)).x+=l.clientLeft,Re.y+=l.clientTop):le&&(Re.x=Lc(le))),{x:_e.left+De.scrollLeft-Re.x,y:_e.top+De.scrollTop-Re.y,width:_e.width,height:_e.height}}function b_(x){var l=new Map,_=new Set,T=[];function k(B){_.add(B.name),[].concat(B.requires||[],B.requiresIfExists||[]).forEach(function(ee){if(!_.has(ee)){var le=l.get(ee);le&&k(le)}}),T.push(B)}return x.forEach(function(B){l.set(B.name,B)}),x.forEach(function(B){_.has(B.name)||k(B)}),T}var wf={placement:"bottom",modifiers:[],strategy:"absolute"};function Tf(){for(var x=arguments.length,l=new Array(x),_=0;_<x;_++)l[_]=arguments[_];return!l.some(function(T){return!(T&&typeof T.getBoundingClientRect=="function")})}function Ya(x){x===void 0&&(x={});var l=x,_=l.defaultModifiers,T=_===void 0?[]:_,k=l.defaultOptions,B=k===void 0?wf:k;return function(ee,le,_e){_e===void 0&&(_e=B);var De,Re,Te={placement:"bottom",orderedModifiers:[],options:Object.assign({},wf,B),modifiersData:{},elements:{reference:ee,popper:le},attributes:{},styles:{}},st=[],Ze=!1,et={state:Te,setOptions:function(tt){var Rt=typeof tt=="function"?tt(Te.options):tt;Je(),Te.options=Object.assign({},B,Te.options,Rt),Te.scrollParents={reference:Xr(ee)?Uo(ee):ee.contextElement?Uo(ee.contextElement):[],popper:Uo(le)};var zt,ut,St=function(ot){var _t=b_(ot);return of.reduce(function(At,It){return At.concat(_t.filter(function(Ct){return Ct.phase===It}))},[])}((zt=[].concat(T,Te.options.modifiers),ut=zt.reduce(function(ot,_t){var At=ot[_t.name];return ot[_t.name]=At?Object.assign({},At,_t,{options:Object.assign({},At.options,_t.options),data:Object.assign({},At.data,_t.data)}):_t,ot},{}),Object.keys(ut).map(function(ot){return ut[ot]})));return Te.orderedModifiers=St.filter(function(ot){return ot.enabled}),Te.orderedModifiers.forEach(function(ot){var _t=ot.name,At=ot.options,It=At===void 0?{}:At,Ct=ot.effect;if(typeof Ct=="function"){var Zt=Ct({state:Te,name:_t,instance:et,options:It});st.push(Zt||function(){})}}),et.update()},forceUpdate:function(){if(!Ze){var tt=Te.elements,Rt=tt.reference,zt=tt.popper;if(Tf(Rt,zt)){Te.rects={reference:y_(Rt,ko(zt),Te.options.strategy==="fixed"),popper:wc(zt)},Te.reset=!1,Te.placement=Te.options.placement,Te.orderedModifiers.forEach(function(Ct){return Te.modifiersData[Ct.name]=Object.assign({},Ct.data)});for(var ut=0;ut<Te.orderedModifiers.length;ut++)if(Te.reset!==!0){var St=Te.orderedModifiers[ut],ot=St.fn,_t=St.options,At=_t===void 0?{}:_t,It=St.name;typeof ot=="function"&&(Te=ot({state:Te,options:At,name:It,instance:et})||Te)}else Te.reset=!1,ut=-1}}},update:(De=function(){return new Promise(function(tt){et.forceUpdate(),tt(Te)})},function(){return Re||(Re=new Promise(function(tt){Promise.resolve().then(function(){Re=void 0,tt(De())})})),Re}),destroy:function(){Je(),Ze=!0}};if(!Tf(ee,le))return et;function Je(){st.forEach(function(tt){return tt()}),st=[]}return et.setOptions(_e).then(function(tt){!Ze&&_e.onFirstUpdate&&_e.onFirstUpdate(tt)}),et}}var M_=Ya(),S_=Ya({defaultModifiers:[Ac,Rc,Ec,Mc]}),Ic=Ya({defaultModifiers:[Ac,Rc,Ec,Mc,Mf,vf,Sf,ff,bf]});const Ef=Object.freeze(Object.defineProperty({__proto__:null,afterMain:No,afterRead:xn,afterWrite:sf,applyStyles:Mc,arrow:ff,auto:Qt,basePlacements:bt,beforeMain:Os,beforeRead:Cn,beforeWrite:nf,bottom:$e,clippingParents:Mt,computeStyles:Ec,createPopper:Ic,createPopperBase:M_,createPopperLite:S_,detectOverflow:zs,end:wt,eventListeners:Ac,flip:vf,hide:bf,left:it,main:Wa,modifierPhases:of,offset:Mf,placements:Ut,popper:_i,popperGenerator:Ya,popperOffsets:Rc,preventOverflow:Sf,read:Ln,reference:Vn,right:Qe,start:Be,top:ze,variationPlacements:cn,viewport:An,write:rf},Symbol.toStringTag,{value:"Module"})),Af="dropdown",$r=".bs.dropdown",Oc=".data-api",w_="ArrowUp",Cf="ArrowDown",T_=`hide${$r}`,E_=`hidden${$r}`,A_=`show${$r}`,C_=`shown${$r}`,Lf=`click${$r}${Oc}`,Df=`keydown${$r}${Oc}`,L_=`keyup${$r}${Oc}`,Us="show",Yr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',D_=`${Yr}.${Us}`,ja=".dropdown-menu",P_=y()?"top-end":"top-start",R_=y()?"top-start":"top-end",I_=y()?"bottom-end":"bottom-start",O_=y()?"bottom-start":"bottom-end",F_=y()?"left-start":"right-start",N_=y()?"right-start":"left-start",k_={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},z_={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ri extends de{constructor(l,_){super(l,_),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,ja)[0]||ne.prev(this._element,ja)[0]||ne.findOne(ja,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return k_}static get DefaultType(){return z_}static get NAME(){return Af}toggle(){return this._isShown()?this.hide():this.show()}show(){if(p(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!U.trigger(this._element,A_,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const _ of[].concat(...document.body.children))U.on(_,"mouseover",m);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Us),this._element.classList.add(Us),U.trigger(this._element,C_,l)}}hide(){if(p(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!U.trigger(this._element,T_,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const _ of[].concat(...document.body.children))U.off(_,"mouseover",m);this._popper&&this._popper.destroy(),this._menu.classList.remove(Us),this._element.classList.remove(Us),this._element.setAttribute("aria-expanded","false"),G.removeDataAttribute(this._menu,"popper"),U.trigger(this._element,E_,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!c(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Af.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Ef===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:c(this._config.reference)?l=u(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const _=this._getPopperConfig();this._popper=Ic(l,this._menu,_)}_isShown(){return this._menu.classList.contains(Us)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return F_;if(l.classList.contains("dropstart"))return N_;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?_?R_:P_:_?O_:I_}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(G.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...M(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:_}){const T=ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(k=>h(k));T.length&&E(T,_,l===Cf,!T.includes(_)).focus()}static jQueryInterface(l){return this.each(function(){const _=Ri.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const _=ne.find(D_);for(const T of _){const k=Ri.getInstance(T);if(!k||k._config.autoClose===!1)continue;const B=l.composedPath(),ee=B.includes(k._menu);if(B.includes(k._element)||k._config.autoClose==="inside"&&!ee||k._config.autoClose==="outside"&&ee||k._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const le={relatedTarget:k._element};l.type==="click"&&(le.clickEvent=l),k._completeHide(le)}}static dataApiKeydownHandler(l){const _=/input|textarea/i.test(l.target.tagName),T=l.key==="Escape",k=[w_,Cf].includes(l.key);if(!k&&!T||_&&!T)return;l.preventDefault();const B=this.matches(Yr)?this:ne.prev(this,Yr)[0]||ne.next(this,Yr)[0]||ne.findOne(Yr,l.delegateTarget.parentNode),ee=Ri.getOrCreateInstance(B);if(k)return l.stopPropagation(),ee.show(),void ee._selectMenuItem(l);ee._isShown()&&(l.stopPropagation(),ee.hide(),B.focus())}}U.on(document,Df,Yr,Ri.dataApiKeydownHandler),U.on(document,Df,ja,Ri.dataApiKeydownHandler),U.on(document,Lf,Ri.clearMenus),U.on(document,L_,Ri.clearMenus),U.on(document,Lf,Yr,function(x){x.preventDefault(),Ri.getOrCreateInstance(this).toggle()}),w(Ri);const Pf="backdrop",Rf="show",If=`mousedown.bs.${Pf}`,U_={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},B_={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Of extends ge{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return U_}static get DefaultType(){return B_}static get NAME(){return Pf}show(l){if(!this._config.isVisible)return void M(l);this._append();const _=this._getElement();this._config.isAnimated&&v(_),_.classList.add(Rf),this._emulateAnimation(()=>{M(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(Rf),this._emulateAnimation(()=>{this.dispose(),M(l)})):M(l)}dispose(){this._isAppended&&(U.off(this._element,If),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=u(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),U.on(l,If,()=>{M(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){b(l,this._getElement(),this._config.isAnimated)}}const Za=".bs.focustrap",G_=`focusin${Za}`,V_=`keydown.tab${Za}`,Ff="backward",W_={autofocus:!0,trapElement:null},H_={autofocus:"boolean",trapElement:"element"};class Nf extends ge{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return W_}static get DefaultType(){return H_}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),U.off(document,Za),U.on(document,G_,l=>this._handleFocusin(l)),U.on(document,V_,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,U.off(document,Za))}_handleFocusin(l){const{trapElement:_}=this._config;if(l.target===document||l.target===_||_.contains(l.target))return;const T=ne.focusableChildren(_);T.length===0?_.focus():this._lastTabNavDirection===Ff?T[T.length-1].focus():T[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Ff:"forward")}}const kf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zf=".sticky-top",Ka="padding-right",Uf="margin-right";class Fc{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ka,_=>_+l),this._setElementAttributes(kf,Ka,_=>_+l),this._setElementAttributes(zf,Uf,_=>_-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ka),this._resetElementAttributes(kf,Ka),this._resetElementAttributes(zf,Uf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,_,T){const k=this.getWidth();this._applyManipulationCallback(l,B=>{if(B!==this._element&&window.innerWidth>B.clientWidth+k)return;this._saveInitialAttribute(B,_);const ee=window.getComputedStyle(B).getPropertyValue(_);B.style.setProperty(_,`${T(Number.parseFloat(ee))}px`)})}_saveInitialAttribute(l,_){const T=l.style.getPropertyValue(_);T&&G.setDataAttribute(l,_,T)}_resetElementAttributes(l,_){this._applyManipulationCallback(l,T=>{const k=G.getDataAttribute(T,_);k!==null?(G.removeDataAttribute(T,_),T.style.setProperty(_,k)):T.style.removeProperty(_)})}_applyManipulationCallback(l,_){if(c(l))_(l);else for(const T of ne.find(l,this._element))_(T)}}const xi=".bs.modal",X_=`hide${xi}`,q_=`hidePrevented${xi}`,Bf=`hidden${xi}`,Gf=`show${xi}`,$_=`shown${xi}`,Y_=`resize${xi}`,j_=`click.dismiss${xi}`,Z_=`mousedown.dismiss${xi}`,K_=`keydown.dismiss${xi}`,J_=`click${xi}.data-api`,Vf="modal-open",Wf="show",Nc="modal-static",Q_={backdrop:!0,focus:!0,keyboard:!0},e0={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class jr extends de{constructor(l,_){super(l,_),this._dialog=ne.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Fc,this._addEventListeners()}static get Default(){return Q_}static get DefaultType(){return e0}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||U.trigger(this._element,Gf,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Vf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(U.trigger(this._element,X_).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Wf),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){U.off(window,xi),U.off(this._dialog,xi),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Of({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Nf({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const _=ne.findOne(".modal-body",this._dialog);_&&(_.scrollTop=0),v(this._element),this._element.classList.add(Wf),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,U.trigger(this._element,$_,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){U.on(this._element,K_,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),U.on(window,Y_,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),U.on(this._element,Z_,l=>{U.one(this._element,j_,_=>{this._element===l.target&&this._element===_.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Vf),this._resetAdjustments(),this._scrollBar.reset(),U.trigger(this._element,Bf)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(U.trigger(this._element,q_).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._element.style.overflowY;_==="hidden"||this._element.classList.contains(Nc)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(Nc),this._queueCallback(()=>{this._element.classList.remove(Nc),this._queueCallback(()=>{this._element.style.overflowY=_},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._scrollBar.getWidth(),T=_>0;if(T&&!l){const k=y()?"paddingLeft":"paddingRight";this._element.style[k]=`${_}px`}if(!T&&l){const k=y()?"paddingRight":"paddingLeft";this._element.style[k]=`${_}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,_){return this.each(function(){const T=jr.getOrCreateInstance(this,l);if(typeof l=="string"){if(T[l]===void 0)throw new TypeError(`No method named "${l}"`);T[l](_)}})}}U.on(document,J_,'[data-bs-toggle="modal"]',function(x){const l=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),U.one(l,Gf,T=>{T.defaultPrevented||U.one(l,Bf,()=>{h(this)&&this.focus()})});const _=ne.findOne(".modal.show");_&&jr.getInstance(_).hide(),jr.getOrCreateInstance(l).toggle(this)}),Ne(jr),w(jr);const ir=".bs.offcanvas",Hf=".data-api",t0=`load${ir}${Hf}`,Xf="show",qf="showing",$f="hiding",Yf=".offcanvas.show",n0=`show${ir}`,i0=`shown${ir}`,r0=`hide${ir}`,jf=`hidePrevented${ir}`,Zf=`hidden${ir}`,s0=`resize${ir}`,o0=`click${ir}${Hf}`,a0=`keydown.dismiss${ir}`,l0={backdrop:!0,keyboard:!0,scroll:!1},c0={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class rr extends de{constructor(l,_){super(l,_),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return l0}static get DefaultType(){return c0}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||U.trigger(this._element,n0,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Fc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(qf),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Xf),this._element.classList.remove(qf),U.trigger(this._element,i0,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(U.trigger(this._element,r0).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($f),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Xf,$f),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Fc().reset(),U.trigger(this._element,Zf)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Of({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():U.trigger(this._element,jf)}:null})}_initializeFocusTrap(){return new Nf({trapElement:this._element})}_addEventListeners(){U.on(this._element,a0,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():U.trigger(this._element,jf))})}static jQueryInterface(l){return this.each(function(){const _=rr.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}U.on(document,o0,'[data-bs-toggle="offcanvas"]',function(x){const l=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),p(this))return;U.one(l,Zf,()=>{h(this)&&this.focus()});const _=ne.findOne(Yf);_&&_!==l&&rr.getInstance(_).hide(),rr.getOrCreateInstance(l).toggle(this)}),U.on(window,t0,()=>{for(const x of ne.find(Yf))rr.getOrCreateInstance(x).show()}),U.on(window,s0,()=>{for(const x of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&rr.getOrCreateInstance(x).hide()}),Ne(rr),w(rr);const Kf={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},u0=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),h0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,f0=(x,l)=>{const _=x.nodeName.toLowerCase();return l.includes(_)?!u0.has(_)||!!h0.test(x.nodeValue):l.filter(T=>T instanceof RegExp).some(T=>T.test(_))},d0={allowList:Kf,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},p0={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},m0={entry:"(string|element|function|null)",selector:"(string|element)"};class g0 extends ge{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return d0}static get DefaultType(){return p0}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[k,B]of Object.entries(this._config.content))this._setContent(l,B,k);const _=l.children[0],T=this._resolvePossibleFunction(this._config.extraClass);return T&&_.classList.add(...T.split(" ")),_}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[_,T]of Object.entries(l))super._typeCheckConfig({selector:_,entry:T},m0)}_setContent(l,_,T){const k=ne.findOne(T,l);k&&((_=this._resolvePossibleFunction(_))?c(_)?this._putElementInTemplate(u(_),k):this._config.html?k.innerHTML=this._maybeSanitize(_):k.textContent=_:k.remove())}_maybeSanitize(l){return this._config.sanitize?function(_,T,k){if(!_.length)return _;if(k&&typeof k=="function")return k(_);const B=new window.DOMParser().parseFromString(_,"text/html"),ee=[].concat(...B.body.querySelectorAll("*"));for(const le of ee){const _e=le.nodeName.toLowerCase();if(!Object.keys(T).includes(_e)){le.remove();continue}const De=[].concat(...le.attributes),Re=[].concat(T["*"]||[],T[_e]||[]);for(const Te of De)f0(Te,Re)||le.removeAttribute(Te.nodeName)}return B.body.innerHTML}(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return M(l,[void 0,this])}_putElementInTemplate(l,_){if(this._config.html)return _.innerHTML="",void _.append(l);_.textContent=l.textContent}}const _0=new Set(["sanitize","allowList","sanitizeFn"]),kc="fade",Ja="show",v0=".tooltip-inner",Jf=".modal",Qf="hide.bs.modal",Bo="hover",zc="focus",Uc="click",x0={AUTO:"auto",TOP:"top",RIGHT:y()?"left":"right",BOTTOM:"bottom",LEFT:y()?"right":"left"},y0={allowList:Kf,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},b0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Zr extends de{constructor(l,_){if(Ef===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,_),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return y0}static get DefaultType(){return b0}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),U.off(this._element.closest(Jf),Qf,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=U.trigger(this._element,this.constructor.eventName("show")),_=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!_)return;this._disposePopper();const T=this._getTipElement();this._element.setAttribute("aria-describedby",T.getAttribute("id"));const{container:k}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(k.append(T),U.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(T),T.classList.add(Ja),"ontouchstart"in document.documentElement)for(const B of[].concat(...document.body.children))U.on(B,"mouseover",m);this._queueCallback(()=>{U.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!U.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ja),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))U.off(l,"mouseover",m);this._activeTrigger[Uc]=!1,this._activeTrigger[zc]=!1,this._activeTrigger[Bo]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),U.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const _=this._getTemplateFactory(l).toHtml();if(!_)return null;_.classList.remove(kc,Ja),_.classList.add(`bs-${this.constructor.NAME}-auto`);const T=(k=>{do k+=Math.floor(1e6*Math.random());while(document.getElementById(k));return k})(this.constructor.NAME).toString();return _.setAttribute("id",T),this._isAnimated()&&_.classList.add(kc),_}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new g0({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[v0]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(kc)}_isShown(){return this.tip&&this.tip.classList.contains(Ja)}_createPopper(l){const _=M(this._config.placement,[this,l,this._element]),T=x0[_.toUpperCase()];return Ic(this._element,l,this._getPopperConfig(T))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_resolvePossibleFunction(l){return M(l,[this._element,this._element])}_getPopperConfig(l){const _={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:T=>{this._getTipElement().setAttribute("data-popper-placement",T.state.placement)}}]};return{..._,...M(this._config.popperConfig,[void 0,_])}}_setListeners(){const l=this._config.trigger.split(" ");for(const _ of l)if(_==="click")U.on(this._element,this.constructor.eventName("click"),this._config.selector,T=>{const k=this._initializeOnDelegatedTarget(T);k._activeTrigger[Uc]=!(k._isShown()&&k._activeTrigger[Uc]),k.toggle()});else if(_!=="manual"){const T=_===Bo?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),k=_===Bo?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");U.on(this._element,T,this._config.selector,B=>{const ee=this._initializeOnDelegatedTarget(B);ee._activeTrigger[B.type==="focusin"?zc:Bo]=!0,ee._enter()}),U.on(this._element,k,this._config.selector,B=>{const ee=this._initializeOnDelegatedTarget(B);ee._activeTrigger[B.type==="focusout"?zc:Bo]=ee._element.contains(B.relatedTarget),ee._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},U.on(this._element.closest(Jf),Qf,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,_){clearTimeout(this._timeout),this._timeout=setTimeout(l,_)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const _=G.getDataAttributes(this._element);for(const T of Object.keys(_))_0.has(T)&&delete _[T];return l={..._,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:u(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[_,T]of Object.entries(this._config))this.constructor.Default[_]!==T&&(l[_]=T);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const _=Zr.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}w(Zr);const M0=".popover-header",S0=".popover-body",w0={...Zr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},T0={...Zr.DefaultType,content:"(null|string|element|function)"};class Qa extends Zr{static get Default(){return w0}static get DefaultType(){return T0}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[M0]:this._getTitle(),[S0]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const _=Qa.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}w(Qa);const Bc=".bs.scrollspy",E0=`activate${Bc}`,ed=`click${Bc}`,A0=`load${Bc}.data-api`,Bs="active",Gc="[href]",td=".nav-link",C0=`${td}, .nav-item > ${td}, .list-group-item`,L0={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},D0={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Go extends de{constructor(l,_){super(l,_),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return L0}static get DefaultType(){return D0}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=u(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(_=>Number.parseFloat(_))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(U.off(this._config.target,ed),U.on(this._config.target,ed,Gc,l=>{const _=this._observableSections.get(l.target.hash);if(_){l.preventDefault();const T=this._rootElement||window,k=_.offsetTop-this._element.offsetTop;if(T.scrollTo)return void T.scrollTo({top:k,behavior:"smooth"});T.scrollTop=k}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(_=>this._observerCallback(_),l)}_observerCallback(l){const _=ee=>this._targetLinks.get(`#${ee.target.id}`),T=ee=>{this._previousScrollData.visibleEntryTop=ee.target.offsetTop,this._process(_(ee))},k=(this._rootElement||document.documentElement).scrollTop,B=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const ee of l){if(!ee.isIntersecting){this._activeTarget=null,this._clearActiveClass(_(ee));continue}const le=ee.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(B&&le){if(T(ee),!k)return}else B||le||T(ee)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=ne.find(Gc,this._config.target);for(const _ of l){if(!_.hash||p(_))continue;const T=ne.findOne(decodeURI(_.hash),this._element);h(T)&&(this._targetLinks.set(decodeURI(_.hash),_),this._observableSections.set(_.hash,T))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(Bs),this._activateParents(l),U.trigger(this._element,E0,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))ne.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(Bs);else for(const _ of ne.parents(l,".nav, .list-group"))for(const T of ne.prev(_,C0))T.classList.add(Bs)}_clearActiveClass(l){l.classList.remove(Bs);const _=ne.find(`${Gc}.${Bs}`,l);for(const T of _)T.classList.remove(Bs)}static jQueryInterface(l){return this.each(function(){const _=Go.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}U.on(window,A0,()=>{for(const x of ne.find('[data-bs-spy="scroll"]'))Go.getOrCreateInstance(x)}),w(Go);const Kr=".bs.tab",P0=`hide${Kr}`,R0=`hidden${Kr}`,I0=`show${Kr}`,O0=`shown${Kr}`,F0=`click${Kr}`,N0=`keydown${Kr}`,k0=`load${Kr}`,z0="ArrowLeft",nd="ArrowRight",U0="ArrowUp",id="ArrowDown",Vc="Home",rd="End",Jr="active",sd="fade",Wc="show",od=".dropdown-toggle",Hc=`:not(${od})`,ad='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Xc=`.nav-link${Hc}, .list-group-item${Hc}, [role="tab"]${Hc}, ${ad}`,B0=`.${Jr}[data-bs-toggle="tab"], .${Jr}[data-bs-toggle="pill"], .${Jr}[data-bs-toggle="list"]`;class Qr extends de{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),U.on(this._element,N0,_=>this._keydown(_)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const _=this._getActiveElem(),T=_?U.trigger(_,P0,{relatedTarget:l}):null;U.trigger(l,I0,{relatedTarget:_}).defaultPrevented||T&&T.defaultPrevented||(this._deactivate(_,l),this._activate(l,_))}_activate(l,_){l&&(l.classList.add(Jr),this._activate(ne.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),U.trigger(l,O0,{relatedTarget:_})):l.classList.add(Wc)},l,l.classList.contains(sd)))}_deactivate(l,_){l&&(l.classList.remove(Jr),l.blur(),this._deactivate(ne.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),U.trigger(l,R0,{relatedTarget:_})):l.classList.remove(Wc)},l,l.classList.contains(sd)))}_keydown(l){if(![z0,nd,U0,id,Vc,rd].includes(l.key))return;l.stopPropagation(),l.preventDefault();const _=this._getChildren().filter(k=>!p(k));let T;if([Vc,rd].includes(l.key))T=_[l.key===Vc?0:_.length-1];else{const k=[nd,id].includes(l.key);T=E(_,l.target,k,!0)}T&&(T.focus({preventScroll:!0}),Qr.getOrCreateInstance(T).show())}_getChildren(){return ne.find(Xc,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,_){this._setAttributeIfNotExists(l,"role","tablist");for(const T of _)this._setInitialAttributesOnChild(T)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const _=this._elemIsActive(l),T=this._getOuterElement(l);l.setAttribute("aria-selected",_),T!==l&&this._setAttributeIfNotExists(T,"role","presentation"),_||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const _=ne.getElementFromSelector(l);_&&(this._setAttributeIfNotExists(_,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,_){const T=this._getOuterElement(l);if(!T.classList.contains("dropdown"))return;const k=(B,ee)=>{const le=ne.findOne(B,T);le&&le.classList.toggle(ee,_)};k(od,Jr),k(".dropdown-menu",Wc),T.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(l,_,T){l.hasAttribute(_)||l.setAttribute(_,T)}_elemIsActive(l){return l.classList.contains(Jr)}_getInnerElement(l){return l.matches(Xc)?l:ne.findOne(Xc,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const _=Qr.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}U.on(document,F0,ad,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),p(this)||Qr.getOrCreateInstance(this).show()}),U.on(window,k0,()=>{for(const x of ne.find(B0))Qr.getOrCreateInstance(x)}),w(Qr);const yr=".bs.toast",G0=`mouseover${yr}`,V0=`mouseout${yr}`,W0=`focusin${yr}`,H0=`focusout${yr}`,X0=`hide${yr}`,q0=`hidden${yr}`,$0=`show${yr}`,Y0=`shown${yr}`,ld="hide",el="show",tl="showing",j0={animation:"boolean",autohide:"boolean",delay:"number"},Z0={animation:!0,autohide:!0,delay:5e3};class Vo extends de{constructor(l,_){super(l,_),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Z0}static get DefaultType(){return j0}static get NAME(){return"toast"}show(){U.trigger(this._element,$0).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ld),v(this._element),this._element.classList.add(el,tl),this._queueCallback(()=>{this._element.classList.remove(tl),U.trigger(this._element,Y0),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(U.trigger(this._element,X0).defaultPrevented||(this._element.classList.add(tl),this._queueCallback(()=>{this._element.classList.add(ld),this._element.classList.remove(tl,el),U.trigger(this._element,q0)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(el),super.dispose()}isShown(){return this._element.classList.contains(el)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,_){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=_;break;case"focusin":case"focusout":this._hasKeyboardInteraction=_}if(_)return void this._clearTimeout();const T=l.relatedTarget;this._element===T||this._element.contains(T)||this._maybeScheduleHide()}_setListeners(){U.on(this._element,G0,l=>this._onInteraction(l,!0)),U.on(this._element,V0,l=>this._onInteraction(l,!1)),U.on(this._element,W0,l=>this._onInteraction(l,!0)),U.on(this._element,H0,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const _=Vo.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l](this)}})}}return Ne(Vo),w(Vo),{Alert:nt,Button:xt,Carousel:je,Collapse:Xe,Dropdown:Ri,Modal:jr,Offcanvas:rr,Popover:Qa,ScrollSpy:Go,Tab:Qr,Toast:Vo,Tooltip:Zr}})})(ov);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="150",av=0,bd=1,lv=2,ym=1,cv=2,ea=3,Ur=0,fi=1,Ar=2,Fr=0,po=1,Kl=2,Md=3,Sd=4,uv=5,so=100,hv=101,fv=102,wd=103,Td=104,dv=200,pv=201,mv=202,gv=203,bm=204,Mm=205,_v=206,vv=207,xv=208,yv=209,bv=210,Mv=0,Sv=1,wv=2,Xu=3,Tv=4,Ev=5,Av=6,Cv=7,Sm=0,Lv=1,Dv=2,mr=0,Pv=1,Rv=2,Iv=3,Ov=4,Fv=5,wm=300,wo=301,To=302,qu=303,$u=304,dc=306,Yu=1e3,zi=1001,ju=1002,Un=1003,Ed=1004,jc=1005,Ti=1006,Nv=1007,wa=1008,Es=1009,kv=1010,zv=1011,Tm=1012,Uv=1013,fs=1014,ds=1015,Ta=1016,Bv=1017,Gv=1018,mo=1020,Vv=1021,Ui=1023,Wv=1024,Hv=1025,_s=1026,Eo=1027,Xv=1028,qv=1029,$v=1030,Yv=1031,jv=1033,Zc=33776,Kc=33777,Jc=33778,Qc=33779,Ad=35840,Cd=35841,Ld=35842,Dd=35843,Zv=36196,Pd=37492,Rd=37496,Id=37808,Od=37809,Fd=37810,Nd=37811,kd=37812,zd=37813,Ud=37814,Bd=37815,Gd=37816,Vd=37817,Wd=37818,Hd=37819,Xd=37820,qd=37821,eu=36492,Kv=36283,$d=36284,Yd=36285,jd=36286,As=3e3,Bt=3001,Jv=3200,Qv=3201,ex=0,tx=1,Xi="srgb",Ea="srgb-linear",Em="display-p3",tu=7680,nx=519,Zd=35044,Kd="300 es",Zu=1035;class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=Math.PI/180,Jd=180/Math.PI;function ka(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function oi(o,e,t){return Math.max(e,Math.min(t,o))}function ix(o,e){return(o%e+e)%e}function iu(o,e,t){return(1-t)*o+t*e}function Qd(o){return(o&o-1)===0&&o!==0}function rx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(e=0,t=0){Vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(){Gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=s,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],v=n[8],d=i[0],g=i[3],y=i[6],w=i[1],M=i[4],b=i[7],E=i[2],I=i[5],D=i[8];return r[0]=a*d+s*w+c*E,r[3]=a*g+s*M+c*I,r[6]=a*y+s*b+c*D,r[1]=u*d+h*w+p*E,r[4]=u*g+h*M+p*I,r[7]=u*y+h*b+p*D,r[2]=f*d+m*w+v*E,r[5]=f*g+m*M+v*I,r[8]=f*y+m*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*s*u-n*r*h+n*s*c+i*r*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],u=e[7],h=e[8],p=h*a-s*u,f=s*c-h*r,m=u*r-a*c,v=t*p+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/v;return e[0]=p*d,e[1]=(i*u-h*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(h*t-i*c)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*c-u*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*s)+a+e,-i*u,i*c,-i*(-u*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ru.makeScale(e,t)),this}rotate(e){return this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ru=new Gn;function Am(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}class za{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let c=n[i+0],u=n[i+1],h=n[i+2],p=n[i+3];const f=r[a+0],m=r[a+1],v=r[a+2],d=r[a+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=d;return}if(p!==d||c!==f||u!==m||h!==v){let g=1-s;const y=c*f+u*m+h*v+p*d,w=y>=0?1:-1,M=1-y*y;if(M>Number.EPSILON){const E=Math.sqrt(M),I=Math.atan2(E,y*w);g=Math.sin(g*I)/E,s=Math.sin(s*I)/E}const b=s*w;if(c=c*g+f*b,u=u*g+m*b,h=h*g+v*b,p=p*g+d*b,g===1-s){const E=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=E,u*=E,h*=E,p*=E}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],c=n[i+1],u=n[i+2],h=n[i+3],p=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return e[t]=s*v+h*p+c*m-u*f,e[t+1]=c*v+h*f+u*p-s*m,e[t+2]=u*v+h*m+s*f-c*p,e[t+3]=h*v-s*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,c=Math.sin,u=s(n/2),h=s(i/2),p=s(r/2),f=c(n/2),m=c(i/2),v=c(r/2);switch(a){case"XYZ":this._x=f*h*p+u*m*v,this._y=u*m*p-f*h*v,this._z=u*h*v+f*m*p,this._w=u*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+u*m*v,this._y=u*m*p-f*h*v,this._z=u*h*v-f*m*p,this._w=u*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-u*m*v,this._y=u*m*p+f*h*v,this._z=u*h*v+f*m*p,this._w=u*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-u*m*v,this._y=u*m*p+f*h*v,this._z=u*h*v-f*m*p,this._w=u*h*p+f*m*v;break;case"YZX":this._x=f*h*p+u*m*v,this._y=u*m*p+f*h*v,this._z=u*h*v-f*m*p,this._w=u*h*p-f*m*v;break;case"XZY":this._x=f*h*p-u*m*v,this._y=u*m*p-f*h*v,this._z=u*h*v+f*m*p,this._w=u*h*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+s+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(a-i)*m}else if(n>s&&n>p){const m=2*Math.sqrt(1+n-s-p);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+u)/m}else if(s>p){const m=2*Math.sqrt(1+s-n-p);this._w=(r-u)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-n-s);this._w=(a-i)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(oi(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*s+i*u-r*c,this._y=i*h+a*c+r*s-n*u,this._z=r*h+a*u+n*c-i*s,this._w=a*h-n*s-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,s),p=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=i*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ep.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,c=e.w,u=c*t+a*i-s*n,h=c*n+s*t-r*i,p=c*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=u*c+f*-r+h*-s-p*-a,this.y=h*c+f*-a+p*-r-u*-s,this.z=p*c+f*-s+u*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(oi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new J,ep=new za;function go(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ou(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const sx=new Gn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ox=new Gn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Cr=new J;function ax(o){return o.convertSRGBToLinear(),Cr.set(o.r,o.g,o.b).applyMatrix3(ox),o.setRGB(Cr.x,Cr.y,Cr.z)}function lx(o){return Cr.set(o.r,o.g,o.b).applyMatrix3(sx),o.setRGB(Cr.x,Cr.y,Cr.z).convertLinearToSRGB()}const cx={[Ea]:o=>o,[Xi]:o=>o.convertSRGBToLinear(),[Em]:ax},ux={[Ea]:o=>o,[Xi]:o=>o.convertLinearToSRGB(),[Em]:lx},Rn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ea},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=cx[e],i=ux[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Vs;class Cm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Jl("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=go(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(go(t[n]/255)*255):t[n]=go(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Lm{constructor(e=null){this.isSource=!0,this.uuid=ka(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(au(i[a].image)):r.push(au(i[a]))}else r=au(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function au(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cm.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class Xn extends Oo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=zi,i=zi,r=Ti,a=wa,s=Ui,c=Es,u=Xn.DEFAULT_ANISOTROPY,h=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ka(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yu:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yu:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=wm;Xn.DEFAULT_ANISOTROPY=1;class gn{constructor(e=0,t=0,n=0,i=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],v=c[9],d=c[2],g=c[6],y=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-d)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+d)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,b=(m+1)/2,E=(y+1)/2,I=(h+f)/4,D=(p+d)/4,S=(v+g)/4;return M>b&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=I/n,r=D/n):b>E?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=I/i,r=S/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=S/r),this.set(n,i,r,t),this}let w=Math.sqrt((g-v)*(g-v)+(p-d)*(p-d)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(p-d)/w,this.z=(f-h)/w,this.w=Math.acos((u+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cs extends Oo{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dm extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,u=e.length;c<u;c+=3){const h=e[c],p=e[c+1],f=e[c+2];h<t&&(t=h),p<n&&(n=p),f<i&&(i=f),h>r&&(r=h),p>a&&(a=p),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,u=e.count;c<u;c++){const h=e.getX(c),p=e.getY(c),f=e.getZ(c);h<t&&(t=h),p<n&&(n=p),f<i&&(i=f),h>r&&(r=h),p>a&&(a=p),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)ts.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ts)}else n.boundingBox===null&&n.computeBoundingBox(),lu.copy(n.boundingBox),lu.applyMatrix4(e.matrixWorld),this.union(lu);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ts),ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),ol.subVectors(this.max,Wo),Ws.subVectors(e.a,Wo),Hs.subVectors(e.b,Wo),Xs.subVectors(e.c,Wo),Mr.subVectors(Hs,Ws),Sr.subVectors(Xs,Hs),ns.subVectors(Ws,Xs);let t=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-ns.z,ns.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,ns.z,0,-ns.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-ns.y,ns.x,0];return!cu(t,Ws,Hs,Xs,ol)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Ws,Hs,Xs,ol))?!1:(al.crossVectors(Mr,Sr),t=[al.x,al.y,al.z],cu(t,Ws,Hs,Xs,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ts).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ts).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sr=[new J,new J,new J,new J,new J,new J,new J,new J],ts=new J,lu=new Ua,Ws=new J,Hs=new J,Xs=new J,Mr=new J,Sr=new J,ns=new J,Wo=new J,ol=new J,al=new J,is=new J;function cu(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){is.fromArray(o,r);const s=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=e.dot(is),u=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>s)return!1}return!0}const dx=new Ua,Ho=new J,uu=new J;class pc{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(uu)),this.expandByPoint(Ho.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new J,hu=new J,ll=new J,wr=new J,fu=new J,cl=new J,du=new J;class Pm{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hu.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(hu);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ll),s=wr.dot(this.direction),c=-wr.dot(ll),u=wr.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*c-s,f=a*s-c,v=r*h,p>=0)if(f>=-v)if(f<=v){const d=1/h;p*=d,f*=d,m=p*(p+a*f+2*s)+f*(a*p+f+2*c)+u}else f=r,p=Math.max(0,-(a*f+s)),m=-p*p+f*(f+2*c)+u;else f=-r,p=Math.max(0,-(a*f+s)),m=-p*p+f*(f+2*c)+u;else f<=-v?(p=Math.max(0,-(-a*r+s)),f=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u):f<=v?(p=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+u):(p=Math.max(0,-(a*r+s)),f=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u);else f=a>0?-r:r,p=Math.max(0,-(a*f+s)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(hu).addScaledVector(ll,f),m}intersectSphere(e,t){or.subVectors(e.center,this.origin);const n=or.dot(this.direction),i=or.dot(or)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(s=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(s=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,r){fu.subVectors(t,e),cl.subVectors(n,e),du.crossVectors(fu,cl);let a=this.direction.dot(du),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;wr.subVectors(this.origin,e);const c=s*this.direction.dot(cl.crossVectors(wr,cl));if(c<0)return null;const u=s*this.direction.dot(fu.cross(wr));if(u<0||c+u>a)return null;const h=-s*wr.dot(du);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,c,u,h,p,f,m,v,d,g){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=r,y[5]=a,y[9]=s,y[13]=c,y[2]=u,y[6]=h,y[10]=p,y[14]=f,y[3]=m,y[7]=v,y[11]=d,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*p,v=s*h,d=s*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+v*u,t[5]=f-d*u,t[9]=-s*c,t[2]=d-f*u,t[6]=v+m*u,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,v=u*h,d=u*p;t[0]=f+d*s,t[4]=v*s-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-s,t[2]=m*s-v,t[6]=d+f*s,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,v=u*h,d=u*p;t[0]=f-d*s,t[4]=-a*p,t[8]=v+m*s,t[1]=m+v*s,t[5]=a*h,t[9]=d-f*s,t[2]=-a*u,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=s*h,d=s*p;t[0]=c*h,t[4]=v*u-m,t[8]=f*u+d,t[1]=c*p,t[5]=d*u+f,t[9]=m*u-v,t[2]=-u,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,v=s*c,d=s*u;t[0]=c*h,t[4]=d-f*p,t[8]=v*p+m,t[1]=p,t[5]=a*h,t[9]=-s*h,t[2]=-u*h,t[6]=m*p+v,t[10]=f-d*p}else if(e.order==="XZY"){const f=a*c,m=a*u,v=s*c,d=s*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+d,t[5]=a*h,t[9]=m*p-v,t[2]=v*p-m,t[6]=s*h,t[10]=d*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Tr.crossVectors(n,ti),Tr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Tr.crossVectors(n,ti)),Tr.normalize(),ul.crossVectors(ti,Tr),i[0]=Tr.x,i[4]=ul.x,i[8]=ti.x,i[1]=Tr.y,i[5]=ul.y,i[9]=ti.y,i[2]=Tr.z,i[6]=ul.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],v=n[2],d=n[6],g=n[10],y=n[14],w=n[3],M=n[7],b=n[11],E=n[15],I=i[0],D=i[4],S=i[8],C=i[12],O=i[1],K=i[5],H=i[9],V=i[13],N=i[2],Y=i[6],te=i[10],Q=i[14],j=i[3],oe=i[7],P=i[11],U=i[15];return r[0]=a*I+s*O+c*N+u*j,r[4]=a*D+s*K+c*Y+u*oe,r[8]=a*S+s*H+c*te+u*P,r[12]=a*C+s*V+c*Q+u*U,r[1]=h*I+p*O+f*N+m*j,r[5]=h*D+p*K+f*Y+m*oe,r[9]=h*S+p*H+f*te+m*P,r[13]=h*C+p*V+f*Q+m*U,r[2]=v*I+d*O+g*N+y*j,r[6]=v*D+d*K+g*Y+y*oe,r[10]=v*S+d*H+g*te+y*P,r[14]=v*C+d*V+g*Q+y*U,r[3]=w*I+M*O+b*N+E*j,r[7]=w*D+M*K+b*Y+E*oe,r[11]=w*S+M*H+b*te+E*P,r[15]=w*C+M*V+b*Q+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],d=e[7],g=e[11],y=e[15];return v*(+r*c*p-i*u*p-r*s*f+n*u*f+i*s*m-n*c*m)+d*(+t*c*m-t*u*f+r*a*f-i*a*m+i*u*h-r*c*h)+g*(+t*u*p-t*s*m-r*a*p+n*a*m+r*s*h-n*u*h)+y*(-i*s*h-t*c*p+t*s*f+i*a*p-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],d=e[13],g=e[14],y=e[15],w=p*g*u-d*f*u+d*c*m-s*g*m-p*c*y+s*f*y,M=v*f*u-h*g*u-v*c*m+a*g*m+h*c*y-a*f*y,b=h*d*u-v*p*u+v*s*m-a*d*m-h*s*y+a*p*y,E=v*p*c-h*d*c-v*s*f+a*d*f+h*s*g-a*p*g,I=t*w+n*M+i*b+r*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=w*D,e[1]=(d*f*r-p*g*r-d*i*m+n*g*m+p*i*y-n*f*y)*D,e[2]=(s*g*r-d*c*r+d*i*u-n*g*u-s*i*y+n*c*y)*D,e[3]=(p*c*r-s*f*r-p*i*u+n*f*u+s*i*m-n*c*m)*D,e[4]=M*D,e[5]=(h*g*r-v*f*r+v*i*m-t*g*m-h*i*y+t*f*y)*D,e[6]=(v*c*r-a*g*r-v*i*u+t*g*u+a*i*y-t*c*y)*D,e[7]=(a*f*r-h*c*r+h*i*u-t*f*u-a*i*m+t*c*m)*D,e[8]=b*D,e[9]=(v*p*r-h*d*r-v*n*m+t*d*m+h*n*y-t*p*y)*D,e[10]=(a*d*r-v*s*r+v*n*u-t*d*u-a*n*y+t*s*y)*D,e[11]=(h*s*r-a*p*r-h*n*u+t*p*u+a*n*m-t*s*m)*D,e[12]=E*D,e[13]=(h*d*i-v*p*i+v*n*f-t*d*f-h*n*g+t*p*g)*D,e[14]=(v*s*i-a*d*i-v*n*c+t*d*c+a*n*g-t*s*g)*D,e[15]=(a*p*i-h*s*i+h*n*c-t*p*c-a*n*f+t*s*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,c=e.z,u=r*a,h=r*s;return this.set(u*a+n,u*s-i*c,u*c+i*s,0,u*s+i*c,h*s+n,h*c-i*a,0,u*c-i*s,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,c=t._w,u=r+r,h=a+a,p=s+s,f=r*u,m=r*h,v=r*p,d=a*h,g=a*p,y=s*p,w=c*u,M=c*h,b=c*p,E=n.x,I=n.y,D=n.z;return i[0]=(1-(d+y))*E,i[1]=(m+b)*E,i[2]=(v-M)*E,i[3]=0,i[4]=(m-b)*I,i[5]=(1-(f+y))*I,i[6]=(g+w)*I,i[7]=0,i[8]=(v+M)*D,i[9]=(g-w)*D,i[10]=(1-(f+d))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qs.set(i[0],i[1],i[2]).length();const a=qs.set(i[4],i[5],i[6]).length(),s=qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Oi.copy(this);const u=1/r,h=1/a,p=1/s;return Oi.elements[0]*=u,Oi.elements[1]*=u,Oi.elements[2]*=u,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=p,Oi.elements[9]*=p,Oi.elements[10]*=p,t.setFromRotationMatrix(Oi),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=u,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),p=(t+e)*c,f=(n+i)*u,m=(a+r)*h;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-p,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qs=new J,Oi=new pn,px=new J(0,0,0),mx=new J(1,1,1),Tr=new J,ul=new J,ti=new J,tp=new pn,np=new za;class mc{constructor(e=0,t=0,n=0,i=mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],c=i[1],u=i[5],h=i[9],p=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(oi(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-oi(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(oi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(oi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-oi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mc.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const ip=new J,$s=new za,ar=new pn,hl=new J,Xo=new J,_x=new J,vx=new za,rp=new J(1,0,0),sp=new J(0,1,0),op=new J(0,0,1),xx={type:"added"},ap={type:"removed"};class qn extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new J,t=new mc,n=new za,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pn},normalMatrix:{value:new Gn}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Xo,hl,this.up):ar.lookAt(hl,Xo,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(ar),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ap)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ap)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(s){const c=[];for(const u in s){const h=s[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qn.DEFAULT_UP=new J(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new J,lr=new J,pu=new J,cr=new J,Ys=new J,js=new J,lp=new J,mu=new J,gu=new J,_u=new J;class fr{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fi.subVectors(i,t),lr.subVectors(n,t),pu.subVectors(e,t);const a=Fi.dot(Fi),s=Fi.dot(lr),c=Fi.dot(pu),u=lr.dot(lr),h=lr.dot(pu),p=a*u-s*s;if(p===0)return r.set(-2,-1,-1);const f=1/p,m=(u*c-s*h)*f,v=(a*h-s*c)*f;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr),cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getUV(e,t,n,i,r,a,s,c){return this.getBarycoord(e,t,n,i,cr),c.set(0,0),c.addScaledVector(r,cr.x),c.addScaledVector(a,cr.y),c.addScaledVector(s,cr.z),c}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),lr.subVectors(e,t),Fi.cross(lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Fi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fr.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ys.subVectors(i,n),js.subVectors(r,n),mu.subVectors(e,n);const c=Ys.dot(mu),u=js.dot(mu);if(c<=0&&u<=0)return t.copy(n);gu.subVectors(e,i);const h=Ys.dot(gu),p=js.dot(gu);if(h>=0&&p<=h)return t.copy(i);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ys,a);_u.subVectors(e,r);const m=Ys.dot(_u),v=js.dot(_u);if(v>=0&&m<=v)return t.copy(r);const d=m*u-c*v;if(d<=0&&u>=0&&v<=0)return s=u/(u-v),t.copy(n).addScaledVector(js,s);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return lp.subVectors(r,i),s=(p-h)/(p-h+(m-v)),t.copy(i).addScaledVector(lp,s);const y=1/(g+d+f);return a=d*y,s=f*y,t.copy(n).addScaledVector(Ys,a).addScaledVector(js,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yx=0;class Ba extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=po,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bm,this.blendDst=Mm,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tu,this.stencilZFail=tu,this.stencilZPass=tu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},fl={h:0,s:0,l:0};function vu(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Rn.workingColorSpace){if(e=ix(e,1),t=oi(t,0,1),n=oi(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vu(a,r,e+1/3),this.g=vu(a,r,e),this.b=vu(a,r,e-1/3)}return Rn.toWorkingColorSpace(this,i),this}setStyle(e,t=Xi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Rn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Rn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,u=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,u,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Rn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Rn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xi){const n=Im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=ou(e.r),this.g=ou(e.g),this.b=ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return Rn.fromWorkingColorSpace(bn.copy(this),e),oi(bn.r*255,0,255)<<16^oi(bn.g*255,0,255)<<8^oi(bn.b*255,0,255)<<0}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rn.workingColorSpace){Rn.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,r=bn.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,u;const h=(s+a)/2;if(s===a)c=0,u=0;else{const p=a-s;switch(u=h<=.5?p/(a+s):p/(2-a-s),a){case n:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-n)/p+2;break;case r:c=(n-i)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Rn.workingColorSpace){return Rn.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Xi){Rn.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==Xi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ni),Ni.h+=e,Ni.s+=t,Ni.l+=n,this.setHSL(Ni.h,Ni.s,Ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(fl);const n=iu(Ni.h,fl.h,t),i=iu(Ni.s,fl.s,t),r=iu(Ni.l,fl.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Gt;Gt.NAMES=Im;class Om extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new J,dl=new Vt;class di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array),i=ei(i,this.array),r=ei(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fm extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nm extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vs extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bx=0;const Si=new pn,xu=new qn,Zs=new J,ni=new Ua,qo=new Ua,hn=new J;class er extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Nm:Fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];qo.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(ni.min,qo.min),ni.expandByPoint(hn),hn.addVectors(ni.max,qo.max),ni.expandByPoint(hn)):(ni.expandByPoint(qo.min),ni.expandByPoint(qo.max))}ni.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],c=this.morphTargetsRelative;for(let u=0,h=s.count;u<h;u++)hn.fromBufferAttribute(s,u),c&&(Zs.fromBufferAttribute(e,u),hn.add(Zs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let O=0;O<s;O++)u[O]=new J,h[O]=new J;const p=new J,f=new J,m=new J,v=new Vt,d=new Vt,g=new Vt,y=new J,w=new J;function M(O,K,H){p.fromArray(i,O*3),f.fromArray(i,K*3),m.fromArray(i,H*3),v.fromArray(a,O*2),d.fromArray(a,K*2),g.fromArray(a,H*2),f.sub(p),m.sub(p),d.sub(v),g.sub(v);const V=1/(d.x*g.y-g.x*d.y);isFinite(V)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(m,-d.y).multiplyScalar(V),w.copy(m).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(V),u[O].add(y),u[K].add(y),u[H].add(y),h[O].add(w),h[K].add(w),h[H].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let O=0,K=b.length;O<K;++O){const H=b[O],V=H.start,N=H.count;for(let Y=V,te=V+N;Y<te;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const E=new J,I=new J,D=new J,S=new J;function C(O){D.fromArray(r,O*3),S.copy(D);const K=u[O];E.copy(K),E.sub(D.multiplyScalar(D.dot(K))).normalize(),I.crossVectors(S,K);const V=I.dot(h[O])<0?-1:1;c[O*4]=E.x,c[O*4+1]=E.y,c[O*4+2]=E.z,c[O*4+3]=V}for(let O=0,K=b.length;O<K;++O){const H=b[O],V=H.start,N=H.count;for(let Y=V,te=V+N;Y<te;Y+=3)C(n[Y+0]),C(n[Y+1]),C(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new J,r=new J,a=new J,s=new J,c=new J,u=new J,h=new J,p=new J;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),d=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,g),h.subVectors(a,r),p.subVectors(i,r),h.cross(p),s.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),u.fromBufferAttribute(n,g),s.add(h),c.add(h),u.add(h),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(i,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(s,c){const u=s.array,h=s.itemSize,p=s.normalized,f=new u.constructor(c.length*h);let m=0,v=0;for(let d=0,g=c.length;d<g;d++){s.isInterleavedBufferAttribute?m=c[d]*s.data.stride+s.offset:m=c[d]*h;for(let y=0;y<h;y++)f[v++]=u[m++]}return new di(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],u=e(c,n);t.setAttribute(s,u)}const r=this.morphAttributes;for(const s in r){const c=[],u=r[s];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const u=a[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],p=r[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new pn,Hi=new Pm,pl=new pc,up=new J,$o=new J,Yo=new J,jo=new J,yu=new J,ml=new J,gl=new Vt,_l=new Vt,vl=new Vt,bu=new J,xl=new J;class Lr extends qn{constructor(e=new er,t=new Om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){ml.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=s[c],p=r[c];h!==0&&(yu.fromBufferAttribute(p,e),a?ml.addScaledVector(yu,h):ml.addScaledVector(yu.sub(t),h))}t.add(ml)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),pl.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(pl,up)===null||Hi.origin.distanceToSquared(up)>(e.far-e.near)**2))||(cp.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(cp),n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,u=n.attributes.uv,h=n.attributes.uv2,p=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const d=p[m],g=i[d.materialIndex],y=Math.max(d.start,f.start),w=Math.min(s.count,Math.min(d.start+d.count,f.start+f.count));for(let M=y,b=w;M<b;M+=3){const E=s.getX(M),I=s.getX(M+1),D=s.getX(M+2);a=yl(this,g,e,Hi,u,h,E,I,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),v=Math.min(s.count,f.start+f.count);for(let d=m,g=v;d<g;d+=3){const y=s.getX(d),w=s.getX(d+1),M=s.getX(d+2);a=yl(this,i,e,Hi,u,h,y,w,M),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const d=p[m],g=i[d.materialIndex],y=Math.max(d.start,f.start),w=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let M=y,b=w;M<b;M+=3){const E=M,I=M+1,D=M+2;a=yl(this,g,e,Hi,u,h,E,I,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let d=m,g=v;d<g;d+=3){const y=d,w=d+1,M=d+2;a=yl(this,i,e,Hi,u,h,y,w,M),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function Mx(o,e,t,n,i,r,a,s){let c;if(e.side===fi?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,e.side===Ur,s),c===null)return null;xl.copy(s),xl.applyMatrix4(o.matrixWorld);const u=t.ray.origin.distanceTo(xl);return u<t.near||u>t.far?null:{distance:u,point:xl.clone(),object:o}}function yl(o,e,t,n,i,r,a,s,c){o.getVertexPosition(a,$o),o.getVertexPosition(s,Yo),o.getVertexPosition(c,jo);const u=Mx(o,e,t,n,$o,Yo,jo,bu);if(u){i&&(gl.fromBufferAttribute(i,a),_l.fromBufferAttribute(i,s),vl.fromBufferAttribute(i,c),u.uv=fr.getUV(bu,$o,Yo,jo,gl,_l,vl,new Vt)),r&&(gl.fromBufferAttribute(r,a),_l.fromBufferAttribute(r,s),vl.fromBufferAttribute(r,c),u.uv2=fr.getUV(bu,$o,Yo,jo,gl,_l,vl,new Vt));const h={a,b:s,c,normal:new J,materialIndex:0};fr.getNormal($o,Yo,jo,h.normal),u.face=h}return u}class Ga extends er{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vs(u,3)),this.setAttribute("normal",new vs(h,3)),this.setAttribute("uv",new vs(p,2));function v(d,g,y,w,M,b,E,I,D,S,C){const O=b/D,K=E/S,H=b/2,V=E/2,N=I/2,Y=D+1,te=S+1;let Q=0,j=0;const oe=new J;for(let P=0;P<te;P++){const U=P*K-V;for(let q=0;q<Y;q++){const ce=q*O-H;oe[d]=ce*w,oe[g]=U*M,oe[y]=N,u.push(oe.x,oe.y,oe.z),oe[d]=0,oe[g]=0,oe[y]=I>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(q/D),p.push(1-P/S),Q+=1}}for(let P=0;P<S;P++)for(let U=0;U<D;U++){const q=f+U+Y*P,ce=f+U+Y*(P+1),he=f+(U+1)+Y*(P+1),G=f+(U+1)+Y*P;c.push(q,ce,G),c.push(ce,he,G),j+=6}s.addGroup(m,j,C),m+=j,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Fn(o){const e={};for(let t=0;t<o.length;t++){const n=Ao(o[t]);for(const i in n)e[i]=n[i]}return e}function Sx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function km(o){return o.getRenderTarget()===null&&o.outputEncoding===Bt?Xi:Ea}const wx={clone:Ao,merge:Fn};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ls extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zm extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ei extends zm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nu*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Js=1;class Ax extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ei(Ks,Js,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ei(Ks,Js,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ei(Ks,Js,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ei(Ks,Js,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new Ei(Ks,Js,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new Ei(Ks,Js,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,u]=this.children,h=e.getRenderTarget(),p=e.toneMapping,f=e.xr.enabled;e.toneMapping=mr,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=p,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Um extends Xn{constructor(e,t,n,i,r,a,s,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,n,i,r,a,s,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Um(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ga(5,5,5),r=new Ls({name:"CubemapFromEquirect",uniforms:Ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fi,blending:Fr});r.uniforms.tEquirect.value=t;const a=new Lr(i,r),s=t.minFilter;return t.minFilter===wa&&(t.minFilter=Ti),new Ax(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Mu=new J,Lx=new J,Dx=new Gn;class os{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mu.subVectors(n,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dx.getNormalMatrix(e),i=this.coplanarPoint(Mu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new pc,bl=new J;class Bm{constructor(e=new os,t=new os,n=new os,i=new os,r=new os,a=new os){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],u=n[5],h=n[6],p=n[7],f=n[8],m=n[9],v=n[10],d=n[11],g=n[12],y=n[13],w=n[14],M=n[15];return t[0].setComponents(s-i,p-c,d-f,M-g).normalize(),t[1].setComponents(s+i,p+c,d+f,M+g).normalize(),t[2].setComponents(s+r,p+u,d+m,M+y).normalize(),t[3].setComponents(s-r,p-u,d-m,M-y).normalize(),t[4].setComponents(s-a,p-h,d-v,M-w).normalize(),t[5].setComponents(s+a,p+h,d+v,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bl.x=i.normal.x>0?e.max.x:e.min.x,bl.y=i.normal.y>0?e.max.y:e.min.y,bl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gm(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Px(o,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const p=u.array,f=u.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,p,f),u.onUploadCallback();let v;if(p instanceof Float32Array)v=5126;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(p instanceof Int16Array)v=5122;else if(p instanceof Uint32Array)v=5125;else if(p instanceof Int32Array)v=5124;else if(p instanceof Int8Array)v=5120;else if(p instanceof Uint8Array)v=5121;else if(p instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,p){const f=h.array,m=h.updateRange;o.bindBuffer(p,u),m.count===-1?o.bufferSubData(p,0,f):(t?o.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(o.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);p===void 0?n.set(u,i(u,h)):p.version<u.version&&(r(p.buffer,u,h),p.version=u.version)}return{get:a,remove:s,update:c}}class Eh extends er{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),c=Math.floor(i),u=s+1,h=c+1,p=e/s,f=t/c,m=[],v=[],d=[],g=[];for(let y=0;y<h;y++){const w=y*f-a;for(let M=0;M<u;M++){const b=M*p-r;v.push(b,-w,0),d.push(0,0,1),g.push(M/s),g.push(1-y/c)}}for(let y=0;y<c;y++)for(let w=0;w<s;w++){const M=w+u*y,b=w+u*(y+1),E=w+1+u*(y+1),I=w+1+u*y;m.push(M,b,I),m.push(b,E,I)}this.setIndex(m),this.setAttribute("position",new vs(v,3)),this.setAttribute("normal",new vs(d,3)),this.setAttribute("uv",new vs(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx="vec3 transformed = vec3( position );",Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,by=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ay=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Sb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Eb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ab=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Cb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ub=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,at={alphamap_fragment:Rx,alphamap_pars_fragment:Ix,alphatest_fragment:Ox,alphatest_pars_fragment:Fx,aomap_fragment:Nx,aomap_pars_fragment:kx,begin_vertex:zx,beginnormal_vertex:Ux,bsdfs:Bx,iridescence_fragment:Gx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:qx,color_fragment:$x,color_pars_fragment:Yx,color_pars_vertex:jx,color_vertex:Zx,common:Kx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,encodings_fragment:ry,encodings_pars_fragment:sy,envmap_fragment:oy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ly,envmap_pars_vertex:cy,envmap_physical_pars_fragment:by,envmap_vertex:uy,fog_vertex:hy,fog_pars_vertex:fy,fog_fragment:dy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_fragment:gy,lightmap_pars_fragment:_y,lights_lambert_fragment:vy,lights_lambert_pars_fragment:xy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:Sy,lights_phong_fragment:wy,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ey,lights_physical_pars_fragment:Ay,lights_fragment_begin:Cy,lights_fragment_maps:Ly,lights_fragment_end:Dy,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Iy,logdepthbuf_vertex:Oy,map_fragment:Fy,map_pars_fragment:Ny,map_particle_fragment:ky,map_particle_pars_fragment:zy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:By,morphcolor_vertex:Gy,morphnormal_vertex:Vy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Hy,normal_fragment_begin:Xy,normal_fragment_maps:qy,normal_pars_fragment:$y,normal_pars_vertex:Yy,normal_vertex:jy,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Jy,clearcoat_pars_fragment:Qy,iridescence_pars_fragment:eb,output_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:rb,dithering_fragment:sb,dithering_pars_fragment:ob,roughnessmap_fragment:ab,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:cb,shadowmap_pars_vertex:ub,shadowmap_vertex:hb,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:_b,specularmap_pars_fragment:vb,tonemapping_fragment:xb,tonemapping_pars_fragment:yb,transmission_fragment:bb,transmission_pars_fragment:Mb,uv_pars_fragment:Sb,uv_pars_vertex:wb,uv_vertex:Tb,uv2_pars_fragment:Eb,uv2_pars_vertex:Ab,uv2_vertex:Cb,worldpos_vertex:Lb,background_vert:Db,background_frag:Pb,backgroundCube_vert:Rb,backgroundCube_frag:Ib,cube_vert:Ob,cube_frag:Fb,depth_vert:Nb,depth_frag:kb,distanceRGBA_vert:zb,distanceRGBA_frag:Ub,equirect_vert:Bb,equirect_frag:Gb,linedashed_vert:Vb,linedashed_frag:Wb,meshbasic_vert:Hb,meshbasic_frag:Xb,meshlambert_vert:qb,meshlambert_frag:$b,meshmatcap_vert:Yb,meshmatcap_frag:jb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Jb,meshphong_frag:Qb,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},we={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gn},uv2Transform:{value:new Gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}}},Yi={basic:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Gt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Fn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Fn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Gt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Fn([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Fn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Fn([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Fn([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Fn([we.common,we.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Fn([we.lights,we.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Yi.physical={uniforms:Fn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ml={r:0,b:0,g:0};function uM(o,e,t,n,i,r,a){const s=new Gt(0);let c=r===!0?0:1,u,h,p=null,f=0,m=null;function v(g,y){let w=!1,M=y.isScene===!0?y.background:null;M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M));const b=o.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?d(s,c):M&&M.isColor&&(d(M,1),w=!0),(o.autoClear||w)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===dc)?(h===void 0&&(h=new Lr(new Ga(1,1,1),new Ls({name:"BackgroundCubeMaterial",uniforms:Ao(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=M.encoding!==Bt,(p!==M||f!==M.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,m=o.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Lr(new Eh(2,2),new Ls({name:"BackgroundMaterial",uniforms:Ao(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=M.encoding!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,p=M,f=M.version,m=o.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,y){g.getRGB(Ml,km(o)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),c=y,d(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,d(s,c)},render:v}}function hM(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=g(null);let u=c,h=!1;function p(N,Y,te,Q,j){let oe=!1;if(a){const P=d(Q,te,Y);u!==P&&(u=P,m(u.object)),oe=y(N,Q,te,j),oe&&w(N,Q,te,j)}else{const P=Y.wireframe===!0;(u.geometry!==Q.id||u.program!==te.id||u.wireframe!==P)&&(u.geometry=Q.id,u.program=te.id,u.wireframe=P,oe=!0)}j!==null&&t.update(j,34963),(oe||h)&&(h=!1,S(N,Y,te,Q),j!==null&&o.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(N){return n.isWebGL2?o.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?o.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function d(N,Y,te){const Q=te.wireframe===!0;let j=s[N.id];j===void 0&&(j={},s[N.id]=j);let oe=j[Y.id];oe===void 0&&(oe={},j[Y.id]=oe);let P=oe[Q];return P===void 0&&(P=g(f()),oe[Q]=P),P}function g(N){const Y=[],te=[],Q=[];for(let j=0;j<i;j++)Y[j]=0,te[j]=0,Q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:Q,object:N,attributes:{},index:null}}function y(N,Y,te,Q){const j=u.attributes,oe=Y.attributes;let P=0;const U=te.getAttributes();for(const q in U)if(U[q].location>=0){const he=j[q];let G=oe[q];if(G===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),he===void 0||he.attribute!==G||G&&he.data!==G.data)return!0;P++}return u.attributesNum!==P||u.index!==Q}function w(N,Y,te,Q){const j={},oe=Y.attributes;let P=0;const U=te.getAttributes();for(const q in U)if(U[q].location>=0){let he=oe[q];he===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(he=N.instanceColor));const G={};G.attribute=he,he&&he.data&&(G.data=he.data),j[q]=G,P++}u.attributes=j,u.attributesNum=P,u.index=Q}function M(){const N=u.newAttributes;for(let Y=0,te=N.length;Y<te;Y++)N[Y]=0}function b(N){E(N,0)}function E(N,Y){const te=u.newAttributes,Q=u.enabledAttributes,j=u.attributeDivisors;te[N]=1,Q[N]===0&&(o.enableVertexAttribArray(N),Q[N]=1),j[N]!==Y&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),j[N]=Y)}function I(){const N=u.newAttributes,Y=u.enabledAttributes;for(let te=0,Q=Y.length;te<Q;te++)Y[te]!==N[te]&&(o.disableVertexAttribArray(te),Y[te]=0)}function D(N,Y,te,Q,j,oe){n.isWebGL2===!0&&(te===5124||te===5125)?o.vertexAttribIPointer(N,Y,te,j,oe):o.vertexAttribPointer(N,Y,te,Q,j,oe)}function S(N,Y,te,Q){if(n.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const j=Q.attributes,oe=te.getAttributes(),P=Y.defaultAttributeValues;for(const U in oe){const q=oe[U];if(q.location>=0){let ce=j[U];if(ce===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){const he=ce.normalized,G=ce.itemSize,ge=t.get(ce);if(ge===void 0)continue;const de=ge.buffer,Me=ge.type,ne=ge.bytesPerElement;if(ce.isInterleavedBufferAttribute){const Ne=ce.data,Ve=Ne.stride,qe=ce.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)E(q.location+Ce,Ne.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)b(q.location+Ce);o.bindBuffer(34962,de);for(let Ce=0;Ce<q.locationSize;Ce++)D(q.location+Ce,G/q.locationSize,Me,he,Ve*ne,(qe+G/q.locationSize*Ce)*ne)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<q.locationSize;Ne++)E(q.location+Ne,ce.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<q.locationSize;Ne++)b(q.location+Ne);o.bindBuffer(34962,de);for(let Ne=0;Ne<q.locationSize;Ne++)D(q.location+Ne,G/q.locationSize,Me,he,G*ne,G/q.locationSize*Ne*ne)}}else if(P!==void 0){const he=P[U];if(he!==void 0)switch(he.length){case 2:o.vertexAttrib2fv(q.location,he);break;case 3:o.vertexAttrib3fv(q.location,he);break;case 4:o.vertexAttrib4fv(q.location,he);break;default:o.vertexAttrib1fv(q.location,he)}}}}I()}function C(){H();for(const N in s){const Y=s[N];for(const te in Y){const Q=Y[te];for(const j in Q)v(Q[j].object),delete Q[j];delete Y[te]}delete s[N]}}function O(N){if(s[N.id]===void 0)return;const Y=s[N.id];for(const te in Y){const Q=Y[te];for(const j in Q)v(Q[j].object),delete Q[j];delete Y[te]}delete s[N.id]}function K(N){for(const Y in s){const te=s[Y];if(te[N.id]===void 0)continue;const Q=te[N.id];for(const j in Q)v(Q[j].object),delete Q[j];delete te[N.id]}}function H(){V(),h=!0,u!==c&&(u=c,m(u.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:H,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:K,initAttributes:M,enableAttribute:b,disableUnusedAttributes:I}}function fM(o,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function s(u,h){o.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,p){if(p===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,u,h,p),t.update(h,r,p)}this.setMode=a,this.render=s,this.renderInstances=c}function dM(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),v=o.getParameter(34076),d=o.getParameter(34921),g=o.getParameter(36347),y=o.getParameter(36348),w=o.getParameter(36349),M=f>0,b=a||e.has("OES_texture_float"),E=M&&b,I=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:I}}function pM(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new os,s=new Gn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||i;return i=f,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,d=p.clipIntersection,g=p.clipShadows,y=o.get(p);if(!i||v===null||v.length===0||r&&!g)r?h(null):u();else{const w=r?0:n,M=w*4;let b=y.clippingState||null;c.value=b,b=h(v,f,M,m);for(let E=0;E!==M;++E)b[E]=t[E];y.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,m,v){const d=p!==null?p.length:0;let g=null;if(d!==0){if(g=c.value,v!==!0||g===null){const y=m+d*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(g===null||g.length<y)&&(g=new Float32Array(y));for(let M=0,b=m;M!==d;++M,b+=4)a.copy(p[M]).applyMatrix4(w,s),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,g}}function mM(o){let e=new WeakMap;function t(a,s){return s===qu?a.mapping=wo:s===$u&&(a.mapping=To),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===qu||s===$u)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Cx(c.height/2);return u.fromEquirectangularTexture(o,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gM extends zm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=4,hp=[.125,.215,.35,.446,.526,.582],hs=20,Su=new gM,fp=new Gt;let wu=null;const as=(1+Math.sqrt(5))/2,eo=1/as,dp=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,as,eo),new J(0,as,-eo),new J(eo,0,as),new J(-eo,0,as),new J(as,eo,0),new J(-as,eo,0)];class pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wu=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ta,format:Ui,encoding:As,depthBuffer:!1},i=mp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(r)),this._blurMaterial=vM(r,e,t)}return i}_compileMaterial(e){const t=new Lr(this._lodPlanes[0],e);this._renderer.compile(t,Su)}_sceneToCubeUV(e,t,n,i){const s=new Ei(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(fp),h.toneMapping=mr,h.autoClear=!1;const m=new Om({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),v=new Lr(new Ga,m);let d=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,d=!0):(m.color.copy(fp),d=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(s.up.set(0,c[y],0),s.lookAt(u[y],0,0)):w===1?(s.up.set(0,0,c[y]),s.lookAt(0,u[y],0)):(s.up.set(0,c[y],0),s.lookAt(0,0,u[y]));const M=this._cubeSize;Sl(i,w*M,y>2?M:0,M,M),h.setRenderTarget(i),d&&h.render(v,s),h.render(e,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wo||e.mapping===To;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Lr(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;Sl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Su)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=dp[(i-1)%dp.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Lr(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hs-1),d=r/v,g=isFinite(r)?1+Math.floor(h*d):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const y=[];let w=0;for(let D=0;D<hs;++D){const S=D/d,C=Math.exp(-S*S/2);y.push(C),D===0?w+=C:D<g&&(w+=2*C)}for(let D=0;D<y.length;D++)y[D]=y[D]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=y,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const b=this._sizeLods[i],E=3*b*(i>M-lo?i-M+lo:0),I=4*(this._cubeSize-b);Sl(t,E,I,3*b,2*b),c.setRenderTarget(t),c.render(p,Su)}}function _M(o){const e=[],t=[],n=[];let i=o;const r=o-lo+1+hp.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let c=1/s;a>o-lo?c=hp[a-o+lo-1]:a===0&&(c=0),n.push(c);const u=1/(s-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,d=3,g=2,y=1,w=new Float32Array(d*v*m),M=new Float32Array(g*v*m),b=new Float32Array(y*v*m);for(let I=0;I<m;I++){const D=I%3*2/3-1,S=I>2?0:-1,C=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];w.set(C,d*v*I),M.set(f,g*v*I);const O=[I,I,I,I,I,I];b.set(O,y*v*I)}const E=new er;E.setAttribute("position",new di(w,d)),E.setAttribute("uv",new di(M,g)),E.setAttribute("faceIndex",new di(b,y)),e.push(E),i>lo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mp(o,e,t){const n=new Cs(o,e,t);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function vM(o,e,t){const n=new Float32Array(hs),i=new J(0,1,0);return new Ls({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function gp(){return new Ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function _p(){return new Ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xM(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===qu||c===$u,h=c===wo||c===To;if(u||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new pp(o)),p=u?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(u&&p&&p.height>0||h&&p&&i(p)){t===null&&(t=new pp(o));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let c=0;const u=6;for(let h=0;h<u;h++)s[h]!==void 0&&c++;return c===u}function r(s){const c=s.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yM(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bM(o,e,t,n){const i={},r=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(p,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const v in f)e.update(f[v],34962);const m=p.morphAttributes;for(const v in m){const d=m[v];for(let g=0,y=d.length;g<y;g++)e.update(d[g],34962)}}function u(p){const f=[],m=p.index,v=p.attributes.position;let d=0;if(m!==null){const w=m.array;d=m.version;for(let M=0,b=w.length;M<b;M+=3){const E=w[M+0],I=w[M+1],D=w[M+2];f.push(E,I,I,D,D,E)}}else{const w=v.array;d=v.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const E=M+0,I=M+1,D=M+2;f.push(E,I,I,D,D,E)}}const g=new(Am(f)?Nm:Fm)(f,1);g.version=d;const y=r.get(p);y&&e.remove(y),r.set(p,g)}function h(p){const f=r.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return r.get(p)}return{get:s,update:c,getWireframeAttribute:h}}function MM(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function h(f,m){o.drawElements(r,m,s,f*c),t.update(m,r,1)}function p(f,m,v){if(v===0)return;let d,g;if(i)d=o,g="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,m,s,f*c,v),t.update(m,r,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=p}function SM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wM(o,e){return o[0]-e[0]}function TM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function EM(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new gn,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,h,p){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==d){let Y=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var m=Y;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),E===!0&&(C=3);let O=h.attributes.position.count*C,K=1;O>e.maxTextureSize&&(K=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const H=new Float32Array(O*K*4*d),V=new Dm(H,O,K,d);V.type=ds,V.needsUpdate=!0;const N=C*4;for(let te=0;te<d;te++){const Q=I[te],j=D[te],oe=S[te],P=O*K*4*te;for(let U=0;U<Q.count;U++){const q=U*N;M===!0&&(a.fromBufferAttribute(Q,U),H[P+q+0]=a.x,H[P+q+1]=a.y,H[P+q+2]=a.z,H[P+q+3]=0),b===!0&&(a.fromBufferAttribute(j,U),H[P+q+4]=a.x,H[P+q+5]=a.y,H[P+q+6]=a.z,H[P+q+7]=0),E===!0&&(a.fromBufferAttribute(oe,U),H[P+q+8]=a.x,H[P+q+9]=a.y,H[P+q+10]=a.z,H[P+q+11]=oe.itemSize===4?a.w:1)}}g={count:d,texture:V,size:new Vt(O,K)},r.set(h,g),h.addEventListener("dispose",Y)}let y=0;for(let M=0;M<f.length;M++)y+=f[M];const w=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",f),p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const v=f===void 0?0:f.length;let d=n[h.id];if(d===void 0||d.length!==v){d=[];for(let b=0;b<v;b++)d[b]=[b,0];n[h.id]=d}for(let b=0;b<v;b++){const E=d[b];E[0]=b,E[1]=f[b]}d.sort(TM);for(let b=0;b<8;b++)b<v&&d[b][1]?(s[b][0]=d[b][0],s[b][1]=d[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(wM);const g=h.morphAttributes.position,y=h.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const E=s[b],I=E[0],D=E[1];I!==Number.MAX_SAFE_INTEGER&&D?(g&&h.getAttribute("morphTarget"+b)!==g[I]&&h.setAttribute("morphTarget"+b,g[I]),y&&h.getAttribute("morphNormal"+b)!==y[I]&&h.setAttribute("morphNormal"+b,y[I]),i[b]=D,w+=D):(g&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),y&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const M=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function AM(o,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,p=e.get(c,h);return i.get(p)!==u&&(e.update(p),i.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),p}function a(){i=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Vm=new Xn,Wm=new Dm,Hm=new fx,Xm=new Um,vp=[],xp=[],yp=new Float32Array(16),bp=new Float32Array(9),Mp=new Float32Array(4);function Fo(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=vp[i];if(r===void 0&&(r=new Float32Array(i),vp[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function on(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function an(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function gc(o,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function CM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function LM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2fv(this.addr,e),an(t,e)}}function DM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;o.uniform3fv(this.addr,e),an(t,e)}}function PM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4fv(this.addr,e),an(t,e)}}function RM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Mp.set(n),o.uniformMatrix2fv(this.addr,!1,Mp),an(t,n)}}function IM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;bp.set(n),o.uniformMatrix3fv(this.addr,!1,bp),an(t,n)}}function OM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;yp.set(n),o.uniformMatrix4fv(this.addr,!1,yp),an(t,n)}}function FM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function NM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2iv(this.addr,e),an(t,e)}}function kM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3iv(this.addr,e),an(t,e)}}function zM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4iv(this.addr,e),an(t,e)}}function UM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function BM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2uiv(this.addr,e),an(t,e)}}function GM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3uiv(this.addr,e),an(t,e)}}function VM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4uiv(this.addr,e),an(t,e)}}function WM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Vm,i)}function HM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hm,i)}function XM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xm,i)}function qM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wm,i)}function $M(o){switch(o){case 5126:return CM;case 35664:return LM;case 35665:return DM;case 35666:return PM;case 35674:return RM;case 35675:return IM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return NM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return UM;case 36294:return BM;case 36295:return GM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function YM(o,e){o.uniform1fv(this.addr,e)}function jM(o,e){const t=Fo(e,this.size,2);o.uniform2fv(this.addr,t)}function ZM(o,e){const t=Fo(e,this.size,3);o.uniform3fv(this.addr,t)}function KM(o,e){const t=Fo(e,this.size,4);o.uniform4fv(this.addr,t)}function JM(o,e){const t=Fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function QM(o,e){const t=Fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function eS(o,e){const t=Fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function tS(o,e){o.uniform1iv(this.addr,e)}function nS(o,e){o.uniform2iv(this.addr,e)}function iS(o,e){o.uniform3iv(this.addr,e)}function rS(o,e){o.uniform4iv(this.addr,e)}function sS(o,e){o.uniform1uiv(this.addr,e)}function oS(o,e){o.uniform2uiv(this.addr,e)}function aS(o,e){o.uniform3uiv(this.addr,e)}function lS(o,e){o.uniform4uiv(this.addr,e)}function cS(o,e,t){const n=this.cache,i=e.length,r=gc(t,i);on(n,r)||(o.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vm,r[a])}function uS(o,e,t){const n=this.cache,i=e.length,r=gc(t,i);on(n,r)||(o.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hm,r[a])}function hS(o,e,t){const n=this.cache,i=e.length,r=gc(t,i);on(n,r)||(o.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Xm,r[a])}function fS(o,e,t){const n=this.cache,i=e.length,r=gc(t,i);on(n,r)||(o.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Wm,r[a])}function dS(o){switch(o){case 5126:return YM;case 35664:return jM;case 35665:return ZM;case 35666:return KM;case 35674:return JM;case 35675:return QM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return fS}}class pS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$M(t.type)}}class mS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dS(t.type)}}class gS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function Sp(o,e){o.seq.push(e),o.map[e.id]=e}function _S(o,e,t){const n=o.name,i=n.length;for(Tu.lastIndex=0;;){const r=Tu.exec(n),a=Tu.lastIndex;let s=r[1];const c=r[2]==="]",u=r[3];if(c&&(s=s|0),u===void 0||u==="["&&a+2===i){Sp(t,u===void 0?new pS(s,o,e):new mS(s,o,e));break}else{let p=t.map[s];p===void 0&&(p=new gS(s),Sp(t,p)),t=p}}}class Bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);_S(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wp(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let vS=0;function xS(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function yS(o){switch(o){case As:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Tp(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xS(o.getShaderSource(e),a)}else return i}function bS(o,e){const t=yS(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function MS(o,e){let t;switch(e){case Pv:t="Linear";break;case Rv:t="Reinhard";break;case Iv:t="OptimizedCineon";break;case Ov:t="ACESFilmic";break;case Fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SS(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function wS(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TS(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function ta(o){return o!==""}function Ep(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ap(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(o){return o.replace(ES,AS)}function AS(o,e){const t=at[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ku(t)}const CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(o){return o.replace(CS,LS)}function LS(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lp(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DS(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wo:case To:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RS(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function IS(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Sm:e="ENVMAP_BLENDING_MULTIPLY";break;case Lv:e="ENVMAP_BLENDING_MIX";break;case Dv:e="ENVMAP_BLENDING_ADD";break}return e}function OS(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function FS(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=DS(t),u=PS(t),h=RS(t),p=IS(t),f=OS(t),m=t.isWebGL2?"":SS(t),v=wS(r),d=i.createProgram();let g,y,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[v].filter(ta).join(`
`),g.length>0&&(g+=`
`),y=[m,v].filter(ta).join(`
`),y.length>0&&(y+=`
`)):(g=[Lp(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),y=[m,Lp(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?at.tonemapping_pars_fragment:"",t.toneMapping!==mr?MS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.encodings_pars_fragment,bS("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Ku(a),a=Ep(a,t),a=Ap(a,t),s=Ku(s),s=Ep(s,t),s=Ap(s,t),a=Cp(a),s=Cp(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=w+g+a,b=w+y+s,E=wp(i,35633,M),I=wp(i,35632,b);if(i.attachShader(d,E),i.attachShader(d,I),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const C=i.getProgramInfoLog(d).trim(),O=i.getShaderInfoLog(E).trim(),K=i.getShaderInfoLog(I).trim();let H=!0,V=!0;if(i.getProgramParameter(d,35714)===!1){H=!1;const N=Tp(i,E,"vertex"),Y=Tp(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+C+`
`+N+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||K==="")&&(V=!1);V&&(this.diagnostics={runnable:H,programLog:C,vertexShader:{log:O,prefix:g},fragmentShader:{log:K,prefix:y}})}i.deleteShader(E),i.deleteShader(I);let D;this.getUniforms=function(){return D===void 0&&(D=new Bl(i,d)),D};let S;return this.getAttributes=function(){return S===void 0&&(S=TS(i,d)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=I,this}let NS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zS(e),t.set(e,n)),n}}class zS{constructor(e){this.id=NS++,this.code=e,this.usedTimes=0}}function US(o,e,t,n,i,r,a){const s=new Rm,c=new kS,u=[],h=i.isWebGL2,p=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(S,C,O,K,H){const V=K.fog,N=H.geometry,Y=S.isMeshStandardMaterial?K.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),Q=te&&te.mapping===dc?te.image.height:null,j=v[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,P=oe!==void 0?oe.length:0;let U=0;N.morphAttributes.position!==void 0&&(U=1),N.morphAttributes.normal!==void 0&&(U=2),N.morphAttributes.color!==void 0&&(U=3);let q,ce,he,G;if(j){const Ve=Yi[j];q=Ve.vertexShader,ce=Ve.fragmentShader}else q=S.vertexShader,ce=S.fragmentShader,c.update(S),he=c.getVertexShaderID(S),G=c.getFragmentShaderID(S);const ge=o.getRenderTarget(),de=S.alphaTest>0,Me=S.clearcoat>0,ne=S.iridescence>0;return{isWebGL2:h,shaderID:j,shaderName:S.type,vertexShader:q,fragmentShader:ce,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ge===null?o.outputEncoding:ge.isXRRenderTarget===!0?ge.texture.encoding:As,map:!!S.map,matcap:!!S.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===tx,tangentSpaceNormalMap:S.normalMapType===ex,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Bt,clearcoat:Me,clearcoatMap:Me&&!!S.clearcoatMap,clearcoatRoughnessMap:Me&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!S.clearcoatNormalMap,iridescence:ne,iridescenceMap:ne&&!!S.iridescenceMap,iridescenceThicknessMap:ne&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===po,alphaMap:!!S.alphaMap,alphaTest:de,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:p,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:U,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&O.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:mr,useLegacyLights:o.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ar,flipSided:S.side===fi,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)C.push(O),C.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(y(C,S),w(C,S),C.push(o.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function w(S,C){s.disableAll(),C.isWebGL2&&s.enable(0),C.supportsVertexTextures&&s.enable(1),C.instancing&&s.enable(2),C.instancingColor&&s.enable(3),C.map&&s.enable(4),C.matcap&&s.enable(5),C.envMap&&s.enable(6),C.lightMap&&s.enable(7),C.aoMap&&s.enable(8),C.emissiveMap&&s.enable(9),C.bumpMap&&s.enable(10),C.normalMap&&s.enable(11),C.objectSpaceNormalMap&&s.enable(12),C.tangentSpaceNormalMap&&s.enable(13),C.clearcoat&&s.enable(14),C.clearcoatMap&&s.enable(15),C.clearcoatRoughnessMap&&s.enable(16),C.clearcoatNormalMap&&s.enable(17),C.iridescence&&s.enable(18),C.iridescenceMap&&s.enable(19),C.iridescenceThicknessMap&&s.enable(20),C.displacementMap&&s.enable(21),C.specularMap&&s.enable(22),C.roughnessMap&&s.enable(23),C.metalnessMap&&s.enable(24),C.gradientMap&&s.enable(25),C.alphaMap&&s.enable(26),C.alphaTest&&s.enable(27),C.vertexColors&&s.enable(28),C.vertexAlphas&&s.enable(29),C.vertexUvs&&s.enable(30),C.vertexTangents&&s.enable(31),C.uvsVertexOnly&&s.enable(32),S.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.skinning&&s.enable(4),C.morphTargets&&s.enable(5),C.morphNormals&&s.enable(6),C.morphColors&&s.enable(7),C.premultipliedAlpha&&s.enable(8),C.shadowMapEnabled&&s.enable(9),C.useLegacyLights&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.specularIntensityMap&&s.enable(15),C.specularColorMap&&s.enable(16),C.transmission&&s.enable(17),C.transmissionMap&&s.enable(18),C.thicknessMap&&s.enable(19),C.sheen&&s.enable(20),C.sheenColorMap&&s.enable(21),C.sheenRoughnessMap&&s.enable(22),C.decodeVideoTexture&&s.enable(23),C.opaque&&s.enable(24),S.push(s.mask)}function M(S){const C=v[S.type];let O;if(C){const K=Yi[C];O=wx.clone(K.uniforms)}else O=S.uniforms;return O}function b(S,C){let O;for(let K=0,H=u.length;K<H;K++){const V=u[K];if(V.cacheKey===C){O=V,++O.usedTimes;break}}return O===void 0&&(O=new FS(o,C,S,r),u.push(O)),O}function E(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function I(S){c.remove(S)}function D(){c.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:I,programs:u,dispose:D}}function BS(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function GS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Dp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Pp(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(p,f,m,v,d,g){let y=o[e];return y===void 0?(y={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:d,group:g},o[e]=y):(y.id=p.id,y.object=p,y.geometry=f,y.material=m,y.groupOrder=v,y.renderOrder=p.renderOrder,y.z=d,y.group=g),e++,y}function s(p,f,m,v,d,g){const y=a(p,f,m,v,d,g);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function c(p,f,m,v,d,g){const y=a(p,f,m,v,d,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function u(p,f){t.length>1&&t.sort(p||GS),n.length>1&&n.sort(f||Dp),i.length>1&&i.sort(f||Dp)}function h(){for(let p=e,f=o.length;p<f;p++){const m=o[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:h,sort:u}}function VS(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Pp,o.set(n,[a])):i>=r.length?(a=new Pp,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function WS(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Gt};break;case"SpotLight":t={position:new J,direction:new J,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":t={color:new Gt,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=t,t}}}function HS(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let XS=0;function qS(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $S(o,e){const t=new WS,n=HS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new J);const r=new J,a=new pn,s=new pn;function c(h,p){let f=0,m=0,v=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let d=0,g=0,y=0,w=0,M=0,b=0,E=0,I=0,D=0,S=0;h.sort(qS);const C=p===!0?Math.PI:1;for(let K=0,H=h.length;K<H;K++){const V=h[K],N=V.color,Y=V.intensity,te=V.distance,Q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)f+=N.r*Y*C,m+=N.g*Y*C,v+=N.b*Y*C;else if(V.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(V.sh.coefficients[j],Y);else if(V.isDirectionalLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),V.castShadow){const oe=V.shadow,P=n.get(V);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=V.shadow.matrix,b++}i.directional[d]=j,d++}else if(V.isSpotLight){const j=t.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(N).multiplyScalar(Y*C),j.distance=te,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,i.spot[y]=j;const oe=V.shadow;if(V.map&&(i.spotLightMap[D]=V.map,D++,oe.updateMatrices(V),V.castShadow&&S++),i.spotLightMatrix[y]=oe.matrix,V.castShadow){const P=n.get(V);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=Q,I++}y++}else if(V.isRectAreaLight){const j=t.get(V);j.color.copy(N).multiplyScalar(Y),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),i.rectArea[w]=j,w++}else if(V.isPointLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),j.distance=V.distance,j.decay=V.decay,V.castShadow){const oe=V.shadow,P=n.get(V);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,P.shadowCameraNear=oe.camera.near,P.shadowCameraFar=oe.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=V.shadow.matrix,E++}i.point[g]=j,g++}else if(V.isHemisphereLight){const j=t.get(V);j.skyColor.copy(V.color).multiplyScalar(Y*C),j.groundColor.copy(V.groundColor).multiplyScalar(Y*C),i.hemi[M]=j,M++}}w>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=v;const O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==w||O.hemiLength!==M||O.numDirectionalShadows!==b||O.numPointShadows!==E||O.numSpotShadows!==I||O.numSpotMaps!==D)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=w,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=I+D-S,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=S,O.directionalLength=d,O.pointLength=g,O.spotLength=y,O.rectAreaLength=w,O.hemiLength=M,O.numDirectionalShadows=b,O.numPointShadows=E,O.numSpotShadows=I,O.numSpotMaps=D,i.version=XS++)}function u(h,p){let f=0,m=0,v=0,d=0,g=0;const y=p.matrixWorldInverse;for(let w=0,M=h.length;w<M;w++){const b=h[w];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(y),f++}else if(b.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(y),v++}else if(b.isRectAreaLight){const E=i.rectArea[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),s.identity(),a.copy(b.matrixWorld),a.premultiply(y),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),m++}else if(b.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(y),g++}}}return{setup:c,setupView:u,state:i}}function Rp(o,e){const t=new $S(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(p){n.push(p)}function s(p){i.push(p)}function c(p){t.setup(n,p)}function u(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:s}}function YS(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let c;return s===void 0?(c=new Rp(o,e),t.set(r,[c])):a>=s.length?(c=new Rp(o,e),s.push(c)):c=s[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class jS extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new J,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QS(o,e,t){let n=new Bm;const i=new Vt,r=new Vt,a=new gn,s=new jS({depthPacking:Qv}),c=new ZS,u={},h=t.maxTextureSize,p={[Ur]:fi,[fi]:Ur,[Ar]:Ar},f=new Ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:KS,fragmentShader:JS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Lr(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ym,this.render=function(b,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const D=o.getRenderTarget(),S=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),O=o.state;O.setBlending(Fr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let K=0,H=b.length;K<H;K++){const V=b[K],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const Y=N.getFrameExtents();if(i.multiply(Y),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null){const Q=this.type!==ea?{minFilter:Un,magFilter:Un}:{};N.map=new Cs(i.x,i.y,Q),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}o.setRenderTarget(N.map),o.clear();const te=N.getViewportCount();for(let Q=0;Q<te;Q++){const j=N.getViewport(Q);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(a),N.updateMatrices(V,Q),n=N.getFrustum(),M(E,I,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===ea&&y(N,I),N.needsUpdate=!1}g.needsUpdate=!1,o.setRenderTarget(D,S,C)};function y(b,E){const I=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Cs(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(E,null,I,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(E,null,I,m,d,null)}function w(b,E,I,D,S,C){let O=null;const K=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(K!==void 0)O=K;else if(O=I.isPointLight===!0?c:s,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=O.uuid,V=E.uuid;let N=u[H];N===void 0&&(N={},u[H]=N);let Y=N[V];Y===void 0&&(Y=O.clone(),N[V]=Y),O=Y}return O.visible=E.visible,O.wireframe=E.wireframe,C===ea?O.side=E.shadowSide!==null?E.shadowSide:E.side:O.side=E.shadowSide!==null?E.shadowSide:p[E.side],O.alphaMap=E.alphaMap,O.alphaTest=E.alphaTest,O.map=E.map,O.clipShadows=E.clipShadows,O.clippingPlanes=E.clippingPlanes,O.clipIntersection=E.clipIntersection,O.displacementMap=E.displacementMap,O.displacementScale=E.displacementScale,O.displacementBias=E.displacementBias,O.wireframeLinewidth=E.wireframeLinewidth,O.linewidth=E.linewidth,I.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(I.matrixWorld),O.nearDistance=D,O.farDistance=S),O}function M(b,E,I,D,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ea)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const K=e.update(b),H=b.material;if(Array.isArray(H)){const V=K.groups;for(let N=0,Y=V.length;N<Y;N++){const te=V[N],Q=H[te.materialIndex];if(Q&&Q.visible){const j=w(b,Q,D,I.near,I.far,S);o.renderBufferDirect(I,null,K,j,b,te)}}}else if(H.visible){const V=w(b,H,D,I.near,I.far,S);o.renderBufferDirect(I,null,K,V,b,null)}}const O=b.children;for(let K=0,H=O.length;K<H;K++)M(O[K],E,I,D,S)}}function ew(o,e,t){const n=t.isWebGL2;function i(){let F=!1;const ie=new gn;let ae=null;const ve=new gn(0,0,0,0);return{setMask:function(Se){ae!==Se&&!F&&(o.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){F=Se},setClear:function(Se,mt,Pt,Ot,ln){ln===!0&&(Se*=Ot,mt*=Ot,Pt*=Ot),ie.set(Se,mt,Pt,Ot),ve.equals(ie)===!1&&(o.clearColor(Se,mt,Pt,Ot),ve.copy(ie))},reset:function(){F=!1,ae=null,ve.set(-1,0,0,0)}}}function r(){let F=!1,ie=null,ae=null,ve=null;return{setTest:function(Se){Se?de(2929):Me(2929)},setMask:function(Se){ie!==Se&&!F&&(o.depthMask(Se),ie=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Mv:o.depthFunc(512);break;case Sv:o.depthFunc(519);break;case wv:o.depthFunc(513);break;case Xu:o.depthFunc(515);break;case Tv:o.depthFunc(514);break;case Ev:o.depthFunc(518);break;case Av:o.depthFunc(516);break;case Cv:o.depthFunc(517);break;default:o.depthFunc(515)}ae=Se}},setLocked:function(Se){F=Se},setClear:function(Se){ve!==Se&&(o.clearDepth(Se),ve=Se)},reset:function(){F=!1,ie=null,ae=null,ve=null}}}function a(){let F=!1,ie=null,ae=null,ve=null,Se=null,mt=null,Pt=null,Ot=null,ln=null;return{setTest:function(Le){F||(Le?de(2960):Me(2960))},setMask:function(Le){ie!==Le&&!F&&(o.stencilMask(Le),ie=Le)},setFunc:function(Le,Oe,je){(ae!==Le||ve!==Oe||Se!==je)&&(o.stencilFunc(Le,Oe,je),ae=Le,ve=Oe,Se=je)},setOp:function(Le,Oe,je){(mt!==Le||Pt!==Oe||Ot!==je)&&(o.stencilOp(Le,Oe,je),mt=Le,Pt=Oe,Ot=je)},setLocked:function(Le){F=Le},setClear:function(Le){ln!==Le&&(o.clearStencil(Le),ln=Le)},reset:function(){F=!1,ie=null,ae=null,ve=null,Se=null,mt=null,Pt=null,Ot=null,ln=null}}}const s=new i,c=new r,u=new a,h=new WeakMap,p=new WeakMap;let f={},m={},v=new WeakMap,d=[],g=null,y=!1,w=null,M=null,b=null,E=null,I=null,D=null,S=null,C=!1,O=null,K=null,H=null,V=null,N=null;const Y=o.getParameter(35661);let te=!1,Q=0;const j=o.getParameter(7938);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=Q>=2);let oe=null,P={};const U=o.getParameter(3088),q=o.getParameter(2978),ce=new gn().fromArray(U),he=new gn().fromArray(q);function G(F,ie,ae){const ve=new Uint8Array(4),Se=o.createTexture();o.bindTexture(F,Se),o.texParameteri(F,10241,9728),o.texParameteri(F,10240,9728);for(let mt=0;mt<ae;mt++)o.texImage2D(ie+mt,0,6408,1,1,0,6408,5121,ve);return Se}const ge={};ge[3553]=G(3553,3553,1),ge[34067]=G(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(2929),c.setFunc(Xu),xt(!1),$(bd),de(2884),nt(Fr);function de(F){f[F]!==!0&&(o.enable(F),f[F]=!0)}function Me(F){f[F]!==!1&&(o.disable(F),f[F]=!1)}function ne(F,ie){return m[F]!==ie?(o.bindFramebuffer(F,ie),m[F]=ie,n&&(F===36009&&(m[36160]=ie),F===36160&&(m[36009]=ie)),!0):!1}function Ne(F,ie){let ae=d,ve=!1;if(F)if(ae=v.get(ie),ae===void 0&&(ae=[],v.set(ie,ae)),F.isWebGLMultipleRenderTargets){const Se=F.texture;if(ae.length!==Se.length||ae[0]!==36064){for(let mt=0,Pt=Se.length;mt<Pt;mt++)ae[mt]=36064+mt;ae.length=Se.length,ve=!0}}else ae[0]!==36064&&(ae[0]=36064,ve=!0);else ae[0]!==1029&&(ae[0]=1029,ve=!0);ve&&(t.isWebGL2?o.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ve(F){return g!==F?(o.useProgram(F),g=F,!0):!1}const qe={[so]:32774,[hv]:32778,[fv]:32779};if(n)qe[wd]=32775,qe[Td]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(qe[wd]=F.MIN_EXT,qe[Td]=F.MAX_EXT)}const Ce={[dv]:0,[pv]:1,[mv]:768,[bm]:770,[bv]:776,[xv]:774,[_v]:772,[gv]:769,[Mm]:771,[yv]:775,[vv]:773};function nt(F,ie,ae,ve,Se,mt,Pt,Ot){if(F===Fr){y===!0&&(Me(3042),y=!1);return}if(y===!1&&(de(3042),y=!0),F!==uv){if(F!==w||Ot!==C){if((M!==so||I!==so)&&(o.blendEquation(32774),M=so,I=so),Ot)switch(F){case po:o.blendFuncSeparate(1,771,1,771);break;case Kl:o.blendFunc(1,1);break;case Md:o.blendFuncSeparate(0,769,0,1);break;case Sd:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case po:o.blendFuncSeparate(770,771,1,771);break;case Kl:o.blendFunc(770,1);break;case Md:o.blendFuncSeparate(0,769,0,1);break;case Sd:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,E=null,D=null,S=null,w=F,C=Ot}return}Se=Se||ie,mt=mt||ae,Pt=Pt||ve,(ie!==M||Se!==I)&&(o.blendEquationSeparate(qe[ie],qe[Se]),M=ie,I=Se),(ae!==b||ve!==E||mt!==D||Pt!==S)&&(o.blendFuncSeparate(Ce[ae],Ce[ve],Ce[mt],Ce[Pt]),b=ae,E=ve,D=mt,S=Pt),w=F,C=!1}function Et(F,ie){F.side===Ar?Me(2884):de(2884);let ae=F.side===fi;ie&&(ae=!ae),xt(ae),F.blending===po&&F.transparent===!1?nt(Fr):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;u.setTest(ve),ve&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(32926):Me(32926)}function xt(F){O!==F&&(F?o.frontFace(2304):o.frontFace(2305),O=F)}function $(F){F!==av?(de(2884),F!==K&&(F===bd?o.cullFace(1029):F===lv?o.cullFace(1028):o.cullFace(1032))):Me(2884),K=F}function ct(F){F!==H&&(te&&o.lineWidth(F),H=F)}function gt(F,ie,ae){F?(de(32823),(V!==ie||N!==ae)&&(o.polygonOffset(ie,ae),V=ie,N=ae)):Me(32823)}function jt(F){F?de(3089):Me(3089)}function pt(F){F===void 0&&(F=33984+Y-1),oe!==F&&(o.activeTexture(F),oe=F)}function R(F,ie,ae){ae===void 0&&(oe===null?ae=33984+Y-1:ae=oe);let ve=P[ae];ve===void 0&&(ve={type:void 0,texture:void 0},P[ae]=ve),(ve.type!==F||ve.texture!==ie)&&(oe!==ae&&(o.activeTexture(ae),oe=ae),o.bindTexture(F,ie||ge[F]),ve.type=F,ve.texture=ie)}function L(){const F=P[oe];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){ce.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function Fe(F){he.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function rt(F,ie){let ae=p.get(ie);ae===void 0&&(ae=new WeakMap,p.set(ie,ae));let ve=ae.get(F);ve===void 0&&(ve=o.getUniformBlockIndex(ie,F.name),ae.set(F,ve))}function yt(F,ie){const ve=p.get(ie).get(F);h.get(ie)!==ve&&(o.uniformBlockBinding(ie,ve,F.__bindingPointIndex),h.set(ie,ve))}function Dt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},oe=null,P={},m={},v=new WeakMap,d=[],g=null,y=!1,w=null,M=null,b=null,E=null,I=null,D=null,S=null,C=!1,O=null,K=null,H=null,V=null,N=null,ce.set(0,0,o.canvas.width,o.canvas.height),he.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:de,disable:Me,bindFramebuffer:ne,drawBuffers:Ne,useProgram:Ve,setBlending:nt,setMaterial:Et,setFlipSided:xt,setCullFace:$,setLineWidth:ct,setPolygonOffset:gt,setScissorTest:jt,activeTexture:pt,bindTexture:R,unbindTexture:L,compressedTexImage2D:re,compressedTexImage3D:ue,texImage2D:me,texImage3D:We,updateUBOMapping:rt,uniformBlockBinding:yt,texStorage2D:se,texStorage3D:Ue,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:ye,scissor:ke,viewport:Fe,reset:Dt}}function tw(o,e,t,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,h=i.maxTextureSize,p=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let d;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,L){return y?new OffscreenCanvas(R,L):Jl("canvas")}function M(R,L,re,ue){let fe=1;if((R.width>ue||R.height>ue)&&(fe=ue/Math.max(R.width,R.height)),fe<1||L===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const pe=L?rx:Math.floor,Pe=pe(fe*R.width),ye=pe(fe*R.height);d===void 0&&(d=w(Pe,ye));const se=re?w(Pe,ye):d;return se.width=Pe,se.height=ye,se.getContext("2d").drawImage(R,0,0,Pe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pe+"x"+ye+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return Qd(R.width)&&Qd(R.height)}function E(R){return s?!1:R.wrapS!==zi||R.wrapT!==zi||R.minFilter!==Un&&R.minFilter!==Ti}function I(R,L){return R.generateMipmaps&&L&&R.minFilter!==Un&&R.minFilter!==Ti}function D(R){o.generateMipmap(R)}function S(R,L,re,ue,fe=!1){if(s===!1)return L;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe=L;return L===6403&&(re===5126&&(pe=33326),re===5131&&(pe=33325),re===5121&&(pe=33321)),L===33319&&(re===5126&&(pe=33328),re===5131&&(pe=33327),re===5121&&(pe=33323)),L===6408&&(re===5126&&(pe=34836),re===5131&&(pe=34842),re===5121&&(pe=ue===Bt&&fe===!1?35907:32856),re===32819&&(pe=32854),re===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function C(R,L,re){return I(R,re)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==Ti?Math.log2(Math.max(L.width,L.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?L.mipmaps.length:1}function O(R){return R===Un||R===Ed||R===jc?9728:9729}function K(R){const L=R.target;L.removeEventListener("dispose",K),V(L),L.isVideoTexture&&v.delete(L)}function H(R){const L=R.target;L.removeEventListener("dispose",H),Y(L)}function V(R){const L=n.get(R);if(L.__webglInit===void 0)return;const re=R.source,ue=g.get(re);if(ue){const fe=ue[L.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&N(R),Object.keys(ue).length===0&&g.delete(re)}n.remove(R)}function N(R){const L=n.get(R);o.deleteTexture(L.__webglTexture);const re=R.source,ue=g.get(re);delete ue[L.__cacheKey],a.memory.textures--}function Y(R){const L=R.texture,re=n.get(R),ue=n.get(L);if(ue.__webglTexture!==void 0&&(o.deleteTexture(ue.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)o.deleteFramebuffer(re.__webglFramebuffer[fe]),re.__webglDepthbuffer&&o.deleteRenderbuffer(re.__webglDepthbuffer[fe]);else{if(o.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&o.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&o.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let fe=0;fe<re.__webglColorRenderbuffer.length;fe++)re.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(re.__webglColorRenderbuffer[fe]);re.__webglDepthRenderbuffer&&o.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let fe=0,pe=L.length;fe<pe;fe++){const Pe=n.get(L[fe]);Pe.__webglTexture&&(o.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(L[fe])}n.remove(L),n.remove(R)}let te=0;function Q(){te=0}function j(){const R=te;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),te+=1,R}function oe(R){const L=[];return L.push(R.wrapS),L.push(R.wrapT),L.push(R.wrapR||0),L.push(R.magFilter),L.push(R.minFilter),L.push(R.anisotropy),L.push(R.internalFormat),L.push(R.format),L.push(R.type),L.push(R.generateMipmaps),L.push(R.premultiplyAlpha),L.push(R.flipY),L.push(R.unpackAlignment),L.push(R.encoding),L.join()}function P(R,L){const re=n.get(R);if(R.isVideoTexture&&jt(R),R.isRenderTargetTexture===!1&&R.version>0&&re.__version!==R.version){const ue=R.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(re,R,L);return}}t.bindTexture(3553,re.__webglTexture,33984+L)}function U(R,L){const re=n.get(R);if(R.version>0&&re.__version!==R.version){Me(re,R,L);return}t.bindTexture(35866,re.__webglTexture,33984+L)}function q(R,L){const re=n.get(R);if(R.version>0&&re.__version!==R.version){Me(re,R,L);return}t.bindTexture(32879,re.__webglTexture,33984+L)}function ce(R,L){const re=n.get(R);if(R.version>0&&re.__version!==R.version){ne(re,R,L);return}t.bindTexture(34067,re.__webglTexture,33984+L)}const he={[Yu]:10497,[zi]:33071,[ju]:33648},G={[Un]:9728,[Ed]:9984,[jc]:9986,[Ti]:9729,[Nv]:9985,[wa]:9987};function ge(R,L,re){if(re?(o.texParameteri(R,10242,he[L.wrapS]),o.texParameteri(R,10243,he[L.wrapT]),(R===32879||R===35866)&&o.texParameteri(R,32882,he[L.wrapR]),o.texParameteri(R,10240,G[L.magFilter]),o.texParameteri(R,10241,G[L.minFilter])):(o.texParameteri(R,10242,33071),o.texParameteri(R,10243,33071),(R===32879||R===35866)&&o.texParameteri(R,32882,33071),(L.wrapS!==zi||L.wrapT!==zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,10240,O(L.magFilter)),o.texParameteri(R,10241,O(L.minFilter)),L.minFilter!==Un&&L.minFilter!==Ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Un||L.minFilter!==jc&&L.minFilter!==wa||L.type===ds&&e.has("OES_texture_float_linear")===!1||s===!1&&L.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(o.texParameterf(R,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function de(R,L){let re=!1;R.__webglInit===void 0&&(R.__webglInit=!0,L.addEventListener("dispose",K));const ue=L.source;let fe=g.get(ue);fe===void 0&&(fe={},g.set(ue,fe));const pe=oe(L);if(pe!==R.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,re=!0),fe[pe].usedTimes++;const Pe=fe[R.__cacheKey];Pe!==void 0&&(fe[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(L)),R.__cacheKey=pe,R.__webglTexture=fe[pe].texture}return re}function Me(R,L,re){let ue=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ue=35866),L.isData3DTexture&&(ue=32879);const fe=de(R,L),pe=L.source;t.bindTexture(ue,R.__webglTexture,33984+re);const Pe=n.get(pe);if(pe.version!==Pe.__version||fe===!0){t.activeTexture(33984+re),o.pixelStorei(37440,L.flipY),o.pixelStorei(37441,L.premultiplyAlpha),o.pixelStorei(3317,L.unpackAlignment),o.pixelStorei(37443,0);const ye=E(L)&&b(L.image)===!1;let se=M(L.image,ye,!1,h);se=pt(L,se);const Ue=b(se)||s,me=r.convert(L.format,L.encoding);let We=r.convert(L.type),ke=S(L.internalFormat,me,We,L.encoding,L.isVideoTexture);ge(ue,L,Ue);let Fe;const rt=L.mipmaps,yt=s&&L.isVideoTexture!==!0,Dt=Pe.__version===void 0||fe===!0,F=C(L,se,Ue);if(L.isDepthTexture)ke=6402,s?L.type===ds?ke=36012:L.type===fs?ke=33190:L.type===mo?ke=35056:ke=33189:L.type===ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===_s&&ke===6402&&L.type!==Tm&&L.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=fs,We=r.convert(L.type)),L.format===Eo&&ke===6402&&(ke=34041,L.type!==mo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=mo,We=r.convert(L.type))),Dt&&(yt?t.texStorage2D(3553,1,ke,se.width,se.height):t.texImage2D(3553,0,ke,se.width,se.height,0,me,We,null));else if(L.isDataTexture)if(rt.length>0&&Ue){yt&&Dt&&t.texStorage2D(3553,F,ke,rt[0].width,rt[0].height);for(let ie=0,ae=rt.length;ie<ae;ie++)Fe=rt[ie],yt?t.texSubImage2D(3553,ie,0,0,Fe.width,Fe.height,me,We,Fe.data):t.texImage2D(3553,ie,ke,Fe.width,Fe.height,0,me,We,Fe.data);L.generateMipmaps=!1}else yt?(Dt&&t.texStorage2D(3553,F,ke,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,me,We,se.data)):t.texImage2D(3553,0,ke,se.width,se.height,0,me,We,se.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){yt&&Dt&&t.texStorage3D(35866,F,ke,rt[0].width,rt[0].height,se.depth);for(let ie=0,ae=rt.length;ie<ae;ie++)Fe=rt[ie],L.format!==Ui?me!==null?yt?t.compressedTexSubImage3D(35866,ie,0,0,0,Fe.width,Fe.height,se.depth,me,Fe.data,0,0):t.compressedTexImage3D(35866,ie,ke,Fe.width,Fe.height,se.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(35866,ie,0,0,0,Fe.width,Fe.height,se.depth,me,We,Fe.data):t.texImage3D(35866,ie,ke,Fe.width,Fe.height,se.depth,0,me,We,Fe.data)}else{yt&&Dt&&t.texStorage2D(3553,F,ke,rt[0].width,rt[0].height);for(let ie=0,ae=rt.length;ie<ae;ie++)Fe=rt[ie],L.format!==Ui?me!==null?yt?t.compressedTexSubImage2D(3553,ie,0,0,Fe.width,Fe.height,me,Fe.data):t.compressedTexImage2D(3553,ie,ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(3553,ie,0,0,Fe.width,Fe.height,me,We,Fe.data):t.texImage2D(3553,ie,ke,Fe.width,Fe.height,0,me,We,Fe.data)}else if(L.isDataArrayTexture)yt?(Dt&&t.texStorage3D(35866,F,ke,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,me,We,se.data)):t.texImage3D(35866,0,ke,se.width,se.height,se.depth,0,me,We,se.data);else if(L.isData3DTexture)yt?(Dt&&t.texStorage3D(32879,F,ke,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,me,We,se.data)):t.texImage3D(32879,0,ke,se.width,se.height,se.depth,0,me,We,se.data);else if(L.isFramebufferTexture){if(Dt)if(yt)t.texStorage2D(3553,F,ke,se.width,se.height);else{let ie=se.width,ae=se.height;for(let ve=0;ve<F;ve++)t.texImage2D(3553,ve,ke,ie,ae,0,me,We,null),ie>>=1,ae>>=1}}else if(rt.length>0&&Ue){yt&&Dt&&t.texStorage2D(3553,F,ke,rt[0].width,rt[0].height);for(let ie=0,ae=rt.length;ie<ae;ie++)Fe=rt[ie],yt?t.texSubImage2D(3553,ie,0,0,me,We,Fe):t.texImage2D(3553,ie,ke,me,We,Fe);L.generateMipmaps=!1}else yt?(Dt&&t.texStorage2D(3553,F,ke,se.width,se.height),t.texSubImage2D(3553,0,0,0,me,We,se)):t.texImage2D(3553,0,ke,me,We,se);I(L,Ue)&&D(ue),Pe.__version=pe.version,L.onUpdate&&L.onUpdate(L)}R.__version=L.version}function ne(R,L,re){if(L.image.length!==6)return;const ue=de(R,L),fe=L.source;t.bindTexture(34067,R.__webglTexture,33984+re);const pe=n.get(fe);if(fe.version!==pe.__version||ue===!0){t.activeTexture(33984+re),o.pixelStorei(37440,L.flipY),o.pixelStorei(37441,L.premultiplyAlpha),o.pixelStorei(3317,L.unpackAlignment),o.pixelStorei(37443,0);const Pe=L.isCompressedTexture||L.image[0].isCompressedTexture,ye=L.image[0]&&L.image[0].isDataTexture,se=[];for(let ie=0;ie<6;ie++)!Pe&&!ye?se[ie]=M(L.image[ie],!1,!0,u):se[ie]=ye?L.image[ie].image:L.image[ie],se[ie]=pt(L,se[ie]);const Ue=se[0],me=b(Ue)||s,We=r.convert(L.format,L.encoding),ke=r.convert(L.type),Fe=S(L.internalFormat,We,ke,L.encoding),rt=s&&L.isVideoTexture!==!0,yt=pe.__version===void 0||ue===!0;let Dt=C(L,Ue,me);ge(34067,L,me);let F;if(Pe){rt&&yt&&t.texStorage2D(34067,Dt,Fe,Ue.width,Ue.height);for(let ie=0;ie<6;ie++){F=se[ie].mipmaps;for(let ae=0;ae<F.length;ae++){const ve=F[ae];L.format!==Ui?We!==null?rt?t.compressedTexSubImage2D(34069+ie,ae,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(34069+ie,ae,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(34069+ie,ae,0,0,ve.width,ve.height,We,ke,ve.data):t.texImage2D(34069+ie,ae,Fe,ve.width,ve.height,0,We,ke,ve.data)}}}else{F=L.mipmaps,rt&&yt&&(F.length>0&&Dt++,t.texStorage2D(34067,Dt,Fe,se[0].width,se[0].height));for(let ie=0;ie<6;ie++)if(ye){rt?t.texSubImage2D(34069+ie,0,0,0,se[ie].width,se[ie].height,We,ke,se[ie].data):t.texImage2D(34069+ie,0,Fe,se[ie].width,se[ie].height,0,We,ke,se[ie].data);for(let ae=0;ae<F.length;ae++){const Se=F[ae].image[ie].image;rt?t.texSubImage2D(34069+ie,ae+1,0,0,Se.width,Se.height,We,ke,Se.data):t.texImage2D(34069+ie,ae+1,Fe,Se.width,Se.height,0,We,ke,Se.data)}}else{rt?t.texSubImage2D(34069+ie,0,0,0,We,ke,se[ie]):t.texImage2D(34069+ie,0,Fe,We,ke,se[ie]);for(let ae=0;ae<F.length;ae++){const ve=F[ae];rt?t.texSubImage2D(34069+ie,ae+1,0,0,We,ke,ve.image[ie]):t.texImage2D(34069+ie,ae+1,Fe,We,ke,ve.image[ie])}}}I(L,me)&&D(34067),pe.__version=fe.version,L.onUpdate&&L.onUpdate(L)}R.__version=L.version}function Ne(R,L,re,ue,fe){const pe=r.convert(re.format,re.encoding),Pe=r.convert(re.type),ye=S(re.internalFormat,pe,Pe,re.encoding);n.get(L).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,ye,L.width,L.height,L.depth,0,pe,Pe,null):t.texImage2D(fe,0,ye,L.width,L.height,0,pe,Pe,null)),t.bindFramebuffer(36160,R),gt(L)?f.framebufferTexture2DMultisampleEXT(36160,ue,fe,n.get(re).__webglTexture,0,ct(L)):(fe===3553||fe>=34069&&fe<=34074)&&o.framebufferTexture2D(36160,ue,fe,n.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(R,L,re){if(o.bindRenderbuffer(36161,R),L.depthBuffer&&!L.stencilBuffer){let ue=33189;if(re||gt(L)){const fe=L.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ds?ue=36012:fe.type===fs&&(ue=33190));const pe=ct(L);gt(L)?f.renderbufferStorageMultisampleEXT(36161,pe,ue,L.width,L.height):o.renderbufferStorageMultisample(36161,pe,ue,L.width,L.height)}else o.renderbufferStorage(36161,ue,L.width,L.height);o.framebufferRenderbuffer(36160,36096,36161,R)}else if(L.depthBuffer&&L.stencilBuffer){const ue=ct(L);re&&gt(L)===!1?o.renderbufferStorageMultisample(36161,ue,35056,L.width,L.height):gt(L)?f.renderbufferStorageMultisampleEXT(36161,ue,35056,L.width,L.height):o.renderbufferStorage(36161,34041,L.width,L.height),o.framebufferRenderbuffer(36160,33306,36161,R)}else{const ue=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let fe=0;fe<ue.length;fe++){const pe=ue[fe],Pe=r.convert(pe.format,pe.encoding),ye=r.convert(pe.type),se=S(pe.internalFormat,Pe,ye,pe.encoding),Ue=ct(L);re&&gt(L)===!1?o.renderbufferStorageMultisample(36161,Ue,se,L.width,L.height):gt(L)?f.renderbufferStorageMultisampleEXT(36161,Ue,se,L.width,L.height):o.renderbufferStorage(36161,se,L.width,L.height)}}o.bindRenderbuffer(36161,null)}function qe(R,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),P(L.depthTexture,0);const ue=n.get(L.depthTexture).__webglTexture,fe=ct(L);if(L.depthTexture.format===_s)gt(L)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ue,0,fe):o.framebufferTexture2D(36160,36096,3553,ue,0);else if(L.depthTexture.format===Eo)gt(L)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ue,0,fe):o.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const L=n.get(R),re=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!L.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");qe(L.__webglFramebuffer,R)}else if(re){L.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,L.__webglFramebuffer[ue]),L.__webglDepthbuffer[ue]=o.createRenderbuffer(),Ve(L.__webglDepthbuffer[ue],R,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=o.createRenderbuffer(),Ve(L.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function nt(R,L,re){const ue=n.get(R);L!==void 0&&Ne(ue.__webglFramebuffer,R,R.texture,36064,3553),re!==void 0&&Ce(R)}function Et(R){const L=R.texture,re=n.get(R),ue=n.get(L);R.addEventListener("dispose",H),R.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture()),ue.__version=L.version,a.memory.textures++);const fe=R.isWebGLCubeRenderTarget===!0,pe=R.isWebGLMultipleRenderTargets===!0,Pe=b(R)||s;if(fe){re.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)re.__webglFramebuffer[ye]=o.createFramebuffer()}else{if(re.__webglFramebuffer=o.createFramebuffer(),pe)if(i.drawBuffers){const ye=R.texture;for(let se=0,Ue=ye.length;se<Ue;se++){const me=n.get(ye[se]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&gt(R)===!1){const ye=pe?L:[L];re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer);for(let se=0;se<ye.length;se++){const Ue=ye[se];re.__webglColorRenderbuffer[se]=o.createRenderbuffer(),o.bindRenderbuffer(36161,re.__webglColorRenderbuffer[se]);const me=r.convert(Ue.format,Ue.encoding),We=r.convert(Ue.type),ke=S(Ue.internalFormat,me,We,Ue.encoding,R.isXRRenderTarget===!0),Fe=ct(R);o.renderbufferStorageMultisample(36161,Fe,ke,R.width,R.height),o.framebufferRenderbuffer(36160,36064+se,36161,re.__webglColorRenderbuffer[se])}o.bindRenderbuffer(36161,null),R.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),Ve(re.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(fe){t.bindTexture(34067,ue.__webglTexture),ge(34067,L,Pe);for(let ye=0;ye<6;ye++)Ne(re.__webglFramebuffer[ye],R,L,36064,34069+ye);I(L,Pe)&&D(34067),t.unbindTexture()}else if(pe){const ye=R.texture;for(let se=0,Ue=ye.length;se<Ue;se++){const me=ye[se],We=n.get(me);t.bindTexture(3553,We.__webglTexture),ge(3553,me,Pe),Ne(re.__webglFramebuffer,R,me,36064+se,3553),I(me,Pe)&&D(3553)}t.unbindTexture()}else{let ye=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?ye=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ue.__webglTexture),ge(ye,L,Pe),Ne(re.__webglFramebuffer,R,L,36064,ye),I(L,Pe)&&D(ye),t.unbindTexture()}R.depthBuffer&&Ce(R)}function xt(R){const L=b(R)||s,re=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ue=0,fe=re.length;ue<fe;ue++){const pe=re[ue];if(I(pe,L)){const Pe=R.isWebGLCubeRenderTarget?34067:3553,ye=n.get(pe).__webglTexture;t.bindTexture(Pe,ye),D(Pe),t.unbindTexture()}}}function $(R){if(s&&R.samples>0&&gt(R)===!1){const L=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],re=R.width,ue=R.height;let fe=16384;const pe=[],Pe=R.stencilBuffer?33306:36096,ye=n.get(R),se=R.isWebGLMultipleRenderTargets===!0;if(se)for(let Ue=0;Ue<L.length;Ue++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Ue,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Ue,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Ue=0;Ue<L.length;Ue++){pe.push(36064+Ue),R.depthBuffer&&pe.push(Pe);const me=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(me===!1&&(R.depthBuffer&&(fe|=256),R.stencilBuffer&&(fe|=1024)),se&&o.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Ue]),me===!0&&(o.invalidateFramebuffer(36008,[Pe]),o.invalidateFramebuffer(36009,[Pe])),se){const We=n.get(L[Ue]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,We,0)}o.blitFramebuffer(0,0,re,ue,0,0,re,ue,fe,9728),m&&o.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let Ue=0;Ue<L.length;Ue++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Ue,36161,ye.__webglColorRenderbuffer[Ue]);const me=n.get(L[Ue]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Ue,3553,me,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function ct(R){return Math.min(p,R.samples)}function gt(R){const L=n.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function jt(R){const L=a.render.frame;v.get(R)!==L&&(v.set(R,L),R.update())}function pt(R,L){const re=R.encoding,ue=R.format,fe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zu||re!==As&&(re===Bt?s===!1?e.has("EXT_sRGB")===!0&&ue===Ui?(R.format=Zu,R.minFilter=Ti,R.generateMipmaps=!1):L=Cm.sRGBToLinear(L):(ue!==Ui||fe!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",re)),L}this.allocateTextureUnit=j,this.resetTextureUnits=Q,this.setTexture2D=P,this.setTexture2DArray=U,this.setTexture3D=q,this.setTextureCube=ce,this.rebindTextures=nt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=gt}function nw(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===Es)return 5121;if(r===Bv)return 32819;if(r===Gv)return 32820;if(r===kv)return 5120;if(r===zv)return 5122;if(r===Tm)return 5123;if(r===Uv)return 5124;if(r===fs)return 5125;if(r===ds)return 5126;if(r===Ta)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Vv)return 6406;if(r===Ui)return 6408;if(r===Wv)return 6409;if(r===Hv)return 6410;if(r===_s)return 6402;if(r===Eo)return 34041;if(r===Zu)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Xv)return 6403;if(r===qv)return 36244;if(r===$v)return 33319;if(r===Yv)return 33320;if(r===jv)return 36249;if(r===Zc||r===Kc||r===Jc||r===Qc)if(a===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ad||r===Cd||r===Ld||r===Dd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zv)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pd||r===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Pd)return a===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Rd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Od||r===Fd||r===Nd||r===kd||r===zd||r===Ud||r===Bd||r===Gd||r===Vd||r===Wd||r===Hd||r===Xd||r===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Id)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qd)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===eu)return a===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Kv||r===$d||r===Yd||r===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class iw extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wl extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rw={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const d of e.hand.values()){const g=t.getJointPose(d,n),y=this._getHandJoint(u,d);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=g.radius),y.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&f>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rw)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sw extends Xn{constructor(e,t,n,i,r,a,s,c,u,h){if(h=h!==void 0?h:_s,h!==_s&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=fs),n===void 0&&h===Eo&&(n=mo),super(null,i,r,a,s,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Un,this.minFilter=c!==void 0?c:Un,this.flipY=!1,this.generateMipmaps=!1}}class ow extends Oo{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,v=null;const d=t.getContextAttributes();let g=null,y=null;const w=[],M=[],b=new Set,E=new Map,I=new Ei;I.layers.enable(1),I.viewport=new gn;const D=new Ei;D.layers.enable(2),D.viewport=new gn;const S=[I,D],C=new iw;C.layers.enable(1),C.layers.enable(2);let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=w[q];return ce===void 0&&(ce=new Eu,w[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=w[q];return ce===void 0&&(ce=new Eu,w[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=w[q];return ce===void 0&&(ce=new Eu,w[q]=ce),ce.getHandSpace()};function H(q){const ce=M.indexOf(q.inputSource);if(ce===-1)return;const he=w[ce];he!==void 0&&he.dispatchEvent({type:q.type,data:q.inputSource})}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",N);for(let q=0;q<w.length;q++){const ce=M[q];ce!==null&&(M[q]=null,w[q].disconnect(ce))}O=null,K=null,e.setRenderTarget(g),m=null,f=null,p=null,i=null,y=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:m}),y=new Cs(m.framebufferWidth,m.framebufferHeight,{format:Ui,type:Es,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ce=null,he=null,G=null;d.depth&&(G=d.stencil?35056:33190,ce=d.stencil?Eo:_s,he=d.stencil?mo:fs);const ge={colorFormat:32856,depthFormat:G,scaleFactor:r};p=new XRWebGLBinding(i,t),f=p.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),y=new Cs(f.textureWidth,f.textureHeight,{format:Ui,type:Es,depthTexture:new sw(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const de=e.properties.get(y);de.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(s),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(q){for(let ce=0;ce<q.removed.length;ce++){const he=q.removed[ce],G=M.indexOf(he);G>=0&&(M[G]=null,w[G].disconnect(he))}for(let ce=0;ce<q.added.length;ce++){const he=q.added[ce];let G=M.indexOf(he);if(G===-1){for(let de=0;de<w.length;de++)if(de>=M.length){M.push(he),G=de;break}else if(M[de]===null){M[de]=he,G=de;break}if(G===-1)break}const ge=w[G];ge&&ge.connect(he)}}const Y=new J,te=new J;function Q(q,ce,he){Y.setFromMatrixPosition(ce.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const G=Y.distanceTo(te),ge=ce.projectionMatrix.elements,de=he.projectionMatrix.elements,Me=ge[14]/(ge[10]-1),ne=ge[14]/(ge[10]+1),Ne=(ge[9]+1)/ge[5],Ve=(ge[9]-1)/ge[5],qe=(ge[8]-1)/ge[0],Ce=(de[8]+1)/de[0],nt=Me*qe,Et=Me*Ce,xt=G/(-qe+Ce),$=xt*-qe;ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ct=Me+xt,gt=ne+xt,jt=nt-$,pt=Et+(G-$),R=Ne*ne/gt*ct,L=Ve*ne/gt*ct;q.projectionMatrix.makePerspective(jt,pt,R,L,ct,gt)}function j(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;C.near=D.near=I.near=q.near,C.far=D.far=I.far=q.far,(O!==C.near||K!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,K=C.far);const ce=q.parent,he=C.cameras;j(C,ce);for(let ge=0;ge<he.length;ge++)j(he[ge],ce);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),q.matrix.copy(C.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const G=q.children;for(let ge=0,de=G.length;ge<de;ge++)G[ge].updateMatrixWorld(!0);he.length===2?Q(C,I,D):C.projectionMatrix.copy(I.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.getPlanes=function(){return b};let oe=null;function P(q,ce){if(h=ce.getViewerPose(u||a),v=ce,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let G=!1;he.length!==C.cameras.length&&(C.cameras.length=0,G=!0);for(let ge=0;ge<he.length;ge++){const de=he[ge];let Me=null;if(m!==null)Me=m.getViewport(de);else{const Ne=p.getViewSubImage(f,de);Me=Ne.viewport,ge===0&&(e.setRenderTargetTextures(y,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(y))}let ne=S[ge];ne===void 0&&(ne=new Ei,ne.layers.enable(ge),ne.viewport=new gn,S[ge]=ne),ne.matrix.fromArray(de.transform.matrix),ne.projectionMatrix.fromArray(de.projectionMatrix),ne.viewport.set(Me.x,Me.y,Me.width,Me.height),ge===0&&C.matrix.copy(ne.matrix),G===!0&&C.cameras.push(ne)}}for(let he=0;he<w.length;he++){const G=M[he],ge=w[he];G!==null&&ge!==void 0&&ge.update(G,ce,u||a)}if(oe&&oe(q,ce),ce.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ce.detectedPlanes});let he=null;for(const G of b)ce.detectedPlanes.has(G)||(he===null&&(he=[]),he.push(G));if(he!==null)for(const G of he)b.delete(G),E.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of ce.detectedPlanes)if(!b.has(G))b.add(G),E.set(G,ce.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const ge=E.get(G);G.lastChangedTime>ge&&(E.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}v=null}const U=new Gm;U.setAnimationLoop(P),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}function aw(o,e){function t(d,g){g.color.getRGB(d.fogColor.value,km(o)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function n(d,g,y,w,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?i(d,g):g.isMeshToonMaterial?(i(d,g),h(d,g)):g.isMeshPhongMaterial?(i(d,g),u(d,g)):g.isMeshStandardMaterial?(i(d,g),p(d,g),g.isMeshPhysicalMaterial&&f(d,g,M)):g.isMeshMatcapMaterial?(i(d,g),m(d,g)):g.isMeshDepthMaterial?i(d,g):g.isMeshDistanceMaterial?(i(d,g),v(d,g)):g.isMeshNormalMaterial?i(d,g):g.isLineBasicMaterial?(r(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?s(d,g,y,w):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map),g.alphaMap&&(d.alphaMap.value=g.alphaMap),g.bumpMap&&(d.bumpMap.value=g.bumpMap,d.bumpScale.value=g.bumpScale,g.side===fi&&(d.bumpScale.value*=-1)),g.displacementMap&&(d.displacementMap.value=g.displacementMap,d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap),g.normalMap&&(d.normalMap.value=g.normalMap,d.normalScale.value.copy(g.normalScale),g.side===fi&&d.normalScale.value.negate()),g.specularMap&&(d.specularMap.value=g.specularMap),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const y=e.get(g).envMap;if(y&&(d.envMap.value=y,d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap){d.lightMap.value=g.lightMap;const b=o.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=g.lightMapIntensity*b}g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity);let w;g.map?w=g.map:g.specularMap?w=g.specularMap:g.displacementMap?w=g.displacementMap:g.normalMap?w=g.normalMap:g.bumpMap?w=g.bumpMap:g.roughnessMap?w=g.roughnessMap:g.metalnessMap?w=g.metalnessMap:g.alphaMap?w=g.alphaMap:g.emissiveMap?w=g.emissiveMap:g.clearcoatMap?w=g.clearcoatMap:g.clearcoatNormalMap?w=g.clearcoatNormalMap:g.clearcoatRoughnessMap?w=g.clearcoatRoughnessMap:g.iridescenceMap?w=g.iridescenceMap:g.iridescenceThicknessMap?w=g.iridescenceThicknessMap:g.specularIntensityMap?w=g.specularIntensityMap:g.specularColorMap?w=g.specularColorMap:g.transmissionMap?w=g.transmissionMap:g.thicknessMap?w=g.thicknessMap:g.sheenColorMap?w=g.sheenColorMap:g.sheenRoughnessMap&&(w=g.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix));let M;g.aoMap?M=g.aoMap:g.lightMap&&(M=g.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uv2Transform.value.copy(M.matrix))}function r(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function s(d,g,y,w){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*y,d.scale.value=w*.5,g.map&&(d.map.value=g.map),g.alphaMap&&(d.alphaMap.value=g.alphaMap),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);let M;g.map?M=g.map:g.alphaMap&&(M=g.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix))}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map),g.alphaMap&&(d.alphaMap.value=g.alphaMap),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function u(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function h(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function p(d,g){d.roughness.value=g.roughness,d.metalness.value=g.metalness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function f(d,g,y){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),d.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===fi&&d.clearcoatNormalScale.value.negate())),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap)}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function v(d,g){d.referencePosition.value.copy(g.referencePosition),d.nearDistance.value=g.nearDistance,d.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function lw(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function c(w,M){const b=M.program;n.uniformBlockBinding(w,b)}function u(w,M){let b=i[w.id];b===void 0&&(v(w),b=h(w),i[w.id]=b,w.addEventListener("dispose",g));const E=M.program;n.updateUBOMapping(w,E);const I=e.render.frame;r[w.id]!==I&&(f(w),r[w.id]=I)}function h(w){const M=p();w.__bindingPointIndex=M;const b=o.createBuffer(),E=w.__size,I=w.usage;return o.bindBuffer(35345,b),o.bufferData(35345,E,I),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,b),b}function p(){for(let w=0;w<s;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=i[w.id],b=w.uniforms,E=w.__cache;o.bindBuffer(35345,M);for(let I=0,D=b.length;I<D;I++){const S=b[I];if(m(S,I,E)===!0){const C=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let K=0;for(let H=0;H<O.length;H++){const V=O[H],N=d(V);typeof V=="number"?(S.__data[0]=V,o.bufferSubData(35345,C+K,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=V.elements[0],S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=V.elements[0],S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=V.elements[0]):(V.toArray(S.__data,K),K+=N.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,C,S.__data)}}o.bindBuffer(35345,null)}function m(w,M,b){const E=w.value;if(b[M]===void 0){if(typeof E=="number")b[M]=E;else{const I=Array.isArray(E)?E:[E],D=[];for(let S=0;S<I.length;S++)D.push(I[S].clone());b[M]=D}return!0}else if(typeof E=="number"){if(b[M]!==E)return b[M]=E,!0}else{const I=Array.isArray(b[M])?b[M]:[b[M]],D=Array.isArray(E)?E:[E];for(let S=0;S<I.length;S++){const C=I[S];if(C.equals(D[S])===!1)return C.copy(D[S]),!0}}return!1}function v(w){const M=w.uniforms;let b=0;const E=16;let I=0;for(let D=0,S=M.length;D<S;D++){const C=M[D],O={boundary:0,storage:0},K=Array.isArray(C.value)?C.value:[C.value];for(let H=0,V=K.length;H<V;H++){const N=K[H],Y=d(N);O.boundary+=Y.boundary,O.storage+=Y.storage}if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,D>0){I=b%E;const H=E-I;I!==0&&H-O.boundary<0&&(b+=E-I,C.__offset=b)}b+=O.storage}return I=b%E,I>0&&(b+=E-I),w.__size=b,w.__cache={},this}function d(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){const M=w.target;M.removeEventListener("dispose",g);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function y(){for(const w in i)o.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:c,update:u,dispose:y}}function cw(){const o=Jl("canvas");return o.style.display="block",o}function Ch(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:cw(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",u=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let p=null,f=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=As,this.useLegacyLights=!0,this.toneMapping=mr,this.toneMappingExposure=1;const d=this;let g=!1,y=0,w=0,M=null,b=-1,E=null;const I=new gn,D=new gn;let S=null,C=e.width,O=e.height,K=1,H=null,V=null;const N=new gn(0,0,C,O),Y=new gn(0,0,C,O);let te=!1;const Q=new Bm;let j=!1,oe=!1,P=null;const U=new pn,q=new J,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return M===null?K:1}let G=t;function ge(A,W){for(let X=0;X<A.length;X++){const z=A[X],Z=e.getContext(z,W);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",We,!1),e.addEventListener("webglcontextrestored",ke,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),G===null){const W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),G=ge(W,A),G===null)throw ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,Me,ne,Ne,Ve,qe,Ce,nt,Et,xt,$,ct,gt,jt,pt,R,L,re,ue,fe,pe,Pe,ye,se;function Ue(){de=new yM(G),Me=new dM(G,de,o),de.init(Me),Pe=new nw(G,de,Me),ne=new ew(G,de,Me),Ne=new SM,Ve=new BS,qe=new tw(G,de,ne,Ve,Me,Pe,Ne),Ce=new mM(d),nt=new xM(d),Et=new Px(G,Me),ye=new hM(G,de,Et,Me),xt=new bM(G,Et,Ne,ye),$=new AM(G,xt,Et,Ne),ue=new EM(G,Me,qe),R=new pM(Ve),ct=new US(d,Ce,nt,de,Me,ye,R),gt=new aw(d,Ve),jt=new VS,pt=new YS(de,Me),re=new uM(d,Ce,nt,ne,$,h,a),L=new QS(d,$,Me),se=new lw(G,Ne,Me,ne),fe=new fM(G,de,Ne,Me),pe=new MM(G,de,Ne,Me),Ne.programs=ct.programs,d.capabilities=Me,d.extensions=de,d.properties=Ve,d.renderLists=jt,d.shadowMap=L,d.state=ne,d.info=Ne}Ue();const me=new ow(d,G);this.xr=me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(C,O,!1))},this.getSize=function(A){return A.set(C,O)},this.setSize=function(A,W,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,O=W,e.width=Math.floor(A*K),e.height=Math.floor(W*K),X===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(C*K,O*K).floor()},this.setDrawingBufferSize=function(A,W,X){C=A,O=W,K=X,e.width=Math.floor(A*X),e.height=Math.floor(W*X),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,X,z){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,X,z),ne.viewport(I.copy(N).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,W,X,z){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,W,X,z),ne.scissor(D.copy(Y).multiplyScalar(K).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){ne.setScissorTest(te=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,W=!0,X=!0){let z=0;A&&(z|=16384),W&&(z|=256),X&&(z|=1024),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",We,!1),e.removeEventListener("webglcontextrestored",ke,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),jt.dispose(),pt.dispose(),Ve.dispose(),Ce.dispose(),nt.dispose(),$.dispose(),ye.dispose(),se.dispose(),ct.dispose(),me.dispose(),me.removeEventListener("sessionstart",ae),me.removeEventListener("sessionend",ve),P&&(P.dispose(),P=null),Se.stop()};function We(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const A=Ne.autoReset,W=L.enabled,X=L.autoUpdate,z=L.needsUpdate,Z=L.type;Ue(),Ne.autoReset=A,L.enabled=W,L.autoUpdate=X,L.needsUpdate=z,L.type=Z}function Fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),yt(W)}function yt(A){Dt(A),Ve.remove(A)}function Dt(A){const W=Ve.get(A).programs;W!==void 0&&(W.forEach(function(X){ct.releaseProgram(X)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,X,z,Z,be){W===null&&(W=ce);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Ae=xe(A,W,X,z,Z);ne.setMaterial(z,Ee);let Ye=X.index,Ge=1;z.wireframe===!0&&(Ye=xt.getWireframeAttribute(X),Ge=2);const Xe=X.drawRange,ze=X.attributes.position;let $e=Xe.start*Ge,Qe=(Xe.start+Xe.count)*Ge;be!==null&&($e=Math.max($e,be.start*Ge),Qe=Math.min(Qe,(be.start+be.count)*Ge)),Ye!==null?($e=Math.max($e,0),Qe=Math.min(Qe,Ye.count)):ze!=null&&($e=Math.max($e,0),Qe=Math.min(Qe,ze.count));const it=Qe-$e;if(it<0||it===1/0)return;ye.setup(Z,z,Ae,X,Ye);let Qt,bt=fe;if(Ye!==null&&(Qt=Et.get(Ye),bt=pe,bt.setIndex(Qt)),Z.isMesh)z.wireframe===!0?(ne.setLineWidth(z.wireframeLinewidth*he()),bt.setMode(1)):bt.setMode(4);else if(Z.isLine){let Be=z.linewidth;Be===void 0&&(Be=1),ne.setLineWidth(Be*he()),Z.isLineSegments?bt.setMode(1):Z.isLineLoop?bt.setMode(2):bt.setMode(3)}else Z.isPoints?bt.setMode(0):Z.isSprite&&bt.setMode(4);if(Z.isInstancedMesh)bt.renderInstances($e,it,Z.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,Be);bt.renderInstances($e,it,wt)}else bt.render($e,it)},this.compile=function(A,W){function X(z,Z,be){z.transparent===!0&&z.side===Ar&&z.forceSinglePass===!1?(z.side=fi,z.needsUpdate=!0,Oe(z,Z,be),z.side=Ur,z.needsUpdate=!0,Oe(z,Z,be),z.side=Ar):Oe(z,Z,be)}f=pt.get(A),f.init(),v.push(f),A.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(d.useLegacyLights),A.traverse(function(z){const Z=z.material;if(Z)if(Array.isArray(Z))for(let be=0;be<Z.length;be++){const Ee=Z[be];X(Ee,A,z)}else X(Z,A,z)}),v.pop(),f=null};let F=null;function ie(A){F&&F(A)}function ae(){Se.stop()}function ve(){Se.start()}const Se=new Gm;Se.setAnimationLoop(ie),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(A){F=A,me.setAnimationLoop(A),A===null?Se.stop():Se.start()},me.addEventListener("sessionstart",ae),me.addEventListener("sessionend",ve),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,W,M),f=pt.get(A,v.length),f.init(),v.push(f),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(U),oe=this.localClippingEnabled,j=R.init(this.clippingPlanes,oe),p=jt.get(A,m.length),p.init(),m.push(p),mt(A,W,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(H,V),j===!0&&R.beginShadows();const X=f.state.shadowsArray;if(L.render(X,A,W),j===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),f.setupLights(d.useLegacyLights),W.isArrayCamera){const z=W.cameras;for(let Z=0,be=z.length;Z<be;Z++){const Ee=z[Z];Pt(p,A,Ee,Ee.viewport)}}else Pt(p,A,W);M!==null&&(qe.updateMultisampleRenderTarget(M),qe.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(d,A,W),ye.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function mt(A,W,X,z){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){z&&q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Ee=$.update(A),Ae=A.material;Ae.visible&&p.push(A,Ee,Ae,X,q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ne.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ne.render.frame),!A.frustumCulled||Q.intersectsObject(A))){z&&q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Ee=$.update(A),Ae=A.material;if(Array.isArray(Ae)){const Ye=Ee.groups;for(let Ge=0,Xe=Ye.length;Ge<Xe;Ge++){const ze=Ye[Ge],$e=Ae[ze.materialIndex];$e&&$e.visible&&p.push(A,Ee,$e,X,q.z,ze)}}else Ae.visible&&p.push(A,Ee,Ae,X,q.z,null)}}const be=A.children;for(let Ee=0,Ae=be.length;Ee<Ae;Ee++)mt(be[Ee],W,X,z)}function Pt(A,W,X,z){const Z=A.opaque,be=A.transmissive,Ee=A.transparent;f.setupLightsView(X),j===!0&&R.setGlobalState(d.clippingPlanes,X),be.length>0&&Ot(Z,W,X),z&&ne.viewport(I.copy(z)),Z.length>0&&ln(Z,W,X),be.length>0&&ln(be,W,X),Ee.length>0&&ln(Ee,W,X),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Ot(A,W,X){const z=Me.isWebGL2;P===null&&(P=new Cs(1024,1024,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ta:Es,minFilter:wa,samples:z&&r===!0?4:0}));const Z=d.getRenderTarget();d.setRenderTarget(P),d.clear();const be=d.toneMapping;d.toneMapping=mr,ln(A,W,X),d.toneMapping=be,qe.updateMultisampleRenderTarget(P),qe.updateRenderTargetMipmap(P),d.setRenderTarget(Z)}function ln(A,W,X){const z=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,be=A.length;Z<be;Z++){const Ee=A[Z],Ae=Ee.object,Ye=Ee.geometry,Ge=z===null?Ee.material:z,Xe=Ee.group;Ae.layers.test(X.layers)&&Le(Ae,W,X,Ye,Ge,Xe)}}function Le(A,W,X,z,Z,be){A.onBeforeRender(d,W,X,z,Z,be),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(d,W,X,z,A,be),Z.transparent===!0&&Z.side===Ar&&Z.forceSinglePass===!1?(Z.side=fi,Z.needsUpdate=!0,d.renderBufferDirect(X,W,z,Z,A,be),Z.side=Ur,Z.needsUpdate=!0,d.renderBufferDirect(X,W,z,Z,A,be),Z.side=Ar):d.renderBufferDirect(X,W,z,Z,A,be),A.onAfterRender(d,W,X,z,Z,be)}function Oe(A,W,X){W.isScene!==!0&&(W=ce);const z=Ve.get(A),Z=f.state.lights,be=f.state.shadowsArray,Ee=Z.state.version,Ae=ct.getParameters(A,Z.state,be,W,X),Ye=ct.getProgramCacheKey(Ae);let Ge=z.programs;z.environment=A.isMeshStandardMaterial?W.environment:null,z.fog=W.fog,z.envMap=(A.isMeshStandardMaterial?nt:Ce).get(A.envMap||z.environment),Ge===void 0&&(A.addEventListener("dispose",rt),Ge=new Map,z.programs=Ge);let Xe=Ge.get(Ye);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===Ee)return je(A,Ae),Xe}else Ae.uniforms=ct.getUniforms(A),A.onBuild(X,Ae,d),A.onBeforeCompile(Ae,d),Xe=ct.acquireProgram(Ae,Ye),Ge.set(Ye,Xe),z.uniforms=Ae.uniforms;const ze=z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=R.uniform),je(A,Ae),z.needsLights=He(A),z.lightsStateVersion=Ee,z.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.directionalShadowMap.value=Z.state.directionalShadowMap,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotShadowMap.value=Z.state.spotShadowMap,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMap.value=Z.state.pointShadowMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix);const $e=Xe.getUniforms(),Qe=Bl.seqWithValue($e.seq,ze);return z.currentProgram=Xe,z.uniformsList=Qe,Xe}function je(A,W){const X=Ve.get(A);X.outputEncoding=W.outputEncoding,X.instancing=W.instancing,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function xe(A,W,X,z,Z){W.isScene!==!0&&(W=ce),qe.resetTextureUnits();const be=W.fog,Ee=z.isMeshStandardMaterial?W.environment:null,Ae=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:As,Ye=(z.isMeshStandardMaterial?nt:Ce).get(z.envMap||Ee),Ge=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!z.normalMap&&!!X.attributes.tangent,ze=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color,it=z.toneMapped?d.toneMapping:mr,Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Qt!==void 0?Qt.length:0,Be=Ve.get(z),wt=f.state.lights;if(j===!0&&(oe===!0||A!==E)){const xn=A===E&&z.id===b;R.setState(z,A,xn)}let Mt=!1;z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputEncoding!==Ae||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ye||z.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==R.numPlanes||Be.numIntersection!==R.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Xe||Be.morphTargets!==ze||Be.morphNormals!==$e||Be.morphColors!==Qe||Be.toneMapping!==it||Me.isWebGL2===!0&&Be.morphTargetsCount!==bt)&&(Mt=!0):(Mt=!0,Be.__version=z.version);let An=Be.currentProgram;Mt===!0&&(An=Oe(z,W,Z));let _i=!1,Vn=!1,cn=!1;const Ut=An.getUniforms(),Cn=Be.uniforms;if(ne.useProgram(An.program)&&(_i=!0,Vn=!0,cn=!0),z.id!==b&&(b=z.id,Vn=!0),_i||E!==A){if(Ut.setValue(G,"projectionMatrix",A.projectionMatrix),Me.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),E!==A&&(E=A,Vn=!0,cn=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const xn=Ut.map.cameraPosition;xn!==void 0&&xn.setValue(G,q.setFromMatrixPosition(A.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&Ut.setValue(G,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Ut.setOptional(G,Z,"bindMatrix"),Ut.setOptional(G,Z,"bindMatrixInverse");const xn=Z.skeleton;xn&&(Me.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Ut.setValue(G,"boneTexture",xn.boneTexture,qe),Ut.setValue(G,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ln=X.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0&&Me.isWebGL2===!0)&&ue.update(Z,X,An),(Vn||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,Ut.setValue(G,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=Ye,Cn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Vn&&(Ut.setValue(G,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&Ke(Cn,cn),be&&z.fog===!0&&gt.refreshFogUniforms(Cn,be),gt.refreshMaterialUniforms(Cn,z,K,O,P),Bl.upload(G,Be.uniformsList,Cn,qe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Bl.upload(G,Be.uniformsList,Cn,qe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ut.setValue(G,"center",Z.center),Ut.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ut.setValue(G,"normalMatrix",Z.normalMatrix),Ut.setValue(G,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let Os=0,Wa=xn.length;Os<Wa;Os++)if(Me.isWebGL2){const No=xn[Os];se.update(No,An),se.bind(No,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Ke(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function He(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,W,X){Ve.get(A.texture).__webglTexture=W,Ve.get(A.depthTexture).__webglTexture=X;const z=Ve.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const X=Ve.get(A);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,X=0){M=A,y=W,w=X;let z=!0,Z=null,be=!1,Ee=!1;if(A){const Ye=Ve.get(A);Ye.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(36160,null),z=!1):Ye.__webglFramebuffer===void 0?qe.setupRenderTarget(A):Ye.__hasExternalTextures&&qe.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Xe=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Xe[W],be=!0):Me.isWebGL2&&A.samples>0&&qe.useMultisampledRTT(A)===!1?Z=Ve.get(A).__webglMultisampledFramebuffer:Z=Xe,I.copy(A.viewport),D.copy(A.scissor),S=A.scissorTest}else I.copy(N).multiplyScalar(K).floor(),D.copy(Y).multiplyScalar(K).floor(),S=te;if(ne.bindFramebuffer(36160,Z)&&Me.drawBuffers&&z&&ne.drawBuffers(A,Z),ne.viewport(I),ne.scissor(D),ne.setScissorTest(S),be){const Ye=Ve.get(A.texture);G.framebufferTexture2D(36160,36064,34069+W,Ye.__webglTexture,X)}else if(Ee){const Ye=Ve.get(A.texture),Ge=W||0;G.framebufferTextureLayer(36160,36064,Ye.__webglTexture,X||0,Ge)}b=-1},this.readRenderTargetPixels=function(A,W,X,z,Z,be,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){ne.bindFramebuffer(36160,Ae);try{const Ye=A.texture,Ge=Ye.format,Xe=Ye.type;if(Ge!==Ui&&Pe.convert(Ge)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Xe===Ta&&(de.has("EXT_color_buffer_half_float")||Me.isWebGL2&&de.has("EXT_color_buffer_float"));if(Xe!==Es&&Pe.convert(Xe)!==G.getParameter(35738)&&!(Xe===ds&&(Me.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-z&&X>=0&&X<=A.height-Z&&G.readPixels(W,X,z,Z,Pe.convert(Ge),Pe.convert(Xe),be)}finally{const Ye=M!==null?Ve.get(M).__webglFramebuffer:null;ne.bindFramebuffer(36160,Ye)}}},this.copyFramebufferToTexture=function(A,W,X=0){const z=Math.pow(2,-X),Z=Math.floor(W.image.width*z),be=Math.floor(W.image.height*z);qe.setTexture2D(W,0),G.copyTexSubImage2D(3553,X,0,0,A.x,A.y,Z,be),ne.unbindTexture()},this.copyTextureToTexture=function(A,W,X,z=0){const Z=W.image.width,be=W.image.height,Ee=Pe.convert(X.format),Ae=Pe.convert(X.type);qe.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),W.isDataTexture?G.texSubImage2D(3553,z,A.x,A.y,Z,be,Ee,Ae,W.image.data):W.isCompressedTexture?G.compressedTexSubImage2D(3553,z,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ee,W.mipmaps[0].data):G.texSubImage2D(3553,z,A.x,A.y,Ee,Ae,W.image),z===0&&X.generateMipmaps&&G.generateMipmap(3553),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,W,X,z,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Ye=Pe.convert(z.format),Ge=Pe.convert(z.type);let Xe;if(z.isData3DTexture)qe.setTexture3D(z,0),Xe=32879;else if(z.isDataArrayTexture)qe.setTexture2DArray(z,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment);const ze=G.getParameter(3314),$e=G.getParameter(32878),Qe=G.getParameter(3316),it=G.getParameter(3315),Qt=G.getParameter(32877),bt=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,bt.width),G.pixelStorei(32878,bt.height),G.pixelStorei(3316,A.min.x),G.pixelStorei(3315,A.min.y),G.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Xe,Z,W.x,W.y,W.z,be,Ee,Ae,Ye,Ge,bt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Xe,Z,W.x,W.y,W.z,be,Ee,Ae,Ye,bt.data)):G.texSubImage3D(Xe,Z,W.x,W.y,W.z,be,Ee,Ae,Ye,Ge,bt),G.pixelStorei(3314,ze),G.pixelStorei(32878,$e),G.pixelStorei(3316,Qe),G.pixelStorei(3315,it),G.pixelStorei(32877,Qt),Z===0&&z.generateMipmaps&&G.generateMipmap(Xe),ne.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?qe.setTextureCube(A,0):A.isData3DTexture?qe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?qe.setTexture2DArray(A,0):qe.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){y=0,w=0,M=null,ne.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ch.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(o){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!o}}});class uw extends Ch{}uw.prototype.isWebGL1Renderer=!0;class hw extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ju extends Ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new pn,Qu=new Pm,Tl=new pc,El=new J;class Op extends qn{constructor(e=new er,t=new Ju){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(i),Tl.radius+=r,e.ray.intersectsSphere(Tl)===!1)return;Ip.copy(i).invert(),Qu.copy(e.ray).applyMatrix4(Ip);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,d=m;v<d;v++){const g=u.getX(v);El.fromBufferAttribute(p,g),Fp(El,g,c,i,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=f,d=m;v<d;v++)El.fromBufferAttribute(p,v),Fp(El,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Fp(o,e,t,n,i,r,a){const s=Qu.distanceSqToPoint(o);if(s<t){const c=new J;Qu.closestPointToPoint(o,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:a})}}class fw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Np();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Np(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);let Gl,Zi,ps,na=null,ua,Ql,qm=0,$m=0,Au=0,Cu=0,ec=!1;const Lu=1200;let Zo,eh;function dw(){const o=document.querySelector("#bg-canvas");if(!o||ec)return;Gl=new hw,Zi=new Ei(60,window.innerWidth/window.innerHeight,1,1e3),Zi.position.z=240,Zi.position.y=80,Zi.rotation.x=-.3,ps=new Ch({canvas:o,alpha:!1,antialias:!0,powerPreference:"high-performance"}),ps.setClearColor(0,1),ps.setPixelRatio(Math.min(window.devicePixelRatio,2)),ps.setSize(window.innerWidth,window.innerHeight),Ql=new fw;const e=new er;Zo=new Float32Array(Lu*3),eh=new Float32Array(Lu);const t=new Float32Array(Lu*3),n=40,i=30,r=14,a=12;let s=0;for(let d=0;d<n;d++)for(let g=0;g<i;g++){const y=(d-n/2)*r,w=(g-i/2)*a,M=Math.sin(d*.3)*12+Math.cos(g*.3)*12;Zo[s*3]=y,Zo[s*3+1]=M,Zo[s*3+2]=w,eh[s]=M;const b=(d+g)/(n+i);let E,I,D;if(b<.33){const S=b/.33;E=.31+(.49-.31)*S,I=.27+(.23-.27)*S,D=.9+(.93-.9)*S}else if(b<.66){const S=(b-.33)/.33;E=.49+(.13-.49)*S,I=.23+(.83-.23)*S,D=.93+(.93-.93)*S}else{const S=(b-.66)/.34;E=.13+(.96-.13)*S,I=.83+(.62-.83)*S,D=.93+(.04-.93)*S}t[s*3]=E,t[s*3+1]=I,t[s*3+2]=D,s++}e.setAttribute("position",new di(Zo,3)),e.setAttribute("color",new di(t,3));const c=pw(),u=new Ju({size:3.5,vertexColors:!0,transparent:!0,opacity:.78,map:c,blending:Kl,depthWrite:!1});ua=new Op(e,u),Gl.add(ua);const h=new er,p=300,f=new Float32Array(p*3);for(let d=0;d<p*3;d+=3)f[d]=(Math.random()-.5)*600,f[d+1]=Math.random()*300-50,f[d+2]=(Math.random()-.5)*500;h.setAttribute("position",new di(f,3));const m=new Ju({size:1.8,color:8490232,transparent:!0,opacity:.5,map:c,blending:Kl}),v=new Op(h,m);Gl.add(v),window.addEventListener("mousemove",mw,{passive:!0}),window.addEventListener("resize",gw,{passive:!0}),ec=!0,Lh()}function pw(){const o=document.createElement("canvas");o.width=32,o.height=32;const e=o.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),t.addColorStop(.7,"rgba(255, 255, 255, 0.2)"),t.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const n=new Xn(o);return n.needsUpdate=!0,n}function mw(o){qm=(o.clientX/window.innerWidth-.5)*80,$m=(o.clientY/window.innerHeight-.5)*50}function gw(){ec&&(Zi.aspect=window.innerWidth/window.innerHeight,Zi.updateProjectionMatrix(),ps.setSize(window.innerWidth,window.innerHeight),ps.setPixelRatio(Math.min(window.devicePixelRatio,2)))}function Lh(){const o=Ql?Ql.getElapsedTime():0;if(Au+=(qm-Au)*.03,Cu+=($m-Cu)*.03,Zi.position.x=Au,Zi.position.y=80-Cu*.5,Zi.lookAt(0,0,0),ua){const e=ua.geometry.attributes.position,t=e.array,n=40,i=30;let r=0;for(let a=0;a<n;a++)for(let s=0;s<i;s++){const c=Math.sin(a*.25+o*1.2)*14,u=Math.cos(s*.3+o*.9)*10,h=Math.sin((a+s)*.15+o*.8)*8;t[r*3+1]=eh[r]+c+u+h,r++}e.needsUpdate=!0,ua.rotation.y=o*.02}ps.render(Gl,Zi),na=window.requestAnimationFrame(Lh)}function _w(o){ec&&(o?na||(Ql.getDelta(),Lh()):na&&(window.cancelAnimationFrame(na),na=null))}function ur(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ym(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},Dh,vn,Wt,Li=1e8,kt=1/Li,th=Math.PI*2,vw=th/4,xw=0,jm=Math.sqrt,yw=Math.cos,bw=Math.sin,mn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},Ph=function(e){return typeof e>"u"},tr=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Rh=function(){return typeof window<"u"},Al=function(e){return Yt(e)||mn(e)},Zm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,Mw=/random\([^)]+\)/g,Sw=/,\s*/g,kp=/(?:-?\.?\d|\.)+/gi,Km=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Du=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jm=/[+-]=-?[.\d]+/,ww=/[^,'"\[\]\s]+/gi,Tw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,qi,nh,Ih,mi={},tc={},Qm,eg=function(e){return(tc=Co(e,mi))&&Kn},Oh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ca=function(e,t){return!t&&console.warn(e)},tg=function(e,t){return e&&(mi[e]=t)&&tc&&(tc[e]=t)||mi},La=function(){return 0},Ew={suppressEvents:!0,isStart:!0,kill:!1},Vl={suppressEvents:!0,kill:!1},Aw={suppressEvents:!0},Fh={},Nr=[],ih={},ng,si={},Pu={},zp=30,Wl=[],Nh="",kh=function(e){var t=e[0],n,i;if(tr(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wl.length;i--&&!Wl[i].targetTest(t););n=Wl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wg(e[i],n)))||e.splice(i,1);return e},xs=function(e){return e._gsap||kh(Di(e))[0]._gsap},ig=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():Ph(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},_o=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Cw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},nc=function(){var e=Nr.length,t=Nr.slice(0),n,i;for(ih={},Nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zh=function(e){return!!(e._initted||e._startAt||e.add)},rg=function(e,t,n,i){Nr.length&&!vn&&nc(),e.render(t,n,i||!!(vn&&t<0&&zh(e))),Nr.length&&!vn&&nc()},sg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ww).length<2?t:mn(e)?e.trim():e},og=function(e){return e},gi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Co=function(e,t){for(var n in t)e[n]=t[n];return e},Up=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=tr(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ic=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ha=function(e){var t=e.parent||Xt,n=e.keyframes?Lw(En(e.keyframes)):gi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ag=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_c=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rh=function(e,t,n,i){return e._startAt&&(vn?e._startAt.revert(Vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Rw=function o(e){return!e||e._ts&&o(e.parent)},Bp=function(e){return e._repeat?Lo(e._tTime,e=e.duration()+e._rDelay)*e:0},Lo=function(e,t){var n=Math.floor(e=Ht(e/t));return e&&n===e?n-1:n},rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vc(e),n._dirty||ys(n,e)),e},lg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rc(e.rawTime(),t),(!t._dur||Va(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-kt}},ji=function(e,t,n,i){return t.parent&&Br(t),t._start=Ht((_r(n)?n:n||e!==Xt?wi(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ag(e,t,"_first","_last",e._sort?"_start":0),sh(t)||(e._recent=t),i||lg(e,t),e._ts<0&&xc(e,e._tTime),e},cg=function(e,t){return(mi.ScrollTrigger||Oh("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},ug=function(e,t,n,i,r){if(Bh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ng!==li.frame)return Nr.push(e),e._lazy=[r,i],1},Iw=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},sh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ow=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Iw(e)&&!(!e._initted&&sh(e))||(e._ts<0||e._dp._ts<0)&&!sh(e))?0:1,s=e._rDelay,c=0,u,h,p;if(s&&e._repeat&&(c=Va(0,e._tDur,t),h=Lo(c,s),e._yoyo&&h&1&&(a=1-a),h!==Lo(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||vn||i||e._zTime===kt||!t&&e._zTime){if(!e._initted&&ug(e,t,i,n,c))return;for(p=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&rh(e,t,n,!0),e._onUpdate&&!n&&ui(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!n&&!vn&&(ui(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Do=function(e,t,n,i){var r=e._repeat,a=Ht(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ht(a*(r+1)+e._rDelay*r):a,s>0&&!i&&xc(e,e._tTime=e._tDur*s),e.parent&&vc(e),n||ys(e.parent,e),e},Gp=function(e){return e instanceof Hn?ys(e):Do(e,e._dur)},Nw={_start:0,endTime:La,totalDuration:La},wi=function o(e,t,n){var i=e.labels,r=e._recent||Nw,a=e.duration()>=Li?r.endTime(!1):e._dur,s,c,u;return mn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&n&&(c=c/100*(En(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+c:a+c)):t==null?a:+t},fa=function(e,t,n){var i=_r(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=$n(c.vars.inherit)&&c.parent;a.immediateRender=$n(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new nn(t[0],a,t[r+1])},Hr=function(e,t){return e||e===0?t(e):t},Va=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!mn(e)||!(t=Tw.exec(e))?"":t[1]},kw=function(e,t,n){return Hr(n,function(i){return Va(e,t,i)})},oh=[].slice,hg=function(e,t){return e&&tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&tr(e[0]))&&!e.nodeType&&e!==qi},zw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return mn(i)&&!t||hg(i,1)?(r=n).push.apply(r,Di(i)):n.push(i)})||n},Di=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):mn(e)&&!n&&(nh||!Po())?oh.call((t||Ih).querySelectorAll(e),0):En(e)?zw(e,n):hg(e)?oh.call(e,0):e?[e]:[]},ah=function(e){return e=Di(e)[0]||Ca("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Di(t,n.querySelectorAll?n:n===e?Ca("Invalid scope")||Ih.createElement("div"):e)}},fg=function(e){return e.sort(function(){return .5-Math.random()})},dg=function(e){if(Yt(e))return e;var t=tr(e)?e:{each:e},n=bs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,u=t.axis,h=i,p=i;return mn(i)?h=p={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(h=i[0],p=i[1]),function(f,m,v){var d=(v||t).length,g=a[d],y,w,M,b,E,I,D,S,C;if(!g){if(C=t.grid==="auto"?0:(t.grid||[1,Li])[1],!C){for(D=-Li;D<(D=v[C++].getBoundingClientRect().left)&&C<d;);C<d&&C--}for(g=a[d]=[],y=c?Math.min(C,d)*h-.5:i%C,w=C===Li?0:c?d*p/C-.5:i/C|0,D=0,S=Li,I=0;I<d;I++)M=I%C-y,b=w-(I/C|0),g[I]=E=u?Math.abs(u==="y"?b:M):jm(M*M+b*b),E>D&&(D=E),E<S&&(S=E);i==="random"&&fg(g),g.max=D-S,g.min=S,g.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(C>d?d-1:u?u==="y"?d/C:C:Math.max(C,d/C))||0)*(i==="edges"?-1:1),g.b=d<0?r-d:r,g.u=wn(t.amount||t.each)||0,n=n&&d<0?Kw(n):n}return d=(g[f]-g.min)/g.max||0,Ht(g.b+(n?n(d):d)*g.v)+g.u}},lh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:wn(n))}},pg=function(e,t){var n=En(e),i,r;return!n&&tr(e)&&(i=n=e.radius||Li,e.values?(e=Di(e.values),(r=!_r(e[0]))&&(i*=i)):e=lh(e.increment)),Hr(t,n?Yt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),u=Li,h=0,p=e.length,f,m;p--;)r?(f=e[p].x-s,m=e[p].y-c,f=f*f+m*m):f=Math.abs(e[p]-s),f<u&&(u=f,h=p);return h=!i||u<=i?e[h]:a,r||h===a||_r(a)?h:h+wn(a)}:lh(e))},mg=function(e,t,n,i){return Hr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Uw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Bw=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},Gw=function(e,t,n){return _g(e,t,0,1,n)},gg=function(e,t,n){return Hr(n,function(i){return e[~~t(i)]})},Vw=function o(e,t,n){var i=t-e;return En(e)?gg(e,o(0,e.length),t):Hr(n,function(r){return(i+(r-e)%i)%i+e})},Ww=function o(e,t,n){var i=t-e,r=i*2;return En(e)?gg(e,o(0,e.length-1),t):Hr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Da=function(e){return e.replace(Mw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Sw);return mg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},_g=function(e,t,n,i,r){var a=t-e,s=i-n;return Hr(r,function(c){return n+((c-e)/a*s||0)})},Hw=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=mn(e),s={},c,u,h,p,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(h=[],p=e.length,f=p-2,u=1;u<p;u++)h.push(o(e[u-1],e[u]));p--,r=function(v){v*=p;var d=Math.min(f,~~v);return h[d](v-d)},n=t}else i||(e=Co(En(e)?[]:{},e));if(!h){for(c in t)Uh.call(s,e,c,"get",t[c]);r=function(v){return Wh(v,s)||(a?e.p:e)}}}return Hr(n,r)},Vp=function(e,t,n){var i=e.labels,r=Li,a,s,c;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},ui=function(e,t,n){var i=e.vars,r=i[t],a=Wt,s=e._ctx,c,u,h;if(r)return c=i[t+"Params"],u=i.callbackScope||e,n&&Nr.length&&nc(),s&&(Wt=s),h=c?r.apply(u,c):r.call(u),Wt=a,h},ia=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&ui(e,"onInterrupt"),e},uo,vg=[],xg=function(e){if(e)if(e=!e.name&&e.default||e,Rh()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:La,render:Wh,add:Uh,kill:a1,modifier:o1,rawVars:0},a={targetTest:0,get:0,getSetter:Vh,aliases:{},register:0};if(Po(),e!==i){if(si[t])return;gi(i,gi(ic(e,r),a)),Co(i.prototype,Co(r,ic(e,a))),si[i.prop=t]=i,e.targetTest&&(Wl.push(i),Fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tg(t,i),e.register&&e.register(Kn,i,jn)}else vg.push(e)},Nt=255,ra={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Ru=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Nt+.5|0},yg=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&Nt,e&Nt]:0:ra.black,r,a,s,c,u,h,p,f,m,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ra[e])i=ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Nt,i&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(kp),!t)c=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(u+1):h+u-h*u,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ru(c+1/3,r,a),i[1]=Ru(c,r,a),i[2]=Ru(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Km),n&&i.length<4&&(i[3]=1),i}else i=e.match(kp)||ra.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/Nt,a=i[1]/Nt,s=i[2]/Nt,p=Math.max(r,a,s),f=Math.min(r,a,s),h=(p+f)/2,p===f?c=u=0:(m=p-f,u=h>.5?m/(2-p-f):m/(p+f),c=p===r?(a-s)/m+(a<s?6:0):p===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(e){var t=[],n=[],i=-1;return e.split(kr).forEach(function(r){var a=r.match(co)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Wp=function(e,t,n){var i="",r=(e+i).match(kr),a=t?"hsla(":"rgba(",s=0,c,u,h,p;if(!r)return e;if(r=r.map(function(f){return(f=yg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=bg(e),c=n.c,c.join(i)!==h.c.join(i)))for(u=e.replace(kr,"1").split(co),p=u.length-1;s<p;s++)i+=u[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!u)for(u=e.split(kr),p=u.length-1;s<p;s++)i+=u[s]+r[s];return i+u[p]},kr=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ra)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Xw=/hsl[a]?\(/,Mg=function(e){var t=e.join(" "),n;if(kr.lastIndex=0,kr.test(t))return n=Xw.test(t),e[1]=Wp(e[1],n),e[0]=Wp(e[0],n,bg(e[1])),!0},Pa,li=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,u,h,p,f,m,v=function d(g){var y=o()-i,w=g===!0,M,b,E,I;if((y>e||y<0)&&(n+=y-t),i+=y,E=i-n,M=E-a,(M>0||w)&&(I=++p.frame,f=E-p.time*1e3,p.time=E=E/1e3,a+=M+(M>=r?4:r-M),b=1),w||(c=u(d)),b)for(m=0;m<s.length;m++)s[m](E,f,I,g)};return p={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Qm&&(!nh&&Rh()&&(qi=nh=window,Ih=qi.document||{},mi.gsap=Kn,(qi.gsapVersions||(qi.gsapVersions=[])).push(Kn.version),eg(tc||qi.GreenSockGlobals||!qi.gsap&&qi||{}),vg.forEach(xg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),u=h||function(g){return setTimeout(g,a-p.time*1e3+1|0)},Pa=1,v(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Pa=0,u=La},lagSmoothing:function(g,y){e=g||1/0,t=Math.min(y||33,e)},fps:function(g){r=1e3/(g||240),a=p.time*1e3+r},add:function(g,y,w){var M=y?function(b,E,I,D){g(b,E,I,D),p.remove(M)}:g;return p.remove(g),s[w?"unshift":"push"](M),Po(),M},remove:function(g,y){~(y=s.indexOf(g))&&s.splice(y,1)&&m>=y&&m--},_listeners:s},p}(),Po=function(){return!Pa&&li.wake()},vt={},qw=/^[\d.\-M][\d.\-,\s]/,$w=/["']/g,Yw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,u;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,u=c.substr(0,s),t[i]=isNaN(u)?u.replace($w,"").trim():+u,i=c.substr(s+1).trim();return t},jw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Zw=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Yw(t[1])]:jw(e).split(",").map(sg)):vt._CE&&qw.test(e)?vt._CE("",e):n},Kw=function(e){return function(t){return 1-e(1-t)}},bs=function(e,t){return e&&(Yt(e)?e:vt[e]||Zw(e))||t},Is=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Yn(e,function(s){vt[s]=mi[s]=r,vt[a=s.toLowerCase()]=n;for(var c in r)vt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=vt[s+"."+c]=r[c]}),r},Sg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Iu=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/th*(Math.asin(1/i)||0),s=function(h){return h===1?1:i*Math.pow(2,-10*h)*bw((h-a)*r)+1},c=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Sg(s);return r=th/r,c.config=function(u,h){return o(e,u,h)},c},Ou=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Sg(n);return i.config=function(r){return o(e,r)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Is(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Is("Elastic",Iu("in"),Iu("out"),Iu());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Is("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Is("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Is("Circ",function(o){return-(jm(1-o*o)-1)});Is("Sine",function(o){return o===1?1:-yw(o*vw)+1});Is("Back",Ou("in"),Ou("out"),Ou());vt.SteppedEase=vt.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-kt;return function(s){return((i*Va(0,a,s)|0)+r)*n}}};Aa.ease=vt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Nh+=o+","+o+"Params,"});var wg=function(e,t){this.id=xw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ig,this.set=t?t.getSetter:Vh},Ra=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),Pa||li.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Po(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xc(this,n),!r._dp||r.parent||lg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Lo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-kt?0:this._rts,this.totalTime(Va(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),vc(this),Pw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ht(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Aw);var i=vn;return vn=n,zh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(wi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-kt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-kt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var s=Yt(n)?n:og,c=function(){var h=i.then;i.then=null,r&&r(),Yt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=h),a(s),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ia(this)},o}();gi(Ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var Hn=function(o){Ym(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Xt&&ji(n.parent||Xt,ur(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cg(ur(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return fa(0,arguments,this),this},t.from=function(i,r,a){return fa(1,arguments,this),this},t.fromTo=function(i,r,a,s){return fa(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ha(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new nn(i,r,wi(this,a),1),this},t.call=function(i,r,a){return ji(this,nn.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,c,u,h){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=u,a.onCompleteParams=h,a.parent=this,new nn(i,a,wi(this,c)),this},t.staggerFrom=function(i,r,a,s,c,u,h){return a.runBackwards=1,ha(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,s,c,u,h)},t.staggerFromTo=function(i,r,a,s,c,u,h,p){return s.startAt=a,ha(s).immediateRender=$n(s.immediateRender),this.staggerTo(i,r,s,c,u,h,p)},t.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Ht(i),p=this._zTime<0!=i<0&&(this._initted||!u),f,m,v,d,g,y,w,M,b,E,I,D;if(this!==Xt&&h>c&&i>=0&&(h=c),h!==this._tTime||a||p){if(s!==this._time&&u&&(h+=this._time-s,i+=this._time-s),f=h,b=this._start,M=this._ts,y=!M,p&&(u||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,g=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,a);if(f=Ht(h%g),h===c?(d=this._repeat,f=u):(E=Ht(h/g),d=~~E,d&&d===E&&(f=u,d--),f>u&&(f=u)),E=Lo(this._tTime,g),!s&&this._tTime&&E!==d&&this._tTime-E*g-this._dur<=0&&(E=d),I&&d&1&&(f=u-f,D=1),d!==E&&!this._lock){var S=I&&E&1,C=S===(I&&d&1);if(d<E&&(S=!S),s=S?0:h%u?u:h,this._lock=1,this.render(s||(D?0:Ht(d*g)),r,!u)._lock=0,this._tTime=h,!r&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,E=d),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,C&&(this._lock=2,s=S?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Fw(this,Ht(s),Ht(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&u&&!r&&!E&&(ui(this,"onStart"),this._tTime!==h))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!y){w=0,v&&(h+=this._zTime=-kt);break}}m=v}else{m=this._last;for(var O=i<0?i:f;m;){if(v=m._prev,(m._act||O<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(O-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(O-m._start)*m._ts,r,a||vn&&zh(m)),f!==this._time||!this._ts&&!y){w=0,v&&(h+=this._zTime=O?-kt:kt);break}}m=v}}if(w&&!r&&(this.pause(),w.render(f>=s?0:-kt)._zTime=f>=s?1:-1,this._ts))return this._start=b,vc(this),this.render(i,r,a);this._onUpdate&&!r&&ui(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&s)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!r&&!(i<0&&!s)&&(h||s||!c)&&(ui(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(_r(r)||(r=wi(this,r,i)),!(i instanceof Ra)){if(En(i))return i.forEach(function(s){return a.add(s,r)}),this;if(mn(i))return this.addLabel(i,r);if(Yt(i))i=nn.delayedCall(0,i);else return this}return this!==i?ji(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Li);for(var c=[],u=this._first;u;)u._start>=s&&(u instanceof nn?r&&c.push(u):(a&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,r,a)))),u=u._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return mn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&_c(this,i),i===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=wi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=nn.delayedCall(0,r||La,a);return s.data="isPause",this._hasPause=1,ji(this,s,wi(this,i))},t.removePause=function(i){var r=this._first;for(i=wi(this,i);r;)r._start===i&&r.data==="isPause"&&Br(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)Dr!==s[c]&&s[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Di(i),c=this._first,u=_r(r),h;c;)c instanceof nn?Cw(c._targets,s)&&(u?(!Dr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(s,r)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=wi(a,i),c=r,u=c.startAt,h=c.onStart,p=c.onStartParams,f=c.immediateRender,m,v=nn.to(a,gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale())||kt,onStart:function(){if(a.pause(),!m){var g=r.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale());v._dur!==g&&Do(v,g,0,1).render(v._time,!0,!0),m=1}h&&h.apply(v,p||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,gi({startAt:{time:wi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vp(this,wi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vp(this,wi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var s=this._first,c=this.labels,u;for(i=Ht(i);s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(u in c)c[u]>=a&&(c[u]+=i);return ys(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,c=Li,u,h,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(p=a.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),h=s._start,h>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,ji(a,s,h-s._delay,1)._lock=0):c=h,h<0&&s._ts&&(r-=h,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=Ht(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=u;Do(a,a===Xt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Xt._ts&&(rg(Xt,rc(i,Xt)),ng=li.frame),li.frame>=zp){zp+=pi.autoSleep||120;var r=Xt._first;if((!r||!r._ts)&&pi.autoSleep&&li._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||li.sleep()}}},e}(Ra);gi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jw=function(e,t,n,i,r,a,s){var c=new jn(this._pt,e,t,0,1,Dg,null,r),u=0,h=0,p,f,m,v,d,g,y,w;for(c.b=n,c.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=Da(i)),a&&(w=[n,i],a(w,e,t),n=w[0],i=w[1]),f=n.match(Du)||[];p=Du.exec(i);)v=p[0],d=i.substring(u,p.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),v!==f[h++]&&(g=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:d||h===1?d:",",s:g,c:v.charAt(1)==="="?_o(g,v)-g:parseFloat(v)-g,m:m&&m<4?Math.round:0},u=Du.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=s,(Jm.test(i)||y)&&(c.e=0),this._pt=c,c},Uh=function(e,t,n,i,r,a,s,c,u,h){Yt(i)&&(i=i(r||0,e,a));var p=e[t],f=n!=="get"?n:Yt(p)?u?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():p,m=Yt(p)?u?i1:Cg:Gh,v;if(mn(i)&&(~i.indexOf("random(")&&(i=Da(i)),i.charAt(1)==="="&&(v=_o(f,i)+(wn(f)||0),(v||v===0)&&(i=v))),!h||f!==i||ch)return!isNaN(f*i)&&i!==""?(v=new jn(this._pt,e,t,+f||0,i-(f||0),typeof p=="boolean"?s1:Lg,0,m),u&&(v.fp=u),s&&v.modifier(s,this,e),this._pt=v):(!p&&!(t in e)&&Oh(t,i),Jw.call(this,e,t,f,i,m,c||pi.stringFilter,u))},Qw=function(e,t,n,i,r){if(Yt(e)&&(e=da(e,r,t,n,i)),!tr(e)||e.style&&e.nodeType||En(e)||Zm(e))return mn(e)?da(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=da(e[s],r,t,n,i);return a},Tg=function(e,t,n,i,r,a){var s,c,u,h;if(si[e]&&(s=new si[e]).init(r,s.rawVars?t[e]:Qw(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new jn(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==uo))for(u=n._ptLookup[n._targets.indexOf(r)],h=s._props.length;h--;)u[s._props[h]]=c;return s},Dr,ch,Bh=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,c=i.lazy,u=i.onUpdate,h=i.runBackwards,p=i.yoyoEase,f=i.keyframes,m=i.autoRevert,v=e._dur,d=e._startAt,g=e._targets,y=e.parent,w=y&&y.data==="nested"?y.vars.targets:g,M=e._overwrite==="auto"&&!Dh,b=e.timeline,E=i.easeReverse||p,I,D,S,C,O,K,H,V,N,Y,te,Q,j;if(b&&(!f||!r)&&(r="none"),e._ease=bs(r,Aa.ease),e._rEase=E&&(bs(E)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||f&&!i.stagger){if(V=g[0]?xs(g[0]).harness:0,Q=V&&i[V.prop],I=ic(i,Fh),d&&(d._zTime<0&&d.progress(1),t<0&&h&&s&&!m?d.render(-1,!0):d.revert(h&&v?Vl:Ew),d._lazy=0),a){if(Br(e._startAt=nn.set(g,gi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!d&&$n(c),startAt:null,delay:0,onUpdate:u&&function(){return ui(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!s&&!m)&&e._startAt.revert(Vl),s&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&v&&!d){if(t&&(s=!1),S=gi({overwrite:!1,data:"isFromStart",lazy:s&&!d&&$n(c),immediateRender:s,stagger:0,parent:y},I),Q&&(S[V.prop]=Q),Br(e._startAt=nn.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Vl):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,c=v&&$n(c)||c&&!v,D=0;D<g.length;D++){if(O=g[D],H=O._gsap||kh(g)[D]._gsap,e._ptLookup[D]=Y={},ih[H.id]&&Nr.length&&nc(),te=w===g?D:w.indexOf(O),V&&(N=new V).init(O,Q||I,e,te,w)!==!1&&(e._pt=C=new jn(e._pt,O,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(oe){Y[oe]=C}),N.priority&&(K=1)),!V||Q)for(S in I)si[S]&&(N=Tg(S,I,e,te,O,w))?N.priority&&(K=1):Y[S]=C=Uh.call(e,O,S,"get",I[S],te,w,0,i.stringFilter);e._op&&e._op[D]&&e.kill(O,e._op[D]),M&&e._pt&&(Dr=e,Xt.killTweensOf(O,Y,e.globalTime(t)),j=!e.parent,Dr=0),e._pt&&c&&(ih[H.id]=1)}K&&Pg(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&b.render(Li,!0,!0)},e1=function(e,t,n,i,r,a,s,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,f,m;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(h=f[m][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ch=1,e.vars[t]="+=0",Bh(e,s),ch=0,c?Ca(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(h)}for(m=u.length;m--;)p=u[m],h=p._pt||p,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,p.e&&(p.e=Kt(n)+wn(p.e)),p.b&&(p.b=h.s+wn(p.b))},t1=function(e,t){var n=e[0]?xs(e[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return t;r=Co({},t);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},n1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(En(t))s=n[e]||(n[e]=[]),t.forEach(function(c,u){return s.push({t:u/(t.length-1)*100,v:c,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},da=function(e,t,n,i,r){return Yt(e)?e.call(t,n,i,r):mn(e)&&~e.indexOf("random(")?Da(e):e},Eg=Nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ag={};Yn(Eg+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ag[o]=1});var nn=function(o){Ym(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:ha(i))||this;var c=s.vars,u=c.duration,h=c.delay,p=c.immediateRender,f=c.stagger,m=c.overwrite,v=c.keyframes,d=c.defaults,g=c.scrollTrigger,y=i.parent||Xt,w=(En(n)||Zm(n)?_r(n[0]):"length"in i)?[n]:Di(n),M,b,E,I,D,S,C,O;if(s._targets=w.length?kh(w):Ca("GSAP target "+n+" not found. https://gsap.com",!pi.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,v||f||Al(u)||Al(h)){i=s.vars;var K=i.easeReverse||i.yoyoEase;if(M=s.timeline=new Hn({data:"nested",defaults:d||{},targets:y&&y.data==="nested"?y.vars.targets:w}),M.kill(),M.parent=M._dp=ur(s),M._start=0,f||Al(u)||Al(h)){if(I=w.length,C=f&&dg(f),tr(f))for(D in f)~Eg.indexOf(D)&&(O||(O={}),O[D]=f[D]);for(b=0;b<I;b++)E=ic(i,Ag),E.stagger=0,K&&(E.easeReverse=K),O&&Co(E,O),S=w[b],E.duration=+da(u,ur(s),b,S,w),E.delay=(+da(h,ur(s),b,S,w)||0)-s._delay,!f&&I===1&&E.delay&&(s._delay=h=E.delay,s._start+=h,E.delay=0),M.to(S,E,C?C(b,S,w):0),M._ease=vt.none;M.duration()?u=h=0:s.timeline=0}else if(v){ha(gi(M.vars.defaults,{ease:"none"})),M._ease=bs(v.ease||i.ease||"none");var H=0,V,N,Y;if(En(v))v.forEach(function(te){return M.to(w,te,">")}),M.duration();else{E={};for(D in v)D==="ease"||D==="easeEach"||n1(D,v[D],E,v.easeEach);for(D in E)for(V=E[D].sort(function(te,Q){return te.t-Q.t}),H=0,b=0;b<V.length;b++)N=V[b],Y={ease:N.e,duration:(N.t-(b?V[b-1].t:0))/100*u},Y[D]=N.v,M.to(w,Y,H),H+=Y.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||s.duration(u=M.duration())}else s.timeline=0;return m===!0&&!Dh&&(Dr=ur(s),Xt.killTweensOf(w),Dr=0),ji(y,ur(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(p||!u&&!v&&s._start===Ht(y._time)&&$n(p)&&Rw(ur(s))&&y.data!=="nested")&&(s._tTime=-kt,s.render(Math.max(0,-h)||0)),g&&cg(ur(s),g),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,c=this._tDur,u=this._dur,h=i<0,p=i>c-kt&&!h?c:i<kt?0:i,f,m,v,d,g,y,w,M;if(!u)Ow(this,i,r,a);else if(p!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=p,M=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(d*100+i,r,a);if(f=Ht(p%d),p===c?(v=this._repeat,f=u):(g=Ht(p/d),v=~~g,v&&v===g?(f=u,v--):f>u&&(f=u)),y=this._yoyo&&v&1,y&&(f=u-f),g=Lo(this._tTime,d),f===s&&!a&&this._initted&&v===g)return this._tTime=p,this;v!==g&&this.vars.repeatRefresh&&!y&&!this._lock&&f!==d&&this._initted&&(this._lock=a=1,this.render(Ht(d*v),!0).invalidate()._lock=0)}if(!this._initted){if(ug(this,h?i:f,a,r,p))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&v!==g))return this;if(u!==this._dur)return this.render(i,r,a)}if(this._rEase){var b=f<s;if(b!==this._inv){var E=b?s:u-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=E?(b?-1:1)/E:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/u);if(this._from&&(this.ratio=w=1-w),this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&p&&!r&&!g&&(ui(this,"onStart"),this._tTime!==p))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&rh(this,i,r,a),ui(this,"onUpdate")),this._repeat&&v!==g&&this.vars.onRepeat&&!r&&this.parent&&ui(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&rh(this,i,!0,!0),(i||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Br(this,1),!r&&!(h&&!s)&&(p||s||y)&&(ui(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s,c){Pa||li.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bh(this,u),h=this._ease(u/this._dur),e1(this,i,r,a,s,h,u,c)?this.resetTo(i,r,a,s,1):(xc(this,0),this.parent||ag(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Dr&&Dr.vars.overwrite!==!0)._first||ia(this),this.parent&&a!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Di(i):s,u=this._ptLookup,h=this._pt,p,f,m,v,d,g,y;if((!r||r==="all")&&Dw(s,c))return r==="all"&&(this._pt=0),ia(this);for(p=this._op=this._op||[],r!=="all"&&(mn(r)&&(d={},Yn(r,function(w){return d[w]=1}),r=d),r=t1(s,r)),y=s.length;y--;)if(~c.indexOf(s[y])){f=u[y],r==="all"?(p[y]=r,v=f,m={}):(m=p[y]=p[y]||{},v=r);for(d in v)g=f&&f[d],g&&((!("kill"in g.d)||g.d.kill(d)===!0)&&_c(this,g,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&h&&ia(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return fa(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return fa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Xt.killTweensOf(i,r,a)},e}(Ra);gi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(o){nn[o]=function(){var e=new Hn,t=oh.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Gh=function(e,t,n){return e[t]=n},Cg=function(e,t,n){return e[t](n)},i1=function(e,t,n,i){return e[t](i.fp,n)},r1=function(e,t,n){return e.setAttribute(t,n)},Vh=function(e,t){return Yt(e[t])?Cg:Ph(e[t])&&e.setAttribute?r1:Gh},Lg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},s1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},o1=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},a1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_c(this,t,"_pt"):t.dep||(n=1),t=i;return!n},l1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pg=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},jn=function(){function o(t,n,i,r,a,s,c,u,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Lg,this.d=c||this,this.set=u||Gh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=l1,this.m=n,this.mt=r,this.tween=i},o}();Yn(Nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Fh[o]=1});mi.TweenMax=mi.TweenLite=nn;mi.TimelineLite=mi.TimelineMax=Hn;Xt=new Hn({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pi.stringFilter=Mg;var Ms=[],Hl={},c1=[],Hp=0,u1=0,Fu=function(e){return(Hl[e]||c1).map(function(t){return t()})},uh=function(){var e=Date.now(),t=[];e-Hp>2&&(Fu("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,u;for(s in i)a=qi.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,u=1);u&&(n.revert(),c&&t.push(n))}),Fu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hp=e,Fu("matchMedia"))},Rg=function(){function o(t,n){this.selector=n&&ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=u1++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Yt(n)&&(r=i,i=n,n=Yt);var a=this,s=function(){var u=Wt,h=a.selector,p;return u&&u!==a&&u.data.push(a),r&&(a.selector=ah(r)),Wt=a,p=i.apply(a,arguments),Yt(p)&&a._r.push(p),Wt=u,a.selector=h,a.isReverted=!1,p};return a.last=s,n===Yt?s(a,function(c){return a.add(null,c)}):n?a[n]=s:s},e.ignore=function(n){var i=Wt;Wt=null,n(this),Wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),c=r.data.length,u;c--;)u=r.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return s.splice(s.indexOf(h),1)}));for(s.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)u=r.data[c],u instanceof Hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof nn)&&u.revert&&u.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},o}(),h1=function(){function o(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=o.prototype;return e.add=function(n,i,r){tr(n)||(n={matches:n});var a=new Rg(0,r||this.scope),s=a.conditions={},c,u,h;Wt&&!a.selector&&(a.selector=Wt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?h=1:(c=qi.matchMedia(n[u]),c&&(Ms.indexOf(a)<0&&Ms.push(a),(s[u]=c.matches)&&(h=1),c.addListener?c.addListener(uh):c.addEventListener("change",uh)));return h&&i(a,function(p){return a.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return xg(i)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=Di(e)[0]);var r=xs(e||{}).get,a=n?og:sg;return n==="native"&&(n=""),e&&(t?a((si[t]&&si[t].get||r)(e,t,n,i)):function(s,c,u){return a((si[s]&&si[s].get||r)(e,s,c,u))})},quickSetter:function(e,t,n){if(e=Di(e),e.length>1){var i=e.map(function(h){return Kn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var p=r;p--;)i[p](h)}}e=e[0]||{};var a=si[t],s=xs(e),c=s.harness&&(s.harness.aliases||{})[t]||t,u=a?function(h){var p=new a;uo._pt=0,p.init(e,n?h+n:h,uo,0,[e]),p.render(1,p),uo._pt&&Wh(1,uo)}:s.set(e,c);return a?u:function(h){return u(e,c,n?h+n:h,s,1)}},quickTo:function(e,t,n){var i,r=Kn.to(e,gi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,u,h){return r.resetTo(t,c,u,h)};return a.tween=r,a},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bs(e.ease,Aa.ease)),Up(Aa,e||{})},config:function(e){return Up(pi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!si[s]&&!mi[s]&&Ca(t+" effect requires "+s+" plugin.")}),Pu[t]=function(s,c,u){return n(Di(s),gi(c||{},r),u)},a&&(Hn.prototype[t]=function(s,c,u){return this.add(Pu[t](s,tr(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){vt[e]=bs(t)},parseEase:function(e,t){return arguments.length?bs(e,t):vt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),i,r;for(n.smoothChildTiming=$n(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&ji(n,i,i._start-i._delay),i=r;return ji(Xt,n,0),n},context:function(e,t){return e?new Rg(e,t):Wt},matchMedia:function(e){return new h1(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||uh()},addEventListener:function(e,t){var n=Hl[e]||(Hl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Hl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vw,wrapYoyo:Ww,distribute:dg,random:mg,snap:pg,normalize:Gw,getUnit:wn,clamp:kw,splitColor:yg,toArray:Di,selector:ah,mapRange:_g,pipe:Uw,unitize:Bw,interpolate:Hw,shuffle:fg},install:eg,effects:Pu,ticker:li,updateRoot:Hn.updateRoot,plugins:si,globalTimeline:Xt,core:{PropTween:jn,globals:tg,Tween:nn,Timeline:Hn,Animation:Ra,getCache:xs,_removeLinkedListItem:_c,reverting:function(){return vn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Dh=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return sc[o]=nn[o]});li.add(Hn.updateRoot);uo=sc.to({},{duration:0});var f1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},d1=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=f1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Nu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,u;if(mn(r)&&(c={},Yn(r,function(h){return c[h]=1}),r=c),t){c={};for(u in r)c[u]=t(r[u]);r=c}d1(s,r)}}}},Kn=sc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nu("roundProps",lh),Nu("modifiers"),Nu("snap",pg))||sc;nn.version=Hn.version=Kn.version="3.15.0";Qm=1;Rh()&&Po();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xp,Pr,vo,Hh,ms,qp,Xh,p1=function(){return typeof window<"u"},vr={},ls=180/Math.PI,xo=Math.PI/180,to=Math.atan2,$p=1e8,qh=/([A-Z])/g,m1=/(left|right|width|margin|padding|x)/i,g1=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},v1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},x1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},y1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ig=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Og=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b1=function(e,t,n){return e.style[t]=n},M1=function(e,t,n){return e.style.setProperty(t,n)},S1=function(e,t,n){return e._gsap[t]=n},w1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},T1=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},E1=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},qt="transform",Zn=qt+"Origin",A1=function o(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in vr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=hr(i,s)}):this.tfm[e]=a.x?a[e]:hr(i,e),e===Zn&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(s){return o.call(n,s,t)});if(this.props.indexOf(qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=qt}(r||t)&&this.props.push(e,t,r[e])},Fg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},C1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(qh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Xh(),(!r||!r.isStart)&&!n[qt]&&(Fg(n),i.zOrigin&&n[Zn]&&(n[Zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ng=function(e,t){var n={target:e,props:[],revert:C1,save:A1};return e._gsap||Kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},kg,fh=function(e,t){var n=Pr.createElementNS?Pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pr.createElement(e);return n&&n.style?n:Pr.createElement(e)},hi=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ro(t)||t,1)||""},Yp="O,Moz,ms,Ms,Webkit".split(","),Ro=function(e,t,n){var i=t||ms,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Yp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Yp[a]:"")+e},dh=function(){p1()&&window.document&&(Xp=window,Pr=Xp.document,vo=Pr.documentElement,ms=fh("div")||{style:{}},fh("div"),qt=Ro(qt),Zn=qt+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kg=!!Ro("perspective"),Xh=Kn.core.reverting,Hh=1)},jp=function(e){var t=e.ownerSVGElement,n=fh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),vo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),vo.removeChild(n),r},Zp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zg=function(e){var t,n;try{t=e.getBBox()}catch{t=jp(e),n=1}return t&&(t.width||t.height)||n||(t=jp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zp(e,["x","cx","x1"])||0,y:+Zp(e,["y","cy","y1"])||0,width:0,height:0}:t},Ug=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zg(e))},Gr=function(e,t){if(t){var n=e.style,i;t in vr&&t!==Zn&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qh,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,i,r,a){var s=new jn(e._pt,t,n,0,1,a?Og:Ig);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Kp={deg:1,rad:1,turn:1},L1={grid:1,flex:1},Vr=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ms.style,c=m1.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),p=100,f=i==="px",m=i==="%",v,d,g,y;if(i===a||!r||Kp[i]||Kp[a])return r;if(a!=="px"&&!f&&(r=o(e,t,n,"px")),y=e.getCTM&&Ug(e),(m||a==="%")&&(vr[t]||~t.indexOf("adius")))return v=y?e.getBBox()[c?"width":"height"]:e[h],Kt(m?r/v*p:r/100*v);if(s[c?"width":"height"]=p+(f?a:i),d=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Pr||!d.appendChild)&&(d=Pr.body),g=d._gsap,g&&m&&g.width&&c&&g.time===li.time&&!g.uncache)return Kt(r/g.width*p);if(m&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=p+i,v=e[h],w?e.style[t]=w:Gr(e,t)}else(m||a==="%")&&!L1[hi(d,"display")]&&(s.position=hi(e,"position")),d===e&&(s.position="static"),d.appendChild(ms),v=ms[h],d.removeChild(ms),s.position="absolute";return c&&m&&(g=xs(d),g.time=li.time,g.width=d[h]),Kt(f?v*r/p:v&&r?p/v*r:0)},hr=function(e,t,n,i){var r;return Hh||dh(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(r=Oa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ac(hi(e,Zn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=oc[t]&&oc[t](e,t,n)||hi(e,t)||ig(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Vr(e,t,r,n)+n:r},D1=function(e,t,n,i){if(!n||n==="none"){var r=Ro(t,e,1),a=r&&hi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var s=new jn(this._pt,e.style,t,0,1,Dg),c=0,u=0,h,p,f,m,v,d,g,y,w,M,b,E;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(d=e.style[t],e.style[t]=i,i=hi(e,t)||i,d?e.style[t]=d:Gr(e,t)),h=[n,i],Mg(h),n=h[0],i=h[1],f=n.match(co)||[],E=i.match(co)||[],E.length){for(;p=co.exec(i);)g=p[0],w=i.substring(c,p.index),v?v=(v+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(v=1),g!==(d=f[u++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),g.charAt(1)==="="&&(g=_o(m,g)+b),y=parseFloat(g),M=g.substr((y+"").length),c=co.lastIndex-M.length,M||(M=M||pi.units[t]||b,c===i.length&&(i+=M,s.e+=M)),b!==M&&(m=Vr(e,t,d,M)||0),s._pt={_next:s._pt,p:w||u===1?w:",",s:m,c:y-m,m:v&&v<4||t==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=t==="display"&&i==="none"?Og:Ig;return Jm.test(i)&&(s.e=0),this._pt=s,s},Jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},P1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jp[n]||n,t[1]=Jp[i]||i,t.join(" ")},R1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,c,u;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),u=r.length;--u>-1;)s=r[u],vr[s]&&(c=1,s=s==="transformOrigin"?Zn:qt),Gr(n,s);c&&(Gr(n,qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Oa(n,1),a.uncache=1,Fg(i)))}},oc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new jn(e._pt,t,n,0,0,R1);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],Bg={},Gg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qp=function(e){var t=hi(e,qt);return Gg(t)?Ia:t.substr(7).match(Km).map(Kt)},$h=function(e,t){var n=e._gsap||xs(e),i=e.style,r=Qp(e),a,s,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ia:r):(r===Ia&&!e.offsetParent&&e!==vo&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,vo.appendChild(e)),r=Qp(e),c?i.display=c:Gr(e,"display"),u&&(s?a.insertBefore(e,s):a?a.appendChild(e):vo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ph=function(e,t,n,i,r,a){var s=e._gsap,c=r||$h(e,!0),u=s.xOrigin||0,h=s.yOrigin||0,p=s.xOffset||0,f=s.yOffset||0,m=c[0],v=c[1],d=c[2],g=c[3],y=c[4],w=c[5],M=t.split(" "),b=parseFloat(M[0])||0,E=parseFloat(M[1])||0,I,D,S,C;n?c!==Ia&&(D=m*g-v*d)&&(S=b*(g/D)+E*(-d/D)+(d*w-g*y)/D,C=b*(-v/D)+E*(m/D)-(m*w-v*y)/D,b=S,E=C):(I=zg(e),b=I.x+(~M[0].indexOf("%")?b/100*I.width:b),E=I.y+(~(M[1]||M[0]).indexOf("%")?E/100*I.height:E)),i||i!==!1&&s.smooth?(y=b-u,w=E-h,s.xOffset=p+(y*m+w*d)-y,s.yOffset=f+(y*v+w*g)-w):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=E,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Zn]="0px 0px",a&&(Rr(a,s,"xOrigin",u,b),Rr(a,s,"yOrigin",h,E),Rr(a,s,"xOffset",p,s.xOffset),Rr(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Oa=function(e,t){var n=e._gsap||new wg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(e),u=hi(e,Zn)||"0",h,p,f,m,v,d,g,y,w,M,b,E,I,D,S,C,O,K,H,V,N,Y,te,Q,j,oe,P,U,q,ce,he,G;return h=p=f=d=g=y=w=M=b=0,m=v=1,n.svg=!!(e.getCTM&&Ug(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[qt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[qt]!=="none"?c[qt]:"")),i.scale=i.rotate=i.translate="none"),D=$h(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),u=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),ph(e,Q||u,!!Q||n.originIsAbsolute,n.smooth!==!1,D)),E=n.xOrigin||0,I=n.yOrigin||0,D!==Ia&&(K=D[0],H=D[1],V=D[2],N=D[3],h=Y=D[4],p=te=D[5],D.length===6?(m=Math.sqrt(K*K+H*H),v=Math.sqrt(N*N+V*V),d=K||H?to(H,K)*ls:0,w=V||N?to(V,N)*ls+d:0,w&&(v*=Math.abs(Math.cos(w*xo))),n.svg&&(h-=E-(E*K+I*V),p-=I-(E*H+I*N))):(G=D[6],ce=D[7],P=D[8],U=D[9],q=D[10],he=D[11],h=D[12],p=D[13],f=D[14],S=to(G,q),g=S*ls,S&&(C=Math.cos(-S),O=Math.sin(-S),Q=Y*C+P*O,j=te*C+U*O,oe=G*C+q*O,P=Y*-O+P*C,U=te*-O+U*C,q=G*-O+q*C,he=ce*-O+he*C,Y=Q,te=j,G=oe),S=to(-V,q),y=S*ls,S&&(C=Math.cos(-S),O=Math.sin(-S),Q=K*C-P*O,j=H*C-U*O,oe=V*C-q*O,he=N*O+he*C,K=Q,H=j,V=oe),S=to(H,K),d=S*ls,S&&(C=Math.cos(S),O=Math.sin(S),Q=K*C+H*O,j=Y*C+te*O,H=H*C-K*O,te=te*C-Y*O,K=Q,Y=j),g&&Math.abs(g)+Math.abs(d)>359.9&&(g=d=0,y=180-y),m=Kt(Math.sqrt(K*K+H*H+V*V)),v=Kt(Math.sqrt(te*te+G*G)),S=to(Y,te),w=Math.abs(S)>2e-4?S*ls:0,b=he?1/(he<0?-he:he):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gg(hi(e,qt)),Q&&e.setAttribute("transform",Q))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(m*=-1,w+=d<=0?180:-180,d+=d<=0?180:-180):(v*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Kt(m),n.scaleY=Kt(v),n.rotation=Kt(d)+s,n.rotationX=Kt(g)+s,n.rotationY=Kt(y)+s,n.skewX=w+s,n.skewY=M+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Zn]=ac(u)),n.xOffset=n.yOffset=0,n.force3D=pi.force3D,n.renderTransform=n.svg?O1:kg?Vg:I1,n.uncache=0,n},ac=function(e){return(e=e.split(" "))[0]+" "+e[1]},ku=function(e,t,n){var i=wn(t);return Kt(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",i)))+i},I1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vg(e,t)},rs="0deg",Ko="0px",ss=") ",Vg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,u=n.rotation,h=n.rotationY,p=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,d=n.scaleY,g=n.transformPerspective,y=n.force3D,w=n.target,M=n.zOrigin,b="",E=y==="auto"&&e&&e!==1||y===!0;if(M&&(p!==rs||h!==rs)){var I=parseFloat(h)*xo,D=Math.sin(I),S=Math.cos(I),C;I=parseFloat(p)*xo,C=Math.cos(I),a=ku(w,a,D*C*-M),s=ku(w,s,-Math.sin(I)*-M),c=ku(w,c,S*C*-M+M)}g!==Ko&&(b+="perspective("+g+ss),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(E||a!==Ko||s!==Ko||c!==Ko)&&(b+=c!==Ko||E?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+ss),u!==rs&&(b+="rotate("+u+ss),h!==rs&&(b+="rotateY("+h+ss),p!==rs&&(b+="rotateX("+p+ss),(f!==rs||m!==rs)&&(b+="skew("+f+", "+m+ss),(v!==1||d!==1)&&(b+="scale("+v+", "+d+ss),w.style[qt]=b||"translate(0, 0)"},O1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,u=n.skewX,h=n.skewY,p=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,d=n.yOrigin,g=n.xOffset,y=n.yOffset,w=n.forceCSS,M=parseFloat(a),b=parseFloat(s),E,I,D,S,C;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=xo,u*=xo,E=Math.cos(c)*p,I=Math.sin(c)*p,D=Math.sin(c-u)*-f,S=Math.cos(c-u)*f,u&&(h*=xo,C=Math.tan(u-h),C=Math.sqrt(1+C*C),D*=C,S*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),E*=C,I*=C)),E=Kt(E),I=Kt(I),D=Kt(D),S=Kt(S)):(E=p,S=f,I=D=0),(M&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(M=Vr(m,"x",a,"px"),b=Vr(m,"y",s,"px")),(v||d||g||y)&&(M=Kt(M+v-(v*E+d*D)+g),b=Kt(b+d-(v*I+d*S)+y)),(i||r)&&(C=m.getBBox(),M=Kt(M+i/100*C.width),b=Kt(b+r/100*C.height)),C="matrix("+E+","+I+","+D+","+S+","+M+","+b+")",m.setAttribute("transform",C),w&&(m.style[qt]=C)},F1=function(e,t,n,i,r){var a=360,s=mn(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?ls:1),u=c-i,h=i+u+"deg",p,f;return s&&(p=r.split("_")[1],p==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),p==="cw"&&u<0?u=(u+a*$p)%a-~~(u/a)*a:p==="ccw"&&u>0&&(u=(u-a*$p)%a-~~(u/a)*a)),e._pt=f=new jn(e._pt,t,n,i,u,_1),f.e=h,f.u="deg",e._props.push(n),f},em=function(e,t){for(var n in t)e[n]=t[n];return e},N1=function(e,t,n){var i=em({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,u,h,p,f,m,v;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[qt]=t,s=Oa(n,1),Gr(n,qt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[qt],a[qt]=t,s=Oa(n,1),a[qt]=u);for(c in vr)u=i[c],h=s[c],u!==h&&r.indexOf(c)<0&&(m=wn(u),v=wn(h),p=m!==v?Vr(n,c,u,v):parseFloat(u),f=parseFloat(h),e._pt=new jn(e._pt,s,c,p,f-p,hh),e._pt.u=v||0,e._props.push(c));em(s,i)};Yn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});oc[e>1?"border"+o:o]=function(s,c,u,h,p){var f,m;if(arguments.length<4)return f=a.map(function(v){return hr(s,v,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(v,d){return m[v]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(c,m,p)}});var Wg={name:"css",register:dh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,c=n.vars.startAt,u,h,p,f,m,v,d,g,y,w,M,b,E,I,D,S,C;Hh||dh(),this.styles=this.styles||Ng(e),S=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(h=t[d],!(si[d]&&Tg(d,t,n,i,e,r)))){if(m=typeof h,v=oc[d],m==="function"&&(h=h.call(n,i,e,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Da(h)),v)v(this,e,d,h,n)&&(D=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),h+="",kr.lastIndex=0,kr.test(u)||(g=wn(u),y=wn(h),y?g!==y&&(u=Vr(e,d,u,y)+y):g&&(h+=g)),this.add(s,"setProperty",u,h,i,r,0,0,d),a.push(d),S.push(d,0,s[d]);else if(m!=="undefined"){if(c&&d in c?(u=typeof c[d]=="function"?c[d].call(n,i,e,r):c[d],mn(u)&&~u.indexOf("random(")&&(u=Da(u)),wn(u+"")||u==="auto"||(u+=pi.units[d]||wn(hr(e,d))||""),(u+"").charAt(1)==="="&&(u=hr(e,d))):u=hr(e,d),f=parseFloat(u),w=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),p=parseFloat(h),d in Ki&&(d==="autoAlpha"&&(f===1&&hr(e,"visibility")==="hidden"&&p&&(f=0),S.push("visibility",0,s.visibility),Rr(this,s,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),d!=="scale"&&d!=="transform"&&(d=Ki[d],~d.indexOf(",")&&(d=d.split(",")[0]))),M=d in vr,M){if(this.styles.save(d),C=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=hi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=h,h=hi(e,"perspective"),O?e.style.perspective=O:Gr(e,"perspective")}p=parseFloat(h)}if(b||(E=e._gsap,E.renderTransform&&!t.parseTransform||Oa(e,t.parseTransform),I=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new jn(this._pt,s,qt,0,1,E.renderTransform,E,0,-1),b.dep=1),d==="scale")this._pt=new jn(this._pt,E,"scaleY",E.scaleY,(w?_o(E.scaleY,w+p):p)-E.scaleY||0,hh),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){S.push(Zn,0,s[Zn]),h=P1(h),E.svg?ph(e,h,0,I,0,this):(y=parseFloat(h.split(" ")[2])||0,y!==E.zOrigin&&Rr(this,E,"zOrigin",E.zOrigin,y),Rr(this,s,d,ac(u),ac(h)));continue}else if(d==="svgOrigin"){ph(e,h,1,I,0,this);continue}else if(d in Bg){F1(this,E,d,f,w?_o(f,w+h):h);continue}else if(d==="smoothOrigin"){Rr(this,E,"smooth",E.smooth,h);continue}else if(d==="force3D"){E[d]=h;continue}else if(d==="transform"){N1(this,h,e);continue}}else d in s||(d=Ro(d)||d);if(M||(p||p===0)&&(f||f===0)&&!g1.test(h)&&d in s)g=(u+"").substr((f+"").length),p||(p=0),y=wn(h)||(d in pi.units?pi.units[d]:g),g!==y&&(f=Vr(e,d,u,y)),this._pt=new jn(this._pt,M?E:s,d,f,(w?_o(f,w+p):p)-f,!M&&(y==="px"||d==="zIndex")&&t.autoRound!==!1?y1:hh),this._pt.u=y||0,M&&C!==h?(this._pt.b=u,this._pt.e=C,this._pt.r=x1):g!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=v1);else if(d in s)D1.call(this,e,d,u,w?w+h:h);else if(d in e)this.add(e,d,u||e[d],w?w+h:h,i,r);else if(d!=="parseTransform"){Oh(d,h);continue}M||(d in s?S.push(d,0,s[d]):typeof e[d]=="function"?S.push(d,2,e[d]()):S.push(d,1,u||e[d])),a.push(d)}}D&&Pg(this)},render:function(e,t){if(t.tween._time||!Xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==Zn&&(e._gsap.x||hr(e,"x"))?n&&qp===n?t==="scale"?w1:S1:(qp=n||{})&&(t==="scale"?T1:E1):e.style&&!Ph(e.style[t])?b1:~t.indexOf("-")?M1:Vh(e,t)},core:{_removeProperty:Gr,_getMatrix:$h}};Kn.utils.checkPrefix=Ro;Kn.core.getStyleSaver=Ng;(function(o,e,t,n){var i=Yn(o+","+e+","+t,function(r){vr[r]=1});Yn(e,function(r){pi.units[r]="deg",Bg[r]=1}),Ki[i[13]]=o+","+e,Yn(n,function(r){var a=r.split(":");Ki[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){pi.units[o]="px"});Kn.registerPlugin(Wg);var pa=Kn.registerPlugin(Wg)||Kn;pa.core.Tween;function tm(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function k1(o,e,t){return e&&tm(o.prototype,e),t&&tm(o,t),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _n,Xl,ci,Ir,Or,yo,Hg,cs,bo,Xg,pr,ki,qg,$g=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Yg=1,ho=[],ft=[],Qi=[],ma=Date.now,mh=function(e,t){return t},z1=function(){var e=bo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,Qi),ft=n,Qi=i,mh=function(a,s){return t[a](s)}},zr=function(e,t){return~Qi.indexOf(e)&&Qi[Qi.indexOf(e)+1][t]},ga=function(e){return!!~Xg.indexOf(e)},On=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},In=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Cl="scrollLeft",Ll="scrollTop",gh=function(){return pr&&pr.isPressed||ft.cache++},lc=function(e,t){var n=function i(r){if(r||r===0){Yg&&(ci.history.scrollRestoration="manual");var a=pr&&pr.isPressed;r=i.v=Math.round(r)||(pr&&pr.iOS?1:0),e(r),i.cacheID=ft.cache,a&&mh("ss",r)}else(t||ft.cache!==i.cacheID||mh("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Bn={s:Cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lc(function(o){return arguments.length?ci.scrollTo(o,sn.sc()):ci.pageXOffset||Ir[Cl]||Or[Cl]||yo[Cl]||0})},sn={s:Ll,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:lc(function(o){return arguments.length?ci.scrollTo(Bn.sc(),o):ci.pageYOffset||Ir[Ll]||Or[Ll]||yo[Ll]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},U1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Wr=function(e,t){var n=t.s,i=t.sc;ga(e)&&(e=Ir.scrollingElement||Or);var r=ft.indexOf(e),a=i===sn.sc?1:2;!~r&&(r=ft.push(e)-1),ft[r+a]||On(e,"scroll",gh);var s=ft[r+a],c=s||(ft[r+a]=lc(zr(e,n),!0)||(ga(e)?i:lc(function(u){return arguments.length?e[n]=u:e[n]})));return c.target=e,s||(c.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),c},_h=function(e,t,n){var i=e,r=e,a=ma(),s=a,c=t||50,u=Math.max(500,c*3),h=function(v,d){var g=ma();d||g-a>c?(r=i,i=v,s=a,a=g):n?i+=v:i=r+(v-r)/(g-s)*(a-s)},p=function(){r=i=n?0:i,s=a=0},f=function(v){var d=s,g=r,y=ma();return(v||v===0)&&v!==i&&h(v),a===s||y-s>u?0:(i+(n?g:-g))/((n?y:a)-d)*1e3};return{update:h,reset:p,getVelocity:f}},Jo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},nm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},jg=function(){bo=_n.core.globals().ScrollTrigger,bo&&bo.core&&z1()},Zg=function(e){return _n=e||$g(),!Xl&&_n&&typeof document<"u"&&document.body&&(ci=window,Ir=document,Or=Ir.documentElement,yo=Ir.body,Xg=[ci,Ir,Or,yo],_n.utils.clamp,qg=_n.core.context||function(){},cs="onpointerenter"in yo?"pointer":"mouse",Hg=Jt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Jt.eventTypes=("ontouchstart"in Or?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Or?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),Xl=1),bo||jg(),Xl};Bn.op=sn;ft.cache=0;var Jt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Xl||Zg(_n)||console.warn("Please gsap.registerPlugin(Observer)"),bo||jg();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,c=n.lineHeight,u=n.debounce,h=n.preventDefault,p=n.onStop,f=n.onStopDelay,m=n.ignore,v=n.wheelSpeed,d=n.event,g=n.onDragStart,y=n.onDragEnd,w=n.onDrag,M=n.onPress,b=n.onRelease,E=n.onRight,I=n.onLeft,D=n.onUp,S=n.onDown,C=n.onChangeX,O=n.onChangeY,K=n.onChange,H=n.onToggleX,V=n.onToggleY,N=n.onHover,Y=n.onHoverEnd,te=n.onMove,Q=n.ignoreCheck,j=n.isNormalizer,oe=n.onGestureStart,P=n.onGestureEnd,U=n.onWheel,q=n.onEnable,ce=n.onDisable,he=n.onClick,G=n.scrollSpeed,ge=n.capture,de=n.allowClicks,Me=n.lockAxis,ne=n.onLockAxis;this.target=s=Wn(s)||Or,this.vars=n,m&&(m=_n.utils.toArray(m)),i=i||1e-9,r=r||0,v=v||1,G=G||1,a=a||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(ci.getComputedStyle(yo).lineHeight)||22);var Ne,Ve,qe,Ce,nt,Et,xt,$=this,ct=0,gt=0,jt=n.passive||!h&&n.passive!==!1,pt=Wr(s,Bn),R=Wr(s,sn),L=pt(),re=R(),ue=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ki[0]==="pointerdown",fe=ga(s),pe=s.ownerDocument||Ir,Pe=[0,0,0],ye=[0,0,0],se=0,Ue=function(){return se=ma()},me=function(Oe,je){return($.event=Oe)&&m&&U1(Oe.target,m)||je&&ue&&Oe.pointerType!=="touch"||Q&&Q(Oe,je)},We=function(){$._vx.reset(),$._vy.reset(),Ve.pause(),p&&p($)},ke=function(){var Oe=$.deltaX=nm(Pe),je=$.deltaY=nm(ye),xe=Math.abs(Oe)>=i,Ke=Math.abs(je)>=i;K&&(xe||Ke)&&K($,Oe,je,Pe,ye),xe&&(E&&$.deltaX>0&&E($),I&&$.deltaX<0&&I($),C&&C($),H&&$.deltaX<0!=ct<0&&H($),ct=$.deltaX,Pe[0]=Pe[1]=Pe[2]=0),Ke&&(S&&$.deltaY>0&&S($),D&&$.deltaY<0&&D($),O&&O($),V&&$.deltaY<0!=gt<0&&V($),gt=$.deltaY,ye[0]=ye[1]=ye[2]=0),(Ce||qe)&&(te&&te($),qe&&(g&&qe===1&&g($),w&&w($),qe=0),Ce=!1),Et&&!(Et=!1)&&ne&&ne($),nt&&(U($),nt=!1),Ne=0},Fe=function(Oe,je,xe){Pe[xe]+=Oe,ye[xe]+=je,$._vx.update(Oe),$._vy.update(je),u?Ne||(Ne=requestAnimationFrame(ke)):ke()},rt=function(Oe,je){Me&&!xt&&($.axis=xt=Math.abs(Oe)>Math.abs(je)?"x":"y",Et=!0),xt!=="y"&&(Pe[2]+=Oe,$._vx.update(Oe,!0)),xt!=="x"&&(ye[2]+=je,$._vy.update(je,!0)),u?Ne||(Ne=requestAnimationFrame(ke)):ke()},yt=function(Oe){if(!me(Oe,1)){Oe=Jo(Oe,h);var je=Oe.clientX,xe=Oe.clientY,Ke=je-$.x,He=xe-$.y,A=$.isDragging;$.x=je,$.y=xe,(A||(Ke||He)&&(Math.abs($.startX-je)>=r||Math.abs($.startY-xe)>=r))&&(qe||(qe=A?2:1),A||($.isDragging=!0),rt(Ke,He))}},Dt=$.onPress=function(Le){me(Le,1)||Le&&Le.button||($.axis=xt=null,Ve.pause(),$.isPressed=!0,Le=Jo(Le),ct=gt=0,$.startX=$.x=Le.clientX,$.startY=$.y=Le.clientY,$._vx.reset(),$._vy.reset(),On(j?s:pe,ki[1],yt,jt,!0),$.deltaX=$.deltaY=0,M&&M($))},F=$.onRelease=function(Le){if(!me(Le,1)){In(j?s:pe,ki[1],yt,!0);var Oe=!isNaN($.y-$.startY),je=$.isDragging,xe=je&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Ke=Jo(Le);!xe&&Oe&&($._vx.reset(),$._vy.reset(),h&&de&&_n.delayedCall(.08,function(){if(ma()-se>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(pe.createEvent){var He=pe.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,ci,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(He)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,p&&je&&!j&&Ve.restart(!0),qe&&ke(),y&&je&&y($),b&&b($,xe)}},ie=function(Oe){return Oe.touches&&Oe.touches.length>1&&($.isGesturing=!0)&&oe(Oe,$.isDragging)},ae=function(){return($.isGesturing=!1)||P($)},ve=function(Oe){if(!me(Oe)){var je=pt(),xe=R();Fe((je-L)*G,(xe-re)*G,1),L=je,re=xe,p&&Ve.restart(!0)}},Se=function(Oe){if(!me(Oe)){Oe=Jo(Oe,h),U&&(nt=!0);var je=(Oe.deltaMode===1?c:Oe.deltaMode===2?ci.innerHeight:1)*v;Fe(Oe.deltaX*je,Oe.deltaY*je,0),p&&!j&&Ve.restart(!0)}},mt=function(Oe){if(!me(Oe)){var je=Oe.clientX,xe=Oe.clientY,Ke=je-$.x,He=xe-$.y;$.x=je,$.y=xe,Ce=!0,p&&Ve.restart(!0),(Ke||He)&&rt(Ke,He)}},Pt=function(Oe){$.event=Oe,N($)},Ot=function(Oe){$.event=Oe,Y($)},ln=function(Oe){return me(Oe)||Jo(Oe,h)&&he($)};Ve=$._dc=_n.delayedCall(f||.25,We).pause(),$.deltaX=$.deltaY=0,$._vx=_h(0,50,!0),$._vy=_h(0,50,!0),$.scrollX=pt,$.scrollY=R,$.isDragging=$.isGesturing=$.isPressed=!1,qg(this),$.enable=function(Le){return $.isEnabled||(On(fe?pe:s,"scroll",gh),a.indexOf("scroll")>=0&&On(fe?pe:s,"scroll",ve,jt,ge),a.indexOf("wheel")>=0&&On(s,"wheel",Se,jt,ge),(a.indexOf("touch")>=0&&Hg||a.indexOf("pointer")>=0)&&(On(s,ki[0],Dt,jt,ge),On(pe,ki[2],F),On(pe,ki[3],F),de&&On(s,"click",Ue,!0,!0),he&&On(s,"click",ln),oe&&On(pe,"gesturestart",ie),P&&On(pe,"gestureend",ae),N&&On(s,cs+"enter",Pt),Y&&On(s,cs+"leave",Ot),te&&On(s,cs+"move",mt)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ce=qe=!1,$._vx.reset(),$._vy.reset(),L=pt(),re=R(),Le&&Le.type&&Dt(Le),q&&q($)),$},$.disable=function(){$.isEnabled&&(ho.filter(function(Le){return Le!==$&&ga(Le.target)}).length||In(fe?pe:s,"scroll",gh),$.isPressed&&($._vx.reset(),$._vy.reset(),In(j?s:pe,ki[1],yt,!0)),In(fe?pe:s,"scroll",ve,ge),In(s,"wheel",Se,ge),In(s,ki[0],Dt,ge),In(pe,ki[2],F),In(pe,ki[3],F),In(s,"click",Ue,!0),In(s,"click",ln),In(pe,"gesturestart",ie),In(pe,"gestureend",ae),In(s,cs+"enter",Pt),In(s,cs+"leave",Ot),In(s,cs+"move",mt),$.isEnabled=$.isPressed=$.isDragging=!1,ce&&ce($))},$.kill=$.revert=function(){$.disable();var Le=ho.indexOf($);Le>=0&&ho.splice(Le,1),pr===$&&(pr=0)},ho.push($),j&&ga(s)&&(pr=$),$.enable(d)},k1(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();Jt.version="3.15.0";Jt.create=function(o){return new Jt(o)};Jt.register=Zg;Jt.getAll=function(){return ho.slice()};Jt.getById=function(o){return ho.filter(function(e){return e.vars.id===o})[0]};$g()&&_n.registerPlugin(Jt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,oo,ht,Lt,ai,Tt,Yh,cc,Fa,_a,sa,Dl,Mn,yc,vh,kn,im,rm,ao,Kg,zu,Jg,Nn,xh,Qg,e_,Er,yh,jh,Mo,Zh,va,bh,Uu,Pl=1,Sn=Date.now,Bu=Sn(),Pi=0,oa=0,sm=function(e,t,n){var i=ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},om=function(e,t){return t&&(!ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},B1=function o(){return oa&&requestAnimationFrame(o)},am=function(){return yc=1},lm=function(){return yc=0},$i=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},t_=function(){return typeof window<"u"},n_=function(){return Ie||t_()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Ds=function(e){return!!~Yh.indexOf(e)},i_=function(e){return(e==="Height"?Zh:ht["inner"+e])||ai["client"+e]||Tt["client"+e]},r_=function(e){return zr(e,"getBoundingClientRect")||(Ds(e)?function(){return Zl.width=ht.innerWidth,Zl.height=Zh,Zl}:function(){return dr(e)})},G1=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=zr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?i_(r):e["client"+r])||0}},V1=function(e,t){return!t||~Qi.indexOf(e)?r_(e):function(){return Zl}},Ji=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=zr(e,n))?a()-r_(e)()[r]:Ds(e)?(ai[n]||Tt[n])-i_(i):e[n]-e["offset"+i])},Rl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},ri=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},la=function(e){return typeof e=="number"},us=function(e){return typeof e=="object"},Qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},no=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},io=Math.abs,s_="left",o_="top",Kh="right",Jh="bottom",Ss="width",ws="height",xa="Right",ya="Left",ba="Top",Ma="Bottom",tn="padding",Ai="margin",Io="Width",Qh="Height",rn="px",Ci=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},W1=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dr=function(e,t){var n=t&&Ci(e)[vh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},a_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},H1=function(e){return function(t){return Ie.utils.snap(a_(e),t)}},ef=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},X1=function(e){return function(t,n){return ef(a_(e))(t,n.direction)}},Il=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},dn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ol=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},um={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},hc={top:0,left:0,center:.5,bottom:1,right:1},ql=function(e,t){if(ri(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hc?hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Nl=function(e,t,n,i,r,a,s,c){var u=r.startColor,h=r.endColor,p=r.fontSize,f=r.indent,m=r.fontWeight,v=Lt.createElement("div"),d=Ds(n)||zr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,y=d?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,M=w?u:h,b="border-color:"+M+";font-size:"+p+";color:"+M+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((g||c)&&d?"fixed;":"absolute;"),(g||c||!d)&&(b+=(i===sn?Kh:Jh)+":"+(a+parseFloat(f))+"px;"),s&&(b+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),v._isStart=w,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=b,v.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(v,y.children[0]):y.appendChild(v),v._offset=v["offset"+i.op.d2],$l(v,0,i,w),v},$l=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Io]=1,r["border"+s+Io]=0,r[n.p]=t+"px",Ie.set(e,r)},lt=[],Mh={},Na,hm=function(){return Sn()-Pi>34&&(Na||(Na=requestAnimationFrame(gr)))},ro=function(){(!Nn||!Nn.isPressed||Nn.startX>Tt.clientWidth)&&(ft.cache++,Nn?Na||(Na=requestAnimationFrame(gr)):gr(),Pi||Rs("scrollStart"),Pi=Sn())},Gu=function(){e_=ht.innerWidth,Qg=ht.innerHeight},ca=function(e){ft.cache++,(e===!0||!Mn&&!Jg&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!xh||e_!==ht.innerWidth||Math.abs(ht.innerHeight-Qg)>ht.innerHeight*.25))&&cc.restart(!0)},Ps={},q1=[],l_=function o(){return fn(dt,"scrollEnd",o)||gs(!0)},Rs=function(e){return Ps[e]&&Ps[e].map(function(t){return t()})||q1},ii=[],c_=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},u_=function(){return ft.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},tf=function(e,t){var n;for(kn=0;kn<lt.length;kn++)n=lt[kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));va=!0,t&&c_(t),t||Rs("revert")},h_=function(e,t){ft.cache++,(t||!zn)&&ft.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),ri(e)&&(ht.history.scrollRestoration=jh=e)},zn,Ts=0,fm,$1=function(){if(fm!==Ts){var e=fm=Ts;requestAnimationFrame(function(){return e===Ts&&gs(!0)})}},f_=function(){Tt.appendChild(Mo),Zh=!Nn&&Mo.offsetHeight||ht.innerHeight,Tt.removeChild(Mo)},dm=function(e){return Fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ai=Lt.documentElement,Tt=Lt.body,Yh=[ht,Lt,ai,Tt],Pi&&!e&&!va){dn(dt,"scrollEnd",l_);return}f_(),zn=dt.isRefreshing=!0,va||u_();var n=Rs("refreshInit");Kg&&dt.sort(),t||tf(),ft.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),va=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),bh=1,dm(!0),lt.forEach(function(i){var r=Ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,s=i._startClamp&&i.start>=r;(a||s)&&i.setPositions(s?r-1:i.start,a?Math.max(s?r:i.start+1,r):i.end,!0)}),dm(!1),bh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),h_(jh,1),cc.pause(),Ts++,zn=2,gr(2),lt.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),zn=dt.isRefreshing=!1,Rs("refresh")},Sh=0,Yl=1,Sa,gr=function(e){if(e===2||!zn&&!va){dt.isUpdating=!0,Sa&&Sa.update(0);var t=lt.length,n=Sn(),i=n-Bu>=50,r=t&&lt[0].scroll();if(Yl=Sh>r?-1:1,zn||(Sh=r),i&&(Pi&&!yc&&n-Pi>200&&(Pi=0,Rs("scrollEnd")),sa=Bu,Bu=n),Yl<0){for(kn=t;kn-- >0;)lt[kn]&&lt[kn].update(0,i);Yl=1}else for(kn=0;kn<t;kn++)lt[kn]&&lt[kn].update(0,i);dt.isUpdating=!1}Na=0},wh=[s_,o_,Jh,Kh,Ai+Ma,Ai+xa,Ai+ba,Ai+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=wh.concat([Ss,ws,"boxSizing","max"+Io,"max"+Qh,"position",Ai,tn,tn+ba,tn+xa,tn+Ma,tn+ya]),Y1=function(e,t,n){So(n);var i=e._gsap;if(i.spacerIsNative)So(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Vu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=wh.length,a=t.style,s=e.style,c;r--;)c=wh[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Jh]=s[Kh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ss]=uc(e,Bn)+rn,a[ws]=uc(e,sn)+rn,a[tn]=s[Ai]=s[o_]=s[s_]="0",So(i),s[Ss]=s["max"+Io]=n[Ss],s[ws]=s["max"+Qh]=n[ws],s[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},j1=/([A-Z])/g,So=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(j1,"-$1").toLowerCase())}},kl=function(e){for(var t=jl.length,n=e.style,i=[],r=0;r<t;r++)i.push(jl[r],n[jl[r]]);return i.t=e,i},Z1=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},Zl={left:0,top:0},pm=function(e,t,n,i,r,a,s,c,u,h,p,f,m,v){Tn(e)&&(e=e(c)),ri(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ql("0"+e.substr(3),n):0));var d=m?m.time():0,g,y,w;if(m&&m.seek(0),isNaN(e)||(e=+e),la(e))m&&(e=Ie.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,f,e)),s&&$l(s,n,i,!0);else{Tn(t)&&(t=t(c));var M=(e||"0").split(" "),b,E,I,D;w=Wn(t,c)||Tt,b=dr(w)||{},(!b||!b.left&&!b.top)&&Ci(w).display==="none"&&(D=w.style.display,w.style.display="block",b=dr(w),D?w.style.display=D:w.style.removeProperty("display")),E=ql(M[0],b[i.d]),I=ql(M[1]||"0",n),e=b[i.p]-u[i.p]-h+E+r-I,s&&$l(s,I,i,n-I<20||s._isStart&&I>20),n-=n-I}if(v&&(c[v]=e||-.001,e<0&&(e=0)),a){var S=e+n,C=a._isStart;g="scroll"+i.d2,$l(a,S,i,C&&S>20||!C&&(p?Math.max(Tt[g],ai[g]):a.parentNode[g])<=S+1),p&&(u=dr(s),p&&(a.style[i.op.p]=u[i.op.p]-i.op.m-a._offset+rn))}return m&&w&&(g=dr(w),m.seek(f),y=dr(w),m._caScrollDist=g[i.p]-y[i.p],e=e/m._caScrollDist*f),m&&m.seek(d),m?e:Math.round(e)},K1=/(webkit|moz|length|cssText|inset)/i,mm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===Tt){e._stOrig=r.cssText,s=Ci(e);for(a in s)!+a&&!K1.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},d_=function(e,t,n){var i=t,r=i;return function(a){var s=Math.round(e());return s!==i&&s!==r&&Math.abs(s-i)>3&&Math.abs(s-r)>3&&(a=s,n&&n()),r=i,i=Math.round(a),i}},zl=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},gm=function(e,t){var n=Wr(e,t),i="_scroll"+t.p2,r=function a(s,c,u,h,p){var f=a.tween,m=c.onComplete,v={};u=u||n();var d=d_(n,u,function(){f.kill(),a.tween=0});return p=h&&p||0,h=h||s-u,f&&f.kill(),c[i]=s,c.inherit=!1,c.modifiers=v,v[i]=function(){return d(u+h*f.ratio+p*f.ratio*f.ratio)},c.onUpdate=function(){ft.cache++,a.tween&&gr()},c.onComplete=function(){a.tween=0,m&&m.call(f)},f=a.tween=Ie.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},dn(e,"wheel",n.wheelHandler),dt.isTouch&&dn(e,"touchmove",n.wheelHandler),r},dt=function(){function o(t,n){oo||o.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yh(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!oa){this.update=this.refresh=this.kill=$i;return}n=cm(ri(n)||la(n)||n.nodeType?{trigger:n}:n,Fl);var r=n,a=r.onUpdate,s=r.toggleClass,c=r.id,u=r.onToggle,h=r.onRefresh,p=r.scrub,f=r.trigger,m=r.pin,v=r.pinSpacing,d=r.invalidateOnRefresh,g=r.anticipatePin,y=r.onScrubComplete,w=r.onSnapComplete,M=r.once,b=r.snap,E=r.pinReparent,I=r.pinSpacer,D=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,O=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:sn,K=!p&&p!==0,H=Wn(n.scroller||ht),V=Ie.core.getCache(H),N=Ds(H),Y=("pinType"in n?n.pinType:zr(H,"pinType")||N&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=K&&n.toggleActions.split(" "),j="markers"in n?n.markers:Fl.markers,oe=N?0:parseFloat(Ci(H)["border"+O.p2+Io])||0,P=this,U=n.onRefreshInit&&function(){return n.onRefreshInit(P)},q=G1(H,N,O),ce=V1(H,N),he=0,G=0,ge=0,de=Wr(H,O),Me,ne,Ne,Ve,qe,Ce,nt,Et,xt,$,ct,gt,jt,pt,R,L,re,ue,fe,pe,Pe,ye,se,Ue,me,We,ke,Fe,rt,yt,Dt,F,ie,ae,ve,Se,mt,Pt,Ot;if(P._startClamp=P._endClamp=!1,P._dir=O,g*=45,P.scroller=H,P.scroll=D?D.time.bind(D):de,Ve=de(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Kg=1,n.refreshPriority===-9999&&(Sa=P)),V.tweenScroll=V.tweenScroll||{top:gm(H,sn),left:gm(H,Bn)},P.tweenTo=Me=V.tweenScroll[O.p],P.scrubDuration=function(xe){ie=la(xe)&&xe,ie?F?F.duration(xe):F=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return y&&y(P)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(p),yt=0,c||(c=i.vars.id)),b&&((!us(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Tt.style&&Ie.set(N?[Tt,ai]:H,{scrollBehavior:"auto"}),ft.forEach(function(xe){return Tn(xe)&&xe.target===(N?Lt.scrollingElement||ai:H)&&(xe.smooth=!1)}),Ne=Tn(b.snapTo)?b.snapTo:b.snapTo==="labels"?H1(i):b.snapTo==="labelsDirectional"?X1(i):b.directional!==!1?function(xe,Ke){return ef(b.snapTo)(xe,Sn()-G<500?0:Ke.direction)}:Ie.utils.snap(b.snapTo),ae=b.duration||{min:.1,max:2},ae=us(ae)?_a(ae.min,ae.max):_a(ae,ae),ve=Ie.delayedCall(b.delay||ie/2||.1,function(){var xe=de(),Ke=Sn()-G<500,He=Me.tween;if((Ke||Math.abs(P.getVelocity())<10)&&!He&&!yc&&he!==xe){var A=(xe-Ce)/pt,W=i&&!K?i.totalProgress():A,X=Ke?0:(W-Dt)/(Sn()-sa)*1e3||0,z=Ie.utils.clamp(-A,1-A,io(X/2)*X/.185),Z=A+(b.inertia===!1?0:z),be,Ee,Ae=b,Ye=Ae.onStart,Ge=Ae.onInterrupt,Xe=Ae.onComplete;if(be=Ne(Z,P),la(be)||(be=Z),Ee=Math.max(0,Math.round(Ce+be*pt)),xe<=nt&&xe>=Ce&&Ee!==xe){if(He&&!He._initted&&He.data<=io(Ee-xe))return;b.inertia===!1&&(z=be-A),Me(Ee,{duration:ae(io(Math.max(io(Z-W),io(be-W))*.185/X/.05||0)),ease:b.ease||"power3",data:io(Ee-xe),onInterrupt:function(){return ve.restart(!0)&&Ge&&no(P,Ge)},onComplete:function(){P.update(),he=de(),i&&!K&&(F?F.resetTo("totalProgress",be,i._tTime/i._tDur):i.progress(be)),yt=Dt=i&&!K?i.totalProgress():P.progress,w&&w(P),Xe&&no(P,Xe)}},xe,z*pt,Ee-xe-z*pt),Ye&&no(P,Ye,Me.tween)}}else P.isActive&&he!==xe&&ve.restart(!0)}).pause()),c&&(Mh[c]=P),f=P.trigger=Wn(f||m!==!0&&m),Ot=f&&f._gsap&&f._gsap.stRevert,Ot&&(Ot=Ot(P)),m=m===!0?f:Wn(m),ri(s)&&(s={targets:f,className:s}),m&&(v===!1||v===Ai||(v=!v&&m.parentNode&&m.parentNode.style&&Ci(m.parentNode).display==="flex"?!1:tn),P.pin=m,ne=Ie.core.getCache(m),ne.spacer?R=ne.pinState:(I&&(I=Wn(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),ne.spacerIsNative=!!I,I&&(ne.spacerState=kl(I))),ne.spacer=ue=I||Lt.createElement("div"),ue.classList.add("pin-spacer"),c&&ue.classList.add("pin-spacer-"+c),ne.pinState=R=kl(m)),n.force3D!==!1&&Ie.set(m,{force3D:!0}),P.spacer=ue=ne.spacer,rt=Ci(m),Ue=rt[v+O.os2],pe=Ie.getProperty(m),Pe=Ie.quickSetter(m,O.a,rn),Vu(m,ue,rt),re=kl(m)),j){gt=us(j)?cm(j,um):um,$=Nl("scroller-start",c,H,O,gt,0),ct=Nl("scroller-end",c,H,O,gt,0,$),fe=$["offset"+O.op.d2];var ln=Wn(zr(H,"content")||H);Et=this.markerStart=Nl("start",c,ln,O,gt,fe,0,D),xt=this.markerEnd=Nl("end",c,ln,O,gt,fe,0,D),D&&(Pt=Ie.quickSetter([Et,xt],O.a,rn)),!Y&&!(Qi.length&&zr(H,"fixedMarkers")===!0)&&(W1(N?Tt:H),Ie.set([$,ct],{force3D:!0}),We=Ie.quickSetter($,O.a,rn),Fe=Ie.quickSetter(ct,O.a,rn))}if(D){var Le=D.vars.onUpdate,Oe=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){P.update(0,0,1),Le&&Le.apply(D,Oe||[])})}if(P.previous=function(){return lt[lt.indexOf(P)-1]},P.next=function(){return lt[lt.indexOf(P)+1]},P.revert=function(xe,Ke){if(!Ke)return P.kill(!0);var He=xe!==!1||!P.enabled,A=Mn;He!==P.isReverted&&(He&&(Se=Math.max(de(),P.scroll.rec||0),ge=P.progress,mt=i&&i.progress()),Et&&[Et,xt,$,ct].forEach(function(W){return W.style.display=He?"none":"block"}),He&&(Mn=P,P.update(He)),m&&(!E||!P.isActive)&&(He?Y1(m,ue,R):Vu(m,ue,Ci(m),me)),He||P.update(He),Mn=A,P.isReverted=He)},P.refresh=function(xe,Ke,He,A){if(!((Mn||!P.enabled)&&!Ke)){if(m&&xe&&Pi){dn(o,"scrollEnd",l_);return}!zn&&U&&U(P),Mn=P,Me.tween&&!He&&(Me.tween.kill(),Me.tween=0),F&&F.pause(),d&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ln){return Ln.vars.immediateRender&&Ln.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var W=q(),X=ce(),z=D?D.duration():Ji(H,O),Z=pt<=.01||!pt,be=0,Ee=A||0,Ae=us(He)?He.end:n.end,Ye=n.endTrigger||f,Ge=us(He)?He.start:n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),Xe=P.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,P),ze=f&&Math.max(0,lt.indexOf(P))||0,$e=ze,Qe,it,Qt,bt,Be,wt,Mt,An,_i,Vn,cn,Ut,Cn;for(j&&us(He)&&(Ut=Ie.getProperty($,O.p),Cn=Ie.getProperty(ct,O.p));$e-- >0;)wt=lt[$e],wt.end||wt.refresh(0,1)||(Mn=P),Mt=wt.pin,Mt&&(Mt===f||Mt===m||Mt===Xe)&&!wt.isReverted&&(Vn||(Vn=[]),Vn.unshift(wt),wt.revert(!0,!0)),wt!==lt[$e]&&(ze--,$e--);for(Tn(Ge)&&(Ge=Ge(P)),Ge=sm(Ge,"start",P),Ce=pm(Ge,f,W,O,de(),Et,$,P,X,oe,Y,z,D,P._startClamp&&"_startClamp")||(m?-.001:0),Tn(Ae)&&(Ae=Ae(P)),ri(Ae)&&!Ae.indexOf("+=")&&(~Ae.indexOf(" ")?Ae=(ri(Ge)?Ge.split(" ")[0]:"")+Ae:(be=ql(Ae.substr(2),W),Ae=ri(Ge)?Ge:(D?Ie.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,Ce):Ce)+be,Ye=f)),Ae=sm(Ae,"end",P),nt=Math.max(Ce,pm(Ae||(Ye?"100% 0":z),Ye,W,O,de()+be,xt,ct,P,X,oe,Y,z,D,P._endClamp&&"_endClamp"))||-.001,be=0,$e=ze;$e--;)wt=lt[$e]||{},Mt=wt.pin,Mt&&wt.start-wt._pinPush<=Ce&&!D&&wt.end>0&&(Qe=wt.end-(P._startClamp?Math.max(0,wt.start):wt.start),(Mt===f&&wt.start-wt._pinPush<Ce||Mt===Xe)&&isNaN(Ge)&&(be+=Qe*(1-wt.progress)),Mt===m&&(Ee+=Qe));if(Ce+=be,nt+=be,P._startClamp&&(P._startClamp+=be),P._endClamp&&!zn&&(P._endClamp=nt||-.001,nt=Math.min(nt,Ji(H,O))),pt=nt-Ce||(Ce-=.01)&&.001,Z&&(ge=Ie.utils.clamp(0,1,Ie.utils.normalize(Ce,nt,Se))),P._pinPush=Ee,Et&&be&&(Qe={},Qe[O.a]="+="+be,Xe&&(Qe[O.p]="-="+de()),Ie.set([Et,xt],Qe)),m&&!(bh&&P.end>=Ji(H,O)))Qe=Ci(m),bt=O===sn,Qt=de(),ye=parseFloat(pe(O.a))+Ee,!z&&nt>1&&(cn=(N?Lt.scrollingElement||ai:H).style,cn={style:cn,value:cn["overflow"+O.a.toUpperCase()]},N&&Ci(Tt)["overflow"+O.a.toUpperCase()]!=="scroll"&&(cn.style["overflow"+O.a.toUpperCase()]="scroll")),Vu(m,ue,Qe),re=kl(m),it=dr(m,!0),An=Y&&Wr(H,bt?Bn:sn)(),v?(me=[v+O.os2,pt+Ee+rn],me.t=ue,$e=v===tn?uc(m,O)+pt+Ee:0,$e&&(me.push(O.d,$e+rn),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=$e+rn)),So(me),Xe&&lt.forEach(function(Ln){Ln.pin===Xe&&Ln.vars.pinSpacing!==!1&&(Ln._subPinOffset=!0)}),Y&&de(Se)):($e=uc(m,O),$e&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=$e+rn)),Y&&(Be={top:it.top+(bt?Qt-Ce:An)+rn,left:it.left+(bt?An:Qt-Ce)+rn,boxSizing:"border-box",position:"fixed"},Be[Ss]=Be["max"+Io]=Math.ceil(it.width)+rn,Be[ws]=Be["max"+Qh]=Math.ceil(it.height)+rn,Be[Ai]=Be[Ai+ba]=Be[Ai+xa]=Be[Ai+Ma]=Be[Ai+ya]="0",Be[tn]=Qe[tn],Be[tn+ba]=Qe[tn+ba],Be[tn+xa]=Qe[tn+xa],Be[tn+Ma]=Qe[tn+Ma],Be[tn+ya]=Qe[tn+ya],L=Z1(R,Be,E),zn&&de(0)),i?(_i=i._initted,zu(1),i.render(i.duration(),!0,!0),se=pe(O.a)-ye+pt+Ee,ke=Math.abs(pt-se)>1,Y&&ke&&L.splice(L.length-2,2),i.render(0,!0,!0),_i||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zu(0)):se=pt,cn&&(cn.value?cn.style["overflow"+O.a.toUpperCase()]=cn.value:cn.style.removeProperty("overflow-"+O.a));else if(f&&de()&&!D)for(it=f.parentNode;it&&it!==Tt;)it._pinOffset&&(Ce-=it._pinOffset,nt-=it._pinOffset),it=it.parentNode;Vn&&Vn.forEach(function(Ln){return Ln.revert(!1,!0)}),P.start=Ce,P.end=nt,Ve=qe=zn?Se:de(),!D&&!zn&&(Ve<Se&&de(Se),P.scroll.rec=0),P.revert(!1,!0),G=Sn(),ve&&(he=-1,ve.restart(!0)),Mn=0,i&&K&&(i._initted||mt)&&i.progress()!==mt&&i.progress(mt||0,!0).render(i.time(),!0,!0),(Z||ge!==P.progress||D||d||i&&!i._initted)&&(i&&!K&&(i._initted||ge||i.vars.immediateRender!==!1)&&i.totalProgress(D&&Ce<-.001&&!ge?Ie.utils.normalize(Ce,nt,0):ge,!0),P.progress=Z||(Ve-Ce)/pt===ge?0:ge),m&&v&&(ue._pinOffset=Math.round(P.progress*se)),F&&F.invalidate(),isNaN(Ut)||(Ut-=Ie.getProperty($,O.p),Cn-=Ie.getProperty(ct,O.p),zl($,O,Ut),zl(Et,O,Ut-(A||0)),zl(ct,O,Cn),zl(xt,O,Cn-(A||0))),Z&&!zn&&P.update(),h&&!zn&&!jt&&(jt=!0,h(P),jt=!1)}},P.getVelocity=function(){return(de()-qe)/(Sn()-sa)*1e3||0},P.endAnimation=function(){Qo(P.callbackAnimation),i&&(F?F.progress(1):i.paused()?K||Qo(i,P.direction<0,1):Qo(i,i.reversed()))},P.labelToScroll=function(xe){return i&&i.labels&&(Ce||P.refresh()||Ce)+i.labels[xe]/i.duration()*pt||0},P.getTrailing=function(xe){var Ke=lt.indexOf(P),He=P.direction>0?lt.slice(0,Ke).reverse():lt.slice(Ke+1);return(ri(xe)?He.filter(function(A){return A.vars.preventOverlaps===xe}):He).filter(function(A){return P.direction>0?A.end<=Ce:A.start>=nt})},P.update=function(xe,Ke,He){if(!(D&&!He&&!xe)){var A=zn===!0?Se:P.scroll(),W=xe?0:(A-Ce)/pt,X=W<0?0:W>1?1:W||0,z=P.progress,Z,be,Ee,Ae,Ye,Ge,Xe,ze;if(Ke&&(qe=Ve,Ve=D?de():A,b&&(Dt=yt,yt=i&&!K?i.totalProgress():X)),g&&m&&!Mn&&!Pl&&Pi&&(!X&&Ce<A+(A-qe)/(Sn()-sa)*g?X=1e-4:X===1&&nt>A+(A-qe)/(Sn()-sa)*g&&(X=.9999)),X!==z&&P.enabled){if(Z=P.isActive=!!X&&X<1,be=!!z&&z<1,Ge=Z!==be,Ye=Ge||!!X!=!!z,P.direction=X>z?1:-1,P.progress=X,Ye&&!Mn&&(Ee=X&&!z?0:X===1?1:z===1?2:3,K&&(Ae=!Ge&&Q[Ee+1]!=="none"&&Q[Ee+1]||Q[Ee],ze=i&&(Ae==="complete"||Ae==="reset"||Ae in i))),C&&(Ge||ze)&&(ze||p||!i)&&(Tn(C)?C(P):P.getTrailing(C).forEach(function(Qt){return Qt.endAnimation()})),K||(F&&!Mn&&!Pl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",X,i._tTime/i._tDur):(F.vars.totalProgress=X,F.invalidate().restart())):i&&i.totalProgress(X,!!(Mn&&(G||xe)))),m){if(xe&&v&&(ue.style[v+O.os2]=Ue),!Y)Pe(aa(ye+se*X));else if(Ye){if(Xe=!xe&&X>z&&nt+1>A&&A+1>=Ji(H,O),E)if(!xe&&(Z||Xe)){var $e=dr(m,!0),Qe=A-Ce;mm(m,Tt,$e.top+(O===sn?Qe:0)+rn,$e.left+(O===sn?0:Qe)+rn)}else mm(m,ue);So(Z||Xe?L:re),ke&&X<1&&Z||Pe(ye+(X===1&&!Xe?se:0))}}b&&!Me.tween&&!Mn&&!Pl&&ve.restart(!0),s&&(Ge||M&&X&&(X<1||!Uu))&&Fa(s.targets).forEach(function(Qt){return Qt.classList[Z||M?"add":"remove"](s.className)}),a&&!K&&!xe&&a(P),Ye&&!Mn?(K&&(ze&&(Ae==="complete"?i.pause().totalProgress(1):Ae==="reset"?i.restart(!0).pause():Ae==="restart"?i.restart(!0):i[Ae]()),a&&a(P)),(Ge||!Uu)&&(u&&Ge&&no(P,u),te[Ee]&&no(P,te[Ee]),M&&(X===1?P.kill(!1,1):te[Ee]=0),Ge||(Ee=X===1?1:3,te[Ee]&&no(P,te[Ee]))),S&&!Z&&Math.abs(P.getVelocity())>(la(S)?S:2500)&&(Qo(P.callbackAnimation),F?F.progress(1):Qo(i,Ae==="reverse"?1:!X,1))):K&&a&&!Mn&&a(P)}if(Fe){var it=D?A/D.duration()*(D._caScrollDist||0):A;We(it+($._isFlipped?1:0)),Fe(it)}Pt&&Pt(-A/D.duration()*(D._caScrollDist||0))}},P.enable=function(xe,Ke){P.enabled||(P.enabled=!0,dn(H,"resize",ca),N||dn(H,"scroll",ro),U&&dn(o,"refreshInit",U),xe!==!1&&(P.progress=ge=0,Ve=qe=he=de()),Ke!==!1&&P.refresh())},P.getTween=function(xe){return xe&&Me?Me.tween:F},P.setPositions=function(xe,Ke,He,A){if(D){var W=D.scrollTrigger,X=D.duration(),z=W.end-W.start;xe=W.start+z*xe/X,Ke=W.start+z*Ke/X}P.refresh(!1,!1,{start:om(xe,He&&!!P._startClamp),end:om(Ke,He&&!!P._endClamp)},A),P.update()},P.adjustPinSpacing=function(xe){if(me&&xe){var Ke=me.indexOf(O.d)+1;me[Ke]=parseFloat(me[Ke])+xe+rn,me[1]=parseFloat(me[1])+xe+rn,So(me)}},P.disable=function(xe,Ke){if(xe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ke||F&&F.pause(),Se=0,ne&&(ne.uncache=1),U&&fn(o,"refreshInit",U),ve&&(ve.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!N)){for(var He=lt.length;He--;)if(lt[He].scroller===H&&lt[He]!==P)return;fn(H,"resize",ca),N||fn(H,"scroll",ro)}},P.kill=function(xe,Ke){P.disable(xe,Ke),F&&!Ke&&F.kill(),c&&delete Mh[c];var He=lt.indexOf(P);He>=0&&lt.splice(He,1),He===kn&&Yl>0&&kn--,He=0,lt.forEach(function(A){return A.scroller===P.scroller&&(He=1)}),He||zn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),Ke||i.kill()),Et&&[Et,xt,$,ct].forEach(function(A){return A.parentNode&&A.parentNode.removeChild(A)}),Sa===P&&(Sa=0),m&&(ne&&(ne.uncache=1),He=0,lt.forEach(function(A){return A.pin===m&&He++}),He||(ne.spacer=0)),n.onKill&&n.onKill(P)},lt.push(P),P.enable(!1,!1),Ot&&Ot(P),i&&i.add&&!pt){var je=P.update;P.update=function(){P.update=je,ft.cache++,Ce||nt||P.refresh()},Ie.delayedCall(.01,P.update),pt=.01,Ce=nt=0}else P.refresh();m&&$1()},o.register=function(n){return oo||(Ie=n||n_(),t_()&&window.document&&o.enable(),oo=oa),oo},o.defaults=function(n){if(n)for(var i in n)Fl[i]=n[i];return Fl},o.disable=function(n,i){oa=0,lt.forEach(function(a){return a[i?"kill":"disable"](n)}),fn(ht,"wheel",ro),fn(Lt,"scroll",ro),clearInterval(Dl),fn(Lt,"touchcancel",$i),fn(Tt,"touchstart",$i),Il(fn,Lt,"pointerdown,touchstart,mousedown",am),Il(fn,Lt,"pointerup,touchend,mouseup",lm),cc.kill(),Rl(fn);for(var r=0;r<ft.length;r+=3)Ol(fn,ft[r],ft[r+1]),Ol(fn,ft[r],ft[r+2])},o.enable=function(){if(ht=window,Lt=document,ai=Lt.documentElement,Tt=Lt.body,Ie){if(Fa=Ie.utils.toArray,_a=Ie.utils.clamp,yh=Ie.core.context||$i,zu=Ie.core.suppressOverwrites||$i,jh=ht.history.scrollRestoration||"auto",Sh=ht.pageYOffset||0,Ie.core.globals("ScrollTrigger",o),Tt){oa=1,Mo=document.createElement("div"),Mo.style.height="100vh",Mo.style.position="absolute",f_(),B1(),Jt.register(Ie),o.isTouch=Jt.isTouch,Er=Jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xh=Jt.isTouch===1,dn(ht,"wheel",ro),Yh=[ht,Lt,ai,Tt],Ie.matchMedia?(o.matchMedia=function(h){var p=Ie.matchMedia(),f;for(f in h)p.add(f,h[f]);return p},Ie.addEventListener("matchMediaInit",function(){u_(),tf()}),Ie.addEventListener("matchMediaRevert",function(){return c_()}),Ie.addEventListener("matchMedia",function(){gs(0,1),Rs("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return Gu(),Gu})):console.warn("Requires GSAP 3.11.0 or later"),Gu(),dn(Lt,"scroll",ro);var n=Tt.hasAttribute("style"),i=Tt.style,r=i.borderTopStyle,a=Ie.core.Animation.prototype,s,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=dr(Tt),sn.m=Math.round(s.top+sn.sc())||0,Bn.m=Math.round(s.left+Bn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),Dl=setInterval(hm,250),Ie.delayedCall(.5,function(){return Pl=0}),dn(Lt,"touchcancel",$i),dn(Tt,"touchstart",$i),Il(dn,Lt,"pointerdown,touchstart,mousedown",am),Il(dn,Lt,"pointerup,touchend,mouseup",lm),vh=Ie.utils.checkPrefix("transform"),jl.push(vh),oo=Sn(),cc=Ie.delayedCall(.2,gs).pause(),ao=[Lt,"visibilitychange",function(){var h=ht.innerWidth,p=ht.innerHeight;Lt.hidden?(im=h,rm=p):(im!==h||rm!==p)&&ca()},Lt,"DOMContentLoaded",gs,ht,"load",gs,ht,"resize",ca],Rl(dn),lt.forEach(function(h){return h.enable(0,1)}),c=0;c<ft.length;c+=3)Ol(fn,ft[c],ft[c+1]),Ol(fn,ft[c],ft[c+2])}else if(Lt){var u=function h(){o.enable(),Lt.removeEventListener("DOMContentLoaded",h)};Lt.addEventListener("DOMContentLoaded",u)}}},o.config=function(n){"limitCallbacks"in n&&(Uu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Dl)||(Dl=i)&&setInterval(hm,i),"ignoreMobileResize"in n&&(xh=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Rl(fn)||Rl(dn,n.autoRefreshEvents||"none"),Jg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=Wn(n),a=ft.indexOf(r),s=Ds(r);~a&&ft.splice(a,s?6:2),i&&(s?Qi.unshift(ht,i,Tt,i,ai,i):Qi.unshift(r,i))},o.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(ri(n)?Wn(n):n).getBoundingClientRect(),s=a[r?Ss:ws]*i||0;return r?a.right-s>0&&a.left+s<ht.innerWidth:a.bottom-s>0&&a.top+s<ht.innerHeight},o.positionInViewport=function(n,i,r){ri(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),s=a[r?Ss:ws],c=i==null?s/2:i in hc?hc[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+c)/ht.innerWidth:(a.top+c)/ht.innerHeight},o.killAll=function(n){if(lt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ps.killAll||[];Ps={},i.forEach(function(r){return r()})}},o}();dt.version="3.15.0";dt.saveStyles=function(o){return o?Fa(o).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),yh())}}):ii};dt.revert=function(o,e){return tf(!o,e)};dt.create=function(o,e){return new dt(o,e)};dt.refresh=function(o){return o?ca(!0):(oo||dt.register())&&gs(!0)};dt.update=function(o){return++ft.cache&&gr(o===!0?2:0)};dt.clearScrollMemory=h_;dt.maxScroll=function(o,e){return Ji(o,e?Bn:sn)};dt.getScrollFunc=function(o,e){return Wr(Wn(o),e?Bn:sn)};dt.getById=function(o){return Mh[o]};dt.getAll=function(){return lt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!Pi};dt.snapDirectional=ef;dt.addEventListener=function(o,e){var t=Ps[o]||(Ps[o]=[]);~t.indexOf(e)||t.push(e)};dt.removeEventListener=function(o,e){var t=Ps[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};dt.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(u,h){var p=[],f=[],m=Ie.delayedCall(i,function(){h(p,f),p=[],f=[]}).pause();return function(v){p.length||m.restart(!0),p.push(v.trigger),f.push(v),r<=p.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&Tn(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return Tn(r)&&(r=r(),dn(dt,"refresh",function(){return r=e.batchMax()})),Fa(o).forEach(function(c){var u={};for(s in n)u[s]=n[s];u.trigger=c,t.push(dt.create(u))}),t};var _m=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Wu=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Jt.isTouch?" pinch-zoom":""):"none",e===ai&&o(Tt,t)},Ul={auto:1,scroll:1},J1=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ie.core.getCache(r),s=Sn(),c;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r!==Tt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ul[(c=Ci(r)).overflowY]||Ul[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Ds(r)&&(Ul[(c=Ci(r)).overflowY]||Ul[c.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},p_=function(e,t,n,i){return Jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&J1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&dn(Lt,Jt.eventTypes[0],xm,!1,!0)},onDisable:function(){return fn(Lt,Jt.eventTypes[0],xm,!0)}})},Q1=/(input|label|select|textarea)/i,vm,xm=function(e){var t=Q1.test(e.target.tagName);(t||vm)&&(e._gsapAllow=!0,vm=t)},eT=function(e){us(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,s,c,u=Wn(e.target)||ai,h=Ie.core.globals().ScrollSmoother,p=h&&h.get(),f=Er&&(e.content&&Wn(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),m=Wr(u,sn),v=Wr(u,Bn),d=1,g=(Jt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,y=0,w=Tn(i)?function(){return i(s)}:function(){return i||2.8},M,b,E=p_(u,e.type,!0,r),I=function(){return b=!1},D=$i,S=$i,C=function(){c=Ji(u,sn),S=_a(Er?1:0,c),n&&(D=_a(0,Ji(u,Bn))),M=Ts},O=function(){f._gsap.y=aa(parseFloat(f._gsap.y)+m.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},K=function(){if(b){requestAnimationFrame(I);var j=aa(s.deltaY/2),oe=S(m.v-j);if(f&&oe!==m.v+m.offset){m.offset=oe-m.v;var P=aa((parseFloat(f&&f._gsap.y)||0)-m.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",m.cacheID=ft.cache,gr()}return!0}m.offset&&O(),b=!0},H,V,N,Y,te=function(){C(),H.isActive()&&H.vars.scrollY>c&&(m()>c?H.progress(1)&&m(c):H.resetTo("scrollY",c))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(Q){return Er&&Q.type==="touchmove"&&K()||d>1.05&&Q.type!=="touchstart"||s.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){b=!1;var Q=d;d=aa((ht.visualViewport&&ht.visualViewport.scale||1)/g),H.pause(),Q!==d&&Wu(u,d>1.01?!0:n?!1:"x"),V=v(),N=m(),C(),M=Ts},e.onRelease=e.onGestureStart=function(Q,j){if(m.offset&&O(),!j)Y.restart(!0);else{ft.cache++;var oe=w(),P,U;n&&(P=v(),U=P+oe*.05*-Q.velocityX/.227,oe*=_m(v,P,U,Ji(u,Bn)),H.vars.scrollX=D(U)),P=m(),U=P+oe*.05*-Q.velocityY/.227,oe*=_m(m,P,U,Ji(u,sn)),H.vars.scrollY=S(U),H.invalidate().duration(oe).play(.01),(Er&&H.vars.scrollY>=c||P>=c-1)&&Ie.to({},{onUpdate:te,duration:oe})}a&&a(Q)},e.onWheel=function(){H._ts&&H.pause(),Sn()-y>1e3&&(M=0,y=Sn())},e.onChange=function(Q,j,oe,P,U){if(Ts!==M&&C(),j&&n&&v(D(P[2]===j?V+(Q.startX-Q.x):v()+j-P[1])),oe){m.offset&&O();var q=U[2]===oe,ce=q?N+Q.startY-Q.y:m()+oe-U[1],he=S(ce);q&&ce!==he&&(N+=he-ce),m(he)}(oe||j)&&gr()},e.onEnable=function(){Wu(u,n?!1:"x"),dt.addEventListener("refresh",te),dn(ht,"resize",te),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=v.smooth=!1),E.enable()},e.onDisable=function(){Wu(u,!0),fn(ht,"resize",te),dt.removeEventListener("refresh",te),E.kill()},e.lockAxis=e.lockAxis!==!1,s=new Jt(e),s.iOS=Er,Er&&!m()&&m(1),Er&&Ie.ticker.add($i),Y=s._dc,H=Ie.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d_(m,m(),function(){return H.pause()})},onUpdate:gr,onComplete:Y.vars.onComplete}),s};dt.sort=function(o){if(Tn(o))return lt.sort(o);var e=ht.pageYOffset||0;return dt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),lt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};dt.observe=function(o){return new Jt(o)};dt.normalizeScroll=function(o){if(typeof o>"u")return Nn;if(o===!0&&Nn)return Nn.enable();if(o===!1){Nn&&Nn.kill(),Nn=o;return}var e=o instanceof Jt?o:eT(o);return Nn&&Nn.target===e.target&&Nn.kill(),Ds(e.target)&&(Nn=e),e};dt.core={_getVelocityProp:_h,_inputObserver:p_,_scrollers:ft,_proxies:Qi,bridge:{ss:function(){Pi||Rs("scrollStart"),Pi=Sn()},ref:function(){return Mn}}};n_()&&Ie.registerPlugin(dt);pa.registerPlugin(dt);function tT(){document.querySelectorAll(".bento-card, .luxury-card, .service-card, .project-card").forEach(n=>{const i=s=>{const c=n.getBoundingClientRect(),u=s.clientX-c.left,h=s.clientY-c.top;n.style.setProperty("--mouse-x",`${u}px`),n.style.setProperty("--mouse-y",`${h}px`);const p=c.width/2,f=c.height/2,m=(h-f)/f*-5,v=(u-p)/p*5;n.style.transform=`perspective(1000px) rotateX(${m}deg) rotateY(${v}deg) translateY(-4px)`},r=()=>{n.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",n.style.transition="transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},a=()=>{n.style.transition="none"};n.addEventListener("mousemove",i),n.addEventListener("mouseleave",r),n.addEventListener("mouseenter",a)}),document.querySelectorAll(".btn-aurora, .btn-whatsapp, .btn-ghost-outline, .btn-magnetic").forEach(n=>{const i=a=>{const s=n.getBoundingClientRect(),c=a.clientX-s.left-s.width/2,u=a.clientY-s.top-s.height/2;pa.to(n,{x:c*.25,y:u*.25,duration:.25,ease:"power2.out"})},r=()=>{pa.to(n,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.4)"})};n.addEventListener("mousemove",i),n.addEventListener("mouseleave",r)}),document.querySelectorAll(".reveal-on-scroll").forEach(n=>{pa.fromTo(n,{opacity:0,y:35},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 88%",toggleActions:"play none none none"}})})}window.addEventListener("DOMContentLoaded",()=>{dw(),_w(!0),tT(),nT(),iT()});let fo=new Set(["Custom Web Application"]),fc="Immediate (< 2 Weeks)";function nT(){const o=document.querySelectorAll('.chip-btn[data-group="service"]'),e=document.querySelectorAll('.chip-btn[data-group="timeline"]');o.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const i=t.getAttribute("data-value");fo.has(i)?fo.size>1&&(fo.delete(i),t.classList.remove("active")):(fo.add(i),t.classList.add("active"))})}),e.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),e.forEach(i=>i.classList.remove("active")),t.classList.add("active"),fc=t.getAttribute("data-value")})})}function iT(){const o=document.getElementById("client-local-time");if(!o)return;function e(){const t=new Date,n={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0};o.textContent=new Intl.DateTimeFormat("en-US",n).format(t)+" IST"}e(),setInterval(e,1e3)}async function rT(o){o.preventDefault();const e=o.target.querySelector('button[type="submit"]'),t=e?e.innerHTML:"Send Project Inquiry",n=document.getElementById("contactName").value.trim(),i=document.getElementById("contactEmail").value.trim(),r=document.getElementById("contactMessage").value.trim();if(document.getElementById("formFeedback"),!n||!i||!r){Hu("Please complete all required fields.","alert-danger");return}const a=Array.from(fo).join(", ");e&&(e.disabled=!0,e.innerHTML='<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending Inquiry...');try{const s=await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,services:a,timeline:fc,message:r})}),c=await s.json();if(s.ok&&c.success)Hu("✨ Inquiry sent successfully! Ummar will review your project and get back to you within 24 hours.","alert-success"),document.getElementById("contactForm").reset();else throw new Error(c.error||"Failed to send message.")}catch(s){console.warn("Direct API submission error, falling back to mail client:",s),Hu("Direct inquiry received! Opening your email client to confirm dispatch...","alert-info");const c=`Hi Ummar,

My name is ${n} (${i}).

I am looking for: ${a}
Timeline: ${fc}

Project Overview:
${r}`,u=`mailto:ummar1852@gmail.com?subject=${encodeURIComponent("New Project Inquiry from "+n)}&body=${encodeURIComponent(c)}`;setTimeout(()=>{window.location.href=u},1200)}finally{e&&(e.disabled=!1,e.innerHTML=t)}}function sT(){const o=document.getElementById("contactName")?document.getElementById("contactName").value.trim():"",e=Array.from(fo).join(", "),n=`${o?`Hi Ummar, this is ${o}.`:"Hi Ummar,"} I saw your portfolio and would like to discuss a project regarding: ${e} (Timeline: ${fc}).`,i=`https://wa.me/918125763466?text=${encodeURIComponent(n)}`;window.open(i,"_blank")}function Hu(o,e){const t=document.getElementById("formFeedback");t&&(t.textContent=o,t.className=`mt-3 alert ${e} d-block`,setTimeout(()=>{t.className="mt-3 alert d-none"},6e3))}window.handleContactSubmit=rT;window.sendWhatsAppDirect=sT;
