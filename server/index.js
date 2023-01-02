const express = require("express");
const app = express()
const mongoose = require('mongoose');
var cors = require('cors');
//const { populate } = require("./models/users");
let UserModel = require('./models/Users')
app.use(function (req, res, next) {


    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
mongoose.connect(
    "mongodb+srv://introMern:introMern@cluster0.l8sjuls.mongodb.net/mernIntro?retryWrites=true&w=majority"
    );

app.get("/getUsers",(req,res) =>{
    UserModel.find({},(err,result) =>{
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
})
app.post("/addUser",async (req,res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})


app.listen(8000, () =>{
    console.log("server running on port 8000");
})