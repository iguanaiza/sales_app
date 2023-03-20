//HIDE/SHOW FORM/VERIFICATION
function hideForm() {

    const formValid = document.querySelector("#sales-form").checkValidity(); 

    if (formValid == false) {
        return;
    }

    const appForm = document.querySelector(".app-form");
    const clear = document.querySelector(".switchVer");

    clear.classList.remove("switchVer");
    appForm.classList.add("switchVer");
}

function hideVer() {
    const appVer = document.querySelector(".app-ver");
    const clear = document.querySelector(".switchVer");

    clear.classList.remove("switchVer");
    appVer.classList.add("switchVer");
}

//TAKE DATA FROM FORM
const formData = [
    "product",
    "title",
    "name",
    "surname",
    "zip",
    "city",
    "street",
    "house",
    "flat",
    "mobile",
    "phone",
    "email"
]

function getData(){

    for (i=0; i<formData.length; i++) {
        if (formData.length > 12) {
            break;
        }

        if (i < 2) {
            let x = 0;
            x+=i;

            const formField = document.querySelector('input[name='+formData[x]+']:checked').value;
            const verField = document.querySelector("#app-ver-"+formData[x]);

            verField.innerHTML = formField;
        }

        x = 2;
        x+=i;

        const formField = document.querySelector("#"+formData[x]).value;
        const verField = document.querySelector("#app-ver-"+formData[x]);

        if (formData[x] == "flat" && formField != 0){
            verField.innerHTML = "/ " + formField;
        }

        else verField.innerHTML = formField;
    }
}
/*function getData(){
    const formProduct = document.querySelector('input[name="product"]:checked').value;
    const formTitle = document.querySelector('input[name="title"]:checked').value;
    const formName = document.querySelector("#name").value;
    const formSurname = document.querySelector("#surname").value;
    const formZip = document.querySelector("#zip").value;
    const formCity = document.querySelector("#city").value;
    const formStreet = document.querySelector("#street").value;
    const formHouse = document.querySelector("#house").value;
    const formFlat = document.querySelector("#flat").value;
    const formMobile = document.querySelector("#mobile").value;
    const formPhone = document.querySelector("#phone").value;
    const formEmail = document.querySelector("#email").value;

    const verProduct = document.querySelector("#app-ver-product");
    const verTitle = document.querySelector("#app-ver-title");
    const verName = document.querySelector("#app-ver-name");
    const verSurname = document.querySelector("#app-ver-surname");
    const verZip = document.querySelector("#app-ver-zip");
    const verCity = document.querySelector("#app-ver-city");
    const verStreet = document.querySelector("#app-ver-street");
    const verHouse = document.querySelector("#app-ver-house");
    const verFlat = document.querySelector("#app-ver-flat");
    const verMobile = document.querySelector("#app-ver-mobile");
    const verPhone = document.querySelector("#app-ver-phone");
    const verEmail = document.querySelector("#app-ver-email");

    verProduct.innerHTML = formProduct;
    verTitle.innerHTML = formTitle;
    verName.innerHTML = formName;
    verSurname.innerHTML = formSurname;
    verZip.innerHTML = formZip;
    verCity.innerHTML = formCity;
    verStreet.innerHTML = formStreet;
    verHouse.innerHTML = formHouse;
    verMobile.innerHTML = formMobile;
    
    if (formFlat != 0) {
        verFlat.classList.remove("hidden");
        verFlat.innerHTML = '/ ' + formFlat;
    }
    else verFlat.classList.add("hidden");

    if (formPhone != 0) {
        verPhone.classList.remove("hidden");
        verPhone.innerHTML = formPhone;
    }
    else verPhone.classList.add("hidden");

    if (formEmail != 0) {
        verEmail.classList.remove("hidden");
        verEmail.innerHTML = formEmail;
    }
    else verEmail.classList.add("hidden");
}*/

//BUTTONS
const btnBack = document.querySelector("#btn-back");
const btnCallback = document.querySelector("#btn-callback");
const btnNext = document.querySelector("#btn-next");
const btnNo = document.querySelector("#btn-no");
const btnOther = document.querySelector("#btn-other");

btnNext.addEventListener("click", () => {    
    hideForm();
    getData();    
});

btnBack.addEventListener("click", hideVer);