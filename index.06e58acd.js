const e=document.querySelector("body"),t=document.getElementById("basic"),n=document.querySelector(".label-basic"),s=document.getElementById("light"),c=document.querySelector(".label-light"),o=document.getElementById("violet"),r=document.querySelector(".label-violet");function l(){t.checked&&(c.classList.remove("slider-btn"),r.classList.remove("slider-btn"),n.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.remove("body-light")),s.checked&&(n.classList.remove("slider-btn"),r.classList.remove("slider-btn"),c.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.add("body-light")),o.checked&&(n.classList.remove("slider-btn"),c.classList.remove("slider-btn"),r.classList.add("slider-btn"),e.classList.remove("body-light"),e.classList.add("body-violet"))}t.addEventListener("change",l),s.addEventListener("change",l),o.addEventListener("change",l);const d=document.querySelector(".result"),i=document.querySelectorAll(".btn-number"),a=document.querySelectorAll(".operation"),u=document.querySelector(".btn-equals");document.querySelector(".btn-reset");let m,b=[],v=0,L=!1,y=!1;function g(e){y||(m=Number(e.currentTarget.textContent)),0!==v&&(m=0),b.push(Number(e.currentTarget.textContent)),d.textContent=b.map((e=>e)).join(""),console.log(y),L&&E(),y&&q()}function h(e){d.textContent=e.currentTarget.textContent,"+"===e.currentTarget.textContent&&(L||E()),"-"===e.currentTarget.textContent&&(y||q()),b=[]}function E(){const e=[];e.push(b),L=!0;const t=e.map((e=>v+Number(e)));v=Number(t)}function q(){const e=[];e.push(b);let t=m;y=!0;const n=e.map((e=>(v=v-Number(e)+t,v)));console.log(n),v=Number(n)}i.forEach((e=>{e.addEventListener("click",g)})),a.forEach((e=>{e.addEventListener("click",h)})),u.addEventListener("click",(function(){d.textContent=v}));
//# sourceMappingURL=index.06e58acd.js.map
