#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const appRoot = process.argv[2] || "app-runtime";
const ssrDir = path.join(appRoot, ".next/server/chunks/ssr");
const contactsChunk = path.join(ssrDir, "[root-of-the-server]__0t.92g4._.js");
const layoutChunk = path.join(ssrDir, "[root-of-the-server]__0qfs6~9._.js");

function replaceOnce(filePath, before, after, label) {
  const source = fs.readFileSync(filePath, "utf8");
  if (after && source.includes(after)) {
    console.log(`${label}: already patched`);
    return;
  }
  if (!source.includes(before)) {
    if (after === "") {
      console.log(`${label}: already removed`);
      return;
    }
    throw new Error(`${label}: expected runtime fragment not found in ${filePath}`);
  }
  fs.writeFileSync(filePath, source.replace(before, after));
  console.log(`${label}: patched`);
}

function replaceIfPresent(filePath, before, after, label) {
  const source = fs.readFileSync(filePath, "utf8");
  if (source.includes(after)) {
    console.log(`${label}: already patched`);
    return;
  }
  if (!source.includes(before)) {
    console.log(`${label}: source fragment not present`);
    return;
  }
  fs.writeFileSync(filePath, source.replace(before, after));
  console.log(`${label}: patched`);
}

function replaceIfMarkerMissing(filePath, marker, before, after, label) {
  const source = fs.readFileSync(filePath, "utf8");
  if (source.includes(marker)) {
    console.log(`${label}: already patched`);
    return;
  }
  if (!source.includes(before)) {
    throw new Error(`${label}: expected runtime fragment not found in ${filePath}`);
  }
  fs.writeFileSync(filePath, source.replace(before, after));
  console.log(`${label}: patched`);
}

replaceOnce(
  contactsChunk,
  'let k={lat:55.773328,lon:37.6216403},l=[{pattern:/цветной\\s+бульвар/i,center:k}];',
  'let k={lat:55.773328,lon:37.6216403},l=[{pattern:/торосова/i,center:{lat:53.7381685,lon:91.4181643}},{pattern:/цветной\\s+бульвар/i,center:k}];',
  "contacts fixed map geocode"
);

replaceOnce(
  contactsChunk,
  'q=await m(k.address),r=l.sections.find(a=>"contacts-card"===a.id)??l.sections[0];return',
  'q=await m(k.address),r=l.sections.find(a=>"contacts-card"===a.id)??l.sections[0],s=encodeURIComponent("Абакан, Улица Торосова, 9а"),t=[{label:"Открыть в Яндекс Картах",href:"https://yandex.ru/maps/?text="+s},{label:"Открыть в Google Картах",href:"https://www.google.com/maps/search/?api=1&query="+s},{label:"Открыть в 2ГИС",href:"https://2gis.ru/abakan/geo/9711522351700561"}];return',
  "contacts map links"
);

replaceOnce(
  contactsChunk,
  '(0,b.jsx)(o,{href:function(a){if(!a)return"/contacts";let b=a.replace(/\\D/g,"");return b?`https://wa.me/${b}`:"/contacts"}(k.whatsapp||k.phone),label:"WhatsApp",icon:(0,b.jsx)(i,{className:"h-6 w-6"})}),',
  '(0,b.jsx)(o,{href:k.vk||"https://vk.com/garmoniyaplus",label:"VK",icon:(0,b.jsx)("span",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0077ff] text-[10px] font-bold tracking-[-0.02em] text-white md:h-7 md:w-7",children:"VK"})}),',
  "contacts VK social button"
);

