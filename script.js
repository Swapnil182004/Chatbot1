function attachFile(event) {
    const file = event.target.files[0];
    if (file) {
      const chatbox = document.getElementById('chatbox');
      const fileMessage = document.createElement('div');
      fileMessage.className = 'file-message';
      
      // Display the name of the attached file
      fileMessage.textContent = `Attached: ${file.name}`;
      chatbox.appendChild(fileMessage);
      
      // Optionally clear the file input
      event.target.value = '';
    }
  }
  
  function sendMessage() {
    const input = document.getElementById('user-input');
    const chatbox = document.getElementById('chatbox');
  
    if (input.value) {
      const message = document.createElement('div');
      message.className = 'chat-message';
      
      // Display the user's message
      message.textContent = input.value;
      chatbox.appendChild(message);
      
      // Clear the input after sending
      input.value = '';
    }
  }
  