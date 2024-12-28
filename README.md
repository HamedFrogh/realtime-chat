
# Real-Time Chat Application with Golang and Angular

This repository contains a real-time chat application built using **Golang** for the backend and **Angular** for the frontend. The application leverages **WebSockets** to provide instant communication between connected users.

## Overview

In this project, I implemented:
- A WebSocket server using Golang to handle real-time message broadcasting and user connections.
- An Angular-based client application to send and display chat messages in real-time.

The project is designed to demonstrate the use of WebSockets for real-time communication in modern web applications.

## Features

- **Real-Time Messaging**: Users can exchange messages instantly without page refreshes.
- **WebSocket-Based Communication**: Utilizes WebSockets for low-latency, persistent connections.
- **Scalable Backend**: Built using Golang, known for its high performance and concurrency handling.
- **Modern Frontend**: Developed with Angular, a powerful framework for building interactive web applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Golang**: Version 1.7 or higher
- **Node.js**: Version 14 or higher
- **Angular CLI**: Installed globally

## Getting Started

Follow these steps to set up and run the project:

### Backend Setup

1. Clone the repository and navigate to the server directory:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name/server
   ```

2. Install dependencies:
   ```bash
   go get github.com/gorilla/websocket
   go get github.com/satori/go.uuid
   ```

3. Run the WebSocket server:
   ```bash
   go run main.go
   ```

   The server will start listening on `ws://localhost:3000/ws`.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Angular development server:
   ```bash
   ng serve
   ```

   The client will be accessible at `http://localhost:4200/`.

## Usage

1. Open multiple browser tabs or windows.
2. Connect to the application in each tab.
3. Enter messages, and watch them appear in real-time across all tabs.

## Project Structure

```
repository-name/
├── server/
│   ├── main.go       # Golang WebSocket server
│   └── ...
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── socket.service.ts  # WebSocket client service
│   │   │   ├── app.component.ts  # Main application component
│   │   │   └── ...
│   └── ...
└── README.md         # Project documentation
```

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

The project is inspired by the tutorial: [Create A Real Time Chat App With Golang, Angular, And Websockets](https://www.thepolyglotdeveloper.com/2016/12/create-real-time-chat-app-golang-angular-2-websockets/).
 