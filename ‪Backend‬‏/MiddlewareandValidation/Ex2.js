const express = require("express");
const app = express();
app.use(express.json());
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const validateId = (req, res, next) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    const error = new Error(`invalid ID format`);
    error.status = 400;
    return next(error);
  }
  next();
};

const checkResourceExists = (req, res, next) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    const error = new Error(`user not found`);
    error.status = 404;
    return next(error);
  }
  req.user = user;
  next();
};

app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  res.send(req.user);
});

app.post("/users", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).send({ error: "id and name required" });
  }
  users.push({ id, name });
  res.send({ success: `User added` });
});
const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
