import { createProductContainer } from './product-class.js';

const createMenuPage = ((doc) => {
  // one product template

  const createProductList = (productsArr) => {
    const productsList = doc.createElement('div');
    productsList.setAttribute('id', 'products-list');

    console.log(productsArr);

    productsArr.map((product) => {
      productsList.appendChild(createProductContainer(product));
    });

    return productsList;
  };

  return { createProductList };
})(document);

export { createMenuPage };