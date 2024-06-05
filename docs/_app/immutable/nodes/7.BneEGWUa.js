import{s as K,n as m}from"../chunks/scheduler.D-uVLz3B.js";import{S as M,i as O,e as y,c as b,a as E,d as f,l as I,g as N,h as s,o as D,t as v,s as L,b as w,f as R,p as x}from"../chunks/index.BM6PkBpE.js";import{e as k}from"../chunks/each.D6YF6ztN.js";function S(c,r,n){const e=c.slice();return e[2]=r[n],e[4]=n,e}function T(c,r,n){const e=c.slice();return e[5]=r[n],e}function $(c,r,n){const e=c.slice();return e[8]=r[n],e[4]=n,e}function P(c){return{c:m,l:m,m,p:m,d:m}}function U(c){let r,n=k(c[1]()),e=[];for(let l=0;l<n.length;l+=1)e[l]=q(T(c,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=x()},l(l){for(let a=0;a<e.length;a+=1)e[a].l(l);r=x()},m(l,a){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,a);N(l,r,a)},p(l,a){if(a&2){n=k(l[1]());let t;for(t=0;t<n.length;t+=1){const o=T(l,n,t);e[t]?e[t].p(o,a):(e[t]=q(o),e[t].c(),e[t].m(r.parentNode,r))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&f(r),D(e,l)}}}function j(c){let r=c[8][c[4]]+"",n;return{c(){n=v(r)},l(e){n=w(e,r)},m(e,l){N(e,n,l)},p:m,d(e){e&&f(n)}}}function q(c){let r,n=k(c[5]),e=[];for(let l=0;l<n.length;l+=1)e[l]=j($(c,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=x()},l(l){for(let a=0;a<e.length;a+=1)e[a].l(l);r=x()},m(l,a){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,a);N(l,r,a)},p(l,a){if(a&2){n=k(l[5]);let t;for(t=0;t<n.length;t+=1){const o=$(l,n,t);e[t]?e[t].p(o,a):(e[t]=j(o),e[t].c(),e[t].m(r.parentNode,r))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&f(r),D(e,l)}}}function A(c){let r,n,e,l=c[2].name+"",a,t,o,i=c[2].type+"",h,d,z,B;function C(u,p){return u[2].input.length>1?U:P}let g=C(c)(c);return{c(){r=y("ul"),n=y("li"),e=v("Name: "),a=v(l),t=y("br"),o=v(`\r
                        Type: `),h=v(i),d=y("br"),z=L(),g.c(),B=L()},l(u){r=b(u,"UL",{});var p=E(r);n=b(p,"LI",{});var _=E(n);e=w(_,"Name: "),a=w(_,l),t=b(_,"BR",{}),o=w(_,`\r
                        Type: `),h=w(_,i),d=b(_,"BR",{}),z=R(_),g.l(_),_.forEach(f),B=R(p),p.forEach(f)},m(u,p){N(u,r,p),s(r,n),s(n,e),s(n,a),s(n,t),s(n,o),s(n,h),s(n,d),s(n,z),g.m(n,null),s(r,B)},p(u,p){g.p(u,p)},d(u){u&&f(r),g.d()}}}function V(c){let r,n,e,l=k(c[0]),a=[];for(let t=0;t<l.length;t+=1)a[t]=A(S(c,l,t));return{c(){r=y("body"),n=y("main"),e=y("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){r=b(t,"BODY",{class:!0});var o=E(r);n=b(o,"MAIN",{class:!0});var i=E(n);e=b(i,"DIV",{class:!0});var h=E(e);for(let d=0;d<a.length;d+=1)a[d].l(h);h.forEach(f),i.forEach(f),o.forEach(f),this.h()},h(){I(e,"class","control_container svelte-1k4cilz"),I(n,"class","svelte-1k4cilz"),I(r,"class","svelte-1k4cilz")},m(t,o){N(t,r,o),s(r,n),s(n,e);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(e,null)},p(t,[o]){if(o&3){l=k(t[0]);let i;for(i=0;i<l.length;i+=1){const h=S(t,l,i);a[i]?a[i].p(h,o):(a[i]=A(h),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=l.length}},i:m,o:m,d(t){t&&f(r),D(a,t)}}}function Y(c){let r=[{name:"top-block",type:"shield",input:{first:"w"}},{name:"left-block",type:"shield",input:{first:"a"}},{name:"down-block",type:"shield",input:{first:"s"}},{name:"right-block",type:"shield",input:{first:"d"}},{name:"left-dash",type:"movement",input:{first:"space",second:"left-arrow-key"}},{name:"right-dash",type:"movement",input:{first:"space",second:"right-arrow-key"}},{name:"boulder-hold",type:"enabler",input:{first:"shift-key"}},{name:"boulder-dash",type:"shift-attack",input:{first:"space-key",second:"arrow-key"}},{name:"boulder-smash",type:"shift-attack",input:{first:"enter-key"}},{name:"boulder-throw",type:"shift-attack",input:{first:"delete-key"}},{name:"push",type:"basic",input:{first:"f"}},{name:"recover",type:"basic",input:{first:"j"}}];function n(){let e=[];for(let l=0;l<r.length;l++)e.push(r[l].input);return e}return[r,n]}class Q extends M{constructor(r){super(),O(this,r,Y,V,K,{})}}export{Q as component};
