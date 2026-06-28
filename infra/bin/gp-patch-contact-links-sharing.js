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

const vkIconMarkup =
  '(0,b.jsx)("span",{className:"gp-vk-icon inline-flex h-6 w-6 items-center justify-center rounded-full text-white md:h-7 md:w-7",children:(0,b.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":!0,className:"h-4 w-4 md:h-[18px] md:w-[18px]",children:(0,b.jsx)("path",{fill:"currentColor",d:"M12.82 17.15c-5.7 0-8.95-3.91-9.08-10.42h2.86c.09 4.78 2.2 6.8 3.87 7.22V6.73h2.7v4.12c1.65-.18 3.38-2.05 3.96-4.12h2.7c-.45 2.55-2.34 4.42-3.68 5.19 1.34.62 3.49 2.25 4.31 5.23h-2.97c-.63-1.98-2.21-3.52-4.32-3.74v3.74h-.35Z"})})})';

const contactPolishCss = String.raw`
.gp-contact-polish-20260628{display:none!important}
.gp-vk-icon{background:#0077ff!important;color:#fff!important;box-shadow:0 10px 24px rgba(0,119,255,.18)!important}
.gp-vk-icon svg{display:block!important;color:#fff!important;fill:currentColor!important}
section.gp-requisites-card.gp-requisites-card{box-sizing:border-box!important;width:min(100%,46rem)!important;max-width:46rem!important;margin:2rem auto 2.35rem!important;padding:1.1rem 1.2rem!important;display:grid!important;grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important;gap:1rem!important;border-radius:1.9rem!important}
section.gp-requisites-card.gp-requisites-card>div:last-child{min-width:0!important}
section.gp-requisites-card.gp-requisites-card h2{margin:0!important;font-size:1.38rem!important;line-height:1.15!important;letter-spacing:-.02em!important}
section.gp-requisites-card.gp-requisites-card .gp-requisites-label{margin:0 0 .55rem!important}
section.gp-requisites-card.gp-requisites-card .gp-requisites-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:2.45rem!important;height:2.45rem!important;flex:0 0 auto!important;border-radius:1rem!important;background:linear-gradient(135deg,rgba(175,90,102,.13),rgba(255,255,255,.82))!important;border:1px solid rgba(175,90,102,.18)!important;color:var(--brand-primary,#af5a66)!important;box-shadow:0 14px 30px rgba(36,29,25,.06)!important}
section.gp-requisites-card.gp-requisites-card .gp-requisites-icon svg{display:block!important;width:1.25rem!important;height:1.25rem!important;stroke:currentColor!important}
section.gp-requisites-card.gp-requisites-card .gp-legal-details{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.55rem!important;margin-top:.9rem!important}
section.gp-requisites-card.gp-requisites-card .gp-legal-details>div{min-height:3rem!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:.75rem!important;border-radius:1rem!important;padding:.65rem .8rem!important;background:rgba(255,255,255,.78)!important;border:1px solid rgba(175,90,102,.13)!important}
section.gp-requisites-card.gp-requisites-card .gp-legal-details>div:first-child{grid-column:1/-1!important}
section.gp-requisites-card.gp-requisites-card .gp-legal-details span{font-size:.67rem!important;line-height:1.1!important;letter-spacing:.18em!important;color:var(--brand-muted)!important}
section.gp-requisites-card.gp-requisites-card .gp-legal-details strong{font-size:.84rem!important;line-height:1.2!important;text-align:right!important;letter-spacing:-.01em!important;color:var(--brand-text)!important}
@media(max-width:767px){
  section.gp-requisites-card.gp-requisites-card{width:calc(100% - 2rem)!important;margin:1.65rem auto 1.8rem!important;padding:1.15rem!important;grid-template-columns:1fr!important;gap:.75rem!important;border-radius:1.65rem!important}
  section.gp-requisites-card.gp-requisites-card .gp-requisites-icon{width:2.25rem!important;height:2.25rem!important;border-radius:.9rem!important}
  section.gp-requisites-card.gp-requisites-card h2{font-size:1.25rem!important}
  section.gp-requisites-card.gp-requisites-card .gp-legal-details{grid-template-columns:1fr!important;gap:.5rem!important;margin-top:.85rem!important}
  section.gp-requisites-card.gp-requisites-card .gp-legal-details>div{min-height:3.25rem!important;align-items:flex-start!important;justify-content:center!important;flex-direction:column!important;gap:.28rem!important;padding:.72rem .85rem!important}
  section.gp-requisites-card.gp-requisites-card .gp-legal-details strong{text-align:left!important;font-size:.95rem!important}
  .gp-map-touch-box{position:relative!important}
  .gp-map-touch-shield{position:absolute!important;inset:0!important;z-index:8!important;display:flex!important;align-items:center!important;justify-content:center!important;border:0!important;padding:1rem!important;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(248,243,236,.2))!important;touch-action:pan-y!important;-webkit-tap-highlight-color:transparent!important;color:var(--brand-text)!important;cursor:pointer!important}
  .gp-map-touch-shield span{display:inline-flex!important;max-width:14rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;background:rgba(255,255,255,.92)!important;border:1px solid rgba(175,90,102,.18)!important;padding:.7rem .95rem!important;text-align:center!important;font-size:.78rem!important;font-weight:650!important;line-height:1.25!important;box-shadow:0 18px 38px rgba(36,29,25,.12)!important}
  .gp-map-touch-box.gp-map-unlocked .gp-map-touch-shield{opacity:0!important;pointer-events:none!important}
}
@media(min-width:768px){.gp-map-touch-shield{display:none!important}}
`;

