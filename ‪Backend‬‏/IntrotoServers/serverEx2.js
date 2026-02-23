import http from "http";

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer(function (request, response) {
  console.log(`${request.method} `);
  console.log(`{${request.url}}`);

  if (request.method === "GET" && request.url === "/api/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(users));
    return response.end();
  }

  if (request.method === "GET" && request.url.startsWith("/api/users/")) {
    const id = parseInt(request.url.split("/")[3]);
    const user = users.find((u) => u.id === id);

    if (!user) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ error: "User not found" }));
      return response.end();
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(user));
    return response.end();
  }

  if (request.method === "POST" && request.url === "/api/users") {
    let body = "";
    request.on("data", (chunk) => (body += chunk));

    return request.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (!data.name || !data.email) {
          response.writeHead(400, { "Content-Type": "application/json" });
          response.write(JSON.stringify({ error: "Name and email required" }));
          return response.end();
        }

        const newUser = {
          id: users.length ? users[users.length - 1].id + 1 : 1,
          name: data.name,
          email: data.email,
        };
        users.push(newUser);
        response.writeHead(201, { "Content-Type": "application/json" });
        response.write(JSON.stringify(newUser));
        return response.end();
      } catch {
        response.writeHead(400, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ error: "Invalid JSON" }));
        return response.end();
      }
    });
  }
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
