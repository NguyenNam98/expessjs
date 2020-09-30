const express = require('express');
const router = express.Router();

const controller=require("../controller/user.controller");
const shortid = require('shortid');
const db=require('../views/db');
const validate=require('../validate/user.validate');
const requireLogin=require('../midleware/auth');

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',function(req,res){
    res.render('users/create');

});

router.get('/:userId',controller.getId);

router.post('/create',validate.validCreate, controller.postCreate);

module.exports=router;