require("dotenv").config();
const server = require("./server/websocketServer");

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
});
