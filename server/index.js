const server = require("ws").Server;
const s = new server({ port: 5000 });

s.on("connection", ws => {
  ws.on("message", msg => {
    msg = JSON.parse(msg);

    console.log(msg);

    if (msg.type === "name") {
      ws.personNm = msg.data;
    } else {
      let name = ws.personNm;

      s.clients.forEach(client => {
        client.send(
          JSON.stringify({
            name: ws !== client ? name : "You",
            data: msg.data
          })
        );
      });
    }
  });

  ws.on("close", () => {
    console.log("I lost a client");
  });

  console.log("one more client connected");
});
