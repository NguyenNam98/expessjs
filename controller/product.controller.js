const db = require("../views/db");


module.exports.showProduct=function(req,res){
    var page=parseInt(req.query.page)||1;
    var perpage=8;

    var start=(page-1)*perpage;
    var end=page*perpage;
    res.render("product/index",{
     products: db.get("products").value().slice(start,end),
     page :page
    });
    
};