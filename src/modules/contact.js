import { createDomElements } from './domElement.js';

const createContact = ((doc) => {
  const createAbout = () => {
    const aboutDiv = doc.createElement('div');
    aboutDiv.setAttribute('id', 'contact-about');
    aboutDiv.classList.add('site-sections', 'contact-sections');

    const contactImg = createDomElements.createImg(
      'https://images.unsplash.com/photo-1552531268-3fe8c3fc8d84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    );
    contactImg.setAttribute('id', 'contact-img');

    const contactDesc = createDomElements.createParagraph(
      'Our sushi is located is on Ganymede, the greatest moon of Jupiter. Odio voluptatibus nihil expedita aut iure incidunt vitae impedit saepe facere. Eveniet consequuntur laudantium labore expedita.',
    );
    contactDesc.setAttribute('id', 'contact-desc');

    aboutDiv.appendChild(contactImg);
    aboutDiv.appendChild(contactDesc);

    return aboutDiv;
  };

  const createForm = () => {
    const contactForm = doc.createElement('form');
    contactForm.setAttribute('id', 'contact-form');
    contactForm.classList.add('site-sections', 'contact-sections');

    const contactMailLabel = createDomElements.createLabel(
      'Your email adress:',
      'contact-mail',
    );
    contactMailLabel.setAttribute('id', 'contact-mail-label');
    const contactMailInput = createDomElements.createInput('email');
    contactMailInput.setAttribute('id', 'contact-mail');

    const contactMessageLabel = createDomElements.createLabel(
      'Your message:',
      'contact-message',
    );
    contactMessageLabel.setAttribute('id', 'contact-message-label');
    const contactMessage = createDomElements.createInput('textarea');
    contactMessage.setAttribute('id', 'contact-message');

    const contactSubmit = createDomElements.createInput('submit');
    contactSubmit.setAttribute('id', 'contact-submit');
    contactSubmit.value = 'Send message';

    contactForm.appendChild(contactMailLabel);
    contactForm.appendChild(contactMailInput);
    contactForm.appendChild(contactMessageLabel);
    contactForm.appendChild(contactMessage);
    contactForm.appendChild(contactSubmit);

    return contactForm;
  };

  const createAdress = () => {
    const adressDiv = doc.createElement('div');
    adressDiv.setAttribute('id', 'contact-adress');
    adressDiv.classList.add('site-sections', 'contact-sections');

    const adressCoor = doc.createElement('div');
    adressCoor.setAttribute('id', 'contact-adress-coor');
    const country = createDomElements.createParagraph('Country');
    country.setAttribute('id', 'contact-adress-country');
    country.classList.add('contact-adress-text');
    const city = createDomElements.createParagraph('City');
    city.setAttribute('id', 'contact-adress-city');
    city.classList.add('contact-adress-text');
    const road = createDomElements.createParagraph('333 Road');
    road.setAttribute('id', 'contact-adress-road');
    road.classList.add('contact-adress-text');
    adressCoor.appendChild(country);
    adressCoor.appendChild(city);
    adressCoor.appendChild(road);

    const mapEmbed = doc.createElement('iframe');
    mapEmbed.setAttribute('id', 'contact-map');
    mapEmbed.src =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.477835903187!2d3.8091240801344073!3d43.617412662864034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6ac317b47b909%3A0x9d8496c1217f9864!2sRue%20Ganym%C3%A8de%2C%2034990%20Juvignac!5e0!3m2!1sfr!2sfr!4v1615203259650!5m2!1sfr!2sfr';
    mapEmbed.setAttribute('loading', 'lazy');

    adressDiv.appendChild(adressCoor);
    adressDiv.appendChild(mapEmbed);

    return adressDiv;
  };

  return [createAbout(), createForm(), createAdress()];
})(document);

export { createContact };
