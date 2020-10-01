const db= require('../views/db');
module.exports.requireAuth=function(req, res, next){

    if(!req.signedCookies.customerId)
    {
        res.redirect('/auth/login');
        return;
    }
    var user=db.get("users").find( {id: req.signedCookies.customerId} ).value();
    if(!user)
    {
        res.redirect('/auth/login');
        return;  
    }
    res.locals.user=user;
    next();
};