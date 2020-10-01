const md5=require('md5');

var db=require('../views/db');

module.exports.login=function(req,res){
        res.render('auth/login');
};
module.exports.postLogin=function(req,res){
    var email=req.body.email;
    var passWord=req.body.passWord;
    var user=db.get('users').find({email:email}).value();
    if(!user)
    {
     res.render('auth/login',{
        errors:['email does not exist !']
     });
     return;
    }
    var hashedPassword=md5(passWord);
    if(user.passWord!== hashedPassword){
        res.render('auth/login',{
           errors:['wrong password !']
        });
        return;
    }
    res.cookie('customerId',user.id);
    res.redirect('/users');

};