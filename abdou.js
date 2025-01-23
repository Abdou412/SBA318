const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const myarray = [
  "hello, mr.jordan",
  "stay positive",
  "you are a great man and wonderful instructor",
  { name: "mohamed", id: 124 },
];
function mytest(req, res, next) {
  console.log("you are very welcome");
  next();
}
app.use(mytest);
app.get("/", (req, res) => {
  res.send(`<h1>WELCOM TO THE MAIN PAGE</h1>`);
});
app.get("/grt", (req, res) => {
  const random = myarray[Math.floor(Math.random() * myarray.length)];
  res.send(`<h1>${random}</h1>`);
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("you made a mistake");
// });

const users = require("./catagories/user");
app.get("/users", (req, res) => {
  res.json(users);
});

const posts = require("./catagories/posts");

app.post("/user", (req, res) => {
  res.json(posts);
});

app.put("/user/:id", (req, res) => {
  const userid = parseInt(req.params.id);
  const updated = req.body;
  const find = myarray.find((u) => u.id === userid);
  if (find) {
    find.name = updated.name;
    res.send(`user ${userid} updated to ${find.name}`);
  } else {
    res.status(404).send("oh abdou user not found ");
  }
});

app.listen(PORT, () => {
  console.log("hello abdou");
});
