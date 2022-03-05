var express = require("express");
var fs = require('fs');
var app = express();

app.use(express.static("game"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


var statistics = {};
let predatorArr = [];

setInterval(function() {
statistics.predator = predatorArr++;
fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
console.log("send")
})
},1000);