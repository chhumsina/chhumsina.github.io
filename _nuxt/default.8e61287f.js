import{H as z,d as rt,e as Ue,m as de,S as J,o as y,u as Q,P as we,b as q,T as ot,t as Be,p as We,l as $,F as st,N as Fe,a as it,C as ut,f as Y,c as dt,g as ct}from"./use-outside-click.e1378769.js";import{h as O,r as p,g as R,i as f,f as F,k as N,z as S,F as te,I as ce,j as V,l as M,J as ft,K as pt,L as vt,n as ht,s as ie,o as x,c as E,a as i,b as H,w as Z,m as j,q as re,M as je,N as Re,d as ee,t as P,O as mt,P as gt}from"./entry.2e2f2bfa.js";var ye=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ye||{});let Ce=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:l,...r}=e,o={"aria-hidden":(l&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return z({ourProps:o,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function wt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function be(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=be();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var ue=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ue||{});function xt(){let e=p(0);return rt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function qe(e,t,n,l){Ue.isServer||R(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}function Ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function yt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ye(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var Ge=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ge||{});let oe=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:p(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=p(null);l({el:r,$el:r});let o=f(()=>de(r)),s=p(!1);F(()=>s.value=!0),N(()=>s.value=!1),_t({ownerDocument:o},f(()=>s.value&&!!(e.features&16)));let a=Et({ownerDocument:o,container:r,initialFocus:f(()=>e.initialFocus)},f(()=>s.value&&!!(e.features&2)));kt({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:a},f(()=>s.value&&!!(e.features&8)));let d=xt();function u(g){let b=y(r);b&&(_=>_())(()=>{Q(d.value,{[ue.Forwards]:()=>{we(b,q.First,{skipElements:[g.relatedTarget]})},[ue.Backwards]:()=>{we(b,q.Last,{skipElements:[g.relatedTarget]})}})})}let c=p(!1);function m(g){g.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function h(g){if(!s.value)return;let b=Ye(e.containers);y(r)instanceof HTMLElement&&b.add(y(r));let _=g.relatedTarget;_ instanceof HTMLElement&&_.dataset.headlessuiFocusGuard!=="true"&&(Je(b,_)||(c.value?we(y(r),Q(d.value,{[ue.Forwards]:()=>q.Next,[ue.Backwards]:()=>q.Previous})|q.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&J(g.target)))}return()=>{let g={},b={ref:r,onKeydown:m,onFocusout:h},{features:_,initialFocus:T,containers:ne,...L}=e;return S(te,[!!(_&4)&&S(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ye.Focusable}),z({ourProps:b,theirProps:{...t,...L},slot:g,attrs:t,slots:n,name:"FocusTrap"}),!!(_&4)&&S(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ye.Focusable})])}}}),{features:Ge}),I=[];yt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&I[0]!==t.target&&(I.unshift(t.target),I=I.filter(n=>n!=null&&n.isConnected),I.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function bt(e){let t=p(I.slice());return ce([e],([n],[l])=>{l===!0&&n===!1?Ie(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=I.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function _t({ownerDocument:e},t){let n=bt(t);F(()=>{R(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&J(n())},{flush:"post"})}),N(()=>{t.value&&J(n())})}function Et({ownerDocument:e,container:t,initialFocus:n},l){let r=p(null),o=p(!1);return F(()=>o.value=!0),N(()=>o.value=!1),F(()=>{ce([t,n,l],(s,a)=>{if(s.every((u,c)=>(a==null?void 0:a[c])===u)||!l.value)return;let d=y(t);d&&Ie(()=>{var u,c;if(!o.value)return;let m=y(n),h=(u=e.value)==null?void 0:u.activeElement;if(m){if(m===h){r.value=h;return}}else if(d.contains(h)){r.value=h;return}m?J(m):we(d,q.First|q.NoScroll)===ot.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),r}function kt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;qe((o=e.value)==null?void 0:o.defaultView,"focus",s=>{if(!r.value)return;let a=Ye(n);y(t)instanceof HTMLElement&&a.add(y(t));let d=l.value;if(!d)return;let u=s.target;u&&u instanceof HTMLElement?Je(a,u)?(l.value=u,J(u)):(s.preventDefault(),s.stopPropagation(),J(d)):J(l.value)},!0)}function Je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Le=new Map,se=new Map;function Ne(e,t=p(!0)){R(n=>{var l;if(!t.value)return;let r=y(e);if(!r)return;n(function(){var s;if(!r)return;let a=(s=se.get(r))!=null?s:1;if(a===1?se.delete(r):se.set(r,a-1),a!==1)return;let d=Le.get(r);d&&(d["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",d["aria-hidden"]),r.inert=d.inert,Le.delete(r))});let o=(l=se.get(r))!=null?l:0;se.set(r,o+1),o===0&&(Le.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let Qe=Symbol("ForcePortalRootContext");function St(){return M(Qe,!1)}let Ve=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return V(Qe,e.force),()=>{let{force:l,...r}=e;return z({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Tt(e){let t=de(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Lt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=p(null),r=f(()=>de(l)),o=St(),s=M(Ke,null),a=p(o===!0||s==null?Tt(l.value):s.resolveTarget());R(()=>{o||s!=null&&(a.value=s.resolveTarget())});let d=M(Ae,null);return F(()=>{let u=y(l);u&&d&&N(d.register(u))}),N(()=>{var u,c;let m=(u=r.value)==null?void 0:u.getElementById("headlessui-portal-root");m&&a.value===m&&a.value.children.length<=0&&((c=a.value.parentElement)==null||c.removeChild(a.value))}),()=>{if(a.value===null)return null;let u={ref:l,"data-headlessui-portal":""};return S(ft,{to:a.value},z({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Ae=Symbol("PortalParentContext");function $t(){let e=M(Ae,null),t=p([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let s=t.value.indexOf(o);s!==-1&&t.value.splice(s,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,O({name:"PortalWrapper",setup(o,{slots:s}){return V(Ae,r),()=>{var a;return(a=s.default)==null?void 0:a.call(s)}}})]}let Ke=Symbol("PortalGroupContext"),Ft=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=pt({resolveTarget(){return e.target}});return V(Ke,l),()=>{let{target:r,...o}=e;return z({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Xe=Symbol("StackContext");var Pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Pe||{});function Ct(){return M(Xe,()=>{})}function At({type:e,enabled:t,element:n,onUpdate:l}){let r=Ct();function o(...s){l==null||l(...s),r(...s)}F(()=>{ce(t,(s,a)=>{s?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&o(1,e,n)}),V(Xe,o)}let Pt=Symbol("DescriptionContext");function Mt({slot:e=p({}),name:t="Description",props:n={}}={}){let l=p([]);function r(o){return l.value.push(o),()=>{let s=l.value.indexOf(o);s!==-1&&l.value.splice(s,1)}}return V(Pt,{register:r,slot:e,name:t,props:n}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function Ot(e){let t=vt(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Bt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let s=t[r].call(n,...o);s&&(n=s,l.forEach(a=>a()))}}}function Dt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function Ht(){if(!wt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function r(s){return l.containers.flatMap(a=>a()).some(a=>a.contains(s))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",s=>{if(s.target instanceof HTMLElement)try{let a=s.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),u=t.querySelector(d);u&&!r(u)&&(o=u)}catch{}},!0),n.addEventListener(t,"touchmove",s=>{s.target instanceof HTMLElement&&!r(s.target)&&s.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function jt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Rt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let G=Bt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:be(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Rt(n)},r=[Ht(),Dt(),jt()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});G.subscribe(()=>{let e=G.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&G.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&G.dispatch("TEARDOWN",n)}});function Nt(e,t,n){let l=Ot(G),r=f(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return ce([e,t],([o,s],[a],d)=>{if(!o||!s)return;G.dispatch("PUSH",o,n);let u=!1;d(()=>{u||(G.dispatch("POP",a??o,n),u=!0)})},{immediate:!0}),r}function Vt({defaultContainers:e=[],portals:t}={}){let n=p(null),l=de(n);function r(){var o;let s=[];for(let a of e)a!==null&&(a instanceof HTMLElement?s.push(a):"value"in a&&a.value instanceof HTMLElement&&s.push(a.value));if(t!=null&&t.value)for(let a of t.value)s.push(a);for(let a of(o=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?o:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(a.contains(y(n))||s.some(d=>a.contains(d))||s.push(a));return s}return{resolveContainers:r,contains(o){return r().some(s=>s.contains(o))},mainTreeNodeRef:n,MainTreeNode(){return S(Ce,{features:ye.Hidden,ref:n})}}}var zt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(zt||{});let Me=Symbol("DialogContext");function Ze(e){let t=M(Me,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ze),n}return t}let me="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ut=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:me},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${Be()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o;let s=p(!1);F(()=>{s.value=!0});let a=p(0),d=We(),u=f(()=>e.open===me&&d!==null?(d.value&$.Open)===$.Open:e.open),c=p(null),m=f(()=>de(c));if(r({el:c,$el:c}),!(e.open!==me||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===me?void 0:e.open}`);let h=f(()=>s.value&&u.value?0:1),g=f(()=>h.value===0),b=f(()=>a.value>1),_=M(Me,null)!==null,[T,ne]=$t(),{resolveContainers:L,mainTreeNodeRef:U,MainTreeNode:fe}=Vt({portals:T,defaultContainers:[f(()=>{var v;return(v=k.panelRef.value)!=null?v:c.value})]}),pe=f(()=>b.value?"parent":"leaf"),le=f(()=>d!==null?(d.value&$.Closing)===$.Closing:!1),Ee=f(()=>_||le.value?!1:g.value),ve=f(()=>{var v,w,C;return(C=Array.from((w=(v=m.value)==null?void 0:v.querySelectorAll("body > *"))!=null?w:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains(y(U))&&A instanceof HTMLElement))!=null?C:null});Ne(ve,Ee);let ke=f(()=>b.value?!0:g.value),Se=f(()=>{var v,w,C;return(C=Array.from((w=(v=m.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(A=>A.contains(y(U))&&A instanceof HTMLElement))!=null?C:null});Ne(Se,ke),At({type:"Dialog",enabled:f(()=>h.value===0),element:c,onUpdate:(v,w)=>{if(w==="Dialog")return Q(v,{[Pe.Add]:()=>a.value+=1,[Pe.Remove]:()=>a.value-=1})}});let Te=Mt({name:"DialogDescription",slot:f(()=>({open:u.value}))}),K=p(null),k={titleId:K,panelRef:p(null),dialogState:h,setTitleId(v){K.value!==v&&(K.value=v)},close(){t("close",!1)}};V(Me,k);let ae=f(()=>!(!g.value||b.value));st(L,(v,w)=>{k.close(),ht(()=>w==null?void 0:w.focus())},ae);let B=f(()=>!(b.value||h.value!==0));qe((o=m.value)==null?void 0:o.defaultView,"keydown",v=>{B.value&&(v.defaultPrevented||v.key===it.Escape&&(v.preventDefault(),v.stopPropagation(),k.close()))});let X=f(()=>!(le.value||h.value!==0||_));return Nt(m,X,v=>{var w;return{containers:[...(w=v.containers)!=null?w:[],L]}}),R(v=>{if(h.value!==0)return;let w=y(c);if(!w)return;let C=new ResizeObserver(A=>{for(let he of A){let D=he.target.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&k.close()}});C.observe(w),v(()=>C.disconnect())}),()=>{let{id:v,open:w,initialFocus:C,...A}=e,he={...n,ref:c,id:v,role:"dialog","aria-modal":h.value===0?!0:void 0,"aria-labelledby":K.value,"aria-describedby":Te.value},D={open:h.value===0};return S(Ve,{force:!0},()=>[S(Lt,()=>S(Ft,{target:c.value},()=>S(Ve,{force:!1},()=>S(oe,{initialFocus:C,containers:L,features:g.value?Q(pe.value,{parent:oe.features.RestoreFocus,leaf:oe.features.All&~oe.features.FocusLock}):oe.features.None},()=>S(ne,{},()=>z({ourProps:he,theirProps:{...A,...n},slot:D,attrs:n,slots:l,visible:h.value===0,features:Fe.RenderStrategy|Fe.Static,name:"Dialog"})))))),S(fe)])}}}),Wt=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${Be()}`}},setup(e,{attrs:t,slots:n,expose:l}){let r=Ze("DialogPanel");l({el:r.panelRef,$el:r.panelRef});function o(s){s.stopPropagation()}return()=>{let{id:s,...a}=e,d={id:s,ref:r.panelRef,onClick:o};return z({ourProps:d,theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function ge(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Oe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Oe||{});function It(e,t){let n=be();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[o,s]=[l,r].map(a=>{let[d=0]=a.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return d});return o!==0?n.setTimeout(()=>t("finished"),o+s):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ze(e,t,n,l,r,o){let s=be(),a=o!==void 0?qt(o):()=>{};return ge(e,...r),$e(e,...t,...n),s.nextFrame(()=>{ge(e,...n),$e(e,...l),s.add(It(e,d=>(ge(e,...l,...t),$e(e,...r),a(d))))}),s.add(()=>ge(e,...t,...n,...l,...r)),s.add(()=>a("cancelled")),s.dispose}function W(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let De=Symbol("TransitionContext");var Yt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Yt||{});function Gt(){return M(De,null)!==null}function Jt(){let e=M(De,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Qt(){let e=M(He,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let He=Symbol("NestingContext");function _e(e){return"children"in e?_e(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function et(e){let t=p([]),n=p(!1);F(()=>n.value=!0),N(()=>n.value=!1);function l(o,s=Y.Hidden){let a=t.value.findIndex(({id:d})=>d===o);a!==-1&&(Q(s,{[Y.Unmount](){t.value.splice(a,1)},[Y.Hidden](){t.value[a].state="hidden"}}),!_e(t)&&n.value&&(e==null||e()))}function r(o){let s=t.value.find(({id:a})=>a===o);return s?s.state!=="visible"&&(s.state="visible"):t.value.push({id:o,state:"visible"}),()=>l(o,Y.Unmount)}return{children:t,register:r,unregister:l}}let tt=Fe.RenderStrategy,xe=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let o=p(0);function s(){o.value|=$.Opening,t("beforeEnter")}function a(){o.value&=~$.Opening,t("afterEnter")}function d(){o.value|=$.Closing,t("beforeLeave")}function u(){o.value&=~$.Closing,t("afterLeave")}if(!Gt()&&ut())return()=>S(nt,{...e,onBeforeEnter:s,onAfterEnter:a,onBeforeLeave:d,onAfterLeave:u},l);let c=p(null),m=f(()=>e.unmount?Y.Unmount:Y.Hidden);r({el:c,$el:c});let{show:h,appear:g}=Jt(),{register:b,unregister:_}=Qt(),T=p(h.value?"visible":"hidden"),ne={value:!0},L=Be(),U={value:!1},fe=et(()=>{!U.value&&T.value!=="hidden"&&(T.value="hidden",_(L),u())});F(()=>{let k=b(L);N(k)}),R(()=>{if(m.value===Y.Hidden&&L){if(h.value&&T.value!=="visible"){T.value="visible";return}Q(T.value,{hidden:()=>_(L),visible:()=>b(L)})}});let pe=W(e.enter),le=W(e.enterFrom),Ee=W(e.enterTo),ve=W(e.entered),ke=W(e.leave),Se=W(e.leaveFrom),Te=W(e.leaveTo);F(()=>{R(()=>{if(T.value==="visible"){let k=y(c);if(k instanceof Comment&&k.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function K(k){let ae=ne.value&&!g.value,B=y(c);!B||!(B instanceof HTMLElement)||ae||(U.value=!0,h.value&&s(),h.value||d(),k(h.value?ze(B,pe,le,Ee,ve,X=>{U.value=!1,X===Oe.Finished&&a()}):ze(B,ke,Se,Te,ve,X=>{U.value=!1,X===Oe.Finished&&(_e(fe)||(T.value="hidden",_(L),u()))})))}return F(()=>{ce([h],(k,ae,B)=>{K(B),ne.value=!1},{immediate:!0})}),V(He,fe),dt(f(()=>Q(T.value,{visible:$.Open,hidden:$.Closed})|o.value)),()=>{let{appear:k,show:ae,enter:B,enterFrom:X,enterTo:v,entered:w,leave:C,leaveFrom:A,leaveTo:he,...D}=e,lt={ref:c},at={...D,...g.value&&h.value&&Ue.isServer?{class:ie([n.class,D.class,...pe,...le])}:{}};return z({theirProps:at,ourProps:lt,slot:{},slots:l,attrs:n,features:tt,visible:T.value==="visible",name:"TransitionChild"})}}}),Kt=xe,nt=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=We(),o=f(()=>e.show===null&&r!==null?(r.value&$.Open)===$.Open:e.show);R(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let s=p(o.value?"visible":"hidden"),a=et(()=>{s.value="hidden"}),d=p(!0),u={show:o,appear:f(()=>e.appear||!d.value)};return F(()=>{R(()=>{d.value=!1,o.value?s.value="visible":_e(a)||(s.value="hidden")})}),V(He,a),V(De,u),()=>{let c=ct(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return z({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(Kt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...c},l.default)]},attrs:{},features:tt,visible:s.value==="visible",name:"Transition"})}}});function Xt(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"})])}function Zt(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}function en(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"})])}function tn(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})])}function nn(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"})])}function ln(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}function an(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}function rn(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})])}function on(e,t){return x(),E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})])}const sn=i("div",{class:"fixed inset-0 bg-gray-900/80"},null,-1),un={class:"fixed inset-0 flex"},dn={class:"absolute left-full top-0 flex w-16 justify-center pt-5"},cn=i("span",{class:"sr-only"},"Close sidebar",-1),fn={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10"},pn=i("div",{class:"flex h-16 shrink-0 items-center"},[i("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),vn={class:"flex flex-1 flex-col"},hn={role:"list",class:"flex flex-1 flex-col gap-y-7"},mn={role:"list",class:"-mx-2 space-y-1"},gn=["href"],wn=i("div",{class:"text-xs font-semibold leading-6 text-gray-400"},"Your teams",-1),xn={role:"list",class:"-mx-2 mt-2 space-y-1"},yn=["href"],bn={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},_n={class:"truncate"},En=i("li",{class:"-mx-6 mt-auto"},[i("a",{href:"#",class:"flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"},[i("img",{class:"h-8 w-8 rounded-full bg-gray-800",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}),i("span",{class:"sr-only"},"Your profile"),i("span",{"aria-hidden":"true"},"Tom Cook")])],-1),kn={class:"hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col"},Sn={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5"},Tn=i("div",{class:"flex h-16 shrink-0 items-center"},[i("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),Ln={class:"flex flex-1 flex-col"},$n={role:"list",class:"flex flex-1 flex-col gap-y-7"},Fn={role:"list",class:"-mx-2 space-y-1"},Cn=["href"],An=i("div",{class:"text-xs font-semibold leading-6 text-gray-400"},"Your teams",-1),Pn={role:"list",class:"-mx-2 mt-2 space-y-1"},Mn=["href"],On={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},Bn={class:"truncate"},Dn=gt('<li class="-mx-6 mt-auto"><a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"><img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""><span class="sr-only">Your profile</span><span aria-hidden="true">Tom Cook</span></a></li>',1),Hn={class:"xl:pl-72"},jn={class:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8"},Rn=i("span",{class:"sr-only"},"Open sidebar",-1),Nn={class:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6"},Vn={class:"flex flex-1",action:"#",method:"GET"},zn=i("label",{for:"search-field",class:"sr-only"},"Search",-1),Un={class:"relative w-full"},Wn=i("input",{id:"search-field",class:"block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm",placeholder:"Search...",type:"search",name:"search"},null,-1),qn={class:"lg:pr-96"},In={class:"bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"},Yn=i("header",{class:"flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"},[i("h2",{class:"text-base font-semibold leading-7 text-white"},"Activity feed"),i("a",{href:"#",class:"text-sm font-semibold leading-6 text-indigo-400"},"View all")],-1),Gn={role:"list",class:"divide-y divide-white/5"},Jn={class:"flex items-center gap-x-3"},Qn=["src"],Kn={class:"flex-auto truncate text-sm font-semibold leading-6 text-white"},Xn=["datetime"],Zn={class:"mt-3 truncate text-sm text-gray-500"},el={class:"text-gray-400"},tl={class:"font-mono text-gray-400"},nl={class:"text-gray-400"},rl={__name:"default",setup(e){const t=[{name:"Projects",href:"projects",icon:en,current:!1},{name:"Deployments",href:"#",icon:nn,current:!0},{name:"Activity",href:"#",icon:ln,current:!1},{name:"Domains",href:"#",icon:tn,current:!1},{name:"Usage",href:"#",icon:Xt,current:!1},{name:"Settings",href:"#",icon:Zt,current:!1}],n=[{id:1,name:"Planetaria",href:"#",initial:"P",current:!1},{id:2,name:"Protocol",href:"#",initial:"P",current:!1},{id:3,name:"Tailwind Labs",href:"#",initial:"T",current:!1}],l=[{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},projectName:"ios-app",commit:"2d89f0c8",branch:"main",date:"1h",dateTime:"2023-01-23T11:00"}],r=p(!1);return(o,s)=>(x(),E("div",null,[H(j(nt),{as:"template",show:r.value},{default:Z(()=>[H(j(Ut),{as:"div",class:"relative z-50 xl:hidden",onClose:s[1]||(s[1]=a=>r.value=!1)},{default:Z(()=>[H(j(xe),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Z(()=>[sn]),_:1}),i("div",un,[H(j(xe),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:Z(()=>[H(j(Wt),{class:"relative mr-16 flex w-full max-w-xs flex-1"},{default:Z(()=>[H(j(xe),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Z(()=>[i("div",dn,[i("button",{type:"button",class:"-m-2.5 p-2.5",onClick:s[0]||(s[0]=a=>r.value=!1)},[cn,H(j(an),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),i("div",fn,[pn,i("nav",vn,[i("ul",hn,[i("li",null,[i("ul",mn,[(x(),E(te,null,re(t,a=>i("li",{key:a.name},[i("a",{href:a.href,class:ie([a.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[(x(),je(Re(a.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),ee(" "+P(a.name),1)],10,gn)])),64))])]),i("li",null,[wn,i("ul",xn,[(x(),E(te,null,re(n,a=>i("li",{key:a.name},[i("a",{href:a.href,class:ie([a.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[i("span",bn,P(a.initial),1),i("span",_n,P(a.name),1)],10,yn)])),64))])]),En])])])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),i("div",kn,[i("div",Sn,[Tn,i("nav",Ln,[i("ul",$n,[i("li",null,[i("ul",Fn,[(x(),E(te,null,re(t,a=>i("li",{key:a.name},[i("a",{href:a.href,class:ie([a.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[(x(),je(Re(a.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),ee(" "+P(a.name),1)],10,Cn)])),64))])]),i("li",null,[An,i("ul",Pn,[(x(),E(te,null,re(n,a=>i("li",{key:a.name},[i("a",{href:a.href,class:ie([a.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[i("span",On,P(a.initial),1),i("span",Bn,P(a.name),1)],10,Mn)])),64))])]),Dn])])])]),i("div",Hn,[i("div",jn,[i("button",{type:"button",class:"-m-2.5 p-2.5 text-white xl:hidden",onClick:s[2]||(s[2]=a=>r.value=!0)},[Rn,H(j(rn),{class:"h-5 w-5","aria-hidden":"true"})]),i("div",Nn,[i("form",Vn,[zn,i("div",Un,[H(j(on),{class:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500","aria-hidden":"true"}),Wn])])])]),i("main",qn,[mt(o.$slots,"default")]),i("aside",In,[Yn,i("ul",Gn,[(x(),E(te,null,re(l,a=>i("li",{key:a.commit,class:"px-4 py-4 sm:px-6 lg:px-8"},[i("div",Jn,[i("img",{src:a.user.imageUrl,alt:"",class:"h-6 w-6 flex-none rounded-full bg-gray-800"},null,8,Qn),i("h3",Kn,P(a.user.name),1),i("time",{datetime:a.dateTime,class:"flex-none text-xs text-gray-600"},P(a.date),9,Xn)]),i("p",Zn,[ee(" Pushed to "),i("span",el,P(a.projectName),1),ee(" ("),i("span",tl,P(a.commit),1),ee(" on "),i("span",nl,P(a.branch),1),ee(") ")])])),64))])])])]))}};export{rl as default};
