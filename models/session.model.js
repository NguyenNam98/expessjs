const mongoose = require('mongoose');

const userScheme= new mongoose.Schema({
   cart : Object    
});
var Session= mongoose.model('Session',userScheme,sessions);
module.exports=Session;