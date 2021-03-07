
const createDomElements = ((doc) => {
    const createParagraph = (textContent) => {
        const paragraph = doc.createElement('p');
        paragraph.textContent = textContent;
        return paragraph;
    }
    const createImg = (ImgSrc) => {
        const img = doc.createElement('img');
        img.src = ImgSrc;
        return img;
    }
    return {createParagraph, createImg};
})(document)

export {
    createDomElements
}