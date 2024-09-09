const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../html'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve the index.ejs file for the "/" route
app.get('/', (req, res) => {
  res.render('index');
});

// Serve the chat.ejs file for the "/chat" route
app.get('/chat', (req, res) => {
  res.render('chat', {
    host: process.env.HOST,
    port: process.env.PORT
  });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

// Create an HTTP server using the Express app
const server = http.createServer(app);

module.exports = server;