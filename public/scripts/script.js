const host = document.getElementById("host").innerHTML;
const port = document.getElementById("port").innerHTML;
const ws = new WebSocket("ws://" + host + ":" + port);

ws.onopen = () => {
  console.log("Connected to the server");
};

ws.onmessage = (event) => {
  const messages = document.getElementById("messages");
  const message = document.createElement("div");
  message.textContent = event.data;
  messages.appendChild(message);
};

ws.onclose = () => {
  console.log("Disconnected from the server");
};

function sendMessage() {
  const input = document.getElementById("input");
  ws.send(input.value);
  input.value = "";
}

// Add an event listener to the input field to detect the Enter key
document.getElementById("input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
