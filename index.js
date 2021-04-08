var express = require("express");
var bodyParser = require("body-parser");

var lib = require("./lib");
lib.myHello();

var contactAPI = require("./contactAPI");


var PORT = (process.env.PORT || 10000);


var app = express();

app.use(bodyParser.json());

contactAPI.register(app);

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});