document.addEventListener("DOMContentLoaded", function () {
    let sendButton = document.getElementById("sendButton");
    let indicator = document.getElementById("indicator");

    sendButton.addEventListener("click", function () {
        const socket = io();
        indicator.style.background = 'red';
    });
});