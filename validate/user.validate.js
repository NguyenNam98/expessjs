module.exports.validCreate=function(req,res,next){
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
    next();
};