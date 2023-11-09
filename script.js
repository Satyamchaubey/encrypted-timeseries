const socket = io('http://localhost:3000');

socket.on('message', (message) => {
  displayMessage(message);
});

socket.on('successRate', (rate) => {
  displaySuccessRate(rate);
});

function displayMessage(message) {
  // Assuming you have an element with id 'message-container' to display messages
  const messageContainer = document.getElementById('message-container');
  
  // Create a new <div> element to hold the message
  const messageDiv = document.createElement('div');
  messageDiv.innerText = message;
  
  // Append the new <div> to the message container
  messageContainer.appendChild(messageDiv);
}

function displaySuccessRate(rate) {
  // Assuming you have an element with id 'success-rate' to display success rate
  const successRateElement = document.getElementById('success-rate');
  
  // Update the content of the success rate element
  successRateElement.innerText = `Success Rate: ${rate}%`;
}
