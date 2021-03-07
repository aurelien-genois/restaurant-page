import { createDomElements} from './domElement.js'

const createMenuPage = ((doc) => {
    // one product template
    const createProduct = (title, imgSrc, desc) => {
        const productContainer = doc.createElement('div');
        productContainer.classList.add('product-container');

        const productTitle = doc.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = title;

        const productImg = createDomElements.createImg(imgSrc);
        productImg.classList.add('product-image');

        const productDesc = createDomElements.createParagraph(desc);
        productDesc.classList.add('product-description');

        productContainer.appendChild(productTitle);
        productContainer.appendChild(productImg);
        productContainer.appendChild(productDesc);

        return productContainer;
    };

    const productsList = doc.createElement('div');
    productsList.setAttribute('id', 'products-list');

    // add some products
    productsList.appendChild(createProduct('One Sushi', 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80', 'This Sushi will enjoy your daily and repetitive meals.'));
    productsList.appendChild(createProduct('Diet Sushi', 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80', 'Sushis for busy and worried people.'));
    productsList.appendChild(createProduct('One Sushi', 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80', 'This Sushi will enjoy your daily and repetitive meals.'));
    productsList.appendChild(createProduct('Diet Sushi', 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80', 'Sushis for busy and worried people.'));

    return [productsList];
}) (document)


export {
    createMenuPage
}