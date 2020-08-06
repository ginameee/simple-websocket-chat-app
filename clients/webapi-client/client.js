const socketConn = new WebSocket("ws://localhost:5000");
const chatContents = document.querySelector(".chat__content");
const name = prompt("What is your name?");

socketConn.onopen = (e) => {
  alert("Socket connected successfully");

  socketConn.send(
    JSON.stringify({
      type: "name",
      data: name,
    })
  );
};

socketConn.onmessage = (e) => {
  const { name, msg } = JSON.parse(e.data);

  chatContents.innerHTML += `${name}: ${msg} <br>`;
};

function sendMessage() {
  const input = document.querySelector(".input__content");
  const text = input.value;

  socketConn.send(
    JSON.stringify({
      type: "message",
      data: text,
    })
  );

  input.value = "";
}
