// allow access for dotenv variables
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const Fruit = require("./models/fruits");
const Vegetable = require("./models/vegetables");
const reactViews = require("express-react-views");

// require Mongoose
const mongoose = require("mongoose");

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// console.log(process.env.MONGO_URI);
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

// ** ===== FRUITS ===== \\

// ! Index Route

app.get("/fruits", (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    if (!error) {
      res.status(200).render("fruits/Index", {
        fruits: allFruits,
      });
    } else {
      res.status(400).send(error);
    }
  });

  // res.render requires an engine
  // res.render("fruits/New");
});

//! New Route
//put this above your Show route so it can be read first

app.get("/fruits/new", (req, res) => {
  console.log("2. Controller");
  res.render("fruits/New");
});

// ! Post Route

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    if (!error) {
      //redirects after eating fruit to the index page
      console.log(createdFruit);
      res.status(200).redirect("/fruits");
    } else {
      res.status(400).send(error);
    }
  });
  // fruits.push(req.body);
  // console.log(fruits);

  // res.redirect: return user to Index page after creating fruit
  // res.redirect("/fruits");

  // req.body: Node.js body parsing middleware.
  // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
  console.log(req.body);

  // res.send, sends your input to the page
  // res.send("data received");
});

// ! Show Route

app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (error, foundFruit) => {
    if (!error) {
      res.status(200).render("fruits/Show", {
        // retrieves the foundFruit from the database
        fruit: foundFruit, // <-- must match to JSK props in Show ( fruit: )
      });
    } else {
      res.status(400).send(error);
    }
  });
});

// getting it from the app.get, coming from the server response
// app.get("/fruits/:indexOfFruit", (req, res) => {
//   res.render("fruits/Show", fruits[req.params.indexOfFruit]);
// });

// ** ===== VEGETABLES ===== \\

// ! Index Route

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

// ! New Route

app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

// ! Post Route

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

// ! Show Route
// getting it from the app.get, coming from the server response
app.get("/vegetables/:id", (req, res) => {
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
    if (!error) {
      res.status(200).render("vegetables/Show", {
        // retrieves the foundFruit from the database
        vegetable: foundVegetable, // <-- must match to JSK props in Show ( vegetable: )
      });
    } else {
      res.status(400).send(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
