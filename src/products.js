//PRODUCT LIST (max 5)
const products = [
    "Product 1",
    "Product 2",
    "",
    "",
    "",
    "Product 6"
];

//PRODUCT ASSIGNATION
for (i=0; i<products.length; i++) {
    if (products.length > 6) {
        break;
    }

    let x = 1;
    x+=i;

    const formProduct = document.querySelector("#product"+x);
    const hideProduct = document.querySelector("#product-div-"+x);

    if (products[i].length <= 3) {
        continue;
    }

    hideProduct.classList.remove("hidden");
    formProduct.innerHTML = products[i];
}

/*const formProduct1 = document.querySelector("#product1");
const formProduct2 = document.querySelector("#product2");
const formProduct3 = document.querySelector("#product3");

formProduct1.innerHTML = products[0];
formProduct2.innerHTML = products[1];
formProduct3.innerHTML = products[2];*/