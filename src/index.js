import { initPageStructure} from './modules/initial-page-load.js' 
import { createHomePage} from './modules/home.js'
import { createMenuPage} from './modules/menu.js'


console.log(this, '1') // this undefined
const tabsSelection = ((doc) => {
    const main = document.querySelector('#main');
    const tabs = [...document.querySelectorAll('.tab')];

    const homeElements = [...createHomePage];
    const menuElements = [...createMenuPage];

    const clearChilds = (el) => {
        while (el.firstChild) {    
            el.removeChild(el.firstChild);
        };
    }
    
    console.log(this, '2') // this undefined
    tabs.map(tab => tab.addEventListener('click', (e) => {
        console.log(this, '3'); // this undefined (this.dataset.tab)
        const whichTab =  e.target.attributes.getNamedItem('data-tab').value;
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
                main.textContent = 'Page To Do';
                console.log('Page to do');
                break;
        }
    }));
})(document)
