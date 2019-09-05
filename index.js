const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "ui/build")));

app.get("/api/products", (req, res) => {
  const products = [
    {
      name: "Toyota",
      price: 24.0,
      seller: "munni",
      listingDate: "12/09/2019"
    },
    {
      name: "JAVA for dummies",
      price: 25.0,
      seller: "mak",
      listingDate: "12/3/2019"
    },
    { name: "Iphone", price: 30.0, seller: "abcd", listingDate: "12/1/2019" }
  ];

  res.send({
    products: products
  });
});

app.get("/", (req, res) => res.send("HomePage for my ecommerce site."));

app.listen(port, () => console.log(`App is listening on port ${port}!`));
