const express = require("express");
const app = express();
const PORT = 3000;
const myarray = [
  "hello, mr.jordan",
  "Welcome to the main page",
  "stay positive",
];

// app.get("/", (req, res) => {
//   res.send("welcome to the main page");
// });
app.get("/", (req, res) => {
  const random = myarray[Math.floor(Math.random() * myarray.length)];
  res.send(`<h1>${random}</h1>`)
});

app.listen(PORT, () => {
  console.log("hello abdou");
});
