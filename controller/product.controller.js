const db = require("../views/db");

const Products = require('../models/product.model');

module.exports.showProduct=async function(req,res){
    var page=parseInt(req.query.page)||1;
    var perpage=8;

    var start=(page-1)*perpage;
    var end=page*perpage;
    // res.render("product/index",{
    //  products: db.get("products").value().slice(start,end),
    //  page :page
    // });
    var products=await Products.find();
    res.render("product/index",{
        products :products.slice(start,end),
        page :page
    });

    
};