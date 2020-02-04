const server = require("ws").Server;
const s = new server({ port: 5000 });

s.on("connection", ws => {
  ws.on("message", msg => {
    msg = JSON.parse(msg);

    if (msg.type === "name") {
      ws.personNm = msg.data;
    }

    console.log(`Received: ${msg}`);

    s.clients.forEach(client => {
      if (client !== ws) {
        client.send(
          JSON.stringify({
            name: client.personNm,
            data: msg.data
          })
        );
      }
    });

    // ws.send(`From the server: ${msg}`);
  });

  ws.on("close", () => {
    console.log("I lost a client");
  });

  console.log("one more client connected");
});