replaceIfMarkerMissing(
  contactsChunk,
  'className:"gp-contact-map-card"',
  '(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q})',
  '(0,b.jsxs)("div",{className:"gp-contact-map-card",children:[(0,b.jsx)("style",{children:".gp-contact-map-card a[href^=\\"https://www.openstreetmap.org/\\"]{display:none!important}.gp-contact-map-card div:has(> a[href^=\\"https://www.openstreetmap.org/\\"]){display:none!important}.gp-contact-map-buttons{display:grid;grid-template-columns:1fr;gap:.65rem;padding-top:.85rem}@media(min-width:768px){.gp-contact-map-buttons{grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;padding-top:1rem}}.gp-contact-map-buttons a{display:inline-flex;min-height:2.85rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:rgba(255,255,255,.92);padding:.72rem 1rem;text-align:center;font-size:.86rem;font-weight:650;color:var(--brand-text);box-shadow:0 16px 30px rgba(36,29,25,.07);transition:transform .2s,border-color .2s,box-shadow .2s}.gp-contact-map-buttons a:hover{transform:translateY(-2px);border-color:rgba(175,90,102,.38);box-shadow:0 20px 36px rgba(36,29,25,.1)}"}),(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q}),(0,b.jsx)("div",{className:"gp-contact-map-buttons",children:t.map(a=>(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noreferrer",children:a.label},a.label))})]})',
  "contacts map buttons markup"
);

replaceIfPresent(
  contactsChunk,
  '(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(){var href=\\"tel:+79831910383\\";function fix(){document.querySelectorAll(\\"main a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){if(link.getAttribute(\\"href\\")!==href)link.setAttribute(\\"href\\",href)})}fix();[250,900,1800,3500].forEach(function(delay){setTimeout(fix,delay)});window.addEventListener(\\"load\\",fix,{once:true,passive:true});})();"}})',
  '(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(){var href=\\"tel:+79831910383\\",ticks=0;function fix(){document.querySelectorAll(\\"main a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){if(link.getAttribute(\\"href\\")!==href)link.setAttribute(\\"href\\",href)})}fix();var timer=setInterval(function(){fix();if(++ticks>=60)clearInterval(timer)},500);window.addEventListener(\\"load\\",fix,{once:true,passive:true});document.addEventListener(\\"visibilitychange\\",fix,{passive:true});})();"}})',
  "contacts tel guard interval upgrade"
);

replaceIfMarkerMissing(
  contactsChunk,
  'dangerouslySetInnerHTML:{__html:"(function(){var href=\\"tel:+79831910383',
  '(0,b.jsx)("style",{children:".gp-contact-map-card a[href^=\\"https://www.openstreetmap.org/\\"]{display:none!important}.gp-contact-map-card div:has(> a[href^=\\"https://www.openstreetmap.org/\\"]){display:none!important}.gp-contact-map-buttons{display:grid;grid-template-columns:1fr;gap:.65rem;padding-top:.85rem}@media(min-width:768px){.gp-contact-map-buttons{grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;padding-top:1rem}}.gp-contact-map-buttons a{display:inline-flex;min-height:2.85rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:rgba(255,255,255,.92);padding:.72rem 1rem;text-align:center;font-size:.86rem;font-weight:650;color:var(--brand-text);box-shadow:0 16px 30px rgba(36,29,25,.07);transition:transform .2s,border-color .2s,box-shadow .2s}.gp-contact-map-buttons a:hover{transform:translateY(-2px);border-color:rgba(175,90,102,.38);box-shadow:0 20px 36px rgba(36,29,25,.1)}"}),(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q})',
  '(0,b.jsx)("style",{children:".gp-contact-map-card a[href^=\\"https://www.openstreetmap.org/\\"]{display:none!important}.gp-contact-map-card div:has(> a[href^=\\"https://www.openstreetmap.org/\\"]){display:none!important}.gp-contact-map-buttons{display:grid;grid-template-columns:1fr;gap:.65rem;padding-top:.85rem}@media(min-width:768px){.gp-contact-map-buttons{grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;padding-top:1rem}}.gp-contact-map-buttons a{display:inline-flex;min-height:2.85rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:rgba(255,255,255,.92);padding:.72rem 1rem;text-align:center;font-size:.86rem;font-weight:650;color:var(--brand-text);box-shadow:0 16px 30px rgba(36,29,25,.07);transition:transform .2s,border-color .2s,box-shadow .2s}.gp-contact-map-buttons a:hover{transform:translateY(-2px);border-color:rgba(175,90,102,.38);box-shadow:0 20px 36px rgba(36,29,25,.1)}"}),(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(){var href=\\\"tel:+79831910383\\\",ticks=0;function fix(){document.querySelectorAll(\\\"main a[href^=\\\\\\\"tel:\\\\\\\"]\\\").forEach(function(link){if(link.getAttribute(\\\"href\\\")!==href)link.setAttribute(\\\"href\\\",href)})}fix();var timer=setInterval(function(){fix();if(++ticks>=60)clearInterval(timer)},500);window.addEventListener(\\\"load\\\",fix,{once:true,passive:true});document.addEventListener(\\\"visibilitychange\\\",fix,{passive:true});})();"}}),(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q})',
  "contacts tel runtime guard"
);

