const http = require("http");
// initalize the server.
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello Kodehode!");
});
// opens up the server on the local machine on port : 8080
server.listen(8080);