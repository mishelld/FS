const express = require("express");
const app = express();
const path = require("path");

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
app.use(express.static(path.join(__dirname, "dist")));

app.get("/priceCheck/:name", (req, res) => {
  const itemName = req.params.name;
  const item = store.find((i) => i.name === itemName);
  console.log(itemName);
  if (item) {
    res.json({ price: item.price });
  } else {
    res.json({ price: null });
  }
});

app.get("/buy/:name", (req, res) => {
  const itemName = req.params.name;
  const item = store.find((i) => i.name === itemName);

  if (!item) {
    return res.status(404).json({ error: "item not found" });
  }

  if (item.inventory <= 0) {
    return res.status(404).json({ error: "item unavailable" });
  }

  item.inventory -= 1;

  res.json(item);
});

app.get("/sale", (req, res) => {
  const isAdmin = req.query.admin;
  if (isAdmin === "true") {
    store.forEach((item) => {
      if (item.inventory > 10) {
        item.price = item.price * 0.5;
      }
    });
  }
  res.send(store);
});
const port = 3000;
app.listen(port, function () {
  console.log(`Server is up and running smoothly`);
});
