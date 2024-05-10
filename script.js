// Function to send a message
function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();
  const username = document.getElementById('usernameInput').value.trim();
  
  if (message !== '') {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    const messageContent = document.createElement('p');
    messageContent.textContent = username + ": " + message;
    messageContainer.appendChild(messageContent);
    document.getElementById('messageArea').appendChild(messageContainer);
    saveMessage(username, message); // Save message to local storage
    messageInput.value = '';
  }
}

// Function to save message to local storage
function saveMessage(username, message) {
  let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.push({ username, message });
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Function to load messages from local storage
function loadMessages() {
  const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.forEach(({ username, message }) => {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    const messageContent = document.createElement('p');
    messageContent.textContent = username + ": " + message;
    messageContainer.appendChild(messageContent);
    document.getElementById('messageArea').appendChild(messageContainer);
  });
}

// Load messages when the page is loaded
document.addEventListener('DOMContentLoaded', loadMessages);
