const db= require('../views/db');
module.exports.requireAuth=function(req, res, next){

    if(!req.cookies.customerId)
    {
        res.redirect('/auth/login');
        return;
    }
    var user=db.get("users").find( {id: req.cookies.customerId} ).value();
    if(!user)
    {
        res.redirect('/auth/login');
        return;  
    }
    next();
};