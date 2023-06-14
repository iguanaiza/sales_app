//PRODUCT LIST (max 5 items, min. characters in name is 3)
const products = [
    "Product 1",
    "Product 2",
    "",
    "",
    "",
    "Product 6"
];

//PRODUCT ASSIGNATION FOR FORM
for (i=0; i<products.length; i++) {
    if (products.length > 6) {
        break;
    }

    let x = 1;
    x+=i;

    const formProduct = document.querySelector("#product"+x);
    const hideProduct = document.querySelector("#product-div-"+x);

    if (products[i].length <= 3) { //min. product name lenght is 3 char.
        continue;
    }

    hideProduct.classList.remove("hidden");
    formProduct.innerHTML = products[i];
}