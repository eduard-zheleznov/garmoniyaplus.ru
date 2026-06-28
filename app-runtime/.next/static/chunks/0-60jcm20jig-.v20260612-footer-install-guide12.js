;(function(){
try{
if(window.__gpAndroidLite94)return;
window.__gpAndroidLite94=true;

var FULL_RUNTIME_SRC="/_next/static/chunks/gp-runtime-full95.js?v=20260623-138";
var GP_FAVORITES_ROUTE93=location.search.indexOf("favorites=1")>-1;
var GP_BROKEN_CATALOG_REDIRECTS129={"/catalog/kremy":"крем"};

var gpSearchSafeCatalogTarget129=function(href,query,title){
  var path="";
  try{path=new URL(href,location.origin).pathname.replace(/\/+$/,"")}catch(error){path=String(href||"").split("?")[0].replace(/\/+$/,"")}
  var redirectQuery=GP_BROKEN_CATALOG_REDIRECTS129[path];
  if(!redirectQuery)return href;
  return "/catalog/all-products?q="+encodeURIComponent(query||redirectQuery||title||"");
};
window.__gpSearchSafeCatalogTarget129=gpSearchSafeCatalogTarget129;

function gpRedirectBrokenCatalogRoute129(){
  var path=String(location.pathname||"").replace(/\/+$/,"");
  var query=GP_BROKEN_CATALOG_REDIRECTS129[path];
  if(!query)return false;
  var target="/catalog/all-products?q="+encodeURIComponent(query);
  if(location.pathname+location.search!==target)location.replace(target);
  return true;
}
gpRedirectBrokenCatalogRoute129();

function gpRefreshFavoritesRoute93(){
  GP_FAVORITES_ROUTE93=location.search.indexOf("favorites=1")>-1;
  document.documentElement.classList.toggle("gp-favorites-route93",GP_FAVORITES_ROUTE93);
  if(document.body)document.body.classList.toggle("gp-favorites-route93",GP_FAVORITES_ROUTE93);
  return GP_FAVORITES_ROUTE93;
}
if(gpRefreshFavoritesRoute93())document.documentElement.classList.add("gp-favorites-route93");

function isMobile(){
  return innerWidth<=640||/Android/i.test(navigator.userAgent||"");
}

function isAccount(){
  var path=location.pathname;
  return path==="/account"||path.indexOf("/account/")===0;
}

function ensureStyle(){
  if(document.getElementById("gp-android-lite106-style"))return;
  var style=document.createElement("style");
  style.id="gp-android-lite106-style";
  style.textContent=[
    "@media(max-width:1023px){[data-mobile-shell='header']{border-bottom:1px solid rgba(255,255,255,.94)!important;box-shadow:none!important;overflow:hidden!important;background:var(--brand-background,#f8f3ec)!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] [class*='top-full']{display:none!important;visibility:hidden!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important;pointer-events:none!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] nav[aria-label]{gap:.1rem!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] nav[aria-label]>div:first-child{gap:2px!important;margin-left:-6px!important;transform:translateX(-2px)!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] nav[aria-label]>div:last-child{gap:2px!important;margin-right:-4px!important;transform:translateX(4px)!important;justify-self:end!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] nav[aria-label]>div:first-child>a,[data-mobile-shell='header'] nav[aria-label]>div:first-child>button,[data-mobile-shell='header'] nav[aria-label]>div:last-child>a,[data-mobile-shell='header'] nav[aria-label]>div:last-child>button{min-width:2.82rem!important;padding:.1rem .05rem!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] a svg,[data-mobile-shell='header'] button svg{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;transform:none!important;scale:1!important;stroke-width:1.8!important}}",
    "@media(max-width:1023px){[data-mobile-shell='header'] a span[class*='text-[9px]'],[data-mobile-shell='header'] button span[class*='text-[9px]']{font-size:9px!important;line-height:9px!important;height:9px!important;letter-spacing:.01em!important;white-space:nowrap!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account{padding-top:56px!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account [data-mobile-shell='header']{height:56px!important;min-height:0!important;max-height:56px!important;border-bottom:1px solid rgba(255,255,255,.94)!important;box-shadow:none!important;overflow:hidden!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account [data-mobile-shell='header']>div:first-child{padding-bottom:0!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account>div:first-of-type{padding-top:0!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account main{padding-top:.35rem!important;margin-top:0!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account main>div.grid,body.gp-pravki-current-account main>section:first-child{padding-top:0!important;margin-top:0!important}}",
    "html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main article:not(.gp-lite-favorites-card){display:none!important;visibility:hidden!important}",
    "html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main nav,html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main [aria-label*='pagination' i],html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main [class*='pagination' i]{display:none!important}",
    "body.gp-favorites-route93 [data-gp-lite-hidden-favorites='true']{display:none!important}",
    "body.gp-favorites-storage-ready [data-gp-lite-favorites-page]{display:block!important;visibility:visible!important}",
    "html.gp-favorites-route93 body main>*:not([data-gp-lite-favorites-page]){display:none!important}",
    ".gp-lite-favorites-page{display:block;gap:0;width:min(90vw,108rem);margin:1.5rem auto 4rem}",
    ".gp-lite-favorites-header{border-radius:1.85rem;border:1px solid rgba(255,255,255,.76);background:rgba(255,255,255,.88);padding:1.35rem 1.5rem;box-shadow:0 18px 48px rgba(36,29,25,.075);margin-bottom:1.15rem}",
    ".gp-lite-favorites-header h1{margin:0;font-family:var(--font-heading,serif);font-size:clamp(2rem,4vw,3.45rem);line-height:.96;color:var(--brand-text,#241d19)}",
    ".gp-lite-favorites-header p{margin:.7rem 0 0;color:var(--brand-muted,#8b7b72);font-size:1rem;line-height:1.5}",
    ".gp-lite-favorites-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem;align-items:stretch}",
    ".gp-lite-favorites-card{position:relative;display:grid;grid-template-rows:12.2rem 1fr;overflow:hidden;height:23.6rem;min-height:23.6rem;max-height:23.6rem;border-radius:1.65rem;border:1px solid rgba(255,255,255,.76);background:rgba(255,255,255,.92);box-shadow:0 18px 48px rgba(36,29,25,.075)}",
    ".gp-lite-favorites-card-image{display:block;position:relative;height:12.2rem;overflow:hidden;background:#fff}",
    ".gp-lite-favorites-card-image img{display:block;width:100%;height:100%;object-fit:cover}",
    ".gp-lite-favorites-heart{position:absolute;top:1rem;right:1rem;z-index:3;display:inline-flex;width:2.75rem;height:2.75rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.28);background:rgba(255,255,255,.94);color:var(--brand-primary,#af5a66);box-shadow:0 14px 30px rgba(36,29,25,.1)}",
    ".gp-lite-favorites-heart svg{display:block;width:1.25rem;height:1.25rem;fill:currentColor;stroke:currentColor}",
    ".gp-lite-favorites-card-body{display:flex;min-height:0;flex-direction:column;padding:.95rem .95rem 1rem}",
    ".gp-lite-favorites-card-title{display:-webkit-box;min-height:3.05rem;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-family:var(--font-heading,serif);font-size:1.04rem;line-height:1.12;color:var(--brand-text,#241d19);text-decoration:none}",
    ".gp-lite-favorites-price{margin-top:.85rem;border-top:1px solid rgba(175,90,102,.1);padding-top:.8rem}",
    ".gp-lite-favorites-price span{display:block;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-muted,#8b7b72)}",
    ".gp-lite-favorites-price strong{display:block;margin-top:.25rem;font-size:1.15rem;line-height:1;color:var(--brand-text,#241d19)}",
    ".gp-lite-favorites-footer{display:flex;align-items:flex-end;justify-content:space-between;gap:.75rem;margin-top:auto;border-top:1px solid rgba(175,90,102,.1);padding-top:.82rem}",
    ".gp-lite-favorites-actions{display:flex;align-items:flex-end;justify-content:flex-end;gap:.55rem;margin:0}",
    ".gp-lite-favorites-action{appearance:none;display:grid;min-width:2.55rem;justify-items:center;gap:.3rem;border:0!important;background:transparent!important;box-shadow:none!important;padding:0!important;color:var(--brand-text,#241d19)}",
    ".gp-lite-favorites-action-bubble{display:inline-flex;width:2.45rem;height:2.45rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:#fff;box-shadow:0 10px 22px rgba(36,29,25,.06)}",
    ".gp-lite-favorites-action small{font-size:.72rem;line-height:1.1;color:var(--brand-muted,#8b7b72)}",
    ".gp-lite-favorites-empty{border-radius:1.65rem;border:1px dashed rgba(175,90,102,.22);background:rgba(255,255,255,.84);padding:2.25rem 1.5rem;text-align:center;color:var(--brand-muted,#8b7b72);box-shadow:0 18px 48px rgba(36,29,25,.055)}",
    ".gp-lite-favorites-empty h2{margin:0;font-family:var(--font-heading,serif);font-size:clamp(1.55rem,3vw,2.25rem);line-height:1;color:var(--brand-text,#241d19)}",
    ".gp-lite-favorites-empty p{margin:.75rem auto 0;max-width:34rem;font-size:1rem;line-height:1.55}",
    ".gp-lite-favorites-empty a{display:inline-flex;align-items:center;justify-content:center;margin-top:1.15rem;border-radius:999px;background:var(--brand-primary,#af5a66);color:#fff;padding:.82rem 1.15rem;font-weight:800;text-decoration:none;box-shadow:0 16px 34px rgba(175,90,102,.24)}",
    "html.gp-favorites-route93 main article:not(.gp-lite-favorites-card){display:none!important;visibility:hidden!important;pointer-events:none!important}",
    "html.gp-favorites-route93 main [data-favorite-overlay='true'],html.gp-favorites-route93 main [data-gp-favorite-overlay='true']{display:none!important;visibility:hidden!important;pointer-events:none!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page].gp-lite-favorites-page{display:block!important;width:min(90vw,108rem)!important;margin:0 auto 4rem!important;background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important;padding:1.45rem 0 0!important;box-sizing:border-box!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-header{position:relative!important;top:auto!important;right:auto!important;bottom:auto!important;left:auto!important;z-index:1!important;margin-bottom:1.15rem!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:1.25rem!important;align-items:stretch!important;margin-top:1.15rem!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card{position:relative!important;display:flex!important;flex-direction:column!important;height:23.6rem!important;min-height:23.6rem!important;max-height:23.6rem!important;overflow:hidden!important;border-radius:1.65rem!important;background:rgba(255,255,255,.92)!important;border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 18px 48px rgba(36,29,25,.075)!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-image{display:block!important;position:relative!important;order:1!important;flex:0 0 13.2rem!important;width:100%!important;height:13.2rem!important;min-height:13.2rem!important;max-height:13.2rem!important;overflow:hidden!important;background:#fff!important;padding:0!important;margin:0!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-image img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;padding:0!important;margin:0!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-body{order:2!important;display:flex!important;flex:1 1 auto!important;min-height:0!important;flex-direction:column!important;padding:.95rem .95rem 1rem!important;background:#fff!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-title{display:-webkit-box!important;min-height:2.7rem!important;max-height:2.7rem!important;overflow:hidden!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;font-family:var(--font-heading,serif)!important;font-size:1.04rem!important;line-height:1.18!important;color:var(--brand-text,#241d19)!important;text-decoration:none!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-footer{display:flex!important;align-items:flex-end!important;justify-content:space-between!important;gap:.75rem!important;margin-top:auto!important;border-top:1px solid rgba(175,90,102,.1)!important;padding-top:.82rem!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-price{margin:0!important;border:0!important;padding:0!important;text-align:left!important}.gp-lite-favorites-price strong{white-space:nowrap!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-actions{display:flex!important;align-items:flex-end!important;justify-content:flex-end!important;gap:.55rem!important;margin:0!important}.gp-lite-favorites-action{position:relative!important;display:grid!important;min-width:2.55rem!important;justify-items:center!important;gap:.3rem!important;border:0!important;background:transparent!important;box-shadow:none!important;padding:0!important;color:var(--brand-text,#241d19)!important}.gp-lite-favorites-action-bubble{width:2.45rem!important;height:2.45rem!important}.gp-lite-favorites-heart{left:auto!important;right:1rem!important;top:1rem!important;bottom:auto!important;z-index:8!important}.gp-lite-favorites-heart~.gp-lite-favorites-heart{display:none!important}",
    "@media(max-width:1023px){.gp-lite-favorites-page{width:min(94vw,64rem);margin:1rem auto 3rem}.gp-lite-favorites-header{padding:1.05rem 1.1rem}.gp-lite-favorites-header h1{font-size:clamp(1.75rem,8vw,2.55rem)}.gp-lite-favorites-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.gp-lite-favorites-card{border-radius:1.35rem}.gp-lite-favorites-card-image{height:8.5rem}.gp-lite-favorites-card-body{padding:.75rem .72rem .85rem}.gp-lite-favorites-card-title{min-height:2.55rem;font-size:.96rem}.gp-lite-favorites-heart{top:.75rem;right:.75rem;width:2.45rem;height:2.45rem}.gp-lite-favorites-actions{gap:.4rem}.gp-lite-favorites-action-bubble{width:2.4rem;height:2.4rem}.gp-lite-favorites-empty{padding:1.6rem 1rem}}",
    "html.gp-favorites-route93 header a[href='/catalog'],html.gp-favorites-route93 header a[href='/catalog/all-products']{background:#fff!important;color:var(--brand-text,#241d19)!important;border-color:rgba(255,255,255,.75)!important;box-shadow:none!important;outline:0!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1'],html.gp-favorites-route93 header a[href*='favorites']{position:relative!important;background:rgba(255,255,255,.96)!important;color:var(--brand-primary,#af5a66)!important;border-color:rgba(175,90,102,.16)!important;box-shadow:none!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1'] svg,html.gp-favorites-route93 header a[href*='favorites'] svg{display:none!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1']::before,html.gp-favorites-route93 header a[href*='favorites']::before{content:'\\2661'!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:1.35rem!important;height:1.35rem!important;font-size:1.4rem!important;line-height:1!important;color:var(--brand-primary,#af5a66)!important}",
    "@media(max-width:1023px){html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}[data-mobile-shell='header'] a[href*='favorites=1'],body.gp-path-compare [data-mobile-shell='header'] a[href='/compare']{background:transparent!important;border-color:transparent!important;box-shadow:none!important;color:var(--brand-primary,#af5a66)!important}[data-mobile-shell='header'] a[href*='favorites=1'] svg,body.gp-path-compare [data-mobile-shell='header'] a[href='/compare'] svg{display:block!important;color:currentColor!important;fill:none!important;stroke:currentColor!important}[data-mobile-shell='header'] a[href*='favorites=1']::before{content:none!important;display:none!important}}"
  ].join("");
  document.head.appendChild(style);
}

function fitBrandToHeader(header){
  if(!header)return;
  var brandText="\u0413\u0430\u0440\u043c\u043e\u043d\u0438\u044f\u041f\u043b\u044e\u0441";
  var brand=[].slice.call(header.querySelectorAll("a")).filter(function(node){
    return (node.textContent||"").replace(/\s+/g," ").trim()===brandText;
  })[0];
  if(!brand)return;
  brand.style.setProperty("transform","none","important");
  var headerRect=header.getBoundingClientRect();
  var brandRect=brand.getBoundingClientRect();
  var desiredGap=2;
  var needed=brandRect.bottom-(headerRect.bottom-desiredGap);
  var maxShift=Math.max(0,brandRect.top-2);
  var shift=Math.max(0,Math.min(needed,maxShift));
  if(shift>0.25)brand.style.setProperty("transform","translateY(-"+shift.toFixed(2)+"px)","important");
  else brand.style.setProperty("transform","none","important");
}

function normalizeHeader(){
  ensureStyle();
  if(gpRefreshFavoritesRoute93())document.body.classList.add("gp-favorites-route93");
  var header=document.querySelector('[data-mobile-shell="header"]');
  if(!header)return;
  header.style.setProperty("border-bottom","1px solid rgba(255,255,255,.94)","important");
  header.style.setProperty("box-shadow","none","important");
  header.style.setProperty("overflow","hidden","important");
  var nav=header.querySelector('nav[aria-label]');
  if(nav){
    nav.style.setProperty("gap",".1rem","important");
    var leftGroup=nav.children&&nav.children[0];
    var rightGroup=nav.children&&nav.children[2];
    if(leftGroup){
      leftGroup.style.setProperty("gap","2px","important");
      leftGroup.style.setProperty("margin-left","-6px","important");
      leftGroup.style.setProperty("transform","translateX(-2px)","important");
    }
    if(rightGroup){
      rightGroup.style.setProperty("gap","2px","important");
      rightGroup.style.setProperty("margin-right","-4px","important");
      rightGroup.style.setProperty("transform","translateX(4px)","important");
      rightGroup.style.setProperty("justify-self","end","important");
    }
  }
  [].slice.call(header.querySelectorAll('[class*="top-full"]')).forEach(function(node){
    node.style.setProperty("display","none","important");
    node.style.setProperty("visibility","hidden","important");
    node.style.setProperty("height","0px","important");
    node.style.setProperty("min-height","0px","important");
    node.style.setProperty("max-height","0px","important");
    node.style.setProperty("padding","0px","important");
    node.style.setProperty("margin","0px","important");
    node.style.setProperty("border","0","important");
    node.style.setProperty("box-shadow","none","important");
    node.style.setProperty("overflow","hidden","important");
    node.style.setProperty("pointer-events","none","important");
  });
  [].slice.call(header.querySelectorAll("a,button")).forEach(function(action){
    var label=((action.getAttribute("aria-label")||"")+" "+(action.textContent||"")).replace(/\s+/g," ").trim();
    if(!/(Р В РЎв„ўР В Р’В°Р В Р’В±Р В РЎвЂР В Р вЂ¦Р В Р’ВµР РЋРІР‚С™|Р В РЎв„ўР В РЎвЂўР В Р вЂ¦Р РЋРІР‚С™Р В Р’В°Р В РЎвЂќР РЋРІР‚С™Р РЋРІР‚в„–|Р В Р’ВР В Р’В·Р В Р’В±Р РЋР вЂљР В Р’В°Р В Р вЂ¦Р В Р вЂ¦Р В РЎвЂўР В Р’Вµ|Р В Р Р‹Р РЋР вЂљР В Р’В°Р В Р вЂ Р В Р вЂ¦Р В Р’ВµР В Р вЂ¦Р В РЎвЂР В Р’Вµ|Р В РЎСџР В РЎвЂўР В РЎвЂР РЋР С“Р В РЎвЂќ|Р В РЎв„ўР В РЎвЂўР РЋР вЂљР В Р’В·Р В РЎвЂР В Р вЂ¦Р В Р’В°)/i.test(label))return;
    action.style.setProperty("align-items","center","important");
    action.style.setProperty("justify-content","flex-start","important");
    action.style.setProperty("min-width","2.82rem","important");
    action.style.setProperty("gap",".1rem","important");
    action.style.setProperty("padding",".1rem .05rem","important");
    var svg=action.querySelector("svg");
    if(svg){
      svg.style.setProperty("width","20px","important");
      svg.style.setProperty("height","20px","important");
      svg.style.setProperty("min-width","20px","important");
      svg.style.setProperty("min-height","20px","important");
      svg.style.setProperty("transform","none","important");
      svg.style.setProperty("scale","1","important");
      svg.style.setProperty("stroke-width","1.8","important");
    }
    [].slice.call(action.querySelectorAll("span")).forEach(function(span){
      var text=(span.textContent||"").replace(/\s+/g," ").trim();
      if(!/[A-Za-z\u0400-\u04FF]/.test(text))return;
      span.style.setProperty("font-size","9px","important");
      span.style.setProperty("line-height","9px","important");
      span.style.setProperty("height","9px","important");
      span.style.setProperty("white-space","nowrap","important");
    });
  });
  if(isMobile()&&isAccount()){
    document.body.classList.add("gp-pravki-current","gp-pravki-current-account");
    document.body.style.setProperty("padding-top","56px","important");
    header.style.setProperty("height","56px","important");
    header.style.setProperty("min-height","0px","important");
    header.style.setProperty("max-height","56px","important");
    fitBrandToHeader(header);
    var inner=header.firstElementChild;
    if(inner)inner.style.setProperty("padding-bottom","0px","important");
    [].slice.call(document.body.children||[]).forEach(function(child){
      if(child.tagName==="DIV"&&child.querySelector&&child.querySelector("main")){
        child.style.setProperty("padding-top","0px","important");
      }
    });
    var main=document.querySelector("main");
    if(main){
      main.style.setProperty("padding-top",".35rem","important");
      main.style.setProperty("margin-top","0px","important");
    }
    var grid=document.querySelector("main > div.grid");
    if(grid){
      grid.style.setProperty("padding-top","0px","important");
      grid.style.setProperty("margin-top","0px","important");
    }
  }
}

function gpLiteReadJsonArray93(key){
  var memory=[];
  try{
    memory=window.__gpActionMemoryStore&&window.__gpActionMemoryStore[key];
    if(!Array.isArray(memory))memory=[];
  }catch(error){}
  try{
    var value=window.localStorage&&window.localStorage.getItem(key);
    var parsed=value?JSON.parse(value):[];
    if(Array.isArray(parsed))return parsed;
  }catch(error){}
  if(memory.length)return memory.slice();
  try{
    var nameStore=JSON.parse(window.name||"{}");
    var nameValues=nameStore&&nameStore.__gpActionStore&&nameStore.__gpActionStore[key];
    if(Array.isArray(nameValues))return nameValues;
  }catch(error){}
  try{
    var cookieName="gp_store_"+encodeURIComponent(key)+"=";
    var cookie=(document.cookie||"").split("; ").filter(function(item){return item.indexOf(cookieName)===0})[0];
    if(cookie){
      var cookieParsed=JSON.parse(decodeURIComponent(cookie.slice(cookieName.length)));
      if(Array.isArray(cookieParsed))return cookieParsed;
    }
  }catch(error){}
  return [];
}

function gpLiteWriteJsonArray93(key,value){
  try{
    var clean=Array.isArray(value)?value:[];
    var next=JSON.stringify(clean);
    window.__gpActionMemoryStore=window.__gpActionMemoryStore||{};
    window.__gpActionMemoryStore[key]=clean.slice();
    try{if(window.localStorage&&window.localStorage.getItem(key)!==next)window.localStorage.setItem(key,next)}catch(storageError){}
    try{
      var nameStore={};
      try{nameStore=JSON.parse(window.name||"{}")||{}}catch(nameParseError){nameStore={}};
      nameStore.__gpActionStore=nameStore.__gpActionStore||{};
      nameStore.__gpActionStore[key]=clean.slice();
      window.name=JSON.stringify(nameStore);
    }catch(nameError){}
    try{document.cookie="gp_store_"+encodeURIComponent(key)+"="+encodeURIComponent(next)+"; Max-Age=31536000; Path=/; SameSite=Lax"}catch(cookieError){}
  }catch(error){}
}

function gpLiteCanonicalId93(value){
  var raw="";
  if(typeof value==="string")raw=value;
  else if(value&&typeof value==="object")raw=value.productId||value.id||value.href||"";
  raw=String(raw||"").replace(/\s+/g," ").trim();
  if(!raw)return "";
  try{
    if(raw.indexOf("/product/")>-1){
      raw=new URL(raw,location.origin).pathname.split("/").filter(Boolean).pop()||raw;
    }
  }catch(error){}
  if(raw.indexOf("/product/")===0)raw=raw.split("/").filter(Boolean).pop()||"";
  raw=raw.replace(/^product-/,"");
  return raw?"product-"+raw:"";
}

function gpLiteUnique93(value){
  var seen={};
  var result=[];
  (Array.isArray(value)?value:[]).forEach(function(item){
    var id=gpLiteCanonicalId93(item);
    if(!id||seen[id])return;
    seen[id]=true;
    result.push(id);
  });
  return result;
}

function gpLiteFavoriteIds93(){
  var ids=gpLiteUnique93(gpLiteReadJsonArray93("lumera_favorites").concat(gpLiteReadJsonArray93("gp_favorite_ids_v1")));
  gpLiteWriteJsonArray93("lumera_favorites",ids);
  gpLiteWriteJsonArray93("gp_favorite_ids_v1",ids);
  return ids;
}

function gpLiteNormalizePrice95(value){
  var raw=String(value||"").replace(/[\u00a0\u202f]+/g," ").replace(/[ \t]+/g," ").trim();
  if(!/(РІвЂљР…|РЎР‚РЎС“Р В±\.?|РЎР‚\.?|Р Р†РІР‚С™Р вЂ¦|Р В Р вЂ Р Р†Р вЂљРЎв„ўР В РІР‚В¦)/i.test(raw))return "";
  raw=raw.replace(/Р В Р вЂ Р Р†Р вЂљРЎв„ўР В РІР‚В¦|Р Р†РІР‚С™Р вЂ¦/gi,"РІвЂљР…");
  var matches=[];
  raw.replace(/(^|[^\d])((?:\d{1,3}(?:[ \t]\d{3})+|\d+|0)[ \t]*(?:РІвЂљР…|РЎР‚РЎС“Р В±\.?|РЎР‚\.?))/gi,function(_,prefix,price){
    matches.push(price.replace(/(?:РЎР‚РЎС“Р В±\.?|РЎР‚\.?)$/i,"РІвЂљР…").trim());
    return _;
  });
  if(!matches.length)return "";
  var price=matches[matches.length-1];
  var digits=price.replace(/[^\d]/g,"");
  if(digits.length>6){
    var tail4=digits.slice(-4);
    if(Number(tail4)>=100)price=tail4.slice(0,1)+" "+tail4.slice(1)+" РІвЂљР…";
  }
  return price.replace(/(?:РЎР‚РЎС“Р В±\.?|РЎР‚\.?)$/i,"РІвЂљР…").trim();
}

function gpLiteReadSnapshots93(){
  var memory={};
  try{memory=window.__gpProductSnapshotMemory&&typeof window.__gpProductSnapshotMemory==="object"?window.__gpProductSnapshotMemory:{}}catch(error){}
  try{
    var value=window.localStorage&&window.localStorage.getItem("gp_product_snapshots_v1");
    var parsed=value?JSON.parse(value):{};
    if(parsed&&typeof parsed==="object"&&!Array.isArray(parsed))return Object.assign({},parsed,memory);
  }catch(error){}
  try{
    var nameStore=JSON.parse(window.name||"{}");
    var nameSnapshots=nameStore&&nameStore.__gpProductSnapshots;
    if(nameSnapshots&&typeof nameSnapshots==="object"&&!Array.isArray(nameSnapshots))return Object.assign({},nameSnapshots,memory);
  }catch(nameError){}
  try{
    var cookieName="gp_store_"+encodeURIComponent("gp_product_snapshots_v1")+"=";
    var cookie=(document.cookie||"").split("; ").filter(function(item){return item.indexOf(cookieName)===0})[0];
    if(cookie){
      var cookieParsed=JSON.parse(decodeURIComponent(cookie.slice(cookieName.length)));
      if(cookieParsed&&typeof cookieParsed==="object"&&!Array.isArray(cookieParsed))return Object.assign({},cookieParsed,memory);
    }
  }catch(cookieError){}
  return Object.assign({},memory);
}

function gpLiteWriteSnapshots95(map){
  try{window.__gpProductSnapshotMemory=map||{}}catch(error){}
  try{window.localStorage&&window.localStorage.setItem("gp_product_snapshots_v1",JSON.stringify(map||{}))}catch(error){}
  try{
    var nameStore={};
    try{nameStore=JSON.parse(window.name||"{}")||{}}catch(nameParseError){nameStore={}};
    nameStore.__gpProductSnapshots=map||{};
    window.name=JSON.stringify(nameStore);
  }catch(nameError){}
  try{document.cookie="gp_store_"+encodeURIComponent("gp_product_snapshots_v1")+"="+encodeURIComponent(JSON.stringify(map||{}))+"; Max-Age=31536000; Path=/; SameSite=Lax"}catch(cookieError){}
}

function gpLiteProductSnapshotFromCard95(card,id){
  if(!card||!id)return null;
  var link=card.querySelector('a[href^="/product/"],a[href*="/product/"]');
  var img=card.querySelector("img");
  var text=card.textContent||"";
  var title=(img&&img.alt)||((link&&link.textContent)||"").replace(/\s+/g," ").trim()||gpLiteTitleFromId93(id);
  var price=gpLiteNormalizePrice95(text);
  return{
    id:id,
    href:link?link.getAttribute("href"):"/catalog/all-products",
    title:title,
    image:(img&&(img.currentSrc||img.src||img.getAttribute("src")))||"",
    price:price
  };
}

function gpLiteMergeSnapshot95(previous,next){
  previous=previous&&typeof previous==="object"?previous:{};
  next=next&&typeof next==="object"?next:{};
  var merged=Object.assign({},previous,next);
  ["title","href","image","price"].forEach(function(key){
    if((next[key]===undefined||next[key]===null||next[key]==="")&&previous[key])merged[key]=previous[key];
  });
  if(merged.price){
    var normalized=gpLiteNormalizePrice95(merged.price);
    if(normalized)merged.price=normalized;
  }
  return merged;
}

function gpLiteHarvestSnapshots95(main,ids){
  if(!main)return;
  var allowed={};
  (Array.isArray(ids)?ids:[]).forEach(function(id){allowed[id]=true});
  var map=gpLiteReadSnapshots93();
  var changed=false;
  [].slice.call(main.querySelectorAll("article")).forEach(function(card){
    if(card.closest&&card.closest("[data-gp-lite-favorites-page],[data-gp-storage-action-page]"))return;
    var link=card.querySelector('a[href^="/product/"],a[href*="/product/"]');
    if(!link)return;
    var id="";
    try{id=gpLiteCanonicalId93(new URL(link.getAttribute("href"),location.origin).pathname.split("/").filter(Boolean).pop()||"")}catch(error){id=gpLiteCanonicalId93(link.getAttribute("href")||"")}
    if(!id||Object.keys(allowed).length&&!allowed[id])return;
    var snapshot=gpLiteProductSnapshotFromCard95(card,id);
    if(!snapshot)return;
    var previous=map[id]||{};
    var merged=gpLiteMergeSnapshot95(previous,snapshot);
    if(JSON.stringify(previous)!==JSON.stringify(merged)){
      map[id]=merged;
      changed=true;
    }
  });
  if(changed)gpLiteWriteSnapshots95(map);
}

function gpLiteNativeFavoriteIds105(main){
  if(!main)return [];
  var map=gpLiteReadSnapshots93();
  var ids=[];
  var changed=false;
  [].slice.call(main.querySelectorAll("article")).forEach(function(card){
    if(card.closest&&card.closest("[data-gp-lite-favorites-page],[data-gp-storage-action-page]"))return;
    var link=card.querySelector('a[href^="/product/"],a[href*="/product/"]');
    if(!link)return;
    var href=link.getAttribute("href")||"";
    var id=gpLiteCanonicalId93(href);
    if(!id)return;
    ids.push(id);
    var snapshot=gpLiteProductSnapshotFromCard95(card,id);
    if(!snapshot)return;
    var previous=map[id]||{};
    var merged=gpLiteMergeSnapshot95(previous,snapshot);
    if(JSON.stringify(previous)!==JSON.stringify(merged)){
      map[id]=merged;
      changed=true;
    }
  });
  if(changed)gpLiteWriteSnapshots95(map);
  return gpLiteUnique93(ids);
}

function gpLiteEscape93(value){
  return String(value==null?"":value).replace(/[&<>"']/g,function(ch){
    return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch];
  });
}

function gpLiteTitleFromId93(id){
  return String(id||"").replace(/^product-/,"").split("-").filter(Boolean).slice(0,9).map(function(part){
    try{part=decodeURIComponent(part)}catch(error){}
    return part.charAt(0).toUpperCase()+part.slice(1);
  }).join(" ");
}

function gpLiteHeartIcon93(){
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.2-4.7-9.6-9.1C.5 8.4 2.5 4 6.6 4c2.1 0 3.6 1.1 4.5 2.4C12 5.1 13.5 4 15.6 4c4.1 0 6.1 4.4 4.2 7.9C19.2 16.3 12 21 12 21z"/></svg>';
}

function gpLiteCompareIcon93(){
  return '<svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/></svg>';
}

function gpLiteCartIcon93(){
  return '<svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>';
}

function gpLiteFavoritesHtml93(ids){
  var snapshots=gpLiteReadSnapshots93();
  var body="";
  if(ids.length){
    body='<div class="gp-lite-favorites-grid">'+ids.map(function(id){
      var snapshot=snapshots[id]||{};
      var href=snapshot.href||"/catalog/all-products";
      var title=snapshot.title||gpLiteTitleFromId93(id);
      var image=snapshot.image||"/editorial/hero-beauty.jpg";
      var price=snapshot.price||"\u2014";
      return '<article class="gp-lite-favorites-card" data-gp-lite-favorites-product="'+gpLiteEscape93(id)+'">'+
        '<button type="button" class="gp-lite-favorites-heart" data-gp-compare-favorite="'+gpLiteEscape93(id)+'" aria-label="\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e">'+gpLiteHeartIcon93()+'</button>'+
        '<a class="gp-lite-favorites-card-image" href="'+gpLiteEscape93(href)+'"><img src="'+gpLiteEscape93(image)+'" alt="'+gpLiteEscape93(title)+'" loading="lazy"></a>'+
        '<div class="gp-lite-favorites-card-body"><a class="gp-lite-favorites-card-title" href="'+gpLiteEscape93(href)+'">'+gpLiteEscape93(title)+'</a>'+
        '<div class="gp-lite-favorites-footer"><div class="gp-lite-favorites-price"><span>\u0426\u0435\u043d\u0430</span><strong>'+gpLiteEscape93(price)+'</strong></div>'+
        '<div class="gp-lite-favorites-actions"><button type="button" class="gp-lite-favorites-action" data-gp-compare-toggle="'+gpLiteEscape93(id)+'"><span class="gp-lite-favorites-action-bubble">'+gpLiteCompareIcon93()+'</span><small>\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c</small></button><button type="button" class="gp-lite-favorites-action" data-gp-compare-cart="'+gpLiteEscape93(id)+'"><span class="gp-lite-favorites-action-bubble">'+gpLiteCartIcon93()+'</span><small>\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443</small></button></div></div></div></article>';
    }).join("")+'</div>';
  }else{
    body='<div class="gp-lite-favorites-empty"><h2>\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432</h2><p>\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e \u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c.</p><a href="/catalog">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433</a></div>';
  }
  return '<header class="gp-lite-favorites-header"><h1>\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435</h1><p>\u0422\u043e\u0432\u0430\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435.</p></header>'+body;
}

function gpLiteHideNativeFavorites93(main){
  [].slice.call(main.children||[]).forEach(function(node){
    if(node.matches&&node.matches("[data-gp-lite-favorites-page],[data-gp-storage-action-page]"))return;
    node.dataset.gpLiteHiddenFavorites="true";
    node.style.setProperty("display","none","important");
  });
  [].slice.call(main.querySelectorAll("nav,[aria-label*='pagination' i],[class*='pagination' i]")).forEach(function(node){
    if(node.closest&&node.closest("[data-gp-lite-favorites-page],[data-gp-storage-action-page]"))return;
    node.dataset.gpLiteHiddenFavorites="true";
    node.style.setProperty("display","none","important");
  });
}

function gpLiteCleanFavoritesDom106(page){
  if(!gpRefreshFavoritesRoute93())return;
  page=page||document.querySelector("[data-gp-lite-favorites-page]");
  if(!page)return;
  [].slice.call(page.querySelectorAll(".gp-lite-favorites-header")).forEach(function(header){
    header.style.setProperty("position","relative","important");
    header.style.setProperty("top","auto","important");
    header.style.setProperty("right","auto","important");
    header.style.setProperty("bottom","auto","important");
    header.style.setProperty("left","auto","important");
    header.style.setProperty("z-index","1","important");
    header.style.setProperty("margin-bottom","1.15rem","important");
  });
  [].slice.call(page.querySelectorAll("article:not(.gp-lite-favorites-card),[data-favorite-overlay='true'],[data-gp-favorite-overlay='true']")).forEach(function(node){
    node.dataset.gpLiteHiddenFavorites="true";
    node.style.setProperty("display","none","important");
    node.style.setProperty("visibility","hidden","important");
    node.style.setProperty("pointer-events","none","important");
  });
  [].slice.call(page.querySelectorAll(".gp-lite-favorites-card")).forEach(function(card){
    var hearts=[].slice.call(card.querySelectorAll(".gp-lite-favorites-heart"));
    hearts.slice(1).forEach(function(heart){heart.remove()});
    var image=card.querySelector(".gp-lite-favorites-card-image");
    var body=card.querySelector(".gp-lite-favorites-card-body");
    var footer=card.querySelector(".gp-lite-favorites-footer");
    if(image&&image.parentNode===card&&card.children[0]!==image){
      var firstHeart=card.querySelector(".gp-lite-favorites-heart");
      card.insertBefore(image,firstHeart&&firstHeart.nextSibling?firstHeart.nextSibling:card.firstChild);
    }
    card.style.setProperty("position","relative","important");
    card.style.setProperty("display","flex","important");
    card.style.setProperty("flex-direction","column","important");
    card.style.setProperty("height","23.6rem","important");
    card.style.setProperty("min-height","23.6rem","important");
    card.style.setProperty("max-height","23.6rem","important");
    card.style.setProperty("overflow","hidden","important");
    if(image){
      image.style.setProperty("order","1","important");
      image.style.setProperty("display","block","important");
      image.style.setProperty("flex","0 0 13.2rem","important");
      image.style.setProperty("height","13.2rem","important");
      image.style.setProperty("min-height","13.2rem","important");
      image.style.setProperty("max-height","13.2rem","important");
      image.style.setProperty("width","100%","important");
      image.style.setProperty("padding","0","important");
      image.style.setProperty("margin","0","important");
      [].slice.call(image.querySelectorAll("img")).forEach(function(img){
        img.style.setProperty("display","block","important");
        img.style.setProperty("width","100%","important");
        img.style.setProperty("height","100%","important");
        img.style.setProperty("object-fit","cover","important");
        img.style.setProperty("object-position","center","important");
        img.style.setProperty("padding","0","important");
        img.style.setProperty("margin","0","important");
      });
    }
    if(body){
      body.style.setProperty("order","2","important");
      body.style.setProperty("display","flex","important");
      body.style.setProperty("flex","1 1 auto","important");
      body.style.setProperty("min-height","0","important");
      body.style.setProperty("flex-direction","column","important");
    }
    if(footer){
      footer.style.setProperty("display","flex","important");
      footer.style.setProperty("align-items","flex-end","important");
      footer.style.setProperty("justify-content","space-between","important");
      footer.style.setProperty("gap",".75rem","important");
      footer.style.setProperty("margin-top","auto","important");
    }
  });
}
try{window.__gpLiteCleanFavoritesDom106=gpLiteCleanFavoritesDom106}catch(error){}

function gpLiteRenderFavorites93(){
  if(!gpRefreshFavoritesRoute93())return;
  ensureStyle();
  document.documentElement.classList.add("gp-favorites-route93");
  if(document.body)document.body.classList.add("gp-favorites-route93");
  var main=document.querySelector("main");
  if(!main)return;
  var ids=gpLiteFavoriteIds93();
  if(!ids.length){
    var skipNativeFallback=window.__gpLiteFavoritesSkipNativeFallbackUntil&&Date.now()<window.__gpLiteFavoritesSkipNativeFallbackUntil;
    var nativeIds=skipNativeFallback?[]:gpLiteNativeFavoriteIds105(main);
    if(nativeIds.length){
      ids=nativeIds;
      gpLiteWriteJsonArray93("lumera_favorites",ids);
      gpLiteWriteJsonArray93("gp_favorite_ids_v1",ids);
    }
  }
  gpLiteHarvestSnapshots95(main,ids);
  gpLiteHideNativeFavorites93(main);
  var snapshots=gpLiteReadSnapshots93();
  var stateKey="v109|"+ids.join("|")+"|"+ids.map(function(id){
    var item=snapshots[id]||{};
    return [item.title||"",item.price||"",item.image||"",item.href||""].join("~");
  }).join("|");
  var existing=main.querySelector("[data-gp-lite-favorites-page]");
  if(!existing){
    existing=document.createElement("section");
    existing.setAttribute("data-gp-lite-favorites-page","true");
    main.insertBefore(existing,main.firstElementChild);
  }
  existing.className="gp-lite-favorites-page";
  existing.setAttribute("data-gp-lite-favorites-page","true");
  if(existing.dataset.gpLiteFavoritesState!==stateKey){
    existing.innerHTML=gpLiteFavoritesHtml93(ids);
    existing.dataset.gpLiteFavoritesState=stateKey;
  }
  gpLiteCleanFavoritesDom106(existing);
  gpLiteSyncFavoriteActionButtons135(existing);
}

function gpLiteInstallFavoritesObserver93(){
  if(!gpRefreshFavoritesRoute93()||window.__gpLiteFavoritesObserver93)return;
  window.__gpLiteFavoritesObserver93=true;
  var schedule=function(){
    clearTimeout(window.__gpLiteFavoritesTimer93);
    window.__gpLiteFavoritesTimer93=setTimeout(gpLiteRenderFavorites93,80);
  };
  try{
    new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  }catch(error){}
  addEventListener("storage",schedule,{passive:true});
  addEventListener("focus",schedule,{passive:true});
}

function gpLiteSetStringSet93(primaryKey,mirrorKey,id,active){
  id=gpLiteCanonicalId93(id);
  if(!id)return;
  var written={};
  [primaryKey,mirrorKey].forEach(function(key){
    var current=gpLiteUnique93(gpLiteReadJsonArray93(key)).filter(function(item){return item!==id});
    if(active)current.push(id);
    current=gpLiteUnique93(current);
    gpLiteWriteJsonArray93(key,current);
    written[key]=current;
  });
  return written;
}

function gpLiteAddCart105(id){
  id=gpLiteCanonicalId93(id);
  if(!id)return;
  var snapshots=gpLiteReadSnapshots93();
  var snapshot=snapshots[id]||{};
  var current=gpLiteReadJsonArray93("lumera_cart");
  var found=false;
  current=(Array.isArray(current)?current:[]).map(function(item){
    if(!item||gpLiteCanonicalId93(item.productId||item.id||item.href)!==id)return item;
    found=true;
    return Object.assign({},item,{productId:id,quantity:Math.max(1,Number(item.quantity)||1)+1});
  }).filter(Boolean);
  if(!found)current.push({
    productId:id,
    quantity:1,
    title:snapshot.title||"",
    price:snapshot.price||"",
    image:snapshot.image||"",
    href:snapshot.href||("/product/"+id.replace(/^product-/,""))
  });
  gpLiteWriteJsonArray93("lumera_cart",current);
  return current;
}

function gpLiteCompareHas135(id){
  id=gpLiteCanonicalId93(id);
  if(!id)return false;
  return gpLiteUnique93(gpLiteReadJsonArray93("lumera_compare").concat(gpLiteReadJsonArray93("gp_compare_ids_v1"))).indexOf(id)>-1;
}

function gpLiteCartItems135(){
  var current=gpLiteReadJsonArray93("lumera_cart");
  return Array.isArray(current)?current.filter(Boolean):[];
}

function gpLiteCartHas135(id){
  id=gpLiteCanonicalId93(id);
  if(!id)return false;
  return gpLiteCartItems135().some(function(item){
    return gpLiteCanonicalId93(item&&typeof item==="object"?(item.productId||item.id||item.href):item)===id;
  });
}

function gpLiteRemoveCart135(id){
  id=gpLiteCanonicalId93(id);
  if(!id)return gpLiteCartItems135();
  var current=gpLiteCartItems135().filter(function(item){
    return gpLiteCanonicalId93(item&&typeof item==="object"?(item.productId||item.id||item.href):item)!==id;
  });
  gpLiteWriteJsonArray93("lumera_cart",current);
  return current;
}

function gpLiteDispatchStorage135(key,value){
  var next="";
  try{next=JSON.stringify(Array.isArray(value)?value:[])}catch(error){next="[]"}
  try{
    window.dispatchEvent(new StorageEvent("storage",{key:key,newValue:next,url:location.href}));
  }catch(storageError){
    try{window.dispatchEvent(new Event("storage"))}catch(error){}
  }
}

function gpLiteSyncActionState135(kind,keyMap){
  var keys=keyMap&&typeof keyMap==="object"?Object.keys(keyMap):[];
  keys.forEach(function(key){gpLiteDispatchStorage135(key,keyMap[key])});
  try{
    window.dispatchEvent(new CustomEvent("gp:shop-storage",{detail:{kind:kind,keys:keys}}));
    window.dispatchEvent(new CustomEvent("gp:actions-updated",{detail:{kind:kind,keys:keys}}));
    window.dispatchEvent(new CustomEvent(kind==="cart"?"gp:cart-updated":"gp:compare-updated",{detail:{keys:keys}}));
  }catch(customEventError){}
  var sync=function(){
    try{if(window.gpDesktopFixSyncHeader117)window.gpDesktopFixSyncHeader117()}catch(syncError){}
  };
  sync();
  setTimeout(sync,40);
  setTimeout(sync,180);
}

function gpLiteActionIcon135(kind){
  return kind==="cart"?gpLiteCartIcon93():gpLiteCompareIcon93();
}

function gpLiteSetActionVisual135(button,kind,active){
  if(!button)return;
  var label=active?(kind==="cart"?"Добавлено":"В сравнении"):(kind==="cart"?"В корзину":"Сравнить");
  button.classList.toggle("is-added",!!active);
  button.setAttribute("aria-label",label);
  button.setAttribute("title",label);
  var bubble=button.querySelector(".gp-lite-favorites-action-bubble");
  if(bubble){
    bubble.innerHTML=gpLiteActionIcon135(kind);
    bubble.style.setProperty("background","#fff","important");
    bubble.style.setProperty("border-color",active?"rgba(175,90,102,.38)":"rgba(175,90,102,.18)","important");
    bubble.style.setProperty("color",active?"var(--brand-primary,#af5a66)":"var(--brand-text,#241d19)","important");
    [].slice.call(bubble.querySelectorAll("svg,path")).forEach(function(node){
      node.style.setProperty("color",active?"var(--brand-primary,#af5a66)":"var(--brand-text,#241d19)","important");
      node.style.setProperty("stroke","currentColor","important");
      node.style.setProperty("fill","none","important");
    });
  }
  var caption=button.querySelector("small");
  if(caption)caption.textContent=label;
}

function gpLiteMarkAction135(button,kind){
  gpLiteSetActionVisual135(button,kind,true);
}

function gpLiteSyncFavoriteActionButtons135(root){
  root=root||document;
  [].slice.call(root.querySelectorAll("[data-gp-compare-toggle]")).forEach(function(button){
    gpLiteSetActionVisual135(button,"compare",gpLiteCompareHas135(button.getAttribute("data-gp-compare-toggle")));
  });
  [].slice.call(root.querySelectorAll("[data-gp-compare-cart]")).forEach(function(button){
    gpLiteSetActionVisual135(button,"cart",gpLiteCartHas135(button.getAttribute("data-gp-compare-cart")));
  });
}

function gpLiteRemoveFavoriteFast109(button,id){
  id=gpLiteCanonicalId93(id);
  if(!id)return;
  window.__gpLiteFavoritesSkipNativeFallbackUntil=Date.now()+5000;
  gpLiteSetStringSet93("lumera_favorites","gp_favorite_ids_v1",id,false);
  var card=button&&button.closest&&button.closest(".gp-lite-favorites-card");
  if(card){
    card.style.setProperty("transition","opacity .08s ease, transform .08s ease","important");
    card.style.setProperty("opacity","0","important");
    card.style.setProperty("transform","scale(.985)","important");
    setTimeout(function(){
      if(card.parentNode)card.parentNode.removeChild(card);
      if(!document.querySelector(".gp-lite-favorites-card"))gpLiteRenderFavorites93();
    },85);
  }
  setTimeout(gpLiteRenderFavorites93,130);
  try{window.dispatchEvent(new Event("storage"))}catch(error){}
}

function gpLiteInstallActionHandlers93(){
  if(window.__gpLiteFavoritesActionHandlers93)return;
  window.__gpLiteFavoritesActionHandlers93=true;
  document.addEventListener("click",function(event){
    if(!gpRefreshFavoritesRoute93())return;
    var favorite=event.target.closest&&event.target.closest("[data-gp-compare-favorite]");
    if(favorite){
      var favoriteId=gpLiteCanonicalId93(favorite.getAttribute("data-gp-compare-favorite"));
      if(!favoriteId)return;
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpLiteRemoveFavoriteFast109(favorite,favoriteId);
      return;
    }
    var compare=event.target.closest&&event.target.closest("[data-gp-compare-toggle]");
    var cart=event.target.closest&&event.target.closest("[data-gp-compare-cart]");
    if(compare){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      var compareId=gpLiteCanonicalId93(compare.getAttribute("data-gp-compare-toggle"));
      var compareActive=!gpLiteCompareHas135(compareId);
      var compareWritten=gpLiteSetStringSet93("lumera_compare","gp_compare_ids_v1",compareId,compareActive);
      gpLiteSetActionVisual135(compare,"compare",compareActive);
      gpLiteSyncActionState135("compare",compareWritten);
      return;
    }
    if(cart){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      var cartId=gpLiteCanonicalId93(cart.getAttribute("data-gp-compare-cart"));
      var cartActive=!gpLiteCartHas135(cartId);
      var cartItems=cartActive?gpLiteAddCart105(cartId):gpLiteRemoveCart135(cartId);
      gpLiteSetActionVisual135(cart,"cart",cartActive);
      gpLiteSyncActionState135("cart",{lumera_cart:cartItems});
      return;
    }
  },true);
}

function ready(fn){
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",fn,{once:true});
  else fn();
}

function scheduleLite(){
  gpRefreshFavoritesRoute93();
  normalizeHeader();
  gpLiteRenderFavorites93();
  gpLiteSyncFavoriteActionButtons135();
  gpLiteInstallFavoritesObserver93();
  gpLiteInstallActionHandlers93();
  setTimeout(normalizeHeader,120);
  setTimeout(function(){gpLiteRenderFavorites93();gpLiteSyncFavoriteActionButtons135()},120);
  setTimeout(normalizeHeader,520);
  setTimeout(function(){gpLiteRenderFavorites93();gpLiteSyncFavoriteActionButtons135()},520);
  setTimeout(function(){gpLiteRenderFavorites93();gpLiteSyncFavoriteActionButtons135()},1500);
}

try{
  window.gpLiteRenderFavorites117=gpLiteRenderFavorites93;
  window.gpLiteScheduleFavorites117=scheduleLite;
}catch(error){}

function loadFullRuntime(){
  if(window.__gpFullRuntime93Loading||window.__gpActionsSync20260618Full95)return;
  window.__gpFullRuntime93Loading=true;
  var script=document.createElement("script");
  script.src=FULL_RUNTIME_SRC;
  script.async=true;
  script.onload=function(){window.__gpFullRuntime93Loaded=true};
  script.onerror=function(){
    window.__gpFullRuntime93Loading=false;
    setTimeout(loadFullRuntime,4500);
  };
  document.head.appendChild(script);
}

function scheduleFullRuntime(){
  var mobile=isMobile();
  var timeout=mobile?900:300;
  if(window.requestIdleCallback)window.requestIdleCallback(loadFullRuntime,{timeout:timeout});
  else setTimeout(loadFullRuntime,mobile?600:0);
  setTimeout(loadFullRuntime,mobile?1500:900);
}

ready(scheduleLite);
addEventListener("pageshow",scheduleLite,{passive:true});
if(document.readyState==="complete")scheduleFullRuntime();
else addEventListener("load",scheduleFullRuntime,{once:true,passive:true});
}catch(error){
  console.warn("gp android lite failed",error);
}
})();

