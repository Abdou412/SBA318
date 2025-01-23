const express = require("express");
const app = express();
const PORT = 3000;
const myarray = [
  "hello, mr.jordan",
  "stay positive",
  "you are a great man and wonderful instructor",
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
app.get("/users",(req,res)=>{
res.json(users)
})

app.listen(PORT, () => {
  console.log("hello abdou");
});
