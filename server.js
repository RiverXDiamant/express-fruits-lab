// allow access for dotenv variables
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const Fruit = require("./models/fruits");
const Vegetable = require("./models/vegetables");
const reactViews = require("express-react-views");
const fruitsController = require("./controllers/fruitController");
// method-override
const methodOverride = require("method-override");

// require Mongoose
const mongoose = require("mongoose");

// == Connect to mongoose database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo ✔️");
});

// console.log(process.env.MONGO_URI);
// app.use(express.static("public"));

// == Set up view engine
//  - default engine to use JSX || look for JSX files
app.set("view engine", "jsx");

// creating the engine - setting application to JSX
// call a function off of this package - .createEngine() - <-- createEngine Method
app.engine("jsx", reactViews.createEngine());
// optional way
// app.engine("jsx", require("express-react-views").createEngine());

// == Middleware - running in the middle of the request and respond cycle
// you have to call - next - in order to continue the req,res cycle

app.use((req, res, next) => {
  console.log("I'm running for all routes");
  console.log("1. Middleware");
  next();
});

// express.urlencoded is a built-in middleware function in Express.
// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

// ===== Routes =====
app.use("/fruits", fruitsController);

// ** ===== VEGETABLES ===== \\

// ! Index

app.get("/vegetables", (req, res) => {
  Vegetable.find({}, (error, allVegetables) => {
    if (!error) {
      res.status(200).render("vegetables/Index", {
        vegetables: allVegetables,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

// ! New

app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

// ! Create

app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Vegetable.create(req.body, (error, createdVegetable) => {
    if (!error) {
      //redirects after creating vegetables to the index page
      console.log(createdVegetable);
      res.status(200).redirect("/vegetables");
    } else {
      res.status(400).send(error);
    }
  });

  console.log(req.body);
});

// ! Show
// getting it from the app.get, coming from the server response

app.get("/vegetables/:id", (req, res) => {
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
    if (!error) {
      res.status(200).render("vegetables/Show", {
        // retrieves the foundFruit from the database
        vegetable: foundVegetable, // <-- must match to props in Show ( vegetable: )
      });
    } else {
      res.status(400).send(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
