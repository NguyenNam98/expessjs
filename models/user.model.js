const mongoose = require('mongoose');

const userScheme= new mongoose.Schema({
    name : String,
    phoneNumber : String,
    email : String,
    avatar: String,
    passWord : string
});
var User= mongoose.model('User',userScheme,users);
module.exports=User;