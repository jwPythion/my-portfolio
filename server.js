
var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


// app.get 
// app.listen

// routes to index, static blog page, 
// change rounts on actual html 
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});





