require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({40:[function(require,module,exports) {

},{}],15:[function(require,module,exports) {
"use strict";require("flexboxgrid"),require("./styles/styles.scss"),window.addEventListener("scroll",function(){var e=document.querySelector(".header"),t=window.pageYOffset/e.dataset.speed,r="0% "+(t=+t)+"px";e.style.backgroundPosition=r});var e=document.querySelector(".header_menu_burger"),t=document.querySelector(".header_menu_overlay"),r=document.querySelector(".header_menu_burger_firstLine"),a=document.querySelector(".header_menu_burger_lastLine"),o=document.querySelector(".header_menu_burger_firstLine_before"),s=document.querySelector(".header_menu_burger_lastLine_after"),n=document.querySelectorAll(".header_menu_overlay_items");e.addEventListener("click",function(){t.classList.toggle("header_menu_overlay-active"),r.classList.toggle("header_menu_burger_firstLine-anim"),o.classList.toggle("header_menu_burger_firstLine-befafter"),a.classList.toggle("header_menu_burger_lastLine-anim"),s.classList.toggle("header_menu_burger_firstLine-befafter")});for(var c=0;c<n.length;c++)n[c].addEventListener("click",function(){t.classList.toggle("header_menu_overlay-active"),r.classList.toggle("header_menu_burger_firstLine-anim"),o.classList.toggle("header_menu_burger_firstLine-befafter"),a.classList.toggle("header_menu_burger_lastLine-anim"),s.classList.toggle("header_menu_burger_firstLine-befafter")});var d=document.querySelector(".header_typewriter"),i=document.querySelector(".header_typewriter_items"),l=document.querySelectorAll(".header_typewriter_item"),u=100,g=[l[0],l[1],l[2],l[3],l[4],l[5]],m=document.querySelector(".right"),h=0,_=function e(){if(i.classList.add("transition"),++h>g.length-1){var t=(l=document.querySelectorAll(".header_typewriter_item"))[l.length-1];i.insertBefore(t,i.childNodes[0]),h=0,i.classList.remove("transition"),i.style.transform="translateY(-"+h*u+"px)",setTimeout(function(){e()},1)}else i.style.transform="translateY(-"+h*u+"px)"};m.addEventListener("click",function(){_()});var L=window.setInterval(_,2500),v=document.querySelector(".header_button"),f=document.querySelector(".header_button_input"),b=document.querySelector(".header_button_search");v.addEventListener("click",function(){f.removeAttribute("disabled"),f.removeAttribute("value"),f.setAttribute("placeholder"," : enter what you want to visit"),f.classList.add("header_button_input-anim"),b.classList.add("is-active")});var y=document.getElementById("audio"),k=document.querySelector(".header_music"),q=document.querySelector(".header_music_before"),S=document.querySelector(".header_music_after");y.volume=.05,k.addEventListener("click",function(){!1===y.muted?y.muted=!0:y.muted=!1,q.classList.toggle("header_music_before-pulse"),S.classList.toggle("header_music_after-pulse")});var C=document.querySelector(".header_language_en"),w=document.querySelector(".header_language_kr"),p=document.querySelector(".header_language-change");C.addEventListener("click",function(){p.classList.toggle("header_language-change-toLeft"),p.classList.toggle("header_language-change-toRight")}),w.addEventListener("click",function(){p.classList.toggle("header_language-change-toLeft"),p.classList.toggle("header_language-change-toRight")});var E=document.querySelector("#colorToChange");window.addEventListener("scroll",function(){window.scrollY<document.querySelector(".header").offsetHeight-50?(r.classList.add("backgroundChange"),a.classList.add("backgroundChange"),o.classList.add("backgroundChange"),s.classList.add("backgroundChange"),E.setAttribute("stop-color","#fff")):window.scrollY<document.querySelector(".header").offsetHeight+600?(r.classList.remove("backgroundChange"),a.classList.remove("backgroundChange"),o.classList.remove("backgroundChange"),s.classList.remove("backgroundChange"),E.setAttribute("stop-color","#8B83FF")):window.scrollY<document.querySelector(".header").offsetHeight+1850?(r.classList.add("backgroundChange"),a.classList.add("backgroundChange"),o.classList.add("backgroundChange"),s.classList.add("backgroundChange"),E.setAttribute("stop-color","#fff")):(r.classList.remove("backgroundChange"),a.classList.remove("backgroundChange"),o.classList.remove("backgroundChange"),s.classList.remove("backgroundChange"),E.setAttribute("stop-color","#8B83FF"))}),window.addEventListener("scroll",function(){window.scrollY<50?(k.classList.add("backgroundChange"),q.classList.add("backgroundChange"),S.classList.add("backgroundChange"),C.classList.add("colorChange"),w.classList.add("colorChange"),p.classList.add("gradientBackgroundChange")):window.scrollY<document.querySelector(".header").offsetHeight-35?(k.classList.remove("backgroundChange"),q.classList.remove("backgroundChange"),S.classList.remove("backgroundChange"),C.classList.remove("colorChange"),w.classList.remove("colorChange"),p.classList.remove("gradientBackgroundChange")):window.scrollY<document.querySelector(".header").offsetHeight+1225?(k.classList.add("backgroundChange"),q.classList.add("backgroundChange"),S.classList.add("backgroundChange"),C.classList.add("colorChange"),w.classList.add("colorChange"),p.classList.add("gradientBackgroundChange")):(k.classList.remove("backgroundChange"),q.classList.remove("backgroundChange"),S.classList.remove("backgroundChange"),C.classList.remove("colorChange"),w.classList.remove("colorChange"),p.classList.remove("gradientBackgroundChange"))});var A=document.querySelector(".header_menu_overlay_item-1"),B=document.querySelector(".header_menu_overlay_item-2"),x=document.querySelector(".header_menu_overlay_item-3"),Y=document.querySelector(".header_menu_overlay_item-4");A.addEventListener("click",function(){document.querySelector("#header").scrollIntoView({behavior:"smooth"})}),B.addEventListener("click",function(){document.querySelector("#method").scrollIntoView({behavior:"smooth"})}),x.addEventListener("click",function(){document.querySelector("#random").scrollIntoView({behavior:"smooth"})}),Y.addEventListener("click",function(){document.querySelector("#district").scrollIntoView({behavior:"smooth"})});for(var I=document.querySelectorAll(".random_box_article"),H=document.querySelectorAll(".random_imgBox_figure"),F=document.querySelectorAll(".random_imgBox_figure_figcaption"),V=document.querySelector(".cross"),R=function(e){I[e].addEventListener("click",function(){H[e].classList.add("scaled"),F[e].classList.add("tracking-in-contract"),V.classList.add("is-active")}),V.addEventListener("click",function(){H[e].classList.remove("scaled"),F[e].classList.remove("tracking-in-contract"),V.classList.remove("is-active")})},T=0;T<I.length;T++)R(T);for(var N=document.querySelectorAll(".district_svg_path"),O=document.querySelector(".district_name"),P=function(e){N[e].addEventListener("mouseover",function(){var t=N[e].getAttribute("id");console.log(t),O.textContent=t})},j=0;j<N.length;j++)P(j);var z=document.querySelector(".loading");window.addEventListener("load",function(){z.classList.remove("is-active")});
},{"flexboxgrid":40,"./styles/styles.scss":40}]},{},[15])