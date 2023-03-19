//HIDE/SHOW FORM/VERIFICATION
function hideForm() {

    const formValid = document.querySelector("#sales-form").checkValidity(); 

    if (formValid == false) {
        return;
    }

    const appForm = document.querySelector(".app-form");
    const clear = document.querySelector(".hidden");

    clear.classList.remove("hidden");
    appForm.classList.add("hidden");
}

function hideVer() {
    const appVer = document.querySelector(".app-ver");
    const clear = document.querySelector(".hidden");

    clear.classList.remove("hidden");
    appVer.classList.add("hidden");
}

//TAKE DATA FROM FORM
function getData(){
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

    verTitle.innerHTML = formTitle;
    verName.innerHTML = formName;
    verSurname.innerHTML = formSurname;
    verZip.innerHTML = formZip;
    verCity.innerHTML = formCity;
    verStreet.innerHTML = formStreet;
    verHouse.innerHTML = formHouse;
    verMobile.innerHTML = formMobile;
    
    if (formFlat != 0) {
        verFlat.classList.remove("not");
        verFlat.innerHTML = '/ ' + formFlat;
    }
    else verFlat.classList.add("not");

    if (formPhone != 0) {
        verPhone.classList.remove("not");
        verPhone.innerHTML = formPhone;
    }
    else verPhone.classList.add("not");

    if (formEmail != 0) {
        verEmail.classList.remove("not");
        verEmail.innerHTML = formEmail;
    }
    else verEmail.classList.add("not");
}

//BUTTONS
const btnConfirm = document.querySelector("#btn-confirm");
const btnBack = document.querySelector("#btn-back");
const btnDeclined = document.querySelector("#btn-declined");
const btnRecall = document.querySelector("#btn-recall");
const btnOther = document.querySelector("#btn-other");

btnConfirm.addEventListener("click", () => {    
    hideForm();
    getData();    
})

btnBack.addEventListener("click", hideVer);