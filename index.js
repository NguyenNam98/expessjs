require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const cartRoute=require('./routes/cart.route');
const db=require("./views/db");
const userRoute=require('./routes/user.route');
const authRoute=require('./routes/auth.route');
const requireLogin=require('./midleware/auth');
const productRoute=require('./routes/product.route');
const sessionMidleware=require('./midleware/session.midleware');


mongoose.connect(process.env.MONGO_URL);

const app=express();
const port=3000;

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(sessionMidleware);

app.set('view engine', 'pug');
app.set('views', './views');


app.use('/users',requireLogin.requireAuth,userRoute);
app.use('/',productRoute);
app.use('/cart',cartRoute);
app.use(express.static('public'));
app.use(sessionMidleware);



app.get('/',requireLogin.requireAuth,function(req,res){
 
    var user= db.get("users").value();
    res.render('users/index',{
        users:user
    });
})
app.use('/auth',authRoute);

app.listen(port,function(){
    console.log("listen at http://localhost:"+port);
});