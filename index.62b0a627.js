const e=document.querySelector("body"),t=document.getElementById("basic"),n=document.querySelector(".label-basic"),s=document.getElementById("light"),o=document.querySelector(".label-light"),c=document.getElementById("violet"),l=document.querySelector(".label-violet");function r(){t.checked&&(o.classList.remove("slider-btn"),l.classList.remove("slider-btn"),n.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.remove("body-light")),s.checked&&(n.classList.remove("slider-btn"),l.classList.remove("slider-btn"),o.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.add("body-light")),c.checked&&(n.classList.remove("slider-btn"),o.classList.remove("slider-btn"),l.classList.add("slider-btn"),e.classList.remove("body-light"),e.classList.add("body-violet"))}t.addEventListener("change",r),s.addEventListener("change",r),c.addEventListener("change",r);const i=document.querySelector(".result"),d=document.querySelectorAll(".btn-number"),u=document.querySelectorAll(".operation"),a=document.querySelector(".btn-equals");document.querySelector(".btn-reset");let m=[],b=[],h=0,g=!1,v=!1,L=!1,y=!1,p=[],E=[],f=[];function q(e){m.push(Number(e.currentTarget.textContent));const t=m.map((e=>e)).join("");i.textContent=Number(t),m.splice(0,1,Number(t)),m.splice(1,1),console.log(h)}function x(e){i.textContent=e.currentTarget.textContent,"+"===e.currentTarget.textContent&&(g||C()),"-"===e.currentTarget.textContent&&(v||S()),"x"===e.currentTarget.textContent&&(L||N()),"/"===e.currentTarget.textContent&&(y||k()),console.log(h),m=[]}function C(){(v||L||y)&&(v=!1,L=!1,y=!1,m=[]),g&&(g=!1);const e=[];e.push(m),g=!0;const t=e.map((e=>h+Number(e)));h=Number(t)}function S(){(g||L||y)&&(g=!1,L=!1,y=!1,m=[]);const e=[];e.push(m),v=!0;const t=e.map((e=>(b.push(e),0===p.length&&p.push(e),0===h?p-e:h-e)));b.length>=2&&(h=Number(t))}function N(){(g||v||y)&&(g=!1,v=!1,y=!1,m=[1]);const e=[];e.push(m),L=!0;const t=e.map((e=>(0===h&&(h=1),h*e)));h=Number(t)}function k(){console.log(E),(g||v||L)&&(g=!1,v=!1,L=!1,m=[1],E.push(h));const e=[];e.push(m),y=!0;const t=e.map((e=>(f.push(e),0===E.length&&E.push(e),f.length>2?h/e:E/e)));h=Number(t)}console.log(h),d.forEach((e=>{e.addEventListener("click",q)})),u.forEach((e=>{e.addEventListener("click",x)})),a.addEventListener("click",(function(){g&&C(),v&&S(),L&&N(),y&&k(),m=[],i.textContent=h}));
//# sourceMappingURL=index.62b0a627.js.map
