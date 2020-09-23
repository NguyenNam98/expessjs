var express = require('express');
var router = express.Router();
const shortid = require('shortid');
var db=require('../views/db');

router.get('/',function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
    });
    
});

router.get('/search',function(req,res){
    var q=req.query.q;
    var matchUsers=db.get('users').value().filter(function(user){
        return user.name.indexOf(q)!==-1;
    });
    res.render('users/index',{
        users: matchUsers
        
    });

});

router.get('/create',function(req,res){
    res.render('users/create');

});

router.get('/:userId',function(req,res){
    var id=req.params.userId;
    var user= db.get("users").find({id:id}).value();
    res.render('users/view',{
        user:user
    });
});

router.post('/create',function(req,res){
    req.body.id=shortid.generate();
    var errors=[];

    if(!req.body.name)
    {
        errors.push("name is required !")
    }
    if(!req.body.phoneNumber)
    {
        errors.push("Phone Number is required !")
    }
    if(errors.length)
    {
        res.render('users/create',{
            errors:errors,
            values:req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users')
});

module.exports=router;