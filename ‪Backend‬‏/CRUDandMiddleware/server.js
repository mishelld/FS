const express = require("express");
const app = express();
app.use(express.json());
const wordCounter = { hello: 1 };
app.get("/sanity", function (req, res) {
  res.send("Server is up and running");
});

app.get("/words/:word", function (req, res) {
  const word = req.params.word;

  if (wordCounter[word]) {
    res.send({ count: wordCounter[word] });
  } else {
    res.send({ count: 0 });
  }
});
app.post("/word", (req, res) => {
  const word = req.body.word;
  if (!word) {
    return res.status(404).send({ error: "you must send a word" });
  }

  if (wordCounter[word]) {
    wordCounter[word] += 1;
  } else {
    wordCounter[word] = 1;
  }

  res.send({ text: `Added ${word}`, currentCount: wordCounter[word] });
});

app.post("/sentence", (req, res) => {
  const sentence = req.body.sentence;
  if (!sentence) {
    return res.status(404).send({ error: "you must send a sentence" });
  }

  const words = sentence.split(" ");
  let numNewWords = 0;
  let numOldWords = 0;

  words.forEach((word) => {
    if (wordCounter[word]) {
      wordCounter[word] += 1;
      numOldWords += 1;
    } else {
      wordCounter[word] = 1;
      numNewWords += 1;
    }
  });

  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

app.delete("/words/:word", (req, res) => {
  const word = req.params.word;
  if (!wordCounter[word]) {
    return res.status(404).send({ error: `${word} not found` });
  }

  delete wordCounter[word];
  res.send({ success: `${word} word was deleted` });
});
const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
