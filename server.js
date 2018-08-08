


var express = require("express");
var bodyParser = require("body-parser");

var app = express ();
var PORT = 3000 || process.env.PORT;


// app.get 
// app.listen

// routes to index, static blog page, 
// change rounts on actual html 

app.get("/", function(req, res) {
    res.render("index");

});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  




