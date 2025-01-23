const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("welcome to the main page");
});

app.listen(PORT, () => {
  console.log("hello abdou");
});
