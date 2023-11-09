Encrypted Timeseries
This project is a backend application that generates and emits an encrypted data stream over a socket, listens to incoming data stream on a socket, decrypts and decodes it, saves to a time series database, and then emits the saved data to a small frontend app.

Table of Contents
Overview
Features
Getting Started
Prerequisites
Installation
Usage
Architecture
Technologies Used
Contributing
License
Acknowledgements
Overview
The project aims to create a secure and efficient system for real-time data processing. It's designed for applications that require high data integrity and security, making it suitable for various industries including finance, healthcare, and IoT.

Features
Generates periodic encrypted data streams.
Decrypts and validates incoming data streams.
Saves validated data to a time series database.
Real-time display of valid data in the frontend.
Getting Started
Prerequisites
Node.js and npm installed.
MongoDB server set up.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/satyam/encrypted-timeseries.git
cd encrypted-timeseries
Install dependencies:
bash
Copy code
npm install
Usage
Start the Emitter Service:
bash
Copy code
node emitter.js
Start the Listener Service:
bash
Copy code
node listener.js
Open index.html in a web browser to view the frontend.
Architecture
The project follows a microservices architecture with two main components: Emitter Service and Listener Service. The Emitter Service generates encrypted data streams, while the Listener Service receives, decrypts, validates, and saves the data.

Technologies Used
Node.js: The runtime environment for running the JavaScript code.
Socket.io: Enables real-time, bidirectional, and event-based communication.
Crypto-js: Provides cryptographic functions for encryption and decryption.
MongoDB: A NoSQL database used for storing time series data.
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgements
Socket.io
Crypto-js
MongoDB
Additional Information
Data Validation
Each received message is validated using a SHA-256 hash of its content and the provided secret key.
Frontend UI
The frontend application is built using HTML, CSS, and JavaScript.
Real-time updates are achieved using WebSockets.
Error Handling
The system logs errors and provides clear error messages for easier debugging.