replaceIfPresent(
  contactsChunk,
  '(function(){var href=\\"tel:+79831910383\\";function fix(){document.querySelectorAll(\\"a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){link.href=href})}fix();[250,900,1800,3500].forEach(function(delay){setTimeout(fix,delay)});try{new MutationObserver(fix).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:[\\"href\\"]})}catch(error){}})();',
  '(function(){var href=\\"tel:+79831910383\\",ticks=0;function fix(){document.querySelectorAll(\\"main a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){if(link.getAttribute(\\"href\\")!==href)link.setAttribute(\\"href\\",href)})}fix();var timer=setInterval(function(){fix();if(++ticks>=60)clearInterval(timer)},500);window.addEventListener(\\"load\\",fix,{once:true,passive:true});document.addEventListener(\\"visibilitychange\\",fix,{passive:true});})();',
  "contacts tel guard observer removal"
);

replaceOnce(
  contactsChunk,
  ',(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(){var href=\\"tel:+79831910383\\";function fix(){document.querySelectorAll(\\"a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){link.href=href})}fix();[250,900,1800,3500].forEach(function(delay){setTimeout(fix,delay)});try{new MutationObserver(fix).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:[\\"href\\"]})}catch(error){}})();"}})',
  '',
  "contacts remove legacy mutation observer guard"
);

replaceOnce(
  contactsChunk,
  '(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(){var href=\\"tel:+79831910383\\";function fix(){document.querySelectorAll(\\"a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){link.href=href})}fix();[250,900,1800,3500].forEach(function(delay){setTimeout(fix,delay)});try{new MutationObserver(fix).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:[\\"href\\"]})}catch(error){}})();"}}),',
  '',
  "contacts remove legacy mutation observer guard without leading comma"
);

replaceIfPresent(
  contactsChunk,
  '(function(){var href=\\"tel:+79831910383\\",ticks=0;function fix(){document.querySelectorAll(\\"main a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){if(link.getAttribute(\\"href\\")!==href)link.setAttribute(\\"href\\",href)})}fix();var timer=setInterval(function(){fix();if(++ticks>=60)clearInterval(timer)},500);window.addEventListener(\\"load\\",fix,{once:true,passive:true});document.addEventListener(\\"visibilitychange\\",fix,{passive:true});})();',
  '(function(){var href=\\"tel:+79831910383\\",ticks=0;function fix(){document.querySelectorAll(\\"main a[href^=\\\\\\"tel:\\\\\\"]\\").forEach(function(link){if(link.getAttribute(\\"href\\")!==href)link.setAttribute(\\"href\\",href)})}function bind(target,event,options){try{target.addEventListener(event,fix,options||{passive:true})}catch(error){}}fix();var timer=setInterval(function(){fix();if(++ticks>=1200)clearInterval(timer)},500);bind(window,\\"load\\",{once:true,passive:true});bind(window,\\"pageshow\\");bind(window,\\"resize\\");bind(window,\\"orientationchange\\");bind(window,\\"focus\\");bind(document,\\"visibilitychange\\");bind(document,\\"DOMContentLoaded\\",{once:true,passive:true});})();',
  "contacts tel guard robust event upgrade"
);

replaceOnce(
  layoutChunk,
  'appleWebApp:{capable:!0,title:a.name,statusBarStyle:"default"},other:{"mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","apple-mobile-web-app-title":a.name}',
  'appleWebApp:{capable:!0,title:a.name,statusBarStyle:"default"},openGraph:{title:a.name,description:a.tagline,type:"website",url:"/",siteName:a.name,images:[{url:"/icon-512.png",width:512,height:512,alt:a.name}]},twitter:{card:"summary",title:a.name,description:a.tagline,images:["/icon-512.png"]},other:{"mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","apple-mobile-web-app-title":a.name}',
  "layout share image metadata"
);
