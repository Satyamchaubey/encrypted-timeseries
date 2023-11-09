const socket = require('socket.io-client')('http://localhost:3000');
const crypto = require('crypto');
const messages = require('./data.json');
const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Function to generate a secret key for a message
function generateSecretKey(message) {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(message));
  return hash.digest('hex');
}

// Function to encrypt a message using aes-256-ctr encryption algorithm
function encryptMessage(message, secretKey) {
  // Implement aes-256-ctr encryption here
}

// Function to generate a random message with secret key and encrypted message
function generateRandomMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const secretKey = generateSecretKey(randomMessage);
  const encryptedMessage = encryptMessage(randomMessage, secretKey);

  return {
    ...randomMessage,
    secret_key: secretKey,
    encrypted_message: encryptedMessage,
  };
}

// Send a message stream to the server every 10 seconds
setInterval(() => {
  const messageStream = Array.from({ length: Math.floor(Math.random() * 451) + 49 }, generateRandomMessage);
  socket.emit('messageStream', messageStream.join('|'));
}, 10000);

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
