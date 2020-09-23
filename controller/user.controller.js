const shortid = require('shortid');
var db=require('../views/db');
module.exports.index=function(req,res){
    var user= db.get("users").value();
    res.render('users/index',{
        users:user
    });
}
module.exports.search=function(req,res){
    var q=req.query.q;
    var matchUsers=db.get('users').value().filter(function(user){
        return user.name.indexOf(q)!==-1;
    });
    res.render('users/index',{
        users: matchUsers
        
    });
}
module.exports.getId=function(req,res){
    var id=req.params.userId;
    var user= db.get("users").find({id:id}).value();
    res.render('users/view',{
        user:user
    });
}
module.exports.postCreate=function(req,res){
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
    res.redirect('/users');
}