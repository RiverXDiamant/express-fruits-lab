const express = require("express");
const app = express();
const PORT = 3000;
const fruits = require("./models/fruits");
const reactViews = require("express-react-views");
const vegetables = require("./models/vegetables");

app.use(express.static("public"));

// set up view engine
//  - default engine to use JSX || look for JSX files
app.set("view engine", "jsx");

// creating the engine - setting application to JSX
// call a function off of this package - .createEngine() - <-- createEngine Method
app.engine("jsx", reactViews.createEngine());

// optional way
// app.engine("jsx", require("express-react-views").createEngine());

// ===== FRUITS ===== \\
app.get("/views/fruits/Index.jsx", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

// getting it from the app.get, coming from the server response
app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  res.render("Show", fruits[req.params.indexOfFruit]);
});

// ===== VEGETABLES ===== \\

app.get("/vegetables/Index.jsx", (req, res) => {
  res.render("/vegetables/Index", { vegetables: vegetables });
});

// getting it from the app.get, coming from the server response
app.get("/vegetables/:indexOfvegetables", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  res.render("Show", vegetables[req.params.indexOfVegetables]);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
