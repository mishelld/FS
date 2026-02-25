const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};
let totalRequests = 0;
const requestCounter = (req, res, next) => {
  totalRequests += 1;
  req.requestCount = totalRequests;
  next();
};
app.use(logger);
app.use(requestCounter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome!", requestCount: req.requestCount });
});
app.get("/about", (req, res) => {
  res.send({
    message: "This is the about page",
    requestCount: req.requestCount,
  });
});
const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
