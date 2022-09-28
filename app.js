const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.get("/", function(req, res){
	res.send("<h1>Hi There</h1>");
	console.log(req.statusCode);
});

app.get("/bye", function(req, res){
	res.send("<h1>Goodbye</h1>");
});

app.get("/football", function(req, res){
	res.send("<h1>Messi and CR7 are GOATED</h1>");
});

app.get("/r/:subName", function(req, res){

	res.send("<h1>Make we see watin dy sub</h1>");
});

app.get("/r/:subName/contact/:id/:title", function(req, res){
	var ttt = req.params.subName;
	res.send("<h1>This is " + ttt.toUpperCase() + " contact</h1>");
});

app.get("*", function(req, res){
	res.send("<h1>You're a Star</h1>");
});


app.listen(process.env.PORT || 3000, function(){
	console.log("App statrts on PORT 3000");
});