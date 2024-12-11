const products = [
    {
        title: "It's a pumpkin party",
        text: "The season's favorite makes fall fall. Enjoy the moment—hot, iced or blended.",
        button: "Order Now",
        image: "img/img1.jpg",
        backgroundColor: "rgb(250, 116, 92)"
    },
    {
        title: "Send a scary - delicious treat",
        text: "Share the thrill of Halloween by treating someone special to a eGift.",
        button: "Send an eGift",
        image: "img/img2.jpg",
        backgroundColor: "rgb(102, 30, 66)"
    },
    {
        title: "Merrily delicious",
        text: "Grab a toasty warm sandwich or a new Turkey Sage Danish and make your afternoon feel oh-so bright.",
        button: "Order Now",
        image: "img/img3.jpg",
        backgroundColor: "rgb(6, 206, 141)"
    }
];

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