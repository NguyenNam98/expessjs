const bodyParser = require('body-parser');
const express = require('express');
const db=require("./views/db");
const userRoute=require('./routes/user.route');
const app=express();
const port=3000;
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/users',userRoute);

app.use(express.static('public'));

app.get('/',function(req,res){
 
    var user= db.get("users").value();
    res.render('users/index',{
        users:user
    });
});

app.listen(port,function(){
    console.log("listen at http://localhost:"+port);
});