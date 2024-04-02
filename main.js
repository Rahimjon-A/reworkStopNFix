const button1 = document.querySelector("#popoverHeader");
const button2 = document.querySelector("#popHeader");
const popoverWindow = document.querySelector("#hiddenWindow");
const closerBtn = document.querySelector("#closer");

button1.addEventListener("click", () => {

        button1.classList.toggle("border");
        popoverWindow.classList.toggle("inactive");



});

button2.addEventListener("click", () => {
    popoverWindow.classList.toggle("inactive");
    button2.classList.toggle("border");
});

closerBtn.addEventListener("click", () => {
    popoverWindow.classList.add("inactive");
    button1.classList.remove("border");
    button2.classList.remove("border");
});

const mobileContact = document.querySelector("#mobileContact");
const mobilePhone = document.querySelector("#mobilePhone");

mobileContact.addEventListener("click", () => {
    mobilePhone.classList.toggle("displayNone");
});

const closeButton = document.querySelector("#mobileClose");
const popoverBody = document.querySelector("#popoverBody");
const hamburgerMenu = document.querySelector("#hamburgerMenu");

closeButton.addEventListener("click", () => {
    popoverBody.classList.toggle("displayNone");
});

hamburgerMenu.addEventListener("click", () => {
    popoverBody.classList.toggle("displayNone");

    if (!mobilePhone.classList.contains("displayNone")) {
        mobilePhone.classList.add("displayNone");
    }
});

const partnersBtn = document.querySelector("#partnersBtn");
const popoverPartner = document.querySelector("#popoverPartner");

partnersBtn.addEventListener("click", () => {
    popoverPartner.classList.toggle("displayNone");
});

const infoBtn = document.querySelector("#info");
const popoverList = document.querySelector("#popoverList");

infoBtn.addEventListener("click", () => {
    popoverList.classList.toggle("displayNone");
});
