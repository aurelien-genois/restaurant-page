const siteContent = document.querySelector('#content');

const createHeader = ((doc) => {
    const _tabNames = ["Home", "Menu", "Contact"];

    const header = doc.createElement('header');
    header.setAttribute('id', 'header');
    // site title
    const h1 = doc.createElement('h1');
    h1.textContent = "Roboto sushi";
    h1.setAttribute('id', 'site-title');
    // tabs
    const tabsDiv = doc.createElement('div');
    tabsDiv.setAttribute('id', 'tabs');
    for(let i = 0; i < 3; i++) {
        const tab = doc.createElement('label');
        tab.textContent = _tabNames[i];
        tab.classList.add('tab');
        tabsDiv.appendChild(tab);
    }

    header.appendChild(h1);
    header.appendChild(tabsDiv);
    siteContent.appendChild(header);
})(document);

export {
    siteContent,
    createHeader
}