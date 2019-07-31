const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "ui/build")));

app.get("/getuser", (req, res) =>
  res.send({ users: ["mak", "munni", "farhana"] })
);

app.post("/finduser", (req, res) => {
  //console.log("received request ", req.body.name);
  res.send(`<h1> my name is ${req.body.name} </h1>`);
});

app.get("/", (req, res) => res.send("HomePage for my ecommerce site."));

app.listen(port, () => console.log(`App is listening on port ${port}!`));
