import { createDomElements } from './domElement.js';
import { createProductContainer } from './product-class.js';

const createHomePage = ((doc) => {
  const createSlogan = () => {
    const homeSlogan = doc.createElement('h2');
    homeSlogan.id = 'site-slogan';
    homeSlogan.classList.add('titles');
    homeSlogan.textContent = 'Quantum sushi for faster delivery';
    return homeSlogan;
  };

  const createPresentation = () => {
    const homePresentation = doc.createElement('section');
    homePresentation.id = 'site-presentation';
    homePresentation.classList.add('site-sections', 'home-sections');
    const homePresentationText = createDomElements.createParagraph(
      'Hello, we make the best sushi in the universe here! Prepared with quantum technology, our sushi can be savored again and again, even after eaten! Our sushi will be back from past in a second, still as delicious as before!',
    );
    homePresentationText.id = 'site-presentation-text';
    const homePresentationImg = createDomElements.createImg(
      'https://pbs.twimg.com/media/DY6Y6ZlX0AAgaa0.jpg',
    );
    homePresentationImg.id = 'site-presentation-img';
    homePresentation.append(homePresentationText, homePresentationImg);

    return homePresentation;
  };
  const createThisWeekSection = (products) => {
    const thisWeekSection = doc.createElement('section');
    thisWeekSection.id = 'this-week-section';
    thisWeekSection.classList.add('site-sections', 'home-sections');
    const thisWeekTitle = doc.createElement('h3');
    thisWeekTitle.id = 'this-week-title';
    thisWeekTitle.textContent = 'This week menu';
    thisWeekTitle.classList.add('titles', 'section-titles');
    const thisWeekMenu = doc.createElement('div');
    thisWeekMenu.id = 'this-week-menu';
    products.map((product) => {
      thisWeekMenu.appendChild(createProductContainer(product));
    });
    thisWeekSection.append(thisWeekTitle, thisWeekMenu);
    return thisWeekSection;
  };

  return { createSlogan, createPresentation, createThisWeekSection };
})(document);

export { createHomePage };
