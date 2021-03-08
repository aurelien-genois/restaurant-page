(()=>{"use strict";const t=(t=>{const e=["Home","Menu","Contact"],a=t.createElement("header");a.setAttribute("id","header");const i=t.createElement("h1");i.textContent="Roboto sushi",i.setAttribute("id","site-title");const s=t.createElement("nav");s.setAttribute("id","tabs");for(let a=0;a<3;a++){const i=t.createElement("label");i.textContent=e[a],i.setAttribute("data-tab",e[a].toLowerCase()),i.classList.add("tab"),s.appendChild(i)}return a.appendChild(i),a.appendChild(s),{header:a}})(document),e=(t=>{const e=t.createElement("footer");e.setAttribute("id","footer");const a=t.createElement("p");return a.textContent="I am the footer",e.appendChild(a),{footer:e}})(document),a=((a=>{const i=document.querySelector("#content"),s=a.createElement("main");s.setAttribute("id","main"),i.appendChild(t.header),i.appendChild(s),i.appendChild(e.footer)})(document),i=document,{createParagraph:t=>{const e=i.createElement("p");return e.textContent=t,e},createImg:t=>{const e=i.createElement("img");return e.src=t,e},createInput:t=>{let e;return"textarea"===t?e=i.createElement("textarea"):(e=i.createElement("input"),e.type=t),e},createLabel:(t,e)=>{const a=i.createElement("label");return a.htmlFor=e,a.textContent=t,a}});var i;const s=(t=>[(()=>{const e=t.createElement("h2");return e.setAttribute("id","site-slogan"),e.textContent="Quantum suchi for faster delivery",e})(),(()=>{const e=t.createElement("div");e.setAttribute("id","site-presentation");const i=a.createParagraph("Hello, we make the best sushi in the universe here! Prepared with quantum technology, our sushi can be savored again and again, even after eaten! Our sushi will be back from past in a second, still as delicious as before!");i.setAttribute("id","site-presentation-text");const s=a.createImg("https://pbs.twimg.com/media/DY6Y6ZlX0AAgaa0.jpg");return s.setAttribute("id","site-presentation-img"),e.appendChild(i),e.appendChild(s),e})()])(document),n=(t=>{const e=(e,i,s)=>{const n=t.createElement("div");n.classList.add("product-container");const r=t.createElement("h3");r.classList.add("product-title"),r.textContent=e;const d=a.createImg(i);d.classList.add("product-image");const o=a.createParagraph(s);return o.classList.add("product-description"),n.appendChild(r),n.appendChild(d),n.appendChild(o),n},i=t.createElement("div");return i.setAttribute("id","products-list"),i.appendChild(e("One Sushi","https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80","This Sushi will enjoy your daily and repetitive meals.")),i.appendChild(e("Diet Sushi","https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80","Sushis for busy and worried people.")),i.appendChild(e("One Sushi","https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80","This Sushi will enjoy your daily and repetitive meals.")),i.appendChild(e("Diet Sushi","https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80","Sushis for busy and worried people.")),[i]})(document),r=(t=>[(()=>{const e=t.createElement("div");e.setAttribute("id","contact-about");const i=a.createImg("https://images.unsplash.com/photo-1552531268-3fe8c3fc8d84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");i.setAttribute("id","contact-img");const s=a.createParagraph("Our sushi is located is on Ganymede, the greatest moon of Jupiter. Odio voluptatibus nihil expedita aut iure incidunt vitae impedit saepe facere. Eveniet consequuntur laudantium labore expedita.");return s.setAttribute("id","contact-desc"),e.appendChild(i),e.appendChild(s),e})(),(()=>{const e=t.createElement("form");e.setAttribute("id","contact-form");const i=a.createLabel("Your email adress:","contact-mail");i.setAttribute("id","contact-mail-label");const s=a.createInput("email");s.setAttribute("id","contact-mail");const n=a.createLabel("Your message:","contact-message");n.setAttribute("id","contact-message-label");const r=a.createInput("textarea");r.setAttribute("id","contact-message");const d=a.createInput("submit");return d.setAttribute("id","contact-submit"),d.value="Send message",e.appendChild(i),e.appendChild(s),e.appendChild(n),e.appendChild(r),e.appendChild(d),e})(),(()=>{const e=t.createElement("div");e.setAttribute("id","contact-adress");const i=t.createElement("div");i.setAttribute("id","contact-adress-coor");const s=a.createParagraph("Country");s.setAttribute("id","contact-adress-country"),s.classList.add("contact-adress-text");const n=a.createParagraph("City");n.setAttribute("id","contact-adress-city"),n.classList.add("contact-adress-text");const r=a.createParagraph("333 Road");r.setAttribute("id","contact-adress-road"),r.classList.add("contact-adress-text"),i.appendChild(s),i.appendChild(n),i.appendChild(r);const d=t.createElement("iframe");return d.setAttribute("id","contact-map"),d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.477835903187!2d3.8091240801344073!3d43.617412662864034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6ac317b47b909%3A0x9d8496c1217f9864!2sRue%20Ganym%C3%A8de%2C%2034990%20Juvignac!5e0!3m2!1sfr!2sfr!4v1615203259650!5m2!1sfr!2sfr",d.setAttribute("loading","lazy"),e.appendChild(i),e.appendChild(d),e})()])(document);console.log(void 0,"1"),(t=>{const e=document.querySelector("#main"),a=[...document.querySelectorAll(".tab")],i=[...s],d=[...n],o=[...r],c=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},l=t=>{a.map((t=>t.classList.remove("current-tab"))),t.classList.add("current-tab")};i.map((t=>e.appendChild(t))),l(a[0]),console.log(void 0,"2"),a.map((t=>t.addEventListener("click",(t=>{console.log(void 0,"3");const a=t.target.attributes.getNamedItem("data-tab").value;switch(l(t.target),a){case"home":c(e),i.map((t=>e.appendChild(t)));break;case"menu":c(e),d.map((t=>e.appendChild(t)));break;case"contact":c(e),o.map((t=>e.appendChild(t)))}}))))})(document)})();