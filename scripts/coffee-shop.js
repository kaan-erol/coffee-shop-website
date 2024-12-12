import {products} from "../scripts/products.js";

// Calculating the brightness of color
function getBrightness(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return 0.299 * r + 0.587 * g + 0.114 * b;
}

const productContainer = document.querySelector('.product-container');

products.forEach((product, index) => {
    let productHTML;

    const brightness = getBrightness(product.backgroundColor);
    const rightClass = brightness < 128 ? 'product-right product-right-white' : 'product-right';
    const buttonClass = brightness < 128 ? 'product-btn-white' : 'product-btn-black';

    if (index % 2 == 0) {
        productHTML = `
            <div class="product" style="background-color: ${product.backgroundColor};">
                <div class="product-left">
                    <img src="${product.image}">
                </div>
                <div class="${rightClass}">
                    <div class="product-title">
                        ${product.title}
                    </div>
                    <div class="product-text">
                        ${product.text}
                    </div>
                    <div class="product-btn">
                        <button class="${buttonClass}" style="background-color: ${product.backgroundColor};">
                            ${product.button}
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        productHTML = `
            <div class="product" style="background-color: ${product.backgroundColor};">
                <div class="${rightClass}">
                    <div class="product-title">
                        ${product.title}
                    </div>
                    <div class="product-text">
                        ${product.text}
                    </div>
                    <div class="product-btn">
                        <button class="${buttonClass}" style="background-color: ${product.backgroundColor};">
                            ${product.button}
                        </button>
                    </div>
                </div>
                <div class="product-left">
                    <img src="${product.image}">
                </div>
            </div>
        `
    }

    productContainer.innerHTML += productHTML;
});