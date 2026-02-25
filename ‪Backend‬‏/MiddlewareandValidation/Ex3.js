const express = require("express");
const Ajv = require("ajv");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

const ajv = new Ajv();
const posts = [];
const comments = [];
let commentId = 1;
let postId = 1;

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url} - ${time}ms`,
    );
  });
  next();
});

const ipCount = {};
app.use((req, res, next) => {
  const ip = req.ip;
  const time = Date.now();

  if (!ipCount[ip]) {
    ipCount[ip] = { count: 0, start: time };
  }

  if (time - ipCount[ip].start > 60000) {
    ipCount[ip] = { count: 0, start: time };
  }

  if (ipCount[ip].count >= 10) {
    return res.status(429).send({ error: "too many requests!!!" });
  }

  ipCount[ip].count++;
  next();
});

app.use((req, res, next) => {
  if (
    ["POST", "PUT"].includes(req.method) &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res.status(400).send({
      error: "Content-Type must be application/json for PUT OR POST method!",
    });
  }
  next();
});

app.use((req, res, next) => {
  const oldSend = res.send;
  res.send = (data) => {
    if (typeof data === "object") data = { status: "success", data };
    oldSend(data);
  };
  next();
});

const postSchema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    category: { type: "string" },
    tags: { type: "array", items: { type: "string" } },
  },
  required: ["title", "content", "category", "tags"],
  additionalProperties: false,
};
const validatePost = ajv.compile(postSchema);
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const valid = validatePost(req.body);
  if (!valid) {
    return res.status(400).send({ error: validatePost.errors });
  }
  const post = { id: postId++, ...req.body };
  posts.push(post);
  res.send(post);
});

app.get("/posts/:postId/comments", (req, res) => {
  const postId = Number(req.params.postId);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).send({ error: "post not found" });
  }
  const postComments = comments.filter((c) => c.postId === postId);
  res.send(postComments);
});

app.post(
  "/posts/:postId/comments",
  [
    body("content")
      .isLength({ min: 5, max: 500 })
      .withMessage("Content must be 5-500 chars"),
    body("email").isEmail().withMessage("Email must be valid"),
  ],
  (req, res) => {
    const postId = Number(req.params.postId);
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      return res.status(404).send({ error: "post not found" });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array() });
    }
    const { content, email } = req.body;
    const comment = { id: commentId++, postId, content, email };
    comments.push(comment);
    res.send(comment);
  },
);
const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
