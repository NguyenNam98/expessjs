const mongoose = require('mongoose');

const userScheme= new mongoose.Schema({
   
    image : String,
    name : String,
    description: String
});
var Product= mongoose.model('Product',userScheme, 'products');
module.exports=Product;