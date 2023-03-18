const confirmBtn = document.querySelector("#btn-confirm");
const backBtn = document.querySelector("#btn-back");
const declinedBtn = document.querySelector("#btn-declined");
const recallBtn = document.querySelector("#btn-recall");
const otherBtn = document.querySelector("#btn-other");


function hideForm() {
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

confirmBtn.addEventListener("click", hideForm);
backBtn.addEventListener("click", hideVer);