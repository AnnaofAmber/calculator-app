const e=document.querySelector("body"),t=document.getElementById("basic"),n=document.querySelector(".label-basic"),s=document.getElementById("light"),c=document.querySelector(".label-light"),o=document.getElementById("violet"),r=document.querySelector(".label-violet");function l(){t.checked&&(c.classList.remove("slider-btn"),r.classList.remove("slider-btn"),n.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.remove("body-light")),s.checked&&(n.classList.remove("slider-btn"),r.classList.remove("slider-btn"),c.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.add("body-light")),o.checked&&(n.classList.remove("slider-btn"),c.classList.remove("slider-btn"),r.classList.add("slider-btn"),e.classList.remove("body-light"),e.classList.add("body-violet"))}t.addEventListener("change",l),s.addEventListener("change",l),o.addEventListener("change",l);const d=document.querySelector(".result"),i=document.querySelectorAll(".btn-number"),u=document.querySelectorAll(".operation"),a=document.querySelector(".btn-equals");document.querySelector(".btn-reset");let m=[],b=[],h=0,v=!1,L=!1,y=!1,g=[];function p(e){m.push(Number(e.currentTarget.textContent));const t=m.map((e=>e)).join("");d.textContent=t,m.splice(0,1,Number(t)),m.splice(1,1)}function E(e){d.textContent=e.currentTarget.textContent,"+"===e.currentTarget.textContent&&(v||q()),"-"===e.currentTarget.textContent&&(L||f()),"x"===e.currentTarget.textContent&&(y||x()),m=[]}function q(){(L||y)&&(L=!1,y=!1,m=[]),v&&(v=!1);const e=[];e.push(m),v=!0;const t=e.map((e=>h+Number(e)));h=Number(t)}function f(){(v||y)&&(v=!1,y=!1,m=[]);const e=[];e.push(m),L=!0;const t=e.map((e=>(b.push(e),0===g.length&&g.push(e),0===h?g-e:h-e)));b.length>=2&&(h=Number(t))}function x(){(v||L)&&(v=!1,L=!1,m=[1]);const e=[];e.push(m),y=!0;const t=e.map((e=>(0===h&&(h=1),h*e)));h=Number(t)}i.forEach((e=>{e.addEventListener("click",p)})),u.forEach((e=>{e.addEventListener("click",E)})),a.addEventListener("click",(function(){v&&q(),L&&f(),y&&x(),m=[],d.textContent=h}));
//# sourceMappingURL=index.563054cc.js.map
