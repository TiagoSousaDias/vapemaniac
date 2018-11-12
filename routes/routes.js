const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/',(req,res)=>{
  res.send('HElLO');
});
router.get('/products',(req,res)=>{
  Products.getProducts((results)=>{
    res.json({results});
  });
});


module.exports.router = router;
