document.addEventListener("DOMContentLoaded", function () {
    let sendButton = document.getElementById("sendButton");
    let indicator = document.getElementById("indicator");

    sendButton.addEventListener("click", function () {
        indicator.style.background = 'red';
    });
});