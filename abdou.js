const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const myarray = [
  "hello, mr.jordan",
  "stay positive",
  "you are a great man and wonderful instructor",
  { name: "mohamed", id: 124 },
  { name: "dannielle", id: 181 },
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



const users = require("./catagories/user");
app.get("/users", (req, res) => {
  res.json(users);
});
     

app.delete("/user/:id", (req,res)=>{
const id_user = parseInt(req.params.id);
const userindex = users.findIndex(user=>user.id === id_user);

if (userindex !==-1 ){
const deleted_user = users.splice(userindex,1);
res.send(`user with id ${deleted_user[0].id} and name ${deleted_user[0].name} was deleted`);



}else{res.status(404).send("we could'nt foud that user abdou")}

})

















const posts = require("./catagories/posts");

app.post("/user", (req, res) => {
  res.json(posts);
});

app.put("/update_id", (req, res) => {
  const { name, updated_id } = req.body;
  const userName = myarray.find((u) => u.name === name);
  if (userName) {
    userName.id = updated_id;
    res.send(`user id fore ${name} was updated by abdou to ${updated_id}`);
  }
  else{res.status(404).send("oh man, there is no user with that id")}
});

app.listen(PORT, () => {
  console.log("hello abdou");
});
