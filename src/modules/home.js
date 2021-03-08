import { createDomElements} from './domElement.js'

const createHomePage = ((doc) => {
    const createSlogan = () => {
        const homeSlogan = doc.createElement('h2');
        homeSlogan.setAttribute('id', 'site-slogan');
        homeSlogan.textContent = 'Quantum suchi for faster delivery';
        return homeSlogan;
    }

    const createPresentation = () => {
        const homePresentation = doc.createElement('div');
        homePresentation.setAttribute('id', 'site-presentation');
        const homePresentationText = createDomElements.createParagraph('Hello, we make the best sushi in the universe here! Prepared with quantum technology, our sushi can be savored again and again, even after eaten! Our sushi will be back from past in a second, still as delicious as before!');
        homePresentationText.setAttribute('id', 'site-presentation-text');
        const homePresentationImg = createDomElements.createImg('https://pbs.twimg.com/media/DY6Y6ZlX0AAgaa0.jpg');
        homePresentationImg.setAttribute('id', 'site-presentation-img');
        homePresentation.appendChild(homePresentationText);
        homePresentation.appendChild(homePresentationImg);

        return homePresentation;
    }

    return [createSlogan(), createPresentation()];
})(document);

export {
    createHomePage
}