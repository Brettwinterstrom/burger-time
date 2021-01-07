var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
const orm = require("./Main/config/orm");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

orm.selectAll("burger",);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});