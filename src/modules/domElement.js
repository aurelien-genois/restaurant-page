const createDomElements = ((doc) => {
  const createParagraph = (textContent) => {
    const paragraph = doc.createElement('p');
    paragraph.textContent = textContent;
    return paragraph;
  };
  const createImg = (ImgSrc) => {
    const img = doc.createElement('img');
    img.src = ImgSrc;
    return img;
  };
  const createInput = (type) => {
    let input;
    if (type === 'textarea') {
      input = doc.createElement('textarea');
    } else {
      input = doc.createElement('input');
      input.type = type;
    }
    return input;
  };
  const createLabel = (textContent, forAttr) => {
    const label = doc.createElement('label');
    label.htmlFor = forAttr;
    label.textContent = textContent;
    return label;
  };

  return { createParagraph, createImg, createInput, createLabel };
})(document);

export { createDomElements };
