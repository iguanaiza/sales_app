//HIDE/SHOW FORM/VERIFICATION
function hideForm() {
    const appFormDiv = document.querySelector(".app-form");
    const clear = document.querySelector(".switchVer");
    const formValid = appForm.checkValidity(); 

    if (formValid == false) {
        return;
    }
 
    clear.classList.remove("switchVer");
    appFormDiv.classList.add("switchVer");

    getData(); 
}

function hideVer() {
    const appVerDiv = document.querySelector(".app-ver");
    const clear = document.querySelector(".switchVer");

    clear.classList.remove("switchVer");
    appVerDiv.classList.add("switchVer");
}

//FORM FIELDS
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

//TAKE DATA FROM FORM TO PUT INTO VERIFICATION
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

//FORM
const appForm = document.querySelector("#sales-form");

appForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

//BUTTONS
const btnBack = document.querySelector("#btn-back");
const btnCallback = document.querySelector("#btn-callback");
const btnNext = document.querySelector("#btn-next");
const btnNo = document.querySelector("#btn-no");
const btnOther = document.querySelector("#btn-other");

btnNext.addEventListener("click", hideForm); //hides form, shows verification
btnBack.addEventListener("click", hideVer); //hides verification, shows form