const WebSocket = require("ws");
const server = require("./httpServer"); // Import the HTTP server instance

// Create a WebSocket server instance
const wss = new WebSocket.Server({ server });

// Array to store connected clients
const clients = [];

// Listen for WebSocket connection events
wss.on("connection", (ws) => {
  console.log("New client connected");
  clients.push(ws);

  // Listen for incoming messages from clients
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast the message to all connected clients
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // Listen for close events
  ws.on("close", () => {
    console.log("Client disconnected");
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

module.exports = server;
