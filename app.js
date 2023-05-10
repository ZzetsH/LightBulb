const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/", (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;

   console.log(name, email)
   res.redirect("/")
})

app.listen(3000, (req, res)=>{
    console.log("app is running on port 3000!")
})