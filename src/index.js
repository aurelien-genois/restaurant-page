import { initPageStructure } from './modules/initial-page-load.js';
import { createHomePage } from './modules/home.js';
import { createMenuPage } from './modules/menu.js';
import { createContactPage } from './modules/contact.js';
import { createContact } from './modules/contact.js';
import { product } from './modules/product-class.js';

// list of products
const listOfProducts = [
  product(
    'One Sushi',
    'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'This Sushi will enjoy your daily and repetitive meals.',
  ),
  product(
    'Diet Sushi',
    'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    'Sushis for busy and worried people.',
  ),
  product(
    'One Sushi',
    'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'This Sushi will enjoy your daily and repetitive meals.',
  ),
  product(
    'Diet Sushi',
    'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    'Sushis for busy and worried people.',
  ),
];

// ! update the branch gh-pages if modifications
// git subtree push --prefix dist origin gh-pages

const tabsSelection = ((doc) => {
  const main = document.querySelector('#main');
  const tabs = [...document.querySelectorAll('.tab')];

  const homeElements = [
    createHomePage.createSlogan(),
    createHomePage.createPresentation(),
    createHomePage.createThisWeekSection(listOfProducts),
  ];
  const menuElements = [createMenuPage.createProductList(listOfProducts)];
  const contactElements = [...createContact];

  const clearChilds = (el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  };
  const setTabActive = (thisTab) => {
    tabs.map((tab) => tab.classList.remove('current-tab'));
    thisTab.classList.add('current-tab');
  };

  // init home on
  homeElements.map((el) => main.appendChild(el));
  setTabActive(tabs[0]);

  // manage the tabs selection
  tabs.map((tab) =>
    tab.addEventListener('click', (e) => {
      const whichTab = e.target.dataset.tab;
      setTabActive(e.target);
      switch (whichTab) {
        case 'home':
          clearChilds(main);
          homeElements.map((el) => main.appendChild(el));
          break;
        case 'menu':
          clearChilds(main);
          menuElements.map((el) => main.appendChild(el));
          break;
        case 'contact':
          clearChilds(main);
          contactElements.map((el) => main.appendChild(el));
          break;
      }
    }),
  );
})(document);
