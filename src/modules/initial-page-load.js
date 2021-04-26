const createHeader = ((doc) => {
  const _tabNames = ['Home', 'Menu', 'Contact'];

  const header = doc.createElement('header');
  header.setAttribute('id', 'header');
  // site title
  const h1 = doc.createElement('h1');
  h1.textContent = 'Roboto sushi';
  h1.setAttribute('id', 'site-title');
  // tabs
  const tabsDiv = doc.createElement('nav');
  tabsDiv.setAttribute('id', 'tabs');
  for (let i = 0; i < 3; i++) {
    const tab = doc.createElement('label');
    tab.textContent = _tabNames[i];
    tab.setAttribute('data-tab', _tabNames[i].toLowerCase());
    tab.classList.add('tab');
    tabsDiv.appendChild(tab);
  }

  header.appendChild(h1);
  header.appendChild(tabsDiv);

  return { header };
})(document);

const createFooter = ((doc) => {
  const footer = doc.createElement('footer');
  footer.setAttribute('id', 'footer');

  const footerTemp = doc.createElement('p');
  footerTemp.textContent = 'I am the footer';

  footer.appendChild(footerTemp);

  return { footer };
})(document);

const initPageStructure = ((doc) => {
  const siteContent = document.querySelector('#content');
  const siteMain = doc.createElement('main');
  siteMain.setAttribute('id', 'main');

  siteContent.appendChild(createHeader.header);
  siteContent.appendChild(siteMain);
  siteContent.appendChild(createFooter.footer);
})(document);

export { initPageStructure };
