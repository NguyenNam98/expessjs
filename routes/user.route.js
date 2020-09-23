var express = require('express');
var router = express.Router();

var controller=require("../controller/user.controller");
const shortid = require('shortid');
var db=require('../views/db');
const validate=require('../validate/user.validate');

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',function(req,res){
    res.render('users/create');

});

router.get('/:userId',controller.getId);

router.post('/create',validate.validCreate, controller.postCreate);

module.exports=router;