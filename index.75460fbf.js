const e=document.querySelector("body"),t=document.getElementById("basic"),n=document.querySelector(".label-basic"),c=document.getElementById("light"),s=document.querySelector(".label-light"),o=document.getElementById("violet"),r=document.querySelector(".label-violet");function l(){t.checked&&(s.classList.remove("slider-btn"),r.classList.remove("slider-btn"),n.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.remove("body-light")),c.checked&&(n.classList.remove("slider-btn"),r.classList.remove("slider-btn"),s.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.add("body-light")),o.checked&&(n.classList.remove("slider-btn"),s.classList.remove("slider-btn"),r.classList.add("slider-btn"),e.classList.remove("body-light"),e.classList.add("body-violet"))}t.addEventListener("change",l),c.addEventListener("change",l),o.addEventListener("change",l);const i=document.querySelector(".result"),u=document.querySelectorAll(".btn-number"),d=document.querySelectorAll(".operation"),a=document.querySelector(".btn-equals"),m=document.querySelector(".btn-reset"),b=document.querySelector(".btn-period"),h=document.querySelector(".btn-delete");let g=[],v=0,L=!1,p=!1,y=!1,f=!1,x=!1,E=!1,C=[],q=[],N=[],S=[],k=[];function T(e){let t;if(x?g.splice(0,1,C):g.push(Number(e.currentTarget.textContent)),t=g.map((e=>e)).join(""),!0===E){const e=g.map((e=>e)).join(".");i.textContent=Number(e),g.splice(0,1,Number(e)),g.splice(1,1),E=!1}else i.textContent=Number(t),g.splice(0,1,Number(t)),g.splice(1,1)}function B(e){i.textContent=e.currentTarget.textContent,"+"===e.currentTarget.textContent&&(L||I()),"-"===e.currentTarget.textContent&&(p||j()),"x"===e.currentTarget.textContent&&(y||A()),"/"===e.currentTarget.textContent&&(f||w()),C=[],g=[]}function I(){(p||y||f||x)&&(p=!1,y=!1,f=!1,g=[],x&&(g=C,x=!1)),L&&(L=!1);const e=[];e.push(g),L=!0;const t=e.map((e=>v+Number(e)));v=Number(t)}function j(){console.log(x),(L||y||f||x)&&(L=!1,y=!1,f=!1,g=[],x&&(g=C,x=!1));const e=[];e.push(g),p=!0;const t=e.map((e=>(N.push(e),0===q.length&&q.push(e),0===v?q-e:v-e)));N.length>=2&&(v=Number(t))}function A(){(L||p||f||x)&&(L=!1,p=!1,f=!1,g=[1],x&&(g=C,x=!1));const e=[];e.push(g),y=!0;const t=e.map((e=>(0===v&&(v=1),v*e)));v=Number(t)}function w(){(L||p||y||x)&&(L=!1,p=!1,y=!1,g=[1],S.push(v),x&&(S=[],g=C,x=!1));const e=[];e.push(g),f=!0;const t=e.map((e=>(k.push(e),0===S.length&&S.push(e),k.length>2?v/e:S/e)));v=Number(t)}u.forEach((e=>{e.addEventListener("click",T)})),d.forEach((e=>{e.addEventListener("click",B)})),a.addEventListener("click",(function(){L&&I(),p&&j(),y&&A(),f&&w(),g=[],i.textContent=v})),m.addEventListener("click",(function(){i.textContent=0,g=[],N=[],v=0,L=!1,p=!1,y=!1,f=!1,x=!1,E=!1,C=[],q=[],S=[],k=[]})),b.addEventListener("click",(function(){i.textContent+=".",E=!0})),h.addEventListener("click",(function(){g=[Number(i.textContent)];let e=g.toString();C=Number(e.slice(0,e.length-1)),x=!0,T()}));
//# sourceMappingURL=index.75460fbf.js.map