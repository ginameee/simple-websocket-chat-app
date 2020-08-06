const Server = require("ws").Server;
const chatServer = new Server({ port: 5000 });

chatServer.on("connection", (client) => {
  console.log("SERVER:", "One more client connected");

  client.on("message", (msg) => {
    console.log(("\tSOCKET:", `I got msg ${msg}`));

    msg = JSON.parse(msg);
    const { type } = msg;

    switch (type) {
      // 첫 연결시 type이 name
      case "name":
        client.user = msg.data;
        break;
      // 첫 연결 후, type은 message
      default:
        broadCastMsg(client, msg.data);
        break;
    }
  });

  client.on("close", () => {
    console.log("\tSOCKET:", `${client.name} just left`);
  });
});

function broadCastMsg(client, msg) {
  chatServer.clients.forEach((c) => {
    const data = {
      name: client === c ? "You" : client.user,
      msg,
    };

    c.send(JSON.stringify(data));
  });
}
