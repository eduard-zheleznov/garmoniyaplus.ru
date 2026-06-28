;(function(){
try{
if(window.__gpActionsSync20260618Full95)return;
window.__gpActionsSync20260618Full95=true;
var gpFavoritesRoute93=location.search.indexOf("favorites=1")>-1;
if(gpFavoritesRoute93){
  document.documentElement.classList.add("gp-favorites-route93");
  if(document.body)document.body.classList.add("gp-favorites-route93");
}
window.__gpActionsSync20260618AndroidFast84=true;
window.__gpActionsSync20260618MobileHeader83=true;
window.__gpActionsSync20260618TabsSearch82=true;
window.__gpActionsSync20260618MobileHeader81=true;
window.__gpActionsSync20260618Cache80=true;
window.__gpActionsSync20260618CardList79=true;
window.__gpActionsSync20260618EmptyFilters78=true;
window.__gpActionsSync20260617Pravki33Correct77=true;
window.__gpActionsSync20260617Pravki33Correct76=true;
window.__gpActionsSync20260617Pravki33Correct75=true;
window.__gpActionsSync20260617Pravki33Correct74=true;
window.__gpActionsSync20260617Pravki33Correct73=true;
window.__gpActionsSync20260617Pravki33Correct72=true;
window.__gpActionsSync20260617Pravki33Correct71=true;
window.__gpActionsSync20260617Pravki33Correct70=true;
window.__gpActionsSync20260617Pravki33Correct69=true;
window.__gpActionsSync20260617Pravki33Correct68=true;
window.__gpActionsSync20260617Pravki33Correct67=true;
window.__gpActionsSync20260617Pravki33Correct66=true;
window.__gpActionsSync20260617Pravki33Correct65=true;
window.__gpActionsSync20260617Pravki33Correct64=true;
window.__gpActionsSync20260617Pravki33Correct63=true;
window.__gpActionsSync20260617Pravki33Correct62=true;
window.__gpActionsSync20260617Pravki33Correct61=true;
window.__gpActionsSync20260617CatalogPerf60=true;
window.__gpActionsSync20260616Correct59=true;
window.__gpActionsSync20260615Correct50=true;
window.__gpActionsSync20260615Correct49=true;
window.__gpActionsSync20260615Correct48=true;
window.__gpActionsSync20260615Correct47=true;
window.__gpActionsSync20260615Correct46=true;
window.__gpActionsSync20260615Correct45=true;
window.__gpActionsSync20260615Correct44=true;
window.__gpActionsSync20260615Correct43=true;
window.__gpActionsSync20260615Correct42=true;
window.__gpActionsSync20260615Correct41=true;
window.__gpActionsSync20260615Correct40=true;
window.__gpActionsSync20260615Correct39=true;
window.__gpPravki31Fixes20260616=true;
window.__gpPravkiNavtabs20260611=true;
try{
  if(window.localStorage)localStorage.setItem("catalog:filters-collapsed","0");
}catch(error){}

var COVER_VERSION="20260611";
var BRAND_LOGO_VERSION="20260617-33";
var fallbackCoverCache=null;
var gpPerfCache={};
var coverMap={
  "/catalog/m-kosmeticheskie-sredstva":"/category-covers/pravki7c/m-kosmeticheskie-sredstva.jpg",
  "/catalog/dezinfekciya":"/category-covers/pravki7c/dezinfekciya.jpg",
  "/catalog/kraft-paket":"/category-covers/pravki7c/kraft-paket.jpg",
  "/catalog/vsesezonnye-pilingi":"/category-covers/pravki7c/vsesezonnye-pilingi.jpg",
  "/catalog/odnorazovaya-produkciya":"/category-covers/pravki7c/odnorazovaya-produkciya.jpg",
  "/catalog/sl-beauty":"/category-covers/pravki7c/sl-beauty.jpg",
  "/catalog/aksessuary-dlya-kosmetologa":"/category-covers/pravki7c/aksessuary-dlya-kosmetologa.jpg",
  "/catalog/shpricy-igly-kanyuli":"/category-covers/pravki7c/shpricy-igly-kanyuli.jpg",
  "/catalog/akugel":"/category-covers/pravki7c/akugel.jpg",
  "/catalog/fillery":"/category-covers/pravki7c/fillery.jpg",
  "/catalog/arkana":"/category-covers/pravki7c/arkana.jpg",
  "/catalog/mezo-bio-niti":"/category-covers/pravki7c/mezo-bio-niti.jpg",
  "/catalog/krasiteli-dlya-brovey-i-resnic":"/category-covers/pravki7c/krasiteli-dlya-brovey-i-resnic.jpg",
  "/catalog/beauty-style":"/category-covers/pravki7c/beauty-style.jpg",
  "/catalog/sredstva-dlya-depilyacii":"/category-covers/pravki7c/sredstva-dlya-depilyacii.jpg",
  "/catalog/martineks":"/category-covers/pravki7c/martineks.jpg",
  "/catalog/kosmetika":"/category-covers/pravki7c/kosmetika.jpg",
  "/catalog/parikmaherskaya":"/category-covers/pravki7c/parikmaherskaya.jpg"
};

var gpCurrentCatalogCategories=[
  {href:"/catalog/m-kosmeticheskie-sredstva",title:"Рњ+ РљРѕСЃРјРµС‚РёС‡РµСЃРєРёРµ СЃСЂРµРґСЃС‚РІР°"},
  {href:"/catalog/dezinfekciya",title:"Р”Р•Р—РРќР¤Р•РљР¦РРЇ"},
  {href:"/catalog/kraft-paket",title:"РљР РђР¤Рў- РџРђРљР•Рў"},
  {href:"/catalog/vsesezonnye-pilingi",title:"Р’РЎР•РЎР•Р—РћРќРќР«Р• РїРёР»РёРЅРіРё"},
  {href:"/catalog/odnorazovaya-produkciya",title:"РћР”РќРћР РђР—РћР’РђРЇ РїСЂРѕРґСѓРєС†РёСЏ"},
  {href:"/catalog/sl-beauty",title:"SL-BEAUTY"},
  {href:"/catalog/aksessuary-dlya-kosmetologa",title:"РђРљРЎР•РЎРЎРЈРђР Р« РґР»СЏ РєРѕСЃРјРµС‚РѕР»РѕРіР°"},
  {href:"/catalog/shpricy-igly-kanyuli",title:"РЁРџР РР¦Р« ,РР“Р›Р« , РљРђРќР®Р›Р ,"},
  {href:"/catalog/akugel",title:"РђРљРЈР“Р•Р›Р¬"},
  {href:"/catalog/fillery",title:"Р¤РР›Р›Р•Р Р«"},
  {href:"/catalog/arkana",title:"РђР РљРђРќРђ"},
  {href:"/catalog/mezo-bio-niti",title:"РњР•Р—Рћ / Р‘РРћ / РќРРўР"},
  {href:"/catalog/krasiteli-dlya-brovey-i-resnic",title:"РљР РђРЎРРўР•Р›Р Р”Р›РЇ Р‘Р РћР’Р•Р™ Р Р Р•РЎРќРР¦"},
  {href:"/catalog/beauty-style",title:"Beauty Style"},
  {href:"/catalog/sredstva-dlya-depilyacii",title:"РЎР Р•Р”РЎРўР’Рђ Р”Р›РЇ Р”Р•РџРР›РЇР¦РР"},
  {href:"/catalog/martineks",title:"РњРђР РўРРќР•РљРЎ"},
  {href:"/catalog/kosmetika",title:"РљРћРЎРњР•РўРРљРђ"},
  {href:"/catalog/parikmaherskaya",title:"РџРђР РРљРњРђРҐР•Р РЎРљРђРЇ"}
];

function gpFillCurrentCatalogCategorySelect(select){
  if(!select)return;
  var allowed={"/catalog/all-products":true};
  gpCurrentCatalogCategories.forEach(function(item){allowed[item.href]=true});
  [].slice.call(select.options||[]).forEach(function(option){
    if(!allowed[option.value])option.remove();
  });
  var present={};
  [].slice.call(select.options||[]).forEach(function(option){present[option.value]=true});
  gpCurrentCatalogCategories.forEach(function(item){
    if(present[item.href])return;
    var option=document.createElement("option");
    option.value=item.href;
    option.textContent=item.title;
    select.appendChild(option);
  });
  var hasSelected=false;
  [].slice.call(select.options||[]).forEach(function(option){
    option.selected=option.value===location.pathname;
    if(option.selected)hasSelected=true;
  });
  if(!hasSelected){
    var allOption=select.querySelector('option[value="/catalog/all-products"]');
    if(allOption)allOption.selected=true;
  }
}

function gpIsCurrentCatalogCategoryPath(path){
  for(var index=0;index<gpCurrentCatalogCategories.length;index+=1){
    if(gpCurrentCatalogCategories[index].href===path)return true;
  }
  return false;
}

var gpCatalogBackTitleMap={
  "/catalog/m-kosmeticheskie-sredstva":"\u041c+ \u041a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430",
  "/catalog/dezinfekciya":"\u0414\u0415\u0417\u0418\u041d\u0424\u0415\u041a\u0426\u0418\u042f",
  "/catalog/kraft-paket":"\u041a\u0420\u0410\u0424\u0422-\u041f\u0410\u041a\u0415\u0422",
  "/catalog/vsesezonnye-pilingi":"\u0412\u0421\u0415\u0421\u0415\u0417\u041e\u041d\u041d\u042b\u0415 \u043f\u0438\u043b\u0438\u043d\u0433\u0438",
  "/catalog/odnorazovaya-produkciya":"\u041e\u0414\u041d\u041e\u0420\u0410\u0417\u041e\u0412\u0410\u042f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f",
  "/catalog/sl-beauty":"SL-BEAUTY",
  "/catalog/aksessuary-dlya-kosmetologa":"\u0410\u041a\u0421\u0415\u0421\u0421\u0423\u0410\u0420\u042b \u0434\u043b\u044f \u043a\u043e\u0441\u043c\u0435\u0442\u043e\u043b\u043e\u0433\u0430",
  "/catalog/shpricy-igly-kanyuli":"\u0428\u041f\u0420\u0418\u0426\u042b, \u0418\u0413\u041b\u042b, \u041a\u0410\u041d\u042e\u041b\u0418",
  "/catalog/akugel":"\u0410\u041a\u0423\u0413\u0415\u041b\u042c",
  "/catalog/fillery":"\u0424\u0418\u041b\u041b\u0415\u0420\u042b",
  "/catalog/arkana":"\u0410\u0420\u041a\u0410\u041d\u0410",
  "/catalog/mezo-bio-niti":"\u041c\u0415\u0417\u041e / \u0411\u0418\u041e / \u041d\u0418\u0422\u0418",
  "/catalog/krasiteli-dlya-brovey-i-resnic":"\u041a\u0420\u0410\u0421\u0418\u0422\u0415\u041b\u0418 \u0434\u043b\u044f \u0431\u0440\u043e\u0432\u0435\u0439 \u0438 \u0440\u0435\u0441\u043d\u0438\u0446",
  "/catalog/beauty-style":"Beauty Style",
  "/catalog/sredstva-dlya-depilyacii":"\u0421\u0420\u0415\u0414\u0421\u0422\u0412\u0410 \u0414\u041b\u042f \u0414\u0415\u041f\u0418\u041b\u042f\u0426\u0418\u0418",
  "/catalog/martineks":"\u041c\u0410\u0420\u0422\u0418\u041d\u0415\u041a\u0421",
  "/catalog/kosmetika":"\u041a\u041e\u0421\u041c\u0415\u0422\u0418\u041a\u0410",
  "/catalog/parikmaherskaya":"\u041f\u0410\u0420\u0418\u041a\u041c\u0410\u0425\u0415\u0420\u0421\u041a\u0410\u042f",
  "/catalog/ochishchenie":"\u041e\u0447\u0438\u0449\u0435\u043d\u0438\u0435",
  "/catalog/syvorotki":"\u0421\u044b\u0432\u043e\u0440\u043e\u0442\u043a\u0438",
  "/catalog/kremy":"\u041a\u0440\u0435\u043c\u044b",
  "/catalog/maski":"\u041c\u0430\u0441\u043a\u0438",
  "/catalog/telo":"\u0422\u0435\u043b\u043e",
  "/catalog/nabory":"\u041d\u0410\u0411\u041e\u0420\u042b",
  "/catalog/odezhda":"\u041e\u0414\u0415\u0416\u0414\u0410",
  "/catalog/bahily":"\u0411\u0410\u0425\u0418\u041b\u042b",
  "/catalog/shapochki-penyuary-maski":"\u0428\u0430\u043f\u043e\u0447\u043a\u0438, \u043f\u0435\u043d\u044c\u044e\u0430\u0440\u044b, \u043c\u0430\u0441\u043a\u0438",
  "/catalog/perchatki":"\u041f\u0435\u0440\u0447\u0430\u0442\u043a\u0438",
  "/catalog/vinilovye-p-e":"\u0412\u0418\u041d\u0418\u041b\u041e\u0412\u042b\u0415 / \u041f.\u042d",
  "/catalog/nitrilovye":"\u041d\u0418\u0422\u0420\u0418\u041b\u041e\u0412\u042b\u0415"
};

function gpCatalogBackTitleFromPath(path){
  if(!path)return "";
  if(gpCatalogBackTitleMap[path])return gpCatalogBackTitleMap[path];
  for(var index=0;index<gpCurrentCatalogCategories.length;index+=1){
    if(gpCurrentCatalogCategories[index].href===path&&gpCurrentCatalogCategories[index].title)return gpCurrentCatalogCategories[index].title;
  }
  var slug=path.split("/").filter(Boolean).pop()||"";
  try{slug=decodeURIComponent(slug)}catch(error){}
  return slug.replace(/[-_]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,function(letter){return letter.toUpperCase()});
}

var gpBrandLogoMap={
  "/catalog/lirianna":{src:"/brand-logos/lirianna.svg",alt:"LIRIANNA"},
  "/catalog/skin-synergy":{src:"/brand-logos/skin-synergy.png",alt:"SKIN_SYNERGY"},
  "/catalog/bio-prospect":{src:"/brand-logos/bio-prospect.svg",alt:"BIO PROSPECT"},
  "/catalog/levessime-ispaniya":{src:"/brand-logos/levissime.png",alt:"LeviSsime"},
  "/catalog/pleyana":{src:"/brand-logos/pleyana.png",alt:"Pleyana"},
  "/catalog/skinosophy":{src:"/brand-logos/skinosophy.svg",alt:"Skinosophy"},
  "/catalog/yu-r-me-krem-sss-patchi-maski":{src:"/brand-logos/yu-r-me.png",alt:"YU.R ME"}
};

function pathOf(link){
  try{return new URL(link.href,location.origin).pathname}catch(error){return""}
}

function gpFindVisibleCategoryHeader(){
  return [].slice.call(document.querySelectorAll("main section")).find(function(section){
    var rect=section.getBoundingClientRect();
    return rect.width>0&&rect.height>40&&section.querySelector("h1")&&!section.querySelector("article");
  })||null;
}

function gpFindCategoryActionRow(header){
  if(!header)return null;
  var explicit=header.querySelector(".gp-old-mobile-header-actions");
  if(explicit)return explicit;
  return [].slice.call(header.children||[]).find(function(node){
    return node&&node.nodeType===1&&node.querySelector&&node.querySelector("a,button,span");
  })||null;
}

function applyCatalogCovers(){
  if(location.pathname!=="/catalog")return;
  [].slice.call(document.querySelectorAll('main a[href^="/catalog/"]')).forEach(function(card){
    var source=coverMap[pathOf(card)];
    var img=card.querySelector("img");
    if(!source||!img)return;
    if(img.dataset.gpCoverVersion===COVER_VERSION&&img.getAttribute("src")===source)return;
    img.dataset.gpCoverVersion=COVER_VERSION;
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.src=source;
  });
}

function productSlugFromCard(card){
  var link=card&&card.querySelector('a[href^="/product/"]');
  if(!link&&location.pathname.indexOf("/product/")===0)link={href:location.href};
  if(!link)return"";
  try{
    var parts=new URL(link.href,location.origin).pathname.split("/").filter(Boolean);
    return parts[0]==="product"?parts[1]||"":parts.pop()||"";
  }catch(error){return""}
}

function normalizeTitle(text){
  return (text||"").replace(/\s+/g," ").trim().toLowerCase();
}

function productTitleFromCard(card){
  if(!card)return"";
  var selectors=[
    ".gp-pravki-current-compare-meta",
    "h1","h2","h3",
    "[data-product-title]",
    "a[href^=\"/product/\"]"
  ];
  for(var i=0;i<selectors.length;i++){
    var node=card.querySelector(selectors[i]);
    var text=normalizeTitle(node&&node.textContent);
    if(text)return text;
  }
  var raw=normalizeTitle(card.textContent);
  if(!raw)return"";
  raw=raw
    .replace(/\b(РІ СЃСЂР°РІРЅРµРЅРёРё|СЃСЂР°РІРЅРёС‚СЊ|РІ РєРѕСЂР·РёРЅСѓ|СѓР±СЂР°С‚СЊ|РїРѕРґСЂРѕР±РЅРµРµ|Р±С‹СЃС‚СЂС‹Р№ РїСЂРѕСЃРјРѕС‚СЂ)\b.*$/i,"")
    .replace(/\s*\d[\d\s.,]*\s*в‚Ѕ.*$/,"")
    .replace(/\s*С†РµРЅР°.*$/i,"")
    .trim();
  return raw;
}

function isPlaceholderImage(src){
  if(!src)return false;
  var decoded=src;
  try{decoded=decodeURIComponent(src)}catch(error){}
  return /\/editorial\/(texture-beige|hero-beauty|hero-blush|serum-sand|golden-serum|ritual-gold|cream-stack|serum-blue|flowers)/i.test(decoded);
}

function loadFallbackCovers(){
  if(fallbackCoverCache)return fallbackCoverCache;
  fallbackCoverCache=fetch("/product-fallback-covers.v20260611.json",{cache:"force-cache"}).then(function(r){
    return r.ok?r.json():null;
  }).catch(function(){return null});
  return fallbackCoverCache;
}

function installNavTabFix(){
  if(window.__gpPravkiNavTabFixInstalled)return;
  window.__gpPravkiNavTabFixInstalled=true;
  // Let Next handle internal links; forcing full reloads made action tabs and categories slow.
}

function replaceProductFallbackImages(){
  var key=location.pathname+"|"+location.search+"|"+gpArticleSignature()+"|"+document.querySelectorAll("main img").length;
  if(gpPerfCache.fallbackImagesKey===key)return;
  gpPerfCache.fallbackImagesKey=key;
  loadFallbackCovers().then(function(data){
    if(!data||(!data.bySlug&&!data.byTitle&&!data.defaultCover))return;
    [].slice.call(document.querySelectorAll('article, main')).forEach(function(scope){
      var slug=productSlugFromCard(scope);
      var title=productTitleFromCard(scope);
      var next=(slug&&data.bySlug&&data.bySlug[slug])||(title&&data.byTitle&&data.byTitle[title])||data.defaultCover;
      if(!next)return;
      [].slice.call(scope.querySelectorAll("img")).forEach(function(img){
        var current=img.currentSrc||img.getAttribute("src")||"";
        if(!isPlaceholderImage(current)&&!isPlaceholderImage(img.getAttribute("src")||""))return;
        if(img.dataset.gpFallbackCover===next)return;
        img.dataset.gpFallbackCover=next;
        var picture=img.closest&&img.closest("picture");
        if(picture){
          [].slice.call(picture.querySelectorAll("source")).forEach(function(source){
            source.removeAttribute("srcset");
            source.removeAttribute("sizes");
          });
        }
        img.removeAttribute("srcset");
        img.removeAttribute("sizes");
        img.style.objectFit="cover";
        img.src=next;
      });
    });
  });
}

function hideEmptyPromotionShowcase(){
  if(location.pathname!=="/promotions")return;
  [].slice.call(document.querySelectorAll("main section")).forEach(function(section){
    var text=(section.textContent||"").replace(/\s+/g," ");
    if(text.indexOf("РўРѕРІР°СЂС‹ РїРѕ СЃРїРµС†СѓСЃР»РѕРІРёСЏРј")>-1&&text.indexOf("РЎРµР№С‡Р°СЃ РЅРµС‚ РѕРїСѓР±Р»РёРєРѕРІР°РЅРЅС‹С… С‚РѕРІР°СЂРѕРІ")>-1&&!section.querySelector("article")){
      section.classList.add("gp-pravki-current-empty-promo");
    }
  });
}

function normalizeMobileCategoryHeader(){
  if(location.pathname==="/install-app")return;
  if(location.search.indexOf("favorites=1")>-1)return;
  if(innerWidth>=1024)return;
  var plaque=[].slice.call(document.querySelectorAll("main section.gp-pravki7-mobile-plaque, main section")).find(function(s){
    var rect=s.getBoundingClientRect();
    return rect.width>0&&rect.height>0&&s.querySelector("h1");
  });
  if(!plaque)return;
  plaque.classList.add("gp-pravki-current-mobile-plaque");
  var productSection=[].slice.call(document.querySelectorAll("main section")).find(function(s){
    var rect=s.getBoundingClientRect();
    return s!==plaque&&rect.width>0&&s.querySelector("article");
  });
  plaque.style.setProperty("margin-top","0px","important");
  if(productSection){
    var syncProductOffset=function(){
      productSection.style.setProperty("margin-top","0px","important");
      var overlap=Math.ceil(plaque.getBoundingClientRect().bottom-productSection.getBoundingClientRect().top+12);
      if(overlap>0)productSection.style.setProperty("margin-top",overlap+"px","important");
    };
    syncProductOffset();
    requestAnimationFrame(syncProductOffset);
  }
  var row=plaque.children[0],found=plaque.querySelector(".gp-docx5-found");
  if(!row)return;
  var links=[].slice.call(row.querySelectorAll("a"));
  var hasBack=links.some(function(a){return /РќР°Р·Р°Рґ\s+РІ:/i.test((a.textContent||"").trim())});
  row.classList.toggle("gp-pravki-current-nested-row",hasBack);
  if(found&&found.parentElement!==row)row.appendChild(found);
}

function markComparePage(){
  document.body.classList.toggle("gp-pravki-current-compare",location.pathname==="/compare");
}

function markCatalogProductListPage(){
  var isCatalogProductList=location.pathname.indexOf("/catalog/")===0||location.search.indexOf("favorites=1")>-1;
  document.body.classList.toggle("gp-pravki-current-catalog-list",isCatalogProductList&&!document.body.classList.contains("gp-favorites-page"));
}

function ensureLayoutFavoritesFiltersPatch(){
  try{
    if(window.localStorage&&(location.pathname.indexOf("/catalog")===0||location.search.indexOf("favorites=1")>-1)){
      if(localStorage.getItem("catalog:filters-collapsed")===null)localStorage.setItem("catalog:filters-collapsed","0");
    }
  }catch(error){}
  if(document.getElementById("gp-layout-fav-filter-patch"))return;
  var style=document.createElement("style");
  style.id="gp-layout-fav-filter-patch";
  style.textContent=[
    "@media (max-width:1023px){body.gp-pravki-current main.relative.z-10{margin-top:-3.5rem!important}}",
    "@media (max-width:480px){body.gp-pravki-current main.relative.z-10{margin-top:-3.25rem!important}}",
    "@media (min-width:1024px){body.gp-pravki-current-catalog-list [data-gp-extra-category-shell]{display:none!important}}",
    "body.gp-pravki-current-catalog-list main>section:first-child{background:rgba(255,255,255,.84)!important;border:1px solid rgba(255,255,255,.7)!important;box-shadow:0 24px 70px rgba(36,29,25,.10)!important;overflow:hidden!important}",
    "body.gp-pravki-current-catalog-list main>section:first-child:before,body.gp-pravki-current-catalog-list main>section:first-child:after{display:none!important;content:none!important}",
    ".gp-old-filter-panel{position:sticky;top:6.4rem;align-self:start;border-radius:1.75rem;border:1px solid rgba(255,255,255,.7);background:linear-gradient(180deg,rgba(247,241,234,.96),rgba(247,241,234,.88));padding:.5rem;box-shadow:0 18px 45px rgba(36,29,25,.07);backdrop-filter:blur(12px)}",
    ".gp-old-filter-scroll{max-height:none;overflow:visible;border-radius:1.55rem;background:rgba(249,245,239,.98);padding:1.25rem;scrollbar-width:thin}",
    ".gp-old-filter-head{position:sticky;top:-1.25rem;z-index:3;margin:-1.25rem -1.25rem 1rem;padding:1.25rem;background:linear-gradient(180deg,rgba(249,245,239,.99),rgba(249,245,239,.97) 76%,rgba(249,245,239,.88));display:flex;align-items:flex-start;justify-content:space-between;gap:.75rem}",
    ".gp-old-filter-kicker{font-size:.75rem;text-transform:uppercase;letter-spacing:.24em;color:var(--brand-primary)}.gp-old-filter-head p{margin:.5rem 0 0;color:var(--brand-muted);font-size:.875rem;line-height:1.5}.gp-old-filter-count{margin-top:.55rem;color:var(--brand-text);font-size:.875rem;font-weight:500}",
    ".gp-old-filter-close{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.14);background:white;color:var(--brand-text);box-shadow:0 12px 24px rgba(36,29,25,.06);font-size:1.25rem;line-height:1}",
    ".gp-old-filter-box,.gp-old-filter-section{margin-bottom:.9rem;border-radius:1.45rem;border:1px solid rgba(255,255,255,.7);background:rgba(255,255,255,.66);box-shadow:0 12px 28px rgba(36,29,25,.05)}.gp-old-filter-box{padding:.9rem}",
    ".gp-old-filter-label{margin-bottom:.7rem;font-size:.6875rem;font-weight:700;text-transform:uppercase;letter-spacing:.24em;color:var(--brand-muted)}.gp-old-filter-row{display:flex;flex-wrap:wrap;gap:.55rem}",
    ".gp-old-filter-pill{min-width:2.65rem;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;padding:.58rem .86rem;font-size:.875rem;color:var(--brand-text);transition:.18s ease}.gp-old-filter-pill.is-active{border-color:var(--brand-text);background:var(--brand-text);color:white}",
    ".gp-old-filter-section{overflow:hidden}.gp-old-filter-section-head{display:flex;width:100%;align-items:center;justify-content:space-between;gap:.75rem;padding:1.05rem 1rem;border:0;background:transparent;color:var(--brand-muted);font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.24em;cursor:pointer}.gp-old-filter-section-head:hover{color:var(--brand-text)}.gp-old-filter-section-body{display:none;padding:0 1rem 1rem}.gp-old-filter-section.is-open .gp-old-filter-section-body{display:block}",
    ".gp-old-filter-line{display:block;width:100%;border-radius:999px;border:1px solid rgba(175,90,102,.14);background:white;padding:.62rem .82rem;text-align:left;font-size:.82rem;color:var(--brand-text);margin-top:.45rem;cursor:pointer;transition:.16s ease}.gp-old-filter-line:hover,.gp-old-filter-pill:hover{border-color:rgba(175,90,102,.38);transform:translateY(-1px)}.gp-old-filter-line.is-active{border-color:rgba(36,29,25,.85);background:var(--brand-text);color:white}",
    ".gp-old-filter-reset{width:100%;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;padding:.72rem 1rem;font-size:.78rem;font-weight:700;letter-spacing:.04em;color:var(--brand-text)}",
    ".gp-old-mobile-filter-button{margin-top:.75rem;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:999px;border:1px solid rgba(175,90,102,.16);background:white;padding:.72rem 1rem;color:var(--brand-text);font-size:.875rem;font-weight:500;box-shadow:0 12px 24px rgba(36,29,25,.06)}",
    ".gp-old-mobile-catalog-header{border-radius:1.7rem;border:1px solid rgba(255,255,255,.70);background:rgba(255,255,255,.82);padding:1rem;box-shadow:0 18px 42px rgba(36,29,25,.06)}.gp-old-mobile-catalog-header h1{margin:.75rem 0 0;font-family:var(--font-heading);font-size:2.1rem;line-height:.96;color:var(--brand-text)}.gp-old-mobile-header-actions{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.gp-old-mobile-header-actions a,.gp-old-mobile-header-actions span{display:inline-flex;align-items:center;border-radius:999px;border:1px solid rgba(175,90,102,.16);background:white;padding:.55rem .85rem;font-size:.75rem;color:var(--brand-text);box-shadow:0 12px 24px rgba(36,29,25,.06)}",
    ".gp-mobile-floating-filter-button,.gp-desktop-floating-filter-button{position:fixed;left:.75rem;top:50%;z-index:95;display:none;align-items:center;justify-content:center;transform:translateY(-50%);width:3rem;height:3rem;padding:0;border-radius:999px;border:1px solid rgba(175,90,102,.28);background:var(--brand-primary);color:white;box-shadow:0 16px 36px rgba(175,90,102,.24);backdrop-filter:blur(10px)}@media (max-width:1023px){body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) .gp-mobile-floating-filter-button{display:inline-flex}}@media (min-width:1024px){body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) .gp-desktop-floating-filter-button{display:inline-flex}}",
    ".gp-old-filter-overlay{position:fixed;inset:0;z-index:140;background:rgba(24,19,16,.5);padding:calc(4.95rem + env(safe-area-inset-top)) .6rem calc(6.1rem + env(safe-area-inset-bottom));backdrop-filter:blur(16px)}.gp-old-filter-backdrop{position:absolute;inset:0;border:0;background:transparent}.gp-old-filter-mobile-shell{position:relative;display:flex;min-height:100%;align-items:flex-start;justify-content:center}.gp-old-filter-panel.is-mobile{position:relative;top:auto;width:min(100%,22rem);max-height:calc(100dvh - 11rem);overflow:hidden}.gp-old-filter-panel.is-mobile .gp-old-filter-scroll{max-height:calc(100dvh - 11rem);padding:1rem}.gp-old-filter-panel.is-mobile .gp-old-filter-head{top:-1rem;margin:-1rem -1rem 1rem;padding:1rem}.gp-old-filter-lock{overflow:hidden!important}",
    "[data-gp-favorite-overlay='true']{position:absolute!important;right:1rem!important;top:1rem!important;left:auto!important;bottom:auto!important;z-index:80!important;width:2.75rem!important;height:2.75rem!important;min-width:2.75rem!important;min-height:2.75rem!important;pointer-events:auto!important}",
    "[data-gp-action-badge='true']{top:-.58rem!important;right:-.32rem!important;z-index:25!important}.gp-cart-added{background:var(--brand-primary)!important;color:#fff!important;border-color:rgba(175,90,102,.78)!important;box-shadow:0 16px 34px rgba(175,90,102,.28)!important}.gp-action-toast{position:fixed;left:50%;bottom:calc(var(--mobile-viewport-bottom,0px) + 1rem);z-index:180;transform:translateX(-50%);border-radius:999px;background:var(--brand-text);color:#fff;padding:.72rem 1rem;font-size:.86rem;font-weight:600;box-shadow:0 18px 44px rgba(36,29,25,.22);opacity:0;pointer-events:none;transition:.22s ease}.gp-action-toast.is-visible{opacity:1;transform:translate(-50%,-.35rem)}",
    ".gp-action-page-shell{margin:1rem 0 2rem;border-radius:2rem;border:1px solid rgba(255,255,255,.75);background:rgba(255,255,255,.88);padding:1.25rem;box-shadow:0 24px 70px rgba(36,29,25,.09)}.gp-action-page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1rem}.gp-action-page-kicker{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.24em;color:var(--brand-primary)}.gp-action-page-head h2{margin:.35rem 0 0;font-family:var(--font-heading);font-size:clamp(1.7rem,3vw,2.65rem);line-height:.96;color:var(--brand-text)}.gp-action-page-muted{color:var(--brand-muted);font-size:.95rem;line-height:1.55}.gp-action-secondary{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;padding:.7rem 1rem;color:var(--brand-text);font-size:.86rem;font-weight:700;box-shadow:0 12px 28px rgba(36,29,25,.06);transition:.18s ease}.gp-action-secondary:hover{transform:translateY(-1px);border-color:rgba(175,90,102,.36)}.gp-compare-table-scroll{overflow:auto;border-radius:1.45rem;border:1px solid rgba(175,90,102,.12);background:rgba(255,255,255,.72)}.gp-compare-param-table{width:100%;min-width:48rem;border-collapse:separate;border-spacing:0}.gp-compare-param-table th,.gp-compare-param-table td{border-bottom:1px solid rgba(175,90,102,.1);padding:1rem;text-align:left;vertical-align:top}.gp-compare-param-table th:first-child{position:sticky;left:0;z-index:2;width:12rem;background:rgba(249,245,239,.96);color:var(--brand-muted);font-size:.75rem;text-transform:uppercase;letter-spacing:.18em}.gp-compare-product-cell{min-width:13rem}.gp-compare-product-cell img{display:block;width:5.25rem;height:5.25rem;object-fit:cover;border-radius:1.05rem;margin-bottom:.75rem}.gp-compare-product-title{display:block;color:var(--brand-text);font-family:var(--font-heading);font-size:1.08rem;line-height:1.05}.gp-cart-layout{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(19rem,.65fr);gap:1rem}.gp-cart-items{display:grid;gap:.75rem}.gp-cart-row{display:grid;grid-template-columns:5.25rem minmax(0,1fr) auto;gap:1rem;align-items:center;border-radius:1.35rem;border:1px solid rgba(175,90,102,.1);background:rgba(255,255,255,.76);padding:.8rem}.gp-cart-row img{width:5.25rem;height:5.25rem;border-radius:1rem;object-fit:cover}.gp-cart-row-title{display:block;color:var(--brand-text);font-family:var(--font-heading);font-size:1.08rem;line-height:1.05}.gp-cart-row-price{margin-top:.45rem;color:var(--brand-muted);font-size:.9rem}.gp-cart-qty{display:flex;align-items:center;justify-content:flex-end;gap:.45rem}.gp-cart-qty button{display:inline-flex;height:2.1rem;width:2.1rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.16);background:white;color:var(--brand-text);font-weight:800}.gp-cart-qty strong{min-width:2rem;text-align:center}.gp-cart-remove{margin-top:.55rem;border:0;background:transparent;color:var(--brand-muted);font-size:.8rem;text-decoration:underline}.gp-cart-order-panel{border-radius:1.45rem;border:1px solid rgba(175,90,102,.12);background:linear-gradient(180deg,rgba(249,245,239,.96),rgba(255,255,255,.88));padding:1rem;box-shadow:0 18px 45px rgba(36,29,25,.06)}.gp-cart-total-row{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(175,90,102,.1);padding-bottom:.8rem;margin-bottom:1rem;color:var(--brand-text)}.gp-cart-total-row strong{font-size:1.25rem}.gp-order-form{display:grid;gap:.7rem}.gp-order-form input,.gp-order-form textarea,.gp-mobile-search-input{width:100%;border-radius:1rem;border:1px solid rgba(175,90,102,.16);background:white;padding:.82rem .95rem;color:var(--brand-text);outline:none}.gp-order-form textarea{min-height:6rem;resize:vertical}.gp-order-form button[type='submit'],.gp-contact-widget-panel button[type='submit']{display:inline-flex;width:100%;align-items:center;justify-content:center;border:0;border-radius:999px;background:var(--brand-primary);color:white;padding:.85rem 1rem;font-weight:800;box-shadow:0 16px 34px rgba(175,90,102,.24)}.gp-order-status{display:none;border-radius:1rem;background:rgba(175,90,102,.09);padding:.8rem;color:var(--brand-text);font-size:.88rem;line-height:1.45}.gp-order-status.is-visible{display:block}",
    ".gp-mobile-search-root{position:fixed;inset:0;z-index:170;background:rgba(24,19,16,.42);padding:calc(var(--mobile-viewport-top,0px) + .75rem) .75rem calc(var(--mobile-viewport-bottom,0px) + 5.9rem);backdrop-filter:blur(14px)}.gp-mobile-search-dialog{position:relative;margin:0 auto;width:min(100%,28rem);border-radius:1.45rem;border:1px solid rgba(255,255,255,.78);background:rgba(249,245,239,.98);padding:1rem;box-shadow:0 24px 70px rgba(36,29,25,.18)}.gp-mobile-search-top{display:flex;align-items:center;gap:.75rem}.gp-mobile-search-field{position:relative;flex:1}.gp-mobile-search-close{display:inline-flex;width:2.6rem;height:2.6rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.16);background:white;color:var(--brand-text);font-size:1.35rem}.gp-mobile-search-root .gp-search-suggestions{position:static;margin-top:.75rem;max-height:60dvh}.gp-contact-widget-fallback{position:fixed;right:1rem;bottom:calc(var(--mobile-viewport-bottom,0px) + 1rem);z-index:155}.gp-contact-widget-fallback.is-mobile{bottom:calc(var(--mobile-viewport-bottom,0px) + var(--mobile-dock-height,5.35rem) + .85rem)}.gp-contact-widget-main{display:inline-flex;width:3.35rem;height:3.35rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(255,255,255,.76);background:var(--brand-primary);color:white;box-shadow:0 22px 48px rgba(175,90,102,.32);transition:.18s ease}.gp-contact-widget-main:hover{transform:translateY(-2px)}.gp-contact-widget-icon{position:absolute;opacity:0;transform:scale(.82);transition:.35s ease}.gp-contact-widget-icon.is-active{opacity:1;transform:scale(1)}.gp-contact-widget-panel{display:none;position:absolute;right:0;bottom:4.25rem;width:min(21rem,calc(100vw - 1.5rem));max-height:min(42rem,calc(100dvh - 7rem));overflow:auto;border-radius:1.5rem;border:1px solid rgba(255,255,255,.78);background:rgba(255,255,255,.97);padding:1rem;box-shadow:0 28px 78px rgba(36,29,25,.2)}.gp-contact-widget-fallback.is-open .gp-contact-widget-panel{display:block}.gp-contact-widget-panel h3{margin:0;font-family:var(--font-heading);font-size:1.65rem;line-height:1;color:var(--brand-text)}.gp-contact-widget-panel p{margin:.5rem 0 .9rem;color:var(--brand-muted);font-size:.9rem;line-height:1.45}.gp-contact-widget-links{display:grid;gap:.5rem;margin-bottom:.8rem}.gp-contact-widget-links a{display:flex;align-items:center;justify-content:space-between;border-radius:1rem;border:1px solid rgba(175,90,102,.12);background:rgba(249,245,239,.82);padding:.78rem .9rem;color:var(--brand-text);font-size:.9rem;font-weight:700}.gp-contact-widget-panel input,.gp-contact-widget-panel textarea{width:100%;border-radius:1rem;border:1px solid rgba(175,90,102,.16);background:white;padding:.78rem .9rem;margin-bottom:.55rem;color:var(--brand-text);outline:none}.gp-contact-widget-panel textarea{min-height:5.5rem;resize:vertical}",
    "@media (max-width:1023px){[data-mobile-shell='header'] a[href='/']{transform:translateY(.52rem)!important}body.gp-pravki-current main.relative.z-10{padding-top:.35rem!important}body.gp-pravki-current main.relative.z-10>*:first-child{margin-top:0!important}.gp-legal-dialog h2{font-size:clamp(1.08rem,5.4vw,1.42rem)!important;line-height:1.02!important;letter-spacing:0!important;max-width:calc(100vw - 5.5rem)!important;overflow-wrap:anywhere!important}.gp-cart-layout{grid-template-columns:minmax(0,1fr)}.gp-cart-row{grid-template-columns:4.5rem minmax(0,1fr);gap:.75rem}.gp-cart-row img{width:4.5rem;height:4.5rem}.gp-cart-qty{grid-column:1 / -1;justify-content:space-between}.gp-action-page-shell{border-radius:1.35rem;padding:.85rem}.gp-action-page-head{align-items:flex-start;flex-direction:column}.gp-compare-param-table{min-width:36rem}.gp-compare-param-table th,.gp-compare-param-table td{padding:.78rem}.gp-compare-product-cell img{width:4.35rem;height:4.35rem}.gp-action-toast{bottom:calc(var(--mobile-viewport-bottom,0px) + var(--mobile-dock-height,5.35rem) + .85rem);max-width:calc(100vw - 1.5rem);text-align:center}}",
    "body.gp-favorites-simple-page .gp-old-filter-panel,body.gp-favorites-simple-page .gp-old-mobile-catalog-header,body.gp-favorites-simple-page [data-gp-hide-on-favorites],body.gp-favorites-simple-page .gp-favorites-hidden,body.gp-favorites-simple-page main nav{display:none!important}body.gp-favorites-simple-page a[href='/catalog'],body.gp-favorites-simple-page button[aria-label*='РљР°С‚Р°Р»РѕРі']{background:white!important;color:var(--brand-text)!important;box-shadow:none!important}.gp-favorites-product-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:1.25rem!important}.gp-favorites-grid-shell{display:contents!important}@media (max-width:1023px){.gp-favorites-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media (max-width:640px){.gp-favorites-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}}.gp-favorites-simple-header{border-radius:1.9rem;border:1px solid rgba(255,255,255,.72);background:rgba(255,255,255,.86);padding:1.3rem 1.5rem;box-shadow:0 18px 45px rgba(36,29,25,.07)}.gp-favorites-simple-header h1{margin:0;font-family:var(--font-heading);font-size:clamp(2rem,4vw,3.5rem);line-height:.96;color:var(--brand-text)}.gp-favorites-simple-header p{margin:.7rem 0 0;color:var(--brand-muted);font-size:1rem}.gp-search-suggestions{position:absolute;left:0;right:0;top:calc(100% + .5rem);z-index:160;border-radius:1.25rem;border:1px solid rgba(175,90,102,.16);background:rgba(255,255,255,.98);box-shadow:0 24px 55px rgba(36,29,25,.14);padding:.45rem;max-height:24rem;overflow:auto}.gp-search-suggestion{display:flex;width:100%;align-items:flex-start;gap:.65rem;border:0;border-radius:1rem;background:transparent;padding:.7rem .8rem;text-align:left;color:var(--brand-text)}.gp-search-suggestion:hover{background:rgba(175,90,102,.08)}.gp-search-suggestion small{display:block;margin-top:.2rem;color:var(--brand-muted);font-size:.75rem}.gp-search-empty{padding:.8rem;color:var(--brand-muted);font-size:.9rem}",
    "body.gp-favorites-simple-page .gp-favorites-grid-shell{display:contents!important}body.gp-favorites-simple-page .gp-favorites-product-grid{display:grid!important}",
    ".gp-favorites-simple-header{position:relative!important;z-index:1!important;margin-bottom:1.25rem!important}.gp-favorites-product-grid{margin-top:1.25rem!important}.gp-category-found-pill{display:inline-flex;align-items:center;border-radius:999px;border:1px solid rgba(175,90,102,.16);background:white;padding:.55rem .9rem;font-size:.82rem;color:var(--brand-text);box-shadow:0 12px 24px rgba(36,29,25,.06)}.gp-storage-action-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem;margin:1.25rem 0 2rem}.gp-storage-action-card{overflow:hidden;border-radius:2rem;border:1px solid rgba(255,255,255,.75);background:rgba(255,255,255,.84);box-shadow:0 20px 60px rgba(36,29,25,.08)}.gp-storage-action-card img{display:block;width:100%;height:13rem;object-fit:cover}.gp-storage-action-card-body{padding:1rem}.gp-storage-action-card-title{min-height:3.2rem;color:var(--brand-text);font-family:var(--font-heading);font-size:1.25rem;line-height:1.05}.gp-storage-action-card-price{margin-top:.9rem;border-top:1px solid rgba(175,90,102,.1);padding-top:.85rem;color:var(--brand-text);font-size:1.2rem;font-weight:700}.gp-storage-action-empty-hidden{display:none!important}@media (max-width:1023px){.gp-storage-action-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:640px){.gp-storage-action-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.gp-storage-action-card{border-radius:1.35rem}.gp-storage-action-card img{height:8.5rem}.gp-storage-action-card-body{padding:.75rem}.gp-storage-action-card-title{min-height:2.6rem;font-size:.95rem}.gp-storage-action-card-price{font-size:1rem}body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) main{padding-top:.75rem!important}body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) main>div:first-child{margin-top:0!important;padding-top:0!important}body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) .gp-old-mobile-catalog-header,body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) main>section:first-child:has(h1){position:sticky!important;top:4.75rem!important;z-index:45!important;margin-top:0!important}body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) .gp-old-mobile-header-actions span:not(.gp-category-found-pill){display:none!important}}"
  ].join("");
  document.head.appendChild(style);
}

function ensurePravki31FinishingStyle(){
  if(document.getElementById("gp-pravki31-finishing-style"))return;
  var style=document.createElement("style");
  style.id="gp-pravki31-finishing-style";
  style.textContent=[
    "@media (max-width:1023px){body.gp-pravki-current main.relative.z-10{padding-top:.25rem!important}body.gp-pravki-current main.relative.z-10>*:first-child{margin-top:0!important}[data-mobile-shell='header'] a[href='/']{transform:translateY(.55rem)!important}.gp-legal-dialog h2,body.gp-pravki-current [role='dialog'][aria-modal='true'] h2{font-size:clamp(1.05rem,5.2vw,1.42rem)!important;line-height:1.02!important;letter-spacing:0!important;max-width:calc(100vw - 5.5rem)!important;overflow-wrap:anywhere!important}.gp-favorites-product-grid,.gp-storage-action-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}}",
    "@media (max-width:1023px){body.gp-pravki-current-catalog-list main.relative.z-10,body.gp-favorites-simple-page main.relative.z-10{margin-top:calc(var(--mobile-header-height,5.95rem) * -1)!important;padding-top:0!important}body.gp-pravki-current-catalog-list main.relative.z-10>*:first-child,body.gp-favorites-simple-page main.relative.z-10>*:first-child{margin-top:0!important;padding-top:0!important}}",
    "@media (max-width:1023px){:root{--mobile-header-height:5.95rem!important}[data-mobile-shell='header']{height:var(--mobile-header-height)!important;overflow:visible!important}[data-mobile-shell='header']>div{padding-top:max(env(safe-area-inset-top),.48rem)!important;padding-bottom:.4rem!important}[data-mobile-shell='header'] nav{align-items:start!important;gap:.25rem!important}[data-mobile-shell='header'] nav>div:last-child{transform:translateX(-.42rem)!important}[data-mobile-shell='header'] a[href='/']{position:relative!important;z-index:5!important;min-width:2.55rem!important;width:2.55rem!important;transform:translateY(.18rem)!important;overflow:visible!important}[data-mobile-shell='header'] a[href='/']>div:first-child{height:2.28rem!important;width:2.28rem!important;border-radius:.9rem!important}[data-mobile-shell='header'] a[href='/']>div:last-child{position:absolute!important;top:2.58rem!important;left:50%!important;display:block!important;max-width:none!important;width:max-content!important;transform:translateX(-50%)!important;white-space:nowrap!important;overflow:visible!important;text-align:center!important;font-size:.72rem!important;line-height:1!important;letter-spacing:0!important;color:var(--brand-text)!important;text-shadow:0 1px 0 rgba(255,255,255,.86)!important}[data-mobile-shell='header'] [data-gp-action-badge='true']{top:.42rem!important;right:.42rem!important;transform:none!important;box-sizing:border-box!important;min-width:1rem!important;width:auto!important;height:1rem!important;min-height:1rem!important;padding:0 .25rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;font-size:.62rem!important;line-height:1!important;z-index:35!important;box-shadow:0 7px 15px rgba(175,90,102,.26)!important}[data-mobile-shell='header'] a[href='/compare'] [data-gp-action-badge='true']{right:.55rem!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] nav>div:last-child{justify-self:end!important;gap:.22rem!important;transform:translateX(-.08rem)!important;margin-right:0!important}[data-mobile-shell='header'] nav>div:last-child>a,[data-mobile-shell='header'] nav>div:last-child>button{box-sizing:border-box!important;min-width:2.55rem!important;width:2.55rem!important;max-width:2.55rem!important;padding-left:0!important;padding-right:0!important;gap:.08rem!important}[data-mobile-shell='header'] nav>div:last-child>a[href='/compare']{min-width:2.95rem!important;width:2.95rem!important;max-width:2.95rem!important}[data-mobile-shell='header'] nav>div:last-child>button{min-width:2.62rem!important;width:2.62rem!important;max-width:2.62rem!important}[data-mobile-shell='header'] nav>div:last-child>a[href='/cart']{min-width:2.36rem!important;width:2.36rem!important;max-width:2.36rem!important}[data-mobile-shell='header'] nav>div:last-child>a>span:last-child,[data-mobile-shell='header'] nav>div:last-child>button>span:last-child{max-width:100%!important;overflow:visible!important;text-align:center!important;font-size:8.5px!important;line-height:.95!important;letter-spacing:0!important;white-space:nowrap!important}[data-mobile-shell='header'] nav>div:last-child svg{width:1.02rem!important;height:1.02rem!important}}",
    "body.gp-compare-storage-ready main>[data-gp-storage-action-page]{display:block!important;contain:layout paint}body.gp-compare-storage-ready main>:not([data-gp-storage-action-page]){display:none!important}",
    "body.gp-favorites-storage-ready main>[data-gp-storage-action-page]{display:block!important;contain:layout paint}body.gp-favorites-storage-ready main>:not([data-gp-storage-action-page]){display:none!important}body.gp-favorites-storage-ready [data-gp-lite-favorites-page]{display:none!important}body.gp-favorites-storage-ready .gp-favorites-storage-shell{display:grid!important;gap:1rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-header{position:relative!important;top:auto!important;left:auto!important;right:auto!important;inset:auto!important;z-index:1!important;border-radius:1.85rem;border:1px solid rgba(255,255,255,.76);background:rgba(255,255,255,.88);padding:1.35rem 1.5rem;box-shadow:0 18px 48px rgba(36,29,25,.075)}.gp-favorites-storage-header h1{margin:0;font-family:var(--font-heading);font-size:clamp(2rem,4vw,3.45rem);line-height:.96;color:var(--brand-text)}.gp-favorites-storage-header p{margin:.7rem 0 0;color:var(--brand-muted);font-size:1rem;line-height:1.5}.gp-favorites-storage-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem}.gp-favorites-storage-card{position:relative;overflow:hidden;border-radius:1.65rem;border:1px solid rgba(255,255,255,.76);background:rgba(255,255,255,.88);box-shadow:0 18px 48px rgba(36,29,25,.075)}.gp-favorites-storage-image{display:block;position:relative;height:13rem;overflow:hidden;background:linear-gradient(135deg,#eadccf,#f7f2ec 58%,#fffaf4)}.gp-favorites-storage-image img{width:100%;height:100%;object-fit:cover}.gp-favorites-storage-body{padding:.95rem .95rem 1rem}.gp-favorites-storage-title{display:-webkit-box;min-height:3.15rem;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-family:var(--font-heading);font-size:1.08rem;line-height:1.05;color:var(--brand-text)}.gp-favorites-storage-price{margin-top:.85rem;border-top:1px solid rgba(175,90,102,.1);padding-top:.8rem}.gp-favorites-storage-price span{display:block;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-muted)}.gp-favorites-storage-price strong{display:block;margin-top:.25rem;font-size:1.15rem;line-height:1;color:var(--brand-text)}.gp-favorites-storage-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.55rem;margin-top:.9rem}.gp-favorites-storage-action{display:grid;justify-items:center;gap:.3rem;border:0;background:transparent;padding:0;color:var(--brand-text)}.gp-favorites-storage-action-bubble{display:inline-flex;width:2.7rem;height:2.7rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;box-shadow:0 10px 22px rgba(36,29,25,.06);transition:.16s ease}.gp-favorites-storage-action small{font-size:.72rem;line-height:1.1;color:var(--brand-muted)}.gp-favorites-storage-action.is-active,.gp-favorites-storage-action.gp-cart-added{background:transparent!important;border-color:transparent!important;box-shadow:none!important}.gp-favorites-storage-action.is-active small,.gp-favorites-storage-action.gp-cart-added small{color:var(--brand-primary)!important}.gp-favorites-storage-action.is-active .gp-favorites-storage-action-bubble,.gp-favorites-storage-action.gp-cart-added .gp-favorites-storage-action-bubble{background:var(--brand-primary);border-color:var(--brand-primary);color:#fff}.gp-favorites-storage-empty{border-radius:1.65rem;border:1px dashed rgba(175,90,102,.2);background:rgba(255,255,255,.82);padding:2rem 1.5rem;text-align:center;color:var(--brand-muted);font-size:1.05rem;line-height:1.55}.gp-favorites-storage-empty h2{margin:0;font-family:var(--font-heading);font-size:clamp(1.55rem,3vw,2.25rem);line-height:1;color:var(--brand-text)}.gp-favorites-storage-empty p{margin:.75rem auto 0;max-width:34rem}.gp-favorites-storage-empty a{display:inline-flex;align-items:center;justify-content:center;margin-top:1.15rem;border-radius:999px;background:var(--brand-primary);color:#fff;padding:.82rem 1.15rem;font-weight:800;text-decoration:none;box-shadow:0 16px 34px rgba(175,90,102,.24)}",
    ".gp-compare-desktop-shell-v3{display:grid;gap:.55rem}.gp-compare-desktop-top-v3{display:grid;gap:.55rem;align-items:start}.gp-compare-card-v2{display:grid!important;grid-template-rows:6.15rem 4.15rem 2rem auto!important;gap:0!important;align-content:start!important;min-height:0!important;height:auto!important;border-radius:1.35rem!important;padding:.72rem!important}.gp-compare-card-link-v2{display:grid!important;grid-template-rows:6.15rem 4.15rem!important;gap:0!important}.gp-compare-card-image-v2{height:6.15rem!important;border-radius:.95rem!important}.gp-compare-card-title-v2{display:-webkit-box!important;margin:.55rem 0 0!important;min-height:4.15rem!important;max-height:4.15rem!important;overflow:hidden!important;-webkit-line-clamp:4!important;-webkit-box-orient:vertical!important;font-size:1rem!important;line-height:1.04!important}.gp-compare-card-price-v2{display:flex!important;align-items:flex-end!important;min-height:2rem!important;margin:0!important;padding-top:.45rem!important;font-size:.93rem!important}.gp-compare-card-actions-v2{margin-top:.35rem!important}.gp-compare-table-shell-v2{position:relative!important;z-index:1!important}.gp-compare-table-product-v2,.gp-compare-table-value-v2{padding:.78rem .82rem!important}",
    ".gp-compare-cards-grid-v2,.gp-compare-grid-v2,.gp-compare-mobile-grid-v2{display:grid}.gp-compare-cards-grid-v2{gap:1rem;align-items:start}.gp-compare-summary-card-v2,.gp-compare-card-v2,.gp-compare-table-shell-v2,.gp-compare-mobile-summary-v2,.gp-compare-mobile-scroll-v2,.gp-cart-desktop-row-v2,.gp-cart-mobile-row-v2,.gp-cart-order-panel-v2,.gp-cart-mobile-total-v2{border:1px solid rgba(255,255,255,.76);background:rgba(255,255,255,.88);box-shadow:0 18px 50px rgba(36,29,25,.075)}.gp-compare-summary-card-v2{align-self:start;border-radius:1.45rem;padding:1.1rem}.gp-compare-kicker-v2{font-size:.68rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--brand-primary)}.gp-compare-summary-card-v2 h2,.gp-compare-mobile-summary-v2 h2{margin:.55rem 0 0;font-family:var(--font-heading);font-size:2rem;line-height:.96;color:var(--brand-text)}.gp-compare-card-v2{display:grid!important;align-self:start!important;grid-template-rows:auto auto auto auto!important;align-content:start!important;justify-content:stretch!important;min-height:0!important;height:auto!important;border-radius:1.45rem;padding:.8rem}.gp-compare-card-link-v2{display:block!important}.gp-compare-card-image-v2{position:relative;display:block;height:6.7rem;overflow:hidden;border-radius:1.05rem;background:linear-gradient(135deg,#eadccf,#f7f2ec 58%,#fffaf4)}.gp-compare-card-image-v2 img{width:100%;height:100%;object-fit:contain;padding:.55rem}.gp-compare-card-title-v2{display:-webkit-box!important;margin:.72rem 0 0!important;min-height:3.45rem!important;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-family:var(--font-heading);font-size:1.18rem;line-height:1.02;color:var(--brand-text)}.gp-compare-card-price-v2{display:block!important;border-top:1px solid rgba(175,90,102,.1);padding-top:.62rem;font-size:1rem;font-weight:800;color:var(--brand-text);min-height:0!important;height:auto!important;margin:0!important}.gp-compare-card-actions-v2{display:flex!important;gap:.45rem;margin-top:.6rem!important;min-height:0!important;height:auto!important}.gp-compare-action-btn-v2{display:inline-flex;height:2.3rem;width:2.3rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;color:var(--brand-text);box-shadow:0 10px 22px rgba(36,29,25,.06);transition:.16s ease}.gp-compare-action-btn-v2:hover{transform:translateY(-1px);border-color:rgba(175,90,102,.38)}.gp-compare-action-btn-v2.is-active{background:var(--brand-primary);border-color:var(--brand-primary);color:#fff}.gp-compare-table-shell-v2{overflow:hidden;border-radius:1.45rem}.gp-compare-grid-v2{gap:0;border-top:1px solid rgba(175,90,102,.08)}.gp-compare-table-head-v2{border-top:0;background:var(--brand-surface)}.gp-compare-sticky-param-v2{position:sticky;left:0;z-index:2;background:rgba(249,245,239,.98);padding:.82rem .9rem;font-size:.75rem;font-weight:800;color:var(--brand-text);box-shadow:10px 0 24px -18px rgba(36,29,25,.24)}.gp-compare-table-product-v2,.gp-compare-table-value-v2{padding:.82rem .9rem;font-size:.86rem;line-height:1.35;color:var(--brand-muted)}.gp-compare-table-product-v2{font-weight:700;color:var(--brand-text)}",
    ".gp-cart-layout-v2{grid-template-columns:minmax(0,1.25fr) minmax(18rem,.75fr);gap:1rem}.gp-cart-items-v2,.gp-cart-mobile-list-v2{display:grid;gap:.75rem}.gp-cart-desktop-row-v2{display:grid;grid-template-columns:6.75rem minmax(0,1fr) auto;gap:1rem;align-items:center;border-radius:1.35rem;padding:.82rem}.gp-cart-desktop-image-v2,.gp-cart-mobile-image-v2{display:block;overflow:hidden;background:linear-gradient(135deg,#eadccf,#f7f2ec 58%,#fffaf4)}.gp-cart-desktop-image-v2{height:6.75rem;border-radius:1.05rem}.gp-cart-desktop-image-v2 img,.gp-cart-mobile-image-v2 img{width:100%;height:100%;object-fit:cover}.gp-cart-title-v2{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-family:var(--font-heading);font-size:1.28rem;line-height:1.04;color:var(--brand-text)}.gp-cart-desktop-info-v2 p{display:-webkit-box;margin:.35rem 0 0;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--brand-muted);font-size:.86rem;line-height:1.45}.gp-cart-desktop-actions-v2{display:grid;justify-items:end;gap:.45rem;min-width:10rem}.gp-cart-qty-v2{display:inline-flex;align-items:center;gap:.35rem;border:1px solid rgba(175,90,102,.18);border-radius:999px;background:white;padding:.25rem .38rem}.gp-cart-qty-v2 button{width:1.85rem;height:1.85rem;border:0;border-radius:999px;background:transparent;color:var(--brand-text);font-weight:800}.gp-cart-qty-v2 strong{min-width:1.45rem;text-align:center;font-size:.9rem}.gp-cart-line-total-v2{font-size:1.08rem;font-weight:800;color:var(--brand-text)}.gp-cart-remove-v2{border:0;background:transparent;color:var(--brand-primary);font-size:.82rem}.gp-cart-order-panel-v2{align-self:start;border-radius:1.45rem;padding:1.1rem}.gp-cart-total-v2{margin:.55rem 0 0;font-family:var(--font-heading);font-size:2.55rem;line-height:.96;color:var(--brand-text)}.gp-cart-order-panel-v2 p{margin:.7rem 0 0;color:var(--brand-muted);font-size:.9rem;line-height:1.55}.gp-cart-checkout-v2{display:inline-flex;width:100%;align-items:center;justify-content:center;margin-top:1rem;border:0;border-radius:999px;background:var(--brand-primary);color:#fff;padding:.88rem 1rem;font-weight:800;box-shadow:0 16px 34px rgba(175,90,102,.24)}",
    ".gp-contact-widget-fallback .gp-contact-widget-panel{border-radius:1.65rem!important;padding:.85rem!important;background:rgba(255,255,255,.98)!important}.gp-contact-widget-head-v2{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.65rem}.gp-contact-widget-head-v2 h3{font-size:1.35rem!important}.gp-contact-widget-head-v2 p{margin:.25rem 0 0!important;font-size:.82rem!important}.gp-contact-widget-menu-v2{display:grid;gap:.48rem;margin-bottom:0!important}.gp-contact-widget-link-v2{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:.8rem;border-radius:1.15rem!important;border:1px solid rgba(175,90,102,.12)!important;background:rgba(255,255,255,.96)!important;padding:.66rem .72rem!important;color:var(--brand-text)!important;font-size:.9rem!important;font-weight:800!important;box-shadow:0 12px 26px rgba(36,29,25,.065)!important}.gp-contact-widget-link-v2:nth-child(2){margin-right:.75rem}.gp-contact-widget-link-v2:nth-child(3){margin-right:1.5rem}.gp-contact-widget-link-v2:nth-child(4){margin-right:2.25rem}.gp-contact-widget-icon-bubble-v2{display:inline-flex;width:2.15rem;height:2.15rem;align-items:center;justify-content:center;overflow:hidden;border-radius:999px;background:white;box-shadow:0 9px 18px rgba(36,29,25,.1)}.gp-contact-widget-icon-bubble-v2 img,.gp-contact-widget-icon img{display:block;width:100%;height:100%;object-fit:cover}.gp-contact-widget-form-v2{display:none!important;margin-top:.65rem}.gp-contact-widget-fallback.is-chat .gp-contact-widget-form-v2,.gp-contact-widget-fallback.is-open[data-gp-contact-has-message='true'] .gp-contact-widget-form-v2{display:block!important}.gp-contact-widget-fallback.is-chat .gp-contact-widget-menu-v2{margin-bottom:.25rem!important}.gp-contact-widget-main{overflow:hidden}.gp-contact-widget-main .gp-contact-widget-icon{inset:50% auto auto 50%;width:1.55rem;height:1.55rem;margin:-.775rem 0 0 -.775rem}.gp-contact-widget-main .gp-contact-widget-icon span{font-size:.58rem!important}",
    ".gp-contact-widget-main .gp-contact-widget-icon-bubble-v2{width:1.55rem!important;height:1.55rem!important;box-shadow:none!important}.gp-contact-widget-main .gp-contact-widget-icon-bubble-v2 svg{width:1.05rem!important;height:1.05rem!important}",
    "@media (max-width:1023px){[data-mobile-shell='header']{border-bottom:0!important;box-shadow:0 8px 24px rgba(36,29,25,.06)!important}.gp-mobile-search-root{z-index:220!important;padding-top:calc(var(--mobile-header-height,5.95rem) + .6rem + env(safe-area-inset-top))!important}.gp-mobile-search-dialog{box-shadow:0 24px 70px rgba(36,29,25,.22)!important}body.gp-product-detail-page main.relative.z-10{padding-top:.35rem!important}body.gp-product-detail-page main [class*='mt-24'],body.gp-product-detail-page main [class*='mt-20'],body.gp-product-detail-page main [class*='mt-16']{margin-top:1rem!important}body.gp-product-detail-page main [class*='py-20'],body.gp-product-detail-page main [class*='py-16']{padding-top:1rem!important;padding-bottom:1rem!important}}",
    "@media (max-width:1023px){.gp-favorites-storage-shell{gap:.85rem}.gp-favorites-storage-header{padding:1.05rem 1.1rem}.gp-favorites-storage-header h1{font-size:clamp(1.75rem,8vw,2.55rem)}.gp-favorites-storage-header p{font-size:.92rem}.gp-favorites-storage-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.gp-favorites-storage-card{border-radius:1.35rem}.gp-favorites-storage-image{height:8.5rem}.gp-favorites-storage-body{padding:.75rem .72rem .85rem}.gp-favorites-storage-title{min-height:2.55rem;font-size:.96rem}.gp-favorites-storage-price{margin-top:.7rem;padding-top:.65rem}.gp-favorites-storage-price strong{font-size:1rem}.gp-favorites-storage-actions{gap:.4rem;margin-top:.7rem}.gp-favorites-storage-action-bubble{width:2.4rem;height:2.4rem}.gp-favorites-storage-action small{font-size:.66rem}.gp-favorites-storage-empty{padding:1.6rem 1rem;font-size:.95rem}}",
    "@media (max-width:640px){body.gp-pravki-current-catalog-list:not(.gp-favorites-simple-page) .gp-old-mobile-catalog-header.gp-pravki-current-mobile-plaque{position:relative!important;top:auto!important;z-index:1!important;margin-top:0!important}}",
    "@media (max-width:767px){.gp-compare-mobile-shell-v2{display:grid;gap:.8rem}.gp-compare-mobile-summary-v2{border-radius:1.35rem;padding:.95rem}.gp-compare-mobile-summary-v2 h2{font-size:1.85rem}.gp-compare-mobile-scroll-v2{overflow-x:auto;border-radius:1.25rem}.gp-compare-mobile-width-v2{min-width:max-content}.gp-compare-mobile-grid-v2{gap:0}.gp-compare-mobile-head-v2{background:var(--brand-surface)}.gp-compare-mobile-param-v2{position:sticky;left:0;z-index:3;background:rgba(249,245,239,.98);padding:.68rem .58rem;font-size:.72rem;line-height:1.25;color:var(--brand-text);box-shadow:8px 0 20px -16px rgba(36,29,25,.28)}.gp-compare-mobile-head-v2 .gp-compare-mobile-param-v2{display:flex;align-items:flex-end;min-height:9.7rem;font-weight:800}.gp-compare-mobile-product-v2{padding:.48rem .45rem}.gp-compare-mobile-image-v2{display:block;height:3.95rem;overflow:hidden;border-radius:.8rem;background:#f7f2ec}.gp-compare-mobile-image-v2 img{width:100%;height:100%;object-fit:contain;padding:.25rem}.gp-compare-mobile-title-v2{display:-webkit-box;margin:.4rem 0 0;min-height:2.32rem;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:.68rem;line-height:1.08;color:var(--brand-text)}.gp-compare-mobile-price-v2{margin-top:.25rem;font-size:.72rem;font-weight:800;color:var(--brand-text)}.gp-compare-card-actions-v2.is-compact{gap:.22rem;margin-top:.35rem}.gp-compare-card-actions-v2.is-compact .gp-compare-action-btn-v2{width:1.65rem;height:1.65rem}.gp-compare-card-actions-v2.is-compact svg{width:.9rem;height:.9rem}.gp-compare-mobile-row-v2{border-top:1px solid rgba(175,90,102,.09);background:rgba(255,255,255,.9)}.gp-compare-mobile-value-v2{padding:.68rem .5rem;font-size:.72rem;line-height:1.25;color:var(--brand-muted)}.gp-cart-mobile-row-v2{display:grid;grid-template-columns:5.3rem minmax(0,1fr);gap:.72rem;border-radius:1.25rem;padding:.72rem}.gp-cart-mobile-image-v2{height:5.3rem;border-radius:.95rem}.gp-cart-mobile-title-v2{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-family:var(--font-heading);font-size:1rem;line-height:1.05;color:var(--brand-text)}.gp-cart-mobile-price-v2{margin-top:.28rem;color:var(--brand-muted);font-size:.78rem}.gp-cart-mobile-bottom-v2{display:flex;align-items:center;justify-content:space-between;gap:.45rem;margin-top:.5rem}.gp-cart-mobile-bottom-v2>strong{font-size:.95rem;color:var(--brand-text);white-space:nowrap}.gp-cart-mobile-bottom-v2 .gp-cart-remove-v2{font-size:.75rem}.gp-cart-mobile-total-v2{border-radius:1.25rem;padding:.9rem}.gp-cart-mobile-total-v2>div{display:flex;align-items:center;justify-content:space-between;gap:1rem;color:var(--brand-text)}}",
    "@media (max-width:640px){body.gp-pravki-current-catalog-list main section:has(> article),body.gp-pravki-current-catalog-list main div:has(> article){grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.75rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function ensurePravki33FinishingStyle(){
  if(document.getElementById("gp-pravki33-finishing-style"))return;
  var style=document.createElement("style");
  style.id="gp-pravki33-finishing-style";
  style.textContent=[
    ".gp-old-filter-overlay{overflow:hidden!important}",
    "body.gp-compare-storage-ready .gp-compare-desktop-shell-v3{gap:.55rem!important}body.gp-compare-storage-ready .gp-compare-desktop-top-v3{gap:.55rem!important;align-items:start!important}body.gp-compare-storage-ready .gp-compare-summary-card-v2{min-height:14.4rem!important;border-radius:1.5rem!important;padding:1rem!important}body.gp-compare-storage-ready .gp-compare-summary-card-v2 h2{font-size:2rem!important}body.gp-compare-storage-ready .gp-compare-card-v2{border-radius:1.5rem!important;padding:.78rem!important}body.gp-compare-storage-ready .gp-compare-card-image-v2{height:6.6rem!important;border-radius:1rem!important}body.gp-compare-storage-ready .gp-compare-card-title-v2{margin-top:.55rem!important;min-height:3.05rem!important;max-height:3.05rem!important;-webkit-line-clamp:3!important;font-size:.96rem!important;line-height:1.08!important}body.gp-compare-storage-ready .gp-compare-card-price-v2{padding-top:.45rem!important;font-size:.92rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2{margin-top:.42rem!important;gap:.4rem!important}body.gp-compare-storage-ready .gp-compare-action-btn-v2{width:2.1rem!important;height:2.1rem!important}body.gp-compare-storage-ready .gp-compare-table-shell-v2{margin-top:.55rem!important}body.gp-compare-storage-ready .gp-compare-table-product-v2,body.gp-compare-storage-ready .gp-compare-table-value-v2{padding:.72rem .76rem!important;font-size:.82rem!important;line-height:1.32!important}body.gp-compare-storage-ready .gp-compare-sticky-param-v2{padding:.72rem .76rem!important;font-size:.7rem!important}",
    ".gp-brand-subcategory-card{display:flex!important;flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important;gap:.7rem!important}.gp-brand-subcategory-logo-wrap{order:-1!important;display:flex!important;align-items:flex-start!important;justify-content:flex-start!important;min-width:0!important;max-width:100%!important}.gp-brand-subcategory-logo{display:block!important;width:auto!important;height:2.15rem!important;max-width:min(11rem,100%)!important;max-height:2.4rem!important;object-fit:contain!important;object-position:left center!important;flex:0 0 auto!important}.gp-brand-subcategory-text{display:flex!important;flex-direction:column!important;gap:.35rem!important;width:100%!important;min-width:0!important}.gp-brand-subcategory-name-hidden{display:none!important}.gp-brand-subcategory-count{display:block!important;margin:0!important;font-size:.76rem!important;font-weight:700!important;letter-spacing:.22em!important;text-transform:uppercase!important;color:var(--brand-muted)!important}",
    "@media (max-width:767px){body.gp-compare-storage-ready .gp-compare-mobile-summary-v2{border-radius:1.35rem!important;padding:.92rem!important}body.gp-compare-storage-ready .gp-compare-mobile-summary-v2 h2{font-size:1.85rem!important}body.gp-compare-storage-ready .gp-compare-mobile-head-v2 .gp-compare-mobile-param-v2{min-height:8.25rem!important}body.gp-compare-storage-ready .gp-compare-mobile-product-v2{padding:.42rem .38rem!important}body.gp-compare-storage-ready .gp-compare-mobile-image-v2{height:4.5rem!important;border-radius:.82rem!important}body.gp-compare-storage-ready .gp-compare-mobile-title-v2{min-height:2.35rem!important;-webkit-line-clamp:2!important;font-size:.72rem!important;line-height:1.1!important}body.gp-compare-storage-ready .gp-compare-mobile-price-v2{margin-top:.22rem!important;font-size:.76rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2.is-compact{gap:.2rem!important;margin-top:.28rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2.is-compact .gp-compare-action-btn-v2{width:1.58rem!important;height:1.58rem!important}body.gp-compare-storage-ready .gp-compare-mobile-value-v2{padding:.6rem .42rem!important;font-size:.7rem!important;line-height:1.22!important}.gp-brand-subcategory-logo{height:1.85rem!important;max-height:1.95rem!important}.gp-brand-subcategory-count{font-size:.7rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function ensureJune17CatalogOverrides(){
  if(document.getElementById("gp-june17-catalog-overrides"))return;
  var style=document.createElement("style");
  style.id="gp-june17-catalog-overrides";
  style.textContent=[
    ".gp-category-actions-row{display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:.65rem!important}.gp-category-actions-row>a,.gp-category-actions-row>button,.gp-category-actions-row>.gp-category-found-pill{display:inline-flex!important;align-items:center!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.16)!important;background:#fff!important;padding:.58rem .92rem!important;font-size:.82rem!important;line-height:1!important;color:var(--brand-text)!important;box-shadow:0 12px 24px rgba(36,29,25,.06)!important}.gp-category-actions-row .gp-category-title-inline{display:block;min-width:0;font-family:var(--font-heading)!important;line-height:.94!important;color:var(--brand-text)!important;white-space:normal!important}.gp-category-actions-row .gp-category-title-inline h1{margin:0!important;font:inherit!important;line-height:inherit!important;color:inherit!important}.gp-category-back-link{font-weight:600!important}.gp-brand-subcategory-card{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:1rem!important}.gp-brand-subcategory-text{display:flex!important;min-width:0!important;flex:1 1 auto!important;flex-direction:column!important;gap:.55rem!important}.gp-brand-subcategory-logo-wrap{display:inline-flex!important;flex:0 0 auto!important;align-items:center!important;justify-content:center!important;min-width:6.5rem!important;max-width:8.75rem!important}.gp-brand-subcategory-logo{display:block!important;max-width:100%!important;max-height:2.35rem!important;object-fit:contain!important}",
    "body.gp-favorites-storage-ready .gp-favorites-storage-body{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;grid-template-rows:auto auto!important;column-gap:.85rem!important;row-gap:.85rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-title{grid-column:1 / -1!important;min-height:2.75rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-price{grid-column:1!important;margin-top:0!important;padding-top:.82rem!important;align-self:end!important}body.gp-favorites-storage-ready .gp-favorites-storage-actions{grid-column:2!important;display:flex!important;align-items:flex-end!important;gap:.5rem!important;margin:0!important;align-self:end!important}body.gp-favorites-storage-ready .gp-favorites-storage-action{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:2.7rem!important;height:2.7rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-action-bubble{width:100%!important;height:100%!important;box-shadow:0 10px 22px rgba(36,29,25,.06)!important}body.gp-favorites-storage-ready .gp-favorites-storage-action small{display:none!important}body.gp-favorites-storage-ready .gp-favorites-storage-action.is-active .gp-favorites-storage-action-bubble,body.gp-favorites-storage-ready .gp-favorites-storage-action.gp-cart-added .gp-favorites-storage-action-bubble{background:rgba(175,90,102,.1)!important;border-color:rgba(175,90,102,.42)!important;color:var(--brand-primary)!important}body.gp-favorites-storage-ready .gp-favorites-storage-action.is-active,body.gp-favorites-storage-ready .gp-favorites-storage-action.gp-cart-added{color:var(--brand-primary)!important}",
    "body.gp-compare-storage-ready .gp-compare-desktop-shell-v3{gap:1rem!important}body.gp-compare-storage-ready .gp-compare-desktop-top-v3{gap:1rem!important;align-items:stretch!important}body.gp-compare-storage-ready .gp-compare-summary-card-v2{min-height:18.2rem!important;border-radius:1.7rem!important;padding:1.25rem!important}body.gp-compare-storage-ready .gp-compare-summary-card-v2 h2{font-size:2.35rem!important}body.gp-compare-storage-ready .gp-compare-card-v2{border-radius:1.7rem!important;padding:1rem!important}body.gp-compare-storage-ready .gp-compare-card-image-v2{height:8.9rem!important;border-radius:1.2rem!important}body.gp-compare-storage-ready .gp-compare-card-title-v2{margin-top:.85rem!important;min-height:4.6rem!important;max-height:none!important;-webkit-line-clamp:4!important;font-size:1.2rem!important;line-height:1.04!important}body.gp-compare-storage-ready .gp-compare-card-price-v2{padding-top:.8rem!important;font-size:1.08rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2{margin-top:.75rem!important;gap:.55rem!important}body.gp-compare-storage-ready .gp-compare-action-btn-v2{width:2.45rem!important;height:2.45rem!important}body.gp-compare-storage-ready .gp-compare-table-product-v2,body.gp-compare-storage-ready .gp-compare-table-value-v2{padding:1rem!important;font-size:.92rem!important;line-height:1.45!important}body.gp-compare-storage-ready .gp-compare-sticky-param-v2{padding:1rem!important;font-size:.78rem!important}",
    "@media (min-width:1024px){.gp-category-actions-row .gp-category-title-inline{order:4;flex:1 1 14rem!important;font-size:clamp(2.2rem,3.3vw,3.25rem)!important}.gp-category-actions-row .gp-category-found-pill{order:3}}",
    "@media (max-width:1023px){.gp-category-actions-row .gp-category-title-inline{flex-basis:100%!important;width:100%!important;margin-top:.1rem!important;font-size:2.05rem!important}.gp-brand-subcategory-card{gap:.8rem!important}.gp-brand-subcategory-logo-wrap{min-width:5.15rem!important;max-width:7rem!important}.gp-brand-subcategory-logo{max-height:1.85rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-body{row-gap:.7rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-actions{gap:.4rem!important}body.gp-favorites-storage-ready .gp-favorites-storage-action{width:2.45rem!important;height:2.45rem!important}}",
    "@media (max-width:767px){body.gp-compare-storage-ready .gp-compare-mobile-summary-v2{border-radius:1.45rem!important;padding:1rem!important}body.gp-compare-storage-ready .gp-compare-mobile-summary-v2 h2{font-size:2rem!important}body.gp-compare-storage-ready .gp-compare-mobile-image-v2{height:5.8rem!important;border-radius:.95rem!important}body.gp-compare-storage-ready .gp-compare-mobile-title-v2{min-height:3rem!important;-webkit-line-clamp:3!important;font-size:.8rem!important;line-height:1.12!important}body.gp-compare-storage-ready .gp-compare-mobile-price-v2{margin-top:.38rem!important;font-size:.85rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2.is-compact{gap:.28rem!important;margin-top:.48rem!important}body.gp-compare-storage-ready .gp-compare-card-actions-v2.is-compact .gp-compare-action-btn-v2{width:1.9rem!important;height:1.9rem!important}body.gp-compare-storage-ready .gp-compare-mobile-value-v2{padding:.75rem .58rem!important;font-size:.78rem!important;line-height:1.3!important}}"
  ].join("");
  document.head.appendChild(style);
}

function gpReadJsonArray(key){
  var memory=[];
  try{
    memory=window.__gpActionMemoryStore&&window.__gpActionMemoryStore[key];
    if(!Array.isArray(memory))memory=[];
  }catch(error){}
  if(!window.__gpLocalStorageWriteFailed){
    try{
      var value=window.localStorage&&window.localStorage.getItem(key);
      var parsed=value?JSON.parse(value):[];
      if(Array.isArray(parsed))return parsed;
    }catch(error){}
  }
  if(memory.length)return memory.slice();
  try{
    var nameStore=JSON.parse(window.name||"{}");
    var nameValues=nameStore&&nameStore.__gpActionStore&&nameStore.__gpActionStore[key];
    if(Array.isArray(nameValues))return nameValues;
  }catch(error){}
  try{
    var cookieName="gp_store_"+encodeURIComponent(key)+"=";
    var cookie=(document.cookie||"").split("; ").find(function(item){return item.indexOf(cookieName)===0});
    if(cookie){
      var cookieParsed=JSON.parse(decodeURIComponent(cookie.slice(cookieName.length)));
      if(Array.isArray(cookieParsed))return cookieParsed;
    }
  }catch(error){}
  return [];
}

function gpWriteJsonArray(key,value){
  try{
    var cleanValue=Array.isArray(value)?value:[];
    var next=JSON.stringify(cleanValue);
    try{
      window.__gpActionMemoryStore=window.__gpActionMemoryStore||{};
      window.__gpActionMemoryStore[key]=cleanValue.slice();
    }catch(memoryError){}
    var wroteLocal=false;
    try{
      if(window.localStorage){
        if(window.localStorage.getItem(key)!==next)window.localStorage.setItem(key,next);
        wroteLocal=true;
      }
    }catch(storageError){window.__gpLocalStorageWriteFailed=true}
    if(!wroteLocal){
      window.__gpLocalStorageWriteFailed=true;
      try{
        var nameStore={};
        try{nameStore=JSON.parse(window.name||"{}")||{}}catch(nameParseError){nameStore={}};
        if(!nameStore||typeof nameStore!=="object"||Array.isArray(nameStore))nameStore={};
        nameStore.__gpActionStore=nameStore.__gpActionStore||{};
        nameStore.__gpActionStore[key]=cleanValue.slice();
        window.name=JSON.stringify(nameStore);
      }catch(nameError){}
      try{
        document.cookie="gp_store_"+encodeURIComponent(key)+"="+encodeURIComponent(next)+"; Max-Age=31536000; Path=/; SameSite=Lax";
      }catch(cookieError){}
    }
    if(window.__gpSuppressStorageBroadcast!==true){
      if(window.requestAnimationFrame)window.requestAnimationFrame(function(){try{gpSyncHeaderActionBadges()}catch(error){}});
      else setTimeout(function(){try{gpSyncHeaderActionBadges()}catch(error){}},0);
    }
    window.__gpActionDataVersion=(window.__gpActionDataVersion||0)+1;
  }catch(error){}
}

function gpWriteJsonArrayLegacy(key,value){
  try{
    var cleanValue=Array.isArray(value)?value:[];
    try{
      var nameStore={};
      try{nameStore=JSON.parse(window.name||"{}")||{}}catch(nameParseError){nameStore={}};
      if(!nameStore||typeof nameStore!=="object"||Array.isArray(nameStore))nameStore={};
      nameStore.__gpActionStore=nameStore.__gpActionStore||{};
      nameStore.__gpActionStore[key]=cleanValue.slice();
      window.name=JSON.stringify(nameStore);
    }catch(nameError){}
    var next=JSON.stringify(cleanValue);
    try{window.localStorage.setItem(key,next)}catch(storageError){}
    try{
      document.cookie="gp_store_"+encodeURIComponent(key)+"="+encodeURIComponent(next)+"; Max-Age=31536000; Path=/; SameSite=Lax";
    }catch(cookieError){}
    if(window.__gpSuppressStorageBroadcast!==true){
      setTimeout(function(){
        try{gpSyncHeaderActionBadges()}catch(error){}
      },0);
      try{window.dispatchEvent(new Event("storage"))}catch(error){
        try{
          var event=document.createEvent("Event");
          event.initEvent("storage",false,false);
          window.dispatchEvent(event);
        }catch(innerError){}
      }
      try{window.dispatchEvent(new StorageEvent("storage",{key:key,newValue:next,storageArea:window.localStorage,url:location.href}))}catch(error){}
    }
    window.__gpActionDataVersion=(window.__gpActionDataVersion||0)+1;
  }catch(error){}
}

function gpUniqueArray(value){
  return Array.from(new Set((Array.isArray(value)?value:[]).filter(Boolean)));
}

var gpCp1251EncodeMap94=null;

function gpGetCp1251EncodeMap94(){
  if(gpCp1251EncodeMap94)return gpCp1251EncodeMap94;
  gpCp1251EncodeMap94={};
  try{
    var decoder=new TextDecoder("windows-1251");
    for(var index=0;index<256;index+=1){
      gpCp1251EncodeMap94[decoder.decode(new Uint8Array([index]))]=index;
    }
  }catch(error){}
  return gpCp1251EncodeMap94;
}

function gpCp1251Bytes94(text){
  var map=gpGetCp1251EncodeMap94();
  var bytes=[];
  for(var index=0;index<text.length;index+=1){
    var ch=text.charAt(index);
    if(!Object.prototype.hasOwnProperty.call(map,ch))return null;
    bytes.push(map[ch]);
  }
  return bytes;
}

function gpMojibakePairCount94(bytes){
  var pairs=0;
  for(var index=0;index<bytes.length-1;index+=1){
    if((bytes[index]===0xD0||bytes[index]===0xD1||bytes[index]===0xD2)&&bytes[index+1]>=0x80&&bytes[index+1]<=0xBF){
      pairs+=1;
      index+=1;
    }
  }
  return pairs;
}

function gpDecodeMojibakeText95(value){
  var text=String(value==null?"":value);
  if(!text||text.length>4000)return text;
  if(!/[РСВГв][\u0080-\uFFFF]/.test(text))return text;
  var bytes=gpCp1251Bytes94(text);
  if(!bytes)return text;
  var pairCount=gpMojibakePairCount94(bytes);
  var hasUtf8Symbol=/в[‚„Њ]|В[«»]|Г[—Ёё¤§]/.test(text);
  if(pairCount<2&&!hasUtf8Symbol)return text;
  try{
    var decoded=new TextDecoder("utf-8",{fatal:true}).decode(new Uint8Array(bytes));
    if(!decoded||decoded===text||decoded.indexOf("\uFFFD")>-1)return text;
    return decoded;
  }catch(error){return text}
}

function gpNormalizeMojibakeText95(root){
  if(!root||!document.body)return;
  try{
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode:function(node){
        var parent=node.parentElement;
        if(!parent)return NodeFilter.FILTER_REJECT;
        if(/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName||""))return NodeFilter.FILTER_REJECT;
        return /[РСВГв][\u0080-\uFFFF]/.test(node.nodeValue||"")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
      }
    });
    var textNode;
    var limit=0;
    while((textNode=walker.nextNode())&&limit<600){
      limit+=1;
      var decoded=gpDecodeMojibakeText95(textNode.nodeValue);
      if(decoded!==textNode.nodeValue)textNode.nodeValue=decoded;
    }
  }catch(error){}
  try{
    [].slice.call(root.querySelectorAll("[aria-label],[title],[placeholder],[alt]")).forEach(function(node){
      ["aria-label","title","placeholder","alt"].forEach(function(attr){
        if(!node.hasAttribute||!node.hasAttribute(attr))return;
        var current=node.getAttribute(attr);
        var decoded=gpDecodeMojibakeText95(current);
        if(decoded!==current)node.setAttribute(attr,decoded);
      });
    });
  }catch(error){}
}

function gpInstallMojibakeObserver95(){
  if(window.__gpMojibakeObserver95)return;
  window.__gpMojibakeObserver95=true;
  try{
    new MutationObserver(function(mutations){
      var shouldRun=[].slice.call(mutations||[]).some(function(mutation){
        var target=mutation.target;
        if(target&&/^(HEAD|SCRIPT|STYLE|LINK|META)$/i.test(target.tagName||""))return false;
        if(mutation.type==="characterData")return /[РСВГв][\u0080-\uFFFF]/.test(mutation.target&&mutation.target.nodeValue||"");
        return [].slice.call(mutation.addedNodes||[]).some(function(node){
          if(!node)return false;
          if(node.nodeType===3)return /[РСВГв][\u0080-\uFFFF]/.test(node.nodeValue||"");
          if(node.nodeType!==1)return false;
          if(/^(SCRIPT|STYLE|LINK|META)$/i.test(node.tagName||""))return false;
          return /[РСВГв][\u0080-\uFFFF]/.test(node.textContent||"");
        });
      });
      if(!shouldRun)return;
      clearTimeout(window.__gpMojibakeTimer95);
      window.__gpMojibakeTimer95=setTimeout(function(){gpNormalizeMojibakeText95(document.body)},80);
    }).observe(document.documentElement,{childList:true,characterData:true,subtree:true});
  }catch(error){}
}

function gpMainArticleList(){
  return [].slice.call(document.querySelectorAll("main article"));
}

function gpArticleSignature(){
  var articles=gpMainArticleList();
  if(!articles.length)return "0";
  var linkOf=function(card){
    var link=card&&card.querySelector&&card.querySelector('a[href*="/product/"],a[href^="/catalog/"]');
    return link?String(link.getAttribute("href")||""):"";
  };
  var sample=articles.slice(0,3).concat(articles.slice(Math.max(3,articles.length-3)));
  return [articles.length].concat(sample.map(linkOf)).join("|");
}

function gpVisibleArticleCountCached(){
  var key=location.pathname+"|"+location.search+"|"+gpArticleSignature();
  if(gpPerfCache.visibleArticleKey===key)return gpPerfCache.visibleArticleCount;
  var count=gpMainArticleList().filter(function(card){
    return !(card.getAttribute("aria-hidden")==="true"||card.style.display==="none"||(card.closest&&card.closest("[hidden],[aria-hidden='true']")));
  }).length;
  gpPerfCache.visibleArticleKey=key;
  gpPerfCache.visibleArticleCount=count;
  return count;
}

function gpReadLocalJsonArray(key){
  try{
    var value=window.localStorage&&window.localStorage.getItem(key);
    var parsed=value?JSON.parse(value):[];
    return Array.isArray(parsed)?parsed:[];
  }catch(error){return[]}
}

function gpStableJson(value){
  try{return JSON.stringify(Array.isArray(value)?value:[])}catch(error){return"[]"}
}

function gpWritePrimaryJsonArrayIfChanged(key,value){
  var cleanValue=Array.isArray(value)?value:[];
  if(gpStableJson(gpReadLocalJsonArray(key))===gpStableJson(cleanValue))return false;
  gpWriteJsonArray(key,cleanValue);
  return true;
}

function gpRehydrateNativeShopStorage(){
  if(!window.localStorage)return false;
  var changed=false;
  var favorites=gpUnionIds("lumera_favorites","gp_favorite_ids_v1");
  var compare=gpUnionIds("lumera_compare","gp_compare_ids_v1");
  var cart=gpReadAllCartItems();
  changed=gpWritePrimaryJsonArrayIfChanged("lumera_favorites",favorites)||changed;
  changed=gpWritePrimaryJsonArrayIfChanged("lumera_compare",compare)||changed;
  changed=gpWritePrimaryJsonArrayIfChanged("lumera_cart",cart)||changed;
  if(changed){
    setTimeout(function(){
      try{window.dispatchEvent(new Event("storage"))}catch(error){}
    },0);
  }
  return changed;
}

function gpCanonicalProductId(value){
  var raw=String(value||"").replace(/\s+/g," ").trim();
  if(!raw)return "";
  if(raw.indexOf("/product/")===0)raw=raw.split("/").filter(Boolean).pop()||"";
  raw=raw.replace(/^product-/,"");
  return raw?"product-"+raw:"";
}

function gpNormalizeStoredId(item){
  if(typeof item==="string")return gpCanonicalProductId(item);
  if(item&&typeof item==="object"){
    if(item.productId)return gpCanonicalProductId(item.productId);
    if(item.id)return gpCanonicalProductId(item.id);
  }
  return "";
}

function gpStorageIdArray(key){
  return gpUniqueArray(gpReadJsonArray(key).map(gpNormalizeStoredId));
}

function gpReadMirrorArray(key){
  return gpStorageIdArray(key);
}

function gpWriteMirrorArray(key,value){
  gpWriteJsonArray(key,gpUniqueArray(value));
}

function gpSetMirrorItem(key,id,active){
  return gpWriteStringSet(key,id,active);
}

function gpWriteStringSet(key,id,active){
  if(!id)return false;
  var current=gpStorageIdArray(key).filter(function(item){return item!==id});
  if(active)current.push(id);
  gpWriteJsonArray(key,gpUniqueArray(current));
  return active;
}

function gpUnionIds(primaryKey,mirrorKey){
  return gpUniqueArray(gpStorageIdArray(primaryKey).concat(gpReadMirrorArray(mirrorKey)));
}

function gpProductSlugFromCard(card){
  var link=card&&card.querySelector('a[href^="/product/"],a[href*="/product/"]');
  if(!link&&location.pathname.indexOf("/product/")===0)return location.pathname.split("/").filter(Boolean).pop()||"";
  if(!link)return"";
  try{
    var parts=new URL(link.getAttribute("href"),location.origin).pathname.split("/").filter(Boolean);
    return parts[0]==="product"?(parts[1]||""):"";
  }catch(error){return""}
}

function gpProductIdFromSlug(slug){
  return gpCanonicalProductId(slug);
}

function gpFavoriteHeart(active){
  return '<svg viewBox="0 0 24 24" fill="'+(active?"currentColor":"none")+'" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m12 21-1.6-1.45C5.1 14.73 2 11.86 2 8.35 2 5.5 4.24 3.25 7.08 3.25c1.62 0 3.17.76 4.17 2.01 1-1.25 2.55-2.01 4.17-2.01C18.76 3.25 21 5.5 21 8.35c0 3.51-3.1 6.38-8.4 11.2Z"></path></svg>';
}

function gpFavoritesCardHeartButtonHtml(id){
  return '<button type="button" class="gp-favorites-storage-heart is-active" data-gp-compare-favorite="'+gpEscapeHtml(id)+'" data-gp-favorite-overlay="true" aria-label="\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e">'+gpFavoriteHeart(true)+'</button>';
}

function gpProductDetailId(){
  if(location.pathname.indexOf("/product/")!==0)return"";
  return gpProductIdFromSlug(location.pathname.split("/").filter(Boolean).pop()||"");
}

function gpProductDetailFavoriteHost(){
  if(location.pathname.indexOf("/product/")!==0)return null;
  var main=document.querySelector("main");
  if(!main)return null;
  var images=[].slice.call(main.querySelectorAll("img"));
  var image=images.find(function(img){
    var rect=img.getBoundingClientRect();
    var style=getComputedStyle(img);
    return rect.width>20&&rect.height>20&&style.display!=="none"&&style.visibility!=="hidden"&&!img.closest("header,nav,footer,[data-gp-storage-action-page]")&&!img.closest("article");
  })||images.find(function(img){
    return !img.closest("header,nav,footer,[data-gp-storage-action-page]")&&!img.closest("article");
  })||images.find(function(img){
    return !img.closest("header,nav,footer,[data-gp-storage-action-page]");
  });
  if(!image)return null;
  var node=image.parentElement;
  while(node&&node!==main){
    if(node.querySelector&&node.querySelector("img")){
      var className=String(node.className||"");
      if(/rounded|overflow-hidden|border|shadow|bg-|p-\d|p-/.test(className))return node;
    }
    node=node.parentElement;
  }
  return image.parentElement||null;
}

function syncProductDetailFavoriteOverlay(){
  if(location.pathname.indexOf("/product/")!==0)return false;
  var id=gpProductDetailId();
  [].slice.call(document.querySelectorAll("main article [data-gp-favorite-overlay='true'],main article [data-favorite-overlay='true']")).forEach(function(button){
    if(button.dataset.gpProductDetailFavorite!=="true")button.remove();
  });
  if(!id)return true;
  var host=gpProductDetailFavoriteHost();
  if(!host)return true;
  [].slice.call(document.querySelectorAll("main [data-gp-product-detail-favorite='true']")).forEach(function(button){
    if(!host.contains(button))button.remove();
  });
  var favorites=gpActionIds("favorites");
  var active=favorites.indexOf(id)>-1;
  host.style.setProperty("position","relative","important");
  var button=host.querySelector('[data-gp-product-detail-favorite="true"]');
  if(!button){
    button=document.createElement("button");
    button.type="button";
    button.dataset.gpProductDetailFavorite="true";
    button.dataset.gpFavoriteOverlay="true";
    button.className="absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white/92 shadow-[0_12px_24px_rgba(36,29,25,0.08)] transition hover:-translate-y-0.5";
    host.appendChild(button);
  }
  button.dataset.gpBoundFavoriteProduct=id;
  button.style.setProperty("position","absolute","important");
  button.style.setProperty("top","1rem","important");
  button.style.setProperty("right","1rem","important");
  button.style.setProperty("bottom","auto","important");
  button.style.setProperty("left","auto","important");
  button.style.setProperty("z-index","80","important");
  button.style.setProperty("width","2.75rem","important");
  button.style.setProperty("height","2.75rem","important");
  button.style.setProperty("pointer-events","auto","important");
  button.classList.toggle("border-rose-200",active);
  button.classList.toggle("text-rose-600",active);
  button.classList.toggle("border-white/75",!active);
  button.classList.toggle("text-[var(--brand-text)]",!active);
  button.setAttribute("aria-label",active?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435");
  button.title=button.getAttribute("aria-label");
  button.innerHTML=gpFavoriteHeart(active);
  if(button.dataset.gpProductDetailFavoriteListener!=="true"){
    button.addEventListener("click",function(event){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      var currentId=button.dataset.gpBoundFavoriteProduct||gpProductDetailId();
      if(!currentId)return;
      var desired=gpActionIds("favorites").indexOf(currentId)<0;
      gpSaveProductSnapshot(currentId,document.querySelector("main"));
      gpEnforceToggleState("lumera_favorites","gp_favorite_ids_v1",currentId,desired,function(){
        syncProductDetailFavoriteOverlay();
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
      });
    },false);
    button.dataset.gpProductDetailFavoriteListener="true";
  }
  return true;
}

function syncFavoriteOverlays(){
  if(location.pathname.indexOf("/catalog")!==0&&location.pathname.indexOf("/product")!==0)return;
  if(location.pathname.indexOf("/product/")===0){
    syncProductDetailFavoriteOverlay();
    return;
  }
  var favorites=gpActionIds("favorites");
  var syncKey=location.pathname+"|"+location.search+"|"+favorites.join(",")+"|"+gpArticleSignature();
  if(gpPerfCache.favoriteOverlayKey===syncKey)return;
  gpPerfCache.favoriteOverlayKey=syncKey;
  var isFavoritesPage=location.search.indexOf("favorites=1")>-1;
  var visibleCount=0;
  [].slice.call(document.querySelectorAll("main article")).forEach(function(card){
    var slug=gpProductSlugFromCard(card);
    var id=gpProductIdFromSlug(slug);
    if(!id)return;
    var active=favorites.indexOf(id)>-1;
    var forcedFavoriteActive=false;
    if(isFavoritesPage){
      card.style.display=active?"":"none";
      if(active)visibleCount++;
    }else if(card.style.display==="none"){
      card.style.display="";
    }
    card.style.position=card.style.position||"relative";
    var nativeButton=card.querySelector('[data-favorite-overlay="true"]');
    var button=nativeButton||card.querySelector('[data-gp-favorite-overlay="true"]');
    if(nativeButton){
      [].slice.call(card.querySelectorAll('[data-gp-favorite-overlay="true"]')).forEach(function(extra){
        if(extra!==nativeButton&&!extra.hasAttribute("data-favorite-overlay"))extra.remove();
      });
    }
    if(!button){
      button=document.createElement("button");
      button.type="button";
      button.dataset.gpFavoriteOverlay="true";
      button.className="absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/92 shadow-[0_12px_24px_rgba(36,29,25,0.08)] transition hover:-translate-y-0.5";
      card.prepend(button);
    }
    if(button.parentElement===card&&button!==card.lastElementChild)card.appendChild(button);
    button.dataset.gpFavoriteOverlay="true";
    button.dataset.gpBoundFavoriteProduct=id;
    var favoriteHandler=function(event){
      if(button.dataset.gpSuppressNextFavorite==="true"){
        delete button.dataset.gpSuppressNextFavorite;
        return;
      }
      if(event&&event.__gpCapturedCardAction)return;
      var currentCard=button.closest("article");
      var currentId=button.dataset.gpBoundFavoriteProduct||gpProductIdFromSlug(gpProductSlugFromCard(currentCard));
      if(!currentCard||!currentId)return;
      var nativeFavorite=button.hasAttribute("data-favorite-overlay");
      var favoriteDesired=button.dataset.gpForcedFavoriteActive==="true"?false:gpActionIds("favorites").indexOf(currentId)<0;
      if(!nativeFavorite){
        event.preventDefault();
        event.stopPropagation();
        if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      }
      if(favoriteDesired)delete currentCard.dataset.gpFavoriteRemovedByUser90;
      else currentCard.dataset.gpFavoriteRemovedByUser90="true";
      gpSaveProductSnapshot(currentId,currentCard);
      gpEnforceToggleState("lumera_favorites","gp_favorite_ids_v1",currentId,favoriteDesired,function(){
        syncFavoriteOverlays();
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
        gpNormalizeFavoritesCardHearts93();
      });
    };
    if(button.dataset.gpFavoriteNativeListener!=="true"){
      button.addEventListener("click",favoriteHandler,false);
      button.dataset.gpFavoriteNativeListener="true";
    }
    card.style.setProperty("position","relative","important");
    button.style.setProperty("position","absolute","important");
    button.style.setProperty("top","1rem","important");
    button.style.setProperty("right","1rem","important");
    button.style.setProperty("bottom","auto","important");
    button.style.setProperty("left","auto","important");
    button.style.setProperty("z-index","80","important");
    button.style.setProperty("width","2.75rem","important");
    button.style.setProperty("height","2.75rem","important");
    button.style.setProperty("pointer-events","auto","important");
    button.dataset.gpForcedFavoriteActive=forcedFavoriteActive?"true":"false";
    button.classList.toggle("border-rose-200",active);
    button.classList.toggle("text-rose-600",active);
    button.classList.toggle("border-white/75",!active);
    button.classList.toggle("text-[var(--brand-text)]",!active);
    button.setAttribute("aria-label",active?"РЈР±СЂР°С‚СЊ РёР· РёР·Р±СЂР°РЅРЅРѕРіРѕ":"Р”РѕР±Р°РІРёС‚СЊ РІ РёР·Р±СЂР°РЅРЅРѕРµ");
    button.title=active?"РЈР±СЂР°С‚СЊ РёР· РёР·Р±СЂР°РЅРЅРѕРіРѕ":"Р”РѕР±Р°РІРёС‚СЊ РІ РёР·Р±СЂР°РЅРЅРѕРµ";
    button.setAttribute("aria-label",active?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435");
    button.title=active?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435";
    button.innerHTML=gpFavoriteHeart(active);
  });
  var empty=document.querySelector("[data-gp-favorites-empty]");
  if(isFavoritesPage){
    if(!visibleCount&&!empty){
      var host=document.querySelector("main section.grid")||document.querySelector("main");
      if(host){
        empty=document.createElement("div");
        empty.dataset.gpFavoritesEmpty="true";
        empty.className="rounded-[2rem] border border-dashed border-[var(--brand-primary)]/18 bg-white/74 p-8 text-center text-[var(--brand-muted)]";
        empty.textContent="Р’ РёР·Р±СЂР°РЅРЅРѕРј РїРѕРєР° РЅРµС‚ РґРѕСЃС‚СѓРїРЅС‹С… С‚РѕРІР°СЂРѕРІ.";
        host.appendChild(empty);
      }
    }else if(empty){
      empty.style.display=visibleCount?"none":"";
    }
  }
}

function gpFavoriteCardId90(card){
  if(!card)return"";
  var raw=(card.dataset&&(card.dataset.gpFavoritesProduct||card.dataset.gpCompareProduct||card.dataset.gpBoundFavoriteProduct))||"";
  if(!raw){
    var action=card.querySelector&&card.querySelector("[data-gp-compare-favorite],[data-gp-favorite-overlay='true'],[data-favorite-overlay='true']");
    raw=(action&&action.dataset&&(action.dataset.gpCompareFavorite||action.dataset.gpBoundFavoriteProduct))||"";
  }
  if(!raw)raw=gpProductIdFromSlug(gpProductSlugFromCard(card));
  return gpCanonicalProductId(raw);
}

function gpFavoriteCardVisible90(card){
  if(!card)return false;
  var style=getComputedStyle(card);
  if(style.display==="none"||style.visibility==="hidden")return false;
  var rect=card.getBoundingClientRect();
  return rect.width>0&&rect.height>0;
}

function gpEnsureFavoriteCardHeart90(card,id,forcedActive){
  if(!card||!id)return null;
  var button=card.querySelector(".gp-favorites-storage-heart,[data-gp-favorite-overlay='true'],[data-favorite-overlay='true']");
  if(!button){
    button=document.createElement("button");
    button.type="button";
    if(card.firstElementChild)card.insertBefore(button,card.firstElementChild);
    else card.appendChild(button);
  }
  card.style.setProperty("position","relative","important");
  button.type="button";
  button.classList.add("gp-favorites-storage-heart","is-active");
  button.dataset.gpFavoriteOverlay="true";
  button.dataset.gpCompareFavorite=id;
  button.dataset.gpBoundFavoriteProduct=id;
  button.dataset.gpForcedFavoriteActive=forcedActive?"true":"false";
  button.setAttribute("aria-label","\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e");
  button.title="\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e";
  button.innerHTML=gpFavoriteHeart(true);
  return button;
}

function gpNormalizeFavoritesCardHearts93(){
  if(location.search.indexOf("favorites=1")<0)return;
  ensureFavoritesCard93Style();
  var favorites=gpActionIds("favorites");
  [].slice.call(document.querySelectorAll("main .gp-favorites-storage-card,main article")).forEach(function(card){
    var id=gpFavoriteCardId90(card);
    if(!id)return;
    var localActive=favorites.indexOf(id)>-1;
    var storageCard=card.classList.contains("gp-favorites-storage-card")||!!card.closest("[data-gp-storage-action-page]");
    if(!localActive){
      card.style.setProperty("display","none","important");
      return;
    }
    card.style.removeProperty("display");
    gpEnsureFavoriteCardHeart90(card,id,false);
    if(!storageCard)gpSaveProductSnapshot(id,card);
  });
}

function gpToggleStorageItem(key,id,forceAdd){
  if(!id)return false;
  var current=gpStorageIdArray(key);
  var index=current.indexOf(id);
  if(index>-1&&forceAdd!==true)current.splice(index,1);
  else if(index<0)current.push(id);
  gpWriteJsonArray(key,current);
  return current.indexOf(id)>-1;
}

function gpReadCartItems(){
  return gpReadJsonArray("lumera_cart").map(function(item){
    if(typeof item==="string")return{productId:gpCanonicalProductId(item),quantity:1};
    if(item&&item.productId)return{productId:gpCanonicalProductId(item.productId),quantity:Math.max(1,Number(item.quantity)||1)};
    return null;
  }).filter(function(item){return !!(item&&item.productId)});
}

function gpReadMirrorCartItems(){
  return gpReadJsonArray("gp_cart_items_v1").map(function(item){
    if(typeof item==="string")return{productId:gpCanonicalProductId(item),quantity:1};
    if(item&&item.productId)return{productId:gpCanonicalProductId(item.productId),quantity:Math.max(1,Number(item.quantity)||1)};
    return null;
  }).filter(function(item){return !!(item&&item.productId)});
}

function gpReadAllCartItems(){
  var map={};
  gpReadCartItems().concat(gpReadMirrorCartItems()).forEach(function(item){
    if(!item.productId)return;
    map[item.productId]=Math.max(map[item.productId]||0,Math.max(1,Number(item.quantity)||1));
  });
  return Object.keys(map).map(function(id){return{productId:id,quantity:map[id]}});
}

function gpActionIds(kind){
  if(kind==="favorites")return gpUnionIds("lumera_favorites","gp_favorite_ids_v1");
  if(kind==="compare")return gpUnionIds("lumera_compare","gp_compare_ids_v1");
  if(kind==="cart")return gpReadAllCartItems().map(function(item){return item.productId});
  return [];
}

function gpActionCounts(){
  var favorites=gpActionIds("favorites");
  var compare=gpActionIds("compare");
  var cart=gpReadAllCartItems();
  return{
    favorites:favorites.length,
    compare:compare.length,
    cart:cart.reduce(function(total,item){return total+(Math.max(1,Number(item.quantity)||1));},0)
  };
}

function gpReadProductSnapshots(){
  var memory={};
  try{
    memory=window.__gpProductSnapshotMemory&&typeof window.__gpProductSnapshotMemory==="object"?window.__gpProductSnapshotMemory:{};
  }catch(error){}
  try{
    var value=window.localStorage&&window.localStorage.getItem("gp_product_snapshots_v1");
    var parsed=value?JSON.parse(value):{};
    return gpNormalizeProductSnapshots(Object.assign({},parsed&&typeof parsed==="object"&&!Array.isArray(parsed)?parsed:{},memory));
  }catch(error){return gpNormalizeProductSnapshots(Object.assign({},memory))}
}

function gpWriteProductSnapshots(value){
  try{window.__gpProductSnapshotMemory=value||{}}catch(memoryError){}
  try{window.localStorage.setItem("gp_product_snapshots_v1",JSON.stringify(value||{}))}catch(error){}
}

function gpNormalizeProductSnapshots(map){
  var changed=false;
  Object.keys(map||{}).forEach(function(id){
    var snapshot=map[id];
    if(!snapshot||typeof snapshot!=="object")return;
    var normalized=gpNormalizePriceText(snapshot.price);
    if(normalized&&normalized!==snapshot.price){
      snapshot.price=normalized;
      changed=true;
    }
  });
  if(changed)gpWriteProductSnapshots(map);
  return map||{};
}

function gpTitleFromId(id){
  return String(id||"").replace(/^product-/,"").split("-").filter(Boolean).slice(0,9).map(function(part){
    return part.charAt(0).toUpperCase()+part.slice(1);
  }).join(" ");
}

function gpNormalizeMoneySpaces(value){
  return String(value||"").replace(/[\u00a0\u202f]+/g," ").replace(/[ \t]+/g," ").trim();
}

function gpStrictMoneyMatches(value){
  var text=String(value||"");
  var matches=[];
  text.replace(/(^|[^\d])((?:\d{1,3}(?:[ \t\u00a0\u202f]\d{3})+|\d+|0)[ \t\u00a0\u202f]*(?:₽|руб\.?|р\.?|в‚Ѕ|СЂСѓР±\.?|РІвЂљР…))/gi,function(_,prefix,price){
    matches.push(gpNormalizeMoneySpaces(price).replace(/РІвЂљР…|в‚Ѕ/gi,"₽").replace(/(?:руб\.?|р\.?)$/i,"₽"));
    return _;
  });
  return matches;
}

function gpNormalizePriceText(value){
  var raw=gpDecodeMojibakeText95(String(value||""));
  if(!/(₽|руб\.?|р\.?|в‚Ѕ|СЂСѓР±\.?|РІвЂљР…)/i.test(raw))return "";
  var lines=raw.split(/\r?\n+/).map(function(line){return gpNormalizeMoneySpaces(line)}).filter(Boolean);
  var candidates=[];
  lines.forEach(function(line){
    gpStrictMoneyMatches(line).forEach(function(match){candidates.push(match)});
  });
  if(!candidates.length)gpStrictMoneyMatches(raw).forEach(function(match){candidates.push(match)});
  if(!candidates.length)return "";
  var price=candidates[candidates.length-1];
  var glued=price.match(/^(\d{3,6})(\d[ \t\u00a0\u202f]\d{3}[ \t\u00a0\u202f]*(?:₽|руб\.?|р\.?|в‚Ѕ|СЂСѓР±\.?|РІвЂљР…))$/i);
  if(glued)price=glued[2];
  var spaced=price.match(/^\d{3,6}[ \t\u00a0\u202f]+(\d{1,3}(?:[ \t\u00a0\u202f]\d{3})+[ \t\u00a0\u202f]*(?:₽|руб\.?|р\.?|в‚Ѕ|СЂСѓР±\.?|РІвЂљР…))$/i);
  if(spaced)price=spaced[1];
  var digits=price.replace(/[^\d]/g,"");
  if(digits.length>6){
    var tail4=digits.slice(-4);
    if(Number(tail4)>=100)price=tail4.slice(0,1)+" "+tail4.slice(1)+" ₽";
  }
  return gpNormalizeMoneySpaces(price).replace(/(?:руб\.?|р\.?|в‚Ѕ|РІвЂљР…)$/i,"₽");
}

function gpNormalizeVisiblePriceText(value){
  var raw=String(value||"");
  var normalized=gpNormalizePriceText(raw);
  if(!normalized)return raw;
  var digits=raw.replace(/[^\d]/g,"");
  var normalizedDigits=normalized.replace(/[^\d]/g,"");
  if(digits===normalizedDigits&&raw.indexOf("\n")<0)return raw;
  var prefix=(raw.match(/^[^\d]*/)||[""])[0];
  return prefix+normalized;
}

function gpProductSnapshotFromCard(card,id){
  if(!card||!id)return null;
  var link=card.querySelector('a[href^="/product/"],a[href*="/product/"]');
  var img=card.querySelector("img");
  var text=card.textContent||"";
  var lines=text.split(/\n+/).map(function(line){return line.replace(/\s+/g," ").trim()}).filter(Boolean);
  var priceText=gpNormalizePriceText(text);
  var title=(img&&img.alt)||((link&&link.textContent)||"").replace(/\s+/g," ").trim()||gpTitleFromId(id);
  var meta=lines.filter(function(line){
    if(!line||line===title)return false;
    if(priceText&&line.indexOf(priceText)>-1)return false;
    return !/(РёР·Р±СЂР°РЅ|СЃСЂР°РІРЅ|РєРѕСЂР·РёРЅ|РїРѕРґСЂРѕР±РЅРµРµ|РєСѓРїРёС‚СЊ|favorite|compare|cart)/i.test(line);
  }).slice(0,8);
  return{
    id:id,
    href:link?link.getAttribute("href"):"/catalog/all-products",
    title:title,
    image:(img&&(img.currentSrc||img.src||img.getAttribute("src")))||"",
    price:priceText,
    category:meta[0]||"",
    subtitle:meta[1]||"",
    meta:meta
  };
}

function gpMergeProductSnapshot95(previous,next){
  previous=previous&&typeof previous==="object"?previous:{};
  next=next&&typeof next==="object"?next:{};
  var merged=Object.assign({},previous,next);
  ["title","href","image","price","category","subtitle"].forEach(function(key){
    if((next[key]===undefined||next[key]===null||next[key]==="")&&previous[key])merged[key]=previous[key];
  });
  if((!Array.isArray(next.meta)||!next.meta.length)&&Array.isArray(previous.meta)&&previous.meta.length)merged.meta=previous.meta;
  if(merged.price){
    var normalized=gpNormalizePriceText(merged.price);
    if(normalized)merged.price=normalized;
  }
  return merged;
}

function gpSaveProductSnapshot(id,card){
  var snapshot=gpProductSnapshotFromCard(card,id);
  if(!snapshot)return;
  var map=gpReadProductSnapshots();
  map[id]=gpMergeProductSnapshot95(map[id],snapshot);
  gpWriteProductSnapshots(map);
}

function gpHarvestProductSnapshots95(ids){
  var allowed={};
  (Array.isArray(ids)?ids:[]).forEach(function(id){allowed[id]=true});
  var map=gpReadProductSnapshots();
  var changed=false;
  [].slice.call(document.querySelectorAll("main article")).forEach(function(card){
    if(card.closest&&card.closest("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    var slug=gpProductSlugFromCard(card);
    var id=gpProductIdFromSlug(slug);
    if(!id||Object.keys(allowed).length&& !allowed[id])return;
    var snapshot=gpProductSnapshotFromCard(card,id);
    if(!snapshot)return;
    var previous=map[id]||{};
    var merged=gpMergeProductSnapshot95(previous,snapshot);
    var prevKey=JSON.stringify(previous);
    var nextKey=JSON.stringify(merged);
    if(prevKey!==nextKey){
      map[id]=merged;
      changed=true;
    }
  });
  if(changed){
    gpWriteProductSnapshots(map);
    window.__gpActionDataVersion=(window.__gpActionDataVersion||0)+1;
  }
  return changed;
}

function gpProductWithNormalizedPrice95(product){
  product=product||{};
  if(product.price){
    var normalized=gpNormalizePriceText(product.price);
    if(normalized)product.price=normalized;
  }
  return product;
}

function gpFetchMissingProductPrices95(products){
  if(!window.fetch||!Array.isArray(products)||!products.length)return;
  var missing=products.filter(function(product){
    return product&&product.id&&!gpNormalizePriceText(product.price)&&product.href&&product.href.indexOf("/product/")>-1&&!window["__gpPriceFetch95_"+product.id];
  }).slice(0,8);
  if(!missing.length)return;
  missing.forEach(function(product){
    window["__gpPriceFetch95_"+product.id]=true;
    fetch(product.href,{cache:"force-cache"}).then(function(response){
      return response&&response.ok?response.text():"";
    }).then(function(html){
      if(!html)return;
      var text=html;
      try{
        var doc=new DOMParser().parseFromString(html,"text/html");
        text=(doc.querySelector("main")||doc.body||doc).textContent||html;
      }catch(error){}
      var price=gpNormalizePriceText(text);
      if(!price)return;
      var map=gpReadProductSnapshots();
      map[product.id]=gpMergeProductSnapshot95(map[product.id],Object.assign({},product,{price:price}));
      gpWriteProductSnapshots(map);
      window.__gpActionDataVersion=(window.__gpActionDataVersion||0)+1;
      setTimeout(function(){gpRenderStoredActionPage()},60);
    }).catch(function(){
      window["__gpPriceFetch95_"+product.id]=false;
    });
  });
}

function gpEscapeHtml(value){
  return String(value||"").replace(/[&<>"']/g,function(ch){
    return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch];
  });
}

function gpStoredProductCard(snapshot,kind){
  var href=snapshot.href||"/catalog/all-products";
  var title=snapshot.title||gpTitleFromId(snapshot.id);
  var image=snapshot.image||"/editorial/hero-beauty.jpg";
  var price=snapshot.price||"";
  return '<article class="gp-storage-action-card"><a href="'+gpEscapeHtml(href)+'"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy"></a><div class="gp-storage-action-card-body"><a href="'+gpEscapeHtml(href)+'" class="gp-storage-action-card-title">'+gpEscapeHtml(title)+'</a><div class="gp-storage-action-card-price">'+gpEscapeHtml(price)+'</div></div></article>';
}

function gpMoneyValue(value){
  var normalized=gpNormalizePriceText(value)||String(value||"");
  var digits=String(normalized||"").replace(/[^\d]/g,"");
  return digits?Number(digits):0;
}

function gpFormatMoney(value){
  if(!value)return "";
  try{return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0}).format(value)}catch(error){return String(value)+" в‚Ѕ"}
}

function gpActionProducts(kind,ids){
  var snapshots=gpReadProductSnapshots();
  var cartItems=gpReadAllCartItems();
  return ids.map(function(id){
    var cartItem=cartItems.find(function(item){return item.productId===id});
    return gpProductWithNormalizedPrice95(Object.assign({id:id,title:gpTitleFromId(id),href:"/catalog/all-products",image:"",price:"",meta:[]},snapshots[id]||{},{
      id:id,
      quantity:cartItem?Math.max(1,Number(cartItem.quantity)||1):1
    }));
  });
}

function gpCompareValue(product,type){
  var meta=Array.isArray(product.meta)?product.meta:[];
  if(type==="price")return product.price||"вЂ”";
  if(type==="category")return product.category||meta[0]||"вЂ”";
  if(type==="description")return product.subtitle||meta.slice(1,3).join(" В· ")||"вЂ”";
  if(type==="format")return meta.find(function(line){return /(\d+\s*(?:РјР»|ml|Рі|g|С€С‚|Р°РјРї|amp|%))/i.test(line)})||"вЂ”";
  if(type==="features")return meta.slice(2,5).join(" В· ")||"вЂ”";
  return "вЂ”";
}

function gpPluralWord(count,one,few,many){
  var value=Math.abs(Number(count)||0)%100;
  var last=value%10;
  if(value>10&&value<20)return many;
  if(last===1)return one;
  if(last>=2&&last<=4)return few;
  return many;
}

function gpProductCountLabel(count){
  var value=Math.max(0,Number(count)||0);
  return value+" "+gpPluralWord(value,"С‚РѕРІР°СЂ","С‚РѕРІР°СЂР°","С‚РѕРІР°СЂРѕРІ");
}

function gpComparePageHtml(products,withCards){
  var rows=[["Р¦РµРЅР°","price"],["РљР°С‚РµРіРѕСЂРёСЏ / СЃРµСЂРёСЏ","category"],["РћРїРёСЃР°РЅРёРµ","description"],["Р¤РѕСЂРјР°С‚","format"],["РџР°СЂР°РјРµС‚СЂС‹","features"]];
  var cards=products.map(function(product){
    var image=product.image||"/editorial/hero-beauty.jpg";
    var title=product.title||gpTitleFromId(product.id);
    var price=product.price||"";
    return '<article class="rounded-[2rem] border border-white/75 bg-white/84 p-5 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><a href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'" class="block"><span class="relative block min-h-[15rem] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#eadccf] via-[#f7f2ec] to-[#fffaf4] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy" class="absolute inset-0 h-full w-full object-contain p-3 md:p-5"></span><span class="mt-4 block font-[family:var(--font-heading)] text-3xl leading-none text-[var(--brand-text)]">'+gpEscapeHtml(title)+'</span></a><div class="mt-3 text-sm text-[var(--brand-muted)]">'+gpEscapeHtml(price)+'</div></article>';
  }).join("");
  var gridStyle='grid-template-columns:15rem repeat('+products.length+',18rem)';
  var widthStyle='width:'+(15+18*products.length+products.length)+'rem';
  var head='<div class="grid gap-4 rounded-[1.6rem] bg-[var(--brand-surface)] text-left text-sm text-[var(--brand-muted)]" style="'+gridStyle+'"><div class="sticky left-0 z-20 bg-[var(--brand-surface)] px-5 py-4 font-medium shadow-[12px_0_24px_-18px_rgba(36,29,25,0.26)]">РџР°СЂР°РјРµС‚СЂС‹</div>'+products.map(function(product){return '<div class="px-5 py-4 font-medium">'+gpEscapeHtml(product.title||gpTitleFromId(product.id))+'</div>';}).join("")+'</div>';
  var body=rows.map(function(row){
    return '<div class="grid gap-4 border-t border-[var(--brand-primary)]/10 text-left text-sm" style="'+gridStyle+'"><div class="sticky left-0 z-10 bg-white px-5 py-4 font-medium text-[var(--brand-text)] shadow-[12px_0_24px_-18px_rgba(36,29,25,0.22)]">'+gpEscapeHtml(row[0])+'</div>'+products.map(function(product){return '<div class="px-5 py-4 text-[var(--brand-muted)]">'+gpEscapeHtml(gpCompareValue(product,row[1]))+'</div>';}).join("")+'</div>';
  }).join("");
  return '<div class="gp-native-action-fallback gp-native-compare-fallback"><div class="hidden overflow-x-auto pb-2 md:block"><div class="space-y-6" style="'+widthStyle+'"><div class="grid gap-4" style="'+gridStyle+'"><aside class="rounded-[2rem] border border-white/75 bg-white/82 p-5 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-primary)]">РЎСЂР°РІРЅРµРЅРёРµ</div><h2 class="mt-3 font-[family:var(--font-heading)] text-3xl leading-none text-[var(--brand-text)]">'+products.length+' '+(products.length===1?'С‚РѕРІР°СЂ':'С‚РѕРІР°СЂР°')+'</h2></aside>'+cards+'</div><div class="rounded-[2rem] border border-white/75 bg-white/84 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="space-y-0">'+head+body+'</div></div></div></div><div class="space-y-4 md:hidden"><div class="rounded-[1.4rem] border border-white/75 bg-white/84 p-3.5 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-primary)]">РЎСЂР°РІРЅРµРЅРёРµ</div><h2 class="mt-3 font-[family:var(--font-heading)] text-[2rem] leading-none text-[var(--brand-text)]">'+products.length+' '+(products.length===1?'С‚РѕРІР°СЂ':'С‚РѕРІР°СЂР°')+'</h2></div><div class="overflow-x-auto rounded-[1.4rem] border border-white/75 bg-white/84 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="min-w-full w-max"><div class="grid bg-[var(--brand-surface)] text-left text-sm text-[var(--brand-muted)]" style="'+gridStyle+'"><div class="sticky left-0 z-20 flex min-h-[11.8rem] items-end bg-[var(--brand-surface)] px-2 pb-2.5 pt-6 text-[11px] font-medium text-[var(--brand-text)] shadow-[10px_0_24px_-18px_rgba(36,29,25,0.22)]">РџР°СЂР°РјРµС‚СЂС‹</div>'+products.map(function(product){var image=product.image||"/editorial/hero-beauty.jpg";var title=product.title||gpTitleFromId(product.id);return '<div class="grid h-full grid-rows-[auto_minmax(2.65rem,auto)_auto] px-2 py-3"><a href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'"><span class="relative block min-h-[4.8rem] overflow-hidden rounded-[1.25rem] bg-[var(--brand-surface)]"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy" class="absolute inset-0 h-full w-full object-contain p-2"></span><span class="mt-2 block min-h-[2.65rem] text-[11px] font-medium leading-4 text-[var(--brand-text)]">'+gpEscapeHtml(title)+'</span></a><div class="mt-1 text-[11px] font-semibold text-[var(--brand-text)]">'+gpEscapeHtml(product.price||"")+'</div></div>';}).join("")+'</div>'+body+'</div></div></div></div>';
}

function gpCartPageHtml(products){
  var total=products.reduce(function(sum,product){return sum+gpMoneyValue(product.price)*(Math.max(1,Number(product.quantity)||1));},0);
  var rows=products.map(function(product){
    var title=product.title||gpTitleFromId(product.id);
    var image=product.image||"/editorial/hero-beauty.jpg";
    var qty=Math.max(1,Number(product.quantity)||1);
    var price=product.price||"";
    var lineTotal=gpMoneyValue(price)*qty;
    return '<article class="grid gap-4 rounded-[2rem] border border-white/75 bg-white/84 p-5 shadow-[0_20px_60px_rgba(36,29,25,0.08)] md:grid-cols-[0.34fr_0.66fr]" data-gp-cart-product="'+gpEscapeHtml(product.id)+'"><a href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'" class="relative block min-h-[14rem] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#eadccf] via-[#f7f2ec] to-[#fffaf4] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy" class="absolute inset-0 h-full w-full object-contain p-3 md:p-5"></a><div class="flex flex-col justify-between gap-4"><div><a class="font-[family:var(--font-heading)] text-3xl leading-none text-[var(--brand-text)]" href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'">'+gpEscapeHtml(title)+'</a><p class="mt-3 text-sm leading-7 text-[var(--brand-muted)]">'+gpEscapeHtml(product.subtitle||product.category||"")+'</p></div><div class="flex flex-wrap items-center justify-between gap-3"><div class="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-surface)] px-3 py-2"><button type="button" data-gp-cart-minus="'+gpEscapeHtml(product.id)+'" class="rounded-full p-1" aria-label="РЈРјРµРЅСЊС€РёС‚СЊ">в€’</button><span class="min-w-8 text-center text-sm font-medium text-[var(--brand-text)]">'+qty+'</span><button type="button" data-gp-cart-plus="'+gpEscapeHtml(product.id)+'" class="rounded-full p-1" aria-label="РЈРІРµР»РёС‡РёС‚СЊ">+</button></div><div class="text-xl font-semibold text-[var(--brand-text)]">'+gpEscapeHtml(lineTotal?gpFormatMoney(lineTotal):price)+'</div><button type="button" class="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-600" data-gp-cart-remove="'+gpEscapeHtml(product.id)+'">РЈРґР°Р»РёС‚СЊ</button></div></div></article>';
  }).join("");
  return '<div class="gp-native-action-fallback gp-native-cart-fallback hidden gap-6 md:grid lg:grid-cols-[1.2fr_0.8fr]"><div class="space-y-4">'+rows+'</div><aside class="rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="text-xs uppercase tracking-[0.22em] text-[var(--brand-primary)]">РС‚РѕРіРѕ</div><div class="mt-3 font-[family:var(--font-heading)] text-5xl leading-none text-[var(--brand-text)]">'+(total?gpEscapeHtml(gpFormatMoney(total)):"РїРѕ Р·Р°РїСЂРѕСЃСѓ")+'</div><p class="mt-3 text-sm leading-7 text-[var(--brand-muted)]">Р”РѕСЃС‚Р°РІРєСѓ Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р° РјРµРЅРµРґР¶РµСЂ СЃРѕРіР»Р°СЃСѓРµС‚ РїРѕСЃР»Рµ РѕС„РѕСЂРјР»РµРЅРёСЏ.</p><button type="button" data-gp-open-contact class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(175,90,102,0.24)] transition hover:-translate-y-0.5">РџРµСЂРµР№С‚Рё Рє РѕС„РѕСЂРјР»РµРЅРёСЋ</button></aside></div><div class="gp-native-action-fallback gp-native-cart-fallback-mobile space-y-3 md:hidden">'+rows+'<div class="rounded-[1.55rem] border border-white/75 bg-white/84 p-4 shadow-[0_20px_60px_rgba(36,29,25,0.08)]"><div class="flex items-center justify-between text-sm font-semibold text-[var(--brand-text)]"><span>РС‚РѕРіРѕ</span><span>'+(total?gpEscapeHtml(gpFormatMoney(total)):"РїРѕ Р·Р°РїСЂРѕСЃСѓ")+'</span></div><button type="button" data-gp-open-contact class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(175,90,102,0.24)] transition hover:-translate-y-0.5">РћС„РѕСЂРјРёС‚СЊ</button></div></div>';
}

function gpCartActionIcon(){
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>';
}

function gpCompareActionButtons(product,compact){
  var id=product&&product.id?String(product.id):"";
  var favoriteActive=gpUnionIds("lumera_favorites","gp_favorite_ids_v1").indexOf(id)>-1;
  var cartActive=gpCartQuantity(id,gpReadAllCartItems())>0;
  var compareActive=gpUnionIds("lumera_compare","gp_compare_ids_v1").indexOf(id)>-1;
  var size=compact?" is-compact":"";
  return '<div class="gp-compare-card-actions-v2'+size+'">'+
    '<button type="button" class="gp-compare-action-btn-v2'+(favoriteActive?" is-active":"")+'" data-gp-compare-favorite="'+gpEscapeHtml(id)+'" aria-label="\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435">'+gpFavoriteHeart(favoriteActive)+'</button>'+
    '<button type="button" class="gp-compare-action-btn-v2'+(cartActive?" is-active":"")+'" data-gp-compare-cart="'+gpEscapeHtml(id)+'" aria-label="'+gpEscapeHtml(cartActive?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")+'">'+gpCartActionIcon()+'</button>'+
    '<button type="button" class="gp-compare-action-btn-v2'+(compareActive?" is-active":"")+'" data-gp-compare-toggle="'+gpEscapeHtml(id)+'" aria-label="\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435">'+gpDesktopCompareIcon()+'</button>'+
  '</div>';
}

function gpFavoritesPageHtml(products){
  var body=products.length?'<div class="gp-favorites-storage-grid">'+products.map(function(product){
    var id=product&&product.id?String(product.id):"";
    var href=product.href||"/catalog/all-products";
    var title=product.title||gpTitleFromId(id);
    var image=product.image||"/editorial/hero-beauty.jpg";
    var price=product.price||"\u2014";
    var compareActive=gpActionIds("compare").indexOf(id)>-1;
    var cartActive=gpCartQuantity(id,gpReadAllCartItems())>0;
    return '<article class="gp-favorites-storage-card" data-gp-favorites-product="'+gpEscapeHtml(id)+'">'+gpFavoritesCardHeartButtonHtml(id)+'<a class="gp-favorites-storage-image" href="'+gpEscapeHtml(href)+'"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy"></a><div class="gp-favorites-storage-body"><a class="gp-favorites-storage-title" href="'+gpEscapeHtml(href)+'">'+gpEscapeHtml(title)+'</a><div class="gp-favorites-storage-price"><span>\u0426\u0435\u043d\u0430</span><strong>'+gpEscapeHtml(price)+'</strong></div><div class="gp-favorites-storage-actions"><button type="button" class="gp-favorites-storage-action'+(compareActive?" is-active":"")+'" data-gp-compare-toggle="'+gpEscapeHtml(id)+'" aria-label="'+gpEscapeHtml(compareActive?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435")+'"><span class="gp-favorites-storage-action-bubble">'+gpDesktopCompareIcon()+'</span><small>\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c</small></button><button type="button" class="gp-favorites-storage-action'+(cartActive?" is-active":"")+'" data-gp-compare-cart="'+gpEscapeHtml(id)+'" aria-label="'+gpEscapeHtml(cartActive?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")+'"><span class="gp-favorites-storage-action-bubble">'+gpCartActionIcon()+'</span><small>\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443</small></button></div></div></article>';
  }).join("")+'</div>':'<div class="gp-favorites-storage-empty"><h2>\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432</h2><p>\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e \u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c.</p><a href="/catalog">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433</a></div>';
  return '<section class="gp-favorites-storage-shell"><header class="gp-favorites-storage-header"><h1>\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435</h1><p>\u0422\u043e\u0432\u0430\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435.</p></header>'+body+'</section>';
}

gpComparePageHtml=function(products,withCards){
  var rows=[["\u0426\u0435\u043d\u0430","price"],["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f / \u0441\u0435\u0440\u0438\u044f","category"],["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","description"],["\u0424\u043e\u0440\u043c\u0430\u0442","format"],["\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b","features"]];
  var cards=products.map(function(product){
    var image=product.image||"/editorial/hero-beauty.jpg";
    var title=product.title||gpTitleFromId(product.id);
    var price=product.price||"";
    return '<article class="rounded-[1.5rem] border border-white/75 bg-white/84 p-2.5 shadow-[0_15px_38px_rgba(36,29,25,0.08)]" style="display:flex!important;flex-direction:column!important;height:16rem!important;min-height:16rem!important;max-height:16rem!important;overflow:hidden!important" data-gp-compare-product="'+gpEscapeHtml(product.id)+'"><a href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'" class="block"><span class="relative block min-h-[7rem] overflow-hidden rounded-[1.15rem] border border-white/70 bg-gradient-to-br from-[#eadccf] via-[#f7f2ec] to-[#fffaf4] p-2.25 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy" class="absolute inset-0 h-full w-full object-contain p-[.45rem]"></span><span class="mt-2 block text-[.92rem] font-[family:var(--font-heading)] leading-[1.01] text-[var(--brand-text)]" style="display:-webkit-box;min-height:2.8rem;max-height:2.8rem;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow-wrap:anywhere">'+gpEscapeHtml(title)+'</span></a><div class="mt-1 border-t border-[var(--brand-primary)]/10 pt-1 text-[.88rem] font-semibold text-[var(--brand-text)]">'+gpEscapeHtml(price||"\u2014")+'</div>'+gpCompareActionButtons(product,false)+'</article>';
  }).join("");
  var desktopGridStyle='grid-template-columns:10.5rem repeat('+products.length+',12.35rem)';
  var desktopWidthStyle='width:'+(10.5+12.35*products.length+products.length*.75)+'rem';
  var desktopHead='<div class="grid gap-3 rounded-[1.35rem] bg-[var(--brand-surface)] text-left text-sm text-[var(--brand-muted)]" style="'+desktopGridStyle+'"><div class="sticky left-0 z-20 bg-[var(--brand-surface)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] shadow-[12px_0_24px_-18px_rgba(36,29,25,0.26)]" style="position:sticky!important;left:0!important;z-index:42!important;background:var(--brand-surface)!important">\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b</div>'+products.map(function(product){return '<div class="px-4 py-3 text-[.8rem] font-medium leading-[1.25] text-[var(--brand-text)]">'+gpEscapeHtml(product.title||gpTitleFromId(product.id))+'</div>';}).join("")+'</div>';
  var desktopBody=rows.map(function(row){
    return '<div class="grid gap-3 border-t border-[var(--brand-primary)]/10 text-left text-sm" style="'+desktopGridStyle+'"><div class="sticky left-0 z-10 bg-white px-4 py-3 font-medium text-[var(--brand-text)] shadow-[12px_0_24px_-18px_rgba(36,29,25,0.22)]" style="position:sticky!important;left:0!important;z-index:36!important;background:#fff!important">'+gpEscapeHtml(row[0])+'</div>'+products.map(function(product){return '<div class="px-4 py-3 text-[.82rem] leading-[1.35] text-[var(--brand-muted)]">'+gpEscapeHtml(gpCompareValue(product,row[1]))+'</div>';}).join("")+'</div>';
  }).join("");
  var mobileGridStyle='grid-template-columns:6.35rem repeat('+products.length+',8.15rem)';
  var mobileHead='<div class="gp-compare-mobile-grid-v2 gp-compare-mobile-head-v2" style="'+mobileGridStyle+'"><div class="gp-compare-mobile-param-v2">\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b</div>'+products.map(function(product){var image=product.image||"/editorial/hero-beauty.jpg";var title=product.title||gpTitleFromId(product.id);return '<div class="gp-compare-mobile-product-v2"><a href="'+gpEscapeHtml(product.href||"/catalog/all-products")+'"><span class="gp-compare-mobile-image-v2"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy"></span><span class="gp-compare-mobile-title-v2">'+gpEscapeHtml(title)+'</span></a><div class="gp-compare-mobile-price-v2">'+gpEscapeHtml(product.price||"")+'</div>'+gpCompareActionButtons(product,true)+'</div>';}).join("")+'</div>';
  var mobileBody=rows.map(function(row){
    return '<div class="gp-compare-mobile-grid-v2 gp-compare-mobile-row-v2" style="'+mobileGridStyle+'"><div class="gp-compare-mobile-param-v2">'+gpEscapeHtml(row[0])+'</div>'+products.map(function(product){return '<div class="gp-compare-mobile-value-v2">'+gpEscapeHtml(gpCompareValue(product,row[1]))+'</div>';}).join("")+'</div>';
  }).join("");
  return '<div class="gp-native-action-fallback gp-native-compare-fallback"><div class="hidden overflow-x-auto pb-2 md:block"><div class="space-y-2" style="'+desktopWidthStyle+'"><div class="grid gap-3" style="'+desktopGridStyle+'"><aside class="rounded-[1.45rem] border border-white/75 bg-white/82 p-3 shadow-[0_15px_38px_rgba(36,29,25,0.08)]" style="position:sticky!important;left:0!important;z-index:48!important;height:16rem!important;min-height:16rem!important;max-height:16rem!important;background:rgba(255,255,255,.96)!important">\u003cdiv class="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-primary)]">\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435</div><h2 class="mt-1 font-[family:var(--font-heading)] text-[1.74rem] leading-none text-[var(--brand-text)]">'+gpEscapeHtml(gpProductCountLabel(products.length))+'</h2></aside>'+cards+'</div><div class="rounded-[1.5rem] border border-white/75 bg-white/84 shadow-[0_15px_38px_rgba(36,29,25,0.08)]"><div class="space-y-0">'+desktopHead+desktopBody+'</div></div></div></div><div class="gp-compare-mobile-shell-v2 md:hidden"><div class="gp-compare-mobile-summary-v2"><div class="gp-compare-kicker-v2">\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435</div><h2>'+gpEscapeHtml(gpProductCountLabel(products.length))+'</h2></div><div class="gp-compare-mobile-scroll-v2"><div class="gp-compare-mobile-width-v2">'+mobileHead+mobileBody+'</div></div></div></div>';
};

function gpCartCheckoutOpen(){
  return location.pathname==="/cart"&&new URLSearchParams(location.search).get("checkout")==="1";
}

function gpSetRouteParam(name,value){
  var url=new URL(location.href);
  if(value===undefined||value===null||value==="")url.searchParams.delete(name);else url.searchParams.set(name,String(value));
  history.replaceState(history.state,"",url.pathname+(url.search||"")+url.hash);
}

function gpCartOrderFormHtml(mobile){
  return '<form class="gp-order-form'+(mobile?' mt-4':' mt-4')+'" data-gp-order-form><input name="name" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"><input name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__"><textarea name="message" placeholder="\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"></textarea><button type="submit">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443</button><button type="button" class="gp-action-secondary w-full" data-gp-close-checkout>\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f</button><p class="gp-order-status" data-gp-order-status></p></form>';
}

function gpCartInlineHandler(mode,id){
  var safeId=String(id||"").replace(/\\/g,"\\\\").replace(/'/g,"\\'");
  return "return window.__gpInlineStoredCartControl('"+String(mode||"remove")+"','"+safeId+"',event)";
}

window.__gpInlineStoredCartControl=function(mode,id,event){
  id=gpCanonicalProductId(id);
  if(!id)return false;
  if(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation)event.stopImmediatePropagation();
  }
  var qty=gpCartQuantity(id,gpReadAllCartItems());
  gpSetCartItemQuantity(id,mode==="remove"?0:qty+(mode==="plus"?1:-1));
  gpSyncHeaderActionBadges();
  gpRenderStoredActionPage();
  return false;
};

gpCartCheckoutOpen=function(){
  return false;
};

gpCartPageHtml=function(products){
  var total=products.reduce(function(sum,product){return sum+gpMoneyValue(product.price)*(Math.max(1,Number(product.quantity)||1));},0);
  var checkoutOpen=gpCartCheckoutOpen();
  var totalLabel=total?gpEscapeHtml(gpFormatMoney(total)):"\u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443";
  var desktopRows=products.map(function(product){
    var title=product.title||gpTitleFromId(product.id);
    var image=product.image||"/editorial/hero-beauty.jpg";
    var qty=Math.max(1,Number(product.quantity)||1);
    var price=product.price||"";
    var lineTotal=gpMoneyValue(price)*qty;
    var href=product.href||"/catalog/all-products";
    return '<article class="gp-cart-row" data-gp-cart-product="'+gpEscapeHtml(product.id)+'"><a href="'+gpEscapeHtml(href)+'"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy"></a><div><a class="gp-cart-row-title" href="'+gpEscapeHtml(href)+'">'+gpEscapeHtml(title)+'</a><div class="gp-cart-row-price">'+gpEscapeHtml(lineTotal?gpFormatMoney(lineTotal):price||"\u2014")+'</div><button type="button" class="gp-cart-remove" data-gp-cart-remove="'+gpEscapeHtml(product.id)+'" onclick="'+gpEscapeHtml(gpCartInlineHandler("remove",product.id))+'">\u0423\u0434\u0430\u043b\u0438\u0442\u044c</button></div><div class="gp-cart-qty"><button type="button" data-gp-cart-minus="'+gpEscapeHtml(product.id)+'" aria-label="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c" onclick="'+gpEscapeHtml(gpCartInlineHandler("minus",product.id))+'">\u2212</button><strong>'+qty+'</strong><button type="button" data-gp-cart-plus="'+gpEscapeHtml(product.id)+'" aria-label="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c" onclick="'+gpEscapeHtml(gpCartInlineHandler("plus",product.id))+'">+</button></div></article>';
  }).join("");
  var desktopPanel=checkoutOpen
    ? '<aside class="gp-cart-order-panel"><div class="gp-cart-total-row"><span>\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435</span><strong>'+totalLabel+'</strong></div><p class="gp-action-page-muted">\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b, \u0438 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0437\u0430\u043a\u0430\u0437.</p>'+gpCartOrderFormHtml(false)+'</aside>'
    : '<aside class="gp-cart-order-panel"><div class="gp-cart-total-row"><span>\u0418\u0442\u043e\u0433\u043e</span><strong>'+totalLabel+'</strong></div><p class="gp-action-page-muted">\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f.</p><button type="button" data-gp-open-checkout class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(175,90,102,0.24)] transition hover:-translate-y-0.5">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e</button></aside>';
  var mobileRows=products.map(function(product){
    var title=product.title||gpTitleFromId(product.id);
    var image=product.image||"/editorial/hero-beauty.jpg";
    var qty=Math.max(1,Number(product.quantity)||1);
    var price=product.price||"";
    var lineTotal=gpMoneyValue(price)*qty;
    var href=product.href||"/catalog/all-products";
    return '<article class="gp-cart-mobile-row-v2" data-gp-cart-product="'+gpEscapeHtml(product.id)+'"><a href="'+gpEscapeHtml(href)+'" class="gp-cart-mobile-image-v2"><img src="'+gpEscapeHtml(image)+'" alt="'+gpEscapeHtml(title)+'" loading="lazy"></a><div class="gp-cart-mobile-info-v2"><a class="gp-cart-mobile-title-v2" href="'+gpEscapeHtml(href)+'">'+gpEscapeHtml(title)+'</a><div class="gp-cart-mobile-price-v2">'+gpEscapeHtml(price||"\u2014")+'</div><div class="gp-cart-mobile-bottom-v2"><div class="gp-cart-qty-v2"><button type="button" data-gp-cart-minus="'+gpEscapeHtml(product.id)+'" aria-label="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c" onclick="'+gpEscapeHtml(gpCartInlineHandler("minus",product.id))+'">\u2212</button><strong>'+qty+'</strong><button type="button" data-gp-cart-plus="'+gpEscapeHtml(product.id)+'" aria-label="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c" onclick="'+gpEscapeHtml(gpCartInlineHandler("plus",product.id))+'">+</button></div><strong>'+gpEscapeHtml(lineTotal?gpFormatMoney(lineTotal):price)+'</strong><button type="button" class="gp-cart-remove-v2" data-gp-cart-remove="'+gpEscapeHtml(product.id)+'" onclick="'+gpEscapeHtml(gpCartInlineHandler("remove",product.id))+'">\u0423\u0434\u0430\u043b\u0438\u0442\u044c</button></div></div></article>';
  }).join("");
  var mobileCheckout=checkoutOpen?'<div class="gp-action-page-shell md:hidden"><div class="gp-action-page-head"><div><div class="gp-action-page-kicker">\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435</div><h2>\u0417\u0430\u043a\u0430\u0437</h2></div><div class="gp-action-page-muted">'+totalLabel+'</div></div>'+gpCartOrderFormHtml(true)+'</div>':'';
  return '<div class="gp-native-action-fallback gp-native-cart-fallback"><div class="gp-action-page-shell hidden md:block"><div class="gp-action-page-head"><div><div class="gp-action-page-kicker">\u041a\u043e\u0440\u0437\u0438\u043d\u0430</div><h2>'+gpEscapeHtml(gpProductCountLabel(products.length))+'</h2></div><p class="gp-action-page-muted">\u0422\u043e\u0432\u0430\u0440\u044b \u043f\u0435\u0440\u0435\u0434 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c.</p></div><div class="gp-cart-layout"><div class="gp-cart-items">'+desktopRows+'</div>'+desktopPanel+'</div></div><div class="gp-native-action-fallback gp-native-cart-fallback-mobile space-y-3 md:hidden">'+mobileRows+'<div class="gp-cart-mobile-total-v2"><div><span>\u0418\u0442\u043e\u0433\u043e</span><strong>'+totalLabel+'</strong></div><button type="button" data-gp-open-checkout class="gp-cart-checkout-v2">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e</button></div>'+mobileCheckout+'</div></div>';
};

function gpHideEmptyActionBlocks(main,kind){
  var patterns=kind==="cart"?[/РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°/i,/РџРµСЂРµР№РґРёС‚Рµ РІ РєР°С‚Р°Р»РѕРі/i,/Р С™Р С•РЎР‚Р В·Р С‘Р Р…Р В° Р С—РЎС“РЎРѓРЎвЂљР В°/i]:[/РЎРїРёСЃРѕРє СЃСЂР°РІРЅРµРЅРёСЏ РїСѓСЃС‚/i,/Р”РѕР±Р°РІСЊС‚Рµ С‚РѕРІР°СЂС‹ РёР· РєР°С‚Р°Р»РѕРіР°/i,/РЅРµС‚ С‚РѕРІР°СЂРѕРІ/i,/РїРѕРєР° РЅРµС‚/i,/Р Р…Р ВµРЎвЂљ РЎвЂљР С•Р Р†Р В°РЎР‚Р С•Р Р†/i];
  [].slice.call(main.querySelectorAll("section,div")).forEach(function(node){
    var text=(node.textContent||"").trim();
    if(!text||!patterns.some(function(pattern){return pattern.test(text)}))return;
    if(node.closest("[data-gp-storage-action-page]")||node.querySelector("[data-gp-storage-action-page],.gp-native-action-fallback"))return;
    if(node.querySelectorAll("article").length===0)node.classList.add("gp-storage-action-empty-hidden");
  });
}

function gpForceFallbackActionPageLayout(scope){
  var root=scope||document;
  [].slice.call(root.querySelectorAll(".gp-native-compare-fallback > .hidden > div")).forEach(function(stack){
    if(stack.children&&stack.children[1])stack.children[1].style.setProperty("margin-top","0","important");
  });
  [].slice.call(root.querySelectorAll(".gp-compare-card-v2")).forEach(function(card){
    card.style.setProperty("display","grid","important");
    card.style.setProperty("grid-template-rows","auto auto auto auto","important");
    card.style.setProperty("align-self","start","important");
    card.style.setProperty("align-content","start","important");
    card.style.setProperty("height","auto","important");
    card.style.setProperty("min-height","0","important");
    card.style.setProperty("gap","0","important");
    var link=card.querySelector(".gp-compare-card-link-v2");
    if(link)link.style.setProperty("display","block","important");
    var title=card.querySelector(".gp-compare-card-title-v2");
    if(title){
      title.style.setProperty("display","-webkit-box","important");
      title.style.setProperty("margin-top",".55rem","important");
      title.style.setProperty("min-height","3.05rem","important");
    }
    var price=card.querySelector(".gp-compare-card-price-v2");
    if(price){
      price.style.setProperty("display","block","important");
      price.style.setProperty("margin","0","important");
      price.style.setProperty("min-height","0","important");
      price.style.setProperty("height","auto","important");
      price.style.setProperty("padding-top",".45rem","important");
    }
    var actions=card.querySelector(".gp-compare-card-actions-v2");
    if(actions){
      actions.style.setProperty("display","flex","important");
      actions.style.setProperty("margin-top",".42rem","important");
      actions.style.setProperty("height","auto","important");
      actions.style.setProperty("min-height","0","important");
    }
  });
  [].slice.call(root.querySelectorAll(".gp-cart-desktop-row-v2")).forEach(function(row){
    row.style.setProperty("display","grid","important");
    row.style.setProperty("grid-template-columns","6.75rem minmax(0,1fr) auto","important");
    row.style.setProperty("align-items","center","important");
  });
  [].slice.call(root.querySelectorAll(".gp-cart-mobile-row-v2")).forEach(function(row){
    row.style.setProperty("display","grid","important");
    row.style.setProperty("grid-template-columns","5.3rem minmax(0,1fr)","important");
    row.style.setProperty("align-items","start","important");
  });
}

function gpEnsureCheckoutOld74Style(){
  if(document.getElementById("gp-checkout-old74-style"))return;
  var style=document.createElement("style");
  style.id="gp-checkout-old74-style";
  style.textContent=[
    "body.gp-checkout-old74-ready main>[data-gp-checkout-old74-hidden='true']{display:none!important}",
    ".gp-checkout-old74{margin:1rem 0 2rem}",
    ".gp-checkout-old74 .field,.gp-checkout-old74 input,.gp-checkout-old74 textarea{width:100%;border-radius:1.15rem;border:1px solid rgba(175,90,102,.16);background:rgba(255,255,255,.96);padding:.9rem 1rem;color:var(--brand-text);outline:none;box-shadow:inset 0 0 0 1px transparent;transition:border-color .18s ease,box-shadow .18s ease}",
    ".gp-checkout-old74 .field:focus,.gp-checkout-old74 input:focus,.gp-checkout-old74 textarea:focus{border-color:rgba(175,90,102,.38);box-shadow:0 0 0 3px rgba(175,90,102,.1)}",
    ".gp-checkout-old74 textarea{resize:vertical}",
    ".gp-checkout-old74-status{display:none;border-radius:1rem;padding:.8rem .95rem;font-size:.9rem;line-height:1.45}",
    ".gp-checkout-old74-status.is-visible{display:block}",
    ".gp-checkout-old74-status.is-error{background:#fff1f2;color:#be123c}",
    ".gp-checkout-old74-status.is-ok{background:#ecfdf5;color:#047857}",
    ".gp-checkout-old74 button[type='submit']{min-height:2.9rem}",
    "@media (max-width:1023px){.gp-checkout-old74{margin:.75rem 0 1.5rem}.gp-checkout-old74 h1{font-size:2.45rem!important}.gp-checkout-old74 form{padding:1rem!important;border-radius:1.45rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function gpCheckoutOld74JsonAttr(value){
  return gpEscapeHtml(JSON.stringify(value||[]));
}

function gpCheckoutOld74Line(product){
  var qty=Math.max(1,Number(product.quantity)||1);
  var lineTotal=gpMoneyValue(product.price)*qty;
  var title=product.title||gpTitleFromId(product.id);
  var total=lineTotal?gpFormatMoney(lineTotal):(product.price||"\u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443");
  return '<div class="flex items-start justify-between gap-4 border-b border-[var(--brand-primary)]/10 pb-4"><div><div class="font-medium text-[var(--brand-text)]">'+gpEscapeHtml(title)+'</div><div class="text-sm text-[var(--brand-muted)]">'+qty+' \u0448\u0442.</div></div><div class="text-sm font-medium text-[var(--brand-text)]">'+gpEscapeHtml(total)+'</div></div>';
}

function gpCheckoutOld74PageHtml(products){
  var cartJson=gpReadAllCartItems();
  if(!products.length){
    return '<div class="gp-checkout-old74 rounded-[2rem] border border-dashed border-[var(--brand-primary)]/35 bg-white/70 p-6 text-[var(--brand-muted)]">\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e.</div>';
  }
  var total=products.reduce(function(sum,product){
    return sum+gpMoneyValue(product.price)*Math.max(1,Number(product.quantity)||1);
  },0);
  var totalLabel=total?gpFormatMoney(total):"\u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443";
  var lines=products.map(gpCheckoutOld74Line).join("");
  return '<div class="gp-checkout-old74 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><form data-gp-checkout-old74-form class="space-y-4 rounded-[1.7rem] border border-white/70 bg-white/78 p-4 shadow-[0_18px_55px_rgba(38,29,22,0.08)] md:rounded-[2rem] md:p-6"><div><h1 class="font-[family:var(--font-heading)] text-5xl leading-none text-[var(--brand-text)]">\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430</h1><p class="mt-3 text-sm leading-7 text-[var(--brand-muted)]">\u041e\u0434\u0438\u043d \u0448\u0430\u0433 \u0434\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430. \u041f\u043e\u0441\u043b\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043e\u043d \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0432 \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435.</p></div><p class="gp-checkout-old74-status" data-gp-checkout-old74-status></p><input type="hidden" name="cartJson" data-gp-checkout-old74-cart-json value="'+gpCheckoutOld74JsonAttr(cartJson)+'"><div class="space-y-2"><input name="name" required class="field" placeholder="\u0418\u043c\u044f"><p class="text-sm text-rose-600" data-gp-field-error="name"></p></div><div class="space-y-2"><input name="phone" required inputmode="tel" class="field" placeholder="\u0422\u0435\u043b\u0435\u0444\u043e\u043d"><p class="text-sm text-rose-600" data-gp-field-error="phone"></p></div><div class="space-y-2"><input name="email" type="email" required class="field" placeholder="Email"><p class="text-sm text-rose-600" data-gp-field-error="email"></p></div><div class="space-y-2"><input name="address" required class="field" placeholder="\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"><p class="text-sm text-rose-600" data-gp-field-error="address"></p></div><textarea name="notes" rows="4" class="field min-h-[7rem]" placeholder="\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443, \u0434\u043e\u043c\u043e\u0444\u043e\u043d, \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f \u043f\u043e \u0437\u0432\u043e\u043d\u043a\u0443."></textarea><div class="rounded-[1.35rem] border border-[var(--brand-primary)]/12 bg-[var(--brand-surface)]/92 p-4 lg:hidden"><div class="flex items-center justify-between text-sm font-semibold text-[var(--brand-text)]"><span>\u0418\u0442\u043e\u0433\u043e</span><span>'+gpEscapeHtml(totalLabel)+'</span></div></div><button type="submit" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(175,90,102,0.24)] transition hover:-translate-y-0.5 disabled:opacity-60">\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437</button></form><aside class="hidden rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_18px_55px_rgba(38,29,22,0.08)] lg:block"><div class="text-xs uppercase tracking-[0.22em] text-[var(--brand-primary)]">\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430</div><div class="mt-4 space-y-4">'+lines+'</div><div class="mt-6 flex items-center justify-between text-base font-semibold text-[var(--brand-text)]"><span>\u0418\u0442\u043e\u0433\u043e</span><span>'+gpEscapeHtml(totalLabel)+'</span></div><p class="mt-3 text-sm leading-6 text-[var(--brand-primary)]">\u041f\u043e\u0441\u043b\u0435 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u0446\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u043d\u0438\u0436\u0435.</p></aside></div>';
}

function gpRenderCheckoutOld74(){
  var main=document.querySelector("main");
  if(location.pathname!=="/checkout"){
    [].slice.call(document.querySelectorAll("[data-gp-checkout-old74]")).forEach(function(node){node.remove()});
    [].slice.call(document.querySelectorAll("[data-gp-checkout-old74-hidden='true']")).forEach(function(node){
      node.style.removeProperty("display");
      node.removeAttribute("data-gp-checkout-old74-hidden");
    });
    document.body.classList.remove("gp-checkout-old74-ready");
    return;
  }
  if(!main)return;
  gpEnsureCheckoutOld74Style();
  gpRehydrateNativeShopStorage();
  var ids=gpActionIds("cart");
  var products=gpActionProducts("cart",ids);
  var stateKey=gpStableJson(products.map(function(product){
    return [product.id,product.quantity,product.title||"",product.price||"",product.href||""];
  }));
  var existing=main.querySelector("[data-gp-checkout-old74]");
  if(!existing){
    existing=document.createElement("section");
    existing.dataset.gpCheckoutOld74="true";
    main.insertBefore(existing,main.firstElementChild);
  }
  if(existing.dataset.gpCheckoutOld74State!==stateKey){
    existing.innerHTML=gpCheckoutOld74PageHtml(products);
    existing.dataset.gpCheckoutOld74State=stateKey;
  }
  [].slice.call(main.children).forEach(function(node){
    if(node===existing)return;
    node.dataset.gpCheckoutOld74Hidden="true";
    node.style.setProperty("display","none","important");
  });
  existing.style.setProperty("display","block","important");
  document.body.classList.add("gp-checkout-old74-ready");
}

function gpRenderStoredActionPage(){
  var kind=location.pathname==="/cart"?"cart":location.pathname==="/compare"?"compare":location.search.indexOf("favorites=1")>-1?"favorites":"";
  if(!kind){
    [].slice.call(document.querySelectorAll('[data-gp-storage-hidden="favorites"]')).forEach(function(node){
      node.style.removeProperty("display");
      node.removeAttribute("data-gp-storage-hidden");
    });
    [].slice.call(document.querySelectorAll("[data-gp-storage-action-page]")).forEach(function(node){node.remove()});
    document.body.classList.remove("gp-compare-storage-ready");
    document.body.classList.remove("gp-favorites-storage-ready");
    return;
  }
  var main=document.querySelector("main");
  if(!main)return;
  gpRehydrateNativeShopStorage();
  var ids=gpActionIds(kind);
  ids=gpUniqueArray(ids);
  if(ids.length)gpHarvestProductSnapshots95(ids);
  var existing=main.querySelector("[data-gp-storage-action-page]");
  var fastCartKey=kind==="cart"?gpReadAllCartItems().map(function(item){return item.productId+":"+item.quantity}).join(","):"";
  var fastKey=[kind,location.pathname,location.search,innerWidth>=1024?"desktop":"mobile",ids.join(","),fastCartKey,window.__gpActionDataVersion||0].join("|");
  if(existing&&existing.dataset.gpStorageFastKey===fastKey){
    document.body.classList.toggle("gp-compare-storage-ready",kind==="compare");
    document.body.classList.toggle("gp-favorites-storage-ready",kind==="favorites");
    if(kind==="cart")gpBindStoredCartControls(existing);
    return;
  }
  if(kind!=="favorites"&&!ids.length){
    if(existing)existing.remove();
    if(kind==="compare")document.body.classList.remove("gp-compare-storage-ready");
    document.body.classList.remove("gp-favorites-storage-ready");
    return;
  }
  var nativeLinks=[].slice.call(main.querySelectorAll('a[href*="/product/"]')).filter(function(link){
    return !(link.closest&&link.closest("[data-gp-storage-action-page]"));
  });
  var hasNativeProducts=nativeLinks.length&&nativeLinks.some(function(link){
    var slug=(link.getAttribute("href")||"").split("/product/")[1]||"";
    return ids.indexOf("product-"+slug)>-1;
  });
  var text=[].slice.call(main.children||[]).filter(function(node){
    return !(node.matches&&node.matches("[data-gp-storage-action-page]"));
  }).map(function(node){return node.textContent||""}).join(" ");
  var hasCompareParams=kind==="compare"&&(main.querySelector("table")||/РўРёРї РєРѕР¶Рё|РўРµРєСЃС‚СѓСЂР°|РРЅРіСЂРµРґРё|Р—Р°РґР°С‡|РџР°СЂР°РјРµС‚СЂ|РћР±СЉ[РµС‘]Рј/i.test(text));
  var hasCheckout=kind==="cart"&&(/РћС„РѕСЂРјРёС‚СЊ|Р·Р°РєР°Р·|РРјСЏ|РўРµР»РµС„РѕРЅ|Р”РѕСЃС‚Р°РІРєР°/i.test(text)&&main.querySelector("form,textarea,input"));
  if(kind!=="favorites"&&hasNativeProducts&&((kind==="compare"&&hasCompareParams)||(kind==="cart"&&hasCheckout))){
    if(existing)existing.remove();
    if(kind==="compare")document.body.classList.remove("gp-compare-storage-ready");
    document.body.classList.remove("gp-favorites-storage-ready");
    return;
  }
  var products=gpActionProducts(kind,ids);
  if(kind==="favorites")gpFetchMissingProductPrices95(products);
  var favoritesState=gpActionIds("favorites");
  var compareState=gpActionIds("compare");
  var cartState=gpReadAllCartItems();
  var checkoutOpen=kind==="cart"&&gpCartCheckoutOpen();
  var stateKey=kind+"|"+gpStableJson(products.map(function(product){
    return [
      product.id,
      Math.max(1,Number(product.quantity)||1),
      product.title||"",
      product.price||"",
      product.image||"",
      product.href||"",
      favoritesState.indexOf(product.id)>-1,
      compareState.indexOf(product.id)>-1,
      gpCartQuantity(product.id,cartState),
      checkoutOpen
    ];
  }));
  if(!existing){
    existing=document.createElement("section");
    existing.dataset.gpStorageActionPage="true";
    main.appendChild(existing);
  }
  existing.dataset.gpStorageKind=kind;
  if(existing.dataset.gpStorageStateKey!==stateKey){
    existing.innerHTML=kind==="compare"?gpComparePageHtml(products,!hasNativeProducts):kind==="cart"?gpCartPageHtml(products):gpFavoritesPageHtml(products);
    existing.dataset.gpStorageStateKey=stateKey;
  }
  existing.dataset.gpStorageFastKey=fastKey;
  if(kind==="cart")gpBindStoredCartControls(existing);
  if(kind==="compare"){
    var compareDesktopStack=existing.querySelector(".gp-native-compare-fallback > .hidden > div");
    if(compareDesktopStack&&compareDesktopStack.children&&compareDesktopStack.children[1]){
      compareDesktopStack.style.setProperty("display","grid","important");
      compareDesktopStack.style.setProperty("row-gap","0","important");
      compareDesktopStack.style.setProperty("gap","0","important");
      if(compareDesktopStack.children[0])compareDesktopStack.children[0].style.setProperty("margin-bottom","0","important");
      compareDesktopStack.children[1].style.setProperty("margin-top","0","important");
    }
  }
  if(kind==="favorites"){
    [].slice.call(main.children).forEach(function(node){
      if(node===existing)return;
      node.dataset.gpStorageHidden="favorites";
      node.style.setProperty("display","none","important");
    });
    existing.style.setProperty("display","block","important");
    var favoritesShell=existing.querySelector(".gp-favorites-storage-shell");
    var favoritesHeader=existing.querySelector(".gp-favorites-storage-header");
    if(favoritesShell){
      favoritesShell.style.setProperty("display","grid","important");
      favoritesShell.style.setProperty("gap",innerWidth<1024?".85rem":"1rem","important");
    }
    if(favoritesHeader){
      favoritesHeader.style.setProperty("position","relative","important");
      favoritesHeader.style.setProperty("top","auto","important");
      favoritesHeader.style.setProperty("left","auto","important");
      favoritesHeader.style.setProperty("right","auto","important");
      favoritesHeader.style.setProperty("inset","auto","important");
      favoritesHeader.style.setProperty("z-index","1","important");
    }
    gpHideFavoritesCatalogChrome93();
  }
  document.body.classList.toggle("gp-compare-storage-ready",kind==="compare");
  document.body.classList.toggle("gp-favorites-storage-ready",kind==="favorites");
  gpForceFallbackActionPageLayout(existing);
  gpHideEmptyActionBlocks(main,kind);
}

function gpSetCartItemQuantity(id,quantity){
  id=gpCanonicalProductId(id);
  if(!id)return;
  var qty=Math.max(0,Number(quantity)||0);
  var update=function(items){
    var next=items.slice();
    var index=next.findIndex(function(item){return item.productId===id});
    if(index>-1){
      if(qty>0)next[index]={productId:id,quantity:qty};
      else next.splice(index,1);
    }else if(qty>0){
      next.push({productId:id,quantity:qty});
    }
    return next;
  };
  window.__gpSuppressStorageBroadcast=true;
  try{
    gpWriteJsonArray("lumera_cart",update(gpReadCartItems()));
    gpWriteJsonArray("gp_cart_items_v1",update(gpReadMirrorCartItems()));
  }finally{
    window.__gpSuppressStorageBroadcast=false;
  }
}

function gpCartButtonLabel(active){
  return active?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443";
}

function gpCartToastLabel(active){
  return active?"\u0422\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u0422\u043e\u0432\u0430\u0440 \u0443\u0431\u0440\u0430\u043d \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b";
}

function gpToggleCartEverywhere(id,forceActive){
  if(!id)return false;
  var active=typeof forceActive==="boolean"?forceActive:gpCartQuantity(id,gpReadAllCartItems())<1;
  gpSetCartItemQuantity(id,active?1:0);
  return active;
}

function gpOrderSummaryText(form){
  var ids=gpUniqueArray(gpReadAllCartItems().map(function(item){return item.productId}));
  var products=gpActionProducts("cart",ids);
  var lines=products.map(function(product){
    return "- "+(product.title||gpTitleFromId(product.id))+" x "+(Math.max(1,Number(product.quantity)||1))+(product.price?" ("+product.price+")":"");
  });
  var name=form&&form.elements&&form.elements.name?form.elements.name.value.trim():"";
  var phone=form&&form.elements&&form.elements.phone?form.elements.phone.value.trim():"";
  var message=form&&form.elements&&form.elements.message?form.elements.message.value.trim():"";
  return ["Р—Р°РєР°Р· СЃ СЃР°Р№С‚Р° Р“Р°СЂРјРѕРЅРёСЏРџР»СЋСЃ",name?"РРјСЏ: "+name:"",phone?"РўРµР»РµС„РѕРЅ: "+phone:"","РўРѕРІР°СЂС‹:",lines.join("\n"),message?"РљРѕРјРјРµРЅС‚Р°СЂРёР№: "+message:""].filter(Boolean).join("\n");
}

function gpShowActionToast(message){
  var nextMessage=window.__gpNextActionToastMessage;
  if(typeof nextMessage==="string"){
    message=nextMessage;
    delete window.__gpNextActionToastMessage;
  }
  var toast=document.querySelector(".gp-action-toast");
  if(!toast){
    toast=document.createElement("div");
    toast.className="gp-action-toast";
    document.body.appendChild(toast);
  }
  toast.textContent=message;
  toast.classList.add("is-visible");
  clearTimeout(window.__gpActionToastTimer);
  window.__gpActionToastTimer=setTimeout(function(){toast.classList.remove("is-visible")},1600);
}

function gpHandleStoredCartControl(event,control){
  var target=control||((event&&event.target&&event.target.closest)?event.target.closest("[data-gp-cart-plus],[data-gp-cart-minus],[data-gp-cart-remove]"):null);
  if(!target)return false;
  var id=target.dataset.gpCartPlus||target.dataset.gpCartMinus||target.dataset.gpCartRemove;
  var isPlus=target.hasAttribute("data-gp-cart-plus");
  var isMinus=target.hasAttribute("data-gp-cart-minus");
  var isRemove=target.hasAttribute("data-gp-cart-remove");
  if(!id||(!isPlus&&!isMinus&&!isRemove))return false;
  var now=Date.now();
  var lastHandled=Number(target.dataset.gpCartHandledAt||0);
  if(lastHandled&&now-lastHandled<260)return false;
  target.dataset.gpCartHandledAt=String(now);
  if(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation)event.stopImmediatePropagation();
  }
  var qty=gpCartQuantity(id,gpReadAllCartItems());
  gpSetCartItemQuantity(id,isRemove?0:qty+(isPlus?1:-1));
  gpSyncHeaderActionBadges();
  gpRenderStoredActionPage();
  return true;
}

function gpBindStoredCartControls(root){
  if(!root)return;
  [].slice.call(root.querySelectorAll("[data-gp-cart-plus],[data-gp-cart-minus],[data-gp-cart-remove]")).forEach(function(button){
    if(button.dataset.gpCartControlBound==="true")return;
    button.dataset.gpCartControlBound="true";
    var handler=function(event){
      gpHandleStoredCartControl(event,button);
    };
    button.addEventListener("click",handler,true);
    if(button.hasAttribute("data-gp-cart-remove")){
      button.addEventListener("pointerdown",handler,true);
      button.addEventListener("mousedown",handler,true);
    }
  });
}

function gpCheckoutOld74SetStatus(form,message,ok){
  var status=form&&form.querySelector("[data-gp-checkout-old74-status]");
  if(!status)return;
  status.textContent=message||"";
  status.classList.toggle("is-visible",!!message);
  status.classList.toggle("is-ok",!!ok);
  status.classList.toggle("is-error",!!message&&!ok);
}

function gpCheckoutOld74SetFieldErrors(form,errors){
  [].slice.call((form||document).querySelectorAll("[data-gp-field-error]")).forEach(function(node){
    var key=node.dataset.gpFieldError;
    node.textContent=errors&&errors[key]?String(errors[key]):"";
  });
}

function gpSubmitCheckoutOld74(form){
  if(!form||form.dataset.gpCheckoutSubmitting==="true")return;
  form.dataset.gpCheckoutSubmitting="true";
  gpCheckoutOld74SetStatus(form,"",false);
  gpCheckoutOld74SetFieldErrors(form,null);
  var hidden=form.querySelector("[data-gp-checkout-old74-cart-json]");
  if(hidden)hidden.value=JSON.stringify(gpReadAllCartItems());
  var button=form.querySelector("button[type='submit']");
  var original=button?button.textContent:"";
  if(button){
    button.disabled=true;
    button.textContent="\u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u043c...";
  }
  fetch("/api/checkout",{method:"POST",body:new FormData(form),cache:"no-store"}).then(function(response){
    return response.json().catch(function(){return{ok:false,message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."}});
  }).then(function(result){
    if(result&&result.fieldErrors)gpCheckoutOld74SetFieldErrors(form,result.fieldErrors);
    if(result&&result.ok&&result.orderNumber){
      gpCheckoutOld74SetStatus(form,result.message||"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d.",true);
      gpWriteJsonArray("lumera_cart",[]);
      gpWriteJsonArray("gp_cart_items_v1",[]);
      gpSyncHeaderActionBadges();
      location.assign("/account?order="+encodeURIComponent(result.orderNumber));
      return;
    }
    gpCheckoutOld74SetStatus(form,(result&&result.message)||"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u043b\u044f \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",false);
  }).catch(function(){
    gpCheckoutOld74SetStatus(form,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",false);
  }).finally(function(){
    form.dataset.gpCheckoutSubmitting="false";
    if(button){
      button.disabled=false;
      button.textContent=original||"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437";
    }
  });
}

function installStoredActionPageHandlers(){
  if(document.documentElement.dataset.gpStoredActionHandlers==="1")return;
  document.documentElement.dataset.gpStoredActionHandlers="1";
  document.addEventListener("click",function(event){
    var plus=event.target.closest&&event.target.closest("[data-gp-cart-plus]");
    var minus=event.target.closest&&event.target.closest("[data-gp-cart-minus]");
    var remove=event.target.closest&&event.target.closest("[data-gp-cart-remove]");
    var contact=event.target.closest&&event.target.closest("[data-gp-open-contact]");
    var openCheckout=event.target.closest&&event.target.closest("[data-gp-open-checkout]");
    var closeCheckout=event.target.closest&&event.target.closest("[data-gp-close-checkout]");
    var compareFavorite=event.target.closest&&event.target.closest("[data-gp-compare-favorite]");
    var compareCart=event.target.closest&&event.target.closest("[data-gp-compare-cart]");
    var compareToggle=event.target.closest&&event.target.closest("[data-gp-compare-toggle]");
    if(compareFavorite||compareCart||compareToggle){
      event.__gpCapturedCardAction=true;
      event.preventDefault();
      event.stopPropagation();
      var actionId=(compareFavorite&&compareFavorite.dataset.gpCompareFavorite)||(compareCart&&compareCart.dataset.gpCompareCart)||(compareToggle&&compareToggle.dataset.gpCompareToggle);
      if(compareFavorite){
        var favoriteCard=compareFavorite.closest&&compareFavorite.closest("article");
        var favoriteForced=compareFavorite.dataset.gpForcedFavoriteActive==="true";
        var favoriteActive=favoriteForced?false:gpUnionIds("lumera_favorites","gp_favorite_ids_v1").indexOf(actionId)<0;
        if(favoriteCard){
          if(favoriteActive)delete favoriteCard.dataset.gpFavoriteRemovedByUser90;
          else favoriteCard.dataset.gpFavoriteRemovedByUser90="true";
          gpSaveProductSnapshot(actionId,favoriteCard);
        }
        gpEnforceToggleState("lumera_favorites","gp_favorite_ids_v1",actionId,favoriteActive,function(){
          gpSyncHeaderActionBadges();
          gpRenderStoredActionPage();
          syncFavoriteOverlays();
          gpNormalizeFavoritesCardHearts93();
        });
        gpShowActionToast(favoriteActive?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"\u0423\u0431\u0440\u0430\u043d\u043e \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e");
      }else if(compareCart){
        var cartActive=gpToggleCartEverywhere(actionId);
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
        gpShowActionToast(gpCartToastLabel(cartActive));
      }else if(compareToggle){
        var compareActive=gpUnionIds("lumera_compare","gp_compare_ids_v1").indexOf(actionId)<0;
        gpEnforceToggleState("lumera_compare","gp_compare_ids_v1",actionId,compareActive,function(){
          gpSyncHeaderActionBadges();
          gpRenderStoredActionPage();
        });
        gpShowActionToast(compareActive?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435":"\u0423\u0431\u0440\u0430\u043d\u043e \u0438\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f");
      }
      return;
    }
    if(plus||minus||remove){
      if(gpHandleStoredCartControl(event,plus||minus||remove))return;
    }
    if(contact){
      event.preventDefault();
      gpOpenContactWidget(gpOrderSummaryText(document.querySelector("[data-gp-order-form]")));
      return;
    }
    if(openCheckout){
      event.preventDefault();
      location.assign("/checkout");
      return;
    }
    if(closeCheckout){
      event.preventDefault();
      gpSetRouteParam("checkout","");
      gpRenderStoredActionPage();
      return;
    }
  },true);
  document.addEventListener("submit",function(event){
    var checkoutForm=event.target&&event.target.closest&&event.target.closest("[data-gp-checkout-old74-form]");
    if(checkoutForm){
      event.preventDefault();
      gpSubmitCheckoutOld74(checkoutForm);
      return;
    }
    var form=event.target&&event.target.closest&&event.target.closest("[data-gp-order-form]");
    if(!form)return;
    event.preventDefault();
    var status=form.querySelector("[data-gp-order-status]");
    if(status){
      status.textContent="Р—Р°СЏРІРєР° РїРѕРґРіРѕС‚РѕРІР»РµРЅР°. РћС‚РїСЂР°РІСЊС‚Рµ РµРµ РІ С‡Р°С‚ РёР»Рё РґРѕР¶РґРёС‚РµСЃСЊ Р·РІРѕРЅРєР° РјРµРЅРµРґР¶РµСЂР°.";
      status.classList.add("is-visible");
    }
    gpOpenContactWidget(gpOrderSummaryText(form));
  },true);
}

function gpBadgeLabel(count){
  return count>99?"99+":String(count);
}

function gpDesktopCompareIcon(){
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale h-4 w-4" aria-hidden="true"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>';
}

function gpFindDesktopHeaderLink(href){
  return [].slice.call(document.querySelectorAll('header a[href="'+href+'"]')).find(function(link){
    return String(link.className||"").indexOf("xl:h-11")>-1||String(link.className||"").indexOf("h-10 w-10")>-1;
  })||null;
}

function gpFindNativeDesktopHeaderLink(href){
  return [].slice.call(document.querySelectorAll('header a[href="'+href+'"]')).find(function(link){
    return link.dataset.gpDesktopCompareLink!=="true"&&(String(link.className||"").indexOf("xl:h-11")>-1||String(link.className||"").indexOf("h-10 w-10")>-1);
  })||null;
}

function gpEnsureDesktopCompareLink(count){
  var existing=document.querySelector('[data-gp-desktop-compare-link="true"]')||gpFindDesktopHeaderLink("/compare");
  if(existing){
    if(existing.dataset.gpDesktopCompareLink==="true")existing.style.display=count?"":"none";
    return existing;
  }
  if(!count)return null;
  var cart=gpFindDesktopHeaderLink("/cart");
  if(!cart||!cart.parentElement)return null;
  var link=document.createElement("a");
  link.href="/compare";
  link.title="\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435";
  link.setAttribute("aria-label","\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435");
  link.dataset.gpDesktopCompareLink="true";
  link.className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition xl:h-11 xl:w-11 border-white/75 bg-white/88 text-[var(--brand-text)] shadow-[0_12px_28px_rgba(36,29,25,0.08)] hover:-translate-y-0.5";
  link.innerHTML=gpDesktopCompareIcon()+'<span class="pointer-events-none absolute left-1/2 top-[calc(100%+0.7rem)] hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--brand-text)] px-3 py-1 text-[11px] font-medium text-white opacity-0 transition group-hover:opacity-100 lg:block">РЎСЂР°РІРЅРµРЅРёРµ</span>';
  cart.parentElement.insertBefore(link,cart);
  return link;
}

function gpRemoveManualHeaderArtifacts(){
  if(!gpFindNativeDesktopHeaderLink("/compare"))return;
  [].slice.call(document.querySelectorAll('header [data-gp-desktop-compare-link="true"]')).forEach(function(link){
    if(link&&link.parentElement)link.parentElement.removeChild(link);
  });
}

function gpSetHeaderBadge(link,count){
  if(!link)return;
  var isMobileHeader=!!(link.closest&&link.closest('[data-mobile-shell="header"]'));
  var badge=link.querySelector('[data-gp-action-badge="true"]');
  if(count<=0){
    if(badge)badge.remove();
    if(link.dataset.gpDesktopCompareLink==="true")link.style.display="none";
    return;
  }
  if(link.dataset.gpDesktopCompareLink==="true")link.style.display="";
  if(!badge){
    badge=document.createElement("span");
    badge.dataset.gpActionBadge="true";
    badge.className="absolute -right-1 -top-1 z-10 inline-flex min-h-4 min-w-4 items-center justify-center rounded-full bg-[var(--brand-primary)] px-1 text-[10px] font-semibold leading-none text-white shadow-[0_6px_14px_rgba(175,90,102,0.25)]";
    link.appendChild(badge);
  }
  badge.classList.toggle("gp-mobile-header-action-badge",isMobileHeader);
  if(isMobileHeader){
    badge.style.setProperty("top",".42rem","important");
    badge.style.setProperty("right",link.getAttribute("href")==="/compare"?".55rem":".42rem","important");
    badge.style.setProperty("transform","none","important");
    badge.style.setProperty("min-width","1rem","important");
    badge.style.setProperty("min-height","1rem","important");
    badge.style.setProperty("height","1rem","important");
    badge.style.setProperty("padding","0 .25rem","important");
    badge.style.setProperty("font-size",".62rem","important");
    badge.style.setProperty("line-height","1","important");
    badge.style.setProperty("z-index","35","important");
  }else{
    badge.style.setProperty("top","0","important");
    badge.style.setProperty("right","0","important");
    badge.style.setProperty("transform","translate(26%,-26%)","important");
    badge.style.setProperty("z-index","25","important");
  }
  badge.textContent=gpBadgeLabel(count);
}

function gpEnsureHeaderCompareIcon(link){
  if(!link||link.dataset.gpCompareIconFixed==="1")return;
  var href=link.getAttribute("href")||"";
  if(href.indexOf("/compare")!==0)return;
  var svg=link.querySelector("svg");
  if(!svg)return;
  var holder=document.createElement("span");
  holder.innerHTML=gpDesktopCompareIcon();
  svg.replaceWith(holder.firstElementChild);
  link.dataset.gpCompareIconFixed="1";
}

function gpSyncHeaderActionBadges(){
  gpRehydrateNativeShopStorage();
  gpRemoveManualHeaderArtifacts();
  var counts=gpActionCounts();
  var headerSig=document.querySelectorAll("header a,header button,[data-mobile-shell='header'] a,[data-mobile-shell='header'] button").length;
  var badgeKey=[counts.favorites,counts.compare,counts.cart,headerSig,location.pathname].join("|");
  if(gpPerfCache.headerBadgeKey===badgeKey)return;
  gpPerfCache.headerBadgeKey=badgeKey;
  var compareLink=gpFindNativeDesktopHeaderLink("/compare")||gpEnsureDesktopCompareLink(counts.compare);
  [].slice.call(document.querySelectorAll('header a[href="/catalog/all-products?favorites=1"]')).forEach(function(link){gpSetHeaderBadge(link,counts.favorites)});
  if(compareLink)gpSetHeaderBadge(compareLink,counts.compare);
  [].slice.call(document.querySelectorAll('[data-mobile-shell="header"] a[href="/compare"]')).forEach(function(link){gpSetHeaderBadge(link,counts.compare)});
  [].slice.call(document.querySelectorAll('header a[href="/cart"]')).forEach(function(link){gpSetHeaderBadge(link,counts.cart)});
}

function gpToggleCartItem(id){
  if(!id)return false;
  var current=gpReadCartItems();
  var index=current.findIndex(function(item){return item.productId===id});
  if(index>-1)current.splice(index,1);
  else current.push({productId:id,quantity:1});
  gpWriteJsonArray("lumera_cart",current);
  return current.some(function(item){return item.productId===id});
}

function gpCartQuantity(id,items){
  var found=(items||gpReadAllCartItems()).find(function(item){return item.productId===id});
  return found?Math.max(1,Number(found.quantity)||1):0;
}

function gpAddCartItem(id,quantity){
  if(!id)return 0;
  var current=gpReadCartItems();
  var index=current.findIndex(function(item){return item.productId===id});
  if(index>-1)current[index]={productId:id,quantity:Math.max(1,Number(current[index].quantity)||1)+(Math.max(1,Number(quantity)||1))};
  else current.push({productId:id,quantity:Math.max(1,Number(quantity)||1)});
  gpWriteJsonArray("lumera_cart",current);
  return gpCartQuantity(id,current);
}

function gpAddMirrorCartItem(id,quantity){
  if(!id)return 0;
  var current=gpReadMirrorCartItems();
  var index=current.findIndex(function(item){return item.productId===id});
  if(index>-1)current[index]={productId:id,quantity:Math.max(1,Number(current[index].quantity)||1)+(Math.max(1,Number(quantity)||1))};
  else current.push({productId:id,quantity:Math.max(1,Number(quantity)||1)});
  gpWriteJsonArray("gp_cart_items_v1",current);
  return gpCartQuantity(id,current);
}

function gpIsCompareLabel(label){
  return label.indexOf("\u0441\u0440\u0430\u0432\u043d")>-1||label.indexOf("\u0432 \u0441\u0440\u0430\u0432\u043d")>-1||label.indexOf("compare")>-1;
}

function gpIsCartLabel(label){
  return label.indexOf("\u043a\u043e\u0440\u0437\u0438\u043d")>-1||label.indexOf("cart")>-1;
}

function gpSetStorageItem(key,id,active){
  return gpWriteStringSet(key,id,active);
}

function gpEnforceToggleState(primaryKey,mirrorKey,id,active,after){
  var apply=function(){
    gpWriteStringSet(primaryKey,id,active);
    gpWriteStringSet(mirrorKey,id,active);
    if(typeof after==="function")after();
  };
  apply();
}

function gpIsCompareButtonActive(button){
  var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
  return label.indexOf("\u0443\u0431\u0440\u0430\u0442\u044c")>-1||button.getAttribute("aria-pressed")==="true"||button.dataset.state==="active"||button.classList.contains("text-rose-600")||button.classList.contains("border-rose-200")||button.classList.contains("bg-[var(--brand-primary)]");
}

function gpPersistVisibleActiveCompareFromCards(){
  if(location.pathname.indexOf("/catalog")!==0&&location.pathname.indexOf("/product")!==0)return false;
  var ids=gpUnionIds("lumera_compare","gp_compare_ids_v1");
  var persistKey=location.pathname+"|"+location.search+"|"+ids.join(",")+"|"+gpArticleSignature();
  if(gpPerfCache.persistCompareKey===persistKey)return false;
  gpPerfCache.persistCompareKey=persistKey;
  var changed=false;
  [].slice.call(document.querySelectorAll("main article")).forEach(function(card){
    var id=gpProductIdFromSlug(gpProductSlugFromCard(card));
    if(!id||ids.indexOf(id)>-1)return;
    var active=[].slice.call(card.querySelectorAll("button")).some(function(button){
      var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
      return gpIsCompareLabel(label)&&gpIsCompareButtonActive(button);
    });
    if(active){
      ids.push(id);
      gpSaveProductSnapshot(id,card);
      changed=true;
    }
  });
  if(!changed)return false;
  ids=gpUniqueArray(ids);
  gpWriteJsonArray("lumera_compare",ids);
  gpWriteJsonArray("gp_compare_ids_v1",ids);
  return true;
}

function gpIsFavoriteButtonActive(button){
  var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
  return label.indexOf("\u0443\u0431\u0440\u0430\u0442\u044c")>-1||button.classList.contains("text-rose-600")||button.classList.contains("border-rose-200");
}

function gpButtonDesiredActive(button){
  var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
  if(label.indexOf("\u0434\u043e\u0431\u0430\u0432")>-1||label.indexOf("add")>-1)return true;
  if(label.indexOf("\u0443\u0431\u0440\u0430")>-1||label.indexOf("remove")>-1)return false;
  return !gpIsFavoriteButtonActive(button);
}

function gpSetCompareButtonVisual(button,active){
  button.classList.toggle("text-rose-600",active);
  button.classList.toggle("border-rose-200",active);
  button.title=active?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435";
  button.setAttribute("aria-label",button.title);
}

window.__gpNativeProductActionClick=function(event,button){
  try{
    if(!button)return false;
    var card=button.closest("article");
    if(!card&&location.pathname.indexOf("/product/")===0)card=button.closest("main");
    var detailSlug=location.pathname.indexOf("/product/")===0?location.pathname.split("/").filter(Boolean).pop():"";
    var id=button.dataset.gpBoundProduct||gpProductIdFromSlug(detailSlug||gpProductSlugFromCard(card));
    var kind=button.dataset.gpBoundAction;
    if(!card||!id||!kind)return false;
    if(event){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
    }
    gpSaveProductSnapshot(id,card);
    if(kind==="compare"){
      var active=gpUnionIds("lumera_compare","gp_compare_ids_v1").indexOf(id)>-1;
      gpSetStorageItem("lumera_compare",id,!active);
      gpSetMirrorItem("gp_compare_ids_v1",id,!active);
      gpSetCompareButtonVisual(button,!active);
    }
    if(kind==="cart"){
      var cartActive=gpCartQuantity(id,gpReadAllCartItems())<1;
      window.__gpNextActionToastMessage=gpCartToastLabel(cartActive);
      gpSetCartItemQuantity(id,cartActive?1:0);
      gpShowActionToast("РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ");
    }
    gpCardActionButtonState();
    gpSyncHeaderActionBadges();
    gpRenderStoredActionPage();
    return false;
  }catch(error){try{console.warn("gp native product action failed",error)}catch(innerError){} return false}
};

window.__gpNativeFavoriteClick=function(event,button){
  try{
    if(!button)return false;
    var card=button.closest("article");
    var id=button.dataset.gpBoundFavoriteProduct||gpProductIdFromSlug(gpProductSlugFromCard(card));
    if(!card||!id)return false;
    if(event){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
    }
    gpSaveProductSnapshot(id,card);
    var active=gpUnionIds("lumera_favorites","gp_favorite_ids_v1").indexOf(id)>-1;
    gpSetStorageItem("lumera_favorites",id,!active);
    gpSetMirrorItem("gp_favorite_ids_v1",id,!active);
    syncFavoriteOverlays();
    gpSyncHeaderActionBadges();
    gpRenderStoredActionPage();
    return false;
  }catch(error){try{console.warn("gp native favorite action failed",error)}catch(innerError){} return false}
};

function gpBindCardActionButton(button,kind,id){
  if(!button||!kind||!id)return;
  if(button.dataset.gpBoundAction===kind&&button.dataset.gpBoundProduct===id&&button.dataset.gpNativeActionListener==="true")return;
  button.dataset.gpBoundAction=kind;
  button.dataset.gpBoundProduct=id;
  var handler=function(event){
    if(button.dataset.gpSuppressNextAction==="true"){
      delete button.dataset.gpSuppressNextAction;
      return;
    }
    if(event&&event.__gpCapturedCardAction)return;
    var card=button.closest("article");
    if(!card&&location.pathname.indexOf("/product/")===0)card=button.closest("main");
    var currentKind=button.dataset.gpBoundAction||kind;
    var currentId=button.dataset.gpBoundProduct||gpProductIdFromSlug(gpProductSlugFromCard(card))||id;
    if(!card||!currentKind||!currentId)return;
    gpSaveProductSnapshot(currentId,card);
    var compareDesired=gpActionIds("compare").indexOf(currentId)<0;
    var cartBefore=gpCartQuantity(currentId,gpReadAllCartItems());
    var cartDesired=cartBefore<1;
      if(currentKind==="compare"){
        var compareAfter=gpStorageIdArray("lumera_compare").indexOf(currentId)>-1;
        if(compareAfter!==compareDesired){
          gpEnforceToggleState("lumera_compare","gp_compare_ids_v1",currentId,compareDesired,function(){
            gpSetCompareButtonVisual(button,compareDesired);
          });
        }else{
          gpSetMirrorItem("gp_compare_ids_v1",currentId,compareAfter);
        }
      }
      if(currentKind==="cart"){
        window.__gpNextActionToastMessage=gpCartToastLabel(cartDesired);
        gpSetCartItemQuantity(currentId,cartDesired?1:0);
        gpShowActionToast("РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ");
      }
      gpCardActionButtonState();
      gpSyncHeaderActionBadges();
      gpRenderStoredActionPage();
  };
  if(button.dataset.gpNativeActionListener!=="true"){
    button.addEventListener("click",handler,false);
    button.dataset.gpNativeActionListener="true";
  }
}

function gpCardActionButtonState(){
  var compare=gpUnionIds("lumera_compare","gp_compare_ids_v1");
  var cart=gpReadAllCartItems();
  var cartKey=cart.map(function(item){return item.productId+":"+item.quantity}).join(",");
  var productButtonSignature=location.pathname.indexOf("/product/")===0?[].slice.call(document.querySelectorAll("main button")).map(function(button){
    return (button.getAttribute("aria-label")||button.title||button.textContent||"").replace(/\s+/g," ").trim();
  }).join("|"):"";
  var stateKey=location.pathname+"|"+location.search+"|"+compare.join(",")+"|"+cartKey+"|"+gpArticleSignature()+"|"+productButtonSignature;
  if(gpPerfCache.cardActionStateKey===stateKey)return;
  gpPerfCache.cardActionStateKey=stateKey;
  [].slice.call(document.querySelectorAll("main article")).forEach(function(card){
    var id=gpProductIdFromSlug(gpProductSlugFromCard(card));
    if(!id)return;
    var inCompare=compare.indexOf(id)>-1;
    var inCart=cart.some(function(item){return item.productId===id});
    [].slice.call(card.querySelectorAll("button")).forEach(function(button){
      var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
      if(gpIsCompareLabel(label)){
        gpBindCardActionButton(button,"compare",id);
        button.classList.toggle("text-rose-600",inCompare);
        button.classList.toggle("border-rose-200",inCompare);
        button.title=inCompare?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435";
        button.setAttribute("aria-label",button.title);
      }
      if(gpIsCartLabel(label)){
        gpBindCardActionButton(button,"cart",id);
        button.classList.toggle("ring-2",inCart);
        button.classList.toggle("ring-[var(--brand-primary)]/35",inCart);
        button.classList.toggle("gp-cart-added",inCart);
        button.dataset.gpCartAdded=inCart?"true":"false";
        button.title=gpCartButtonLabel(inCart);
        button.setAttribute("aria-label",button.title);
      }
      if(label.indexOf("СЃСЂР°РІРЅРµРЅ")>-1||label.indexOf("СЃСЂР°РІРЅРёС‚СЊ")>-1||label.indexOf("СЃСЂР°РІРЅРµРЅРёРµ")>-1){
        button.classList.toggle("text-rose-600",inCompare);
        button.classList.toggle("border-rose-200",inCompare);
        button.title=inCompare?"РЈР±СЂР°С‚СЊ РёР· СЃСЂР°РІРЅРµРЅРёСЏ":"Р”РѕР±Р°РІРёС‚СЊ РІ СЃСЂР°РІРЅРµРЅРёРµ";
        button.setAttribute("aria-label",button.title);
      }
      if(label.indexOf("РєРѕСЂР·РёРЅ")>-1){
        button.classList.toggle("ring-2",inCart);
        button.classList.toggle("ring-[var(--brand-primary)]/35",inCart);
        button.classList.toggle("gp-cart-added",inCart);
        button.dataset.gpCartAdded=inCart?"true":"false";
        button.title=inCart?"Р’ РєРѕСЂР·РёРЅРµ":"Р’ РєРѕСЂР·РёРЅСѓ";
        button.setAttribute("aria-label",button.title);
      }
    });
  });
  if(location.pathname.indexOf("/product/")===0){
    var main=document.querySelector("main");
    var slug=location.pathname.split("/").filter(Boolean).pop()||"";
    var productId=gpProductIdFromSlug(slug);
    if(main&&productId){
      var productInCompare=compare.indexOf(productId)>-1;
      var productInCart=cart.some(function(item){return item.productId===productId});
      [].slice.call(main.querySelectorAll("button")).forEach(function(button){
        if(button.closest("article"))return;
        var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
        if(button.dataset.gpBoundAction==="compare"||gpIsCompareLabel(label)){
          gpBindCardActionButton(button,"compare",productId);
          button.classList.toggle("text-rose-600",productInCompare);
          button.classList.toggle("border-rose-200",productInCompare);
          button.title=productInCompare?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435";
          button.setAttribute("aria-label",button.title);
        }
        if(button.dataset.gpBoundAction==="cart"||gpIsCartLabel(label)){
          gpBindCardActionButton(button,"cart",productId);
          button.classList.toggle("ring-2",productInCart);
          button.classList.toggle("ring-[var(--brand-primary)]/35",productInCart);
          button.classList.toggle("gp-cart-added",productInCart);
          button.dataset.gpCartAdded=productInCart?"true":"false";
          button.title=gpCartButtonLabel(productInCart);
          button.setAttribute("aria-label",button.title);
        }
      });
    }
  }
}

function installCardActionFallbacks(){
  if(document.documentElement.dataset.gpCardActionsFallback==="1")return;
  document.documentElement.dataset.gpCardActionsFallback="1";
  document.addEventListener("click",function(event){
    var button=event.target.closest&&event.target.closest("button");
    if(!button||button.closest(".gp-old-filter-panel"))return;
    var card=button.closest("article");
    if(!card&&location.pathname.indexOf("/product/")===0)card=button.closest("main");
    if(!card)return;
    var detailSlug=location.pathname.indexOf("/product/")===0&&card.matches&&card.matches("main")?location.pathname.split("/").filter(Boolean).pop():"";
    var id=gpProductIdFromSlug(detailSlug||gpProductSlugFromCard(card));
    if(!id)return;
    var label=(button.getAttribute("aria-label")||button.title||button.textContent||"").toLowerCase();
    var isFavorite=button.dataset.gpFavoriteOverlay==="true";
    var isCompare=button.dataset.gpBoundAction==="compare"||gpIsCompareLabel(label);
    var isCart=button.dataset.gpBoundAction==="cart"||gpIsCartLabel(label);
    if(button.dataset.gpFavoriteOverlay==="true"){
      event.__gpCapturedCardAction=true;
      button.dataset.gpSuppressNextFavorite="true";
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpSaveProductSnapshot(id,card);
      var favoriteDesired=gpUnionIds("lumera_favorites","gp_favorite_ids_v1").indexOf(id)<0;
      gpEnforceToggleState("lumera_favorites","gp_favorite_ids_v1",id,favoriteDesired,function(){
        syncFavoriteOverlays();
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
      });
      return;
    }
    if(isCompare){
      event.__gpCapturedCardAction=true;
      button.dataset.gpSuppressNextAction="true";
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpSaveProductSnapshot(id,card);
      var compareDesired=gpUnionIds("lumera_compare","gp_compare_ids_v1").indexOf(id)<0;
      gpEnforceToggleState("lumera_compare","gp_compare_ids_v1",id,compareDesired,function(){
        gpSetCompareButtonVisual(button,compareDesired);
        gpCardActionButtonState();
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
      });
      return;
    }
    if((button.dataset.gpNativeActionListener==="true"||button.dataset.gpFavoriteNativeListener==="true")&&!isFavorite&&!isCompare)return;
    if(isCart){
      event.__gpCapturedCardAction=true;
      button.dataset.gpSuppressNextAction="true";
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpSaveProductSnapshot(id,card);
      var cartDesired=gpCartQuantity(id,gpReadAllCartItems())<1;
        window.__gpNextActionToastMessage=gpCartToastLabel(cartDesired);
        gpSetCartItemQuantity(id,cartDesired?1:0);
        gpShowActionToast("РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ");
        gpCardActionButtonState();
        gpSyncHeaderActionBadges();
        gpRenderStoredActionPage();
      return;
    }
    if(label.indexOf("??????????")>-1||label.indexOf("????????????????")>-1){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpSaveProductSnapshot(id,card);
      var mojibakeActive=gpUnionIds("lumera_compare","gp_compare_ids_v1").indexOf(id)>-1;
      gpSetStorageItem("lumera_compare",id,!mojibakeActive);
      gpSetMirrorItem("gp_compare_ids_v1",id,!mojibakeActive);
      gpCardActionButtonState();
      gpSyncHeaderActionBadges();
      gpRenderStoredActionPage();
      return;
    }
    if(label.indexOf("????????????")>-1){
      event.preventDefault();
      event.stopPropagation();
      if(event.stopImmediatePropagation)event.stopImmediatePropagation();
      gpSaveProductSnapshot(id,card);
      window.__gpNextActionToastMessage=gpCartToastLabel(gpToggleCartEverywhere(id));
      gpShowActionToast("РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ");
      gpCardActionButtonState();
      gpSyncHeaderActionBadges();
      gpRenderStoredActionPage();
    }
  },true);
}

function gpNormalizeText(value){
  return String(value||"").toLowerCase().replace(/С‘/g,"Рµ").replace(/\s+/g," ").trim();
}

function gpLoadSearchIndex(){
  if(window.__gpSearchIndexPromise)return window.__gpSearchIndexPromise;
  window.__gpSearchIndexPromise=new Promise(function(resolve){
    if(typeof fetch==="function"){
      fetch("/search-index.v20260604-docx5-visible.json",{cache:"force-cache"}).then(function(response){
        return response.ok?response.json():[];
      }).then(resolve).catch(function(){resolve(null)});
      return;
    }
    resolve(null);
  }).then(function(items){
    if(items)return items;
    return new Promise(function(resolve){
      try{
        var xhr=new XMLHttpRequest();
        xhr.open("GET","/search-index.v20260604-docx5-visible.json",true);
        xhr.onreadystatechange=function(){
          if(xhr.readyState!==4)return;
          if(xhr.status>=200&&xhr.status<300){
            try{resolve(JSON.parse(xhr.responseText||"[]"))}catch(error){resolve([])}
          }else{
            resolve([]);
          }
        };
        xhr.send();
      }catch(error){resolve([])}
    });
  }).then(function(items){
    return Array.isArray(items)?items.filter(function(item){return item&&item.title&&item.href}):[];
  }).catch(function(){return[]});
  return window.__gpSearchIndexPromise;
}

var gpStaleSearchCategoryHrefs82={
  "/catalog/cleanse":true,
  "/catalog/serums":true,
  "/catalog/creams":true,
  "/catalog/masks":true,
  "/catalog/body":true,
  "/catalog/sets":true
};

function gpSearchQueryHref82(title){
  var query=(title||"").replace(/\s+/g," ").trim();
  return "/catalog/all-products"+(query?"?q="+encodeURIComponent(query):"");
}

function gpSafeSearchHref82(item){
  var href=item&&item.href?String(item.href):"";
  var title=item&&item.title?String(item.title):"";
  if(!href)return gpSearchQueryHref82(title);
  try{
    var parsed=new URL(href,location.origin);
    if(parsed.origin!==location.origin)return gpSearchQueryHref82(title);
    href=parsed.pathname+(parsed.search||"")+(parsed.hash||"");
  }catch(error){
    return gpSearchQueryHref82(title);
  }
  if(item&&item.kind==="category"){
    if(href==="/catalog")return "/catalog/all-products";
    if(gpStaleSearchCategoryHrefs82[href])return gpSearchQueryHref82(title);
    if(href.indexOf("/catalog/")!==0)return gpSearchQueryHref82(title);
  }
  if(!/^\/(catalog|product|promotions|contacts|about|faq|cart|compare|account)(\/|$|\?)/.test(href)){
    return gpSearchQueryHref82(title);
  }
  return href;
}

function gpNavigateSearchHref82(href){
  var next=href||"/catalog/all-products";
  try{
    var parsed=new URL(next,location.origin);
    next=parsed.origin===location.origin?parsed.pathname+(parsed.search||"")+(parsed.hash||""):"/catalog/all-products";
  }catch(error){
    next="/catalog/all-products";
  }
  location.assign(next);
}

function gpRenderSearchSuggestions(input,items,query){
  var host=input.closest("form")||input.parentElement;
  if(!host)return;
  host.style.position=host.style.position||"relative";
  var box=host.querySelector(".gp-search-suggestions");
  if(!box){
    box=document.createElement("div");
    box.className="gp-search-suggestions";
    box.setAttribute("role","listbox");
    host.appendChild(box);
  }
  var normalized=gpNormalizeText(query);
  if(!normalized){
    box.remove();
    return;
  }
  var words=normalized.split(" ").filter(Boolean);
  var matches=items.map(function(item){
    var title=gpNormalizeText(item.title);
    var category=gpNormalizeText(item.category||item.kind||"");
    var haystack=title+" "+category+" "+gpNormalizeText(item.brand||"")+" "+gpNormalizeText(item.subtitle||"")+" "+gpNormalizeText(item.section||"");
    var score=0;
    words.forEach(function(word){
      if(title.indexOf(word)===0)score+=8;
      else if(title.indexOf(word)>-1)score+=5;
      else if(haystack.indexOf(word)>-1)score+=2;
    });
    return score>0?{item:item,score:score}:null;
  }).filter(Boolean).sort(function(a,b){return b.score-a.score}).slice(0,8);
  if(!matches.length){
    box.innerHTML='<div class="gp-search-empty">РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ</div>';
    return;
  }
  box.innerHTML=matches.map(function(match){
    var kind=match.item.kind==="category"?"РљР°С‚РµРіРѕСЂРёСЏ":"РўРѕРІР°СЂ";
    var href=gpSafeSearchHref82(match.item);
    return '<button type="button" class="gp-search-suggestion" data-gp-search-href="'+gpEscapeHtml(href)+'"><span><strong>'+String(match.item.title).replace(/[&<>]/g,function(char){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[char]})+'</strong><small>'+kind+'</small></span></button>';
  }).join("");
}

function installSearchSuggestions(){
  [].slice.call(document.querySelectorAll('input[type="search"],input[placeholder*="РџРѕРёСЃРє"],input[placeholder*="Р СџР С•Р С‘РЎРѓР С”"]')).forEach(function(input){
    if(input.dataset.gpSearchWired==="1")return;
    input.dataset.gpSearchWired="1";
    input.autocomplete="off";
    input.addEventListener("input",function(){
      var query=input.value;
      gpLoadSearchIndex().then(function(items){gpRenderSearchSuggestions(input,items,query)});
    });
    input.addEventListener("keydown",function(event){
      if(event.key!=="Enter")return;
      var first=(input.closest("form")||input.parentElement||document).querySelector(".gp-search-suggestion");
      if(first){
        event.preventDefault();
        gpNavigateSearchHref82(first.dataset.gpSearchHref);
      }
    });
  });
  if(document.documentElement.dataset.gpSearchClickWired==="1")return;
  document.documentElement.dataset.gpSearchClickWired="1";
  document.addEventListener("click",function(event){
    var suggestion=event.target.closest&&event.target.closest(".gp-search-suggestion");
    if(suggestion){
      event.preventDefault();
      gpNavigateSearchHref82(suggestion.dataset.gpSearchHref);
      return;
    }
    if(!event.target.closest||!event.target.closest(".gp-search-suggestions")&&!event.target.closest('input[type="search"],input[placeholder*="РџРѕРёСЃРє"],input[placeholder*="Р СџР С•Р С‘РЎРѓР С”"]')){
      [].slice.call(document.querySelectorAll(".gp-search-suggestions")).forEach(function(node){node.remove()});
    }
  });
}

function gpIsMobileViewport(){
  return window.matchMedia&&window.matchMedia("(max-width: 1023px)").matches;
}

function gpFindVisibleSearchInput(){
  return [].slice.call(document.querySelectorAll('input[type="search"],input[placeholder*="РџРѕРёСЃРє"],input[placeholder*="Р СџР С•Р С‘РЎРѓР С”"]')).find(function(input){
    var rect=input.getBoundingClientRect();
    var style=getComputedStyle(input);
    return rect.width>20&&rect.height>18&&style.visibility!=="hidden"&&style.display!=="none";
  })||null;
}

function gpOpenMobileSearchFallback(){
  if(!gpIsMobileViewport())return;
  if(Date.now()-(window.__gpMobileSearchClosedAt||0)<320)return;
  var old=document.querySelector(".gp-mobile-search-root");
  if(old){
    var oldInput=old.querySelector("input");
    if(oldInput)oldInput.focus();
    return;
  }
  var root=document.createElement("div");
  root.className="gp-mobile-search-root";
  root.innerHTML='<div class="gp-mobile-search-dialog" role="dialog" aria-modal="true" aria-label="РџРѕРёСЃРє"><div class="gp-mobile-search-top"><div class="gp-mobile-search-field"><input class="gp-mobile-search-input" type="search" placeholder="РџРѕРёСЃРє РїРѕ РєР°С‚Р°Р»РѕРіСѓ" autocomplete="off"></div><button class="gp-mobile-search-close" type="button" aria-label="Р—Р°РєСЂС‹С‚СЊ РїРѕРёСЃРє">Г—</button></div></div>';
  var closeRoot=function(){
    window.__gpMobileSearchClosedAt=Date.now();
    root.remove();
  };
  root.addEventListener("click",function(event){
    if(event.target===root||event.target.closest(".gp-mobile-search-close"))closeRoot();
  });
  document.body.appendChild(root);
  var input=root.querySelector("input");
  input.focus();
  input.addEventListener("input",function(){
    gpLoadSearchIndex().then(function(items){gpRenderSearchSuggestions(input,items,input.value)});
  });
  input.addEventListener("keydown",function(event){
    if(event.key==="Escape"){closeRoot();return}
    if(event.key!=="Enter")return;
    var first=root.querySelector(".gp-search-suggestion");
    if(first){
      event.preventDefault();
      gpNavigateSearchHref82(first.dataset.gpSearchHref);
    }
  });
}

function installMobileSearchFallback(){
  if(document.documentElement.dataset.gpMobileSearchFallback==="1")return;
  document.documentElement.dataset.gpMobileSearchFallback="1";
  document.addEventListener("click",function(event){
    var trigger=event.target.closest&&event.target.closest("header button,header a,button[aria-label],a[aria-label]");
    if(!trigger||!gpIsMobileViewport())return;
    var label=(trigger.getAttribute("aria-label")||trigger.title||trigger.textContent||"").replace(/\s+/g," ").trim();
    if(!/РџРѕРёСЃРє|Р СџР С•Р С‘РЎРѓР С”|Search/i.test(label))return;
    setTimeout(function(){
      if(document.querySelector(".gp-mobile-search-root"))return;
      var input=gpFindVisibleSearchInput();
      if(input){
        input.focus();
        return;
      }
      gpOpenMobileSearchFallback();
    },80);
  },true);
}

function gpContactSvg(name){
  if(name==="close")return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  if(name==="phone")return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9z"/></svg>';
  if(name==="send")return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
  if(name==="max")return '<span style="font-weight:800;font-size:12px;letter-spacing:.02em">MAX</span>';
  return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>';
}

function gpLooksLikeContactTrigger(node){
  if(!node||node.closest(".gp-contact-widget-fallback"))return false;
  var label=(node.getAttribute("aria-label")||node.title||node.textContent||"").replace(/\s+/g," ").trim();
  return /СЃРІСЏР·|С‡Р°С‚|РєРѕРЅСЃСѓР»СЊС‚|whats|telegram|max|СЃРїРѕСЃРѕР±С‹|Р С•Р Р…Р В»Р В°Р в„–Р Р…|Р С”Р С•Р Р…РЎРѓРЎС“Р В»РЎРЉРЎвЂљ/i.test(label);
}

function gpVisibleNativeContactTrigger(){
  return [].slice.call(document.querySelectorAll("button,a")).some(function(node){
    if(!gpLooksLikeContactTrigger(node))return false;
    var rect=node.getBoundingClientRect();
    var style=getComputedStyle(node);
    return rect.width>20&&rect.height>20&&style.display!=="none"&&style.visibility!=="hidden";
  });
}

function gpVisibleNativeContactPanel(){
  return [].slice.call(document.querySelectorAll("form,section,div")).some(function(node){
    if(node.closest(".gp-contact-widget-fallback"))return false;
    var text=(node.textContent||"").replace(/\s+/g," ");
    if(!/РќР°РїРёС€РёС‚Рµ|РћРЅР»Р°Р№РЅ-РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ|WhatsApp|Telegram|Max|Р СњР В°Р С—Р С‘РЎв‚¬Р С‘РЎвЂљР Вµ|Р С›Р Р…Р В»Р В°Р в„–Р Р…/i.test(text))return false;
    if(!node.querySelector("input,textarea,a[href^='tel:'],a[href*='wa.me'],a[href*='t.me']"))return false;
    var rect=node.getBoundingClientRect();
    var style=getComputedStyle(node);
    return rect.width>120&&rect.height>80&&style.display!=="none"&&style.visibility!=="hidden";
  });
}

function ensureContactWidgetFallback(forceOpen,message){
  var mobile=gpIsMobileViewport();
  var root=document.querySelector(".gp-contact-widget-fallback");
  var alreadyOpen=!!(root&&root.classList.contains("is-open"));
  var shouldShow=forceOpen||alreadyOpen||mobile||!gpVisibleNativeContactTrigger();
  if(!shouldShow){
    if(root)root.style.display="none";
    return root;
  }
  if(!root){
    root=document.createElement("div");
    root.className="gp-contact-widget-fallback";
    root.innerHTML='<div class="gp-contact-widget-panel"><h3>РќР°РїРёС€РёС‚Рµ РЅР°Рј</h3><p>РџРѕРјРѕР¶РµРј СЃ РїРѕРґР±РѕСЂРѕРј, Р·Р°РєР°Р·РѕРј Рё РґРѕСЃС‚Р°РІРєРѕР№.</p><div class="gp-contact-widget-links"><a href="tel:+79134487333">РџРѕР·РІРѕРЅРёС‚СЊ <span>+7 913 448-73-33</span></a><a href="https://wa.me/79134487333" target="_blank" rel="noreferrer">WhatsApp <span>РћС‚РєСЂС‹С‚СЊ</span></a><a href="/contacts">РљРѕРЅС‚Р°РєС‚С‹ <span>Р’СЃРµ СЃРїРѕСЃРѕР±С‹</span></a></div><form data-gp-contact-form><input name="name" placeholder="Р’Р°С€Рµ РёРјСЏ"><input name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__"><textarea name="message" placeholder="Р’Р°С€ РІРѕРїСЂРѕСЃ"></textarea><button type="submit">РћС‚РїСЂР°РІРёС‚СЊ Р·Р°РїСЂРѕСЃ</button><p class="gp-order-status" data-gp-contact-status></p></form></div><button class="gp-contact-widget-main" type="button" aria-label="РћС‚РєСЂС‹С‚СЊ СЃРїРѕСЃРѕР±С‹ СЃРІСЏР·Рё"><span class="gp-contact-widget-icon is-active">'+gpContactSvg("chat")+'</span><span class="gp-contact-widget-icon">'+gpContactSvg("max")+'</span><span class="gp-contact-widget-icon">'+gpContactSvg("phone")+'</span><span class="gp-contact-widget-icon">'+gpContactSvg("send")+'</span></button>';
    root.querySelector(".gp-contact-widget-main").addEventListener("click",function(event){
      event.preventDefault();
      root.classList.toggle("is-open");
    });
    root.querySelector("[data-gp-contact-form]").addEventListener("submit",function(event){
      event.preventDefault();
      var status=root.querySelector("[data-gp-contact-status]");
      if(status){
        status.textContent="Р—Р°РїСЂРѕСЃ РїРѕРґРіРѕС‚РѕРІР»РµРЅ. РњРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РїРѕ СѓРєР°Р·Р°РЅРЅРѕРјСѓ С‚РµР»РµС„РѕРЅСѓ.";
        status.classList.add("is-visible");
      }
    });
    document.body.appendChild(root);
    var index=0;
    setInterval(function(){
      if(!document.body.contains(root))return;
      var icons=[].slice.call(root.querySelectorAll(".gp-contact-widget-icon"));
      index=(index+1)%icons.length;
      icons.forEach(function(icon,i){icon.classList.toggle("is-active",i===index)});
    },3500);
  }
  root.style.display="";
  root.classList.toggle("is-mobile",mobile);
  if(forceOpen)root.classList.add("is-open");
  if(message){
    var textarea=root.querySelector("textarea");
    if(textarea)textarea.value=message;
  }
  return root;
}

function gpOpenContactWidget(message){
  try{window.dispatchEvent(new CustomEvent("consultation-widget:open",{detail:{source:"cart",view:"widget"}}))}catch(error){}
  setTimeout(function(){
    if(gpVisibleNativeContactPanel()){
      var root=document.querySelector(".gp-contact-widget-fallback");
      if(root){
        root.classList.remove("is-open","is-chat");
        root.style.display="none";
      }
      return;
    }
    if(!gpVisibleNativeContactTrigger())ensureContactWidgetFallback(true,message);
  },240);
}

function installContactWidgetBridge(){
  if(document.documentElement.dataset.gpContactWidgetBridge==="1")return;
  document.documentElement.dataset.gpContactWidgetBridge="1";
  document.addEventListener("click",function(event){
    var trigger=event.target.closest&&event.target.closest("button,a");
    if(!gpLooksLikeContactTrigger(trigger))return;
    setTimeout(function(){
      if(!gpVisibleNativeContactPanel()&&!gpVisibleNativeContactTrigger())ensureContactWidgetFallback(true);
    },160);
  },true);
}

function gpContactMessengerIcon(name){
  if(name==="max")return '<span class="gp-contact-widget-icon-bubble-v2"><img src="/icons/mobile-max.jpeg" alt=""></span>';
  if(name==="whatsapp")return '<span class="gp-contact-widget-icon-bubble-v2"><img src="/icons/mobile-whatsapp.png" alt=""></span>';
  if(name==="telegram")return '<span class="gp-contact-widget-icon-bubble-v2"><img src="/icons/mobile-telegram.png" alt=""></span>';
  return '<span class="gp-contact-widget-icon-bubble-v2">'+gpContactSvg("chat")+'</span>';
}

ensureContactWidgetFallback=function(forceOpen,message){
  var mobile=gpIsMobileViewport();
  var root=document.querySelector(".gp-contact-widget-fallback");
  if(root&&root.dataset.gpContactWidgetVersion!=="pravki33"){
    root.remove();
    root=null;
  }
  var alreadyOpen=!!(root&&root.classList.contains("is-open"));
  var shouldShow=forceOpen||alreadyOpen||!gpVisibleNativeContactTrigger();
  if(!shouldShow){
    if(root){
      root.classList.remove("is-open","is-chat");
      root.style.display="none";
    }
    return root;
  }
  if(!root){
    root=document.createElement("div");
    root.className="gp-contact-widget-fallback";
    root.dataset.gpContactWidgetVersion="pravki33";
    root.innerHTML='<div class="gp-contact-widget-panel"><div class="gp-contact-widget-head-v2"><div><div class="gp-compare-kicker-v2">\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f</div><h3>\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c</h3><p>\u041f\u043e\u043c\u043e\u0436\u0435\u043c \u0441 \u043f\u043e\u0434\u0431\u043e\u0440\u043e\u043c \u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u043c.</p></div><button type="button" class="gp-mobile-search-close" data-gp-contact-close aria-label="\u0417\u0430\u043a\u0440\u044b\u0442\u044c">'+gpContactSvg("close")+'</button></div><div class="gp-contact-widget-menu-v2"><button type="button" class="gp-contact-widget-link-v2" data-gp-contact-open-form><span>\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442</span>'+gpContactMessengerIcon("chat")+'</button><a class="gp-contact-widget-link-v2" href="/contacts"><span>Max</span>'+gpContactMessengerIcon("max")+'</a><a class="gp-contact-widget-link-v2" href="https://wa.me/79134487333" target="_blank" rel="noreferrer"><span>WhatsApp</span>'+gpContactMessengerIcon("whatsapp")+'</a><a class="gp-contact-widget-link-v2" href="/contacts"><span>Telegram</span>'+gpContactMessengerIcon("telegram")+'</a></div><form data-gp-contact-form class="gp-contact-widget-form-v2"><input name="name" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"><input name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__"><textarea name="message" placeholder="\u0412\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441"></textarea><button type="submit">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441</button><p class="gp-order-status" data-gp-contact-status></p></form></div><button class="gp-contact-widget-main" type="button" aria-label="\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0441\u0432\u044f\u0437\u0438"><span class="gp-contact-widget-icon is-active">'+gpContactMessengerIcon("max")+'</span><span class="gp-contact-widget-icon">'+gpContactMessengerIcon("whatsapp")+'</span><span class="gp-contact-widget-icon">'+gpContactMessengerIcon("telegram")+'</span><span class="gp-contact-widget-icon">'+gpContactSvg("chat")+'</span></button>';
    root.addEventListener("click",function(event){
      var main=event.target.closest&&event.target.closest(".gp-contact-widget-main");
      var close=event.target.closest&&event.target.closest("[data-gp-contact-close]");
      var openForm=event.target.closest&&event.target.closest("[data-gp-contact-open-form]");
      if(main){
        event.preventDefault();
        root.classList.toggle("is-open");
        if(!root.classList.contains("is-open"))root.classList.remove("is-chat");
      }
      if(close){
        event.preventDefault();
        root.classList.remove("is-open","is-chat");
      }
      if(openForm){
        event.preventDefault();
        root.classList.add("is-open","is-chat");
      }
    });
    root.querySelector("[data-gp-contact-form]").addEventListener("submit",function(event){
      event.preventDefault();
      var status=root.querySelector("[data-gp-contact-status]");
      if(status){
        status.textContent="\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438.";
        status.classList.add("is-visible");
      }
    });
    document.body.appendChild(root);
    var index=0;
    setInterval(function(){
      if(!document.body.contains(root))return;
      var icons=[].slice.call(root.querySelectorAll(".gp-contact-widget-main>.gp-contact-widget-icon"));
      index=(index+1)%icons.length;
      icons.forEach(function(icon,i){icon.classList.toggle("is-active",i===index)});
    },3500);
  }
  root.style.display="";
  root.classList.toggle("is-mobile",mobile);
  if(forceOpen)root.classList.add("is-open","is-chat");
  if(message)root.setAttribute("data-gp-contact-has-message","true");
  else root.removeAttribute("data-gp-contact-has-message");
  if(message){
    var textarea=root.querySelector("textarea");
    if(textarea)textarea.value=message;
  }
  return root;
};

function gpEnsureContactWidgetOld73Style(){
  if(document.getElementById("gp-contact-widget-old73-style"))return;
  var style=document.createElement("style");
  style.id="gp-contact-widget-old73-style";
  style.textContent=[
    ".gp-contact-widget-fallback{position:fixed!important;right:1.45rem!important;bottom:calc(var(--mobile-viewport-bottom,0px) + 1.45rem)!important;z-index:240!important;font-family:var(--font-body,inherit)!important}",
    ".gp-contact-widget-fallback.is-mobile{right:.95rem!important;bottom:calc(var(--mobile-viewport-bottom,0px) + var(--mobile-dock-height,5.35rem) + .85rem)!important}",
    ".gp-contact-widget-main{position:relative!important;display:inline-flex!important;width:3.45rem!important;height:3.45rem!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;border-radius:999px!important;border:1px solid rgba(255,255,255,.78)!important;background:transparent!important;color:white!important;box-shadow:0 22px 52px rgba(175,90,102,.34)!important;transition:transform .2s ease,box-shadow .2s ease!important}",
    ".gp-contact-widget-main:hover{transform:translateY(-2px)!important;box-shadow:0 28px 62px rgba(175,90,102,.42)!important}",
    ".gp-contact-widget-main:before{content:\"\";position:absolute;inset:-7px;border-radius:inherit;background:conic-gradient(from 0deg,rgba(255,255,255,.2),rgba(255,220,228,.85),rgba(175,90,102,.9),rgba(255,255,255,.25),rgba(255,220,228,.85));animation:gpContactAura73 4.2s linear infinite}",
    ".gp-contact-widget-main:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(135deg,#c66f7d 0%,#a85b67 100%)}",
    ".gp-contact-widget-main .gp-contact-widget-icon{position:absolute!important;z-index:2!important;inset:50% auto auto 50%!important;width:1.62rem!important;height:1.62rem!important;margin:-.81rem 0 0 -.81rem!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;opacity:0!important;transform:scale(.72) rotate(-8deg)!important;filter:blur(.2px)!important;transition:opacity .52s ease,transform .52s ease,filter .52s ease!important}",
    ".gp-contact-widget-main .gp-contact-widget-icon.is-active{opacity:1!important;transform:scale(1) rotate(0deg)!important;filter:blur(0)!important}",
    ".gp-contact-widget-main .gp-contact-widget-icon svg{width:1.18rem!important;height:1.18rem!important;color:white!important;stroke-width:2.15!important}",
    ".gp-contact-widget-main .gp-contact-widget-icon-bubble-v2{width:1.62rem!important;height:1.62rem!important;border-radius:999px!important;box-shadow:none!important;background:transparent!important}",
    ".gp-contact-widget-main .gp-contact-widget-icon-bubble-v2 img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:999px!important}",
    ".gp-contact-widget-old-menu{display:none;position:absolute;right:0;bottom:4.45rem;width:min(22rem,calc(100vw - 1.25rem));gap:.62rem;justify-items:end}",
    ".gp-contact-widget-fallback.is-open:not(.is-chat) .gp-contact-widget-old-menu{display:grid!important}",
    ".gp-contact-widget-old-card{display:flex!important;width:100%!important;align-items:center!important;justify-content:space-between!important;gap:.9rem;border-radius:1.5rem!important;border:1px solid rgba(255,255,255,.78)!important;background:rgba(255,255,255,.97)!important;padding:.76rem .82rem .76rem 1rem!important;color:var(--brand-text,#2f2723)!important;text-align:left!important;box-shadow:0 18px 40px rgba(36,29,25,.12)!important;backdrop-filter:blur(18px)!important;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease!important}",
    ".gp-contact-widget-old-card:hover{transform:translateY(-2px)!important;border-color:rgba(175,90,102,.25)!important;box-shadow:0 24px 54px rgba(36,29,25,.16)!important}",
    ".gp-contact-widget-old-card:nth-child(2){margin-right:.65rem!important}",
    ".gp-contact-widget-old-card:nth-child(3){margin-right:1.3rem!important}",
    ".gp-contact-widget-old-card:nth-child(4){margin-right:1.95rem!important}",
    ".gp-contact-widget-old-copy{display:grid;gap:.08rem;min-width:0}",
    ".gp-contact-widget-old-title{font-size:.94rem;font-weight:800;line-height:1.15;color:var(--brand-text,#2f2723)}",
    ".gp-contact-widget-old-note{font-size:.74rem;font-weight:600;line-height:1.25;color:var(--brand-muted,#8d7d73)}",
    ".gp-contact-widget-old-card .gp-contact-widget-icon-bubble-v2{flex:0 0 auto;width:2.35rem!important;height:2.35rem!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;border-radius:999px!important;background:#fff!important;box-shadow:0 10px 22px rgba(36,29,25,.11)!important}",
    ".gp-contact-widget-old-card .gp-contact-widget-icon-bubble-v2 img{width:100%!important;height:100%!important;object-fit:cover!important}",
    ".gp-contact-widget-old-card .gp-contact-widget-icon-bubble-v2 svg{width:1.15rem!important;height:1.15rem!important;color:var(--brand-primary,#af5a66)!important}",
    ".gp-contact-widget-panel{display:none!important;position:absolute!important;right:0!important;bottom:4.45rem!important;width:min(23rem,calc(100vw - 1.25rem))!important;max-height:min(38rem,calc(100dvh - 7rem))!important;overflow:auto!important;border-radius:2rem!important;border:1px solid rgba(255,255,255,.78)!important;background:rgba(255,255,255,.98)!important;padding:1rem!important;box-shadow:0 28px 78px rgba(36,29,25,.2)!important;backdrop-filter:blur(18px)!important}",
    ".gp-contact-widget-fallback.is-open:not(.is-chat) .gp-contact-widget-panel{display:none!important}",
    ".gp-contact-widget-fallback.is-chat .gp-contact-widget-panel{display:block!important}",
    ".gp-contact-widget-head-v2{display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:1rem!important;margin-bottom:.85rem!important}",
    ".gp-contact-widget-head-v2 h3{margin:.18rem 0 0!important;font-family:var(--font-heading,inherit)!important;font-size:1.55rem!important;line-height:.98!important;color:var(--brand-text,#2f2723)!important}",
    ".gp-contact-widget-head-v2 p{margin:.38rem 0 0!important;font-size:.88rem!important;line-height:1.5!important;color:var(--brand-muted,#8d7d73)!important}",
    ".gp-contact-widget-form-v2{display:grid!important;gap:.58rem!important;margin-top:0!important}",
    ".gp-contact-widget-panel input,.gp-contact-widget-panel textarea{width:100%!important;border-radius:1rem!important;border:1px solid rgba(175,90,102,.16)!important;background:#fff!important;padding:.82rem .92rem!important;margin:0!important;color:var(--brand-text,#2f2723)!important;outline:none!important;box-shadow:inset 0 0 0 1px transparent!important;transition:border-color .18s ease,box-shadow .18s ease!important}",
    ".gp-contact-widget-panel input:focus,.gp-contact-widget-panel textarea:focus{border-color:rgba(175,90,102,.36)!important;box-shadow:0 0 0 3px rgba(175,90,102,.1)!important}",
    ".gp-contact-widget-panel textarea{min-height:6rem!important;resize:vertical!important}",
    ".gp-contact-widget-panel button[type='submit']{margin-top:.1rem!important;display:inline-flex!important;width:100%!important;align-items:center!important;justify-content:center!important;border:0!important;border-radius:999px!important;background:var(--brand-primary,#af5a66)!important;color:white!important;padding:.88rem 1rem!important;font-weight:800!important;box-shadow:0 16px 34px rgba(175,90,102,.24)!important}",
    ".gp-contact-widget-panel .gp-order-status{margin:0!important;display:none!important;border-radius:1rem!important;background:rgba(175,90,102,.09)!important;padding:.75rem .85rem!important;color:var(--brand-text,#2f2723)!important;font-size:.84rem!important;line-height:1.45!important}",
    ".gp-contact-widget-panel .gp-order-status.is-visible{display:block!important}",
    "@keyframes gpContactAura73{to{transform:rotate(1turn)}}",
    "@media (max-width:640px){.gp-contact-widget-old-menu,.gp-contact-widget-panel{width:min(20.75rem,calc(100vw - 1rem))!important}.gp-contact-widget-old-card:nth-child(n){margin-right:0!important}.gp-contact-widget-main{width:3.35rem!important;height:3.35rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function gpSuppressNativeContactWidget73(root){
  try{
    [].slice.call(document.querySelectorAll("button[aria-label]")).forEach(function(button){
      if(root&&root.contains(button))return;
      var label=(button.getAttribute("aria-label")||"").toLowerCase();
      var text=(button.textContent||"").toLowerCase();
      if(!/(СЃРІСЏР·|РєРѕРЅСЃСѓР»СЊС‚|contact|chat|СЃРїРѕСЃРѕР±С‹)/i.test(label+" "+text))return;
      var fixed=button.closest("div[class*='fixed'],section[class*='fixed']");
      if(!fixed||fixed.closest(".gp-contact-widget-fallback"))return;
      var rect=fixed.getBoundingClientRect();
      if(rect.right>window.innerWidth-180&&rect.bottom>window.innerHeight-220&&rect.width<440&&rect.height<520){
        fixed.dataset.gpNativeContactHidden="true";
        fixed.style.setProperty("display","none","important");
      }
    });
  }catch(error){}
}

function gpSyncContactWidgetExpanded73(root){
  var main=root&&root.querySelector(".gp-contact-widget-main");
  if(main)main.setAttribute("aria-expanded",root.classList.contains("is-open")?"true":"false");
}

ensureContactWidgetFallback=function(forceOpen,message){
  if(!document.body)return null;
  gpEnsureContactWidgetOld73Style();
  var mobile=gpIsMobileViewport();
  var root=document.querySelector(".gp-contact-widget-fallback");
  if(root&&root.dataset.gpContactWidgetVersion!=="oldvisual73"){
    root.remove();
    root=null;
  }
  if(!root){
    root=document.createElement("div");
    root.className="gp-contact-widget-fallback";
    root.dataset.gpContactWidgetVersion="oldvisual73";
    root.innerHTML='<div class="gp-contact-widget-old-menu" aria-label="\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0441\u0432\u044f\u0437\u0438"><button type="button" class="gp-contact-widget-old-card" data-gp-contact-open-form><span class="gp-contact-widget-old-copy"><span class="gp-contact-widget-old-title">\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442</span><span class="gp-contact-widget-old-note">\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435</span></span>'+gpContactMessengerIcon("chat")+'</button><a class="gp-contact-widget-old-card" href="/contacts"><span class="gp-contact-widget-old-copy"><span class="gp-contact-widget-old-title">Max</span><span class="gp-contact-widget-old-note">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u043d\u0430\u043b</span></span>'+gpContactMessengerIcon("max")+'</a><a class="gp-contact-widget-old-card" href="https://wa.me/79134487333" target="_blank" rel="noreferrer"><span class="gp-contact-widget-old-copy"><span class="gp-contact-widget-old-title">WhatsApp</span><span class="gp-contact-widget-old-note">\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440</span></span>'+gpContactMessengerIcon("whatsapp")+'</a><a class="gp-contact-widget-old-card" href="/contacts"><span class="gp-contact-widget-old-copy"><span class="gp-contact-widget-old-title">Telegram</span><span class="gp-contact-widget-old-note">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u043d\u0430\u043b</span></span>'+gpContactMessengerIcon("telegram")+'</a></div><div class="gp-contact-widget-panel" role="dialog" aria-label="\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f"><div class="gp-contact-widget-head-v2"><div><div class="gp-compare-kicker-v2">\u041e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f</div><h3>\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c</h3><p>\u041f\u043e\u043c\u043e\u0436\u0435\u043c \u0441 \u043f\u043e\u0434\u0431\u043e\u0440\u043e\u043c, \u0437\u0430\u043a\u0430\u0437\u043e\u043c \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439.</p></div><button type="button" class="gp-mobile-search-close" data-gp-contact-close aria-label="\u0417\u0430\u043a\u0440\u044b\u0442\u044c">'+gpContactSvg("close")+'</button></div><form data-gp-contact-form class="gp-contact-widget-form-v2"><input name="name" autocomplete="name" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"><input name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__"><textarea name="message" placeholder="\u0412\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441"></textarea><button type="submit">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441</button><p class="gp-order-status" data-gp-contact-status></p></form></div><button class="gp-contact-widget-main" type="button" aria-label="\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0441\u0432\u044f\u0437\u0438" aria-expanded="false"><span class="gp-contact-widget-icon is-active">'+gpContactMessengerIcon("max")+'</span><span class="gp-contact-widget-icon">'+gpContactMessengerIcon("whatsapp")+'</span><span class="gp-contact-widget-icon">'+gpContactMessengerIcon("telegram")+'</span><span class="gp-contact-widget-icon">'+gpContactSvg("chat")+'</span></button>';
    root.addEventListener("click",function(event){
      var main=event.target.closest&&event.target.closest(".gp-contact-widget-main");
      var close=event.target.closest&&event.target.closest("[data-gp-contact-close]");
      var openForm=event.target.closest&&event.target.closest("[data-gp-contact-open-form]");
      if(main){
        event.preventDefault();
        if(root.classList.contains("is-open")){
          root.classList.remove("is-open","is-chat");
        }else{
          root.classList.add("is-open");
          root.classList.remove("is-chat");
        }
        gpSyncContactWidgetExpanded73(root);
        return;
      }
      if(close){
        event.preventDefault();
        root.classList.remove("is-open","is-chat");
        gpSyncContactWidgetExpanded73(root);
        return;
      }
      if(openForm){
        event.preventDefault();
        root.classList.add("is-open","is-chat");
        gpSyncContactWidgetExpanded73(root);
        var field=root.querySelector("textarea");
        if(field&&!field.value)field.focus({preventScroll:true});
      }
    });
    root.querySelector("[data-gp-contact-form]").addEventListener("submit",function(event){
      event.preventDefault();
      var status=root.querySelector("[data-gp-contact-status]");
      if(status){
        status.textContent="\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d, \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438.";
        status.classList.add("is-visible");
      }
    });
    document.body.appendChild(root);
    var index=0;
    root.__gpContactIconTimer=setInterval(function(){
      if(!document.body.contains(root)){
        clearInterval(root.__gpContactIconTimer);
        return;
      }
      var icons=[].slice.call(root.querySelectorAll(".gp-contact-widget-main>.gp-contact-widget-icon"));
      if(!icons.length)return;
      index=(index+1)%icons.length;
      icons.forEach(function(icon,i){icon.classList.toggle("is-active",i===index)});
    },1800);
  }
  root.style.display="";
  root.classList.toggle("is-mobile",mobile);
  if(forceOpen){
    root.classList.add("is-open");
    root.classList.toggle("is-chat",!!message);
  }
  if(message){
    var textarea=root.querySelector("textarea");
    if(textarea)textarea.value=message;
    root.setAttribute("data-gp-contact-has-message","true");
  }else{
    root.removeAttribute("data-gp-contact-has-message");
  }
  gpSyncContactWidgetExpanded73(root);
  gpSuppressNativeContactWidget73(root);
  if(!document.documentElement.dataset.gpContactSuppress73){
    document.documentElement.dataset.gpContactSuppress73="1";
    setInterval(function(){
      gpSuppressNativeContactWidget73(document.querySelector(".gp-contact-widget-fallback"));
    },1200);
  }
  return root;
};

gpOpenContactWidget=function(message){
  try{window.dispatchEvent(new CustomEvent("consultation-widget:open",{detail:{source:"cart",view:"widget"}}))}catch(error){}
  setTimeout(function(){ensureContactWidgetFallback(true,message)},80);
};

function normalizeFavoritesSimplePage(){
  var isFavoritesPage=location.search.indexOf("favorites=1")>-1;
  document.body.classList.toggle("gp-favorites-simple-page",isFavoritesPage);
  if(!isFavoritesPage){
    var oldHeader=document.querySelector(".gp-favorites-simple-header");
    if(oldHeader)oldHeader.remove();
    return;
  }
  document.documentElement.classList.add("gp-favorites-route93");
  document.body.classList.add("gp-favorites-route93");
  [].slice.call(document.querySelectorAll(".gp-old-filter-panel,.gp-desktop-filter-panel,.gp-old-mobile-catalog-header")).forEach(function(node){node.remove()});
  var main=document.querySelector("main");
  if(!main)return;
  [].slice.call(main.children||[]).forEach(function(node){
    if(node.matches&&node.matches("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    node.dataset.gpFavoritesCatalogChrome="true";
    node.style.setProperty("display","none","important");
  });
  [].slice.call(main.querySelectorAll("nav,[aria-label*='pagination' i],[class*='pagination' i]")).forEach(function(node){
    if(node.closest&&node.closest("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    node.classList.add("gp-favorites-hidden");
    node.dataset.gpFavoritesCatalogChrome="true";
    node.style.setProperty("display","none","important");
  });
  gpHideFavoritesCatalogChrome93();
}

function normalizeFavoritesNavActive(){
  if(location.search.indexOf("favorites=1")<0)return;
  document.documentElement.classList.add("gp-favorites-route93");
  if(document.body)document.body.classList.add("gp-favorites-route93");
  [].slice.call(document.querySelectorAll("header a,header button,nav a,nav button")).forEach(function(node){
    var href=node.getAttribute&&node.getAttribute("href")||"";
    var text=(node.textContent||node.getAttribute("aria-label")||"").replace(/\s+/g," ").trim();
    var isCatalog=href==="/catalog"||href==="/catalog/all-products"||text==="Каталог"||text==="РљР°С‚Р°Р»РѕРі";
    var isFavorites=href.indexOf("favorites=1")>-1||text==="Избранное"||text==="РР·Р±СЂР°РЅРЅРѕРµ";
    if(isCatalog){
      node.style.setProperty("background","white","important");
      node.style.setProperty("color","var(--brand-text)","important");
      node.style.setProperty("box-shadow","none","important");
      node.style.setProperty("border-color","rgba(255,255,255,.75)","important");
      node.style.setProperty("outline","0","important");
      node.removeAttribute("aria-current");
    }
    if(isFavorites){
      node.style.setProperty("background","var(--brand-primary)","important");
      node.style.setProperty("color","#fff","important");
      node.style.setProperty("border-color","var(--brand-primary)","important");
      node.setAttribute("aria-current","page");
    }
  });
  gpHideFavoritesCatalogChrome93();
}

function gpHideFavoritesCatalogChrome93(){
  if(location.search.indexOf("favorites=1")<0)return;
  var main=document.querySelector("main");
  if(!main)return;
  [].slice.call(main.querySelectorAll("nav,[aria-label*='pagination' i],[class*='pagination' i]")).forEach(function(node){
    if(node.closest&&node.closest("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    node.dataset.gpFavoritesCatalogChrome="true";
    node.style.setProperty("display","none","important");
  });
  [].slice.call(main.querySelectorAll("section,div,nav")).forEach(function(node){
    if(node.matches&&node.matches("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    if(node.closest&&node.closest("[data-gp-storage-action-page],[data-gp-lite-favorites-page]"))return;
    if(node.classList&&node.classList.contains("gp-favorites-simple-header"))return;
    if(node.querySelector&&node.querySelector("article"))return;
    var text=(node.textContent||"").replace(/\s+/g," ").trim();
    if(!text)return;
    var isPagination=/Страница\s+\d+\s+из\s+\d+/i.test(text)||/Назад.*Далее/i.test(text)||/Далее.*Назад/i.test(text)||/РЎС‚СЂР°РЅРёС†Р°\s+\d+\s+РёР·\s+\d+/i.test(text)||/РќР°Р·Р°Рґ.*Р”Р°Р»РµРµ/i.test(text);
    if(!isPagination)return;
    node.dataset.gpFavoritesCatalogChrome="true";
    node.style.setProperty("display","none","important");
  });
}

function gpSetCatalogParam(name,value){
  var url=new URL(location.href);
  if(value===undefined||value===null||value==="")url.searchParams.delete(name);else url.searchParams.set(name,value);
  url.searchParams.delete("page");
  location.assign(url.pathname+(url.search?url.search:""));
}

function ensureDesktopFallbackFilters(){
  if(innerWidth<1024)return;
  if(location.pathname.indexOf("/catalog")!==0&&location.search.indexOf("favorites=1")<0)return;
  if(/Р¤РР›Р¬РўР Р«|Р¤РёР»СЊС‚СЂС‹|РљР°С‚РµРіРѕСЂРёСЏ|РўРѕРІР°СЂРѕРІ РІ СЂСЏРґ/.test(document.body.textContent||""))return;
  var grid=[].slice.call(document.querySelectorAll("main section")).find(function(section){
    return section.querySelector("article")&&String(section.className).indexOf("grid")>-1;
  });
  if(!grid||grid.querySelector(".gp-desktop-filter-panel"))return;
  grid.style.gridTemplateColumns="19rem minmax(0,1fr)";
  grid.classList.add("gp-desktop-filters-restored");
  var aside=document.createElement("aside");
  aside.className="gp-desktop-filter-panel rounded-[1.75rem] border border-white/70 bg-[rgba(249,245,239,0.99)] p-5 shadow-[0_20px_55px_rgba(36,29,25,0.08)]";
  aside.innerHTML=[
    '<div class="sticky top-[6.4rem] max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">',
    '<div class="mb-4"><div class="text-xs uppercase tracking-[0.24em] text-[var(--brand-primary)]">Р¤РёР»СЊС‚СЂС‹</div><p class="mt-2 text-sm leading-6 text-[var(--brand-muted)]">Р’С‹Р±РµСЂРёС‚Рµ РїР°СЂР°РјРµС‚СЂС‹.</p></div>',
    '<section class="mb-3 rounded-[1.35rem] border border-white/70 bg-white/72 p-3.5"><div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">РљР°С‚РµРіРѕСЂРёСЏ</div><select data-gp-filter-category class="field py-2.5 text-sm"><option value="/catalog/all-products">Р’СЃРµ С‚РѕРІР°СЂС‹</option></select></section>',
    '<section class="mb-3 rounded-[1.35rem] border border-white/70 bg-white/72 p-3.5"><div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">РўРѕРІР°СЂРѕРІ РІ СЂСЏРґ</div><div class="flex gap-2"><button data-gp-cols="2" class="gp-filter-pill">2</button><button data-gp-cols="3" class="gp-filter-pill is-active">3</button><button data-gp-cols="4" class="gp-filter-pill">4</button></div></section>',
    '<section class="mb-3 rounded-[1.35rem] border border-white/70 bg-white/72 p-3.5"><div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">РўРѕРІР°СЂРѕРІ РЅР° СЃС‚СЂР°РЅРёС†Рµ</div><div class="flex flex-wrap gap-2"><button data-gp-page-size="8" class="gp-filter-pill">8</button><button data-gp-page-size="12" class="gp-filter-pill is-active">12</button><button data-gp-page-size="16" class="gp-filter-pill">16</button><button data-gp-page-size="24" class="gp-filter-pill">24</button></div></section>',
    '<section class="mb-3 rounded-[1.35rem] border border-white/70 bg-white/72 p-3.5"><div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">РЎРѕСЂС‚РёСЂРѕРІРєР°</div><div class="space-y-2"><button data-gp-sort="sale" class="gp-filter-line">РЎРЅР°С‡Р°Р»Р° Р°РєС†РёРё</button><button data-gp-sort="new" class="gp-filter-line">РЎРЅР°С‡Р°Р»Р° РЅРѕРІРёРЅРєРё</button><button data-gp-sort="price-asc" class="gp-filter-line">Р¦РµРЅР° РїРѕ РІРѕР·СЂР°СЃС‚Р°РЅРёСЋ</button><button data-gp-sort="price-desc" class="gp-filter-line">Р¦РµРЅР° РїРѕ СѓР±С‹РІР°РЅРёСЋ</button></div></section>',
    '<section class="rounded-[1.35rem] border border-white/70 bg-white/72 p-3.5"><div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">Р¦РµРЅР°</div><div class="space-y-2"><button data-gp-price="" class="gp-filter-line">Р’СЃРµ С†РµРЅС‹</button><button data-gp-price="under-4000" class="gp-filter-line">Р”Рѕ 4 000 в‚Ѕ</button><button data-gp-price="4000-6000" class="gp-filter-line">4 000-6 000 в‚Ѕ</button><button data-gp-price="over-6000" class="gp-filter-line">Р‘РѕР»РµРµ 6 000 в‚Ѕ</button></div></section>',
    '</div>'
  ].join("");
  grid.insertBefore(aside,grid.firstChild);
  if(!document.getElementById("gp-filter-fallback-style")){
    var style=document.createElement("style");
    style.id="gp-filter-fallback-style";
    style.textContent=".gp-filter-pill{min-width:2.6rem;border-radius:999px;border:1px solid rgba(175,90,102,.18);background:white;padding:.55rem .85rem;font-size:.875rem;color:var(--brand-text)}.gp-filter-pill.is-active{border-color:var(--brand-text);background:var(--brand-text);color:white}.gp-filter-line{display:block;width:100%;border-radius:999px;border:1px solid rgba(175,90,102,.14);background:white;padding:.6rem .8rem;text-align:left;font-size:.82rem;color:var(--brand-text)}";
    document.head.appendChild(style);
  }
  aside.addEventListener("click",function(event){
    var target=event.target.closest("button");
    if(!target)return;
    if(target.dataset.gpCols){
      try{localStorage.setItem("catalog:desktop-columns",target.dataset.gpCols)}catch(error){}
      location.reload();
    }
    if(target.dataset.gpPageSize)gpSetCatalogParam("pageSize",target.dataset.gpPageSize);
    if(target.hasAttribute("data-gp-sort"))gpSetCatalogParam("sort",target.dataset.gpSort);
    if(target.hasAttribute("data-gp-price"))gpSetCatalogParam("price",target.dataset.gpPrice);
  });
  var select=aside.querySelector("[data-gp-filter-category]");
  if(select){
    select.addEventListener("change",function(){location.assign(select.value)});
    gpFillCurrentCatalogCategorySelect(select);
  }
}

function gpFilterParam(name,value){
  var url=new URL(location.href);
  if(value===undefined||value===null||value==="")url.searchParams.delete(name);else url.searchParams.set(name,value);
  url.searchParams.delete("page");
  location.assign(url.pathname+(url.search?url.search:""));
}

function gpFilterButton(attrs,label,active){
  return '<button type="button" '+attrs+' class="gp-old-filter-pill'+(active?' is-active':'')+'">'+label+'</button>';
}

function gpOldFilterSection(title,inner,open){
  return '<section class="gp-old-filter-section'+(open?' is-open':'')+'"><button type="button" class="gp-old-filter-section-head" data-gp-toggle-section><span>'+title+'</span><span aria-hidden="true">вЊ„</span></button><div class="gp-old-filter-section-body">'+inner+'</div></section>';
}

function gpOldFilterLine(attrs,label,active){
  return '<button type="button" '+attrs+' class="gp-old-filter-line'+(active?' is-active':'')+'">'+label+'</button>';
}

function gpBuildOldFilterPanel(mobile){
  var params=new URLSearchParams(location.search);
  var pageSize=params.get("pageSize")||"12";
  var cols="3";
  try{cols=localStorage.getItem("catalog:desktop-columns")||"3"}catch(error){}
  var sort=params.get("sort")||"sale";
  var special=params.get("special")||"";
  var price=params.get("price")||"";
  var count=gpVisibleArticleCountCached();
  var content=[
    '<div class="gp-old-filter-head"><div><div class="gp-old-filter-kicker">Р¤РёР»СЊС‚СЂС‹</div><p>Р’С‹Р±РµСЂРёС‚Рµ РїР°СЂР°РјРµС‚СЂС‹.</p><div class="gp-old-filter-count">РќР°Р№РґРµРЅРѕ: '+(count||document.querySelectorAll("main article").length)+'</div></div>'+(mobile?'<button type="button" class="gp-old-filter-close" data-gp-close-filters aria-label="Р—Р°РєСЂС‹С‚СЊ С„РёР»СЊС‚СЂС‹">Г—</button>':'<button type="button" class="gp-old-filter-close" data-gp-collapse-filters aria-label="РЎРєСЂС‹С‚СЊ С„РёР»СЊС‚СЂС‹">Г—</button>')+'</div>',
    '<section class="gp-old-filter-box"><div class="gp-old-filter-label">РљР°С‚РµРіРѕСЂРёСЏ</div><label><span class="sr-only">Р’С‹Р±РµСЂРёС‚Рµ РєР°С‚РµРіРѕСЂРёСЋ</span><select data-gp-old-category class="field py-2.5 text-sm"><option value="/catalog/all-products">Р’СЃРµ С‚РѕРІР°СЂС‹</option></select></label></section>',
    mobile?'':('<section class="gp-old-filter-box"><div class="gp-old-filter-label">РўРѕРІР°СЂРѕРІ РІ СЂСЏРґ</div><div class="gp-old-filter-row">'+gpFilterButton('data-gp-cols="2"','2',cols==="2")+gpFilterButton('data-gp-cols="3"','3',cols==="3")+gpFilterButton('data-gp-cols="4"','4',cols==="4")+'</div></section>'),
    mobile?'':('<section class="gp-old-filter-box"><div class="gp-old-filter-label">РўРѕРІР°СЂРѕРІ РЅР° СЃС‚СЂР°РЅРёС†Рµ</div><div class="gp-old-filter-row">'+gpFilterButton('data-gp-page-size="8"','8',pageSize==="8")+gpFilterButton('data-gp-page-size="12"','12',pageSize==="12")+gpFilterButton('data-gp-page-size="16"','16',pageSize==="16")+gpFilterButton('data-gp-page-size="24"','24',pageSize==="24")+'</div></section>'),
    gpOldFilterSection('РЎРѕСЂС‚РёСЂРѕРІРєР°',[
      gpOldFilterLine('data-gp-sort="sale"','РЎРЅР°С‡Р°Р»Р° Р°РєС†РёРё',sort==="sale"),
      gpOldFilterLine('data-gp-sort="new"','РЎРЅР°С‡Р°Р»Р° РЅРѕРІРёРЅРєРё',sort==="new"),
      gpOldFilterLine('data-gp-sort="price-asc"','Р¦РµРЅР° РїРѕ РІРѕР·СЂР°СЃС‚Р°РЅРёСЋ',sort==="price-asc"),
      gpOldFilterLine('data-gp-sort="price-desc"','Р¦РµРЅР° РїРѕ СѓР±С‹РІР°РЅРёСЋ',sort==="price-desc")
    ].join(''),false),
    gpOldFilterSection('РђРєС†РµРЅС‚С‹',[
      gpOldFilterLine('data-gp-special=""','Р’СЃРµ Р°РєС†РµРЅС‚С‹',!special),
      gpOldFilterLine('data-gp-special="sale"','РЎРѕ СЃРєРёРґРєРѕР№',special==="sale"),
      gpOldFilterLine('data-gp-special="new"','РќРѕРІРёРЅРєРё',special==="new"),
      gpOldFilterLine('data-gp-special="featured"','Р‘РµСЃС‚СЃРµР»Р»РµСЂС‹',special==="featured")
    ].join(''),false),
    gpOldFilterSection('Р¦РµРЅР°',[
      gpOldFilterLine('data-gp-price=""','Р’СЃРµ С†РµРЅС‹',!price),
      gpOldFilterLine('data-gp-price="under-4000"','Р”Рѕ 4 000 в‚Ѕ',price==="under-4000"),
      gpOldFilterLine('data-gp-price="4000-6000"','4 000-6 000 в‚Ѕ',price==="4000-6000"),
      gpOldFilterLine('data-gp-price="over-6000"','Р‘РѕР»РµРµ 6 000 в‚Ѕ',price==="over-6000")
    ].join(''),false),
    gpOldFilterSection('РўРёРї РєРѕР¶Рё',gpOldFilterLine('data-gp-skin=""','Р›СЋР±РѕР№ С‚РёРї',!params.get("skin")),false),
    gpOldFilterSection('РўРµРєСЃС‚СѓСЂР°',gpOldFilterLine('data-gp-texture=""','Р’СЃРµ С‚РµРєСЃС‚СѓСЂС‹',!params.get("texture")),false),
    gpOldFilterSection('Р—Р°РґР°С‡Р°',gpOldFilterLine('data-gp-concern=""','Р’СЃРµ Р·Р°РґР°С‡Рё',!params.get("concern")),false),
    gpOldFilterSection('РРЅРіСЂРµРґРёРµРЅС‚С‹',gpOldFilterLine('data-gp-ingredient=""','Р’СЃРµ РёРЅРіСЂРµРґРёРµРЅС‚С‹',!params.get("ingredient")),false),
    gpOldFilterSection('Р¤РѕСЂРјР°С‚',gpOldFilterLine('data-gp-volume=""','Р›СЋР±РѕР№ РѕР±СЉРµРј',!params.get("volume")),false),
    '<button type="button" class="gp-old-filter-reset" data-gp-reset-filters>РЎР±СЂРѕСЃРёС‚СЊ С„РёР»СЊС‚СЂС‹</button>'
  ].join('');
  return '<aside class="gp-old-filter-panel'+(mobile?' is-mobile':'')+'"><div class="gp-old-filter-scroll">'+content+'</div></aside>';
}

function updateOldFilterCounts(){
  var visible=gpVisibleArticleCountCached();
  var count=(location.pathname==="/catalog/all-products"&&location.search.indexOf("favorites=1")<0&&!gpHasActiveCatalogFilters())?2069:visible;
  var setCount=function(value){
    [].slice.call(document.querySelectorAll(".gp-old-filter-count")).forEach(function(node){node.textContent="РќР°Р№РґРµРЅРѕ: "+value});
    [].slice.call(document.querySelectorAll(".gp-old-mobile-header-actions span")).forEach(function(node){
      if(value>0)node.textContent="РќР°Р№РґРµРЅРѕ: "+value;else node.remove();
    });
    updateCategoryHeaderCount(value);
  };
  setCount(count);
}

function gpHasActiveCatalogFilters(){
  var params=new URLSearchParams(location.search);
  return ["special","price","skin","texture","concern","ingredient","volume","q","query","search"].some(function(key){
    return !!params.get(key);
  });
}

function catalogFoundCount(){
  if(location.pathname==="/catalog/all-products"&&location.search.indexOf("favorites=1")<0&&!gpHasActiveCatalogFilters())return 2069;
  return gpVisibleArticleCountCached();
}

function gpUpdateCatalogPagination(){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return;
  var main=document.querySelector("main");
  if(!main)return;
  var params=new URLSearchParams(location.search);
  var pageSize=Math.max(1,Number(params.get("pageSize"))||12);
  var total=Math.max(1,Math.ceil(catalogFoundCount()/pageSize));
  var current=Math.max(1,Math.min(total,Number(params.get("page"))||1));
  var label="РЎС‚СЂР°РЅРёС†Р° "+current+" РёР· "+total;
  var key=location.pathname+"|"+location.search+"|"+label+"|"+gpArticleSignature();
  if(gpPerfCache.catalogPaginationKey===key)return;
  gpPerfCache.catalogPaginationKey=key;
  [].slice.call(main.querySelectorAll("p,span,div")).forEach(function(node){
    if(node.querySelector("article"))return;
    var text=(node.textContent||"").replace(/\s+/g," ").trim();
    if(/^РЎС‚СЂР°РЅРёС†Р°\s+\d+\s+РёР·\s+\d+$/i.test(text))node.textContent=label;
  });
  [].slice.call(main.querySelectorAll("a,button")).forEach(function(node){
    var text=(node.textContent||node.getAttribute("aria-label")||"").replace(/\s+/g," ").trim();
    var pageNumber=/^\d+$/.test(text)?Number(text):0;
    if(pageNumber>total){
      node.style.setProperty("display","none","important");
      return;
    }
    if(/Р”Р°Р»РµРµ|Next/i.test(text)&&current>=total){
      node.setAttribute("aria-disabled","true");
      node.style.setProperty("display","none","important");
    }
  });
}

function gpFindCatalogPaginationShell(node){
  var current=node;
  while(current&&current!==document.body){
    var text=(current.textContent||"").replace(/\s+/g," ").trim();
    if(/РЎС‚СЂР°РЅРёС†Р°\s+\d+\s+РёР·\s+\d+/i.test(text)&&/РќР°Р·Р°Рґ/i.test(text)&&/Р”Р°Р»РµРµ/i.test(text))return current;
    current=current.parentElement;
  }
  return null;
}

function gpSetCatalogPage(page){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return false;
  var next=Math.max(1,Number(page)||1);
  var url=new URL(location.href);
  if(next<=1)url.searchParams.delete("page");else url.searchParams.set("page",String(next));
  location.assign(url.pathname+(url.search||""));
  return true;
}

function gpHandleCatalogPaginationClick(event){
  var button=event.target&&event.target.closest&&event.target.closest("button");
  if(!button)return false;
  var shell=gpFindCatalogPaginationShell(button);
  if(!shell)return false;
  var match=((shell.textContent||"").replace(/\s+/g," ").trim()).match(/РЎС‚СЂР°РЅРёС†Р°\s+(\d+)\s+РёР·\s+(\d+)/i);
  if(!match)return false;
  var current=Number(match[1])||1;
  var total=Number(match[2])||1;
  var label=(button.textContent||button.getAttribute("aria-label")||"").replace(/\s+/g," ").trim();
  var next=current;
  if(/РќР°Р·Р°Рґ/i.test(label))next=current-1;
  else if(/Р”Р°Р»РµРµ|Next/i.test(label))next=current+1;
  else if(/^\d+$/.test(label))next=Number(label)||current;
  else return false;
  next=Math.max(1,Math.min(total,next));
  event.preventDefault();
  event.stopImmediatePropagation();
  if(next===current)return true;
  return gpSetCatalogPage(next);
}

function installCatalogPaginationFix(){
  if(document.documentElement.dataset.gpCatalogPaginationFix==="1")return;
  document.documentElement.dataset.gpCatalogPaginationFix="1";
  document.addEventListener("click",function(event){
    gpHandleCatalogPaginationClick(event);
  },true);
}

function updateCategoryHeaderCount(value){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return;
  var count=(value===undefined||value===null)?catalogFoundCount():Math.max(0,Number(value)||0);
  var header=[].slice.call(document.querySelectorAll("main section")).find(function(section){
    var r=section.getBoundingClientRect();
    return r.width>0&&r.height>40&&section.querySelector("h1")&&!section.querySelector("article");
  });
  if(!header)return;
  var pill=header.querySelector(".gp-category-found-pill");
  var actions=header.querySelector(".gp-old-mobile-header-actions")||header.querySelector("div");
  if(actions){
    var legacy=[].slice.call(actions.querySelectorAll("span")).filter(function(node){return !node.classList.contains("gp-category-found-pill")});
    if(!pill&&legacy.length){
      pill=legacy.shift();
      pill.className="gp-category-found-pill";
    }
    legacy.forEach(function(node){node.remove()});
  }
  if(count<=0){
    if(actions){
      [].slice.call(actions.querySelectorAll("span")).forEach(function(node){
        var text=(node.textContent||"").replace(/\s+/g," ").trim();
        if(node.classList.contains("gp-category-found-pill")||/^\u041d\u0430\u0439\u0434\u0435\u043d\u043e\s*:/i.test(text))node.remove();
      });
    }
    if(pill)pill.remove();
    header.dataset.gpCountValue="0";
    return;
  }
  if(!pill){
    pill=document.createElement("span");
    pill.className="gp-category-found-pill";
    if(actions)actions.appendChild(pill);else header.insertBefore(pill,header.firstChild);
  }
  if(pill.dataset.gpCountValue===String(count))return;
  pill.dataset.gpCountValue=String(count);
  pill.textContent="РќР°Р№РґРµРЅРѕ: "+count;
}

function hideAllProductsCategory(){
  if(location.pathname.indexOf("/catalog")!==0)return;
  if(location.pathname==="/catalog"){
    [].slice.call(document.querySelectorAll('main a[href="/catalog/all-products"]')).forEach(function(link){
      var card=link;
      var current=link.parentElement;
      while(current&&current!==document.body){
        if((/^(ARTICLE|LI|DIV|SECTION)$/).test(current.tagName||"")&&current.childElementCount===1){
          card=current;
          current=current.parentElement;
          continue;
        }
        break;
      }
      card.style.setProperty("display","none","important");
      card.setAttribute("aria-hidden","true");
      link.style.setProperty("display","none","important");
      link.setAttribute("aria-hidden","true");
    });
  }
  if(location.pathname!=="/catalog/all-products"&&gpIsCurrentCatalogCategoryPath(location.pathname)){
    [].slice.call(document.querySelectorAll('select option[value="/catalog/all-products"]')).forEach(function(option){
      option.remove();
    });
  }
}

function normalizeCatalogHeaderActions(){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return;
  var header=gpFindVisibleCategoryHeader();
  var title=header&&header.querySelector("h1");
  var actions=gpFindCategoryActionRow(header);
  if(!header||!title||!actions)return;
  var headerKey="emptyFilters78|"+location.pathname+"|"+location.search+"|"+(title.textContent||"")+"|"+actions.children.length;
  if(header.dataset.gpCategoryActionsKey===headerKey&&actions.querySelector(".gp-category-title-inline"))return;
  header.dataset.gpCategoryActionsKey=headerKey;
  actions.classList.add("gp-category-actions-row");
  var links=[].slice.call(header.querySelectorAll("a[href]"));
  var backLink=links.find(function(link){
    var href=pathOf(link);
    return href&&href!=="/catalog"&&href.indexOf("/catalog/")===0&&href!==location.pathname;
  })||null;
  var allLink=links.find(function(link){return pathOf(link)==="/catalog"})||null;
  if(!allLink){
    allLink=document.createElement("a");
    allLink.href="/catalog";
  }
  allLink.textContent="\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438";
  if(backLink){
    var backHref=pathOf(backLink);
    var backTitle=gpCatalogBackTitleFromPath(backHref);
    backLink.textContent="\u2190 \u041d\u0430\u0437\u0430\u0434 \u0432: "+(backTitle||"\u043a\u0430\u0442\u0430\u043b\u043e\u0433");
    backLink.setAttribute("aria-label",backLink.textContent);
    backLink.classList.add("gp-category-back-link");
  }
  var pill=header.querySelector(".gp-category-found-pill");
  var titleInline=actions.querySelector(".gp-category-title-inline");
  if(!titleInline){
    titleInline=document.createElement("span");
    titleInline.className="gp-category-title-inline";
    actions.appendChild(titleInline);
  }
  if(backLink&&backLink.parentElement!==actions)actions.appendChild(backLink);
  if(allLink.parentElement!==actions)actions.appendChild(allLink);
  if(pill&&pill.parentElement!==actions)actions.appendChild(pill);
  titleInline.textContent=(title.textContent||"").trim();
  title.style.setProperty("display","none","important");
  title.setAttribute("aria-hidden","true");
  var cursor=0;
  if(backLink){
    if(actions.children[cursor]!==backLink)actions.insertBefore(backLink,actions.children[cursor]||null);
    cursor+=1;
  }
  if(actions.children[cursor]!==allLink)actions.insertBefore(allLink,actions.children[cursor]||null);
  cursor+=1;
  if(pill&&actions.children[cursor]!==pill)actions.insertBefore(pill,actions.children[cursor]||null);
  if(titleInline!==actions.lastElementChild)actions.appendChild(titleInline);
}

function gpEnsureMobileCategoryBackLink77(){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return;
  var mobileHeader=[].slice.call(document.querySelectorAll("main section.gp-old-mobile-catalog-header,main section")).find(function(section){
    var rect=section.getBoundingClientRect();
    return rect.width>0&&rect.height>0&&section.querySelector(".gp-old-mobile-header-actions");
  });
  var actions=mobileHeader&&mobileHeader.querySelector(".gp-old-mobile-header-actions");
  if(!actions)return;
  var parentHref="";
  var current=location.pathname;
  [].slice.call(document.querySelectorAll("main section a[href]")).some(function(link){
    var href=pathOf(link);
    if(href&&href!=="/catalog"&&href.indexOf("/catalog/")===0&&href!==current){
      parentHref=href;
      return true;
    }
    return false;
  });
  if(!parentHref)return;
  var backLink=actions.querySelector("a.gp-category-back-link")||[].slice.call(actions.querySelectorAll("a[href]")).find(function(link){
    return pathOf(link)===parentHref;
  });
  if(!backLink){
    backLink=document.createElement("a");
    backLink.href=parentHref;
  }
  var title=gpCatalogBackTitleFromPath(parentHref);
  backLink.textContent="\u2190 \u041d\u0430\u0437\u0430\u0434 \u0432: "+(title||"\u043a\u0430\u0442\u0430\u043b\u043e\u0433");
  backLink.setAttribute("aria-label",backLink.textContent);
  backLink.classList.add("gp-category-back-link");
  if(backLink.parentElement!==actions)actions.insertBefore(backLink,actions.firstElementChild||null);
  else if(actions.firstElementChild!==backLink)actions.insertBefore(backLink,actions.firstElementChild);
  actions.classList.add("gp-pravki-current-nested-row");
}

function ensureCosmeticsBrandLogos(){
  if(location.pathname!=="/catalog/kosmetika")return;
  var key=BRAND_LOGO_VERSION+"|"+gpArticleSignature()+"|"+document.querySelectorAll('main a[href^="/catalog/"]').length;
  if(gpPerfCache.cosmeticsBrandLogoKey===key)return;
  gpPerfCache.cosmeticsBrandLogoKey=key;
  [].slice.call(document.querySelectorAll('main a[href^="/catalog/"]')).forEach(function(card){
    var meta=gpBrandLogoMap[pathOf(card)];
    if(!meta)return;
    card.classList.add("gp-brand-subcategory-card");
    var textWrap=card.querySelector(".gp-brand-subcategory-text");
    if(!textWrap){
      textWrap=document.createElement("span");
      textWrap.className="gp-brand-subcategory-text";
      [].slice.call(card.childNodes||[]).forEach(function(node){
        if(node!==textWrap)textWrap.appendChild(node);
      });
      card.appendChild(textWrap);
    }
    var logoWrap=card.querySelector(".gp-brand-subcategory-logo-wrap");
    var img=card.querySelector(".gp-brand-subcategory-logo");
    if(!logoWrap){
      logoWrap=document.createElement("span");
      logoWrap.className="gp-brand-subcategory-logo-wrap";
    }
    if(!img){
      img=document.createElement("img");
      img.className="gp-brand-subcategory-logo";
      logoWrap.appendChild(img);
    }
    img.alt=meta.alt;
    img.loading="lazy";
    img.decoding="async";
    img.src=meta.src+"?v="+BRAND_LOGO_VERSION;
    if(card.firstElementChild!==logoWrap)card.insertBefore(logoWrap,card.firstElementChild||null);
    var blocks=[].slice.call(textWrap.children||[]).filter(function(node){
      return !!(node&&(node.textContent||"").replace(/\s+/g," ").trim());
    });
    if(!blocks.length){
      var raw=(textWrap.textContent||"").replace(/\s+/g," ").trim();
      if(raw){
        textWrap.textContent="";
        var fallbackCount=document.createElement("span");
        fallbackCount.className="gp-brand-subcategory-count";
        fallbackCount.textContent=((raw.match(/(\d+\s*(?:С‚РѕРІР°СЂ|С‚РѕРІР°СЂР°|С‚РѕРІР°СЂРѕРІ|product[^\s]*)[^]*)/i)||[])[1])||raw;
        textWrap.appendChild(fallbackCount);
        blocks=[fallbackCount];
      }
    }
    var countBlock=blocks.find(function(node){
      return /\d/.test((node.textContent||""))&&/(С‚РѕРІР°СЂ|С‚РѕРІР°СЂР°|С‚РѕРІР°СЂРѕРІ|product)/i.test(gpNormalizeText(node.textContent||""));
    })||blocks[blocks.length-1]||null;
    blocks.forEach(function(node){
      node.classList.remove("gp-brand-subcategory-count","gp-brand-subcategory-name-hidden");
      if(node===countBlock)node.classList.add("gp-brand-subcategory-count");
      else node.classList.add("gp-brand-subcategory-name-hidden");
    });
    if(countBlock&&countBlock.parentElement===textWrap&&textWrap.lastElementChild!==countBlock)textWrap.appendChild(countBlock);
  });
}

function tuneCompareLayoutMetrics(){
  if(location.pathname!=="/compare")return;
  var cards=[].slice.call(document.querySelectorAll(".gp-compare-card-v2"));
  if(!cards.length)return;
  var count=cards.length;
  var desktopLead=9.75;
  var desktopCard=count<=3?11.5:10.9;
  var desktopGap=.55;
  var desktopTemplate=''+desktopLead+'rem repeat('+count+', minmax('+desktopCard+'rem, '+desktopCard+'rem))';
  var desktopWidth=desktopLead+desktopCard*count+desktopGap*Math.max(0,count);
  var desktopShell=document.querySelector(".gp-compare-desktop-shell-v3");
  if(desktopShell)desktopShell.style.setProperty("width",desktopWidth+"rem","important");
  [].slice.call(document.querySelectorAll(".gp-compare-desktop-top-v3,.gp-compare-table-head-v2,.gp-compare-table-shell-v2 .gp-compare-grid-v2")).forEach(function(node){
    node.style.setProperty("grid-template-columns",desktopTemplate,"important");
  });
  var mobileLead=5.4;
  var mobileCard=7.4;
  var mobileTemplate=''+mobileLead+'rem repeat('+count+', minmax('+mobileCard+'rem, '+mobileCard+'rem))';
  var mobileWidth=mobileLead+mobileCard*count+.55*Math.max(0,count);
  var mobileWidthNode=document.querySelector(".gp-compare-mobile-width-v2");
  if(mobileWidthNode)mobileWidthNode.style.setProperty("width",mobileWidth+"rem","important");
  [].slice.call(document.querySelectorAll(".gp-compare-mobile-head-v2,.gp-compare-mobile-row-v2")).forEach(function(node){
    node.style.setProperty("grid-template-columns",mobileTemplate,"important");
  });
}

function gpFindProductGrid(){
  var grids=[].slice.call(document.querySelectorAll("main section")).filter(function(section){
    return section.querySelector("article")&&String(section.className).indexOf("grid")>-1;
  });
  return grids.filter(function(section){return !section.querySelector("section article")}).pop()||grids.pop()||null;
}

function gpFindCatalogFilterHost(){
  if(location.pathname.indexOf("/catalog/")!==0||location.search.indexOf("favorites=1")>-1)return null;
  var productGrid=gpFindProductGrid();
  if(productGrid){
    var parent=productGrid.parentElement;
    while(parent&&parent!==document.body){
      if(parent.tagName==="SECTION"&&String(parent.className).indexOf("grid")>-1&&parent.querySelector("article")){
        return parent;
      }
      parent=parent.parentElement;
    }
    return productGrid;
  }
  var sections=[].slice.call(document.querySelectorAll("main section")).filter(function(section){
    return String(section.className).indexOf("grid")>-1&&!section.querySelector("h1");
  });
  return sections.filter(function(section){
    if(section.querySelector(".gp-old-filter-panel,.gp-desktop-filter-panel"))return true;
    var text=gpNormalizeText(section.textContent||"").toLowerCase();
    return text.indexOf("\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")>-1||text.indexOf("nothing found")>-1;
  }).pop()||sections.pop()||null;
}

function gpApplyCatalogColumns(){
  if(location.search.indexOf("favorites=1")>-1)return;
  var productGrid=gpFindProductGrid();
  if(!productGrid)return;
  var cols="3";
  try{cols=localStorage.getItem("catalog:desktop-columns")||"3"}catch(error){}
  if(innerWidth>=1024){
    productGrid.style.setProperty("grid-template-columns","repeat("+cols+", minmax(0, 1fr))","important");
    productGrid.style.removeProperty("gap");
  }else{
    productGrid.style.setProperty("grid-template-columns","repeat(2, minmax(0, 1fr))","important");
    productGrid.style.setProperty("gap",".75rem","important");
  }
  [].slice.call(document.querySelectorAll("[data-gp-cols]")).forEach(function(button){
    button.classList.toggle("is-active",button.dataset.gpCols===cols);
  });
}

function setDesktopFiltersCollapsed(collapsed){
  try{localStorage.setItem("catalog:filters-collapsed",collapsed?"1":"0")}catch(error){}
  var panel=document.querySelector(".gp-old-filter-panel:not(.is-mobile)");
  if(panel)panel.remove();
  ensureDesktopFloatingFilterButton();
}

function gpWireOldFilterPanel(root){
  if(!root||root.dataset.gpWired==="1")return;
  root.dataset.gpWired="1";
  root.addEventListener("click",function(event){
    var sectionHead=event.target.closest("[data-gp-toggle-section]");
    if(sectionHead){
      sectionHead.closest(".gp-old-filter-section").classList.toggle("is-open");
      return;
    }
    var button=event.target.closest("button");
    if(!button)return;
    if(button.dataset.gpCloseFilters!==undefined){closeOldMobileFilters();return}
    if(button.dataset.gpCollapseFilters!==undefined){setDesktopFiltersCollapsed(true);return}
    if(button.dataset.gpResetFilters!==undefined){location.assign(location.pathname);return}
    if(button.dataset.gpCols){
      try{localStorage.setItem("catalog:desktop-columns",button.dataset.gpCols)}catch(error){}
      gpApplyCatalogColumns();
      return;
    }
    if(button.dataset.gpPageSize)gpFilterParam("pageSize",button.dataset.gpPageSize);
    if(button.hasAttribute("data-gp-sort"))gpFilterParam("sort",button.dataset.gpSort);
    if(button.hasAttribute("data-gp-special"))gpFilterParam("special",button.dataset.gpSpecial);
    if(button.hasAttribute("data-gp-price"))gpFilterParam("price",button.dataset.gpPrice);
    if(button.hasAttribute("data-gp-skin"))gpFilterParam("skin",button.dataset.gpSkin);
    if(button.hasAttribute("data-gp-texture"))gpFilterParam("texture",button.dataset.gpTexture);
    if(button.hasAttribute("data-gp-concern"))gpFilterParam("concern",button.dataset.gpConcern);
    if(button.hasAttribute("data-gp-ingredient"))gpFilterParam("ingredient",button.dataset.gpIngredient);
    if(button.hasAttribute("data-gp-volume"))gpFilterParam("volume",button.dataset.gpVolume);
  });
  var select=root.querySelector("[data-gp-old-category]");
  if(select&&!select.dataset.gpFilled){
    select.dataset.gpFilled="1";
    select.addEventListener("change",function(){location.assign(select.value)});
    gpFillCurrentCatalogCategorySelect(select);
  }
  updateOldFilterCounts();
}

function gpHandleOldFilterClick(event){
  var sectionHead=event.target.closest&&event.target.closest("[data-gp-toggle-section]");
  if(sectionHead&&sectionHead.closest(".gp-old-filter-panel")){
    event.preventDefault();
    event.stopPropagation();
    sectionHead.closest(".gp-old-filter-section").classList.toggle("is-open");
    return true;
  }
  var button=event.target.closest&&event.target.closest("button");
  if(!button)return false;
  if(!button.closest(".gp-old-filter-panel")&&!button.matches("[data-gp-floating-mobile-filter]")&&!button.matches("[data-gp-floating-desktop-filter]"))return false;
  if(button.matches("[data-gp-floating-mobile-filter]")){
    event.preventDefault();
    event.stopPropagation();
    openOldMobileFilters();
    return true;
  }
  if(button.matches("[data-gp-floating-desktop-filter]")){
    event.preventDefault();
    event.stopPropagation();
    setDesktopFiltersCollapsed(false);
    ensureOldRealFilters();
    return true;
  }
  event.preventDefault();
  event.stopPropagation();
  if(button.dataset.gpCloseFilters!==undefined){closeOldMobileFilters();return true}
  if(button.dataset.gpCollapseFilters!==undefined){
    setDesktopFiltersCollapsed(true);
    return true;
  }
  if(button.dataset.gpResetFilters!==undefined){location.assign(location.pathname);return true}
  if(button.dataset.gpCols){
    try{localStorage.setItem("catalog:desktop-columns",button.dataset.gpCols)}catch(error){}
    gpApplyCatalogColumns();
    return true;
  }
  if(button.dataset.gpPageSize){gpFilterParam("pageSize",button.dataset.gpPageSize);return true}
  if(button.hasAttribute("data-gp-sort")){gpFilterParam("sort",button.dataset.gpSort);return true}
  if(button.hasAttribute("data-gp-special")){gpFilterParam("special",button.dataset.gpSpecial);return true}
  if(button.hasAttribute("data-gp-price")){gpFilterParam("price",button.dataset.gpPrice);return true}
  if(button.hasAttribute("data-gp-skin")){gpFilterParam("skin",button.dataset.gpSkin);return true}
  if(button.hasAttribute("data-gp-texture")){gpFilterParam("texture",button.dataset.gpTexture);return true}
  if(button.hasAttribute("data-gp-concern")){gpFilterParam("concern",button.dataset.gpConcern);return true}
  if(button.hasAttribute("data-gp-ingredient")){gpFilterParam("ingredient",button.dataset.gpIngredient);return true}
  if(button.hasAttribute("data-gp-volume")){gpFilterParam("volume",button.dataset.gpVolume);return true}
  return false;
}

function installGlobalOldFilterClicks(){
  if(document.documentElement.dataset.gpOldFilterGlobalClicks==="1")return;
  document.documentElement.dataset.gpOldFilterGlobalClicks="1";
  document.addEventListener("click",gpHandleOldFilterClick,true);
}

function ensureDesktopFloatingFilterButton(){
  var shouldShow=innerWidth>=1024&&location.pathname.indexOf("/catalog/")===0&&location.search.indexOf("favorites=1")<0&&!!gpFindCatalogFilterHost();
  try{shouldShow=shouldShow&&localStorage.getItem("catalog:filters-collapsed")==="1"}catch(error){shouldShow=false}
  var button=document.querySelector("[data-gp-floating-desktop-filter]");
  if(!shouldShow){
    if(button)button.remove();
    return;
  }
  if(!button){
    button=document.createElement("button");
    button.type="button";
    button.dataset.gpFloatingDesktopFilter="true";
    button.className="gp-desktop-floating-filter-button";
    button.innerHTML='<span aria-hidden="true">в°</span>';
    button.addEventListener("click",function(event){
      event.preventDefault();
      event.stopPropagation();
      setDesktopFiltersCollapsed(false);
      ensureOldRealFilters();
    });
    document.body.appendChild(button);
  }
}

function closeOldMobileFilters(){
  var overlay=document.querySelector(".gp-old-filter-overlay");
  if(overlay)overlay.remove();
  document.documentElement.classList.remove("gp-old-filter-lock");
  document.body.classList.remove("gp-old-filter-lock");
}

function openOldMobileFilters(){
  closeOldMobileFilters();
  var overlay=document.createElement("div");
  overlay.className="gp-old-filter-overlay";
  overlay.innerHTML='<button type="button" class="gp-old-filter-backdrop" data-gp-close-filters aria-label="Р—Р°РєСЂС‹С‚СЊ С„РёР»СЊС‚СЂС‹"></button><div class="gp-old-filter-mobile-shell">'+gpBuildOldFilterPanel(true)+'</div>';
  document.body.appendChild(overlay);
  document.documentElement.classList.add("gp-old-filter-lock");
  document.body.classList.add("gp-old-filter-lock");
  gpWireOldFilterPanel(overlay);
}

function ensureFloatingMobileFilterButton(){
  var shouldShow=innerWidth<1024&&location.pathname.indexOf("/catalog/")===0&&location.search.indexOf("favorites=1")<0&&!!gpFindCatalogFilterHost();
  var button=document.querySelector("[data-gp-floating-mobile-filter]");
  if(!shouldShow){
    if(button)button.remove();
    return;
  }
  if(!button){
    button=document.createElement("button");
    button.type="button";
    button.dataset.gpFloatingMobileFilter="true";
    button.className="gp-mobile-floating-filter-button";
    button.innerHTML='<span aria-hidden="true">в°</span>';
    button.addEventListener("click",function(event){
      event.preventDefault();
      event.stopPropagation();
      openOldMobileFilters();
    });
    document.body.appendChild(button);
  }
}

function ensureOldRealFilters(){
  if(location.pathname.indexOf("/catalog")!==0&&location.search.indexOf("favorites=1")<0)return;
  if(location.search.indexOf("favorites=1")>-1){
    normalizeFavoritesSimplePage();
    ensureFloatingMobileFilterButton();
    return;
  }
  var grid=gpFindCatalogFilterHost();
  if(!grid)return;
  ensureFloatingMobileFilterButton();
  ensureDesktopFloatingFilterButton();
  if(innerWidth>=1024){
    var oldFallback=grid.querySelector(".gp-desktop-filter-panel");
    if(oldFallback)oldFallback.remove();
    var collapsed=false;
    try{collapsed=localStorage.getItem("catalog:filters-collapsed")==="1"}catch(error){}
    if(collapsed){
      [].slice.call(grid.querySelectorAll(".gp-old-filter-panel")).forEach(function(node){node.remove()});
      grid.style.gridTemplateColumns="minmax(0,1fr)";
      gpApplyCatalogColumns();
      ensureDesktopFloatingFilterButton();
      return;
    }
    if(!grid.querySelector(".gp-old-filter-panel")){
      grid.style.gridTemplateColumns="19rem minmax(0,1fr)";
      grid.insertAdjacentHTML("afterbegin",gpBuildOldFilterPanel(false));
    }
    gpWireOldFilterPanel(grid.querySelector(".gp-old-filter-panel"));
    gpApplyCatalogColumns();
  }else{
    [].slice.call(grid.querySelectorAll(".gp-old-filter-panel,.gp-desktop-filter-panel")).forEach(function(node){node.remove()});
    grid.style.gridTemplateColumns="";
    var header=[].slice.call(document.querySelectorAll("main section")).find(function(section){
      var r=section.getBoundingClientRect();
      return r.width>0&&r.height>40&&section.querySelector("h1");
    });
    if(!header){
      var container=grid.parentElement;
      if(container&&!container.querySelector(".gp-old-mobile-catalog-header")){
        var title=(document.querySelector("main h1")&&document.querySelector("main h1").textContent)||"Р’СЃРµ С‚РѕРІР°СЂС‹";
        var count=document.querySelectorAll("main article").length;
        header=document.createElement("section");
        header.className="gp-old-mobile-catalog-header";
        header.innerHTML='<div class="gp-old-mobile-header-actions"><a href="/catalog">Р’СЃРµ РєР°С‚РµРіРѕСЂРёРё</a>'+(count>0?'<span>РќР°Р№РґРµРЅРѕ: '+count+'</span>':'')+'</div><h1>'+title+'</h1>';
        container.insertBefore(header,grid);
      }else{
        header=container&&container.querySelector(".gp-old-mobile-catalog-header");
      }
    }
    [].slice.call(document.querySelectorAll("[data-gp-mobile-filter-button]")).forEach(function(node){node.remove()});
    ensureFloatingMobileFilterButton();
    updateOldFilterCounts();
  }
}

function normalizeCatalogHeaderSinglePlaque(){
  if(location.pathname.indexOf("/catalog/")!==0)return;
  var header=[].slice.call(document.querySelectorAll("main section")).find(function(section){
    var r=section.getBoundingClientRect();
    return r.width>0&&r.height>40&&section.querySelector("h1")&&!section.querySelector("article");
  });
  if(!header||header.dataset.gpSinglePlaque==="1")return;
  header.dataset.gpSinglePlaque="1";
  header.style.setProperty("background","rgba(255,255,255,.84)","important");
  header.style.setProperty("border","1px solid rgba(255,255,255,.70)","important");
  header.style.setProperty("box-shadow","0 24px 70px rgba(36,29,25,.10)","important");
  header.style.setProperty("overflow","hidden","important");
}

function markAccountPage(){
  document.body.classList.toggle("gp-pravki-current-account",location.pathname==="/account"||location.pathname.indexOf("/account/")===0);
}

function normalizeAccountHeader(){
  if(location.pathname!=="/account"&&location.pathname.indexOf("/account/")!==0){
    document.body.style.removeProperty("--gp-account-header-height");
    return;
  }
  document.body.style.removeProperty("--gp-account-header-height");
  var grid=document.querySelector("main > div.grid");
  if(grid&&innerWidth<=640){
    grid.style.setProperty("padding-top","0px","important");
    grid.style.setProperty("margin-top","0px","important");
  }
  var info=document.querySelector("main > div.grid > div:first-child");
  if(!info)return;
  info.style.setProperty("position","relative","important");
  info.style.setProperty("top","auto","important");
  info.style.setProperty("align-self","stretch","important");
}

function ensureAccountRuntimeFixes(){
  if(document.getElementById("gp-account-runtime-fixes"))return;
  var style=document.createElement("style");
  style.id="gp-account-runtime-fixes";
  style.textContent=[
    "body.gp-pravki-current-account main>div.grid>div:first-child{position:relative!important;top:auto!important;align-self:stretch!important}",
    "body.gp-pravki-current-account main>div.grid>div:first-child[class*='sticky']{position:relative!important;top:auto!important}",
    "body.gp-pravki-current-account [data-gp-account-auth-fallback] .field{width:100%}",
    "body.gp-pravki-current-account [data-gp-email-code-panel]{margin-top:1rem;border:1px solid rgba(166,95,105,.16);border-radius:1.35rem;background:linear-gradient(180deg,rgba(255,255,255,.96),rgba(248,243,236,.9));padding:1rem;box-shadow:0 18px 42px rgba(38,29,22,.08)}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-title{font-size:.95rem;font-weight:700;color:var(--brand-text)}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-copy{margin-top:.35rem;font-size:.82rem;line-height:1.55;color:var(--brand-muted)}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-row{margin-top:.85rem;display:flex;gap:.6rem;align-items:stretch}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-input{min-width:0;flex:1;border-radius:999px;border:1px solid rgba(166,95,105,.18);background:#fff;padding:.8rem 1rem;font-size:1rem;font-weight:700;letter-spacing:.16em;text-align:center;color:var(--brand-text);outline:none}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-button{border-radius:999px;background:var(--brand-primary);color:#fff;padding:.8rem 1.05rem;font-size:.82rem;font-weight:700;box-shadow:0 16px 34px rgba(175,90,102,.22);transition:transform .18s ease,opacity .18s ease}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-button:hover{transform:translateY(-1px)}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-link{border:0;background:transparent;padding:.35rem 0;font-size:.82rem;color:var(--brand-primary);text-decoration:underline;text-underline-offset:3px}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-status{margin-top:.75rem;border-radius:1rem;padding:.7rem .85rem;font-size:.82rem;line-height:1.45}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-status[data-type='error']{background:#fff1f2;color:#be123c}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-status[data-type='success']{background:#ecfdf5;color:#047857}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-status[data-type='info']{background:#f8f3ec;color:var(--brand-muted)}",
    "body.gp-pravki-current-account [data-gp-email-code-panel] button:disabled{cursor:wait;opacity:.62}",
    "@media(max-width:640px){body.gp-pravki-current-account main>div.grid{padding-top:0!important}body.gp-pravki-current-account main>div.grid>div:first-child{margin-top:0!important}}",
    "@media(max-width:640px){body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-row{flex-direction:column}body.gp-pravki-current-account [data-gp-email-code-panel] .gp-email-code-button{width:100%}}"
  ].join("\n");
  document.head.appendChild(style);
}

var GP_ACCOUNT_LOGIN_ACTION_ID="608a24b7c01b73597b93ed9d93884a81de46aec3d0";
var GP_ACCOUNT_REGISTER_ACTION_ID="60de18a6b253578fa553630fc53cadeee7fd158e26";

function gpAccountTrimText(node){
  return (node&&node.textContent||"").replace(/\s+/g," ").trim();
}

function gpAccountFindTab(label){
  return [].slice.call(document.querySelectorAll("main button")).find(function(button){
    return gpAccountTrimText(button)===label;
  })||null;
}

function gpAccountFormValues(){
  var form=document.querySelector("main form");
  var value=function(name){
    var input=form&&form.querySelector('[name="'+name+'"]');
    return input&&input.value?input.value:"";
  };
  return{name:value("name"),phone:value("phone"),email:value("email"),password:value("password")};
}

function gpAccountActionIndex(form){
  var actionInput=form&&form.querySelector('input[name^="$ACTION_"][name$=":0"]');
  var match=actionInput&&actionInput.name.match(/^\$ACTION_(\d+):0$/);
  return match?match[1]:"1";
}

function gpAccountActionKey(form){
  var keyInput=form&&form.querySelector('input[name="$ACTION_KEY"]');
  return keyInput?keyInput.value:"";
}

function gpAccountHiddenActionHtml(actionId){
  var currentForm=document.querySelector("main form");
  var index=gpAccountActionIndex(currentForm);
  var key=gpAccountActionKey(currentForm);
  return '<input type="hidden" name="$ACTION_REF_'+index+'">'+
    '<input type="hidden" name="$ACTION_'+index+':0" value="'+gpEscapeHtml(JSON.stringify({id:actionId,bound:"$@"+index}))+'">'+
    '<input type="hidden" name="$ACTION_'+index+':1" value="[{}]">'+
    '<input type="hidden" name="$ACTION_KEY" value="'+gpEscapeHtml(key)+'">';
}

function gpAccountFieldHtml(label,name,type,required,placeholder,value){
  return '<label class="block space-y-2"><span class="text-sm text-[var(--brand-muted)]">'+label+'</span><input name="'+name+'" type="'+type+'"'+(required?' required':'')+' class="field" placeholder="'+gpEscapeHtml(placeholder)+'" value="'+gpEscapeHtml(value||"")+'"></label>';
}

function gpAccountSubmitHtml(label){
  return '<button type="submit" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(175,90,102,0.24)] transition hover:-translate-y-0.5">'+label+'</button>';
}

function gpAccountFindRegisterForm(form){
  if(!form||!form.querySelector)return false;
  if(form.getAttribute("data-gp-account-auth-fallback")==="register")return true;
  var submit=form.querySelector('button[type="submit"]');
  var hasRegisterSubmit=submit&&gpAccountTrimText(submit).indexOf("\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442")!==-1;
  return !!(hasRegisterSubmit&&form.querySelector('[name="name"]')&&form.querySelector('[name="email"]')&&form.querySelector('[name="password"]'));
}

function gpAccountEmailValue(form){
  var input=form&&form.querySelector('[name="email"]');
  return input&&input.value?input.value.trim().toLowerCase():"";
}

function gpAccountEnsureHiddenInput(form,name,value){
  var input=form.querySelector('input[name="'+name+'"]');
  if(!input){
    input=document.createElement("input");
    input.type="hidden";
    input.name=name;
    form.appendChild(input);
  }
  input.value=value||"";
}

function gpAccountSetCodeStatus(form,type,message){
  var panel=form&&form.querySelector("[data-gp-email-code-panel]");
  var status=panel&&panel.querySelector("[data-gp-email-code-status]");
  if(!status)return;
  status.dataset.type=type||"info";
  status.textContent=message||"";
  status.hidden=!message;
}

function gpAccountSetInlineNotice(form,type,message){
  var notice=form.querySelector("[data-gp-email-code-inline]");
  if(!notice){
    notice=document.createElement("p");
    notice.setAttribute("data-gp-email-code-inline","");
    notice.className="rounded-2xl px-4 py-3 text-sm";
    var button=form.querySelector('button[type="submit"]');
    form.insertBefore(notice,button||null);
  }
  notice.className="rounded-2xl px-4 py-3 text-sm "+(type==="error"?"bg-rose-50 text-rose-700":type==="success"?"bg-emerald-50 text-emerald-700":"bg-[var(--brand-surface)] text-[var(--brand-muted)]");
  notice.textContent=message||"";
  notice.hidden=!message;
}

function gpAccountCodePanelHtml(email){
  return '<div data-gp-email-code-panel>'+
    '<div class="gp-email-code-title">\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 email</div>'+
    '<div class="gp-email-code-copy">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 6-\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0430 <b>'+gpEscapeHtml(email)+'</b>. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e.</div>'+
    '<div class="gp-email-code-row">'+
      '<input class="gp-email-code-input" data-gp-email-code-input inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000">'+
      '<button type="button" class="gp-email-code-button" data-gp-verify-email-code>\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c</button>'+
    '</div>'+
    '<div class="mt-2 flex flex-wrap gap-3">'+
      '<button type="button" class="gp-email-code-link" data-gp-resend-email-code>\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u0435\u0449\u0435 \u0440\u0430\u0437</button>'+
      '<button type="button" class="gp-email-code-link" data-gp-change-email>\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c email</button>'+
    '</div>'+
    '<div class="gp-email-code-status" data-gp-email-code-status hidden></div>'+
  '</div>';
}

function gpAccountRenderCodeStep(form,email){
  form.dataset.gpPendingEmail=email;
  var old=form.querySelector("[data-gp-email-code-panel]");
  if(old)old.remove();
  var wrapper=document.createElement("div");
  wrapper.innerHTML=gpAccountCodePanelHtml(email);
  var submit=form.querySelector('button[type="submit"]');
  form.insertBefore(wrapper.firstChild,submit||null);
  if(submit){
    submit.disabled=true;
    submit.dataset.gpOriginalText=submit.dataset.gpOriginalText||submit.textContent;
    submit.textContent="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 email";
  }
  var codeInput=form.querySelector("[data-gp-email-code-input]");
  if(codeInput)setTimeout(function(){codeInput.focus()},80);
}

function gpAccountResetCodeStep(form){
  form.dataset.gpPendingEmail="";
  form.dataset.gpEmailVerified="";
  var panel=form.querySelector("[data-gp-email-code-panel]");
  if(panel)panel.remove();
  var submit=form.querySelector('button[type="submit"]');
  if(submit){
    submit.disabled=false;
    if(submit.dataset.gpOriginalText)submit.textContent=submit.dataset.gpOriginalText;
  }
  gpAccountSetInlineNotice(form,"info","");
}

function gpAccountPostJson(url,payload){
  return fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    credentials:"same-origin",
    body:JSON.stringify(payload||{})
  }).then(function(response){
    return response.json().catch(function(){return{ok:false,message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0443\u043b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442."}}).then(function(data){
      if(!response.ok&&data&&data.ok!==true)data.ok=false;
      return data;
    });
  });
}

function gpAccountSendVerificationCode(form,resend){
  var email=gpAccountEmailValue(form);
  var nameInput=form.querySelector('[name="name"]');
  var phoneInput=form.querySelector('[name="phone"]');
  var passwordInput=form.querySelector('[name="password"]');
  if(!email||email.indexOf("@")<1){
    gpAccountSetInlineNotice(form,"error","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email.");
    return Promise.resolve(false);
  }
  if(!passwordInput||String(passwordInput.value||"").length<8){
    gpAccountSetInlineNotice(form,"error","\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.");
    return Promise.resolve(false);
  }
  if(form.dataset.gpSendingCode==="1")return Promise.resolve(false);
  form.dataset.gpSendingCode="1";
  gpAccountSetInlineNotice(form,"info",resend?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0434...":"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f...");
  var panel=form.querySelector("[data-gp-email-code-panel]");
  if(panel)gpAccountSetCodeStatus(form,"info","\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u043e\u0434...");
  return gpAccountPostJson("/api/gp-auth/send-code",{
    email:email,
    name:nameInput&&nameInput.value?nameInput.value:"",
    phone:phoneInput&&phoneInput.value?phoneInput.value:""
  }).then(function(data){
    form.dataset.gpSendingCode="";
    if(data&&data.ok){
      gpAccountRenderCodeStep(form,email);
      gpAccountSetInlineNotice(form,"success",data.message||"\u041a\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 email.");
      gpAccountSetCodeStatus(form,"success",data.message||"\u041a\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d. \u041e\u043d \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 10 \u043c\u0438\u043d\u0443\u0442.");
      return true;
    }
    var message=data&&data.message?data.message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.";
    gpAccountSetInlineNotice(form,"error",message);
    if(panel)gpAccountSetCodeStatus(form,"error",message);
    return false;
  }).catch(function(){
    form.dataset.gpSendingCode="";
    var message="\u0421\u0432\u044f\u0437\u044c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u043a\u043e\u0434\u043e\u0432 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.";
    gpAccountSetInlineNotice(form,"error",message);
    if(panel)gpAccountSetCodeStatus(form,"error",message);
    return false;
  });
}

function gpAccountVerifyCode(form){
  var email=form.dataset.gpPendingEmail||gpAccountEmailValue(form);
  var input=form.querySelector("[data-gp-email-code-input]");
  var button=form.querySelector("[data-gp-verify-email-code]");
  var code=input&&input.value?input.value.replace(/\D/g,""):"";
  if(code.length!==6){
    gpAccountSetCodeStatus(form,"error","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 6 \u0446\u0438\u0444\u0440 \u0438\u0437 \u043f\u0438\u0441\u044c\u043c\u0430.");
    return;
  }
  if(button)button.disabled=true;
  gpAccountSetCodeStatus(form,"info","\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u043a\u043e\u0434...");
  gpAccountPostJson("/api/gp-auth/verify-code",{email:email,code:code}).then(function(data){
    if(data&&data.ok&&data.token){
      gpAccountEnsureHiddenInput(form,"gp_email_verification_token",data.token);
      gpAccountEnsureHiddenInput(form,"gp_email_verified_email",email);
      form.dataset.gpEmailVerified="1";
      gpAccountSetCodeStatus(form,"success","\u041f\u043e\u0447\u0442\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430. \u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e...");
      var submit=form.querySelector('button[type="submit"]');
      if(submit){
        submit.disabled=false;
        submit.textContent="\u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e...";
      }
      setTimeout(function(){
        if(form.requestSubmit)form.requestSubmit(submit||undefined);
        else HTMLFormElement.prototype.submit.call(form);
      },160);
      return;
    }
    if(button)button.disabled=false;
    gpAccountSetCodeStatus(form,"error",data&&data.message?data.message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434.");
  }).catch(function(){
    if(button)button.disabled=false;
    gpAccountSetCodeStatus(form,"error","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043a\u043e\u0434. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.");
  });
}

function ensureAccountEmailVerification(){
  if(document.documentElement.dataset.gpAccountEmailVerification==="1")return;
  document.documentElement.dataset.gpAccountEmailVerification="1";
  document.addEventListener("submit",function(event){
    var form=event.target;
    if(!gpAccountFindRegisterForm(form))return;
    if(form.dataset.gpEmailVerified==="1")return;
    event.preventDefault();
    event.stopPropagation();
    gpAccountSendVerificationCode(form,false);
  },true);
  document.addEventListener("click",function(event){
    var verify=event.target.closest&&event.target.closest("[data-gp-verify-email-code]");
    var resend=event.target.closest&&event.target.closest("[data-gp-resend-email-code]");
    var change=event.target.closest&&event.target.closest("[data-gp-change-email]");
    if(!verify&&!resend&&!change)return;
    var form=(verify||resend||change).closest("form");
    if(!form)return;
    event.preventDefault();
    event.stopPropagation();
    if(verify)gpAccountVerifyCode(form);
    if(resend)gpAccountSendVerificationCode(form,true);
    if(change)gpAccountResetCodeStep(form);
  },true);
  document.addEventListener("input",function(event){
    var input=event.target;
    if(!input||!input.matches||!input.matches("[data-gp-email-code-input]"))return;
    input.value=input.value.replace(/\D/g,"").slice(0,6);
  },true);
}

function gpAccountFormHtml(mode){
  var values=gpAccountFormValues();
  var register=mode==="register";
  var fields=register
    ? [
        gpAccountFieldHtml("\u0418\u043c\u044f","name","text",true,"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",values.name),
        gpAccountFieldHtml("\u0422\u0435\u043b\u0435\u0444\u043e\u043d","phone","text",false,"+7 (999) 000-00-00",values.phone),
        gpAccountFieldHtml("Email","email","email",true,"you@example.com",values.email),
        gpAccountFieldHtml("\u041f\u0430\u0440\u043e\u043b\u044c","password","password",true,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",values.password)
      ].join("")
    : [
        gpAccountFieldHtml("Email","email","email",true,"you@example.com",values.email),
        gpAccountFieldHtml("\u041f\u0430\u0440\u043e\u043b\u044c","password","password",true,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",values.password)
      ].join("");
  return '<form class="space-y-4" action="" enctype="multipart/form-data" method="POST" data-gp-account-auth-fallback="'+mode+'">'+
    gpAccountHiddenActionHtml(register?GP_ACCOUNT_REGISTER_ACTION_ID:GP_ACCOUNT_LOGIN_ACTION_ID)+
    fields+
    gpAccountSubmitHtml(register?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u0430\u0431\u0438\u043d\u0435\u0442")+
  "</form>";
}

function gpAccountSetActiveTab(mode){
  var login=gpAccountFindTab("\u0412\u043e\u0439\u0442\u0438");
  var register=gpAccountFindTab("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f");
  [login,register].forEach(function(button){
    if(!button)return;
    button.type="button";
    button.classList.remove("bg-white","text-[var(--brand-text)]","shadow-[0_12px_30px_rgba(38,29,22,0.08)]","text-[var(--brand-muted)]");
  });
  if(login){
    if(mode==="login")login.classList.add("bg-white","text-[var(--brand-text)]","shadow-[0_12px_30px_rgba(38,29,22,0.08)]");
    else login.classList.add("text-[var(--brand-muted)]");
  }
  if(register){
    if(mode==="register")register.classList.add("bg-white","text-[var(--brand-text)]","shadow-[0_12px_30px_rgba(38,29,22,0.08)]");
    else register.classList.add("text-[var(--brand-muted)]");
  }
}

function gpAccountSwitchAuthMode(mode){
  if(location.pathname!=="/account"&&location.pathname.indexOf("/account/")!==0)return;
  var form=document.querySelector("main form");
  if(!form)return;
  gpAccountSetActiveTab(mode);
  form.outerHTML=gpAccountFormHtml(mode);
}

function ensureAccountAuthFallback(){
  if(location.pathname!=="/account"&&location.pathname.indexOf("/account/")!==0)return;
  if(document.documentElement.dataset.gpAccountAuthFallback==="1")return;
  document.documentElement.dataset.gpAccountAuthFallback="1";
  document.addEventListener("click",function(event){
    var button=event.target.closest&&event.target.closest("button");
    if(!button)return;
    var text=gpAccountTrimText(button);
    var mode=text==="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"?"register":text==="\u0412\u043e\u0439\u0442\u0438"?"login":"";
    if(!mode)return;
    button.type="button";
    setTimeout(function(){
      var form=document.querySelector("main form");
      var hasName=!!(form&&form.querySelector('[name="name"]'));
      if((mode==="register"&&!hasName)||(mode==="login"&&hasName))gpAccountSwitchAuthMode(mode);
    },0);
  },true);
}

function normalizeCompareCards(){
  if(location.pathname!=="/compare")return;
  [].slice.call(document.querySelectorAll("main article")).forEach(function(card){
    if(card.matches&&card.matches(".gp-compare-card-v2,[data-gp-compare-product]"))return;
    card.classList.add("gp-pravki-current-compare-card");
    var blocks=card.children;
    if(blocks[1])blocks[1].classList.add("gp-pravki-current-compare-meta");
    if(blocks[2])blocks[2].classList.add("gp-pravki-current-compare-actions");
  });
}

function cleanupDeletedProductState(){
  if(!window.localStorage||!window.fetch||sessionStorage.getItem("gp-valid-products-cleaned-v20260612"))return;
  sessionStorage.setItem("gp-valid-products-cleaned-v20260612","1");
  fetch("/valid-product-ids.v20260611.json",{cache:"force-cache"}).then(function(r){return r.ok?r.json():null}).then(function(data){
    if(!data||!Array.isArray(data.ids))return;
    var valid=new Set(data.ids),changed=false;
    function cleanArrayKey(key){
      var raw=localStorage.getItem(key);
      if(!raw)return;
      try{
        var arr=JSON.parse(raw);
        if(!Array.isArray(arr))return;
        var next=arr.filter(function(item){
          var id=typeof item==="string"?item:item&&item.productId;
          return id&&valid.has(id);
        });
        if(next.length!==arr.length){
          gpWriteJsonArray(key,next);
          changed=true;
        }
      }catch(error){}
    }
    cleanArrayKey("lumera_compare");
    cleanArrayKey("gp_compare_ids_v1");
    cleanArrayKey("lumera_favorites");
    cleanArrayKey("gp_favorite_ids_v1");
    cleanArrayKey("lumera_cart");
    cleanArrayKey("gp_cart_items_v1");
    if(changed&&!sessionStorage.getItem("gp-valid-products-reloaded-v20260612")){
      sessionStorage.setItem("gp-valid-products-reloaded-v20260612","1");
      location.reload();
    }
  }).catch(function(){});
}

var gpCompanyDetails=[
  ["РћРћРћ","РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\""],
  ["Р®СЂРёРґРёС‡РµСЃРєРёР№ Р°РґСЂРµСЃ","655017, Р РµСЃРїСѓР±Р»РёРєР° РҐР°РєР°СЃРёСЏ, Рі. РђР±Р°РєР°РЅ, СѓР». РўРѕСЂРѕСЃРѕРІРѕ, 9Р°"],
  ["РРќРќ","1901084417"],
  ["РћР“Р Рќ","1081901002028"],
  ["РљРџРџ","190101001"],
  ["Р /РЎ","40702810271000004510"],
  ["Р‘Р°РЅРє","РђР‘РђРљРђРќРЎРљРћР• РћРўР”Р•Р›Р•РќРР• в„– 8602 РџРђРћ РЎР‘Р•Р Р‘РђРќРљ, Рі. РђР±Р°РєР°РЅ"],
  ["Рљ/РЎ","30101810500000000608"],
  ["Р‘РРљ","049514608"],
  ["РўРµР»РµС„РѕРЅ","8-913-448-7333, 8-983-191-03-83"],
  ["Email","Abakan-sib@mail.ru"],
  ["РќР°Р»РѕРіРѕРІС‹Р№ СЂРµР¶РёРј","РЈРЎРќ РґРѕС…РѕРґ - СЂР°СЃС…РѕРґ, РќР”РЎ 5%"],
  ["Р”РёСЂРµРєС‚РѕСЂ","Р§Р°РїС‚С‹РєРѕРІ РђРЅРґСЂРµР№ Р“СЂРёРіРѕСЂСЊРµРІРёС‡"]
];

var gpLegalDocuments={
  payment:{
    title:"РћРїР»Р°С‚Р°",
    intro:"Р—Р°РєР°Р·С‹ РЅР° СЃР°Р№С‚Рµ garmoniyaplus.ru РѕРїР»Р°С‡РёРІР°СЋС‚СЃСЏ РІ СЂСѓР±Р»СЏС… Р Р¤. РџРѕСЃР»Рµ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р° РјРµРЅРµРґР¶РµСЂ РїРѕРґС‚РІРµСЂР¶РґР°РµС‚ РЅР°Р»РёС‡РёРµ С‚РѕРІР°СЂРѕРІ, РёС‚РѕРіРѕРІСѓСЋ СЃСѓРјРјСѓ Рё РґРѕСЃС‚СѓРїРЅС‹Р№ СЃРїРѕСЃРѕР± РѕРїР»Р°С‚С‹.",
    sections:[
      ["РЎРїРѕСЃРѕР±С‹ РѕРїР»Р°С‚С‹",["Р‘Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№ РѕРЅР»Р°Р№РЅ С‡РµСЂРµР· РїР»Р°С‚РµР¶РЅС‹Р№ СЃРµСЂРІРёСЃ Р®Kassa РїРѕСЃР»Рµ РїРѕРґРєР»СЋС‡РµРЅРёСЏ РѕРЅР»Р°Р№РЅ-РѕРїР»Р°С‚С‹.","Р‘РµР·РЅР°Р»РёС‡РЅС‹Рј РїРµСЂРµРІРѕРґРѕРј РЅР° СЂР°СЃС‡РµС‚РЅС‹Р№ СЃС‡РµС‚ РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\" РїРѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Рј СЂРµРєРІРёР·РёС‚Р°Рј.","РРЅРѕР№ СЃРїРѕСЃРѕР± РѕРїР»Р°С‚С‹ РјРѕР¶РµС‚ Р±С‹С‚СЊ СЃРѕРіР»Р°СЃРѕРІР°РЅ СЃ РјРµРЅРµРґР¶РµСЂРѕРј РґРѕ РїРµСЂРµРґР°С‡Рё Р·Р°РєР°Р·Р°."]],
      ["РџРѕСЂСЏРґРѕРє РѕРїР»Р°С‚С‹",["РћРїР»Р°С‚Р° РїСЂРѕРёР·РІРѕРґРёС‚СЃСЏ РїРѕСЃР»Рµ РїСЂРѕРІРµСЂРєРё СЃРѕСЃС‚Р°РІР° Р·Р°РєР°Р·Р° Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РїСЂРѕРґР°РІС†РѕРј.","Р­Р»РµРєС‚СЂРѕРЅРЅС‹Р№ С‡РµРє РЅР°РїСЂР°РІР»СЏРµС‚СЃСЏ РїРѕРєСѓРїР°С‚РµР»СЋ РЅР° СѓРєР°Р·Р°РЅРЅС‹Р№ email РёР»Рё С‚РµР»РµС„РѕРЅ, РµСЃР»Рё СЌС‚Рѕ РїСЂРµРґСѓСЃРјРѕС‚СЂРµРЅРѕ РІС‹Р±СЂР°РЅРЅС‹Рј СЃРїРѕСЃРѕР±РѕРј РѕРїР»Р°С‚С‹.","РџСЂРё РѕС€РёР±РєРµ РѕРїР»Р°С‚С‹ Р·Р°РєР°Р· РЅРµ СЃС‡РёС‚Р°РµС‚СЃСЏ РѕРїР»Р°С‡РµРЅРЅС‹Рј; РїРѕРєСѓРїР°С‚РµР»СЊ РјРѕР¶РµС‚ РїРѕРІС‚РѕСЂРёС‚СЊ РѕРїР»Р°С‚Сѓ РёР»Рё СЃРІСЏР·Р°С‚СЊСЃСЏ СЃ РїСЂРѕРґР°РІС†РѕРј."]]
    ]
  },
  delivery:{
    title:"Р”РѕСЃС‚Р°РІРєР°",
    intro:"Р”РѕСЃС‚Р°РІРєР° СЃРѕРіР»Р°СЃСѓРµС‚СЃСЏ СЃ РїРѕРєСѓРїР°С‚РµР»РµРј РїРѕСЃР»Рµ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р° Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РЅР°Р»РёС‡РёСЏ С‚РѕРІР°СЂРѕРІ.",
    sections:[
      ["РЈСЃР»РѕРІРёСЏ РґРѕСЃС‚Р°РІРєРё",["Р”РѕСЃС‚Р°РІРєР° РІРѕР·РјРѕР¶РЅР° РїРѕ Рі. РђР±Р°РєР°РЅСѓ, Р РµСЃРїСѓР±Р»РёРєРµ РҐР°РєР°СЃРёСЏ Рё РІ РґСЂСѓРіРёРµ СЂРµРіРёРѕРЅС‹ Р Р¤ РїРѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЋ.","РЎРїРѕСЃРѕР± РґРѕСЃС‚Р°РІРєРё, СЃСЂРѕРєРё Рё СЃС‚РѕРёРјРѕСЃС‚СЊ Р·Р°РІРёСЃСЏС‚ РѕС‚ Р°РґСЂРµСЃР°, СЃРѕСЃС‚Р°РІР° Р·Р°РєР°Р·Р° Рё РІС‹Р±СЂР°РЅРЅРѕР№ СЃР»СѓР¶Р±С‹ РґРѕСЃС‚Р°РІРєРё.","РС‚РѕРіРѕРІР°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ РґРѕСЃС‚Р°РІРєРё СЃРѕРѕР±С‰Р°РµС‚СЃСЏ РїРѕРєСѓРїР°С‚РµР»СЋ РґРѕ РѕРїР»Р°С‚С‹ РёР»Рё РїРµСЂРµРґР°С‡Рё Р·Р°РєР°Р·Р°."]],
      ["РџРѕР»СѓС‡РµРЅРёРµ Р·Р°РєР°Р·Р°",["РџСЂРё РїРѕР»СѓС‡РµРЅРёРё РїСЂРѕРІРµСЂСЊС‚Рµ С†РµР»РѕСЃС‚РЅРѕСЃС‚СЊ СѓРїР°РєРѕРІРєРё Рё СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ Р·Р°РєР°Р·Р°.","Р•СЃР»Рё С‚РѕРІР°СЂ РїРѕРІСЂРµР¶РґРµРЅ РёР»Рё СЃРѕСЃС‚Р°РІ Р·Р°РєР°Р·Р° РЅРµ СЃРѕРІРїР°РґР°РµС‚, СЃРѕРѕР±С‰РёС‚Рµ РїСЂРѕРґР°РІС†Сѓ РІ РґРµРЅСЊ РїРѕР»СѓС‡РµРЅРёСЏ."]]
    ]
  },
  returns:{
    title:"Р’РѕР·РІСЂР°С‚",
    intro:"Р’РѕР·РІСЂР°С‚ Рё РѕР±РјРµРЅ С‚РѕРІР°СЂРѕРІ РІС‹РїРѕР»РЅСЏСЋС‚СЃСЏ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤ Рё СѓСЃР»РѕРІРёСЏРјРё РїСЂРѕРґР°Р¶Рё.",
    sections:[
      ["Р’РѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РЅР°РґР»РµР¶Р°С‰РµРіРѕ РєР°С‡РµСЃС‚РІР°",["Р’РѕР·РІСЂР°С‚ РІРѕР·РјРѕР¶РµРЅ, РµСЃР»Рё С‚РѕРІР°СЂ РЅРµ Р±С‹Р» РІ СѓРїРѕС‚СЂРµР±Р»РµРЅРёРё, СЃРѕС…СЂР°РЅРµРЅС‹ С‚РѕРІР°СЂРЅС‹Р№ РІРёРґ, СѓРїР°РєРѕРІРєР°, РїРѕС‚СЂРµР±РёС‚РµР»СЊСЃРєРёРµ СЃРІРѕР№СЃС‚РІР° Рё РґРѕРєСѓРјРµРЅС‚С‹ Рѕ РїРѕРєСѓРїРєРµ.","Р”Р»СЏ РѕС‚РґРµР»СЊРЅС‹С… РєР°С‚РµРіРѕСЂРёР№ РєРѕСЃРјРµС‚РёС‡РµСЃРєРѕР№, РїР°СЂС„СЋРјРµСЂРЅРѕР№, СЃР°РЅРёС‚Р°СЂРЅРѕ-РіРёРіРёРµРЅРёС‡РµСЃРєРѕР№ Рё РјРµРґРёС†РёРЅСЃРєРѕР№ РїСЂРѕРґСѓРєС†РёРё РІРѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РЅР°РґР»РµР¶Р°С‰РµРіРѕ РєР°С‡РµСЃС‚РІР° РјРѕР¶РµС‚ Р±С‹С‚СЊ РѕРіСЂР°РЅРёС‡РµРЅ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤."]],
      ["Р’РѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РЅРµРЅР°РґР»РµР¶Р°С‰РµРіРѕ РєР°С‡РµСЃС‚РІР°",["Р•СЃР»Рё РѕР±РЅР°СЂСѓР¶РµРЅ Р±СЂР°Рє, РїРѕРІСЂРµР¶РґРµРЅРёРµ РёР»Рё РѕС€РёР±РєР° РєРѕРјРїР»РµРєС‚Р°С†РёРё, РїРѕРєСѓРїР°С‚РµР»СЊ РјРѕР¶РµС‚ РѕР±СЂР°С‚РёС‚СЊСЃСЏ Рє РїСЂРѕРґР°РІС†Сѓ РїРѕ С‚РµР»РµС„РѕРЅСѓ РёР»Рё email.","РџРѕСЃР»Рµ РїСЂРѕРІРµСЂРєРё РѕР±СЂР°С‰РµРЅРёСЏ РїСЂРѕРґР°РІРµС† СЃРѕРіР»Р°СЃСѓРµС‚ Р·Р°РјРµРЅСѓ, РІРѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РёР»Рё РІРѕР·РІСЂР°С‚ РґРµРЅРµР¶РЅС‹С… СЃСЂРµРґСЃС‚РІ.","Р”РµРЅСЊРіРё РІРѕР·РІСЂР°С‰Р°СЋС‚СЃСЏ С‚РµРј Р¶Рµ СЃРїРѕСЃРѕР±РѕРј, РєРѕС‚РѕСЂС‹Рј Р±С‹Р»Р° РїСЂРѕРёР·РІРµРґРµРЅР° РѕРїР»Р°С‚Р°, РµСЃР»Рё СЃС‚РѕСЂРѕРЅС‹ РЅРµ СЃРѕРіР»Р°СЃРѕРІР°Р»Рё РёРЅРѕР№ РїРѕСЂСЏРґРѕРє."]]
    ]
  },
  privacy:{
    title:"РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё",
    intro:"РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\" РѕР±СЂР°Р±Р°С‚С‹РІР°РµС‚ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№ СЃР°Р№С‚Р° garmoniyaplus.ru РґР»СЏ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·РѕРІ, РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё, РґРѕСЃС‚Р°РІРєРё Рё РёСЃРїРѕР»РЅРµРЅРёСЏ С‚СЂРµР±РѕРІР°РЅРёР№ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІР°.",
    sections:[
      ["РљР°РєРёРµ РґР°РЅРЅС‹Рµ РѕР±СЂР°Р±Р°С‚С‹РІР°СЋС‚СЃСЏ",["Р¤РРћ, С‚РµР»РµС„РѕРЅ, email, Р°РґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё, СЃРѕСЃС‚Р°РІ Р·Р°РєР°Р·Р°, СЃРѕРѕР±С‰РµРЅРёСЏ РїРѕРєСѓРїР°С‚РµР»СЏ Рё С‚РµС…РЅРёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ РїРѕСЃРµС‰РµРЅРёСЏ СЃР°Р№С‚Р°.","Р”Р°РЅРЅС‹Рµ РїР»Р°С‚РµР¶РµР№ РѕР±СЂР°Р±Р°С‚С‹РІР°СЋС‚СЃСЏ РїР»Р°С‚РµР¶РЅС‹Рј СЃРµСЂРІРёСЃРѕРј Рё Р±Р°РЅРєР°РјРё; СЃР°Р№С‚ РЅРµ С…СЂР°РЅРёС‚ РїРѕР»РЅС‹Рµ РґР°РЅРЅС‹Рµ Р±Р°РЅРєРѕРІСЃРєРёС… РєР°СЂС‚."]],
      ["Р¦РµР»Рё РѕР±СЂР°Р±РѕС‚РєРё",["РћС„РѕСЂРјР»РµРЅРёРµ Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.","РЎРІСЏР·СЊ СЃ РїРѕРєСѓРїР°С‚РµР»РµРј РїРѕ РІРѕРїСЂРѕСЃР°Рј РѕРїР»Р°С‚С‹, РґРѕСЃС‚Р°РІРєРё, РІРѕР·РІСЂР°С‚Р° Рё РєРѕРЅСЃСѓР»СЊС‚Р°С†РёР№.","РСЃРїРѕР»РЅРµРЅРёРµ С‚СЂРµР±РѕРІР°РЅРёР№ Р±СѓС…РіР°Р»С‚РµСЂСЃРєРѕРіРѕ, РЅР°Р»РѕРіРѕРІРѕРіРѕ Рё РїРѕС‚СЂРµР±РёС‚РµР»СЊСЃРєРѕРіРѕ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІР°."]],
      ["РџСЂР°РІР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ",["РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РјРѕР¶РµС‚ Р·Р°РїСЂРѕСЃРёС‚СЊ СѓС‚РѕС‡РЅРµРЅРёРµ, Р±Р»РѕРєРёСЂРѕРІР°РЅРёРµ РёР»Рё СѓРґР°Р»РµРЅРёРµ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…, РµСЃР»Рё РёС… С…СЂР°РЅРµРЅРёРµ РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ Р·Р°РєРѕРЅРѕРј.","РћР±СЂР°С‰РµРЅРёСЏ РїСЂРёРЅРёРјР°СЋС‚СЃСЏ РїРѕ email: Abakan-sib@mail.ru."]]
    ]
  },
  consent:{
    title:"РЎРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РґР°РЅРЅС‹С…",
    intro:"РћСЃС‚Р°РІР»СЏСЏ Р·Р°СЏРІРєСѓ, РѕС„РѕСЂРјР»СЏСЏ Р·Р°РєР°Р· РёР»Рё РѕС‚РїСЂР°РІР»СЏСЏ С„РѕСЂРјСѓ РЅР° СЃР°Р№С‚Рµ garmoniyaplus.ru, РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РґР°РµС‚ СЃРѕРіР»Р°СЃРёРµ РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\" РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С….",
    sections:[
      ["РЎРѕСЃС‚Р°РІ РґР°РЅРЅС‹С…",["РРјСЏ, С‚РµР»РµС„РѕРЅ, email, Р°РґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё, РєРѕРјРјРµРЅС‚Р°СЂРёРё Рє Р·Р°РєР°Р·Сѓ Рё РёРЅС‹Рµ РґР°РЅРЅС‹Рµ, РєРѕС‚РѕСЂС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РїРµСЂРµРґР°РµС‚ С‡РµСЂРµР· СЃР°Р№С‚."]],
      ["Р¦РµР»Рё РѕР±СЂР°Р±РѕС‚РєРё",["РћС„РѕСЂРјР»РµРЅРёРµ Р·Р°РєР°Р·Р°, РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ, РґРѕСЃС‚Р°РІРєР°, РѕРїР»Р°С‚Р°, РІРѕР·РІСЂР°С‚, РЅР°РїСЂР°РІР»РµРЅРёРµ С‡РµРєРѕРІ Рё СЃРІСЏР·СЊ СЃ РїРѕРєСѓРїР°С‚РµР»РµРј."]],
      ["РЎСЂРѕРє Рё РѕС‚Р·С‹РІ СЃРѕРіР»Р°СЃРёСЏ",["РЎРѕРіР»Р°СЃРёРµ РґРµР№СЃС‚РІСѓРµС‚ РґРѕ РґРѕСЃС‚РёР¶РµРЅРёСЏ С†РµР»РµР№ РѕР±СЂР°Р±РѕС‚РєРё РёР»Рё РґРѕ РµРіРѕ РѕС‚Р·С‹РІР°, РµСЃР»Рё РґР°Р»СЊРЅРµР№С€РµРµ С…СЂР°РЅРµРЅРёРµ РґР°РЅРЅС‹С… РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤.","РћС‚Р·С‹РІ СЃРѕРіР»Р°СЃРёСЏ РјРѕР¶РЅРѕ РЅР°РїСЂР°РІРёС‚СЊ РЅР° email: Abakan-sib@mail.ru."]]
    ]
  },
  offer:{
    title:"РџСѓР±Р»РёС‡РЅР°СЏ РѕС„РµСЂС‚Р°",
    intro:"РќР°СЃС‚РѕСЏС‰Р°СЏ РѕС„РµСЂС‚Р° РѕРїСЂРµРґРµР»СЏРµС‚ СѓСЃР»РѕРІРёСЏ РїСЂРѕРґР°Р¶Рё С‚РѕРІР°СЂРѕРІ С‡РµСЂРµР· СЃР°Р№С‚ garmoniyaplus.ru. РџСЂРѕРґР°РІРµС† - РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\".",
    sections:[
      ["РџСЂРµРґРјРµС‚ РѕС„РµСЂС‚С‹",["РџСЂРѕРґР°РІРµС† РѕР±СЏР·СѓРµС‚СЃСЏ РїРµСЂРµРґР°С‚СЊ РїРѕРєСѓРїР°С‚РµР»СЋ С‚РѕРІР°СЂС‹, РїСЂРµРґСЃС‚Р°РІР»РµРЅРЅС‹Рµ РЅР° СЃР°Р№С‚Рµ, Р° РїРѕРєСѓРїР°С‚РµР»СЊ РѕР±СЏР·СѓРµС‚СЃСЏ РїСЂРёРЅСЏС‚СЊ Рё РѕРїР»Р°С‚РёС‚СЊ Р·Р°РєР°Р·.","РРЅС„РѕСЂРјР°С†РёСЏ Рѕ С‚РѕРІР°СЂРµ, С†РµРЅРµ Рё РЅР°Р»РёС‡РёРё СЂР°Р·РјРµС‰Р°РµС‚СЃСЏ РІ РєР°СЂС‚РѕС‡РєР°С… С‚РѕРІР°СЂРѕРІ Рё СѓС‚РѕС‡РЅСЏРµС‚СЃСЏ РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРё Р·Р°РєР°Р·Р°."]],
      ["РћС„РѕСЂРјР»РµРЅРёРµ Р·Р°РєР°Р·Р°",["Р—Р°РєР°Р· РѕС„РѕСЂРјР»СЏРµС‚СЃСЏ С‡РµСЂРµР· РєРѕСЂР·РёРЅСѓ СЃР°Р№С‚Р° РёР»Рё С‡РµСЂРµР· РѕР±СЂР°С‰РµРЅРёРµ Рє РїСЂРѕРґР°РІС†Сѓ.","Р—Р°РєР°Р· СЃС‡РёС‚Р°РµС‚СЃСЏ РїСЂРёРЅСЏС‚С‹Рј РїРѕСЃР»Рµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РїСЂРѕРґР°РІС†РѕРј СЃРѕСЃС‚Р°РІР°, РЅР°Р»РёС‡РёСЏ, С†РµРЅС‹, РѕРїР»Р°С‚С‹ Рё РґРѕСЃС‚Р°РІРєРё."]],
      ["РћРїР»Р°С‚Р°, РґРѕСЃС‚Р°РІРєР° Рё РІРѕР·РІСЂР°С‚",["РЈСЃР»РѕРІРёСЏ РѕРїР»Р°С‚С‹, РґРѕСЃС‚Р°РІРєРё Рё РІРѕР·РІСЂР°С‚Р° СѓРєР°Р·Р°РЅС‹ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёС… СЂР°Р·РґРµР»Р°С… СЃР°Р№С‚Р° Рё СЏРІР»СЏСЋС‚СЃСЏ С‡Р°СЃС‚СЊСЋ РЅР°СЃС‚РѕСЏС‰РµР№ РѕС„РµСЂС‚С‹.","Р’СЃРµ СЂР°СЃС‡РµС‚С‹ РїСЂРѕРёР·РІРѕРґСЏС‚СЃСЏ РІ СЂСѓР±Р»СЏС… Р Р¤."]]
    ]
  }
};

function gpDetailsList(){
  return '<div class="gp-legal-details">'+gpCompanyDetails.map(function(row){
    return '<div><span>'+row[0]+'</span><strong>'+row[1]+'</strong></div>';
  }).join("")+'</div>';
}

function gpLegalHtml(doc){
  var html='<p class="gp-legal-intro">'+doc.intro+'</p>';
  html+=doc.sections.map(function(section){
    return '<section><h3>'+section[0]+'</h3><ul>'+section[1].map(function(item){return '<li>'+item+'</li>';}).join("")+'</ul></section>';
  }).join("");
  html+='<section><h3>Р РµРєРІРёР·РёС‚С‹ РїСЂРѕРґР°РІС†Р°</h3>'+gpDetailsList()+'</section>';
  return html;
}

function openGpLegalModal(key){
  var doc=gpLegalDocuments[key]||gpLegalDocuments.privacy;
  var old=document.querySelector(".gp-legal-modal-root");
  if(old)old.remove();
  var root=document.createElement("div");
  root.className="gp-legal-modal-root";
  root.innerHTML='<div class="gp-legal-backdrop" data-gp-close="1"></div><div class="gp-legal-dialog" role="dialog" aria-modal="true" aria-label="'+doc.title+'"><button class="gp-legal-close" type="button" aria-label="Р—Р°РєСЂС‹С‚СЊ" data-gp-close="1">Г—</button><div class="gp-legal-kicker">Р”РѕРєСѓРјРµРЅС‚</div><h2>'+doc.title+'</h2><div class="gp-legal-content">'+gpLegalHtml(doc)+'</div></div>';
  root.addEventListener("click",function(event){
    if(event.target&&event.target.getAttribute("data-gp-close")==="1")root.remove();
  });
  document.body.appendChild(root);
  document.addEventListener("keydown",function closeOnEsc(event){
    if(event.key==="Escape"){
      root.remove();
      document.removeEventListener("keydown",closeOnEsc);
    }
  });
}

function ensureLegalFooterButtons(){
  var footer=document.querySelector("footer");
  if(!footer||footer.querySelector(".gp-legal-footer-buttons"))return;
  var existing=[].slice.call(footer.querySelectorAll("button")).filter(function(button){
    return /РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё|РЎРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РґР°РЅРЅС‹С…/i.test((button.textContent||"").trim());
  });
  var host=(existing[existing.length-1]&&existing[existing.length-1].parentElement)||footer;
  var wrap=document.createElement("div");
  wrap.className="gp-legal-footer-buttons";
  [
    ["payment","РћРїР»Р°С‚Р°"],
    ["delivery","Р”РѕСЃС‚Р°РІРєР°"],
    ["returns","Р’РѕР·РІСЂР°С‚"],
    ["offer","РћС„РµСЂС‚Р°"]
  ].forEach(function(item){
    var button=document.createElement("button");
    button.type="button";
    button.className=existing[0]?existing[0].className:"gp-legal-footer-button";
    button.textContent=item[1];
    button.setAttribute("data-gp-legal",item[0]);
    wrap.appendChild(button);
  });
  host.appendChild(wrap);
}

function installLegalDocumentHandlers(){
  if(window.__gpLegalDocumentHandlersInstalled)return;
  window.__gpLegalDocumentHandlersInstalled=true;
  document.addEventListener("click",function(event){
    var target=event.target&&event.target.closest&&event.target.closest("button,[data-gp-legal]");
    if(!target)return;
    var text=(target.textContent||"").replace(/\s+/g," ").trim();
    var key=target.getAttribute("data-gp-legal");
    if(!key){
      if(/^РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё$/i.test(text))key="privacy";
      else if(/^РЎРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РґР°РЅРЅС‹С…$/i.test(text))key="consent";
      else if(/^РћРїР»Р°С‚Р°$/i.test(text))key="payment";
      else if(/^Р”РѕСЃС‚Р°РІРєР°$/i.test(text))key="delivery";
      else if(/^Р’РѕР·РІСЂР°С‚$/i.test(text))key="returns";
      else if(/^РћС„РµСЂС‚Р°$/i.test(text))key="offer";
    }
    if(!key||!gpLegalDocuments[key])return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openGpLegalModal(key);
  },true);
}

function addContactRequisites(){
  if(location.pathname!=="/contacts")return;
  var main=document.querySelector("main");
  if(!main||main.querySelector(".gp-requisites-card"))return;
  var anchor=[].slice.call(main.querySelectorAll("section,div")).find(function(node){
    return /РўР•Р›Р•Р¤РћРќ|EMAIL|РђР”Р Р•РЎ/i.test(node.textContent||"");
  })||main.firstElementChild||main;
  var card=document.createElement("section");
  card.className="gp-requisites-card";
  card.innerHTML='<div class="gp-requisites-icon" aria-hidden="true">в–¤</div><div><p class="gp-requisites-label">Р РµРєРІРёР·РёС‚С‹</p><h2>РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\"</h2>'+gpDetailsList()+'</div>';
  anchor.parentElement.insertBefore(card,anchor.nextSibling);
}

/* 2026-06-12: keep footer compact, move YooKassa texts into privacy, shorten contacts requisites. */
gpCompanyDetails=[
  ["РћРћРћ","РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\""],
  ["РРќРќ","1901084417"],
  ["РћР“Р Рќ","1081901002028"]
];

gpLegalDocuments={
  privacy:{
    title:"РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё",
    intro:"РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\" РѕР±СЂР°Р±Р°С‚С‹РІР°РµС‚ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№ СЃР°Р№С‚Р° garmoniyaplus.ru РґР»СЏ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·РѕРІ, РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё, РґРѕСЃС‚Р°РІРєРё, РѕРїР»Р°С‚С‹, РІРѕР·РІСЂР°С‚Р° Рё РёСЃРїРѕР»РЅРµРЅРёСЏ С‚СЂРµР±РѕРІР°РЅРёР№ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІР°.",
    sections:[
      ["РџСЂРѕРґР°РІРµС†",["РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\", РРќРќ 1901084417, РћР“Р Рќ 1081901002028.","РђРґСЂРµСЃ: 655017, Р РµСЃРїСѓР±Р»РёРєР° РҐР°РєР°СЃРёСЏ, Рі. РђР±Р°РєР°РЅ, СѓР». РўРѕСЂРѕСЃРѕРІРѕ, 9Р°.","РўРµР»РµС„РѕРЅ: 8-913-448-7333, 8-983-191-03-83. Email: Abakan-sib@mail.ru."]],
      ["РџРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ РґР°РЅРЅС‹Рµ",["РћР±СЂР°Р±Р°С‚С‹РІР°СЋС‚СЃСЏ РёРјСЏ, С‚РµР»РµС„РѕРЅ, email, Р°РґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё, СЃРѕСЃС‚Р°РІ Р·Р°РєР°Р·Р°, РєРѕРјРјРµРЅС‚Р°СЂРёРё Рє Р·Р°РєР°Р·Сѓ Рё С‚РµС…РЅРёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ РїРѕСЃРµС‰РµРЅРёСЏ СЃР°Р№С‚Р°.","Р”Р°РЅРЅС‹Рµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РґР»СЏ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р°, РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё, РѕРїР»Р°С‚С‹, РґРѕСЃС‚Р°РІРєРё, РІРѕР·РІСЂР°С‚Р°, РЅР°РїСЂР°РІР»РµРЅРёСЏ С‡РµРєРѕРІ Рё СЃРІСЏР·Рё СЃ РїРѕРєСѓРїР°С‚РµР»РµРј.","Р”Р°РЅРЅС‹Рµ РїР»Р°С‚РµР¶РµР№ РѕР±СЂР°Р±Р°С‚С‹РІР°СЋС‚СЃСЏ РїР»Р°С‚РµР¶РЅС‹Рј СЃРµСЂРІРёСЃРѕРј Рё Р±Р°РЅРєР°РјРё; СЃР°Р№С‚ РЅРµ С…СЂР°РЅРёС‚ РїРѕР»РЅС‹Рµ РґР°РЅРЅС‹Рµ Р±Р°РЅРєРѕРІСЃРєРёС… РєР°СЂС‚."]],
      ["РћРїР»Р°С‚Р°",["Р—Р°РєР°Р·С‹ РѕРїР»Р°С‡РёРІР°СЋС‚СЃСЏ РІ СЂСѓР±Р»СЏС… Р Р¤.","Р”РѕСЃС‚СѓРїРЅС‹Рµ СЃРїРѕСЃРѕР±С‹ РѕРїР»Р°С‚С‹: Р±Р°РЅРєРѕРІСЃРєР°СЏ РєР°СЂС‚Р° РѕРЅР»Р°Р№РЅ С‡РµСЂРµР· РїР»Р°С‚РµР¶РЅС‹Р№ СЃРµСЂРІРёСЃ Р®Kassa РїРѕСЃР»Рµ РїРѕРґРєР»СЋС‡РµРЅРёСЏ РѕРЅР»Р°Р№РЅ-РѕРїР»Р°С‚С‹, Р±РµР·РЅР°Р»РёС‡РЅС‹Р№ РїРµСЂРµРІРѕРґ РЅР° СЂР°СЃС‡РµС‚РЅС‹Р№ СЃС‡РµС‚ РёР»Рё РёРЅРѕР№ СЃРїРѕСЃРѕР±, СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Р№ СЃ РјРµРЅРµРґР¶РµСЂРѕРј.","РџРѕСЃР»Рµ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р° РјРµРЅРµРґР¶РµСЂ РїРѕРґС‚РІРµСЂР¶РґР°РµС‚ РЅР°Р»РёС‡РёРµ С‚РѕРІР°СЂРѕРІ, РёС‚РѕРіРѕРІСѓСЋ СЃСѓРјРјСѓ Рё РґРѕСЃС‚СѓРїРЅС‹Р№ СЃРїРѕСЃРѕР± РѕРїР»Р°С‚С‹. РџСЂРё РѕС€РёР±РєРµ РѕРїР»Р°С‚С‹ Р·Р°РєР°Р· РЅРµ СЃС‡РёС‚Р°РµС‚СЃСЏ РѕРїР»Р°С‡РµРЅРЅС‹Рј."]],
      ["Р”РѕСЃС‚Р°РІРєР°",["Р”РѕСЃС‚Р°РІРєР° СЃРѕРіР»Р°СЃСѓРµС‚СЃСЏ СЃ РїРѕРєСѓРїР°С‚РµР»РµРј РїРѕСЃР»Рµ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р° Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РЅР°Р»РёС‡РёСЏ С‚РѕРІР°СЂРѕРІ.","Р”РѕСЃС‚Р°РІРєР° РІРѕР·РјРѕР¶РЅР° РїРѕ Рі. РђР±Р°РєР°РЅСѓ, Р РµСЃРїСѓР±Р»РёРєРµ РҐР°РєР°СЃРёСЏ Рё РІ РґСЂСѓРіРёРµ СЂРµРіРёРѕРЅС‹ Р Р¤ РїРѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЋ.","РЎРїРѕСЃРѕР± РґРѕСЃС‚Р°РІРєРё, СЃСЂРѕРєРё Рё СЃС‚РѕРёРјРѕСЃС‚СЊ Р·Р°РІРёСЃСЏС‚ РѕС‚ Р°РґСЂРµСЃР°, СЃРѕСЃС‚Р°РІР° Р·Р°РєР°Р·Р° Рё РІС‹Р±СЂР°РЅРЅРѕР№ СЃР»СѓР¶Р±С‹ РґРѕСЃС‚Р°РІРєРё. РС‚РѕРіРѕРІР°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ СЃРѕРѕР±С‰Р°РµС‚СЃСЏ РґРѕ РѕРїР»Р°С‚С‹ РёР»Рё РїРµСЂРµРґР°С‡Рё Р·Р°РєР°Р·Р°."]],
      ["Р’РѕР·РІСЂР°С‚",["Р’РѕР·РІСЂР°С‚ Рё РѕР±РјРµРЅ С‚РѕРІР°СЂРѕРІ РІС‹РїРѕР»РЅСЏСЋС‚СЃСЏ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤.","Р’РѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РЅР°РґР»РµР¶Р°С‰РµРіРѕ РєР°С‡РµСЃС‚РІР° РІРѕР·РјРѕР¶РµРЅ, РµСЃР»Рё С‚РѕРІР°СЂ РЅРµ Р±С‹Р» РІ СѓРїРѕС‚СЂРµР±Р»РµРЅРёРё, СЃРѕС…СЂР°РЅРµРЅС‹ С‚РѕРІР°СЂРЅС‹Р№ РІРёРґ, СѓРїР°РєРѕРІРєР°, РїРѕС‚СЂРµР±РёС‚РµР»СЊСЃРєРёРµ СЃРІРѕР№СЃС‚РІР° Рё РґРѕРєСѓРјРµРЅС‚С‹ Рѕ РїРѕРєСѓРїРєРµ.","Р”Р»СЏ РѕС‚РґРµР»СЊРЅС‹С… РєР°С‚РµРіРѕСЂРёР№ РєРѕСЃРјРµС‚РёС‡РµСЃРєРѕР№, РїР°СЂС„СЋРјРµСЂРЅРѕР№, СЃР°РЅРёС‚Р°СЂРЅРѕ-РіРёРіРёРµРЅРёС‡РµСЃРєРѕР№ Рё РјРµРґРёС†РёРЅСЃРєРѕР№ РїСЂРѕРґСѓРєС†РёРё РІРѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РЅР°РґР»РµР¶Р°С‰РµРіРѕ РєР°С‡РµСЃС‚РІР° РјРѕР¶РµС‚ Р±С‹С‚СЊ РѕРіСЂР°РЅРёС‡РµРЅ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤.","РџСЂРё Р±СЂР°РєРµ, РїРѕРІСЂРµР¶РґРµРЅРёРё РёР»Рё РѕС€РёР±РєРµ РєРѕРјРїР»РµРєС‚Р°С†РёРё РїРѕРєСѓРїР°С‚РµР»СЊ РјРѕР¶РµС‚ РѕР±СЂР°С‚РёС‚СЊСЃСЏ РїРѕ С‚РµР»РµС„РѕРЅСѓ РёР»Рё email; РїРѕСЃР»Рµ РїСЂРѕРІРµСЂРєРё РѕР±СЂР°С‰РµРЅРёСЏ РїСЂРѕРґР°РІРµС† СЃРѕРіР»Р°СЃСѓРµС‚ Р·Р°РјРµРЅСѓ, РІРѕР·РІСЂР°С‚ С‚РѕРІР°СЂР° РёР»Рё РІРѕР·РІСЂР°С‚ РґРµРЅРµР¶РЅС‹С… СЃСЂРµРґСЃС‚РІ."]],
      ["РћС„РµСЂС‚Р°",["РРЅС„РѕСЂРјР°С†РёСЏ Рѕ С‚РѕРІР°СЂР°С…, С†РµРЅР°С… Рё РЅР°Р»РёС‡РёРё РЅР° СЃР°Р№С‚Рµ СЏРІР»СЏРµС‚СЃСЏ РїСЂРµРґР»РѕР¶РµРЅРёРµРј РѕС„РѕСЂРјРёС‚СЊ Р·Р°РєР°Р·.","Р—Р°РєР°Р· СЃС‡РёС‚Р°РµС‚СЃСЏ РїСЂРёРЅСЏС‚С‹Рј РїРѕСЃР»Рµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РїСЂРѕРґР°РІС†РѕРј СЃРѕСЃС‚Р°РІР°, РЅР°Р»РёС‡РёСЏ, С†РµРЅС‹, РѕРїР»Р°С‚С‹ Рё РґРѕСЃС‚Р°РІРєРё.","РЈСЃР»РѕРІРёСЏ РѕРїР»Р°С‚С‹, РґРѕСЃС‚Р°РІРєРё Рё РІРѕР·РІСЂР°С‚Р°, СѓРєР°Р·Р°РЅРЅС‹Рµ РІ РЅР°СЃС‚РѕСЏС‰РµРј РґРѕРєСѓРјРµРЅС‚Рµ, СЏРІР»СЏСЋС‚СЃСЏ С‡Р°СЃС‚СЊСЋ СѓСЃР»РѕРІРёР№ РїСЂРѕРґР°Р¶Рё С‚РѕРІР°СЂРѕРІ С‡РµСЂРµР· СЃР°Р№С‚ garmoniyaplus.ru."]],
      ["РџСЂР°РІР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ",["РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РјРѕР¶РµС‚ Р·Р°РїСЂРѕСЃРёС‚СЊ СѓС‚РѕС‡РЅРµРЅРёРµ, Р±Р»РѕРєРёСЂРѕРІР°РЅРёРµ РёР»Рё СѓРґР°Р»РµРЅРёРµ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…, РµСЃР»Рё РёС… С…СЂР°РЅРµРЅРёРµ РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ Р·Р°РєРѕРЅРѕРј.","РћР±СЂР°С‰РµРЅРёСЏ РїСЂРёРЅРёРјР°СЋС‚СЃСЏ РїРѕ email: Abakan-sib@mail.ru."]]
    ]
  },
  consent:{
    title:"РЎРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РґР°РЅРЅС‹С…",
    intro:"РћСЃС‚Р°РІР»СЏСЏ Р·Р°СЏРІРєСѓ, РѕС„РѕСЂРјР»СЏСЏ Р·Р°РєР°Р· РёР»Рё РѕС‚РїСЂР°РІР»СЏСЏ С„РѕСЂРјСѓ РЅР° СЃР°Р№С‚Рµ garmoniyaplus.ru, РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РґР°РµС‚ СЃРѕРіР»Р°СЃРёРµ РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\" РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С….",
    sections:[
      ["РЎРѕСЃС‚Р°РІ РґР°РЅРЅС‹С…",["РРјСЏ, С‚РµР»РµС„РѕРЅ, email, Р°РґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё, РєРѕРјРјРµРЅС‚Р°СЂРёРё Рє Р·Р°РєР°Р·Сѓ Рё РёРЅС‹Рµ РґР°РЅРЅС‹Рµ, РєРѕС‚РѕСЂС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РїРµСЂРµРґР°РµС‚ С‡РµСЂРµР· СЃР°Р№С‚."]],
      ["Р¦РµР»Рё РѕР±СЂР°Р±РѕС‚РєРё",["РћС„РѕСЂРјР»РµРЅРёРµ Р·Р°РєР°Р·Р°, РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ, РґРѕСЃС‚Р°РІРєР°, РѕРїР»Р°С‚Р°, РІРѕР·РІСЂР°С‚, РЅР°РїСЂР°РІР»РµРЅРёРµ С‡РµРєРѕРІ Рё СЃРІСЏР·СЊ СЃ РїРѕРєСѓРїР°С‚РµР»РµРј."]],
      ["РЎСЂРѕРє Рё РѕС‚Р·С‹РІ СЃРѕРіР»Р°СЃРёСЏ",["РЎРѕРіР»Р°СЃРёРµ РґРµР№СЃС‚РІСѓРµС‚ РґРѕ РґРѕСЃС‚РёР¶РµРЅРёСЏ С†РµР»РµР№ РѕР±СЂР°Р±РѕС‚РєРё РёР»Рё РґРѕ РµРіРѕ РѕС‚Р·С‹РІР°, РµСЃР»Рё РґР°Р»СЊРЅРµР№С€РµРµ С…СЂР°РЅРµРЅРёРµ РґР°РЅРЅС‹С… РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕРј Р Р¤.","РћС‚Р·С‹РІ СЃРѕРіР»Р°СЃРёСЏ РјРѕР¶РЅРѕ РЅР°РїСЂР°РІРёС‚СЊ РЅР° email: Abakan-sib@mail.ru."]]
    ]
  }
};

gpLegalHtml=function(doc){
  var html='<p class="gp-legal-intro">'+doc.intro+'</p>';
  html+=doc.sections.map(function(section){
    return '<section><h3>'+section[0]+'</h3><ul>'+section[1].map(function(item){return '<li>'+item+'</li>';}).join("")+'</ul></section>';
  }).join("");
  return html;
};

ensureLegalFooterButtons=function(){
  [].slice.call(document.querySelectorAll(".gp-legal-footer-buttons")).forEach(function(node){
    node.remove();
  });
  ensureFooterInstallIcons();
};

function closeInstallQr(){
  var modal=document.querySelector(".gp-install-qr-modal");
  if(modal)modal.remove();
  document.documentElement.classList.remove("gp-install-qr-open");
}

function openInstallQr(target){
  closeInstallQr();
  var title=target==="android"?"Android":"iOS";
  var modal=document.createElement("div");
  modal.className="gp-install-qr-modal";
  modal.innerHTML='<div class="gp-install-qr-backdrop" data-gp-install-close="1"></div><div class="gp-install-qr-card" role="dialog" aria-modal="true" aria-label="QR-РєРѕРґ РґР»СЏ СЃРєР°С‡РёРІР°РЅРёСЏ РїСЂРёР»РѕР¶РµРЅРёСЏ"><button type="button" class="gp-install-qr-close" data-gp-install-close="1" aria-label="Р—Р°РєСЂС‹С‚СЊ QR-РєРѕРґ">Г—</button><div class="gp-install-qr-eyebrow">РЎРєР°С‡Р°С‚СЊ РїСЂРёР»РѕР¶РµРЅРёРµ</div><h2>QR-РєРѕРґ РґР»СЏ '+title+'</h2><p>РћС‚СЃРєР°РЅРёСЂСѓР№С‚Рµ РєРѕРґ РєР°РјРµСЂРѕР№ С‚РµР»РµС„РѕРЅР°</p><img src="/icons/install-app-qr-20260612.png" alt="QR-РєРѕРґ РґР»СЏ СѓСЃС‚Р°РЅРѕРІРєРё РїСЂРёР»РѕР¶РµРЅРёСЏ" loading="eager"></div>';
  modal.addEventListener("click",function(event){
    if(event.target&&event.target.getAttribute&&event.target.getAttribute("data-gp-install-close"))closeInstallQr();
  });
  document.body.appendChild(modal);
  document.documentElement.classList.add("gp-install-qr-open");
}

document.addEventListener("keydown",function(event){
  if(event.key==="Escape")closeInstallQr();
});

function openInstallInstruction(){
  var from=location.pathname+location.search;
  location.href="/install-app?from="+encodeURIComponent(from||"/");
}

function shouldOpenInstallInstruction(){
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")||
    (window.matchMedia&&(
      window.matchMedia("(max-width: 1023px)").matches||
      window.matchMedia("(pointer: coarse)").matches
    ));
}


function gpInstallGuideProfile(){
  var ua=(navigator.userAgent||"").toLowerCase();
  var isiOS=/iphone|ipad|ipod/.test(ua)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;
  var isYandex=/yabrowser|yowser|yaapp|yasearchbrowser|yandex/.test(ua);
  var isChrome=/crios|chrome|chromium/.test(ua)&&!isYandex;
  var isSafari=isiOS&&/safari/.test(ua)&&!/crios|fxios|edgios|yabrowser/.test(ua);
  if(isiOS&&isSafari)return"ios-safari";
  if(isiOS&&isChrome)return"ios-chrome";
  if(isiOS)return"ios-other";
  if(isYandex)return"android-yandex";
  if(isChrome)return"android-chrome";
  return"android-other";
}

function gpInstallGuideSteps(profile){
  var iosSafari=[
    ["РћС‚РєСЂРѕР№С‚Рµ СЃР°Р№С‚ РІ Safari","Р•СЃР»Рё РІС‹ СЃРµР№С‡Р°СЃ РІ РґСЂСѓРіРѕРј РїСЂРёР»РѕР¶РµРЅРёРё, РЅР°Р¶РјРёС‚Рµ В«РџРѕРґРµР»РёС‚СЊСЃСЏВ» Рё РѕС‚РєСЂРѕР№С‚Рµ СЃС‚СЂР°РЅРёС†Сѓ РІ Safari.","/install-guides/ios-safari-browser.png"],
    ["РќР°Р¶РјРёС‚Рµ РєРЅРѕРїРєСѓ В«РџРѕРґРµР»РёС‚СЊСЃСЏВ»","Р’ Safari РѕРЅР° РЅР°С…РѕРґРёС‚СЃСЏ РІ РЅРёР¶РЅРµР№ РїР°РЅРµР»Рё Р±СЂР°СѓР·РµСЂР°.","/install-guides/ios-safari-sheet.png"],
    ["Р’С‹Р±РµСЂРёС‚Рµ В«РќР° СЌРєСЂР°РЅ Р”РѕРјРѕР№В»","РџСЂРѕРєСЂСѓС‚РёС‚Рµ СЃРїРёСЃРѕРє РґРµР№СЃС‚РІРёР№, РµСЃР»Рё РїСѓРЅРєС‚ РЅРµ РІРёРґРµРЅ СЃСЂР°Р·Сѓ.","/install-guides/ios-safari-sheet.png"],
    ["РќР°Р¶РјРёС‚Рµ В«Р”РѕР±Р°РІРёС‚СЊВ»","РџРѕСЃР»Рµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РёРєРѕРЅРєР° В«Р“Р°СЂРјРѕРЅРёСЏРџР»СЋСЃВ» РїРѕСЏРІРёС‚СЃСЏ РЅР° СЌРєСЂР°РЅРµ С‚РµР»РµС„РѕРЅР°.","/install-guides/ios-add-confirm.png"],
    ["РћС‚РєСЂРѕР№С‚Рµ РїСЂРёР»РѕР¶РµРЅРёРµ СЃ СЌРєСЂР°РЅР° С‚РµР»РµС„РѕРЅР°","Р—Р°РїСѓСЃРєР°Р№С‚Рµ СЃР°Р№С‚ С‡РµСЂРµР· РЅРѕРІСѓСЋ РёРєРѕРЅРєСѓ, РєР°Рє РѕР±С‹С‡РЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ.","/install-guides/ios-home.png"]
  ];
  var iosChrome=[
    ["РћС‚РєСЂРѕР№С‚Рµ СЃР°Р№С‚ РІ Chrome РЅР° iPhone","РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ РѕС‚РєСЂС‹С‚Р° СЃС‚СЂР°РЅРёС†Р° garmoniyaplus.ru.","/install-guides/ios-chrome-share.png"],
    ["РќР°Р¶РјРёС‚Рµ В«РџРѕРґРµР»РёС‚СЊСЃСЏВ»","РљРЅРѕРїРєР° РЅР°С…РѕРґРёС‚СЃСЏ РІ РїР°РЅРµР»Рё Chrome.","/install-guides/ios-chrome-share.png"],
    ["РћС‚РєСЂРѕР№С‚Рµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РґРµР№СЃС‚РІРёСЏ","Р•СЃР»Рё РїСѓРЅРєС‚Р° СѓСЃС‚Р°РЅРѕРІРєРё РЅРµС‚ СЃСЂР°Р·Сѓ, РЅР°Р¶РјРёС‚Рµ В«Р•С‰С‘В».","/install-guides/ios-chrome-more.png"],
    ["Р’С‹Р±РµСЂРёС‚Рµ РґРѕР±Р°РІР»РµРЅРёРµ РЅР° РіР»Р°РІРЅС‹Р№ СЌРєСЂР°РЅ","РџРѕРґС‚РІРµСЂРґРёС‚Рµ РґРѕР±Р°РІР»РµРЅРёРµ РїСЂРёР»РѕР¶РµРЅРёСЏ.","/install-guides/ios-chrome-confirm.png"],
    ["РћС‚РєСЂРѕР№С‚Рµ РёРєРѕРЅРєСѓ В«Р“Р°СЂРјРѕРЅРёСЏРџР»СЋСЃВ»","РРєРѕРЅРєР° РїРѕСЏРІРёС‚СЃСЏ РЅР° РіР»Р°РІРЅРѕРј СЌРєСЂР°РЅРµ iPhone.","/install-guides/ios-home.png"]
  ];
  var androidChrome=[
    ["РћС‚РєСЂРѕР№С‚Рµ СЃР°Р№С‚ РІ Chrome","РџСЂРѕРІРµСЂСЊС‚Рµ, С‡С‚Рѕ РѕС‚РєСЂС‹С‚ garmoniyaplus.ru, Р·Р°С‚РµРј РЅР°Р¶РјРёС‚Рµ РјРµРЅСЋ СЃ С‚СЂРµРјСЏ С‚РѕС‡РєР°РјРё.","/install-guides/android-chrome-browser.png"],
    ["Р’С‹Р±РµСЂРёС‚Рµ В«Р”РѕР±Р°РІРёС‚СЊ РЅР° РіР»Р°РІРЅС‹Р№ СЌРєСЂР°РЅВ»","Р’ РјРµРЅСЋ Chrome РЅР°Р¶РјРёС‚Рµ РїСѓРЅРєС‚ СѓСЃС‚Р°РЅРѕРІРєРё РёР»Рё РґРѕР±Р°РІР»РµРЅРёСЏ РЅР° СЌРєСЂР°РЅ.","/install-guides/android-chrome-menu.png"],
    ["РџРѕРґС‚РІРµСЂРґРёС‚Рµ СѓСЃС‚Р°РЅРѕРІРєСѓ","Р•СЃР»Рё РїРѕСЏРІРёС‚СЃСЏ РІС‹Р±РѕСЂ, РЅР°Р¶РјРёС‚Рµ В«РЈСЃС‚Р°РЅРѕРІРёС‚СЊВ» РёР»Рё В«РЎРѕР·РґР°С‚СЊ СЏСЂР»С‹РєВ».","/install-guides/android-chrome-dialog.png"],
    ["РћС‚РєСЂРѕР№С‚Рµ РїСЂРёР»РѕР¶РµРЅРёРµ СЃ СЂР°Р±РѕС‡РµРіРѕ СЃС‚РѕР»Р°","РРєРѕРЅРєР° РїРѕСЏРІРёС‚СЃСЏ РЅР° СЌРєСЂР°РЅРµ С‚РµР»РµС„РѕРЅР° СЃСЂРµРґРё РїСЂРёР»РѕР¶РµРЅРёР№."]
  ];
  var androidYandex=[
    ["РћС‚РєСЂРѕР№С‚Рµ СЃР°Р№С‚ РІ РЇРЅРґРµРєСЃ Р‘СЂР°СѓР·РµСЂРµ","РќР°Р¶РјРёС‚Рµ РјРµРЅСЋ Р±СЂР°СѓР·РµСЂР° СЂСЏРґРѕРј СЃРѕ СЃС‚СЂРѕРєРѕР№ Р°РґСЂРµСЃР°.","/install-guides/android-yandex-browser.png"],
    ["Р’С‹Р±РµСЂРёС‚Рµ РґРѕР±Р°РІР»РµРЅРёРµ СЏСЂР»С‹РєР°","РќР°Р¶РјРёС‚Рµ В«Р”РѕР±Р°РІРёС‚СЊ СЏСЂР»С‹Рє РЅР° СЂР°Р±РѕС‡РёР№ СЃС‚РѕР»В» РёР»Рё РїРѕС…РѕР¶РёР№ РїСѓРЅРєС‚.","/install-guides/android-yandex-menu.png"],
    ["РџРѕРґС‚РІРµСЂРґРёС‚Рµ СЃРѕР·РґР°РЅРёРµ СЏСЂР»С‹РєР°","Р•СЃР»Рё С‚РµР»РµС„РѕРЅ СЃРїСЂРѕСЃРёС‚ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ, РЅР°Р¶РјРёС‚Рµ В«Р”РѕР±Р°РІРёС‚СЊВ» РёР»Рё В«РЎРѕР·РґР°С‚СЊВ».","/install-guides/android-yandex-menu.png"],
    ["РћС‚РєСЂРѕР№С‚Рµ В«Р“Р°СЂРјРѕРЅРёСЏРџР»СЋСЃВ» СЃ СЂР°Р±РѕС‡РµРіРѕ СЃС‚РѕР»Р°","РџРѕСЃР»Рµ РґРѕР±Р°РІР»РµРЅРёСЏ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РЅРѕРІСѓСЋ РёРєРѕРЅРєСѓ РєР°Рє РїСЂРёР»РѕР¶РµРЅРёРµ."]
  ];
  if(profile==="ios-safari")return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ iPhone РІ Safari",steps:iosSafari};
  if(profile==="ios-chrome")return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ iPhone РІ Chrome",steps:iosChrome};
  if(profile==="ios-other")return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ iPhone",steps:iosSafari,extra:"Р•СЃР»Рё РІС‹ РѕС‚РєСЂС‹Р»Рё СЃР°Р№С‚ РІ РїСЂРёР»РѕР¶РµРЅРёРё РЇРЅРґРµРєСЃ СЃ РђР»РёСЃРѕР№ РёР»Рё РІРЅСѓС‚СЂРё РјРµСЃСЃРµРЅРґР¶РµСЂР°, СЃРЅР°С‡Р°Р»Р° РѕС‚РєСЂРѕР№С‚Рµ СЃС‚СЂР°РЅРёС†Сѓ РІ Safari РёР»Рё Chrome."};
  if(profile==="android-yandex")return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ Android РІ РЇРЅРґРµРєСЃ Р‘СЂР°СѓР·РµСЂРµ",steps:androidYandex};
  if(profile==="android-chrome")return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ Android РІ Chrome",steps:androidChrome};
  return{title:"РРЅСЃС‚СЂСѓРєС†РёСЏ РґР»СЏ Android",steps:androidChrome,extra:"Р•СЃР»Рё Сѓ РІР°СЃ РЇРЅРґРµРєСЃ Р‘СЂР°СѓР·РµСЂ, РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РїСѓРЅРєС‚ В«Р”РѕР±Р°РІРёС‚СЊ СЏСЂР»С‹Рє РЅР° СЂР°Р±РѕС‡РёР№ СЃС‚РѕР»В» РІ РјРµРЅСЋ Р±СЂР°СѓР·РµСЂР°."};
}

function ensureMobileInstallGuide(){
  if(location.pathname!=="/install-app")return;
  var isMobile=window.matchMedia&&window.matchMedia("(max-width: 1023px)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"");
  if(!isMobile)return;
  var main=document.querySelector("main");
  if(!main)return;
  var root=main.querySelector("section")||main;
  var existing=root.querySelector(".gp-install-old-guide");
  if(existing&&existing.dataset.gpVersion==="old-ref-20260612b")return;
  if(existing)existing.remove();
  document.body.classList.add("gp-install-guide-mobile","gp-install-guide-old-ref");
  [].slice.call(root.children).forEach(function(child,index){
    if(index>0&&!child.classList.contains("gp-install-old-guide"))child.classList.add("gp-install-desktop-only-hidden");
  });
  var guide=gpInstallGuideSteps(gpInstallGuideProfile());
  var block=document.createElement("section");
  block.className="gp-install-old-guide";
  block.dataset.gpVersion="old-ref-20260612b";
  block.style.setProperty("margin-top","1rem","important");
  block.innerHTML='<h1>'+guide.title+'</h1>'+(guide.extra?'<p class="gp-install-old-note">'+guide.extra+'</p>':'')+'<div class="gp-install-old-grid">'+guide.steps.slice(0,4).map(function(step,index){
    return '<article class="gp-install-old-step"><div class="gp-install-old-step-head"><span>'+(index+1)+'</span><div><h2>'+step[0]+'</h2><p>'+step[1]+'</p></div></div><div class="gp-install-old-art">'+(step[2]?'<img src="'+step[2]+'" alt="'+step[0]+'" loading="lazy">':"")+'</div></article>';
  }).join("")+'</div>';
  root.appendChild(block);
}

function ensureFooterInstallIcons(){
  var footer=document.querySelector("footer");
  if(!footer||footer.querySelector(".gp-footer-install"))return;
  var desktopHost=footer.querySelector(".hidden.w-full")||footer.querySelector("div");
  var mobileHost=footer.querySelector(".md\\:hidden")||footer.querySelector("div");
  function makeBlock(isMobile){
    var block=document.createElement("section");
    block.className="gp-footer-install";
    block.innerHTML='<div class="gp-footer-install-title">РЎРєР°С‡Р°С‚СЊ РїСЂРёР»РѕР¶РµРЅРёРµ</div><div class="gp-footer-install-icons"><button type="button" class="gp-install-device" data-gp-install-target="iphone" aria-label="РџРѕРєР°Р·Р°С‚СЊ QR-РєРѕРґ РґР»СЏ iOS"><span class="gp-device-glyph gp-device-iphone" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16.2 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.8 3-.8s1.8.8 3 .8 2.1-1.1 2.8-2.2c.9-1.3 1.3-2.6 1.3-2.7 0 0-2.9-1.1-2.9-3.6z"/><path d="M14 6.1c.6-.8 1.1-1.8 1-2.9-1 .1-2 .7-2.7 1.5-.6.7-1.1 1.7-1 2.8 1 .1 2-.6 2.7-1.4z"/></svg></span><span class="gp-install-device-label">iOS</span></button><button type="button" class="gp-install-device" data-gp-install-target="android" aria-label="РџРѕРєР°Р·Р°С‚СЊ QR-РєРѕРґ РґР»СЏ Android"><span class="gp-device-glyph gp-device-android" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.2 9.1h9.6v7.7c0 .7-.5 1.2-1.2 1.2h-.7v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9V18h-2.2v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9V18h-.7c-.7 0-1.2-.5-1.2-1.2V9.1zm-2.1.2c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-5.1c0-.5.4-.9.9-.9zm13.8 0c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-5.1c0-.5.4-.9.9-.9zM8.1 5.1 6.8 3.8c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.5 1.5c.9-.4 1.9-.6 3-.6s2.1.2 3 .6l1.5-1.5c.2-.2.5-.2.7 0s.2.5 0 .7l-1.3 1.3c.9.8 1.5 1.8 1.7 3H5.9c.2-1.2.8-2.2 1.7-3zm2 1.3c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7zm3.8 0c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7z"/></svg></span><span class="gp-install-device-label">Android</span></button></div>';
    [].slice.call(block.querySelectorAll("[data-gp-install-target]")).forEach(function(button){
      button.addEventListener("click",function(){
        if(shouldOpenInstallInstruction()){
          openInstallInstruction();
          return;
        }
        openInstallQr(button.getAttribute("data-gp-install-target"));
      });
    });
    if(isMobile)block.classList.add("gp-footer-install-mobile");
    return block;
  }
  if(desktopHost)desktopHost.insertBefore(makeBlock(false),desktopHost.firstChild);
  if(mobileHost&&mobileHost!==desktopHost)mobileHost.insertBefore(makeBlock(true),mobileHost.firstChild);
}

function replaceContactsText(){
  if(location.pathname!=="/contacts")return;
  var main=document.querySelector("main");
  if(!main)return;
  [
    ["+7 123 456 78 90","8-913-448-7333, 8-983-191-03-83"],
    ["info@garmoniya-plus.ru","Abakan-sib@mail.ru"],
    ["РњРѕСЃРєРІР°, Р¦РІРµС‚РЅРѕР№ Р±СѓР»СЊРІР°СЂ, 21СЃ3","655017, Р РµСЃРїСѓР±Р»РёРєР° РҐР°РєР°СЃРёСЏ, Рі. РђР±Р°РєР°РЅ, СѓР». РўРѕСЂРѕСЃРѕРІРѕ, 9Р°"]
  ].forEach(function(pair){
    var walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);
    var nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(node.nodeValue&&node.nodeValue.indexOf(pair[0])>-1)node.nodeValue=node.nodeValue.replaceAll(pair[0],pair[1]);
    });
  });
  [].slice.call(main.querySelectorAll('a[href^="tel:"]')).forEach(function(link){
    link.href="tel:+79134487333";
  });
  [].slice.call(main.querySelectorAll('a[href^="mailto:"]')).forEach(function(link){
    link.href="mailto:Abakan-sib@mail.ru";
  });
}

addContactRequisites=function(){
  if(location.pathname!=="/contacts")return;
  var main=document.querySelector("main");
  if(!main)return;
  var existing=main.querySelector(".gp-requisites-card");
  if(existing&&existing.dataset.gpRequisitesVersion==="short-20260612")return;
  if(existing)existing.remove();
  var anchor=[].slice.call(main.querySelectorAll("section,div")).find(function(node){
    return /РўР•Р›Р•Р¤РћРќ|EMAIL|РђР”Р Р•РЎ/i.test(node.textContent||"");
  })||main.firstElementChild||main;
  var card=document.createElement("section");
  card.className="gp-requisites-card";
  card.dataset.gpRequisitesVersion="short-20260612";
  card.innerHTML='<div class="gp-requisites-icon" aria-hidden="true">в–¤</div><div><p class="gp-requisites-label">Р РµРєРІРёР·РёС‚С‹</p><h2>РћРћРћ \"Р“Р°СЂРјРѕРЅРёСЏ РџР»СЋСЃ\"</h2>'+gpDetailsList()+'</div>';
  anchor.parentElement.insertBefore(card,anchor.nextSibling);
};

function markProductDetailPage(){
  document.body.classList.toggle("gp-product-detail-page",/^\/product\//.test(location.pathname));
}

function ensurePriceCardFixStyle(){
  if(document.getElementById("gp-price-card-fix-20260617"))return;
  var style=document.createElement("style");
  style.id="gp-price-card-fix-20260617";
  style.textContent=[
    "body.gp-pravki-current-catalog-list main article{align-self:start!important;height:auto!important;min-height:0!important;overflow:visible!important}",
    "body.gp-pravki-current-catalog-list main section:has(.gp-old-filter-panel) article{align-self:start!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/']{height:auto!important;min-height:0!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/']:has(img){overflow:hidden!important;background:#fff!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] img{object-fit:contain!important;object-position:center!important;padding:.35rem!important;background:#fff!important}",
    "body.gp-product-detail-page main img{object-fit:contain!important;object-position:center!important;background:#fff!important}",
    "body.gp-favorites-storage-ready .gp-favorites-storage-image img,.gp-storage-action-card img{object-fit:contain!important;object-position:center!important;padding:.35rem!important;background:#fff!important}"
  ].join("");
  document.head.appendChild(style);
}

function ensureFavoritesCard93Style(){
  if(document.getElementById("gp-favprice95-style"))return;
  var style=document.createElement("style");
  style.id="gp-favprice95-style";
  style.textContent=[
    "body.gp-favorites-storage-ready .gp-favorites-storage-card{position:relative!important;isolation:isolate!important;overflow:hidden!important;border-radius:1.65rem!important;border:1px solid rgba(255,255,255,.78)!important;background:rgba(255,255,255,.9)!important;box-shadow:0 18px 48px rgba(36,29,25,.075)!important}",
    "body.gp-favorites-storage-ready .gp-favorites-storage-image{display:block!important;overflow:hidden!important;border-radius:0!important;background:#fff!important}",
    ".gp-favorites-storage-heart{position:absolute!important;top:1rem!important;right:1rem!important;left:auto!important;bottom:auto!important;z-index:86!important;display:inline-flex!important;width:2.75rem!important;height:2.75rem!important;min-width:2.75rem!important;min-height:2.75rem!important;align-items:center!important;justify-content:center!important;border-radius:999px!important;border:1px solid rgba(175,90,102,.28)!important;background:rgba(255,255,255,.94)!important;color:var(--brand-primary)!important;box-shadow:0 14px 30px rgba(36,29,25,.1)!important;pointer-events:auto!important;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease!important}",
    ".gp-favorites-storage-heart:hover{transform:translateY(-1px)!important;border-color:rgba(175,90,102,.46)!important;box-shadow:0 18px 36px rgba(36,29,25,.14)!important}",
    ".gp-favorites-storage-heart svg{display:block!important;width:1.25rem!important;height:1.25rem!important;fill:currentColor!important;stroke:currentColor!important}",
    "body.gp-favorites-storage-ready .gp-favorites-storage-title{color:var(--brand-text)!important}",
    "html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main article:not(.gp-lite-favorites-card){display:none!important;visibility:hidden!important}",
    "html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main nav,html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main [aria-label*='pagination' i],html.gp-favorites-route93 body:not(.gp-favorites-storage-ready) main [class*='pagination' i],body.gp-favorites-route93 [data-gp-favorites-catalog-chrome='true'],body.gp-favorites-route93 [data-gp-lite-hidden-favorites='true']{display:none!important}",
    "html.gp-favorites-route93 header a[href='/catalog'],html.gp-favorites-route93 header a[href='/catalog/all-products'],body.gp-favorites-route93 header a[href='/catalog'],body.gp-favorites-route93 header a[href='/catalog/all-products']{background:#fff!important;color:var(--brand-text)!important;border-color:rgba(255,255,255,.75)!important;box-shadow:none!important;outline:0!important}",
    "html.gp-favorites-route93 header a[href*='favorites=1'],body.gp-favorites-route93 header a[href*='favorites=1']{background:var(--brand-primary)!important;color:#fff!important;border-color:var(--brand-primary)!important}",
    "@media (max-width:1023px){.gp-favorites-storage-heart{top:.75rem!important;right:.75rem!important;width:2.45rem!important;height:2.45rem!important;min-width:2.45rem!important;min-height:2.45rem!important}.gp-favorites-storage-heart svg{width:1.08rem!important;height:1.08rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function ensureProductImageFill75Style(){
  if(document.getElementById("gp-product-image-fill-20260617-76"))return;
  var style=document.createElement("style");
  style.id="gp-product-image-fill-20260617-76";
  style.textContent=[
    "body.gp-pravki-current-catalog-list main article a[href^='/product/']:has(>div>img){display:block!important;overflow:visible!important;min-height:calc(7.2rem + 1.25rem)!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/']>div:has(>img),body.gp-product-detail-page main [class*='overflow-hidden']:has(>img[data-nimg='fill']),body.gp-favorites-storage-ready .gp-favorites-storage-image,.gp-storage-action-card>a:has(>img),.gp-compare-card-image-v2,.gp-compare-mobile-image-v2,.gp-cart-desktop-image-v2,.gp-cart-mobile-image-v2{overflow:hidden!important;background:#fff!important;background-image:none!important;padding:0!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/']>div:has(>img){border-radius:1.55rem!important}",
    "body.gp-product-detail-page main [class*='overflow-hidden']:has(>img[data-nimg='fill']){border-radius:1.75rem!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] img,body.gp-product-detail-page main [class*='overflow-hidden']>img[data-nimg='fill'],body.gp-favorites-storage-ready .gp-favorites-storage-image img,.gp-storage-action-card img,.gp-compare-card-image-v2 img,.gp-compare-mobile-image-v2 img,.gp-cart-desktop-image-v2 img,.gp-cart-mobile-image-v2 img,.gp-cart-row img,.gp-checkout-old74-item img{display:block!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;object-fit:cover!important;object-position:center center!important;padding:0!important;background:#fff!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] img[data-nimg='fill'],body.gp-product-detail-page main [class*='overflow-hidden']>img[data-nimg='fill']{position:absolute!important;inset:0!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] picture,body.gp-product-detail-page main [class*='overflow-hidden']>picture{display:block!important;width:100%!important;height:100%!important}",
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] picture>img,body.gp-product-detail-page main [class*='overflow-hidden']>picture>img{width:100%!important;height:100%!important;object-fit:cover!important;padding:0!important}",
    "@media (min-width:640px){body.gp-pravki-current-catalog-list main article a[href^='/product/']:has(>div>img){min-height:calc(7.8rem + 1.5rem)!important}}",
    "@media (min-width:1024px){body.gp-pravki-current-catalog-list main article a[href^='/product/']:has(>div>img){min-height:calc(12.35rem + 1.375rem)!important}}",
    "@media (max-width:640px){body.gp-pravki-current-catalog-list main article a[href^='/product/']>div:has(>img){border-radius:1.15rem!important}.gp-favorites-storage-image,.gp-storage-action-card>a:has(>img){border-radius:1.1rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function gpNormalizeProductImageFill75(){
  var selector=[
    "body.gp-pravki-current-catalog-list main article a[href^='/product/'] img",
    "body.gp-product-detail-page main [class*='overflow-hidden']>img[data-nimg='fill']",
    "body.gp-favorites-storage-ready .gp-favorites-storage-image img",
    ".gp-storage-action-card img",
    ".gp-compare-card-image-v2 img",
    ".gp-compare-mobile-image-v2 img",
    ".gp-cart-desktop-image-v2 img",
    ".gp-cart-mobile-image-v2 img",
    ".gp-cart-row img",
    ".gp-checkout-old74-item img"
  ].join(",");
  [].slice.call(document.querySelectorAll(selector)).forEach(function(img){
    img.style.setProperty("object-fit","cover","important");
    img.style.setProperty("object-position","center center","important");
    img.style.setProperty("padding","0","important");
    img.style.setProperty("background","#fff","important");
    if(document.body.classList.contains("gp-pravki-current-catalog-list")&&img.closest("main article")){
      var media=img.parentElement;
      var link=media&&media.closest&&media.closest("a[href^='/product/']");
      if(media){
        media.style.setProperty("overflow","hidden","important");
        media.style.setProperty("padding","0","important");
        media.style.setProperty("background","#fff","important");
      }
      if(link){
        var mediaHeight=window.matchMedia&&window.matchMedia("(min-width:1024px)").matches?"calc(12.35rem + 1.375rem)":window.matchMedia&&window.matchMedia("(min-width:640px)").matches?"calc(7.8rem + 1.5rem)":"calc(7.2rem + 1.25rem)";
        link.style.setProperty("display","block","important");
        link.style.setProperty("overflow","visible","important");
        link.style.setProperty("min-height",mediaHeight,"important");
      }
    }
    if(img.closest(".gp-cart-row")){
      var size=window.matchMedia&&window.matchMedia("(max-width:1023px)").matches?"4.5rem":"5.25rem";
      var host=img.parentElement;
      if(host){
        host.style.setProperty("display","block","important");
        host.style.setProperty("width",size,"important");
        host.style.setProperty("height",size,"important");
        host.style.setProperty("overflow","hidden","important");
        host.style.setProperty("border-radius","1rem","important");
        host.style.setProperty("background","#fff","important");
      }
      img.style.setProperty("width","100%","important");
      img.style.setProperty("height","100%","important");
    }
  });
}

function gpNormalizeVisibleProductPrices(){
  var main=document.querySelector("main");
  if(!main)return;
  if(location.pathname.indexOf("/catalog")!==0&&location.pathname.indexOf("/product/")!==0&&location.search.indexOf("favorites=1")<0&&!document.body.classList.contains("gp-favorites-storage-ready"))return;
  var scopes=[].slice.call(main.querySelectorAll("article"));
  if(location.pathname.indexOf("/product/")===0)scopes.push(main);
  if(!scopes.length)scopes=[main];
  scopes.forEach(function(scope){
    [].slice.call(scope.querySelectorAll("*")).forEach(function(element){
      var text=(element.textContent||"").replace(/\s+/g," ").trim();
      if(!/^\d{3,6}$/.test(text))return;
      var next=element.nextElementSibling;
      if(!next||!/(в‚Ѕ|СЂСѓР±\.?|РІвЂљР…)/i.test(next.textContent||""))return;
      var className=String(element.className||"");
      if(!/(tracking|uppercase|brand-primary|text-\[11px\]|text-xs)/i.test(className))return;
      element.dataset.gpHiddenSkuBeforePrice="true";
      element.style.setProperty("display","none","important");
    });
    function walk(node){
      if(!node)return;
      if(node.nodeType===3){
        if(!/(в‚Ѕ|СЂСѓР±\.?|РІвЂљР…)/i.test(node.nodeValue||""))return;
        var next=gpNormalizeVisiblePriceText(node.nodeValue);
        if(next&&next!==node.nodeValue)node.nodeValue=next;
        return;
      }
      if(node.nodeType!==1&&node.nodeType!==9&&node.nodeType!==11)return;
      if(/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(node.tagName||""))return;
      [].slice.call(node.childNodes||[]).forEach(walk);
    }
    walk(scope);
  });
}

var gpProductDescriptionCache82={};

function gpCleanText82(value){
  return String(value||"").replace(/\s+/g," ").trim();
}

function gpIsProductTabLabel82(value){
  var text=gpCleanText82(value);
  return text==="РћРїРёСЃР°РЅРёРµ"||text==="РҐР°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё";
}

function gpFindProductTabSection82(fromButton){
  if(location.pathname.indexOf("/product/")!==0)return null;
  var start=fromButton&&fromButton.closest?fromButton.closest("section"):null;
  var sections=start?[start]:[].slice.call(document.querySelectorAll("main section"));
  if(start){
    var parent=start.parentElement&&start.parentElement.closest?start.parentElement.closest("section"):null;
    while(parent){sections.push(parent);parent=parent.parentElement&&parent.parentElement.closest?parent.parentElement.closest("section"):null}
  }
  for(var index=0;index<sections.length;index+=1){
    var section=sections[index];
    var buttons=[].slice.call(section.querySelectorAll("button")).filter(function(button){return gpIsProductTabLabel82(button.textContent)});
    var hasDescription=buttons.some(function(button){return gpCleanText82(button.textContent)==="РћРїРёСЃР°РЅРёРµ"});
    var hasSpecs=buttons.some(function(button){return gpCleanText82(button.textContent)==="РҐР°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё"});
    if(hasDescription&&hasSpecs)return section;
  }
  return null;
}

function gpFindProductTabbar82(section){
  return [].slice.call(section.querySelectorAll("div")).find(function(node){
    var buttons=[].slice.call(node.children||[]).filter(function(child){return child.tagName==="BUTTON"&&gpIsProductTabLabel82(child.textContent)});
    return buttons.length>=2;
  })||null;
}

function gpFindProductTabContent82(section){
  var tabbar=gpFindProductTabbar82(section);
  if(tabbar&&tabbar.nextElementSibling)return tabbar.nextElementSibling;
  return [].slice.call(section.children||[]).find(function(child){
    if(child===tabbar)return false;
    return /РћРїРёСЃР°РЅРёРµ Рё Р°РєС‚РёРІС‹|РђРєС‚РёРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹|РђСЂС‚РёРєСѓР»|Р¤РѕСЂРјР°С‚|РљР°С‚РµРіРѕСЂРёСЏ/i.test(gpCleanText82(child.textContent));
  })||null;
}

function gpProductOriginalDescriptionHtml82(section,content){
  var key=location.pathname;
  if(content&&!content.__gpOriginalClassName82)content.__gpOriginalClassName82=String(content.className||"");
  if(!gpProductDescriptionCache82[key]&&content&&/РћРїРёСЃР°РЅРёРµ Рё Р°РєС‚РёРІС‹|РђРєС‚РёРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹/i.test(gpCleanText82(content.textContent))){
    gpProductDescriptionCache82[key]=content.innerHTML;
  }
  return gpProductDescriptionCache82[key]||"";
}

function gpProductDetailValue82(label,value){
  value=gpCleanText82(value);
  if(!value||value==="вЂ”")return "";
  return '<article class="gp-product-spec-card82"><div class="gp-product-spec-label82">'+gpEscapeHtml(label)+'</div><div class="gp-product-spec-value82">'+gpEscapeHtml(value)+'</div></article>';
}

function gpExtractProductPrice82(main,pageText){
  var candidates=[].slice.call((main||document).querySelectorAll("*")).filter(function(node){
    if(node.closest&&node.closest(".gp-product-specs82"))return false;
    return true;
  }).map(function(node){return gpCleanText82(node.textContent)}).filter(function(text){
    return /^\d[\d\s]{0,10}\s*(?:в‚Ѕ|СЂСѓР±\.?|Р )$/i.test(text);
  }).map(function(text){
    return {text:text,value:parseInt(text.replace(/\D/g,"")||"0",10)};
  }).filter(function(item){return item.text});
  if(candidates.length){
    candidates.sort(function(a,b){return b.value-a.value});
    return candidates[0].text;
  }
  var priceMatch=(pageText||"").match(/\b\d{1,3}(?:\s\d{3})*\s*(?:в‚Ѕ|СЂСѓР±\.?|Р \b)/i);
  return priceMatch?gpCleanText82(priceMatch[0]):"";
}

function gpExtractProductSpecs82(section,content){
  var main=document.querySelector("main")||document.body;
  var pageText=gpCleanText82(main.textContent);
  var cachedHtml=gpProductOriginalDescriptionHtml82(section,content);
  var temp=document.createElement("div");
  temp.innerHTML=cachedHtml;
  var titleNode=[].slice.call(main.querySelectorAll("h1")).find(function(node){return gpCleanText82(node.textContent).length>8});
  var title=titleNode?gpCleanText82(titleNode.textContent):gpCleanText82(document.title).replace(/^Р“Р°СЂРјРѕРЅРёСЏРџР»СЋСЃ\s*/i,"");
  var descriptionNode=[].slice.call(temp.querySelectorAll("p")).find(function(node){return gpCleanText82(node.textContent).length>10});
  var description=descriptionNode?gpCleanText82(descriptionNode.textContent):"";
  var activeNode=[].slice.call(temp.querySelectorAll("*")).find(function(node){return /^РђРєС‚РёРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹/i.test(gpCleanText82(node.textContent))});
  var active=activeNode?gpCleanText82(activeNode.textContent).replace(/^РђРєС‚РёРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹\s*/i,""):"";
  var backLink=[].slice.call(main.querySelectorAll("a,button")).find(function(node){return /РќР°Р·Р°Рґ РІ:/i.test(gpCleanText82(node.textContent))});
  var category=backLink?gpCleanText82(backLink.textContent).replace(/^в†ђ?\s*РќР°Р·Р°Рґ РІ:\s*/i,""):"";
  var skuMatch=pageText.match(/\b0{3,}\d{2,}\b/)||pageText.match(/\b\d{7,14}\b/);
  var sku=skuMatch?skuMatch[0]:"";
  var price=gpExtractProductPrice82(main,pageText);
  var formatMatch=title.match(/\d+(?:[,.]\d+)?\s*(?:РјР»|ml|РіСЂ|Рі|РєРі|С€С‚|Р°РјРїСѓР»|РјРі)\b/i);
  var format=formatMatch?formatMatch[0]:"";
  return {title:title,sku:sku,category:category,format:format,price:price,description:description,active:active};
}

function gpRenderProductSpecs82(section,content){
  if(!section||!content)return;
  var specs=gpExtractProductSpecs82(section,content);
  var rows=[
    ["РђСЂС‚РёРєСѓР»",specs.sku],
    ["РљР°С‚РµРіРѕСЂРёСЏ / СЃРµСЂРёСЏ",specs.category],
    ["Р¤РѕСЂРјР°С‚",specs.format],
    ["Р¦РµРЅР°",specs.price],
    ["РќР°Р·РІР°РЅРёРµ",specs.title],
    ["РћРїРёСЃР°РЅРёРµ",specs.description],
    ["РђРєС‚РёРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹",specs.active]
  ].map(function(row){return gpProductDetailValue82(row[0],row[1])}).join("");
  content.className="gp-product-specs82";
  content.innerHTML=rows||'<article class="gp-product-spec-card82"><div class="gp-product-spec-label82">РҐР°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё</div><div class="gp-product-spec-value82">РРЅС„РѕСЂРјР°С†РёСЏ СѓС‚РѕС‡РЅСЏРµС‚СЃСЏ.</div></article>';
}

function gpSetProductTabsActive82(section,activeName){
  [].slice.call(section.querySelectorAll("button")).forEach(function(button){
    if(!gpIsProductTabLabel82(button.textContent))return;
    var active=gpCleanText82(button.textContent)===activeName;
    button.setAttribute("aria-selected",active?"true":"false");
    button.style.setProperty("background",active?"var(--brand-text)":"transparent","important");
    button.style.setProperty("color",active?"var(--brand-surface)":"var(--brand-muted)","important");
    button.style.setProperty("box-shadow",active?"0 14px 30px rgba(36,29,25,0.12)":"none","important");
  });
}

function gpShowProductTab82(section,name){
  var content=gpFindProductTabContent82(section);
  if(!content)return;
  gpProductOriginalDescriptionHtml82(section,content);
  gpSetProductTabsActive82(section,name);
  if(name==="РћРїРёСЃР°РЅРёРµ"){
    var html=gpProductDescriptionCache82[location.pathname];
    if(html)content.innerHTML=html;
    content.className=content.__gpOriginalClassName82||"mt-5 grid gap-5 lg:mt-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6";
  }else{
    gpRenderProductSpecs82(section,content);
  }
}

function ensureProductTabs82Style(){
  if(document.getElementById("gp-product-tabs82-style"))return;
  var style=document.createElement("style");
  style.id="gp-product-tabs82-style";
  style.textContent=[
    ".gp-product-specs82{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:1rem!important;margin-top:1.25rem!important}",
    ".gp-product-spec-card82{border-radius:1.45rem!important;border:1px solid rgba(175,90,102,.12)!important;background:rgba(255,255,255,.84)!important;padding:1rem 1.1rem!important;box-shadow:0 14px 34px rgba(36,29,25,.055)!important}",
    ".gp-product-spec-label82{font-size:.68rem!important;font-weight:800!important;letter-spacing:.2em!important;text-transform:uppercase!important;color:var(--brand-primary)!important}",
    ".gp-product-spec-value82{margin-top:.48rem!important;font-size:.96rem!important;line-height:1.45!important;color:var(--brand-text)!important;overflow-wrap:anywhere!important}",
    "@media (max-width:767px){.gp-product-specs82{grid-template-columns:1fr!important;gap:.75rem!important}.gp-product-spec-card82{border-radius:1.25rem!important;padding:.85rem .95rem!important}.gp-product-spec-value82{font-size:.9rem!important}}"
  ].join("");
  document.head.appendChild(style);
}

function ensureMobileHeader83Style(){
  if(document.getElementById("gp-mobile-header83-style"))return;
  var style=document.createElement("style");
  style.id="gp-mobile-header83-style";
  style.textContent=[
    "@media (max-width:1023px){[data-mobile-shell='header']{border-bottom:1px solid rgba(255,255,255,.92)!important;box-shadow:none!important;overflow:hidden!important;background:var(--brand-background)!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header']>[class*='top-full'],[data-mobile-shell='header'] [class*='top-full'][class*='absolute']{display:none!important;visibility:hidden!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important;pointer-events:none!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] nav[aria-label]{gap:.1rem!important}[data-mobile-shell='header'] nav[aria-label]>div:first-child{gap:2px!important;margin-left:-6px!important;transform:translateX(-2px)!important}[data-mobile-shell='header'] nav[aria-label]>div:last-child{gap:2px!important;margin-right:-4px!important;transform:translateX(4px)!important;justify-self:end!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] a[aria-label],[data-mobile-shell='header'] button[aria-label]{min-width:2.82rem!important;align-items:center!important;justify-content:flex-start!important;gap:.1rem!important;padding:.1rem .05rem!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] a[aria-label]>span:first-child,[data-mobile-shell='header'] button[aria-label]>span:first-child{width:1.75rem!important;height:1.75rem!important;min-width:1.75rem!important;min-height:1.75rem!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] a svg,[data-mobile-shell='header'] button svg{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;transform:none!important;scale:1!important;stroke-width:1.8!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] a span[class*='text-[9px]'],[data-mobile-shell='header'] button span[class*='text-[9px]']{font-size:9px!important;line-height:9px!important;height:9px!important;letter-spacing:.01em!important;transform:none!important;white-space:nowrap!important}}",
    "@media (max-width:1023px){[data-mobile-shell='header'] button[aria-label='РџРѕРёСЃРє']{min-width:2.82rem!important}[data-mobile-shell='header'] button[aria-label='РџРѕРёСЃРє'] svg{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;scale:1!important}[data-mobile-shell='header'] button[aria-label='РџРѕРёСЃРє'] span[class*='text-[9px]']{font-size:9px!important;line-height:9px!important;height:9px!important}}"
  ].join("");
  document.head.appendChild(style);
}

function normalizeMobileHeader83(){
  if(innerWidth>1023)return;
  var header=document.querySelector('[data-mobile-shell="header"]');
  if(!header)return;
  header.style.setProperty("border-bottom","1px solid rgba(255,255,255,.92)","important");
  header.style.setProperty("box-shadow","none","important");
  header.style.setProperty("overflow","hidden","important");
  header.style.setProperty("background","var(--brand-background)","important");
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
  [].slice.call(header.querySelectorAll('[class*="top-full"][class*="absolute"],[class*="top-full"]')).forEach(function(node){
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
  var actionLabelPattern=/(\u041a\u0430\u0431\u0438\u043d\u0435\u0442|\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b|\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435|\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435|\u041f\u043e\u0438\u0441\u043a|\u041a\u043e\u0440\u0437\u0438\u043d\u0430)/i;
  var actionNodes=[].slice.call(header.querySelectorAll("a,button")).filter(function(action){
    var text=((action.getAttribute("aria-label")||"")+" "+(action.textContent||"")).replace(/\s+/g," ").trim();
    return !!action.querySelector("svg")&&actionLabelPattern.test(text);
  });
  actionNodes.forEach(function(action){
    action.style.setProperty("min-width","2.82rem","important");
    action.style.setProperty("align-items","center","important");
    action.style.setProperty("justify-content","flex-start","important");
    action.style.setProperty("gap",".1rem","important");
    action.style.setProperty("padding",".1rem .05rem","important");
    var firstSpan=action.querySelector("span");
    if(firstSpan){
      firstSpan.style.setProperty("width","1.75rem","important");
      firstSpan.style.setProperty("height","1.75rem","important");
      firstSpan.style.setProperty("min-width","1.75rem","important");
      firstSpan.style.setProperty("min-height","1.75rem","important");
      firstSpan.style.setProperty("display","inline-flex","important");
      firstSpan.style.setProperty("align-items","center","important");
      firstSpan.style.setProperty("justify-content","center","important");
    }
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
      span.style.setProperty("letter-spacing",".01em","important");
      span.style.setProperty("transform","none","important");
      span.style.setProperty("white-space","nowrap","important");
    });
  });
}

function gpIsMobileAccountFast84(path){
  path=path||location.pathname;
  return innerWidth<=640&&(path==="/account"||path.indexOf("/account/")===0);
}

function fitMobileAccountBrand88(header){
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

function ensureAndroidFast84Style(){
  if(document.getElementById("gp-android-fast84-style"))return;
  var style=document.createElement("style");
  style.id="gp-android-fast84-style";
  style.textContent=[
    "@media (max-width:640px){body.gp-pravki-current-account [data-mobile-shell='header']{height:56px!important;min-height:0!important;max-height:56px!important;border-bottom:1px solid rgba(255,255,255,.94)!important;box-shadow:none!important;overflow:hidden!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account [data-mobile-shell='header']>div:first-child{padding-bottom:0!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account{padding-top:56px!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account>div:first-of-type{padding-top:0!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account main{padding-top:.35rem!important;margin-top:0!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account main>div.grid,body.gp-pravki-current-account main>section:first-child{padding-top:0!important;margin-top:0!important}}",
    "@media (max-width:640px){body.gp-pravki-current-account [data-mobile-shell='header'] [class*='top-full']{display:none!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important}}"
  ].join("");
  document.head.appendChild(style);
}

function normalizeAndroidAccountHeader84(){
  if(!gpIsMobileAccountFast84())return;
  ensureAndroidFast84Style();
  normalizeMobileHeader83();
  document.body.classList.add("gp-pravki-current-account");
  var header=document.querySelector('[data-mobile-shell="header"]');
  if(header){
    header.style.setProperty("height","56px","important");
    header.style.setProperty("min-height","0px","important");
    header.style.setProperty("max-height","56px","important");
    header.style.setProperty("border-bottom","1px solid rgba(255,255,255,.94)","important");
    header.style.setProperty("box-shadow","none","important");
    header.style.setProperty("overflow","hidden","important");
    fitMobileAccountBrand88(header);
    var inner=header.firstElementChild;
    if(inner)inner.style.setProperty("padding-bottom","0px","important");
  }
  document.body.style.setProperty("padding-top","56px","important");
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

function gpDefer84(callback,delay){
  delay=Math.max(0,Number(delay)||0);
  if(window.requestIdleCallback){
    window.requestIdleCallback(function(){callback()},{timeout:delay+1200});
  }else{
    setTimeout(callback,delay);
  }
}

function runMobileAccountFast84(){
  document.body.classList.add("gp-pravki-current","gp-pravki-current-account");
  ensureLayoutFavoritesFiltersPatch();
  ensureAndroidFast84Style();
  ensurePriceCardFixStyle();
  installSearchSuggestions();
  installMobileSearchFallback();
  installContactWidgetBridge();
  installNavTabFix();
  gpSyncHeaderActionBadges();
  markAccountPage();
  ensureMobileHeader83Style();
  normalizeAndroidAccountHeader84();
  ensureAccountRuntimeFixes();
  normalizeAccountHeader();
  normalizeAndroidAccountHeader84();
  ensureAccountAuthFallback();
  ensureAccountEmailVerification();
  ensureLegalFooterButtons();
  if(!window.__gpAccountContactDeferred84){
    window.__gpAccountContactDeferred84=true;
    gpDefer84(function(){
      ensureContactWidgetFallback();
      normalizeAndroidAccountHeader84();
    },1800);
  }
}

function installProductTabsFix82(){
  ensureProductTabs82Style();
  var section=gpFindProductTabSection82();
  var content=section&&gpFindProductTabContent82(section);
  if(section&&content){
    gpProductOriginalDescriptionHtml82(section,content);
    [].slice.call(section.querySelectorAll("button")).forEach(function(button){
      if(!gpIsProductTabLabel82(button.textContent))return;
      button.type="button";
      button.setAttribute("role","tab");
      if(!button.hasAttribute("aria-selected"))button.setAttribute("aria-selected",gpCleanText82(button.textContent)==="РћРїРёСЃР°РЅРёРµ"?"true":"false");
    });
  }
  if(document.documentElement.dataset.gpProductTabsFix82==="1")return;
  document.documentElement.dataset.gpProductTabsFix82="1";
  document.addEventListener("click",function(event){
    if(location.pathname.indexOf("/product/")!==0)return;
    var button=event.target.closest&&event.target.closest("button");
    if(!button||!gpIsProductTabLabel82(button.textContent))return;
    var productSection=gpFindProductTabSection82(button);
    if(!productSection)return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation)event.stopImmediatePropagation();
    gpShowProductTab82(productSection,gpCleanText82(button.textContent));
  },true);
}

function installProductBackFallback(){
  if(document.documentElement.dataset.gpProductBackFallback==="1")return;
  document.documentElement.dataset.gpProductBackFallback="1";
  document.addEventListener("click",function(event){
    if(location.pathname.indexOf("/product/")!==0)return;
    var control=event.target.closest&&event.target.closest("a,button");
    if(!control)return;
    var label=(control.getAttribute("aria-label")||control.title||control.textContent||"").replace(/\s+/g," ").trim();
    if(!/\u041d\u0430\u0437\u0430\u0434/i.test(label))return;
    event.preventDefault();
    event.stopPropagation();
    if(history.length>1)history.back();
    else location.assign("/catalog/all-products");
  },true);
}

function gpShouldRunForMutation(mutations){
  var ignoredSelector="[data-gp-storage-action-page],.gp-contact-widget-fallback,.gp-mobile-search-root,.gp-action-toast,.gp-search-suggestions,.gp-old-filter-panel,.gp-old-filter-overlay,.gp-mobile-floating-filter-button,.gp-desktop-floating-filter-button";
  return [].slice.call(mutations||[]).some(function(mutation){
    var target=mutation.target;
    if(target&&/^(HEAD|STYLE|SCRIPT|LINK|META)$/i.test(target.tagName||""))return false;
    if(target&&target.closest&&target.closest(ignoredSelector))return false;
    var nodes=[].slice.call(mutation.addedNodes||[]).concat([].slice.call(mutation.removedNodes||[])).filter(function(node){return node&&node.nodeType===1});
    if(nodes.length&&nodes.every(function(node){
      if(/^(STYLE|SCRIPT|LINK|META)$/i.test(node.tagName||""))return true;
      return (node.matches&&node.matches(ignoredSelector))||(node.closest&&node.closest(ignoredSelector));
    }))return false;
    return true;
  });
}

function gpScheduleRun(delay){
  clearTimeout(window.__gpPravkiCurrentTimer);
  window.__gpPravkiCurrentTimer=setTimeout(function(){
    if(window.requestAnimationFrame)window.requestAnimationFrame(run);else run();
  },Math.max(0,Number(delay)||0));
}

function run(){
  document.body.classList.add("gp-pravki-current");
  var path=location.pathname;
  var isCatalog=path.indexOf("/catalog")===0;
  var isCategory=path.indexOf("/catalog/")===0;
  var isFavorites=location.search.indexOf("favorites=1")>-1;
  var isCompare=path==="/compare";
  var isCart=path==="/cart";
  var isCheckout=path==="/checkout";
  var isAccount=path==="/account"||path.indexOf("/account/")===0;
  var isContacts=path==="/contacts";
  var isPromotions=path==="/promotions";
  if(gpIsMobileAccountFast84(path)){
    runMobileAccountFast84();
    gpInstallMojibakeObserver95();
    gpNormalizeMojibakeText95(document.body);
    return;
  }
  gpInstallMojibakeObserver95();
  document.documentElement.classList.toggle("gp-favorites-route93",isFavorites);
  document.body.classList.toggle("gp-favorites-route93",isFavorites);
  ensureLayoutFavoritesFiltersPatch();
  ensureJune17CatalogOverrides();
  ensurePriceCardFixStyle();
  ensurePravki31FinishingStyle();
  ensurePravki33FinishingStyle();
  ensureProductImageFill75Style();
  ensureFavoritesCard93Style();
  installGlobalOldFilterClicks();
  installCardActionFallbacks();
  installSearchSuggestions();
  installMobileSearchFallback();
  installStoredActionPageHandlers();
  installContactWidgetBridge();
  installProductBackFallback();
  installCatalogPaginationFix();
  if(isCategory)normalizeCatalogHeaderSinglePlaque();
  if(isFavorites||document.body.classList.contains("gp-favorites-simple-page")||document.querySelector(".gp-favorites-simple-header"))normalizeFavoritesSimplePage();
  normalizeFavoritesNavActive();
  if(isCatalog||isFavorites){
    ensureOldRealFilters();
    ensureFloatingMobileFilterButton();
    ensureDesktopFloatingFilterButton();
    gpApplyCatalogColumns();
    updateCategoryHeaderCount();
    normalizeCatalogHeaderActions();
    gpEnsureMobileCategoryBackLink77();
    hideAllProductsCategory();
    ensureCosmeticsBrandLogos();
    gpUpdateCatalogPagination();
  }
  if(isCatalog||path.indexOf("/product/")===0||isFavorites){
    gpNormalizeVisibleProductPrices();
    syncFavoriteOverlays();
    gpNormalizeFavoritesCardHearts93();
    gpPersistVisibleActiveCompareFromCards();
    gpCardActionButtonState();
  }
  gpSyncHeaderActionBadges();
  if(isCompare||isCart||isFavorites){
    gpRenderStoredActionPage();
    gpNormalizeVisibleProductPrices();
    if(isFavorites){
      gpNormalizeFavoritesCardHearts93();
      gpHideFavoritesCatalogChrome93();
    }
  }
  gpRenderCheckoutOld74();
  gpNormalizeProductImageFill75();
  ensureContactWidgetFallback();
  installLegalDocumentHandlers();
  installNavTabFix();
  markComparePage();
  markProductDetailPage();
  ensureAndroidFast84Style();
  ensureMobileHeader83Style();
  normalizeMobileHeader83();
  if(path.indexOf("/product/")===0)installProductTabsFix82();
  markCatalogProductListPage();
  markAccountPage();
  if(isAccount){
    ensureAccountRuntimeFixes();
    normalizeAccountHeader();
    normalizeAndroidAccountHeader84();
    ensureAccountAuthFallback();
    ensureAccountEmailVerification();
  }
  ensureLegalFooterButtons();
  if(isContacts){
    replaceContactsText();
    addContactRequisites();
  }
  if(path==="/catalog")applyCatalogCovers();
  if(isCatalog||path.indexOf("/product/")===0||isFavorites)replaceProductFallbackImages();
  gpNormalizeProductImageFill75();
  if(isPromotions)hideEmptyPromotionShowcase();
  if(isCategory&&!isFavorites){
    normalizeMobileCategoryHeader();
    normalizeCatalogHeaderActions();
    gpEnsureMobileCategoryBackLink77();
  }
  if(isCompare){
    tuneCompareLayoutMetrics();
    normalizeCompareCards();
  }
  gpNormalizeMojibakeText95(document.body);
  setTimeout(function(){gpNormalizeMojibakeText95(document.body)},120);
  // Native InstallAppPage renders the original drawn mobile instructions.
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else gpScheduleRun(0);
cleanupDeletedProductState();
addEventListener("resize",function(){gpScheduleRun(120)},{passive:true});
addEventListener("pageshow",function(){gpScheduleRun(80)},{passive:true});
new MutationObserver(function(mutations){
  if(!gpShouldRunForMutation(mutations))return;
  gpScheduleRun(220);
}).observe(document.documentElement,{childList:true,characterData:true,subtree:true});
function gpSchedulePostLoad84(delay){
  var mobile=innerWidth<=640||/Android/i.test(navigator.userAgent||"");
  if(mobile&&delay>2000)return;
  setTimeout(function(){gpScheduleRun(0)},delay);
}
gpSchedulePostLoad84(250);
gpSchedulePostLoad84(900);
gpSchedulePostLoad84(2000);

if("serviceWorker"in navigator){
  var update=function(){
    navigator.serviceWorker.register("/service-worker.js?v29-images-fresh-20260618",{updateViaCache:"none"}).then(function(worker){
      return worker.update();
    }).catch(function(){return null});
  };
  if(window.requestIdleCallback)window.requestIdleCallback(update,{timeout:8000});else setTimeout(update,6000);
}
}catch(error){console.warn("gp pravki current failed",error)}
})();



