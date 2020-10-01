const express = require('express');
const router = express.Router();

const controller=require("../controller/product.controller");
const db=require('../views/db');

router.get('/product',controller.showProduct)

module.exports=router;