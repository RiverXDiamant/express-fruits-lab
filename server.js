const express = require("express");
const app = express();
const PORT = 3000;
const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables");
const reactViews = require("express-react-views");

// app.use(express.static("public"));

// set up view engine
//  - default engine to use JSX || look for JSX files
app.set("view engine", "jsx");

// creating the engine - setting application to JSX
// call a function off of this package - .createEngine() - <-- createEngine Method
app.engine("jsx", reactViews.createEngine());
// optional way
// app.engine("jsx", require("express-react-views").createEngine());

// middleware - running in the middle of the request and respond cycle
// you have to call - next - in order to continue the req,res cycle

app.use((req, res, next) => {
  console.log("I'm running for all routes");
  console.log("1. Middleware");
  next();
});

// express.urlencoded is a built-in middleware function in Express.
// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

// ===================================================================
// ! ROUTES
// ===================================================================

// ===== FRUITS ===== \\

app.get("/fruits", (req, res) => {
  console.log("2. Controller");
  // res.send(fruits);

  // res.render requires an engine
  res.render("fruits/Index", { fruits: fruits });
});

//put this above your Show route so it can be read first
app.get("/fruits/new", (req, res) => {
  console.log("2. Controller");
  res.render("New");
});

// create a post route

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  console.log(fruits);

  // res.redirect: return user to Index page after creating fruit
  res.redirect("/fruits");
  // req.body: Node.js body parsing middleware.
  // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
  console.log(req.body);
  // res.send, sends your input to the page
  res.send("data received");
});

// getting it from the app.get, coming from the server response
app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  res.render("fruits/Show", fruits[req.params.indexOfFruit]);
});

// ===== VEGETABLES ===== \\

app.get("/vegetables", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetables });
});

// getting it from the app.get, coming from the server response
app.get("/vegetables/:indexOfVegetables", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  res.render("vegetables/Show", vegetables[req.params.indexOfVegetables]);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
