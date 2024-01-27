import{i as u,d as l}from"./assets/vendor-a5c830ad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function c(e,r){u[r]({message:e,position:"topCenter",transitionIn:"fadeInDown"})}function f(e){if(e==="")return[];const r=new URLSearchParams({fields:["name","capital","population","languages","flags"].join(",")}),t=`https://restcountries.com/v3.1/name/${e}?${r}`;return fetch(t).then(i=>{if(i.ok)return i.json();if(i.status===404)return c("Oops, there is no country with that name","error"),[];throw c(i.statusText,"error"),new Error(i.statusText)}).catch(i=>(console.error(i),c("Sorry, something went wrong","error"),[]))}const s={input:document.querySelector("input#search-box"),catInfo:document.querySelector(".cat-info")};function m(e){return`<ul class="countries-list">${e.map(t=>`
    <li class="country-name-block">
        <img src="${t.flags.svg}" alt="${t.name.common}" width="20" height="15">
        <p>${t.name.common}</p>
    </li>`).join("")}</ul>`}function p(e){return`<div class="country-card">
    <div class="country-name-block">
        <img src="${e[0].flags.svg}" alt="${e[0].name.common}" width="20" height="15">
        <h2>${e[0].name.official}</h2>
    </div>
    <p><b>Capital:</b> ${e[0].capital}</p>
    <p><b>Population:</b> ${e[0].population}</p>
    <p><b>Languages:</b> ${Object.values(e[0].languages).join(", ")}</p>
    </div>`}function d(e){const r=e.target.value.trim();if(r===""){s.catInfo.innerHTML="";return}f(r).then(t=>{if(t.length>10){c("Too many matches found. Please enter a more specific name!","info"),s.catInfo.innerHTML="";return}if(t.length===1){s.catInfo.innerHTML=p(t);return}if(t.length<=10){s.catInfo.innerHTML=m(t);return}if(t.length===0){s.catInfo.innerHTML="";return}}).catch(t=>{console.error(t),c("Sorry, something went wrong","error")})}s.input.addEventListener("input",l(d,300));
//# sourceMappingURL=commonHelpers.js.map
