require("dotenv").config();
const http = require("http");
const { getRandomQuote } = require("./quotes");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const message = process.env.MESSAGGIO || "Nessun Messaggio";

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>${message}</p>
        <h1>${getRandomQuote()}</h1>
    </body>
    </html>`);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
