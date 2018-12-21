var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(4200);
console.log("Listening on port 4200.");
