import http from "http";
const server = http.createServer(function (request, response) {
  console.log(`${request.method} `);
  console.log(`{${request.url}}`);

  if (request.method === "GET") {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to my server!");
      response.end();
    } else if (request.url === "/about") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("This is the about page");
      response.end();
    } else if (request.url === "/contact") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Contact: user@example.com");
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 - Page not found");
      response.end();
    }
  }
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