;(function(){
try{
if(window.__gpFinalFixes98)return;
window.__gpFinalFixes98=true;

var AUTH_KEY="gp_auth_pending_credentials_v2";
var HEART_ROUTE=location.search.indexOf("favorites=1")>-1;
function isHeartRoute117(){
  return location.search.indexOf("favorites=1")>-1;
}

function ready(fn){
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",fn,{once:true});
  else fn();
}

function readJson(key,fallback){
  try{
    var raw=window.localStorage&&window.localStorage.getItem(key);
    if(raw)return JSON.parse(raw);
  }catch(error){
  }
  try{
    var memory=window.__gpActionMemoryStore&&window.__gpActionMemoryStore[key];
    if(memory!==undefined)return memory;
  }catch(memoryError){}
  try{
    var nameStore=JSON.parse(window.name||"{}");
    var nameValue=nameStore&&nameStore.__gpActionStore&&nameStore.__gpActionStore[key];
    if(nameValue!==undefined)return nameValue;
  }catch(nameError){}
  try{
    var cookieName="gp_store_"+encodeURIComponent(key)+"=";
    var cookie=(document.cookie||"").split("; ").filter(function(item){return item.indexOf(cookieName)===0})[0];
    if(cookie)return JSON.parse(decodeURIComponent(cookie.slice(cookieName.length)));
  }catch(cookieError){}
  return fallback;
}

function writeJson(key,value){
  try{window.localStorage&&window.localStorage.setItem(key,JSON.stringify(value))}catch(error){}
}

function cleanId(value){
  return String(value||"").trim().toLowerCase();
}

function dedupeArray(value,mapper){
  var result=[];
  var seen={};
  (Array.isArray(value)?value:[]).forEach(function(item){
    var id=mapper?mapper(item):item;
    id=cleanId(id);
    if(!id||seen[id])return;
    seen[id]=true;
    result.push(mapper?item:id);
  });
  return result;
}

function normalizeStorage(){
  var favs=dedupeArray(readJson("lumera_favorites",[]));
  var favIds=dedupeArray(readJson("gp_favorite_ids_v1",[]));
  var merged=dedupeArray(favs.concat(favIds));
  writeJson("lumera_favorites",merged);
  writeJson("gp_favorite_ids_v1",merged);
  var compare=dedupeArray(readJson("lumera_compare",[]));
  writeJson("lumera_compare",compare);
  var cart=dedupeArray(readJson("lumera_cart",[]),function(item){return item&&item.productId});
  if(cart.length){
    cart=cart.map(function(item){
      var quantity=Math.max(1,Number(item&&item.quantity)||1);
      return {productId:item.productId,quantity:quantity};
    });
    writeJson("lumera_cart",cart);
  }
}

function addPageClasses(){
  if(!document.body)return;
  var path=location.pathname.replace(/^\/+|\/+$/g,"")||"home";
  var parts=path.split("/");
  document.body.classList.add("gp-final-ready","gp-path-"+parts[0]);
  if(parts[0]==="catalog"&&parts[1])document.body.classList.add("gp-path-category");
  if(isHeartRoute117()){
    document.documentElement.classList.add("gp-favorites-route93");
    document.body.classList.add("gp-favorites-route93","gp-final-favorites-route");
  }else{
    document.documentElement.classList.remove("gp-favorites-route93");
    document.body.classList.remove("gp-favorites-route93","gp-final-favorites-route");
  }
}

function addStyle(){
  if(document.getElementById("gp-final-fixes106-style"))return;
  var style=document.createElement("style");
  style.id="gp-final-fixes106-style";
  style.textContent=[
    "html.gp-favorites-route93 body.gp-favorites-storage-ready [data-gp-lite-favorites-page],html.gp-favorites-route93 body [data-gp-lite-favorites-page]{display:block!important;visibility:visible!important}",
    "html.gp-favorites-route93 body main>*:not([data-gp-lite-favorites-page]){display:none!important;visibility:hidden!important}",
    "html.gp-favorites-route93 body main>[data-gp-lite-hidden-favorites='true'],html.gp-favorites-route93 body main>section:not([data-gp-lite-favorites-page]) article:not(.gp-lite-favorites-card){display:none!important}",
    ".gp-lite-favorites-page{width:min(90vw,108rem)!important;margin:1.5rem auto 4rem!important;display:block!important;background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important;padding:0!important}",
    ".gp-lite-favorites-header{margin-bottom:1.15rem!important}",
    ".gp-lite-favorites-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:1.25rem!important;align-items:stretch!important}",
    ".gp-lite-favorites-card{display:grid!important;grid-template-rows:12.2rem 1fr!important;min-height:23.6rem!important;height:23.6rem!important;max-height:23.6rem!important;border-radius:1.65rem!important}",
    ".gp-lite-favorites-card-image{height:12.2rem!important;aspect-ratio:auto!important;background:#fff!important}",
    ".gp-lite-favorites-card-image img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important}",
    ".gp-lite-favorites-card-body{display:flex!important;min-height:0!important;flex-direction:column!important}",
    ".gp-lite-favorites-card-title{font-family:var(--font-heading,serif)!important;min-height:3.05rem!important;font-size:1.04rem!important;line-height:1.12!important}",
    ".gp-lite-favorites-footer{display:flex!important;align-items:flex-end!important;justify-content:space-between!important;gap:.75rem!important;margin-top:auto!important;border-top:1px solid rgba(175,90,102,.1)!important;padding-top:.82rem!important}.gp-lite-favorites-price{margin-top:0!important;border-top:0!important;padding-top:0!important}.gp-lite-favorites-price strong{white-space:nowrap!important}.gp-lite-favorites-actions{display:flex!important;align-items:flex-end!important;justify-content:flex-end!important;gap:.55rem!important;margin-top:0!important}.gp-lite-favorites-action{appearance:none!important;min-width:2.55rem!important;border:0!important;background:transparent!important;box-shadow:none!important;padding:0!important}.gp-lite-favorites-action-bubble{width:2.45rem!important;height:2.45rem!important}",
    "html.gp-favorites-route93 header a[href='/catalog'],html.gp-favorites-route93 header a[href='/catalog/all-products'],body.gp-final-favorites-route header a[href='/catalog'],body.gp-final-favorites-route header a[href='/catalog/all-products']{background:#fff!important;color:var(--brand-text,#241d19)!important;border-color:rgba(255,255,255,.75)!important;box-shadow:none!important;outline:0!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1'],html.gp-favorites-route93 header a[href*='favorites'],body.gp-final-favorites-route header a[href*='favorites=1'],body.gp-final-favorites-route header a[href*='favorites']{position:relative!important;background:rgba(255,255,255,.96)!important;color:var(--brand-primary,#af5a66)!important;border-color:rgba(175,90,102,.16)!important;box-shadow:none!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1'] svg,html.gp-favorites-route93 header a[href*='favorites'] svg,body.gp-final-favorites-route header a[href*='favorites=1'] svg,body.gp-final-favorites-route header a[href*='favorites'] svg{display:none!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1']::before,html.gp-favorites-route93 header a[href*='favorites']::before,body.gp-final-favorites-route header a[href*='favorites=1']::before,body.gp-final-favorites-route header a[href*='favorites']::before{content:'\\2661'!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:1.35rem!important;height:1.35rem!important;font-size:1.4rem!important;line-height:1!important;color:var(--brand-primary,#af5a66)!important}",
    "body.gp-path-compare header a[href='/compare'],body.gp-path-compare header a[href*='/compare']{background:var(--brand-primary,#af5a66)!important;color:#fff!important;border-color:var(--brand-primary,#af5a66)!important}",
    "body.gp-path-compare header a[href='/compare'] svg,body.gp-path-compare header a[href*='/compare'] svg{color:inherit!important}",
    "body.gp-path-cart.gp-cart-has-local-items main div:has(> p):has(a[href='/catalog']){display:none!important}",
    "body.gp-path-checkout aside.hidden.lg\\:block{display:block!important;margin-top:1rem!important;border-radius:1.5rem!important;padding:1rem!important}",
    "@media(max-width:1023px){body{--mobile-header-height:58px!important}.gp-final-ready [data-mobile-shell='header']{height:58px!important;min-height:58px!important;max-height:58px!important;border-bottom:1px solid rgba(255,255,255,.72)!important;box-shadow:none!important;overflow:hidden!important;background:var(--brand-background,#f8f3ec)!important}.gp-final-ready [data-mobile-shell='header']>div{padding-top:3px!important;padding-bottom:0!important}.gp-final-ready [data-mobile-shell='header'] [class*='top-full']{display:none!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important}.gp-final-ready [data-mobile-shell='header'] nav[aria-label]{gap:0!important;align-items:start!important}.gp-final-ready [data-mobile-shell='header'] nav[aria-label]>div:first-child{gap:1px!important;margin-left:-10px!important;transform:translateX(-2px)!important}.gp-final-ready [data-mobile-shell='header'] nav[aria-label]>div:last-child{gap:1px!important;margin-right:-9px!important;transform:translateX(5px)!important}.gp-final-ready [data-mobile-shell='header'] nav[aria-label] a,.gp-final-ready [data-mobile-shell='header'] nav[aria-label] button{min-width:38px!important;max-width:48px!important;padding:0 1px!important;border-radius:14px!important;box-shadow:none!important}.gp-final-ready [data-mobile-shell='header'] a[href='/']{transform:translateY(-3px)!important;gap:1px!important}.gp-final-ready [data-mobile-shell='header'] a[href='/'] span{font-size:10px!important;line-height:10px!important}.gp-final-ready [data-mobile-shell='header'] a svg,.gp-final-ready [data-mobile-shell='header'] button svg{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;stroke-width:1.8!important}.gp-final-ready [data-mobile-shell='header'] a span[class*='text-'],.gp-final-ready [data-mobile-shell='header'] button span[class*='text-']{line-height:9px!important;white-space:nowrap!important}.gp-final-ready main{padding-top:.7rem!important;margin-top:0!important}.gp-path-home main{padding-top:.62rem!important}.gp-path-category main{padding-top:.88rem!important}.gp-path-product main,.gp-path-faq main,.gp-path-account main,.gp-path-cart main,.gp-path-checkout main{padding-top:.72rem!important}}",
    "@media(max-width:640px){.gp-lite-favorites-page{width:min(94vw,40rem)!important;margin:.75rem auto 3rem!important}.gp-lite-favorites-header{border-radius:1.45rem!important;padding:1.05rem 1rem!important}.gp-lite-favorites-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}.gp-lite-favorites-card{min-height:17.8rem!important;border-radius:1.25rem!important}.gp-lite-favorites-card-image{height:8.35rem!important;aspect-ratio:auto!important}.gp-lite-favorites-card-body{padding:.7rem .65rem .82rem!important}.gp-lite-favorites-card-title{min-height:2.45rem!important;font-size:.86rem!important;line-height:1.12!important}.gp-lite-favorites-price span{font-size:.58rem!important}.gp-lite-favorites-price strong{font-size:1rem!important;line-height:1.05!important}.gp-lite-favorites-actions{gap:.35rem!important}.gp-lite-favorites-action-bubble{width:2.15rem!important;height:2.15rem!important}.gp-lite-favorites-action small{display:none!important}article[data-card-mode='minimal']{min-height:17.6rem!important;border-radius:1.25rem!important}article[data-card-mode='minimal'] img{object-fit:cover!important;object-position:center!important;padding:0!important}article[data-card-mode='minimal'] .gp-mobile-card-actions{gap:.35rem!important;align-items:flex-end!important}article[data-card-mode='minimal'] .gp-mobile-card-actions button{width:2.2rem!important;height:2.2rem!important;min-width:2.2rem!important}article[data-card-mode='minimal'] .gp-mobile-card-actions span,article[data-card-mode='minimal'] .gp-mobile-card-actions small{font-size:9px!important}.gp-path-account main>div.grid>div:first-child{margin-left:auto!important;margin-right:auto!important;width:min(94vw,28rem)!important}.gp-path-category main section:first-child{margin-top:.15rem!important}.gp-path-category main section.sticky{top:calc(var(--mobile-header-height,58px) + .35rem)!important}.gp-path-category main .fixed.inset-0{padding-top:calc(var(--mobile-header-height,58px) + .8rem + env(safe-area-inset-top))!important}}",
    ".gp-final-filter-icon{display:inline-flex!important;width:1rem!important;height:1rem!important;align-items:center!important;justify-content:center!important}.gp-final-filter-icon svg{display:block!important;width:1rem!important;height:1rem!important}",
    ".gp-desktop-floating-filter-button{font-size:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}.gp-desktop-floating-filter-button>span{display:none!important}.gp-desktop-floating-filter-button .gp-final-filter-icon{width:1.35rem!important;height:1.35rem!important;color:#fff!important}.gp-desktop-floating-filter-button .gp-final-filter-icon svg{width:1.35rem!important;height:1.35rem!important;stroke-width:2!important}",
    ".gp-old-filter-close .gp-final-filter-icon,.gp-old-filter-reset .gp-final-filter-icon{display:none!important}.gp-old-filter-close{font-size:0!important}.gp-old-filter-close::before{content:'\\00d7'!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:100%!important;height:100%!important;font-size:22px!important;line-height:1!important;color:currentColor!important}",
    "body.gp-path-cart.gp-cart-has-local-items main *:has(> a[href='/catalog']):has(p){display:none!important}body.gp-path-cart .gp-cart-row{min-height:7.6rem!important}body.gp-path-cart .gp-cart-row img,body.gp-path-cart [class*='cart'] img{width:84px!important;height:84px!important;min-width:84px!important;max-width:84px!important;object-fit:cover!important;object-position:center!important;flex:0 0 84px!important;transition:none!important}body.gp-path-cart .gp-cart-qty,body.gp-path-cart .gp-cart-qty-v2{min-width:7.2rem!important;flex:0 0 auto!important}body.gp-path-cart header a[href='/cart'] [class*='absolute'],body.gp-path-cart [data-mobile-shell='header'] a[href='/cart'] [class*='absolute']{min-width:1.15rem!important;text-align:center!important;font-variant-numeric:tabular-nums!important}",
    "html.gp-favorites-route93 body [data-gp-lite-favorites-page]{display:block!important;visibility:visible!important;opacity:1!important;height:auto!important;min-height:0!important}html.gp-favorites-route93 [data-mobile-shell='header'] a[href*='favorites=1']{background:rgba(255,255,255,.96)!important;color:var(--brand-primary,#af5a66)!important;border-color:rgba(175,90,102,.16)!important;box-shadow:none!important}html.gp-favorites-route93 [data-mobile-shell='header'] a[href*='favorites=1'] svg{color:var(--brand-primary,#af5a66)!important;fill:currentColor!important;stroke:currentColor!important}",
    "html.gp-favorites-route93 body main>div[data-gp-lite-favorites-page],html.gp-favorites-route93 [data-gp-lite-favorites-page],html.gp-favorites-route93 .gp-lite-favorites-page[data-gp-single-plaque]{background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important;padding:0!important}.gp-lite-favorites-header{background:rgba(255,255,255,.88)!important;border:1px solid rgba(255,255,255,.72)!important;box-shadow:0 18px 48px rgba(36,29,25,.075)!important}.gp-lite-favorites-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}.gp-lite-favorites-card{background:rgba(255,255,255,.92)!important;border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 18px 48px rgba(36,29,25,.075)!important}@media(max-width:1280px){.gp-lite-favorites-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}}@media(max-width:760px){.gp-lite-favorites-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}",
    "html.gp-favorites-route93 main article:not(.gp-lite-favorites-card){display:none!important;visibility:hidden!important;pointer-events:none!important}html.gp-favorites-route93 main [data-favorite-overlay='true'],html.gp-favorites-route93 main [data-gp-favorite-overlay='true']{display:none!important;visibility:hidden!important;pointer-events:none!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page].gp-lite-favorites-page{display:block!important;width:min(90vw,108rem)!important;margin:0 auto 4rem!important;background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important;padding:1.45rem 0 0!important;box-sizing:border-box!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-header{position:relative!important;top:auto!important;right:auto!important;bottom:auto!important;left:auto!important;z-index:1!important;margin-bottom:1.15rem!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:1.25rem!important;align-items:stretch!important;margin-top:1.15rem!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card{position:relative!important;display:flex!important;flex-direction:column!important;height:23.6rem!important;min-height:23.6rem!important;max-height:23.6rem!important;overflow:hidden!important;border-radius:1.65rem!important;background:rgba(255,255,255,.92)!important;border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 18px 48px rgba(36,29,25,.075)!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-image{display:block!important;position:relative!important;order:1!important;flex:0 0 13.2rem!important;width:100%!important;height:13.2rem!important;min-height:13.2rem!important;max-height:13.2rem!important;overflow:hidden!important;background:#fff!important;padding:0!important;margin:0!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-image img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;padding:0!important;margin:0!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-body{order:2!important;display:flex!important;flex:1 1 auto!important;min-height:0!important;flex-direction:column!important;padding:.95rem .95rem 1rem!important;background:#fff!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-title{display:-webkit-box!important;min-height:2.7rem!important;max-height:2.7rem!important;overflow:hidden!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;font-family:var(--font-heading,serif)!important;font-size:1.04rem!important;line-height:1.18!important;color:var(--brand-text,#241d19)!important;text-decoration:none!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-footer{display:flex!important;align-items:flex-end!important;justify-content:space-between!important;gap:.75rem!important;margin-top:auto!important;border-top:1px solid rgba(175,90,102,.1)!important;padding-top:.82rem!important}",
    "html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-price{margin:0!important;border:0!important;padding:0!important;text-align:left!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-price strong{white-space:nowrap!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-actions{display:flex!important;align-items:flex-end!important;justify-content:flex-end!important;gap:.55rem!important;margin:0!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action{position:relative!important;display:grid!important;min-width:2.55rem!important;justify-items:center!important;gap:.3rem!important;border:0!important;background:transparent!important;box-shadow:none!important;padding:0!important;color:var(--brand-text,#241d19)!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action-bubble{width:2.45rem!important;height:2.45rem!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-heart{left:auto!important;right:1rem!important;top:1rem!important;bottom:auto!important;z-index:8!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-heart~.gp-lite-favorites-heart{display:none!important}",
    ".gp-requisites-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:2.25rem!important;height:2.25rem!important;border-radius:.85rem!important;background:rgba(175,90,102,.1)!important;border:1px solid rgba(175,90,102,.18)!important;color:var(--brand-primary,#af5a66)!important;box-shadow:none!important}.gp-requisites-icon svg{display:block!important;width:1.2rem!important;height:1.2rem!important;stroke:currentColor!important}.gp-requisites-card .gp-final-requisites-icon{display:none!important}",
    ".gp-search-fallback-panel{position:fixed!important;z-index:2147483000!important;max-height:min(28rem,70vh)!important;overflow:auto!important;border:1px solid rgba(175,90,102,.16)!important;border-radius:1.1rem!important;background:rgba(255,255,255,.98)!important;box-shadow:0 24px 70px rgba(36,29,25,.18)!important;padding:.45rem!important;color:var(--brand-text,#241d19)!important}.gp-search-fallback-item{display:flex!important;align-items:center!important;gap:.55rem!important;width:100%!important;border:0!important;border-radius:.85rem!important;background:transparent!important;color:inherit!important;padding:.72rem .82rem!important;text-align:left!important;text-decoration:none!important;font-size:.95rem!important;line-height:1.25!important}.gp-search-fallback-item:hover,.gp-search-fallback-item:focus{background:rgba(175,90,102,.08)!important;outline:0!important}.gp-search-fallback-kind{flex:0 0 auto!important;border-radius:999px!important;background:rgba(175,90,102,.1)!important;color:var(--brand-primary,#af5a66)!important;padding:.18rem .48rem!important;font-size:.68rem!important;line-height:1!important;text-transform:uppercase!important;letter-spacing:.08em!important}.gp-search-fallback-title{min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.gp-search-fallback-empty{padding:.8rem .9rem!important;color:var(--brand-muted,#8b7b72)!important;font-size:.92rem!important}",
    ".gp-search-fallback-overlay{position:fixed!important;inset:0!important;z-index:2147482999!important;background:rgba(248,243,236,.98)!important;padding:calc(var(--mobile-header-height,58px) + .85rem) 1rem 1rem!important}.gp-search-fallback-overlay-inner{display:grid!important;gap:.75rem!important}.gp-search-fallback-top{display:flex!important;align-items:center!important;gap:.65rem!important}.gp-search-fallback-overlay input{width:100%!important;border:1px solid rgba(36,29,25,.2)!important;border-radius:999px!important;background:#fff!important;color:var(--brand-text,#241d19)!important;padding:.95rem 1rem!important;font-size:16px!important}.gp-search-fallback-close{display:inline-flex!important;flex:0 0 auto!important;width:2.75rem!important;height:2.75rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.18)!important;background:#fff!important;color:var(--brand-text,#241d19)!important;font-size:1.35rem!important;line-height:1!important}.gp-search-fallback-overlay .gp-search-fallback-panel{position:static!important;max-height:calc(100vh - 9rem)!important;width:100%!important}",
    ".gp-legal-modal-root{position:fixed!important;inset:0!important;z-index:2147483200!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:1rem!important}.gp-legal-backdrop{position:absolute!important;inset:0!important;background:rgba(36,29,25,.24)!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important}.gp-legal-dialog{position:relative!important;width:min(100%,46rem)!important;max-height:min(86vh,46rem)!important;overflow:hidden!important;border-radius:1.4rem!important;border:1px solid rgba(255,255,255,.76)!important;background:rgba(255,255,255,.97)!important;box-shadow:0 28px 80px rgba(36,29,25,.22)!important;color:var(--brand-text,#241d19)!important;padding:1.15rem!important}.gp-legal-close{position:absolute!important;right:.8rem!important;top:.8rem!important;display:inline-flex!important;width:2.35rem!important;height:2.35rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.16)!important;background:#fff!important;color:var(--brand-text,#241d19)!important;font-size:1.45rem!important;line-height:1!important}.gp-legal-kicker{color:var(--brand-primary,#af5a66)!important;font-size:.72rem!important;font-weight:800!important;letter-spacing:.14em!important;text-transform:uppercase!important}.gp-legal-dialog h2{margin:.35rem 2.7rem .8rem 0!important;font-family:var(--font-heading,serif)!important;font-size:clamp(1.45rem,6vw,2.25rem)!important;line-height:1!important}.gp-legal-content{max-height:calc(min(86vh,46rem) - 7rem)!important;overflow:auto!important;-webkit-overflow-scrolling:touch!important;padding-right:.2rem!important}.gp-legal-content p,.gp-legal-content li{font-size:.96rem!important;line-height:1.52!important;color:var(--brand-muted,#6f625b)!important}.gp-legal-content section{margin-top:1rem!important}.gp-legal-content h3{margin:0 0 .45rem!important;font-size:1rem!important;line-height:1.2!important;color:var(--brand-text,#241d19)!important}.gp-legal-content ul{margin:0!important;padding-left:1.1rem!important}.gp-legal-details{display:grid!important;gap:.45rem!important}.gp-legal-details div{display:flex!important;justify-content:space-between!important;gap:1rem!important;border-bottom:1px solid rgba(36,29,25,.08)!important;padding:.35rem 0!important}.gp-legal-details span{color:var(--brand-muted,#8b7b72)!important}.gp-legal-details strong{text-align:right!important;font-weight:700!important}@media(max-width:640px){.gp-legal-modal-root{align-items:flex-end!important;padding:.75rem!important}.gp-legal-dialog{width:100%!important;max-height:calc(100dvh - 1.5rem)!important;border-radius:1.35rem!important;padding:1rem!important}.gp-legal-content{max-height:calc(100dvh - 9.5rem)!important}.gp-legal-details div{display:block!important}.gp-legal-details strong{display:block!important;text-align:left!important;margin-top:.1rem!important}}",
    ".gp-auth-code-step label[data-gp-auth-hidden='true']{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}.gp-auth-code-note{margin:.25rem 0 1rem!important;border-radius:1rem!important;background:rgba(175,90,102,.08)!important;color:var(--brand-text,#241d19)!important;padding:.8rem 1rem!important;font-size:.9rem!important;line-height:1.45!important}",
    "body.gp-path-compare main table,body.gp-path-compare main [role='table']{table-layout:fixed!important}body.gp-path-compare main td,body.gp-path-compare main th{overflow-wrap:anywhere!important;word-break:normal!important;vertical-align:top!important}",
    "@media(max-width:1023px){body.gp-path-account main>div.grid>div:first-child{width:100%!important;max-width:28rem!important;margin-left:auto!important;margin-right:auto!important;left:auto!important;right:auto!important;inset-inline-start:auto!important;inset-inline-end:auto!important;box-sizing:border-box!important;transform:none!important}[data-mobile-shell='header'] a[href*='favorites=1'],body.gp-path-compare [data-mobile-shell='header'] a[href='/compare']{background:transparent!important;border-color:transparent!important;box-shadow:none!important;color:var(--brand-primary,#af5a66)!important;outline:0!important}[data-mobile-shell='header'] a[href*='favorites=1'] svg,body.gp-path-compare [data-mobile-shell='header'] a[href='/compare'] svg{display:block!important;color:currentColor!important;fill:none!important;stroke:currentColor!important}[data-mobile-shell='header'] a[href*='favorites=1']::before{content:none!important;display:none!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}.gp-mobile-floating-filter-button,[data-gp-floating-mobile-filter]{font-size:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}.gp-mobile-floating-filter-button>span,[data-gp-floating-mobile-filter]>span{display:none!important}.gp-mobile-floating-filter-button .gp-final-filter-icon,[data-gp-floating-mobile-filter] .gp-final-filter-icon{display:inline-flex!important;width:1.35rem!important;height:1.35rem!important;color:#fff!important}.gp-mobile-floating-filter-button .gp-final-filter-icon svg,[data-gp-floating-mobile-filter] .gp-final-filter-icon svg{width:1.35rem!important;height:1.35rem!important;stroke-width:2!important}html body .gp-old-filter-overlay{background:transparent!important;backdrop-filter:none!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;padding:calc(var(--mobile-header-height,58px) + .65rem) .75rem calc(var(--mobile-dock-height,5.35rem) + 1.2rem)!important}html body .gp-old-filter-mobile-shell{min-height:0!important;align-items:flex-start!important}html body .gp-old-filter-panel.is-mobile{width:min(100%,22rem)!important;max-height:none!important;overflow:visible!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important}html body .gp-old-filter-panel.is-mobile .gp-old-filter-scroll{max-height:none!important;overflow:visible!important;border-radius:1.35rem!important}html body .gp-old-filter-close::before{content:'\\00d7'!important}}",
    "@media(max-width:1023px){html.gp-favorites-route93 [data-mobile-shell='header'] a[href*='favorites=1'],body.gp-final-favorites-route [data-mobile-shell='header'] a[href*='favorites=1']{background:transparent!important;border-color:transparent!important;box-shadow:none!important;color:var(--brand-primary,#af5a66)!important}html.gp-favorites-route93 [data-mobile-shell='header'] a[href*='favorites=1']::before,body.gp-final-favorites-route [data-mobile-shell='header'] a[href*='favorites=1']::before{content:none!important;display:none!important}html.gp-favorites-route93 [data-mobile-shell='header'] a[href*='favorites=1'] svg,body.gp-final-favorites-route [data-mobile-shell='header'] a[href*='favorites=1'] svg{display:block!important;fill:none!important;stroke:currentColor!important;color:currentColor!important}}",
    "@media(max-width:1023px){.gp-mobile-floating-filter-button:not(:has(.gp-final-filter-icon))::before,[data-gp-floating-mobile-filter]:not(:has(.gp-final-filter-icon))::before{content:''!important;display:block!important;width:1.35rem!important;height:1.35rem!important;background:currentColor!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 6h16M7 12h10M10 18h4' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") center/contain no-repeat!important;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 6h16M7 12h10M10 18h4' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") center/contain no-repeat!important}}",
    "@media(min-width:1024px){.gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter]{position:fixed!important;left:1.15rem!important;top:50%!important;z-index:2147481200!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:3rem!important;height:3rem!important;min-width:3rem!important;min-height:3rem!important;padding:0!important;border:0!important;border-radius:999px!important;background:var(--brand-primary,#af5a66)!important;color:#fff!important;box-shadow:0 18px 38px rgba(175,90,102,.24)!important;transform:translateY(-50%)!important;font-size:0!important;line-height:0!important;overflow:hidden!important}.gp-desktop-floating-filter-button>span:not(.gp-final-filter-icon),[data-gp-floating-desktop-filter]>span:not(.gp-final-filter-icon){display:none!important}.gp-desktop-floating-filter-button .gp-final-filter-icon,[data-gp-floating-desktop-filter] .gp-final-filter-icon{display:inline-flex!important;width:1.35rem!important;height:1.35rem!important;align-items:center!important;justify-content:center!important;color:#fff!important}.gp-desktop-floating-filter-button .gp-final-filter-icon svg,[data-gp-floating-desktop-filter] .gp-final-filter-icon svg{display:block!important;width:1.35rem!important;height:1.35rem!important;stroke-width:2!important}.gp-desktop-floating-filter-button:not(:has(.gp-final-filter-icon))::before,[data-gp-floating-desktop-filter]:not(:has(.gp-final-filter-icon))::before{content:''!important;display:block!important;width:1.35rem!important;height:1.35rem!important;background:currentColor!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 6h16M7 12h10M10 18h4' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") center/contain no-repeat!important;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 6h16M7 12h10M10 18h4' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") center/contain no-repeat!important}}",
    "@media(min-width:1024px){body.gp-path-category:not(.gp-favorites-simple-page) .gp-desktop-product-grid-stable131{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:1.25rem!important;align-items:stretch!important;width:100%!important;max-width:100%!important;min-width:0!important}body.gp-path-category:not(.gp-favorites-simple-page) .gp-desktop-product-grid-stable131>article{width:100%!important;min-width:0!important;max-width:none!important}body.gp-path-category:not(.gp-favorites-simple-page):not(:has(.gp-old-filter-panel:not(.is-mobile))):not(:has(.gp-desktop-filter-panel)) main article:has(a[href*='/product/']){min-width:14rem!important;width:100%!important}@media(max-width:1280px){body.gp-path-category:not(.gp-favorites-simple-page) .gp-desktop-product-grid-stable131{grid-template-columns:repeat(3,minmax(0,1fr))!important}}}",
    "@media(min-width:1024px){.gp-fallback-filter-panel132{position:sticky!important;top:6.4rem!important;align-self:start!important;border-radius:1.75rem!important;border:1px solid rgba(255,255,255,.7)!important;background:linear-gradient(180deg,rgba(247,241,234,.96),rgba(247,241,234,.9))!important;padding:.5rem!important;box-shadow:0 18px 45px rgba(36,29,25,.07)!important}.gp-fallback-filter-panel132 .gp-old-filter-scroll{max-height:calc(100vh - 7rem)!important;overflow-y:auto!important;border-radius:1.55rem!important;background:rgba(249,245,239,.98)!important;padding:1.25rem!important}.gp-fallback-filter-panel132 .gp-old-filter-head{position:sticky!important;top:-1.25rem!important;z-index:3!important;margin:-1.25rem -1.25rem 1rem!important;padding:1.25rem!important;background:linear-gradient(180deg,rgba(249,245,239,.99),rgba(249,245,239,.97) 76%,rgba(249,245,239,.88))!important;display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:.75rem!important}.gp-fallback-filter-panel132 .gp-old-filter-kicker{font-size:.75rem!important;text-transform:uppercase!important;letter-spacing:.24em!important;color:var(--brand-primary,#af5a66)!important}.gp-fallback-filter-panel132 .gp-old-filter-head p{margin:.5rem 0 0!important;color:var(--brand-muted,#8b7b72)!important;font-size:.875rem!important;line-height:1.5!important}.gp-fallback-filter-panel132 .gp-old-filter-count{margin-top:.55rem!important;color:var(--brand-text,#241d19)!important;font-size:.875rem!important;font-weight:500!important}.gp-fallback-filter-panel132 .gp-old-filter-box,.gp-fallback-filter-panel132 .gp-old-filter-section{margin-bottom:.9rem!important;border-radius:1.45rem!important;border:1px solid rgba(255,255,255,.7)!important;background:rgba(255,255,255,.66)!important;box-shadow:0 12px 28px rgba(36,29,25,.05)!important}.gp-fallback-filter-panel132 .gp-old-filter-box{padding:.9rem!important}.gp-fallback-filter-panel132 .gp-old-filter-label{margin-bottom:.7rem!important;font-size:.6875rem!important;font-weight:700!important;text-transform:uppercase!important;letter-spacing:.24em!important;color:var(--brand-muted,#8b7b72)!important}.gp-fallback-filter-panel132 .gp-old-filter-row{display:flex!important;flex-wrap:wrap!important;gap:.55rem!important}.gp-fallback-filter-panel132 .gp-old-filter-pill{min-width:2.65rem!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.18)!important;background:white!important;padding:.58rem .86rem!important;font-size:.875rem!important;color:var(--brand-text,#241d19)!important}.gp-fallback-filter-panel132 .gp-old-filter-pill.is-active,.gp-fallback-filter-panel132 .gp-old-filter-line.is-active{border-color:var(--brand-text,#241d19)!important;background:var(--brand-text,#241d19)!important;color:white!important}.gp-fallback-filter-panel132 .gp-old-filter-section{overflow:hidden!important}.gp-fallback-filter-panel132 .gp-old-filter-section-head{display:flex!important;width:100%!important;align-items:center!important;justify-content:space-between!important;gap:.75rem!important;padding:1.05rem 1rem!important;border:0!important;background:transparent!important;color:var(--brand-muted,#8b7b72)!important;font-size:.72rem!important;font-weight:700!important;text-transform:uppercase!important;letter-spacing:.24em!important;cursor:pointer!important}.gp-fallback-filter-panel132 .gp-old-filter-section-body{display:none!important;padding:0 1rem 1rem!important}.gp-fallback-filter-panel132 .gp-old-filter-section.is-open .gp-old-filter-section-body{display:block!important}.gp-fallback-filter-panel132 .gp-old-filter-line{display:block!important;width:100%!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.14)!important;background:white!important;padding:.62rem .82rem!important;text-align:left!important;font-size:.82rem!important;color:var(--brand-text,#241d19)!important;margin-top:.45rem!important}.gp-fallback-filter-panel132 .gp-old-filter-reset{width:100%!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.18)!important;background:white!important;padding:.72rem 1rem!important;font-size:.78rem!important;font-weight:700!important;letter-spacing:.04em!important;color:var(--brand-text,#241d19)!important}.gp-fallback-filter-panel132 select{width:100%!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.18)!important;background:white!important;color:var(--brand-text,#241d19)!important;padding:.72rem .9rem!important;font-size:.9rem!important}}",
    "@media(max-width:1023px){html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card{height:auto!important;min-height:18.9rem!important;max-height:none!important;display:flex!important;flex-direction:column!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-image{flex:0 0 8.6rem!important;height:8.6rem!important;min-height:8.6rem!important;max-height:8.6rem!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-body{flex:1 1 auto!important;padding:.72rem .68rem .86rem!important;text-align:center!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-card-title{min-height:2.35rem!important;max-height:2.35rem!important;font-size:.86rem!important;line-height:1.16!important;text-align:left!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-footer{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;gap:.58rem!important;width:100%!important;margin-top:auto!important;border-top:1px solid rgba(175,90,102,.1)!important;padding-top:.7rem!important;text-align:center!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-price{width:100%!important;text-align:center!important;margin:0!important;padding:0!important;border:0!important;min-width:0!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-price strong{white-space:normal!important;overflow-wrap:anywhere!important;font-size:1rem!important;line-height:1.1!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-actions{width:100%!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:.7rem!important;margin:0!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action{min-width:2.25rem!important;width:2.25rem!important;height:2.25rem!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action-bubble{width:2.25rem!important;height:2.25rem!important;color:var(--brand-text,#241d19)!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action-bubble svg{width:1.05rem!important;height:1.05rem!important;stroke-width:2!important}html.gp-favorites-route93 [data-gp-lite-favorites-page] .gp-lite-favorites-action small{display:none!important}}",
    "@media(max-width:1023px){html body .gp-old-filter-overlay{background:rgba(248,243,236,.58)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;overflow:hidden!important;padding:calc(var(--mobile-header-height,58px) + .75rem + env(safe-area-inset-top)) .75rem calc(var(--mobile-dock-height,5.35rem) + .85rem + env(safe-area-inset-bottom))!important;display:flex!important;align-items:flex-start!important;justify-content:center!important}html body .gp-old-filter-mobile-shell{width:100%!important;height:100%!important;min-height:0!important;display:flex!important;align-items:flex-start!important;justify-content:center!important}html body .gp-old-filter-panel.is-mobile{width:min(100%,23rem)!important;max-height:calc(100dvh - var(--mobile-header-height,58px) - var(--mobile-dock-height,5.35rem) - 2.4rem)!important;overflow:hidden!important;background:rgba(255,255,255,.94)!important;border:1px solid rgba(255,255,255,.72)!important;box-shadow:0 24px 70px rgba(36,29,25,.2)!important;border-radius:1.45rem!important;padding:.85rem!important}html body .gp-old-filter-panel.is-mobile .gp-old-filter-scroll{max-height:calc(100dvh - var(--mobile-header-height,58px) - var(--mobile-dock-height,5.35rem) - 8.2rem)!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;background:transparent!important;border-radius:1rem!important}html body .gp-old-filter-panel.is-mobile .gp-old-filter-scroll>*{max-width:100%!important}html body .gp-old-filter-close::before{content:'\\00d7'!important}}",
    "@media(max-width:1023px){html.gp-mobile-filter-open124,html.gp-mobile-filter-open124 body{overflow:hidden!important}html.gp-mobile-filter-open124 body [data-mobile-shell='header'],body.gp-mobile-filter-open124 [data-mobile-shell='header']{position:fixed!important;top:0!important;left:0!important;right:0!important;width:100%!important;z-index:2147483100!important;background:#f8f3ec!important;background-color:#f8f3ec!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;border-bottom:1px solid rgba(175,90,102,.14)!important;opacity:1!important}html.gp-mobile-filter-open124 body .gp-old-filter-overlay,body.gp-mobile-filter-open124 .gp-old-filter-overlay{position:fixed!important;inset:0!important;z-index:2147482500!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;width:100vw!important;height:100vh!important;height:100dvh!important;min-height:100vh!important;min-height:100dvh!important;background:rgba(248,243,236,.98)!important;backdrop-filter:blur(14px)!important;-webkit-backdrop-filter:blur(14px)!important;overflow:hidden!important;padding:calc(var(--mobile-header-height,58px) + env(safe-area-inset-top)) 0 0!important;box-sizing:border-box!important}html.gp-mobile-filter-open124 body .gp-old-filter-backdrop,body.gp-mobile-filter-open124 .gp-old-filter-backdrop{display:none!important}html.gp-mobile-filter-open124 body .gp-old-filter-mobile-shell,body.gp-mobile-filter-open124 .gp-old-filter-mobile-shell{position:relative!important;display:flex!important;align-items:stretch!important;justify-content:stretch!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile{position:relative!important;top:auto!important;display:block!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important;background:#fff!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:0!important;margin:0!important;box-sizing:border-box!important}html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile .gp-old-filter-scroll,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile .gp-old-filter-scroll{height:100%!important;max-height:none!important;min-height:0!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;background:#fff!important;border-radius:0!important;padding:0 1rem calc(1rem + env(safe-area-inset-bottom))!important;box-sizing:border-box!important}html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile .gp-old-filter-head,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile .gp-old-filter-head{position:sticky!important;top:0!important;z-index:10!important;width:calc(100% + 2rem)!important;max-width:none!important;box-sizing:border-box!important;margin:0 -1rem 1rem!important;padding:1rem 1rem .95rem!important;background:#fff!important;border-bottom:1px solid rgba(175,90,102,.12)!important;box-shadow:0 10px 24px rgba(36,29,25,.06)!important;display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:.75rem!important}html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile .gp-old-filter-section:first-of-type,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile .gp-old-filter-section:first-of-type{margin-top:0!important}html.gp-mobile-filter-open124 body .gp-old-filter-close::before,body.gp-mobile-filter-open124 .gp-old-filter-close::before{content:'\\00d7'!important}}",
    "@media(max-width:1023px){html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile .gp-old-filter-head,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile .gp-old-filter-head{width:100vw!important;min-width:100vw!important;max-width:100vw!important;margin:0 0 1rem -1rem!important}}",
    "@media(max-width:1023px){html.gp-mobile-filter-open124 body .gp-old-filter-overlay,body.gp-mobile-filter-open124 .gp-old-filter-overlay,html.gp-mobile-filter-open124 body .gp-old-filter-mobile-shell,body.gp-mobile-filter-open124 .gp-old-filter-mobile-shell,html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile,html.gp-mobile-filter-open124 body .gp-old-filter-panel.is-mobile .gp-old-filter-scroll,body.gp-mobile-filter-open124 .gp-old-filter-panel.is-mobile .gp-old-filter-scroll{overflow-x:hidden!important}}",
    "@media(min-width:1024px){body.gp-path-contacts .gp-requisites-card{width:min(100%,46rem)!important;max-width:46rem!important;margin:1.8rem auto 0!important;padding:1.25rem 1.35rem!important;border-radius:1.7rem!important;box-sizing:border-box!important}body.gp-path-contacts .gp-requisites-card>div{min-width:0!important;max-width:100%!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.62rem!important;width:100%!important;max-width:100%!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details>div{display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:.75rem!important;width:auto!important;min-width:0!important;max-width:100%!important;overflow:hidden!important;border:1px solid rgba(175,90,102,.1)!important;border-radius:1rem!important;background:rgba(255,255,255,.76)!important;padding:.68rem .78rem!important;box-sizing:border-box!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details span,body.gp-path-contacts .gp-requisites-card .gp-legal-details strong{min-width:0!important;max-width:100%!important;overflow-wrap:anywhere!important;word-break:normal!important;line-height:1.25!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details span{flex:0 0 auto!important;color:var(--brand-muted,#8b7b72)!important;font-size:.76rem!important;letter-spacing:.16em!important;text-transform:uppercase!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details strong{display:block!important;flex:1 1 auto!important;text-align:right!important;font-size:.95rem!important;color:var(--brand-text,#241d19)!important}}",
    "@media(min-width:1024px) and (max-width:1180px){body.gp-path-contacts .gp-requisites-card{max-width:42rem!important}body.gp-path-contacts .gp-requisites-card .gp-legal-details{grid-template-columns:1fr!important}}",
    ".gp-promo-modal-root{position:fixed!important;inset:0!important;z-index:2147483180!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:1rem!important}.gp-promo-modal-backdrop{position:absolute!important;inset:0!important;background:rgba(36,29,25,.25)!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important}.gp-promo-modal-dialog{position:relative!important;width:min(100%,36rem)!important;max-height:min(86vh,38rem)!important;overflow:auto!important;border:1px solid rgba(255,255,255,.78)!important;border-radius:1.45rem!important;background:rgba(255,255,255,.97)!important;box-shadow:0 28px 80px rgba(36,29,25,.22)!important;color:var(--brand-text,#241d19)!important;padding:1.25rem!important}.gp-promo-modal-close{position:absolute!important;right:.8rem!important;top:.8rem!important;display:inline-flex!important;width:2.35rem!important;height:2.35rem!important;align-items:center!important;justify-content:center!important;border:1px solid rgba(175,90,102,.16)!important;border-radius:999px!important;background:#fff!important;color:var(--brand-text,#241d19)!important;font-size:1.45rem!important;line-height:1!important}.gp-promo-modal-badge{display:inline-flex!important;margin-right:2.9rem!important;border-radius:999px!important;background:rgba(175,90,102,.1)!important;color:var(--brand-primary,#af5a66)!important;padding:.28rem .58rem!important;font-size:.72rem!important;font-weight:800!important;letter-spacing:.14em!important;text-transform:uppercase!important}.gp-promo-modal-dialog h2{margin:.8rem 2.8rem .75rem 0!important;font-family:var(--font-heading,serif)!important;font-size:clamp(1.55rem,4vw,2.35rem)!important;line-height:1!important}.gp-promo-modal-dialog p{margin:.55rem 0 0!important;color:var(--brand-muted,#6f625b)!important;font-size:.98rem!important;line-height:1.55!important}.gp-promo-modal-date{margin-top:1rem!important;border-top:1px solid rgba(175,90,102,.12)!important;padding-top:.9rem!important;color:var(--brand-text,#241d19)!important;font-weight:700!important}.gp-promo-modal-actions{display:flex!important;flex-wrap:wrap!important;gap:.6rem!important;margin-top:1.1rem!important}.gp-promo-modal-actions a{display:inline-flex!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;background:var(--brand-primary,#af5a66)!important;color:#fff!important;padding:.78rem 1.05rem!important;font-size:.9rem!important;font-weight:800!important;text-decoration:none!important;box-shadow:0 16px 34px rgba(175,90,102,.24)!important}@media(max-width:640px){.gp-promo-modal-root{align-items:flex-end!important;padding:.75rem!important}.gp-promo-modal-dialog{width:100%!important;max-height:calc(100dvh - 1.5rem)!important;border-radius:1.35rem!important}}",
    "@media(max-width:1023px){.gp-promo-modal-root{align-items:flex-start!important;justify-content:center!important;padding:.75rem!important;overflow:hidden!important}.gp-promo-modal-dialog{width:100%!important;max-height:calc(100dvh - 1.5rem)!important;margin:0!important;border-radius:1.35rem!important;overflow:auto!important;-webkit-overflow-scrolling:touch!important}}",
    "[data-gp-desktopfix-badge='true']{position:absolute!important;top:0!important;right:0!important;z-index:28!important;display:inline-flex!important;min-width:1rem!important;min-height:1rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;background:var(--brand-primary,#af5a66)!important;color:#fff!important;padding:0 .28rem!important;font-size:.62rem!important;font-weight:700!important;line-height:1!important;box-shadow:0 7px 15px rgba(175,90,102,.26)!important;transform:translate(26%,-26%)!important}",
    ".gp-final-widget-hidden{display:none!important;visibility:hidden!important;pointer-events:none!important}"
  ].join("");
  document.head.appendChild(style);
}

function setNativeValue(input,value){
  if(!input||value==null)return;
  var setter=Object.getOwnPropertyDescriptor(input.constructor.prototype,"value");
  if(setter&&setter.set)setter.set.call(input,value);
  else input.value=value;
  input.dispatchEvent(new Event("input",{bubbles:true}));
  input.dispatchEvent(new Event("change",{bubbles:true}));
}

function saveAuthCredentials(form){
  if(!form||!form.querySelector)return;
  var email=form.querySelector('input[name="email"]');
  var password=form.querySelector('input[name="password"]');
  if(!email||!password||!email.value||!password.value)return;
  var data={email:email.value,password:password.value,createdAt:Date.now()};
  ["name","phone"].forEach(function(name){
    var input=form.querySelector('input[name="'+name+'"]');
    if(input&&input.value)data[name]=input.value;
  });
  try{sessionStorage.setItem(AUTH_KEY,JSON.stringify(data))}catch(error){}
}

function applyAuthCodeStep(){
  var code=document.querySelector('input[name="emailCode"]');
  if(!code)return;
  var form=code.closest("form");
  if(!form)return;
  var data={};
  try{data=JSON.parse(sessionStorage.getItem(AUTH_KEY)||"{}")}catch(error){}
  form.classList.add("gp-auth-code-step");
  ["email","password","name","phone"].forEach(function(name){
    var input=form.querySelector('input[name="'+name+'"]');
    if(!input)return;
    if(!input.value&&data[name])setNativeValue(input,data[name]);
    var label=input.closest("label");
    if(label&&input.value)label.setAttribute("data-gp-auth-hidden","true");
  });
  if(!form.querySelector(".gp-auth-code-note")){
    var note=document.createElement("p");
    note.className="gp-auth-code-note";
    note.textContent="\u041a\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0447\u0442\u0443. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043e, \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e.";
    var label=code.closest("label");
    if(label&&label.parentNode)label.parentNode.insertBefore(note,label);
  }
}

function installAuthCapture(){
  if(window.__gpAuthCapture98)return;
  window.__gpAuthCapture98=true;
  document.addEventListener("submit",function(event){
    saveAuthCredentials(event.target);
  },true);
}

function filterIconMarkup(){
  return '<span class="gp-final-filter-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg></span>';
}

function ensureFilterIcons(){
  [].slice.call(document.querySelectorAll("button,a")).forEach(function(button){
    var label=((button.getAttribute("aria-label")||"")+" "+(button.getAttribute("title")||"")+" "+(button.textContent||"")).replace(/\s+/g," ").trim();
    var lower=label.toLowerCase();
    var isClose=button.classList.contains("gp-old-filter-close")||button.classList.contains("gp-old-filter-reset")||/Р—Р°РєСЂС‹С‚СЊ|РЎРєСЂС‹С‚СЊ|РЎР±СЂРѕСЃРёС‚СЊ|Р В·Р В°Р С”РЎР‚РЎвЂ№РЎвЂљРЎРЉ|РЎРѓР С”РЎР‚РЎвЂ№РЎвЂљРЎРЉ|РЎРѓР В±РЎР‚Р С•РЎРѓР С‘РЎвЂљРЎРЉ/i.test(label);
    if(isClose){
      [].slice.call(button.querySelectorAll(".gp-final-filter-icon")).forEach(function(icon){icon.parentNode&&icon.parentNode.removeChild(icon)});
      if(button.classList.contains("gp-old-filter-close")){
        button.setAttribute("aria-label","\u0421\u043a\u0440\u044b\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
        button.setAttribute("title","\u0421\u043a\u0440\u044b\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
      }
      return;
    }
    var shouldIcon=lower.indexOf("\u0444\u0438\u043b\u044c\u0442\u0440")>-1||button.querySelector(".lucide-sliders-horizontal");
    if(!shouldIcon)return;
    var text=(button.textContent||"").replace(/\s+/g," ").trim();
    if(!button.querySelector(".gp-final-filter-icon")&&(!button.querySelector("svg")||/[?Р В Р“С’Р“вЂљ]{2,}/.test(text))){
      button.insertAdjacentHTML("afterbegin",filterIconMarkup());
    }
    if(/[?Р В Р“С’Р“вЂљ]{2,}/.test(text))button.setAttribute("aria-label","\u0424\u0438\u043b\u044c\u0442\u0440\u044b");
  });
}

function fixFloatingFilterButton(){
  [].slice.call(document.querySelectorAll(".gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter],.gp-mobile-floating-filter-button,[data-gp-floating-mobile-filter]")).forEach(function(button){
    if(!button.querySelector(".gp-final-filter-icon")){
      button.innerHTML=filterIconMarkup();
    }
    button.setAttribute("aria-label","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
    button.setAttribute("title","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
  });
  ensureDesktopFloatingFilterButton131();
}

function isDesktopCatalogPage131(){
  if(location.pathname.indexOf("/catalog")!==0)return false;
  if(window.innerWidth<1024)return false;
  try{if(typeof isHeartRoute117==="function"&&isHeartRoute117())return false}catch(error){}
  return true;
}

function isDesktopFloatingFilterCandidate131(button){
  if(!isDesktopCatalogPage131()||!button||!button.matches)return false;
  if(button.closest(".gp-old-filter-panel,.gp-old-filter-overlay"))return false;
  if(button.matches(".gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter]"))return true;
  var label=((button.getAttribute("aria-label")||"")+" "+(button.getAttribute("title")||"")+" "+(button.textContent||"")).replace(/\s+/g," ").trim().toLowerCase();
  if(label&&label.indexOf("\u0444\u0438\u043b\u044c\u0442\u0440")>-1)return true;
  var rect=button.getBoundingClientRect&&button.getBoundingClientRect();
  if(!rect||rect.width<34||rect.width>76||rect.height<34||rect.height>76||rect.left>86||rect.top<90||rect.bottom>window.innerHeight-90)return false;
  var style=window.getComputedStyle?getComputedStyle(button):null;
  if(!style||style.position!=="fixed"&&style.position!=="absolute")return false;
  var colors=((style.backgroundColor||"")+" "+(style.background||"")).toLowerCase();
  var text=(button.textContent||"").replace(/\s+/g,"").trim();
  var hasIcon=!!button.querySelector("svg,.gp-final-filter-icon");
  return /rgb\(\s*175\s*,\s*90\s*,\s*102\s*\)|rgb\(\s*174\s*,\s*89\s*,\s*101\s*\)|#af5a66|#ae5965/.test(colors)&&(!text||text.length<3||/[?Р]/.test(text)||!hasIcon);
}

function ensureDesktopFloatingFilterButton131(){
  if(!isDesktopCatalogPage131())return;
  [].slice.call(document.querySelectorAll("button,a,[role='button']")).forEach(function(button){
    if(!isDesktopFloatingFilterCandidate131(button))return;
    button.classList.add("gp-desktop-floating-filter-button");
    button.setAttribute("data-gp-floating-desktop-filter","true");
    if(!button.querySelector(".gp-final-filter-icon")||!button.querySelector("svg")){
      button.innerHTML=filterIconMarkup();
    }
    button.setAttribute("aria-label","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
    button.setAttribute("title","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
  });
  ensureMissingDesktopFloatingFilter132();
}

function getCatalogProductGrid131(){
  var cards=[].slice.call(document.querySelectorAll("main article")).filter(function(card){
    return !card.closest("[data-gp-lite-favorites-page],[data-gp-storage-action-page]")&&card.querySelector("a[href^='/product/'],a[href*='/product/']");
  });
  if(!cards.length)return null;
  return cards[0].parentElement||null;
}

function ensureMissingDesktopFloatingFilter132(){
  var createdSelector="[data-gp-created-floating-filter132='true']";
  var created=document.querySelector(createdSelector);
  if(!isDesktopCatalogPage131()){
    if(created&&created.parentNode)created.parentNode.removeChild(created);
    return;
  }
  var hasPanel=!!document.querySelector(".gp-old-filter-panel:not(.is-mobile),.gp-desktop-filter-panel");
  if(hasPanel){
    if(created&&created.parentNode)created.parentNode.removeChild(created);
    return;
  }
  if(document.querySelector(".gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter]"))return;
  if(!getCatalogProductGrid131())return;
  var button=document.createElement("button");
  button.type="button";
  button.className="gp-desktop-floating-filter-button";
  button.setAttribute("data-gp-floating-desktop-filter","true");
  button.setAttribute("data-gp-created-floating-filter132","true");
  button.setAttribute("aria-label","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
  button.setAttribute("title","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b");
  button.innerHTML=filterIconMarkup();
  button.addEventListener("click",function(){
    scheduleDesktopCatalogStabilize131();
    setTimeout(function(){
      if(!document.querySelector(".gp-old-filter-panel:not(.is-mobile),.gp-desktop-filter-panel"))openDesktopFallbackFilterPanel132();
    },140);
  });
  document.body.appendChild(button);
}

function getCatalogFilterHost132(){
  var productGrid=getCatalogProductGrid131();
  if(!productGrid)return null;
  var node=productGrid.parentElement;
  for(var i=0;node&&i<5;i++,node=node.parentElement){
    if(node!==productGrid&&node.tagName==="SECTION"&&String(node.className||"").indexOf("grid")>-1&&node.querySelector("article"))return node;
  }
  return productGrid.parentElement||productGrid;
}

function filterButtonHtml132(attrs,label,active,wide){
  return '<button type="button" '+attrs+' class="'+(wide?'gp-old-filter-line':'gp-old-filter-pill')+(active?' is-active':'')+'">'+searchEscape(label)+'</button>';
}

function filterSectionHtml132(title,inner,open){
  return '<section class="gp-old-filter-section'+(open?' is-open':'')+'"><button type="button" class="gp-old-filter-section-head" data-gp-toggle-section><span>'+searchEscape(title)+'</span><span aria-hidden="true">⌄</span></button><div class="gp-old-filter-section-body">'+inner+'</div></section>';
}

function filterParam132(name,value){
  var url=new URL(location.href);
  if(value===undefined||value===null||value==="")url.searchParams.delete(name);
  else url.searchParams.set(name,value);
  url.searchParams.delete("page");
  location.assign(url.pathname+(url.search?url.search:""));
}

function categoryOptions132(){
  var current=location.pathname;
  var seen={};
  var list=[];
  (SEARCH_CATEGORIES117||[]).concat(SEARCH_EXTRA_CATEGORIES123||[]).forEach(function(item){
    var title=item[0],href=item[1];
    if(!href||seen[href])return;
    seen[href]=true;
    list.push('<option value="'+searchEscape(href)+'"'+(href===current?' selected':'')+'>'+searchEscape(title)+'</option>');
  });
  return list.join("");
}

function fallbackFilterPanelHtml132(){
  var params=new URLSearchParams(location.search);
  var pageSize=params.get("pageSize")||"12";
  var cols="3";
  try{cols=localStorage.getItem("catalog:desktop-columns")||"3"}catch(error){}
  var sort=params.get("sort")||"sale";
  var special=params.get("special")||"";
  var price=params.get("price")||"";
  var count=document.querySelectorAll("main article a[href*='/product/']").length||document.querySelectorAll("main article").length;
  var html=[
    '<div class="gp-old-filter-head"><div><div class="gp-old-filter-kicker">Фильтры</div><p>Выберите параметры.</p><div class="gp-old-filter-count">Найдено: '+searchEscape(count||"")+'</div></div><button type="button" class="gp-old-filter-close" data-gp-collapse-filters aria-label="Скрыть фильтры">×</button></div>',
    '<section class="gp-old-filter-box"><div class="gp-old-filter-label">Категория</div><label><span class="sr-only">Выберите категорию</span><select data-gp-old-category>'+categoryOptions132()+'</select></label></section>',
    '<section class="gp-old-filter-box"><div class="gp-old-filter-label">Товаров в ряд</div><div class="gp-old-filter-row">'+filterButtonHtml132('data-gp-cols="2"','2',cols==="2")+filterButtonHtml132('data-gp-cols="3"','3',cols==="3")+filterButtonHtml132('data-gp-cols="4"','4',cols==="4")+'</div></section>',
    '<section class="gp-old-filter-box"><div class="gp-old-filter-label">Товаров на странице</div><div class="gp-old-filter-row">'+filterButtonHtml132('data-gp-page-size="8"','8',pageSize==="8")+filterButtonHtml132('data-gp-page-size="12"','12',pageSize==="12")+filterButtonHtml132('data-gp-page-size="16"','16',pageSize==="16")+filterButtonHtml132('data-gp-page-size="24"','24',pageSize==="24")+'</div></section>',
    filterSectionHtml132('Сортировка',[filterButtonHtml132('data-gp-sort="sale"','Сначала акции',sort==="sale",true),filterButtonHtml132('data-gp-sort="new"','Сначала новинки',sort==="new",true),filterButtonHtml132('data-gp-sort="price-asc"','Цена по возрастанию',sort==="price-asc",true),filterButtonHtml132('data-gp-sort="price-desc"','Цена по убыванию',sort==="price-desc",true)].join(""),false),
    filterSectionHtml132('Акценты',[filterButtonHtml132('data-gp-special=""','Все акценты',!special,true),filterButtonHtml132('data-gp-special="sale"','Со скидкой',special==="sale",true),filterButtonHtml132('data-gp-special="new"','Новинки',special==="new",true),filterButtonHtml132('data-gp-special="featured"','Бестселлеры',special==="featured",true)].join(""),false),
    filterSectionHtml132('Цена',[filterButtonHtml132('data-gp-price=""','Все цены',!price,true),filterButtonHtml132('data-gp-price="under-4000"','До 4 000 ₽',price==="under-4000",true),filterButtonHtml132('data-gp-price="4000-6000"','4 000-6 000 ₽',price==="4000-6000",true),filterButtonHtml132('data-gp-price="over-6000"','Более 6 000 ₽',price==="over-6000",true)].join(""),false),
    filterSectionHtml132('Тип кожи',filterButtonHtml132('data-gp-skin=""','Любой тип',!params.get("skin"),true),false),
    filterSectionHtml132('Текстура',filterButtonHtml132('data-gp-texture=""','Все текстуры',!params.get("texture"),true),false),
    filterSectionHtml132('Задача',filterButtonHtml132('data-gp-concern=""','Все задачи',!params.get("concern"),true),false),
    filterSectionHtml132('Ингредиенты',filterButtonHtml132('data-gp-ingredient=""','Все ингредиенты',!params.get("ingredient"),true),false),
    filterSectionHtml132('Формат',filterButtonHtml132('data-gp-volume=""','Любой объем',!params.get("volume"),true),false),
    '<button type="button" class="gp-old-filter-reset" data-gp-reset-filters>Сбросить фильтры</button>'
  ].join("");
  return '<aside class="gp-old-filter-panel gp-fallback-filter-panel132"><div class="gp-old-filter-scroll">'+html+'</div></aside>';
}

function wireFallbackFilterPanel132(root){
  if(!root||root.dataset.gpFallbackWired132==="1")return;
  root.dataset.gpFallbackWired132="1";
  root.addEventListener("click",function(event){
    var sectionHead=event.target.closest&&event.target.closest("[data-gp-toggle-section]");
    if(sectionHead){
      event.preventDefault();
      var section=sectionHead.closest(".gp-old-filter-section");
      if(section)section.classList.toggle("is-open");
      return;
    }
    var button=event.target.closest&&event.target.closest("button");
    if(!button)return;
    if(button.dataset.gpCollapseFilters!==undefined){
      event.preventDefault();
      try{localStorage.setItem("catalog:filters-collapsed","1")}catch(error){}
      if(root.parentNode)root.parentNode.removeChild(root);
      ensureMissingDesktopFloatingFilter132();
      stabilizeDesktopCatalogGrid131();
      return;
    }
    if(button.dataset.gpResetFilters!==undefined){event.preventDefault();location.assign(location.pathname);return}
    if(button.dataset.gpCols){
      event.preventDefault();
      try{localStorage.setItem("catalog:desktop-columns",button.dataset.gpCols)}catch(error){}
      [].slice.call(root.querySelectorAll("[data-gp-cols]")).forEach(function(node){node.classList.toggle("is-active",node.dataset.gpCols===button.dataset.gpCols)});
      return;
    }
    if(button.dataset.gpPageSize){event.preventDefault();filterParam132("pageSize",button.dataset.gpPageSize);return}
    if(button.hasAttribute("data-gp-sort")){event.preventDefault();filterParam132("sort",button.dataset.gpSort);return}
    if(button.hasAttribute("data-gp-special")){event.preventDefault();filterParam132("special",button.dataset.gpSpecial);return}
    if(button.hasAttribute("data-gp-price")){event.preventDefault();filterParam132("price",button.dataset.gpPrice);return}
    if(button.hasAttribute("data-gp-skin")){event.preventDefault();filterParam132("skin",button.dataset.gpSkin);return}
    if(button.hasAttribute("data-gp-texture")){event.preventDefault();filterParam132("texture",button.dataset.gpTexture);return}
    if(button.hasAttribute("data-gp-concern")){event.preventDefault();filterParam132("concern",button.dataset.gpConcern);return}
    if(button.hasAttribute("data-gp-ingredient")){event.preventDefault();filterParam132("ingredient",button.dataset.gpIngredient);return}
    if(button.hasAttribute("data-gp-volume")){event.preventDefault();filterParam132("volume",button.dataset.gpVolume);return}
  });
  var select=root.querySelector("[data-gp-old-category]");
  if(select)select.addEventListener("change",function(){location.assign(select.value)});
}

function openDesktopFallbackFilterPanel132(){
  if(!isDesktopCatalogPage131())return false;
  var host=getCatalogFilterHost132();
  if(!host)return false;
  [].slice.call(document.querySelectorAll("[data-gp-created-floating-filter132='true']")).forEach(function(node){if(node.parentNode)node.parentNode.removeChild(node)});
  var existing=document.querySelector(".gp-old-filter-panel:not(.is-mobile),.gp-desktop-filter-panel");
  if(existing)return true;
  try{localStorage.setItem("catalog:filters-collapsed","0")}catch(error){}
  host.style.setProperty("grid-template-columns","19rem minmax(0,1fr)","important");
  host.insertAdjacentHTML("afterbegin",fallbackFilterPanelHtml132());
  wireFallbackFilterPanel132(host.querySelector(".gp-fallback-filter-panel132"));
  stabilizeDesktopCatalogGrid131();
  return true;
}

function stabilizeDesktopFilterHost134(activeGrid,hasPanel){
  var host=isDesktopCatalogPage131()?getCatalogFilterHost132():null;
  [].slice.call(document.querySelectorAll(".gp-desktop-filter-host-stable134")).forEach(function(node){
    if(node===host)return;
    node.classList.remove("gp-desktop-filter-host-stable134");
    node.style.removeProperty("width");
    node.style.removeProperty("max-width");
  });
  if(activeGrid&&host){
    host.classList.add("gp-desktop-filter-host-stable134");
    host.style.setProperty("grid-template-columns","minmax(0,1fr)","important");
    host.style.setProperty("width","100%","important");
    host.style.setProperty("max-width","100%","important");
    return;
  }
  if(host&&host.classList.contains("gp-desktop-filter-host-stable134")){
    host.classList.remove("gp-desktop-filter-host-stable134");
    host.style.removeProperty("width");
    host.style.removeProperty("max-width");
    if(hasPanel)host.style.setProperty("grid-template-columns","19rem minmax(0,1fr)","important");
    else host.style.removeProperty("grid-template-columns");
  }
}

function primeDesktopCatalogHiddenLayout134(){
  if(!isDesktopCatalogPage131())return;
  var grid=getCatalogProductGrid131();
  var host=getCatalogFilterHost132();
  if(document.body)document.body.classList.add("gp-desktop-filters-hidden131");
  if(host){
    host.classList.add("gp-desktop-filter-host-stable134");
    host.style.setProperty("grid-template-columns","minmax(0,1fr)","important");
    host.style.setProperty("width","100%","important");
    host.style.setProperty("max-width","100%","important");
  }
  if(grid){
    grid.classList.add("gp-desktop-product-grid-stable131");
    grid.style.setProperty("display","grid","important");
    grid.style.setProperty("grid-template-columns","repeat(4,minmax(0,1fr))","important");
    grid.style.setProperty("gap","1.25rem","important");
    grid.style.setProperty("align-items","stretch","important");
    grid.style.setProperty("width","100%","important");
    grid.style.setProperty("max-width","100%","important");
    grid.style.setProperty("min-width","0","important");
  }
}

function stabilizeDesktopCatalogGrid131(){
  var activeGrid=null;
  var hasPanel=false;
  if(isDesktopCatalogPage131()){
    hasPanel=!!document.querySelector(".gp-old-filter-panel:not(.is-mobile),.gp-desktop-filter-panel");
    var hasFloating=!!document.querySelector(".gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter]");
    activeGrid=!hasPanel&&hasFloating?getCatalogProductGrid131():null;
  }
  if(document.body)document.body.classList.toggle("gp-desktop-filters-hidden131",!!activeGrid);
  [].slice.call(document.querySelectorAll(".gp-desktop-product-grid-stable131")).forEach(function(grid){
    if(grid!==activeGrid)grid.classList.remove("gp-desktop-product-grid-stable131");
  });
  if(activeGrid)activeGrid.classList.add("gp-desktop-product-grid-stable131");
  stabilizeDesktopFilterHost134(activeGrid,hasPanel);
}

function scheduleDesktopCatalogStabilize131(){
  [0,16,80,180,400].forEach(function(delay){
    setTimeout(function(){
      ensureDesktopFloatingFilterButton131();
      stabilizeDesktopCatalogGrid131();
    },delay);
  });
  if(window.requestAnimationFrame){
    requestAnimationFrame(function(){
      ensureDesktopFloatingFilterButton131();
      stabilizeDesktopCatalogGrid131();
    });
  }
}

function installDesktopFilterStable131(){
  if(window.__gpDesktopFilterStable131)return;
  window.__gpDesktopFilterStable131=true;
  document.addEventListener("click",function(event){
    var target=event.target&&event.target.closest&&event.target.closest("button,a,[role='button']");
    if(!target)return;
    if(target.matches("[data-gp-collapse-filters],.gp-desktop-floating-filter-button,[data-gp-floating-desktop-filter]")||isDesktopFloatingFilterCandidate131(target)){
      if(target.matches("[data-gp-collapse-filters]"))primeDesktopCatalogHiddenLayout134();
      scheduleDesktopCatalogStabilize131();
    }
  },true);
  window.addEventListener("resize",scheduleDesktopCatalogStabilize131,{passive:true});
}

function markMobileFilterOpen124(){
  var open=!!document.querySelector(".gp-old-filter-overlay");
  if(document.documentElement)document.documentElement.classList.toggle("gp-mobile-filter-open124",open);
  if(document.body)document.body.classList.toggle("gp-mobile-filter-open124",open);
  var header=document.querySelector('[data-mobile-shell="header"]');
  if(open&&header){
    if(!header.hasAttribute("data-gp-mobile-filter124-style"))header.setAttribute("data-gp-mobile-filter124-style",header.getAttribute("style")||"");
    header.style.setProperty("z-index","2147483100","important");
    header.style.setProperty("background","#f8f3ec","important");
    header.style.setProperty("background-color","#f8f3ec","important");
    header.style.setProperty("opacity","1","important");
    header.style.setProperty("backdrop-filter","none","important");
    header.style.setProperty("-webkit-backdrop-filter","none","important");
    header.style.setProperty("left","0","important");
    header.style.setProperty("right","0","important");
    header.style.setProperty("width","100%","important");
  }else if(header&&header.hasAttribute("data-gp-mobile-filter124-style")){
    var previous=header.getAttribute("data-gp-mobile-filter124-style")||"";
    if(previous)header.setAttribute("style",previous);
    else header.removeAttribute("style");
    header.removeAttribute("data-gp-mobile-filter124-style");
  }
}

function fixSearchTrigger(){
  if(window.__gpSearchTrigger98)return;
  window.__gpSearchTrigger98=true;
  document.addEventListener("click",function(event){
    var trigger=event.target.closest&&event.target.closest("a,button");
    if(!trigger)return;
    if(trigger.closest&&trigger.closest(".gp-search-fallback-panel,.gp-search-fallback-overlay"))return;
    var label=((trigger.getAttribute("aria-label")||"")+" "+(trigger.textContent||"")).replace(/\s+/g," ").trim();
    if(!/\u041f\u043e\u0438\u0441\u043a/i.test(label))return;
    var input=document.querySelector('input[type="search"],input[placeholder*="\u041f\u043e\u0438\u0441\u043a"]');
    if(input&&input.offsetParent!==null){
      event.preventDefault();
      input.focus();
      input.scrollIntoView({block:"center",behavior:"smooth"});
      setTimeout(function(){renderSearchPanel(input,input.value||"")},30);
      return;
    }
    event.preventDefault();
    openSearchOverlay("");
  },true);
}

var SEARCH_CATEGORIES101=[
  ["Р’СЃРµ С‚РѕРІР°СЂС‹","/catalog/all-products"],["M+ РєРѕСЃРјРµС‚РёС‡РµСЃРєРёРµ СЃСЂРµРґСЃС‚РІР°","/catalog/m-kosmeticheskie-sredstva"],
  ["Р”РµР·РёРЅС„РµРєС†РёСЏ","/catalog/dezinfekciya"],["РљСЂР°С„С‚-РїР°РєРµС‚","/catalog/kraft-paket"],
  ["Р’СЃРµСЃРµР·РѕРЅРЅС‹Рµ РїРёР»РёРЅРіРё","/catalog/vsesezonnye-pilingi"],["РћРґРЅРѕСЂР°Р·РѕРІР°СЏ РїСЂРѕРґСѓРєС†РёСЏ","/catalog/odnorazovaya-produkciya"],
  ["SL-BEAUTY","/catalog/sl-beauty"],["РђРєСЃРµСЃСЃСѓР°СЂС‹ РґР»СЏ РєРѕСЃРјРµС‚РѕР»РѕРіР°","/catalog/aksessuary-dlya-kosmetologa"],
  ["РЁРїСЂРёС†С‹, РёРіР»С‹, РєР°РЅСЋР»Рё","/catalog/shpricy-igly-kanyuli"],["РђРєСѓРіРµР»СЊ","/catalog/akugel"],
  ["Р¤РёР»Р»РµСЂС‹","/catalog/fillery"],["РђСЂРєР°РЅР°","/catalog/arkana"],
  ["РњРµР·Рѕ / Р±РёРѕ / РЅРёС‚Рё","/catalog/mezo-bio-niti"],["РљСЂР°СЃРёС‚РµР»Рё РґР»СЏ Р±СЂРѕРІРµР№ Рё СЂРµСЃРЅРёС†","/catalog/krasiteli-dlya-brovey-i-resnic"],
  ["Beauty Style","/catalog/beauty-style"],["РЎСЂРµРґСЃС‚РІР° РґР»СЏ РґРµРїРёР»СЏС†РёРё","/catalog/sredstva-dlya-depilyacii"],
  ["РњР°СЂС‚РёРЅРµРєСЃ","/catalog/martineks"],["РљРѕСЃРјРµС‚РёРєР°","/catalog/kosmetika"],
  ["РџР°СЂРёРєРјР°С…РµСЂСЃРєР°СЏ","/catalog/parikmaherskaya"]
];

var SEARCH_CATEGORIES117=[
  ["Все товары","/catalog/all-products"],["M+ косметические средства","/catalog/m-kosmeticheskie-sredstva"],
  ["Дезинфекция","/catalog/dezinfekciya"],["Крафт-пакет","/catalog/kraft-paket"],
  ["Всесезонные пилинги","/catalog/vsesezonnye-pilingi"],["Одноразовая продукция","/catalog/odnorazovaya-produkciya"],
  ["SL-BEAUTY","/catalog/sl-beauty"],["Аксессуары для косметолога","/catalog/aksessuary-dlya-kosmetologa"],
  ["Шприцы, иглы, канюли","/catalog/shpricy-igly-kanyuli"],["Акугель","/catalog/akugel"],
  ["Филлеры","/catalog/fillery"],["Аркана","/catalog/arkana"],
  ["Мезо / био / нити","/catalog/mezo-bio-niti"],["Красители для бровей и ресниц","/catalog/krasiteli-dlya-brovey-i-resnic"],
  ["Beauty Style","/catalog/beauty-style"],["Средства для депиляции","/catalog/sredstva-dlya-depilyacii"],
  ["Мартинекс","/catalog/martineks"],["Косметика","/catalog/kosmetika"],
  ["Парикмахерская","/catalog/parikmaherskaya"]
];

var SEARCH_EXTRA_CATEGORIES123=[
  ["Кремы","/catalog/all-products?q=%D0%BA%D1%80%D0%B5%D0%BC"],["Сыворотки","/catalog/syvorotki"],["Маски","/catalog/maski"],
  ["Очищение","/catalog/ochishchenie"],["Тело","/catalog/telo"],["Наборы","/catalog/nabory"],
  ["Одежда","/catalog/odezhda"],["Бахилы","/catalog/bahily"],["Перчатки","/catalog/perchatki"],
  ["Шапочки, пеньюары, маски","/catalog/shapochki-penyuary-maski"],["Нитриловые","/catalog/nitrilovye"],
  ["Виниловые / П.Э","/catalog/vinilovye-p-e"],["YU.R ME","/catalog/yu-r-me-krem-sss-patchi-maski"],
  ["Skin Synergy","/catalog/skin-synergy"],["Skinosophy","/catalog/skinosophy"],["Pleyana","/catalog/pleyana"],
  ["Lirianna","/catalog/lirianna"],["LeviSsime","/catalog/levessime-ispaniya"],["BIO PROSPECT","/catalog/bio-prospect"]
];

var GP_SEARCH_INPUT_SELECTOR117='input[type="search"],input[placeholder*="Поиск"],input[aria-label*="Поиск"],input[type="text"][placeholder*="товар"],input[type="text"][placeholder*="категор"],input[placeholder*="РџРѕРёСЃРє"],input[placeholder*="Р СџР С•Р С‘РЎРѓР С”"]';
var GP_SEARCH_INDEX_URLS123=["/catalog/all-products?gp_search_index=1","/catalog?gp_search_index=1"];

function normalizeSearchValue(value){
  return String(value||"").toLowerCase().replace(/ё/g,"е").replace(/С‘/g,"е").replace(/[^a-zа-я0-9]+/gi," ").replace(/\s+/g," ").trim();
}

function searchEscape(value){
  return String(value==null?"":value).replace(/[&<>"']/g,function(ch){
    return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch];
  });
}

function searchCleanTitle123(value){
  return String(value||"").replace(/\s+/g," ").trim()
    .replace(/\b(?:Цена|Сравнить|В сравнении|В сравнение|В корзину|Добавить в корзину|Добавить в избранное|Убрать из избранного|Подробнее|Купить|Р¦РµРЅР°|РЎСЂР°РІРЅРёС‚СЊ|Р’ СЃСЂР°РІРЅРµРЅРёРё|Р’ РєРѕСЂР·РёРЅСѓ)\b.*$/i,"")
    .replace(/^\s*(?:Товар|Раздел|Поиск)\s*/i,"")
    .replace(/\s+/g," ")
    .trim();
}

function searchAddProduct123(map,title,href,extra){
  title=searchCleanTitle123(title);
  if(!title||title.length<3||!href)return;
  try{href=new URL(href,location.origin).pathname}catch(error){}
  if(String(href).indexOf("/product/")!==0)return;
  map[href]={title:title,href:href,kind:"Товар",searchText:[title,extra||""].join(" ")};
}

function searchAddCategory123(list,title,href){
  title=searchCleanTitle123(title);
  if(!title||!href)return;
  try{href=new URL(href,location.origin).pathname}catch(error){}
  if(String(href).indexOf("/catalog")!==0)return;
  list.push([title,href]);
}

function searchExtractProductsFromDocument123(doc){
  if(!doc)return;
  var products=window.__gpSearchProducts101||{};
  var categories=window.__gpSearchCategories123||[];
  [].slice.call(doc.querySelectorAll('a[href^="/product/"],a[href*="/product/"]')).forEach(function(link){
    var href=link.getAttribute("href")||"";
    var card=link.closest&&link.closest("article,li,section,div");
    var img=(card&&card.querySelector("img"))||link.querySelector("img");
    var heading=card&&card.querySelector("h1,h2,h3");
    var title=(img&&img.alt)||(heading&&heading.textContent)||link.textContent||(card&&card.textContent)||"";
    var extra=card&&card.textContent||"";
    searchAddProduct123(products,title,href,extra);
  });
  [].slice.call(doc.querySelectorAll('a[href^="/catalog"],a[href*="/catalog/"]')).forEach(function(link){
    searchAddCategory123(categories,link.textContent||link.getAttribute("aria-label")||"",link.getAttribute("href")||"");
  });
  window.__gpSearchProducts101=products;
  window.__gpSearchCategories123=categories;
}

function ensureSearchIndex123(input,query){
  if(!query||window.__gpSearchIndexLoaded123||window.__gpSearchIndexLoading123)return;
  if(typeof fetch!=="function"||typeof DOMParser==="undefined")return;
  window.__gpSearchIndexLoading123=true;
  Promise.all(GP_SEARCH_INDEX_URLS123.map(function(url){
    return fetch(url,{credentials:"same-origin",cache:"force-cache"}).then(function(response){
      return response&&response.ok?response.text():"";
    }).catch(function(){return""});
  })).then(function(pages){
    pages.forEach(function(html){
      if(!html)return;
      try{searchExtractProductsFromDocument123(new DOMParser().parseFromString(html,"text/html"))}catch(error){}
    });
    window.__gpSearchIndexLoaded123=true;
  }).finally(function(){
    window.__gpSearchIndexLoading123=false;
    if(input&&document.activeElement===input&&(input.value||"")===query)renderSearchPanel(input,query);
  });
}

function harvestSearchProducts(){
  var map=window.__gpSearchProducts101||{};
  [].slice.call(document.querySelectorAll('a[href^="/product/"],a[href*="/product/"]')).forEach(function(link){
    var href=link.getAttribute("href")||"";
    if(!href)return;
    var card=link.closest&&link.closest("article,li,section,div");
    var img=(card&&card.querySelector("img"))||link.querySelector("img");
    var title=((img&&img.alt)||link.textContent||(card&&card.textContent)||"").replace(/\s+/g," ").trim();
    searchAddProduct123(map,title,href,card&&card.textContent||"");
  });
  var snapshots=readJson("gp_product_snapshots_v1",{});
  if(snapshots&&typeof snapshots==="object"&&!Array.isArray(snapshots)){
    Object.keys(snapshots).forEach(function(id){
      var item=snapshots[id]||{};
      searchAddProduct123(map,item.title||id,item.href||("/product/"+String(id).replace(/^product-/,"")),item.subtitle||item.category||"");
    });
  }
  window.__gpSearchProducts101=map;
  return map;
}

function searchScore123(title,query){
  var text=normalizeSearchValue(title);
  var q=normalizeSearchValue(query);
  if(!q)return 99;
  if(text===q)return 0;
  if(text.indexOf(q)===0)return 1;
  if(text.indexOf(" "+q)>-1)return 2;
  if(text.indexOf(q)>-1)return 3;
  return 99;
}

function searchPushUnique123(result,seen,item){
  var key=item.kind+"|"+item.href+"|"+item.title;
  if(seen[key])return;
  seen[key]=true;
  result.push(item);
}

function buildSearchItems(query){
  var q=normalizeSearchValue(query);
  var matches=[];
  var seen={};
  if(!q)return [];
  var products=harvestSearchProducts();
  Object.keys(products).forEach(function(key){
    var item=products[key];
    var haystack=normalizeSearchValue((item.title||"")+" "+(item.searchText||""));
    if(haystack.indexOf(q)>-1)searchPushUnique123(matches,seen,{title:item.title,href:item.href,kind:"Товар",score:searchScore123(item.title,query)});
  });
  SEARCH_CATEGORIES117.concat(SEARCH_EXTRA_CATEGORIES123,window.__gpSearchCategories123||[],SEARCH_CATEGORIES101).forEach(function(item){
    if(normalizeSearchValue(item[0]).indexOf(q)>-1)searchPushUnique123(matches,seen,{title:item[0],href:(window.__gpSearchSafeCatalogTarget129||function(h){return h})(item[1],query,item[0]),kind:"Раздел",score:searchScore123(item[0],query)});
  });
  matches.sort(function(left,right){
    if(left.kind!==right.kind)return left.kind==="Раздел"?-1:1;
    if(left.score!==right.score)return left.score-right.score;
    return String(left.title).localeCompare(String(right.title),"ru");
  });
  var items=matches.slice(0,10).map(function(item){return{title:item.title,href:item.href,kind:item.kind}});
  items.push({title:"Искать в каталоге: "+query,href:"/catalog/all-products?q="+encodeURIComponent(query),kind:"Поиск"});
  return items.slice(0,12);
}

function searchPanelHtml(items){
  if(!items.length)return '<div class="gp-search-fallback-empty">Начните вводить бренд или название товара.</div>';
  return items.map(function(item){
    return '<a class="gp-search-fallback-item" href="'+searchEscape(item.href)+'"><span class="gp-search-fallback-kind">'+searchEscape(item.kind)+'</span><span class="gp-search-fallback-title">'+searchEscape(item.title)+'</span></a>';
  }).join("");
}

function searchAnchorRect123(input){
  var fallback=input.getBoundingClientRect();
  var node=input;
  while(node&&node!==document.body){
    if(node.getBoundingClientRect){
      var rect=node.getBoundingClientRect();
      if(rect.width>=280&&rect.width<innerWidth-16&&rect.height>=32&&rect.height<=90&&rect.top>=0&&rect.top<160)return rect;
    }
    node=node.parentElement;
  }
  return fallback;
}

function renderSearchPanel(input,query){
  if(!input||document.activeElement!==input&&!input.closest(".gp-search-fallback-overlay"))return;
  var panel=document.getElementById("gp-search-fallback-panel");
  if(!panel){
    panel=document.createElement("div");
    panel.id="gp-search-fallback-panel";
    panel.className="gp-search-fallback-panel";
    document.body.appendChild(panel);
  }
  panel.innerHTML=searchPanelHtml(buildSearchItems(query));
  ensureSearchIndex123(input,query);
  if(input.closest(".gp-search-fallback-overlay")){
    var holder=input.closest(".gp-search-fallback-overlay-inner");
    if(holder&&panel.parentNode!==holder)holder.appendChild(panel);
    return;
  }
  if(panel.parentNode!==document.body)document.body.appendChild(panel);
  var rect=searchAnchorRect123(input);
  panel.style.left=Math.max(12,rect.left)+"px";
  panel.style.top=Math.min(innerHeight-80,rect.bottom+8)+"px";
  panel.style.width=Math.min(Math.max(rect.width,320),innerWidth-24)+"px";
}

function closeSearchPanel(){
  var panel=document.getElementById("gp-search-fallback-panel");
  if(panel&&panel.parentNode)panel.parentNode.removeChild(panel);
  var overlay=document.querySelector(".gp-search-fallback-overlay");
  if(overlay&&overlay.parentNode)overlay.parentNode.removeChild(overlay);
}

function openSearchOverlay(prefill){
  closeSearchPanel();
  var overlay=document.createElement("div");
  overlay.className="gp-search-fallback-overlay";
  overlay.innerHTML='<div class="gp-search-fallback-overlay-inner"><div class="gp-search-fallback-top"><input type="search" placeholder="Поиск по бренду или товару" autocomplete="off"><button class="gp-search-fallback-close" type="button" aria-label="Закрыть поиск">×</button></div></div>';
  document.body.appendChild(overlay);
  var input=overlay.querySelector("input");
  input.value=prefill||"";
  input.focus();
  renderSearchPanel(input,input.value);
}

function installSearchFallback(){
  if(window.__gpSearchFallback101)return;
  window.__gpSearchFallback101=true;
  document.addEventListener("input",function(event){
    var input=event.target&&event.target.closest&&event.target.closest(GP_SEARCH_INPUT_SELECTOR117);
    if(!input)return;
    renderSearchPanel(input,input.value||"");
  },true);
  document.addEventListener("focusin",function(event){
    var input=event.target&&event.target.closest&&event.target.closest(GP_SEARCH_INPUT_SELECTOR117);
    if(!input)return;
    setTimeout(function(){renderSearchPanel(input,input.value||"")},40);
  },true);
  document.addEventListener("keydown",function(event){
    var input=event.target&&event.target.closest&&event.target.closest(GP_SEARCH_INPUT_SELECTOR117);
    if(!input)return;
    if(event.key==="Escape"){closeSearchPanel();return}
    if(event.key==="Enter"){
      event.preventDefault();
      var first=document.querySelector(".gp-search-fallback-panel a");
      if(first)location.assign(first.getAttribute("href"));
      else location.assign("/catalog/all-products?q="+encodeURIComponent(input.value||""));
    }
  },true);
  document.addEventListener("click",function(event){
    if(event.target.closest&&event.target.closest(".gp-search-fallback-panel"))return;
    if(event.target.closest&&event.target.closest(".gp-search-fallback-close")){closeSearchPanel();return}
    if(event.target.closest&&event.target.closest(GP_SEARCH_INPUT_SELECTOR117))return;
    if(event.target.closest&&event.target.closest(".gp-search-fallback-overlay")){
      if(event.target.classList&&event.target.classList.contains("gp-search-fallback-overlay"))closeSearchPanel();
      return;
    }
    setTimeout(function(){
      var active=document.activeElement;
      if(active&&active.matches&&active.matches(GP_SEARCH_INPUT_SELECTOR117))return;
      var panel=document.getElementById("gp-search-fallback-panel");
      if(panel&&panel.parentNode===document.body)panel.parentNode.removeChild(panel);
    },80);
  },true);
  harvestSearchProducts();
}

function installSearchCategoryRedirect129(){
  if(window.__gpSearchCategoryRedirect129)return;
  window.__gpSearchCategoryRedirect129=true;
  document.addEventListener("click",function(event){
    var link=event.target&&event.target.closest&&event.target.closest("a[href]");
    if(!link)return;
    var href=link.getAttribute("href")||"";
    var safe=(window.__gpSearchSafeCatalogTarget129||function(h){return h})(href,"",(link.textContent||"").replace(/\s+/g," ").trim());
    if(safe===href)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    closeSearchPanel();
    location.assign(safe);
  },true);
}

function normalizeTextArtifacts(root){
  root=root||document.body;
  if(!root||!document.createTreeWalker)return;
  var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  var nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(function(node){
    var value=node.nodeValue;
    if(!value)return;
    var next=value
      .replace(/(?:Р“СћРІвЂљВ¬РІР‚Сњ|Р Р†Р вЂљРІР‚Сњ|Р В Р вЂ Р В РІР‚С™Р Р†Р вЂљРЎСљ|Р В РЎСџР В РІР‚С™Р Р†Р вЂљРЎСљ)/g,"\u2014")
      .replace(/(?:Р Р†РІР‚С™Р вЂ¦|Р В Р вЂ Р Р†Р вЂљРЎв„ўР В Р вЂ¦|РІвЂљР…)/g,"\u20bd");
    if(/[?Р В Р“С’Р“вЂљ]{2,}/.test(next)&&next.trim().length<=8)next=next.replace(/[?Р В Р“С’Р“вЂљРїС—Р…]+/g,"\u2014");
    if(next!==value)node.nodeValue=next;
  });
}

function sortFaq(){
  if(location.pathname.indexOf("/faq")!==0)return;
  var groups={};
  [].slice.call(document.querySelectorAll("main details,main article,main li")).forEach(function(item){
    var q=item.querySelector("summary,button,h2,h3")||item;
    var text=(q.textContent||"").replace(/\s+/g," ").trim();
    if(text.length<8||!/[?]/.test(text))return;
    var parent=item.parentElement;
    if(!parent)return;
    var key=parent.dataset.gpFaqGroup||(parent.dataset.gpFaqGroup=Math.random().toString(36).slice(2));
    var priority=1000;
    if(/РЎРѓР С•Р Р†Р СР ВµРЎвЂ°Р В°РЎвЂљРЎРЉ\s+РЎРѓРЎвЂ№Р Р†Р С•РЎР‚Р С•РЎвЂљР С”Р С‘\s+Р С‘\s+Р С”РЎР‚Р ВµР СРЎвЂ№/i.test(text))priority=0;
    else if(/Р С•РЎвЂћР С•РЎР‚Р СР С‘РЎвЂљРЎРЉ\s+Р В·Р В°Р С”Р В°Р В·\s+Р С—Р С•РЎРѓР В»Р Вµ\s+Р С”Р С•Р Р…РЎРѓРЎС“Р В»РЎРЉРЎвЂљР В°РЎвЂ Р С‘Р С‘/i.test(text))priority=1;
    else if(/Р С—Р С•Р Т‘Р С•Р В±РЎР‚Р В°РЎвЂљРЎРЉ\s+РЎС“РЎвЂ¦Р С•Р Т‘\s+Р Т‘Р В»РЎРЏ\s+РЎвЂЎРЎС“Р Р†РЎРѓРЎвЂљР Р†Р С‘РЎвЂљР ВµР В»РЎРЉР Р…Р С•Р в„–\s+Р С”Р С•Р В¶Р С‘/i.test(text))priority=2;
    (groups[key]||(groups[key]={parent:parent,items:[]})).items.push({node:item,len:text.length,priority:priority});
  });
  Object.keys(groups).forEach(function(key){
    var group=groups[key];
    if(group.items.length<2)return;
    group.items.sort(function(a,b){
      if(a.priority!==b.priority)return a.priority-b.priority;
      return b.len-a.len;
    }).forEach(function(item){group.parent.appendChild(item.node)});
  });
}

function installFaqToggle(){
  if(window.__gpFaqToggle101)return;
  window.__gpFaqToggle101=true;
  document.addEventListener("click",function(event){
    if(location.pathname.indexOf("/faq")!==0)return;
    var summary=event.target.closest&&event.target.closest("summary");
    if(!summary)return;
    var details=summary.closest("details");
    if(!details)return;
    event.preventDefault();
    details.open=!details.open;
  },true);
}

function hideEmptyPromotions(){
  if(!/(promotions|akcii|akcii)/i.test(location.pathname))return;
  [].slice.call(document.querySelectorAll("main section")).forEach(function(section,index){
    if(index===0)return;
    var cards=section.querySelectorAll("article,a[href^='/product/']").length;
    var text=(section.textContent||"").replace(/\s+/g," ").trim();
    if(cards===0&&/(?:\u0412\u0438\u0442\u0440\u0438\u043d\u0430|\u0442\u043e\u0432\u0430\u0440)/i.test(text)){
      section.style.setProperty("display","none","important");
    }
  });
}

function promotionText117(node){
  return (node&&node.textContent||"").replace(/\s+/g," ").trim();
}

function promotionFindLine117(card,pattern){
  var nodes=[].slice.call(card.querySelectorAll("p,span,div,strong"));
  for(var i=0;i<nodes.length;i+=1){
    var text=promotionText117(nodes[i]);
    if(text&&text.length<180&&pattern.test(text))return text;
  }
  return "";
}

function cleanPromotionPart117(text){
  return String(text||"").replace(/Подробнее/gi,"").replace(/Перейти в каталог/gi,"").replace(/\s+/g," ").trim();
}

function promotionDetails117(button){
  var card=button&&button.closest&&button.closest("article");
  if(!card&&button){
    var node=button.parentElement;
    while(node&&node!==document.body){
      var text=promotionText117(node);
      if(node.querySelector&&node.querySelector("h2,h3,h4")&&/Действует|Подробнее/i.test(text)){
        card=node;
        break;
      }
      node=node.parentElement;
    }
  }
  if(!card)card=button&&button.closest&&button.closest("section");
  if(!card)return null;
  var titleNode=card.querySelector("h2,h3,h4");
  var title=promotionText117(titleNode);
  if(!title){
    var raw=cleanPromotionPart117(promotionText117(card).replace(/Подробнее.*$/i,""));
    title=raw.split(/(?=[А-ЯЁA-Z][а-яёa-z])/).slice(0,2).join(" ").trim()||"Акционное предложение";
  }
  var badge=cleanPromotionPart117(promotionFindLine117(card,/^(ПОДАРОК|-?\d+%|ВЫБОР|НАБОР|СПЕЦ|АКЦИЯ)/i));
  var date=cleanPromotionPart117(promotionFindLine117(card,/^Действует/i));
  var parts=[];
  [].slice.call(card.querySelectorAll("p")).forEach(function(node){
    var text=cleanPromotionPart117(promotionText117(node));
    if(text&&parts.indexOf(text)===-1&&text!==title&&text!==date)parts.push(text);
  });
  if(!parts.length){
    [].slice.call(card.children||[]).forEach(function(node){
      var text=cleanPromotionPart117(promotionText117(node));
      if(!text||text===title||text===badge||text===date||/^Подробнее$/i.test(text)||text.length>220)return;
      if(parts.indexOf(text)===-1)parts.push(text);
    });
  }
  return{title:title,badge:badge||"Акция",date:date,parts:parts.slice(0,4)};
}

function openPromotionModal117(details){
  if(!details)return;
  var old=document.querySelector(".gp-promo-modal-root");
  if(old&&old.parentNode)old.parentNode.removeChild(old);
  var root=document.createElement("div");
  root.className="gp-promo-modal-root";
  var body=details.parts.length?details.parts.map(function(text){return "<p>"+searchEscape(text)+"</p>"}).join(""):"<p>Подробные условия акции уточняйте у менеджера при оформлении заказа.</p>";
  root.innerHTML='<div class="gp-promo-modal-backdrop" data-gp-promo-close="1"></div><div class="gp-promo-modal-dialog" role="dialog" aria-modal="true" aria-label="'+searchEscape(details.title)+'"><button class="gp-promo-modal-close" type="button" aria-label="Закрыть" data-gp-promo-close="1">×</button><div class="gp-promo-modal-badge">'+searchEscape(details.badge)+'</div><h2>'+searchEscape(details.title)+'</h2>'+body+(details.date?'<div class="gp-promo-modal-date">'+searchEscape(details.date)+'</div>':'')+'<div class="gp-promo-modal-actions"><a href="/catalog">Перейти в каталог</a></div></div>';
  root.addEventListener("click",function(event){
    if(event.target&&event.target.getAttribute&&event.target.getAttribute("data-gp-promo-close")==="1"){
      root.parentNode&&root.parentNode.removeChild(root);
    }
  });
  document.body.appendChild(root);
  document.addEventListener("keydown",function closePromoOnEsc(event){
    if(event.key==="Escape"){
      root.parentNode&&root.parentNode.removeChild(root);
      document.removeEventListener("keydown",closePromoOnEsc);
    }
  });
}

function installPromotionDetails117(){
  if(window.__gpPromotionDetails117)return;
  window.__gpPromotionDetails117=true;
  document.addEventListener("click",function(event){
    if(location.pathname.indexOf("/promotions")!==0)return;
    var button=event.target&&event.target.closest&&event.target.closest("button,a");
    if(!button)return;
    var text=promotionText117(button);
    if(!/^Подробнее$/i.test(text))return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation)event.stopImmediatePropagation();
    openPromotionModal117(promotionDetails117(button));
  },true);
}

function canonicalProductId117(value){
  var raw="";
  if(typeof value==="string")raw=value;
  else if(value&&typeof value==="object")raw=value.productId||value.id||value.href||"";
  raw=String(raw||"").replace(/\s+/g," ").trim();
  if(!raw)return "";
  try{
    if(raw.indexOf("/product/")>-1)raw=new URL(raw,location.origin).pathname.split("/").filter(Boolean).pop()||raw;
  }catch(error){}
  if(raw.indexOf("/product/")===0)raw=raw.split("/").filter(Boolean).pop()||"";
  raw=raw.replace(/^product-/,"");
  return raw?"product-"+raw:"";
}

function jsonArray117(key){
  try{
    var raw=window.localStorage&&window.localStorage.getItem(key);
    if(raw){
      var parsed=JSON.parse(raw);
      if(Array.isArray(parsed))return parsed;
    }
  }catch(error){}
  try{
    var memory=window.__gpActionMemoryStore&&window.__gpActionMemoryStore[key];
    if(Array.isArray(memory))return memory;
  }catch(memoryError){}
  try{
    var nameStore=JSON.parse(window.name||"{}");
    var nameValue=nameStore&&nameStore.__gpActionStore&&nameStore.__gpActionStore[key];
    if(Array.isArray(nameValue))return nameValue;
  }catch(nameError){}
  try{
    var cookieName="gp_store_"+encodeURIComponent(key)+"=";
    var cookie=(document.cookie||"").split("; ").filter(function(item){return item.indexOf(cookieName)===0})[0];
    if(cookie){
      var cookieParsed=JSON.parse(decodeURIComponent(cookie.slice(cookieName.length)));
      if(Array.isArray(cookieParsed))return cookieParsed;
    }
  }catch(cookieError){}
  return [];
}

function uniqueIds117(values){
  var seen={};
  var result=[];
  (Array.isArray(values)?values:[]).forEach(function(item){
    var id=canonicalProductId117(item);
    if(!id||seen[id])return;
    seen[id]=true;
    result.push(id);
  });
  return result;
}

function actionCount117(kind){
  if(kind==="favorites")return uniqueIds117(jsonArray117("lumera_favorites").concat(jsonArray117("gp_favorite_ids_v1"))).length;
  if(kind==="compare")return uniqueIds117(jsonArray117("lumera_compare").concat(jsonArray117("gp_compare_ids_v1"))).length;
  if(kind==="cart"){
    return jsonArray117("lumera_cart").reduce(function(total,item){
      if(!item)return total;
      if(typeof item==="string")return total+1;
      return total+Math.max(1,Number(item.quantity)||1);
    },0);
  }
  return 0;
}

function desktopHeaderLink117(href){
  return [].slice.call(document.querySelectorAll('header a[href="'+href+'"]')).filter(function(link){
    return !(link.closest&&link.closest('[data-mobile-shell="header"]'));
  }).filter(function(link){
    var rect=link.getBoundingClientRect&&link.getBoundingClientRect();
    return rect&&rect.width>0&&rect.height>0&&(String(link.className||"").indexOf("h-10 w-10")>-1||String(link.className||"").indexOf("xl:h-11")>-1);
  })[0]||null;
}

function desktopCompareIcon117(){
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>';
}

function ensureDesktopCompareLink117(count){
  var existing=desktopHeaderLink117("/compare")||document.querySelector('header [data-gp-desktop-compare-link="true"],header [data-gp-desktopfix-compare="true"]');
  if(existing){
    existing.style.display=count>0?"":"none";
    return existing;
  }
  if(count<=0)return null;
  var cart=desktopHeaderLink117("/cart");
  if(!cart||!cart.parentNode)return null;
  var link=document.createElement("a");
  link.href="/compare";
  link.title="Сравнение";
  link.setAttribute("aria-label","Сравнение");
  link.dataset.gpDesktopfixCompare="true";
  link.className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition xl:h-11 xl:w-11 border-white/75 bg-white/88 text-[var(--brand-text)] shadow-[0_12px_28px_rgba(36,29,25,0.08)] hover:-translate-y-0.5";
  link.innerHTML=desktopCompareIcon117();
  cart.parentNode.insertBefore(link,cart);
  return link;
}

function setHeaderBadge117(link,count){
  if(!link)return;
  var actionBadge=link.querySelector('[data-gp-action-badge="true"]');
  var ownBadges=[].slice.call(link.querySelectorAll('[data-gp-desktopfix-badge="true"]'));
  if(actionBadge)ownBadges.forEach(function(node){node.parentNode&&node.parentNode.removeChild(node)});
  var badge=actionBadge||ownBadges[0]||null;
  if(count<=0){
    if(badge)badge.style.setProperty("display","none","important");
    return;
  }
  if(!badge){
    badge=document.createElement("span");
    badge.dataset.gpDesktopfixBadge="true";
    link.appendChild(badge);
  }
  badge.style.removeProperty("display");
  badge.textContent=count>99?"99+":String(count);
}

function syncHeaderActionBadges117(){
  var favorites=actionCount117("favorites");
  var compare=actionCount117("compare");
  var cart=actionCount117("cart");
  [].slice.call(document.querySelectorAll('header a[href*="favorites=1"],[data-mobile-shell="header"] a[href*="favorites=1"]')).forEach(function(link){setHeaderBadge117(link,favorites)});
  var compareLink=ensureDesktopCompareLink117(compare);
  setHeaderBadge117(compareLink,compare);
  [].slice.call(document.querySelectorAll('[data-mobile-shell="header"] a[href="/compare"]')).forEach(function(link){setHeaderBadge117(link,compare)});
  [].slice.call(document.querySelectorAll('header a[href="/cart"],[data-mobile-shell="header"] a[href="/cart"]')).forEach(function(link){setHeaderBadge117(link,cart)});
}

try{window.gpDesktopFixSyncHeader117=syncHeaderActionBadges117}catch(error){}

function cartQuantity(){
  var cart=readJson("lumera_cart",[]);
  if(!Array.isArray(cart))return 0;
  return cart.reduce(function(total,item){
    return total+Math.max(1,Number(item&&item.quantity)||1);
  },0);
}

function headerCartCount(){
  var count=0;
  [].slice.call(document.querySelectorAll('header a[href="/cart"],[data-mobile-shell="header"] a[href="/cart"],header button,[data-mobile-shell="header"] button')).forEach(function(node){
    var label=((node.getAttribute("aria-label")||"")+" "+(node.textContent||"")).replace(/\s+/g," ");
    if(label.indexOf("Р С™Р С•РЎР‚Р В·Р С‘Р Р…Р В°")===-1&&label.indexOf("Р В РЎв„ўР В РЎвЂўР РЋР вЂљР В Р’В·Р В РЎвЂР В Р вЂ¦Р В Р’В°")===-1&&!(node.getAttribute("href")||"").match(/\/cart/))return;
    var match=label.match(/(\d{1,3})/g);
    if(match)count=Math.max(count,Number(match[match.length-1])||0);
  });
  return count;
}

function hasCartItems(){
  return cartQuantity()>0||headerCartCount()>0||document.querySelectorAll(".gp-cart-row,[data-gp-cart-row]").length>0;
}

function escapeHtml136(value){
  return String(value==null?"":value).replace(/[&<>"']/g,function(ch){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];
  });
}

function actionSnapshots136(){
  var snapshots=readJson("gp_product_snapshots_v1",{});
  return snapshots&&typeof snapshots==="object"&&!Array.isArray(snapshots)?snapshots:{};
}

function titleFromId136(id){
  return String(id||"").replace(/^product-/,"").split("-").filter(Boolean).map(function(part){
    return part.charAt(0).toUpperCase()+part.slice(1);
  }).join(" ")||"Товар";
}

function productData136(item,snapshots){
  var id=canonicalProductId117(item);
  var itemData=item&&typeof item==="object"?item:{};
  var snap=(snapshots&&snapshots[id])||{};
  return {
    id:id,
    title:itemData.title||snap.title||titleFromId136(id),
    price:itemData.price||snap.price||"",
    image:itemData.image||snap.image||"",
    href:itemData.href||snap.href||("/product/"+String(id).replace(/^product-/,"")),
    quantity:Math.max(1,Number(itemData.quantity)||1)
  };
}

function cartItems136(){
  var snapshots=actionSnapshots136();
  return (Array.isArray(readJson("lumera_cart",[]))?readJson("lumera_cart",[]):[]).map(function(item){
    return productData136(item,snapshots);
  }).filter(function(item){return item.id});
}

function compareItems136(){
  var snapshots=actionSnapshots136();
  return uniqueIds117(jsonArray117("lumera_compare").concat(jsonArray117("gp_compare_ids_v1"))).map(function(id){
    return productData136(id,snapshots);
  }).filter(function(item){return item.id});
}

function hideEmptyActionMessages136(main){
  if(!main)return;
  [].slice.call(main.querySelectorAll("section,article,div,p")).forEach(function(node){
    if(node.closest&&node.closest("[data-gp-cart-fallback136],[data-gp-compare-fallback136]"))return;
    var text=(node.textContent||"").replace(/\s+/g," ").trim();
    if(!text||text.length>360)return;
    if(/Корзина пустая|Список сравнения пуст|нет товаров|пока пусто|Добавьте товары|перейдите в каталог/i.test(text)){
      node.style.setProperty("display","none","important");
      node.style.setProperty("visibility","hidden","important");
    }
  });
}

function renderCartFallback136(){
  if(location.pathname.indexOf("/cart")!==0)return;
  var items=cartItems136();
  if(!items.length)return;
  var main=document.querySelector("main");
  if(!main)return;
  if(main.querySelector(".gp-cart-row,[data-gp-cart-row]")&&!main.querySelector("[data-gp-cart-fallback136]"))return;
  var total=items.reduce(function(sum,item){
    var number=Number(String(item.price||"").replace(/[^\d]/g,""))||0;
    return sum+number*item.quantity;
  },0);
  var rows=items.map(function(item){
    var img=item.image?'<img src="'+escapeHtml136(item.image)+'" alt="'+escapeHtml136(item.title)+'" loading="lazy">':'<div style="width:5.25rem;height:5.25rem;border-radius:1rem;background:rgba(175,90,102,.08)"></div>';
    return '<article class="gp-cart-row" data-gp-cart-row="true">'+
      '<a href="'+escapeHtml136(item.href)+'" aria-label="'+escapeHtml136(item.title)+'">'+img+'</a>'+
      '<div><a class="gp-cart-row-title" href="'+escapeHtml136(item.href)+'">'+escapeHtml136(item.title)+'</a>'+
      '<div class="gp-cart-row-price">'+escapeHtml136(item.price||"Цена уточняется")+'</div></div>'+
      '<div class="gp-cart-qty"><strong>'+escapeHtml136(item.quantity)+'</strong></div>'+
    '</article>';
  }).join("");
  var html='<section class="gp-action-page-shell" data-gp-cart-fallback136="true">'+
    '<div class="gp-action-page-head"><div><div class="gp-action-page-kicker">Корзина</div><h2>Ваш заказ</h2></div></div>'+
    '<div class="gp-cart-layout"><div class="gp-cart-items">'+rows+'</div>'+
    '<aside class="gp-cart-order-panel"><div class="gp-cart-total-row"><span>Итого</span><strong>'+escapeHtml136(total?String(total).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" ₽":"Уточняется")+'</strong></div><a class="gp-action-secondary" href="/checkout">Оформить заказ</a></aside></div>'+
  '</section>';
  var existing=main.querySelector("[data-gp-cart-fallback136]");
  if(existing)existing.outerHTML=html;
  else main.insertAdjacentHTML("afterbegin",html);
  document.body&&document.body.classList.add("gp-cart-has-local-items");
  hideEmptyActionMessages136(main);
}

function renderCompareFallback136(){
  if(location.pathname.indexOf("/compare")!==0)return;
  var items=compareItems136();
  if(!items.length)return;
  var main=document.querySelector("main");
  if(!main)return;
  if((main.querySelector(".gp-compare-product-cell,[data-gp-compare-row]")||/Характеристики|Параметр/i.test(main.textContent||""))&&!main.querySelector("[data-gp-compare-fallback136]"))return;
  var cards=items.map(function(item){
    var img=item.image?'<img src="'+escapeHtml136(item.image)+'" alt="'+escapeHtml136(item.title)+'" loading="lazy">':'';
    return '<article class="gp-storage-action-card" data-gp-compare-row="true">'+
      (img||'<div style="height:13rem;background:rgba(175,90,102,.08)"></div>')+
      '<div class="gp-storage-action-card-body"><a class="gp-storage-action-card-title" href="'+escapeHtml136(item.href)+'">'+escapeHtml136(item.title)+'</a>'+
      '<div class="gp-storage-action-card-price">'+escapeHtml136(item.price||"Цена уточняется")+'</div></div></article>';
  }).join("");
  var html='<section class="gp-action-page-shell" data-gp-compare-fallback136="true">'+
    '<div class="gp-action-page-head"><div><div class="gp-action-page-kicker">Сравнение</div><h2>Товары в сравнении</h2></div></div>'+
    '<div class="gp-storage-action-grid">'+cards+'</div>'+
  '</section>';
  var existing=main.querySelector("[data-gp-compare-fallback136]");
  if(existing)existing.outerHTML=html;
  else main.insertAdjacentHTML("afterbegin",html);
  hideEmptyActionMessages136(main);
}

function renderStorageFallbacks136(){
  renderCartFallback136();
  renderCompareFallback136();
}

function hideFalseEmptyCart(){
  if(location.pathname.indexOf("/cart")!==0||!hasCartItems())return;
  if(document.body)document.body.classList.add("gp-cart-has-local-items");
  [].slice.call(document.querySelectorAll("main *")).forEach(function(node){
    var text=(node.textContent||"").replace(/\s+/g," ").trim();
    if(text.indexOf("РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°")===-1&&text.indexOf("РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°СЏ")===-1&&text.indexOf("Р С™Р С•РЎР‚Р В·Р С‘Р Р…Р В° Р С—РЎС“РЎРѓРЎвЂљР В°")===-1)return;
    if(text.length>260&&node.querySelector(".gp-cart-row,article,a[href^='/product/']"))return;
    node.style.setProperty("display","none","important");
    node.style.setProperty("visibility","hidden","important");
  });
}

function fixHeaderBadges(){
  var qty=cartQuantity();
  [].slice.call(document.querySelectorAll('header a[href="/cart"],[data-mobile-shell="header"] a[href="/cart"]')).forEach(function(link){
    var badges=[].slice.call(link.querySelectorAll("span,div")).filter(function(node){
      var text=(node.textContent||"").trim();
      var rect=node.getBoundingClientRect&&node.getBoundingClientRect();
      var cls=String(node.className||"");
      var cs=node.ownerDocument&&node.ownerDocument.defaultView?node.ownerDocument.defaultView.getComputedStyle(node):null;
      return /^\d+$/.test(text)||/[?Р В Р“С’Р“вЂљ]{2,}/.test(text)||(rect&&rect.width<=28&&rect.height<=24&&text.length>0&&text.length<=8&&(cls.indexOf("absolute")>-1||(cs&&cs.position==="absolute")));
    });
    var badge=badges[badges.length-1];
    if(!badge||qty<=0)return;
    badge.textContent=String(qty);
    badge.style.setProperty("min-width","1.15rem","important");
    badge.style.setProperty("text-align","center","important");
    badge.style.setProperty("font-variant-numeric","tabular-nums","important");
  });
}

function fixCartShell(){
  if(document.body&&location.pathname.indexOf("/cart")===0&&hasCartItems()){
    document.body.classList.add("gp-cart-has-local-items");
  }
  hideFalseEmptyCart();
  fixHeaderBadges();
  syncHeaderActionBadges117();
  [].slice.call(document.querySelectorAll("img")).forEach(function(img){
    img.decoding="async";
    if(!img.getAttribute("loading"))img.loading="lazy";
  });
}

function forceFavoritesVisible(){
  if(!isHeartRoute117())return;
  document.documentElement.classList.add("gp-favorites-route93");
  if(document.body)document.body.classList.add("gp-favorites-route93","gp-final-favorites-route");
  var page=document.querySelector("[data-gp-lite-favorites-page]");
  var main=document.querySelector("main");
  [].slice.call(document.querySelectorAll("[data-gp-lite-favorites-page],.gp-lite-favorites-page")).forEach(function(node){
    node.removeAttribute("data-gp-single-plaque");
    node.style.setProperty("background","transparent","important");
    node.style.setProperty("border","0","important");
    node.style.setProperty("box-shadow","none","important");
    node.style.setProperty("overflow","visible","important");
    node.style.setProperty("padding","1.45rem 0 0","important");
  });
  if(page){
    page.style.setProperty("display","block","important");
    page.style.setProperty("visibility","visible","important");
    page.style.setProperty("opacity","1","important");
    page.style.setProperty("height","auto","important");
    page.style.setProperty("min-height","0","important");
    if(main&&page.parentNode!==main)main.insertBefore(page,main.firstElementChild);
  }
  if(main&&page){
    [].slice.call(main.children||[]).forEach(function(child){
      if(child===page||child.contains(page))return;
      child.dataset.gpLiteHiddenFavorites="true";
      child.style.setProperty("display","none","important");
    });
  }
  if(window.__gpLiteCleanFavoritesDom106)window.__gpLiteCleanFavoritesDom106(page);
  [].slice.call(document.querySelectorAll("header a[href*='favorites=1'],[data-mobile-shell='header'] a[href*='favorites=1']")).forEach(function(link){
    link.style.setProperty("background","rgba(255,255,255,.96)","important");
    link.style.setProperty("color","var(--brand-primary,#af5a66)","important");
    link.style.setProperty("box-shadow","none","important");
    [].slice.call(link.querySelectorAll("svg")).forEach(function(svg){
      svg.style.setProperty("color","var(--brand-primary,#af5a66)","important");
      svg.style.setProperty("fill","currentColor","important");
      svg.style.setProperty("stroke","currentColor","important");
    });
  });
}

function fixContactsRequisites(){
  if(location.pathname.indexOf("/contacts")!==0)return;
  [].slice.call(document.querySelectorAll(".gp-requisites-card,main section,main article,main div")).forEach(function(card){
    var text=(card.textContent||"").replace(/\s+/g," ").trim();
    if(text.indexOf("Реквизиты")===-1&&text.indexOf("Р РµРєРІРёР·РёС‚С‹")===-1&&text.indexOf("Р В Р ВµР С”Р Р†Р С‘Р В·Р С‘РЎвЂљРЎвЂ№")===-1&&text.indexOf("Р В Р’ВµР В РЎвЂќР В Р вЂ Р В РЎвЂР В Р’В·Р В РЎвЂР РЋРІР‚С™")===-1&&text.indexOf("в–¤")===-1&&text.indexOf("РІвЂ“В¤")===-1)return;
    if(document.createTreeWalker){
      var walker=document.createTreeWalker(card,NodeFilter.SHOW_TEXT);
      var nodes=[];
      while(walker.nextNode())nodes.push(walker.currentNode);
      nodes.forEach(function(node){
        var value=node.nodeValue||"";
        if(value.indexOf("Р Р†РІР‚вЂњР’В¤")>-1||value.indexOf("РІвЂ“В¤")>-1||value.indexOf("в–¤")>-1||value.indexOf("\u0432\u2013\u00a4")>-1)node.nodeValue=value.split("Р Р†РІР‚вЂњР’В¤").join("").split("РІвЂ“В¤").join("").split("в–¤").join("").replace(/\u0432\u2013\u00a4/g,"");
      });
    }
    var oldIcon=card.classList&&card.classList.contains("gp-requisites-card")?card.querySelector(".gp-requisites-icon"):null;
    if(oldIcon&&!oldIcon.querySelector("svg")){
      oldIcon.innerHTML='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l4 4v14H7z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 3v5h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    }
    [].slice.call(card.querySelectorAll(".gp-final-requisites-icon")).forEach(function(icon){
      icon.style.setProperty("display","none","important");
    });
    if(card.querySelector(".gp-final-requisites-icon"))return;
    var title=[].slice.call(card.querySelectorAll("h1,h2,h3,p,div,span")).filter(function(node){
      var titleText=(node.textContent||"").replace(/\s+/g," ").trim();
      return titleText.indexOf("Р РµРєРІРёР·РёС‚С‹")===0||titleText.indexOf("Р В Р ВµР С”Р Р†Р С‘Р В·Р С‘РЎвЂљРЎвЂ№")===0;
    })[0];
    if(!title)return;
    title.insertAdjacentHTML("afterbegin",'<span class="gp-final-requisites-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h4"/><path d="M9 13h6"/><path d="M9 17h6"/></svg></span>');
  });
}

function renderMobileCheckoutItems(){
  if(location.pathname.indexOf("/checkout")!==0||innerWidth>=1024)return;
  var aside=document.querySelector("aside");
  if(aside)aside.style.setProperty("display","block","important");
}

function fixCompare(){
  if(location.pathname.indexOf("/compare")!==0)return;
  var isBrokenDash=function(text){
    text=(text||"").replace(/\s+/g," ").trim();
    if(!text||text.length>12)return false;
    if(text==="\u2014"||text==="-")return false;
    return /(?:Р Р†Р вЂљ|Р“СћРІвЂљВ¬|Р В Р вЂ |Р“С’|Р“вЂљ|РїС—Р…|\?|РІР‚вЂќ|РІв‚¬вЂњ|РІР‚вЂњ|Гўв‚¬вЂќ|Гўв‚¬вЂњ)/.test(text)||/^Р Р†.{0,4}$/i.test(text);
  };
  [].slice.call(document.querySelectorAll("main td,main th,main [role='cell'],main [role='columnheader'],main div,main span")).forEach(function(cell){
    var text=(cell.textContent||"").replace(/\s+/g," ").trim();
    if(isBrokenDash(text))cell.textContent="\u2014";
    cell.style.setProperty("overflow-wrap","anywhere","important");
  });
  var main=document.querySelector("main");
  if(main&&document.createTreeWalker){
    var walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);
    var nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(isBrokenDash(node.nodeValue))node.nodeValue="\u2014";
    });
  }
}

function cleanupWidget(){
  if(!document.body)return;
  var fallback=document.querySelector(".gp-contact-widget-fallback,.gp-contact-widget-main");
  if(!fallback)return;
  [].slice.call(document.body.children||[]).forEach(function(node){
    if(node.contains&&node.contains(fallback))return;
    var rect=node.getBoundingClientRect&&node.getBoundingClientRect();
    if(!rect||rect.width<38||rect.width>96||rect.height<38||rect.height>96)return;
    if(rect.right<innerWidth-135||rect.bottom<innerHeight-135)return;
    var cs=getComputedStyle(node);
    if(cs.position!=="fixed")return;
    node.classList.add("gp-final-widget-hidden");
  });
  [].slice.call(document.querySelectorAll("button,a,div")).forEach(function(node){
    if(fallback.contains&&fallback.contains(node))return;
    var rect=node.getBoundingClientRect&&node.getBoundingClientRect();
    if(!rect||rect.width<38||rect.width>80||rect.height<38||rect.height>80)return;
    if(rect.right<innerWidth-120||rect.bottom<innerHeight-120)return;
    var cs=getComputedStyle(node);
    if(cs.position==="fixed"&&/166,\s*95,\s*105|175,\s*90,\s*102|174,\s*89,\s*101|af5a66/i.test(cs.backgroundColor||"")){
      node.classList.add("gp-final-widget-hidden");
    }
  });
}

function fixMobilePagination(){
  if(location.pathname.indexOf("/catalog")!==0)return;
  var foundMatch=(document.body.textContent||"").match(/\u041d\u0430\u0439\u0434\u0435\u043d\u043e:\s*(\d+)/);
  if(!foundMatch)return;
  var found=Number(foundMatch[1]);
  if(!found||found>12)return;
  [].slice.call(document.querySelectorAll("main *")).forEach(function(node){
    var text=(node.childNodes.length===1?node.textContent:"").trim();
    if(/^\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430\s+1\s+\u0438\u0437\s+[1-9]\d*$/.test(text))node.textContent="\u041e\u0434\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
  });
}

function walkTextNodesMobile112(root,callback){
  if(!root)return;
  var stack=[root];
  while(stack.length){
    var node=stack.pop();
    if(!node)continue;
    if(node.nodeType===3){
      callback(node);
      continue;
    }
    var children=node.childNodes||[];
    for(var i=children.length-1;i>=0;i--)stack.push(children[i]);
  }
}

function reinforceMobileFixes112(){
  var path=location.pathname;
  if(path.indexOf("/contacts")===0){
    [].slice.call(document.querySelectorAll(".gp-requisites-icon")).forEach(function(icon){
      if(icon.querySelector("svg"))return;
      icon.textContent="";
      icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l4 4v14H7z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 3v5h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    });
    [].slice.call(document.querySelectorAll(".gp-requisites-card,main section,main article,main div")).forEach(function(card){
      var text=(card.textContent||"").replace(/\s+/g," ").trim();
      if(text.indexOf("\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b")===-1&&text.indexOf("\u0432\u2013\u00a4")===-1)return;
      walkTextNodesMobile112(card,function(node){
        node.nodeValue=(node.nodeValue||"").replace(/\u0432\u2013\u00a4/g,"").replace(/в–¤/g,"").replace(/РІвЂ“В¤/g,"");
      });
    });
  }
  if(path.indexOf("/catalog")===0){
    fixFloatingFilterButton();
    ensureDesktopFloatingFilterButton131();
    stabilizeDesktopCatalogGrid131();
    fixMobilePagination();
  }
  if(isHeartRoute117()){
    [].slice.call(document.querySelectorAll("[data-mobile-shell='header'] a[href*='favorites=1']")).forEach(function(link){
      link.style.setProperty("background","transparent","important");
      link.style.setProperty("border-color","transparent","important");
      link.style.setProperty("box-shadow","none","important");
      link.style.setProperty("color","var(--brand-primary,#af5a66)","important");
      [].slice.call(link.querySelectorAll("svg")).forEach(function(svg){
        svg.style.setProperty("display","block","important");
        svg.style.setProperty("color","currentColor","important");
        svg.style.setProperty("fill","none","important");
        svg.style.setProperty("stroke","currentColor","important");
      });
    });
  }
  if(path.indexOf("/compare")===0){
    var badDash=/\u0432\u0402[\u201c\u201d]|\u0432\u20ac[\u201c\u201d]|\u00e2\u20ac[\u201c\u201d]/g;
    var main=document.querySelector("main");
    walkTextNodesMobile112(main,function(node){
      var value=node.nodeValue||"";
      if(badDash.test(value))node.nodeValue=value.replace(badDash,"\u2014");
      badDash.lastIndex=0;
    });
  }
  if(path.indexOf("/cart")===0&&hasCartItems()){
    if(document.body)document.body.classList.add("gp-cart-has-local-items");
    [].slice.call(document.querySelectorAll("main section,main article,main div")).forEach(function(node){
      var text=(node.textContent||"").replace(/\s+/g," ").trim();
      var isEmpty=text.indexOf("\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430")>-1||text.indexOf("\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f")>-1||text.indexOf("\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433")>-1;
      if(!isEmpty||text.length>220||node.querySelector(".gp-cart-row,article,a[href^='/product/']"))return;
      node.style.setProperty("display","none","important");
      node.style.setProperty("visibility","hidden","important");
      node.setAttribute("aria-hidden","true");
    });
  }
}

var GP_LEGAL_DOCUMENTS115={
  privacy:{
    title:"Политика конфиденциальности",
    intro:"ООО \"Гармония Плюс\" обрабатывает персональные данные пользователей сайта garmoniyaplus.ru для оформления заказов, обратной связи, доставки, оплаты, возврата и исполнения требований законодательства.",
    sections:[
      ["Какие данные обрабатываются",["ФИО, телефон, email, адрес доставки, состав заказа, сообщения покупателя и технические данные посещения сайта.","Данные платежей обрабатываются платежными сервисами и банками; сайт не хранит полные данные банковских карт."]],
      ["Цели обработки",["Оформление и сопровождение заказа.","Связь с покупателем по вопросам оплаты, доставки, возврата и консультаций.","Исполнение требований бухгалтерского, налогового и потребительского законодательства."]],
      ["Права пользователя",["Пользователь может запросить уточнение, блокирование или удаление персональных данных, если их хранение не требуется законом.","Обращения принимаются по email: Abakan-sib@mail.ru."]]
    ]
  },
  consent:{
    title:"Согласие на обработку данных",
    intro:"Оставляя заявку, оформляя заказ или отправляя форму на сайте garmoniyaplus.ru, пользователь дает согласие ООО \"Гармония Плюс\" на обработку персональных данных.",
    sections:[
      ["Состав данных",["Имя, телефон, email, адрес доставки, комментарии к заказу и иные данные, которые пользователь передает через сайт."]],
      ["Цели обработки",["Оформление заказа, консультация, доставка, оплата, возврат, направление чеков и связь с покупателем."]],
      ["Срок и отзыв согласия",["Согласие действует до достижения целей обработки или до его отзыва, если дальнейшее хранение данных не требуется законодательством РФ.","Отзыв согласия можно направить на email: Abakan-sib@mail.ru."]]
    ]
  }
};

function gpLegalHtml115(doc){
  var html='<p class="gp-legal-intro">'+searchEscape(doc.intro)+'</p>';
  html+=doc.sections.map(function(section){
    return '<section><h3>'+searchEscape(section[0])+'</h3><ul>'+section[1].map(function(item){return '<li>'+searchEscape(item)+'</li>'}).join("")+'</ul></section>';
  }).join("");
  html+='<section><h3>Реквизиты продавца</h3><div class="gp-legal-details"><div><span>Организация</span><strong>ООО "Гармония Плюс"</strong></div><div><span>ИНН</span><strong>1901084417</strong></div><div><span>ОГРН</span><strong>1081901002028</strong></div><div><span>Email</span><strong>Abakan-sib@mail.ru</strong></div></div></section>';
  return html;
}

function openGpLegalModal115(key){
  var doc=GP_LEGAL_DOCUMENTS115[key]||GP_LEGAL_DOCUMENTS115.privacy;
  var old=document.querySelector(".gp-legal-modal-root");
  if(old&&old.parentNode)old.parentNode.removeChild(old);
  var root=document.createElement("div");
  root.className="gp-legal-modal-root";
  root.innerHTML='<div class="gp-legal-backdrop" data-gp-legal-close="1"></div><div class="gp-legal-dialog" role="dialog" aria-modal="true" aria-label="'+searchEscape(doc.title)+'"><button class="gp-legal-close" type="button" aria-label="Закрыть" data-gp-legal-close="1">×</button><div class="gp-legal-kicker">Документ</div><h2>'+searchEscape(doc.title)+'</h2><div class="gp-legal-content">'+gpLegalHtml115(doc)+'</div></div>';
  root.addEventListener("click",function(event){
    if(event.target&&event.target.getAttribute&&event.target.getAttribute("data-gp-legal-close")==="1"){
      root.parentNode&&root.parentNode.removeChild(root);
    }
  });
  document.body.appendChild(root);
  document.addEventListener("keydown",function closeOnEsc(event){
    if(event.key==="Escape"){
      root.parentNode&&root.parentNode.removeChild(root);
      document.removeEventListener("keydown",closeOnEsc);
    }
  });
}

function installLegalDocuments115(){
  if(window.__gpLegalDocuments115)return;
  window.__gpLegalDocuments115=true;
  document.addEventListener("click",function(event){
    var target=event.target&&event.target.closest&&event.target.closest("button,a,[data-gp-legal]");
    if(!target)return;
    var text=(target.textContent||target.getAttribute("aria-label")||"").replace(/\s+/g," ").trim();
    var key=target.getAttribute("data-gp-legal")||"";
    if(!key){
      if(/^Политика конфиденциальности$/i.test(text)||/privacy/i.test(target.getAttribute("href")||""))key="privacy";
      else if(/^Согласие на обработку данных$/i.test(text)||/обработк/i.test(text))key="consent";
    }
    if(!GP_LEGAL_DOCUMENTS115[key])return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openGpLegalModal115(key);
  },true);
}

function quickRun(){
  addPageClasses();
  applyAuthCodeStep();
  ensureFilterIcons();
  fixFloatingFilterButton();
  ensureDesktopFloatingFilterButton131();
  stabilizeDesktopCatalogGrid131();
  markMobileFilterOpen124();
  installPromotionDetails117();
  syncHeaderActionBadges117();
  if(isHeartRoute117()&&window.gpLiteRenderFavorites117)window.gpLiteRenderFavorites117();
  forceFavoritesVisible();
  renderStorageFallbacks136();
  fixCartShell();
  renderMobileCheckoutItems();
  fixCompare();
  cleanupWidget();
  fixContactsRequisites();
  fixMobilePagination();
  reinforceMobileFixes112();
}

function run(){
  var now=Date.now();
  normalizeStorage();
  addPageClasses();
  addStyle();
  installAuthCapture();
  applyAuthCodeStep();
  ensureFilterIcons();
  fixFloatingFilterButton();
  ensureDesktopFloatingFilterButton131();
  stabilizeDesktopCatalogGrid131();
  markMobileFilterOpen124();
  installLegalDocuments115();
  installPromotionDetails117();
  fixSearchTrigger();
  installSearchFallback();
  installSearchCategoryRedirect129();
  installDesktopFilterStable131();
  installFaqToggle();
  if((location.pathname.indexOf("/compare")===0||location.pathname.indexOf("/contacts")===0||location.pathname.indexOf("/cart")===0)&&(!run._lastTextFix||now-run._lastTextFix>5000)){
    run._lastTextFix=now;
    normalizeTextArtifacts();
  }
  sortFaq();
  hideEmptyPromotions();
  syncHeaderActionBadges117();
  if(isHeartRoute117()&&window.gpLiteRenderFavorites117)window.gpLiteRenderFavorites117();
  forceFavoritesVisible();
  renderStorageFallbacks136();
  fixCartShell();
  renderMobileCheckoutItems();
  fixCompare();
  cleanupWidget();
  fixContactsRequisites();
  fixMobilePagination();
  reinforceMobileFixes112();
}

ready(function(){
  installLegalDocuments115();
  installPromotionDetails117();
  run();
  var scheduled=false;
  var schedule=function(){
    if(scheduled)return;
    scheduled=true;
    (window.requestAnimationFrame||setTimeout)(function(){
      scheduled=false;
      quickRun();
    },60);
  };
  var observer=new MutationObserver(schedule);
  observer.observe(document.body||document.documentElement,{subtree:true,childList:true});
  window.addEventListener("scroll",schedule,{passive:true});
  document.addEventListener("scroll",schedule,{passive:true,capture:true});
  document.addEventListener("touchstart",schedule,{passive:true,capture:true});
  document.addEventListener("pointerdown",schedule,{passive:true,capture:true});
  var tick=0;
  var mobileInterval=setInterval(function(){
    quickRun();
    tick+=1;
    if(tick>=20)clearInterval(mobileInterval);
  },500);
  setTimeout(function(){try{observer.disconnect()}catch(error){}},10000);
  setTimeout(run,250);
  setTimeout(run,900);
  setTimeout(run,1800);
  setTimeout(quickRun,3200);
  setTimeout(quickRun,6200);
});
window.addEventListener("pageshow",run,{passive:true});
window.addEventListener("storage",function(){setTimeout(quickRun,50)},{passive:true});
}catch(error){
  console.warn("gp final fixes failed",error);
}
})();



