!function(){var e=document.querySelector("body"),t=document.getElementById("basic"),n=document.querySelector(".label-basic"),r=document.getElementById("light"),o=document.querySelector(".label-light"),c=document.getElementById("violet"),s=document.querySelector(".label-violet");function u(){t.checked&&(o.classList.remove("slider-btn"),s.classList.remove("slider-btn"),n.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.remove("body-light")),r.checked&&(n.classList.remove("slider-btn"),s.classList.remove("slider-btn"),o.classList.add("slider-btn"),e.classList.remove("body-violet"),e.classList.add("body-light")),c.checked&&(n.classList.remove("slider-btn"),o.classList.remove("slider-btn"),s.classList.add("slider-btn"),e.classList.remove("body-light"),e.classList.add("body-violet"))}t.addEventListener("change",u),r.addEventListener("change",u),c.addEventListener("change",u);var l=document.querySelector(".result"),i=document.querySelectorAll(".btn-number"),a=document.querySelectorAll(".operation"),d=document.querySelector(".btn-equals"),m=document.querySelector(".btn-reset"),b=document.querySelector(".btn-period"),v=document.querySelector(".btn-delete"),h=[],g=[],f=0,p=!1,L=!1,y=!1,x=!1,C=[],E=[],N=[],q=[],S=[];function k(e){h.push(Number(e.currentTarget.textContent));var t=h.map((function(e){return e})).join("");if(l.textContent.includes(".")){var n=h.map((function(e){return e})).join(".");l.textContent=Number(n),h.splice(0,1,Number(n)),h.splice(1,1)}else l.textContent=Number(t),h.splice(0,1,Number(t)),h.splice(1,1);C.push(Number(l.textContent))}function T(e){l.textContent=e.currentTarget.textContent,"+"===e.currentTarget.textContent&&(p||j()),"-"===e.currentTarget.textContent&&(L||B()),"x"===e.currentTarget.textContent&&(y||I()),"/"===e.currentTarget.textContent&&(x||A()),h=[],C=[]}function j(){(L||y||x)&&(L=!1,y=!1,x=!1,h=[]),p&&(p=!1);var e=[];e.push(h),p=!0;var t=e.map((function(e){return f+Number(e)}));f=Number(t)}function B(){(p||y||x)&&(p=!1,y=!1,x=!1,h=[]);var e=[];e.push(h),L=!0;var t=e.map((function(e){return g.push(e),0===N.length&&N.push(e),0===f?N-e:f-e}));g.length>=2&&(f=Number(t))}function I(){(p||L||x)&&(p=!1,L=!1,x=!1,h=[1]);var e=[];e.push(h),y=!0;var t=e.map((function(e){return 0===f&&(f=1),f*e}));f=Number(t)}function A(){(p||L||y)&&(p=!1,L=!1,y=!1,h=[1],q.push(f));var e=[];e.push(h),x=!0;var t=e.map((function(e){return S.push(e),0===q.length&&q.push(e),S.length>2?f/e:q/e}));f=Number(t)}i.forEach((function(e){e.addEventListener("click",k)})),a.forEach((function(e){e.addEventListener("click",T)})),d.addEventListener("click",(function(){p&&j(),L&&B(),y&&I(),x&&A(),h=[],l.textContent=f})),m.addEventListener("click",(function(){l.textContent=0,h=[],g=[],f=0,p=!1,L=!1,y=!1,x=!1,N=[],q=[],S=[]})),b.addEventListener("click",(function(){l.textContent+="."})),v.addEventListener("click",(function(){for(var e,t=0;t<=C.length;t+=1)e=C[C.length-1].toString();for(var n=0;n<e.length-1;n+=1)E.push(e[n]);l.textContent=Number(E.join("")),h.push(Number(l.textContent)),console.log(h),console.log(C)}))}();
//# sourceMappingURL=index.13204c15.js.map
