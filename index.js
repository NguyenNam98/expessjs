const express=require('express');
const bodyParser = require('body-parser')
const app=express();
const port=3000;
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

var users=[
    { id:1,name:'name'},
    { id:2, name:'ngoc'}];
app.get('/users',function(req, res){
    res.render('users/index',{
        users: users
    });
    
});

app.get('/users/search',function(req,res){
    var q=req.query.q;
    var matchUsers=users.filter(function(user){
        return user.name.indexOf(q)!==-1;
    });
    res.render('users/index',{
        users: matchUsers,
        
    });

});

app.get('/users/create',function(req,res){
    res.render('users/create');

});
app.post('/users/create',function(req,res){
    users.push(req.body)
    res.redirect('/users')
});

app.listen(port,function(){
    console.log("listen at http://localhost:"+port);
});