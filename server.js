require("dotenv").config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const message = process.env.MESSAGGIO || "Nessun Messaggio";

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(`<h1>${message}</h1>`);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
