!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var n=o(1);$(window).width(),$(window).innerHeight(),window.innerWidth,window.innerWidth;(0,n.preload)(),(0,n.toggleHeader)(),(0,n.parallaxHennnyano)(),(0,n.pageTop)(),$(window).on("load",function(){$(".sw-Lower, .sw-Lower_Wrapper").addClass("show"),setTimeout(function(){$(".sw-Ttl").addClass("show")},200),setTimeout(function(){$("#sw-Hennnyano").addClass("show")},700),a(),s()});var a=function(){var e=$("#gallery-Modal"),t=$("#gallery-Modal_Img");$("#gallery-Modal_Content");$(".js-Img").on("click",function(){var o=$(this).attr("data-img");return t.append('<img src="'+o+'">'),e.addClass("is-show"),!1}),$(" #gallery-Modal_Close-1, #gallery-Modal_Close-0").on("click",function(){return e.removeClass("is-show"),setTimeout(function(){t.children("img").remove()},200),!1})},s=function(){var e=$(".produce-List_Item").length,t=4;e<=t?$("#produce-List_Btn").hide():($(".produce-List_Item").slice(t).hide(),$("#produce-List_Btn").click(function(){$(".produce-List_Item").slice(t).is(":hidden")?($(".produce-List_Item").slice(t).slideDown(300),$(this).addClass("open")):($(".produce-List_Item").slice(t).slideUp(300),$(this).removeClass("open"))}))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pageTop=t.parallaxHennnyano=t.anchorLink=t.showMovie=t.toggleHeader=t.preload=void 0;var o=!1,n=(document.getElementById("st-Header"),document.getElementById("st-Header_Nav")),a=document.getElementById("st-Header_Bg"),s=document.getElementById("st-Menu"),i=function(){history.replaceState(null,null,null),window.addEventListener("popstate",function(){$("body").addClass("preload"),o=!1,n.classList.remove("opened"),s.classList.remove("opened"),a.classList.remove("opened"),n.classList.add("closed"),s.classList.add("closed"),a.classList.add("closed"),setTimeout(function(){$("body").removeClass("preload")},100)},!1),$(window).on("load",function(){$("body").removeClass("preload")})};t.preload=i;var l=function(){s.addEventListener("click",function(){o?(n.classList.remove("opened"),s.classList.remove("opened"),a.classList.remove("opened"),n.classList.add("closed"),s.classList.add("closed"),a.classList.add("closed"),o=!1):setTimeout(function(){n.classList.remove("closed"),s.classList.remove("closed"),a.classList.remove("closed"),n.classList.add("opened"),s.classList.add("opened"),a.classList.add("opened"),o=!0},0)},!1)};t.toggleHeader=l;var r=function(){var e=$("#sw-Youtube"),t=$("#sw-Youtube_Content");$(".js-Youtube").on("click",function(){var o=$(this).attr("data-youtube");$("#sw-Youtube").css({opacity:"0",display:"block"}).stop().animate({opacity:"1",width:"100%",height:"100vh",top:0,left:0},500,"easeOutQuart",function(){return t.append('<iframe width="900" height="506" src="https://www.youtube.com/embed/'+o+'?rel=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen" frameborder="0"></iframe>'),e.stop().fadeIn(400),!1})}),$("#sw-Youtube_Close,#sw-Youtube_Overlay").on("click",function(){$("#sw-Youtube").css({opacity:"1"}).stop().animate({opacity:"0"},500,"easeOutQuart",function(){$("#sw-Youtube").css({display:"none"}),t.children("iframe").remove()})})};t.showMovie=r;var d=function(){var e=location.hash;e&&($("body,html").stop().scrollTop(0),setTimeout(function(){var t=$(e),o=t.offset().top-80;$("body,html").stop().animate({scrollTop:o},500)},200));var t=1e3,o=50;$("a[href^='#']").on("click",function(){var e=$(this).attr("href"),n=$("#"==e||""==e?"html":e),a=n.offset().top;return $("html, body").animate({scrollTop:a-o},t,"easeInOutQuint"),!1})};t.anchorLink=d;var c=function(){var e=document.getElementById("sw-Hennnyano");new Parallax(e,{clipRelativeInput:!0,hoverOnly:!1,invertX:!1,invertY:!1,limitX:!0,limitY:!0,scalarX:30,scalarY:30,frictionX:.1,frictionY:.1,originX:.2,originY:1})};t.parallaxHennnyano=c;var u=function(){$("#sw-Hennnyano").on("click",function(){var e=1200;setTimeout(function(){$("html, body").animate({scrollTop:0},e,"easeOutExpo")},1e3);var t=$(window).innerHeight(),o=$("#sw-Hennnyano").innerHeight(),n=.7*o,a=t+1.5*n,s=.44*o;anime({targets:"#sw-Hennnyano",translateY:[{value:s,duration:700,delay:0,easing:"easeInOutCubic"},{value:-a,duration:1200,delay:200,easing:"easeOutCubic"},{value:n,duration:0,delay:0},{value:0,duration:1300,delay:0}],easing:"easeOutElastic(1, .8)",loop:!1})})};t.pageTop=u}]);
//# sourceMappingURL=app.bundle.js.map