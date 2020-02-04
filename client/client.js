const socket = new WebSocket("ws://localhost:5000");
const name = prompt("What is your name?");
const chatContents = document.getElementsByClassName("chat__content")[0];

socket.onopen = e => {
  alert("Socket connected successfully");

  socket.send(
    JSON.stringify({
      type: "name",
      data: name
    })
  );
};

socket.onmessage = e => {
  let msgObj = JSON.parse(e.data);

  chatContents.innerHTML += `${msgObj.name}: ${msgObj.data} <br>`;
};

function sendMessage() {
  const text = document.getElementsByClassName("input__content")[0].value;
  chatContents.innerHTML += `You: ${text} <br>`;
  socket.send(
    JSON.stringify({
      type: "message",
      data: text
    })
  );
}
