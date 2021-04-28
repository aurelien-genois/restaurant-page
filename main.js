(()=>{"use strict";const t=(t=>{const e=["Home","Menu","Contact"],a=t.createElement("header");a.setAttribute("id","header");const s=t.createElement("h1");s.textContent="Roboto sushi",s.classList.add("titles"),s.setAttribute("id","site-title");const i=t.createElement("nav");i.setAttribute("id","tabs");for(let a=0;a<3;a++){const s=t.createElement("label");s.textContent=e[a],s.setAttribute("data-tab",e[a].toLowerCase()),s.classList.add("tab"),i.appendChild(s)}return a.appendChild(s),a.appendChild(i),{header:a}})(document),e=(t=>{const e=t.createElement("footer");e.setAttribute("id","footer");const a=t.createElement("p");return a.textContent="I am the footer",e.appendChild(a),{footer:e}})(document),a=((a=>{const s=a.querySelector("#content"),i=a.createElement("main");i.id="main",s.append(t.header,i,e.footer)})(document),s=document,{createParagraph:t=>{const e=s.createElement("p");return e.textContent=t,e},createImg:t=>{const e=s.createElement("img");return e.src=t,e},createInput:t=>{let e;return"textarea"===t?e=s.createElement("textarea"):(e=s.createElement("input"),e.type=t),e},createLabel:(t,e)=>{const a=s.createElement("label");return a.htmlFor=e,a.textContent=t,a}});var s;const i=(t,e,a,s)=>({getTitle:()=>t,getImgUrl:()=>e,getDesc:()=>a,getCategory:()=>s}),o=t=>{const e=document.createElement("div");e.classList.add("product-container",`${t.getCategory()}-products`);const s=document.createElement("h3");s.classList.add("product-title"),s.textContent=t.getTitle();const i=a.createImg(t.getImgUrl());i.alt="Sushi photography",i.classList.add("product-image");const o=a.createParagraph(t.getDesc());return o.classList.add("product-description"),e.appendChild(s),e.appendChild(i),e.appendChild(o),e},n=(t=>({createSlogan:()=>{const e=t.createElement("h2");return e.id="site-slogan",e.classList.add("titles"),e.textContent="Tasty and colorful sushis in the heart of Taipei! ",e},createPresentation:()=>{const e=t.createElement("section");e.id="site-presentation",e.classList.add("site-sections","home-sections");const s=a.createParagraph("\tHello, we make the best sushi in the universe here!\n\n\tPrepared with vegetables from our garden and cooked with a future technology, our sushi can be savored again and again, even after being eaten! Our sushi will be back from the past in a second, still as delicious as before!");s.id="site-presentation-text";const i=a.createImg("https://pbs.twimg.com/media/DY6Y6ZlX0AAgaa0.jpg");return i.id="site-presentation-img",i.alt="Roboto photograhpy",e.append(s,i),e},createThisWeekSection:e=>{const a=t.createElement("section");a.id="this-week-section",a.classList.add("site-sections","home-sections");const s=t.createElement("h3");s.id="this-week-title",s.textContent="This week menu",s.classList.add("titles","section-titles");const i=t.createElement("div");return i.id="this-week-menu",e.map((t=>{i.appendChild(o(t))})),a.append(s,i),a}}))(document),c=(t=>({createProductsList:(e,a)=>{const s=t.createElement("div");s.classList.add("products-list-sections",`${a.toLowerCase()}-products-section`),s.classList.add("site-sections","menu-sections");const i=t.createElement("h2");i.classList.add("titles","section-titles"),i.textContent=`${a}'s sushis`;const n=t.createElement("div");return n.classList.add("products-list"),e.map((t=>{n.appendChild(o(t))})),s.append(i,n),s}}))(document),r=(t=>[(()=>{const e=t.createElement("div");e.id="contact-about-section",e.classList.add("site-sections","contact-sections");const s=t.createElement("h2");s.classList.add("titles","section-titles"),s.id="contact-about-title",s.textContent="Our restaurant";const i=t.createElement("div");i.id="contact-presentation";const o=a.createImg("https://images.unsplash.com/photo-1552531268-3fe8c3fc8d84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");o.id="contact-img",o.alt="restaurant photography";const n=a.createParagraph("\tOur sushi restaurant is located is Xinyi, the most dynamic district of Tapei.\n\n\tWe open every day, every hour, save for the international robot day, which date is kept secret from humans.\n\n\tOur sushimen robots never sleep and are very hygienic for the food. Come see them at work anytime!");n.id="contact-desc",i.append(o,n);const c=t.createElement("div");c.id="contact-adress";const r=t.createElement("div");r.id="contact-adress-coor";const d=a.createParagraph("Taïwan");d.id="contact-adress-country",d.classList.add("contact-adress-text");const l=a.createParagraph("Taipei City, Xinyi District");l.id="contact-adress-city",l.classList.add("contact-adress-text");const p=a.createParagraph("Lane 39, Section 2,\nJilong Road,\nNo. 35, 1st Floor");p.id="contact-adress-road",p.classList.add("contact-adress-text"),r.appendChild(d),r.appendChild(l),r.appendChild(p);const u=t.createElement("iframe");return u.id="contact-map",u.loading="lazy",u.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1092.0601739132837!2d121.55941121800703!3d25.03082450777196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abca7f688cf7%3A0xb2221faaa8175ac4!2zTGEgRmFtaWxsZeaLieazleexs-WLkumkkOmbhg!5e1!3m2!1sfr!2sfr!4v1619598816818!5m2!1sfr!2sfr",c.append(r,u),e.append(s,i,c),e})(),(()=>{const e=t.createElement("div");e.id="contact-form-section",e.classList.add("site-sections","contact-sections");const s=t.createElement("h2");s.classList.add("titles","section-titles"),s.id="contact-form-title",s.textContent="Contact us!";const i=t.createElement("form");i.id="contact-form";const o=a.createLabel("Your email adress:","contact-mail");o.id="contact-mail-label";const n=a.createInput("email");n.id="contact-mail";const c=a.createLabel("Your message:","contact-message");c.id="contact-message-label";const r=a.createInput("textarea");r.id="contact-message";const d=a.createInput("submit");return d.id="contact-submit",d.value="Send message",i.append(o,n,c,r,d),e.append(s,i),e})()])(document),d=[i("Simple Sushis","https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80","This simple sushis will enjoy your daily and repetitive meals.","diet"),i("Soothing Sushi","https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80","Conforting salmon and spinash. Sushis for busy and worried people.","diet"),i("Light Sushi","https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80","Minimalist sushis for people who worry about getting fat.","diet")],l=[i("Fire Sushi","https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80","Burning sushis, only if you like to burn your tongue.","spicy"),i("Hot Sushi","https://images.unsplash.com/photo-1617196905426-dc375ac396e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80","Very warm sushis for people who feel always cold.","spicy"),i("Volcano Sushi","https://images.unsplash.com/photo-1599253334678-5025a751a06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80","These sushis wrap a lava fondue, for people who like death risk.","spicy")],p=[i("Avocado Sushi","https://images.unsplash.com/photo-1602554172650-043a2de54271?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80","Avocado, rice and seeweed for refreshing sushis.","veggie"),i("Bread Sushi","https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","Sushis wrapped in bread with endives and parships, for a countryside taste.","veggie"),i("Ratatouille Sushi","https://images.unsplash.com/photo-1585144570564-9629fa5ab791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80","Sushis with eggplant, zucchini, tomato and olive oil.","veggie")],u=[i("Spring Sushi","https://images.unsplash.com/photo-1515316941871-2f69c7f2e5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80","Refreshing sushis, mixing salmon, carrot, salad, rice.","season"),i("Blossom Sushi","https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80","Parnship, potatoes and salad mixed with olive oil for a taste of vegetable garden.","season"),i("Flower field Sushi","https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80","Varied sushis with tomato, beans, peas, eggplant and zucchini.","season")],h=[i("Flower field Sushi","https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80","Varied sushis with tomato, beans, peas, eggplant and zucchini.","season"),i("Hot Sushi","https://images.unsplash.com/photo-1617196905426-dc375ac396e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80","Very warm sushis for people who feel always cold.","spicy"),i("Ratatouille Sushi","https://images.unsplash.com/photo-1585144570564-9629fa5ab791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80","Sushis with eggplant, zucchini, tomato and olive oil.","veggie")];(t=>{const e=document.querySelector("#main"),a=[...document.querySelectorAll(".tab")],s=[n.createSlogan(),n.createPresentation(),n.createThisWeekSection(h)],i=[c.createProductsList(d,"Diet"),c.createProductsList(l,"Spicy"),c.createProductsList(p,"Veggie"),c.createProductsList(u,"Season")],o=[...r],m=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},f=t=>{a.map((t=>t.classList.remove("current-tab"))),t.classList.add("current-tab")};s.map((t=>e.appendChild(t))),f(a[0]),a.map((t=>t.addEventListener("click",(t=>{const a=t.target.dataset.tab;switch(f(t.target),a){case"home":m(e),s.map((t=>e.appendChild(t)));break;case"menu":m(e),i.map((t=>e.appendChild(t)));break;case"contact":m(e),o.map((t=>e.appendChild(t)))}}))))})(document)})();