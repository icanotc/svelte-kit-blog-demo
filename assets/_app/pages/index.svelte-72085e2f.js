import{S as t,i as s,s as e,e as a,t as l,j as n,c as o,a as r,b as c,d as h,l as i,o as f,f as p,g as u,h as d,F as g,n as v,I as m}from"../chunks/vendor-8b508088.js";import{b as E}from"../chunks/paths-d3b7dcf1.js";function $(t,s,e){const a=t.slice();return a[1]=s[e],a}function x(t){let s,e,g,v,m,$,x,j,y=t[1].metadata.title+"",b=t[1].metadata.excerpt+"";return{c(){s=a("a"),e=a("h2"),g=l(y),v=n(),m=a("p"),$=l(b),x=n(),this.h()},l(t){s=o(t,"A",{href:!0});var a=r(s);e=o(a,"H2",{class:!0});var l=r(e);g=c(l,y),l.forEach(h),v=i(a),m=o(a,"P",{class:!0});var n=r(m);$=c(n,b),n.forEach(h),x=i(a),a.forEach(h),this.h()},h(){f(e,"class","title svelte-1i98gyn"),f(m,"class","svelte-1i98gyn"),f(s,"href",j=`${E}/${t[1].slug}`)},m(t,a){p(t,s,a),u(s,e),u(e,g),u(s,v),u(s,m),u(m,$),u(s,x)},p(t,e){1&e&&y!==(y=t[1].metadata.title+"")&&d(g,y),1&e&&b!==(b=t[1].metadata.excerpt+"")&&d($,b),1&e&&j!==(j=`${E}/${t[1].slug}`)&&f(s,"href",j)},d(t){t&&h(s)}}}function j(t){let s,e,E,j,y,b,H,S,k,B=t[0].length+"",I=t[0],K=[];for(let a=0;a<I.length;a+=1)K[a]=x($(t,I,a));return{c(){s=n(),e=a("div"),E=a("h1"),j=l("SvelteKit Blog"),y=n(),b=a("p"),H=l(B),S=l(" posts."),k=n();for(let t=0;t<K.length;t+=1)K[t].c();this.h()},l(t){g('[data-svelte="svelte-n3ior8"]',document.head).forEach(h),s=i(t),e=o(t,"DIV",{});var a=r(e);E=o(a,"H1",{class:!0});var l=r(E);j=c(l,"SvelteKit Blog"),l.forEach(h),y=i(a),b=o(a,"P",{class:!0});var n=r(b);H=c(n,B),S=c(n," posts."),n.forEach(h),k=i(a);for(let s=0;s<K.length;s+=1)K[s].l(a);a.forEach(h),this.h()},h(){document.title="Home",f(E,"class","svelte-1i98gyn"),f(b,"class","info svelte-1i98gyn")},m(t,a){p(t,s,a),p(t,e,a),u(e,E),u(E,j),u(e,y),u(e,b),u(b,H),u(b,S),u(e,k);for(let s=0;s<K.length;s+=1)K[s].m(e,null)},p(t,[s]){if(1&s&&B!==(B=t[0].length+"")&&d(H,B),1&s){let a;for(I=t[0],a=0;a<I.length;a+=1){const l=$(t,I,a);K[a]?K[a].p(l,s):(K[a]=x(l),K[a].c(),K[a].m(e,null))}for(;a<K.length;a+=1)K[a].d(1);K.length=I.length}},i:v,o:v,d(t){t&&h(s),t&&h(e),m(K,t)}}}async function y({fetch:t}){return{props:{posts:await t(`${E}/index.json`).then((t=>t.json()))}}}function b(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),s(this,t,b,j,e,{posts:0})}}export{y as load};