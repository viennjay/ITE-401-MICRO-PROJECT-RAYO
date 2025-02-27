function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== ""){
        const chatMessage = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'outgoing');
        newMessage.textContent= message;
        chatMessage.appendChild(newMessage);
        messageInput.value = "";
        messageInput.focus();

        setTimeout(sendReply, 1000);
        
    }
}

function sendReply () {
    const chatMessages = document.getElementById('chat-messages');
    const replyMessage = document.createElement('div');
    replyMessage.classList.add('message', 'incominng');
    replyMessage.textContent='This is a sample reply.';
    chatMessages.appendChild(replyMessage);
}