# Author: Satyam chaubey

# Encrypted Timeseries

**A secure and efficient system for real-time data processing.**

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Additional Information](#additional-information)

---

## Overview

The project aims to create a secure and efficient system for real-time data processing. It's designed for applications that require high data integrity and security, making it suitable for various industries including finance, healthcare, and IoT.

---

## Features

- Generates periodic encrypted data streams.
- Decrypts and validates incoming data streams.
- Saves validated data to a time series database.
- Real-time display of valid data in the frontend.

---

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB server set up.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/satyam/encrypted-timeseries.git
   cd encrypted-timeseries
   Start the Emitter Service: node emitter.js
   Start the Listener Service: node listener.js

   ```

# Architecture

- The project follows a microservices architecture with two main - components: Emitter Service and Listener Service. The Emitter Service generates encrypted data streams, while the Listener Service receives, decrypts, validates, and saves the data.

# Technologies Used

Node.js: The runtime environment for running the JavaScript code.
Socket.io: Enables real-time, bidirectional, and event-based communication.
Crypto-js: Provides cryptographic functions for encryption and decryption.
MongoDB: A NoSQL database used for storing time series data.

# Acknowledgements

Socket.io
Crypto-js
MongoDB

# Additional Information

Data Validation: Each received message is validated using a SHA-256 hash of its content and the provided secret key.
Frontend UI: The frontend application is built using HTML, CSS, and JavaScript. Real-time updates are achieved using WebSockets.
Error Handling: The system logs errors and provides clear error messages for easier debugging.
