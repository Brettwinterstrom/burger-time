const router = require("express").Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (burgerData) {
        console.log("*******burgerData in controller selectAll:", burgerData);
        res.render("index", { burger: burgerData });
    });
});

module.exports = router;