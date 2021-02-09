const express = require('express');
const fs = require('fs');
const bP = require('body-parser');
const jsonParse = express.json();

const app = express();
const urlEncode = bP.urlencoded({extended:false});

app.use(express.static(__dirname + "/public"));

app.get("/register", jsonParse, function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/register", jsonParse, function(req, res){
    if(!req.body){
        return res.sendStatus(400);
    }
    let name = req.body.name;
    let age = req.body.age;
    let user = {name: name, age: age};
    
    console.log(user);
});
app.get("/", function(req, res){
    res.send("Hello");
});
app.listen(3000);


