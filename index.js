const bodyParser = require('body-parser');
const express = require('express');

const userRoute=require('./routes/user.route');
const app=express();
const port=3000;
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/users',userRoute);

app.listen(port,function(){
    console.log("listen at http://localhost:"+port);
});