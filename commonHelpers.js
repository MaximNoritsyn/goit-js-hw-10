import{d as u,i as l}from"./assets/vendor-77231e6a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const i={input:document.querySelector("#search"),catInfo:document.querySelector(".cat-info")};function s(t,e){l[e]({message:t,position:"topCenter",transitionIn:"fadeInDown"})}function f(t){return fetch(`https://restcountries.com/v3.1/name/${t}`).then(e=>{if(e.ok)return e.json();if(console.log(e),e.status===404)return s("Oops, there is no country with that name","error"),[];throw new Error(e.statusText)}).catch(e=>{s(e,"error")})}function m(t){return`<ul class="countries-list">${t.map(r=>`
    <li class="country-name-block">
        <img src="${r.flags.svg}" alt="${r.name.common}" width="20" height="15">
        <p>${r.name.common}</p>
    </li>`).join("")}</ul>`}function d(t){return`<div class="country-card">
    <div class="country-name-block">
        <img src="${t[0].flags.svg}" alt="${t[0].name.common}" width="20" height="15">
        <h2>${t[0].name.official}</h2>
    </div>
    <p><b>Capital:</b> ${t[0].capital}</p>
    <p><b>Population:</b> ${t[0].population}</p>
    <p><b>Languages:</b> ${Object.values(t[0].languages).join(", ")}</p>
    </div>`}function p(t){const e=t.target.value;if(e===""){i.catInfo.innerHTML="";return}f(e).then(r=>{if(r.length>10){s("Too many matches found. Please enter a more specific name!","info");return}if(r.length===1){i.catInfo.innerHTML=d(r);return}if(r.length<=5){console.log(r),i.catInfo.innerHTML=m(r);return}}).catch(r=>{s(r,"error")})}i.input.addEventListener("input",u(p,300));
//# sourceMappingURL=commonHelpers.js.map
