import { initPageStructure} from './modules/initial-page-load.js' 
import { createHomePage} from './modules/home.js'
import { createMenuPage} from './modules/menu.js'
import { createContactPage} from './modules/contact.js'
import { createContact} from './modules/contact.js'

console.log(this, '1') // this undefined
const tabsSelection = ((doc) => {
    const main = document.querySelector('#main');
    const tabs = [...document.querySelectorAll('.tab')];

    const homeElements = [...createHomePage];
    const menuElements = [...createMenuPage];
    const contactElements = [...createContact];

    
    const clearChilds = (el) => {
        while (el.firstChild) {    
            el.removeChild(el.firstChild);
        };
    }
    const setTabActive = (thisTab) => {
        tabs.map(tab => tab.classList.remove('current-tab'));
        thisTab.classList.add('current-tab');
    }

    // init home on
    homeElements.map(el => main.appendChild(el));
    setTabActive(tabs[0]);

    console.log(this, '2') // this undefined
    tabs.map(tab => tab.addEventListener('click', (e) => {
        console.log(this, '3'); // this undefined (this.dataset.tab)
        const whichTab =  e.target.attributes.getNamedItem('data-tab').value;
        setTabActive(e.target);
        switch(whichTab) {
            case 'home':
                clearChilds(main);
                homeElements.map(el => main.appendChild(el));
                break;
            case 'menu':
                clearChilds(main);
                menuElements.map(el => main.appendChild(el));
                break;
            case 'contact':
                clearChilds(main);
                contactElements.map(el => main.appendChild(el));
                break;
        } 
        // need to set the nav tabs state 'active'
        // need to load the home by default
    }));
})(document)
