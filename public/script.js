document.addEventListener("DOMContentLoaded", function () {
    let sendButton = document.getElementById("sendButton");
    let indicator = document.getElementById("indicator");
    let message = document.getElementById("message-box-text");
    let chat = document.getElementById("chatspace");
    
    const socket = io();
    indicator.style.background = 'red';

    sendButton.addEventListener("click", function () {
        if (message.value) {
            socket.emit('chat-message', message.value);
            message.value = '';
        }
    });

    socket.on('chat_message', (msg)=>{
        const item = document.createElement('p');
        item.textContent = msg;
        chat.appendChild(item);
        chat.scrollTop = chat.scrollHeight;
    });
});