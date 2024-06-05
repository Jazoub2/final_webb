import{t as rt}from"./scheduler.D-uVLz3B.js";import{w as de}from"./index.B056rQ-7.js";import{H as ee,S as he,R as Oe}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ot(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function it(e){return e.split("%25").map(decodeURI).join("%25")}function st(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ie({href:e}){return e.split("#")[0]}const ct=["href","pathname","search","toString","toJSON"];function lt(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(n(i),a[o](i));t();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ct)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const ft="/__data.json",ut=".html__data.json";function dt(e){return e.endsWith(".html")?e.replace(/\.html$/,ut):e.replace(/\/$/,"")+ft}function ht(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function pt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const je=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&V.delete(pe(e)),je(e,t));const V=new Map;function gt(e,t){const n=pe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&V.set(n,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=pt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,t)}function mt(e,t,n){if(V.size>0){const r=pe(e,n),a=V.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);V.delete(r)}}return window.fetch(t,n)}function pe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${ht(...a)}"]`}return r}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${vt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return se(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return se(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=_t.exec(c),[,h,g,d,m]=u;return t.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return se(c)}).join("")}).join("")}/?$`),params:t}}function yt(e){return!/^\([^)]+\)$/.test(e)}function vt(e){return e.slice(1).split("/").filter(yt)}function bt(e,t,n){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<t.length;i+=1){const c=t[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const u=t[i+1],h=a[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([i,[c,f,u]])=>{const{pattern:h,params:g}=wt(i),d={id:i,exec:m=>{const l=h.exec(m);if(l)return bt(l,g,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...f||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function De(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ae(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var xe;const I=((xe=globalThis.__sveltekit_q9dwqi)==null?void 0:xe.base)??"";var Ne;const kt=((Ne=globalThis.__sveltekit_q9dwqi)==null?void 0:Ne.assets)??I,St="1717573583022",$e="sveltekit:snapshot",Ce="sveltekit:scroll",Ve="sveltekit:states",At="sveltekit:pageurl",j="sveltekit:history",q="sveltekit:navigation",K={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},M=location.origin;function qe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ge(){return{x:pageXOffset,y:pageYOffset}}function N(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Re={...K,"":K.hover};function Fe(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function Ge(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Fe(e)}}function le(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||te(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===M&&e.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function Y(e){let t=null,n=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=N(i,"preload-code")),a===null&&(a=N(i,"preload-data")),t===null&&(t=N(i,"keepfocus")),n===null&&(n=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Fe(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Re[r??"off"],preload_data:Re[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(s)}}function Ie(e){const t=de(e);let n=!0;function r(){n=!0,t.update(s=>s)}function a(s){n=!1,t.set(s)}function o(s){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Rt(){const{set:e,subscribe:t}=de(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${kt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==St;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:r}}function te(e,t){return e.origin!==M||!e.pathname.startsWith(t)}const It=-1,Lt=-2,Pt=-3,Tt=-4,Ut=-5,xt=-6;function Nt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,s=!1){if(o===It)return;if(o===Pt)return NaN;if(o===Tt)return 1/0;if(o===Ut)return-1/0;if(o===xt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=n[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=t==null?void 0:t[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<i.length;d+=1)u.add(a(i[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<i.length;d+=2)h.set(a(i[d]),a(i[d+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=a(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const u=i[f];u!==Lt&&(c[f]=a(u))}}else{const c={};r[o]=c;for(const f in i){const u=i[f];c[f]=a(u)}}return r[o]}return a(0)}const He=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...He];const Ot=new Set([...He]);[...Ot];function jt(e){return e.filter(t=>t!=null)}const Dt="x-sveltekit-invalidated",$t="x-sveltekit-trailing-slash";function W(e){return e instanceof ee||e instanceof he?e.status:500}function Ct(e){return e instanceof he?e.text:"Internal Error"}const x=De(Ce)??{},F=De($e)??{},T={url:Ie({}),page:Ie({}),navigating:de(null),updated:Rt()};function me(e){x[e]=ge()}function Vt(e,t){let n=e+1;for(;x[n];)delete x[n],n+=1;for(n=t+1;F[n];)delete F[n],n+=1}function D(e){return location.href=e.href,new Promise(()=>{})}function Le(){}let ne,fe,z,L,ue,$;const Me=[],J=[];let P=null;const Be=[],qt=[];let O=[],y={branch:[],error:null,url:null},_e=!1,X=!1,Pe=!0,G=!1,C=!1,Ke=!1,we=!1,ye,k,A,R,Z;async function Qt(e,t,n){var a,o;document.URL!==location.href&&(location.href=location.href),$=e,ne=Et(e),L=document.documentElement,ue=t,fe=e.nodes[0],z=e.nodes[1],fe(),z(),k=(a=history.state)==null?void 0:a[j],A=(o=history.state)==null?void 0:o[q],k||(k=A=Date.now(),history.replaceState({...history.state,[j]:k,[q]:A},""));const r=x[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Wt(ue,n):Kt(location.href,{replaceState:!0}),Yt()}function Ft(){Me.length=0,we=!1}function Ye(e){J.some(t=>t==null?void 0:t.snapshot)&&(F[e]=J.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function We(e){var t;(t=F[e])==null||t.forEach((n,r)=>{var a,o;(o=(a=J[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function Te(){me(k),Ae(Ce,x),Ye(A),Ae($e,F)}async function ze(e,t,n,r){return B({type:"goto",url:qe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(we=!0)}})}async function Gt(e){return P={id:e.id,promise:Xe(e).then(t=>(t.type==="loaded"&&t.state.error&&(P=null),t))},P.promise}async function ce(e){const t=ne.find(n=>n.exec(Ze(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n==null?void 0:n[1]()))}function Je(e,t){var a;y=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),R=e.props.page,ye=new $.root({target:t,props:{...e.props,stores:T,components:J},hydrate:!0}),We(A);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(o=>o(r)),X=!0}async function Q({url:e,params:t,branch:n,status:r,error:a,route:o,form:s}){let i="never";if(I&&(e.pathname===I||e.pathname===I+"/"))i="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=ot(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:jt(n).map(d=>d.node.component),page:R}};s!==void 0&&(c.props.form=s);let f={},u=!R,h=0;for(let d=0;d<Math.max(n.length,y.branch.length);d+=1){const m=n[d],l=y.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||s!==void 0&&s!==R.form||u)&&(c.props.page={error:a,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:u?f:R.data}),c}async function ve({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const _ of l){const{href:v}=new URL(_,n);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(l,_)=>(i&&(c.route=!0),l[_])}),params:new Proxy(r,{get:(l,_)=>(i&&c.params.add(_),l[_])}),data:(o==null?void 0:o.data)??null,url:lt(n,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,_){let v;l instanceof Request?(v=l.url,_={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,..._}):v=l;const S=new URL(v,n);return i&&d(S.href),S.origin===n.origin&&(v=S.href.slice(n.origin.length)),X?mt(v,S.href,_):gt(v,_)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),t()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ue(e,t,n,r,a,o){if(we)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==y.params[s])return!0;for(const s of a.dependencies)if(Me.some(i=>i(new URL(s))))return!0;return!1}function be(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Ht(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&n.delete(r)}return n}async function Xe({id:e,invalidating:t,url:n,params:r,route:a}){if((P==null?void 0:P.id)===e)return P.promise;const{errors:o,layouts:s,leaf:i}=a,c=[...s,i];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let f=null;const u=y.url?e!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=Ht(y.url,n);let d=!1;const m=c.map((p,w)=>{var U;const b=y.branch[w],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ue(d,h,u,g,(U=b.server)==null?void 0:U.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{f=await tt(n,m)}catch(p){return ae({status:W(p),error:await H(p,{url:n,params:r,route:{id:a.id}}),url:n,route:a})}if(f.type==="redirect")return f}const l=f==null?void 0:f.nodes;let _=!1;const v=c.map(async(p,w)=>{var re;if(!p)return;const b=y.branch[w],E=l==null?void 0:l[w];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ue(_,h,u,g,(re=b.universal)==null?void 0:re.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return ve({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Se;const ke={};for(let oe=0;oe<w;oe+=1)Object.assign(ke,(Se=await v[oe])==null?void 0:Se.data);return ke},server_data_node:be(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(w){if(w instanceof Oe)return{type:"redirect",location:w.location};let b=W(w),E;if(l!=null&&l.includes(w))b=w.status??b,E=w.error;else if(w instanceof ee)E=w.body;else{if(await T.updated.check())return await D(n);E=await H(w,{params:r,url:n,route:{id:a.id}})}const U=await Mt(p,S,o);return U?await Q({url:n,params:r,branch:S.slice(0,U.idx).concat(U.node),status:b,error:E,route:a}):await et(n,{id:a.id},E,b)}else S.push(void 0);return await Q({url:n,params:r,branch:S,status:200,error:null,route:a,form:t?void 0:null})}async function Mt(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:t,url:n,route:r}){const a={};let o=null;if($.server_loads[0]===0)try{const f=await tt(n,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(n.origin!==M||n.pathname!==location.pathname||_e)&&await D(n)}const i=await ve({loader:fe,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:be(o)}),c={node:await z(),loader:z,universal:null,server:null,data:null};return await Q({url:n,params:a,branch:[i,c],status:e,error:t,route:null})}function Ee(e,t){if(!e||te(e,I))return;let n;try{n=$.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=Ze(n);for(const a of ne){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:t,route:a,params:st(o),url:e}}}function Ze(e){return it(e.slice(I.length)||"/")}function Qe({url:e,type:t,intent:n,delta:r}){let a=!1;const o=at(y,n,e,t);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return G||Be.forEach(i=>i(s)),a?null:o}async function B({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Le,block:u=Le}){const h=Ee(t,!1),g=Qe({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!g){u();return}const d=k,m=A;f(),G=!0,X&&T.navigating.set(g.navigation),Z=c;let l=h&&await Xe(h);if(!l){if(te(t,I))return await D(t);l=await et(t,{id:null},await H(new he(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(h==null?void 0:h.url)||t,Z!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await ae({status:500,error:await H(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ze(new URL(l.location,t).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&await D(t);if(Ft(),me(d),Ye(m),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),s=n?n.state:s,!n){const p=o?0:1,w={[j]:k+=p,[q]:A+=p,[Ve]:s};(o?history.replaceState:history.pushState).call(history,w,"",t),o||Vt(k,A)}if(P=null,l.props.page.state=s,X){y=l.state,l.props.page&&(l.props.page.url=t);const p=(await Promise.all(qt.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){O=O.filter(b=>!p.includes(b))};p.push(w),O.push(...p)}ye.$set(l.props),Ke=!0}else Je(l,ue);const{activeElement:_}=document;await rt();const v=n?n.scroll:a?ge():null;if(Pe){const p=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&zt(),Pe=!0,l.props.page&&(R=l.props.page),G=!1,e==="popstate"&&We(A),g.fulfil(void 0),O.forEach(p=>p(g.navigation)),T.navigating.set(null)}async function et(e,t,n,r){return e.origin===M&&e.pathname===location.pathname&&!_e?await ae({status:r,error:n,url:e,route:t}):await D(e)}function Bt(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function t(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",t),L.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(ce(s.target.href),n.unobserve(s.target))},{threshold:0});function r(o,s){const i=Ge(o,L);if(!i)return;const{url:c,external:f,download:u}=le(i,I);if(f||u)return;const h=Y(i);if(!h.reload)if(s<=h.preload_data){const g=Ee(c,!1);g&&Gt(g)}else s<=h.preload_code&&ce(c.pathname)}function a(){n.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=le(o,I);if(i||c)continue;const f=Y(o);f.reload||(f.preload_code===K.viewport&&n.observe(o),f.preload_code===K.eager&&ce(s.pathname))}}O.push(a),a()}function H(e,t){if(e instanceof ee)return e.body;const n=W(e),r=Ct(e);return $.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Kt(e,t={}){return e=qe(e),e.origin!==M?Promise.reject(new Error("goto: invalid URL")):ze(e,t,0)}function Yt(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Te(),!G){const a=at(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Be.forEach(s=>s(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Te()}),(t=navigator.connection)!=null&&t.saveData||Bt(),L.addEventListener("click",n=>{var g;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ge(n.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=le(r,I);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){Qe({url:a,type:"link"})?G=!0:n.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ie(location)){const[,d]=y.url.href.split("#");if(d===h){n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(C=!0,me(k),e(a),!c.replace_state)return;C=!1}n.preventDefault(),B({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(te(s,I))return;const i=n.target,c=Y(i);if(c.reload)return;n.preventDefault(),n.stopPropagation();const f=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&f.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),B({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[j]){const a=n.state[j];if(Z={},a===k)return;const o=x[a],s=n.state[Ve]??{},i=new URL(n.state[At]??location.href),c=n.state[q],f=ie(location)===ie(y.url);if(c===A&&(Ke||f)){e(i),x[k]=ge(),o&&scrollTo(o.x,o.y),s!==R.state&&(R={...R,state:s},ye.$set({page:R})),k=a;return}const h=a-k;await B({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Z})}else if(!C){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[j]:++k,[q]:A},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&T.navigating.set(null)});function e(n){y.url=n,T.page.set({...R,url:n}),T.page.notify()}}async function Wt(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:s,form:i}){_e=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const u=r.map(async(d,m)=>{const l=s[m];return l!=null&&l.uses&&(l.uses=nt(l.uses)),ve({loader:$.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:be(l)})}),h=await Promise.all(u),g=ne.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}f=await Q({url:c,params:a,branch:h,status:t,error:n,form:i,route:g??null})}catch(u){if(u instanceof Oe){await D(new URL(u.location,location.href));return}f=await ae({status:W(u),error:await H(u,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),Je(f,e)}async function tt(e,t){var a;const n=new URL(e);n.pathname=dt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append($t,"1"),n.searchParams.append(Dt,t.map(o=>o?"1":"0").join(""));const r=await je(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ee(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(g){return Nt(g,{Promise:d=>new Promise((m,l)=>{s.set(d,{fulfil:m,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const l=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=nt(_.uses),_.data=f(_.data))}),o(l);else if(l.type==="chunk"){const{id:_,data:v,error:S}=l,p=s.get(_);s.delete(_),S?p.reject(f(S)):p.fulfil(f(v))}}}})}function nt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function zt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function at(e,t,n,r){var c,f;let a,o;const s=new Promise((u,h)=>{a=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:r,complete:s},fulfil:a,reject:o}}export{Qt as a,T as s};
