# Express Vegetables Lab

Practice for: CRUD, MVC, REST, INDUCES and JSX

Learning Objectives

    Practicing Index, Show, New and Create routes with Express

Prerequisites

    JavaScript
    Express
    Node
    JSX

Steps

    Add A second Model File For Vegetables to your fruits app
    Add 5 Vegetables
    Create Index, Show, New and Create routes for Vegetables
    Create Index, Show and New jsxViews
    Refactor your application to work appropriately hint views can be reused but you can also make sub folders in the views folder, take the sub folders approach so that you can still follow along in class.

The User Stories

    When a user goes to the /vegetables route they will see an indexof veggies on the page
    When a user clicks on the name of the vegetable, they will be taken to that vegetable's show page, and will see the vegetables's name and color and if its READYTOEAT.
    When a user goes to /vegetables/new a user sees a form that allows them to create a brand new vegetable, and then redirects the user back to /vegetables

Hints

/views/fruits/Index.jsx
<br />
/views/vegetables/Index.jsx
<br />

res.render('vegetables/Index', {...})
<br />
res.render('fruits/Index', {...})
<br />

Part 2 with Vegetables

    Add Model for vegetable
    Rewrite Index Route to use MongoDB
    Rewrite Index View to work with Index Route
    Rewrite Show Route to MongoDB
    Rewrite Create Route to work with MongoDB