const contactPolishScript = String.raw`
(function(){
  var marker="gpContactPolish20260628";
  function polishRequisites(){
    var card=document.querySelector(".gp-requisites-card");
    if(!card)return;
    card.setAttribute("data-gp-polish","20260628");
    var icon=card.querySelector(".gp-requisites-icon");
    if(icon&&icon.getAttribute("data-gp-icon")!==marker){
      icon.setAttribute("data-gp-icon",marker);
      icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4.5h7.1L18 8.4v11.1H7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 4.5V9h4" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.3 13h5.4M9.3 16.5h5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
    }
  }
  function installMapShield(){
    document.querySelectorAll(".gp-contact-map-card iframe").forEach(function(frame){
      var box=frame.parentElement;
      if(!box||box.querySelector(".gp-map-touch-shield"))return;
      box.classList.add("gp-map-touch-box");
      var shield=document.createElement("button");
      shield.type="button";
      shield.className="gp-map-touch-shield";
      shield.setAttribute("aria-label","Включить управление картой");
      shield.innerHTML="<span>Нажмите, чтобы управлять картой</span>";
      var timer=0;
      function unlock(){
        box.classList.add("gp-map-unlocked");
        clearTimeout(timer);
        timer=setTimeout(function(){box.classList.remove("gp-map-unlocked")},12000);
      }
      shield.addEventListener("click",unlock);
      shield.addEventListener("keydown",function(event){
        if(event.key==="Enter"||event.key===" "){event.preventDefault();unlock();}
      });
      box.appendChild(shield);
    });
  }
  function run(){polishRequisites();installMapShield();}
  run();
  var ticks=0,timer=setInterval(function(){run();if(++ticks>=80)clearInterval(timer)},250);
  ["DOMContentLoaded","load","pageshow","resize","orientationchange"].forEach(function(eventName){
    window.addEventListener(eventName,run,{passive:true});
  });
  document.addEventListener("visibilitychange",run,{passive:true});
})();
`;

const contactPolishStyleNode = '(0,b.jsx)("style",{children:' + JSON.stringify(contactPolishCss) + '})';
const contactPolishScriptNode =
  '(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:' +
  JSON.stringify(contactPolishScript) +
  "}})";

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

replaceIfPresent(
  contactsChunk,
  '(0,b.jsx)(o,{href:function(a){if(!a)return"/contacts";let b=a.replace(/\\D/g,"");return b?`https://wa.me/${b}`:"/contacts"}(k.whatsapp||k.phone),label:"WhatsApp",icon:(0,b.jsx)(i,{className:"h-6 w-6"})}),',
  `(0,b.jsx)(o,{href:k.vk||"https://vk.com/garmoniyaplus",label:"VK",icon:${vkIconMarkup}}),`,
  "contacts VK social button"
);

replaceIfPresent(
  contactsChunk,
  '(0,b.jsx)(o,{href:k.vk||"https://vk.com/garmoniyaplus",label:"VK",icon:(0,b.jsx)("span",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0077ff] text-[10px] font-bold tracking-[-0.02em] text-white md:h-7 md:w-7",children:"VK"})}),',
  `(0,b.jsx)(o,{href:k.vk||"https://vk.com/garmoniyaplus",label:"VK",icon:${vkIconMarkup}}),`,
  "contacts VK icon upgrade"
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

replaceIfMarkerMissing(
  contactsChunk,
  "gp-contact-polish-20260628",
  '(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q})',
  `${contactPolishStyleNode},${contactPolishScriptNode},(0,b.jsx)(c.ContactMapCard,{address:k.address,initialCenter:q})`,
  "contacts visual polish layer"
);

replaceOnce(
  layoutChunk,
  'appleWebApp:{capable:!0,title:a.name,statusBarStyle:"default"},other:{"mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","apple-mobile-web-app-title":a.name}',
  'appleWebApp:{capable:!0,title:a.name,statusBarStyle:"default"},openGraph:{title:a.name,description:a.tagline,type:"website",url:"/",siteName:a.name,images:[{url:"/icon-512.png",width:512,height:512,alt:a.name}]},twitter:{card:"summary",title:a.name,description:a.tagline,images:["/icon-512.png"]},other:{"mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","apple-mobile-web-app-title":a.name}',
  "layout share image metadata"
);
