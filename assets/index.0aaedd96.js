import{d as i,r as h,o as a,c as v,a as u,b as l,e as _,t as m,F as y,f as g,g as x,h as k,i as L,j as E}from"./vendor.5a54200c.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};b();const A=i({setup(s){return(n,c)=>{const t=h("router-view");return a(),v(t)}}}),O="modulepreload",d={},P="./",S=function(n,c){return!c||c.length===0?n():Promise.all(c.map(t=>{if(t=`${P}${t}`,t in d)return;d[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((f,p)=>{o.addEventListener("load",f),o.addEventListener("error",p)})})).then(()=>n())};const $=_("div",null,"aklksdjfas",-1),j={class:"home"},w=i({setup(s){const n=u("home");return(c,t)=>(a(),l(y,null,[$,_("div",j,m(n.value),1)],64))}});const B=i({setup(s){const n=u("vuex");return(c,t)=>(a(),l("div",null,m(n.value.value),1))}}),C=[{path:"/",name:"Home",component:w},{path:"/vuex",name:"Vuex",component:B},{path:"/axios",name:"Axios",component:()=>S(()=>import("./Axios.49d98f5d.js"),["assets/Axios.49d98f5d.js","assets/Axios.0d10ec18.css","assets/vendor.5a54200c.js"])}],H=g({history:x(),routes:C}),N={count:0};var V=k({state(){return N},mutations:{increment(s){s.count++}},actions:{increment(s){s.commit("increment")}},getters:{double(s){return 2*s.count}}});L(A).use(H).use(V).use(E).mount("#app");