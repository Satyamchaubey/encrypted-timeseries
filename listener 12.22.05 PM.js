const socketIO = require('socket.io');
const crypto = require('crypto');
const mongoose = require('mongoose');

// Define the Mongoose model schema for storing messages
const Message = mongoose.model('Message', {
  name: String,
  origin: String,
  destination: String,
  secret_key: String,
  timestamp: Date
});

const io = socketIO(3000);

io.on('connection', (socket) => {
  socket.on('messageStream', (encryptedMessageStream) => {
    const messages = encryptedMessageStream.split('|');

    messages.forEach((message) => {
      const decryptedMessage = decryptMessage(message);

      if (validateMessage(decryptedMessage)) {
        const timestamp = new Date();
        saveToDatabase({...decryptedMessage, timestamp});
      }
    });
  });
});

function decryptMessage(encryptedMessage) {
  // Use aes-256-ctr decryption algorithm here
  // For example:
  // const decipher = crypto.createDecipher('aes-256-ctr', 'your_pass_key');
  // let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8');
  // decryptedMessage += decipher.final('utf8');
  // return JSON.parse(decryptedMessage);
}

function validateMessage(message) {
  const { name, origin, destination, secret_key } = message;
  const hash = crypto.createHash('sha256').update(JSON.stringify({ name, origin, destination })).digest('hex');
  return hash === secret_key;
}

function saveToDatabase(message) {
  const newMessage = new Message(message);
  newMessage.save((err, savedMessage) => {
    if (err) {
      console.error('Error saving message:', err);
    } else {
      console.log('Message saved:', savedMessage);
    }
  });
}
