document.addEventListener("DOMContentLoaded",function(){function a(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,e){return c+c+d+d+e+e});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?{r:parseInt(b[1],16),g:parseInt(b[2],16),b:parseInt(b[3],16)}:null}function b(a,b=0){return"rgb("+(a.r+b)+","+(a.g+b)+","+(a.b+b)+")"}function c(){return window.innerHeight>window.innerWidth&window.matchMedia("(max-width: 75vh)").matches}function d(a,b=0,c=0){return`<svg class="pencil" xmlns="http://www.w3.org/2000/svg" viewBox="${b} ${c} 1818 210"><defs><style>.cls-1{fill:${a};}.cls-2{fill:#979797;}.cls-3{fill:#c7b199;}</style></defs><g id="g5334"><path id="path4720" class="cls-1" d="M1818,210h-31V0h31Z" transform="translate(0 0)"/><path id="path4722" class="cls-2" d="M1787,210h-14V0h14Z" transform="translate(0 0)"/><path id="path4726" class="cls-3" d="M257.77,0C270,6.94,282.93,12.65,295.33,19.33c-12.51,8.19-26.18,14.43-39.1,22-.07,1.22-.16,2.44-.27,3.65,13.1,5.84,26.43,11.18,39.38,17.33-12.88,6-25.87,11.86-39.14,17-.05,1.22-.11,2.43-.19,3.65,12.85,7.74,26.77,13.56,39.3,21.82-12.86,5.91-26,11.17-39.16,16.46,0,1.24-.11,2.49-.19,3.73,13.17,6.9,26.49,13.52,39.47,20.74-12.84,6.08-26.26,10.85-39.29,16.52,0,1.24-.09,2.49-.16,3.74,13.16,7.54,26.84,14.26,39.43,22.73-12.37,8.07-29.48,11-39.7,21.25C194.92,185.72,134.54,159.79,74,135c0-20.14.38-40.29-.32-60.42C128.28,52,193.79,25.53,257.77,0Z" transform="translate(0 0)"/><path id="path4728" class="cls-1" d="M74,135q-37-15-74-30.14v-.82c24.71-9.43,49-19.9,73.65-29.46C74.35,94.75,73.92,114.9,74,135Z" transform="translate(0 0)"/><path id="path4724" class="cls-1" d="M1773,210H255.75l0-.83c10.22-10.28,27.33-12.45,39.7-20.52-12.59-8.47-26.27-15.19-39.43-22.73.07-1.25.13-2.5.16-3.74,13-5.67,26.45-10.44,39.29-16.52-13-7.22-26.3-13.84-39.47-20.74.08-1.24.14-2.49.19-3.73,13.13-5.29,26.3-10.55,39.16-16.46-12.53-8.26-26.45-14.08-39.3-21.82.08-1.22.14-2.43.19-3.65,13.27-5.14,26.26-11,39.14-17C282.39,56.11,269.06,50.77,256,44.93c.11-1.21.2-2.43.27-3.65,12.92-7.52,26.59-13.76,39.1-22C282.93,12.65,270,6.94,257.77,0H1773Z" transform="translate(0 0)"/></g></svg>`}function e(a,b,c,d){return`<svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.77 420.93"><defs><style>.cls-1{fill:${a};opacity:${d}}.cls-2{fill:none;stroke:${b};stroke-linecap:round;stroke-linejoin:round;stroke-width:${c};}</style></defs><g id="layer1"><path id="filling" class="cls-1" d="M455.53,5C401,5.37,347.29,30.14,328.62,75.09,237.37-46.09,36.67,67.64,94.91,188.91-43.2,163.27-11.48,386.48,117.38,364.72c55.32,57.59,140.17,67,232,26.28h.06c111,40.42,207.56,10.29,251.09-20.56,261.28,68.17,167.31-349.25-4.15-240.35C595,43.37,524.69,4.53,455.53,5Z" transform="translate(0 0)"/><path id="outline" class="cls-2" d="M328.62,75.09c44.24-106.55,285.63-99.7,266.72,76.69m1-21.69C767.84,21.18,861.82,438.6,600.53,370.42M617.07,356c-31.76,36.11-153.17,87.93-292.21,25m24.5,10c-91.82,40.73-176.65,31.33-232-26.26m23.89-6.55C-7.13,413.79-51.4,161.74,94.89,188.9m12.57,20.79C7.82,73.76,259.23-69,344.42,100.74" transform="translate(0 0)"/></g></svg>`}function f(){var f=document.querySelectorAll(".navlink");for(let k=0;k<f.length;k++){var g="black",h=0;if(0==k?(g=o,h=-800):1===k?(g=p,h=-300):2===k?(g=q,h=-500):3===k?(g=r,h=-200):4===k?(g=s,h=-100,c()&&(h=-400)):5===k?(g=t,h=-500,c()&&(h=-50)):6===k?(g=u,h=-500):7===k&&(g=v),c()){var j=window.btoa(d(g,h));f[k].style.backgroundImage="url(data:image/svg+xml;base64,"+j+")"}else{6<f[k].text.length&&(f[k].innerHTML=f[k].innerHTML.replaceAll(" ","<br>"));let c=a(g);var j=window.btoa(e("white","black","0.5rem","95%"));f[k].style.backgroundImage="url(data:image/svg+xml;base64,"+j+")";let d=-10;g==r&&(d=-20),f[k].style.color=b(c,d),f[k].addEventListener("mouseout",()=>{f[k].style.animationPlayState="running",f[k].style.color=b(c,d),f[k].style.filter=`none`}),f[k].addEventListener("mouseover",()=>{f[k].style.animationPlayState="paused",f[k].style.color=b(c,d+15),f[k].style.width=parseFloat(f[k].style.width.replaceAll("vw",""))+.8+"vw",f[k].style.filter=`drop-shadow(-0.1vw -0.1vw 0.35vw ${b(c,-20)}) drop-shadow(0.1vw 0.1vw 0.35vw ${b(c)}) drop-shadow(-0.1vw -0.1vw 0.35vw white) drop-shadow(0.1vw 0.1vw 0.35vw white)`});let i=6+h/100;f[k].style.top=i+"vw",f[k].style.padding=5-h/-250+"vw",document.getElementsByClassName("logo-container")[0].style.marginBottom="-5.5vw",document.getElementsByTagName("main")[0].style.marginTop="-3vw",0==k%2?(f[k].style.setProperty("--translationStart","0.45vw"),f[k].style.setProperty("--translationEnd","-0.45vw"),f[k].style.animation="MoveUpDown 2.5s linear infinite alternate"):(f[k].style.setProperty("--translationStart","-0.45vw"),f[k].style.setProperty("--translationEnd","0.45vw"),f[k].style.animation="MoveUpDown 2.5s linear infinite alternate")}}}function g(){let a=document.getElementById("mobileNavbar");a.style.display="block"===a.style.display?"none":"block"}function h(){let a=navbarHTML,b=document.getElementsByTagName("header")[0];b.innerHTML=headerEl,c()?(a=a.replaceAll("desktopNavbar","mobileNavbar"),a=a.replaceAll("navlink","navlink pencil"),b.id="mobileHeader",b.innerHTML="<div id=\"hamburgerContainer\">"+b.innerHTML+hamburger+"</div>"):b.id="desktopHeader";let d=document.getElementsByClassName("kite-logo")[0];d.style.visibility="visible";let e=document.getElementsByClassName("logo-img")[0];if(e.hidden=!1,b.innerHTML+=a,c()){let a=document.getElementById("hamburgerIcon");a.style.display="block",a.addEventListener("click",()=>{g()})}f()}function i(){document.querySelectorAll("a.navlink").forEach(a=>{a.classList.contains("click-ready")||m(a);a.classList.add("click-ready")})}function j(a){document.title="/"===a?n:a.replace(/[/-]/g," ").split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")+" | "+n}function k(a){document.getElementsByTagName("meta").description.content=metaDescriptions[a]}function l(a){clearTimeout(y);let b=new URL(a),c=decodeURIComponent(b.pathname);if(h(),z.innerHTML=mainContent[c],j(c),k(c),window.history.pushState({},"",c),i(),"/"==c|"/\u0443\u0447\u0438\u043B\u0438\u0449\u043D\u0430-\u0437\u0430\u043D\u0438\u043C\u0430\u043B\u043D\u044F"==c|"/\u043B\u044F\u0442\u043D\u0430-\u0438\u0433\u0440\u0430\u043B\u043D\u0438\u0446\u0430"==c|"/\u043B\u044F\u0442\u043D\u0430-\u0437\u0430\u043D\u0438\u043C\u0430\u043B\u043D\u0438\u0446\u0430"==c){function a(){const b=Array.from(document.getElementsByClassName("mySlides")),c=Array.from(document.getElementsByClassName("dot"));b.forEach(a=>{a.style.display="none"}),d++,d>b.length&&(d=1),c.forEach(a=>{a.classList.remove("activeDot")});try{b[d-1].style.display="block",c[d-1].classList.add("activeDot"),clearTimeout(y),y=setTimeout(a,7000)}catch(a){clearTimeout(y)}}function b(b){clearTimeout(y),d+=b,d>w.length?d=1:1>d&&(d=w.length);for(let a=0;a<w.length;a++)w[a].style.display="none";for(let a=0;a<x.length;a++)x[a].className=x[a].className.replace(" activeDot","");w[d-1].style.display="block",x[d-1].className+=" activeDot",y=setTimeout(a,7000)}function c(b){clearTimeout(y),b>w.length?b=1:1>b&&(b=w.length);for(let a=0;a<w.length;a++)w[a].style.display="none";for(let a=0;a<x.length;a++)x[a].className=x[a].className.replace(" activeDot","");w[b-1].style.display="block",x[b-1].className+=" activeDot",y=setTimeout(a,7000)}for(var d=0;y--;)clearTimeout(y);(function d(){w=document.getElementsByClassName("mySlides"),x=document.getElementsByClassName("dot"),clearTimeout(y),a(),document.getElementsByClassName("prev")[0].addEventListener("click",()=>b(-1)),document.getElementsByClassName("next")[0].addEventListener("click",()=>b(1)),document.querySelectorAll(".dot").forEach((a,b)=>{a.addEventListener("click",()=>c(b+1))})})()}else if("/\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"==c);const e=document.querySelectorAll(".chevronContainer");e.forEach(a=>{a.addEventListener("click",b=>{const c=a.previousElementSibling;c.checked=!c.checked})})}function m(a){a.addEventListener("click",b=>{b.preventDefault(),c()&&g();l(a.href)})}const n="\u0418\u0433\u0440\u0430\u043B\u043D\u0438\u0446\u0430 \u0417\u0430\u043D\u0438\u043C\u0430\u043B\u043D\u0438\u0446\u0430",o="#e63030",p="#0c69ab",q="#8ab93a",r="#f8cf0c",s="#08a2db",t="#ef9530",u="#84387b",v="#84387b";var w,x,y,y;window.addEventListener("resize",function(a){h(),c()?A.classList.replace("desktopBody","mobileBody"):A.classList.replace("mobileBody","desktopBody");i()});const z=document.querySelector("main"),A=document.querySelector("body");c()?A.classList.add("mobileBody"):A.classList.add("desktopBody");l(window.location);const B=`<p>&copy; ${new Date().getFullYear()} Игралница Занималница</p>`,C=document.getElementsByTagName("footer")[0];C.innerHTML=B,C.hidden=!1});