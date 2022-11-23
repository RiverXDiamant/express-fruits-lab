const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruits");

// ===================================================================
// ! ROUTES
// ===================================================================

// * I.N.D.U.C.E.S.
// * Index, New, Delete, Update, Create, Edit, Show

// ** ===== FRUITS ===== \\

// ! Index

router.get("/", (req, res) => {
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

// ! New
//put this above your Show route so it can be read first

router.get("/new", (req, res) => {
  console.log("2. Controller");
  res.render("fruits/New");
});

// ! Delete

router.delete("/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/fruits"); //redirect back to fruits index
  });
});

// ! Update
// put

router.put("/:id", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
    if (!err) {
      res.status(200).redirect(`/fruits/${req.params.id}`);
    } else {
      res.status(400).send(err);
    }
  });
});

// ! Create

router.post("/", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  // This does the same thing as the if statement above but with a one line ternary
  //req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

  // Create 1st arg: the actual object we want to insert inside our database
  // Callback 1st arg: error
  // Callback 2nd arg: the newly created object

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

// ! Edit
router.get("/:id/edit", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    //find the fruit
    if (!err) {
      res.render("fruits/Edit", {
        fruit: foundFruit, //pass in the found fruit so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// ! Show

router.get("/:id", (req, res) => {
  // findById 1st arg: the id of the fruit we want to find
  // Callback 1st arg: error
  // Callback 2nd arg: the found fruit object
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

// getting it from the router.get, coming from the server response
// router.get("/fruits/:indexOfFruit", (req, res) => {
//   res.render("fruits/Show", fruits[req.params.indexOfFruit]);
// });

module.exports = router;
