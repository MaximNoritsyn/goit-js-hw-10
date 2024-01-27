import{i as u,d as l}from"./assets/vendor-a5c830ad.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function c(e,n){u[n]({message:e,position:"topCenter",transitionIn:"fadeInDown"})}function f(e){if(e==="")return[];const n=new URLSearchParams({fields:["name","capital","population","languages","flags"].join(",")}),t=`https://restcountries.com/v3.1/name/${e}?${n}`;return fetch(t).then(i=>{if(i.ok)return i.json();if(i.status===404)return c("Oops, there is no country with that name","error"),[];throw c(i.statusText,"error"),new Error(i.statusText)}).catch(i=>(console.error(i),c("Sorry, something went wrong","error"),[]))}const s={input:document.querySelector("input#search-box"),catInfo:document.querySelector(".cat-info")};function m(e){return`<ul class="countries-list">${e.map(t=>`
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
    </div>`}function d(e){const n=e.target.value.trim();if(n===""){s.catInfo.innerHTML="";return}f(n).then(t=>{if(t.length>10){c("Too many matches found. Please enter a more specific name!","info");return}if(t.length===1){s.catInfo.innerHTML=p(t);return}if(t.length<=10){s.catInfo.innerHTML=m(t);return}if(t.length===0){s.catInfo.innerHTML="";return}}).catch(t=>{console.error(t),c("Sorry, something went wrong","error")})}s.input.addEventListener("input",l(d,300));
//# sourceMappingURL=commonHelpers.js.map
