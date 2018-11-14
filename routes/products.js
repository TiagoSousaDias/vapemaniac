const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/',(req,res)=>{
  Products.getProducts((results)=>{
    res.json({results});
  });
});
router.get('/:code',(req,res)=>{
  console.log(req.params.code);
  Products.getProductsByCat(req.params.code,(resulst)=>{
      res.json({results});
  });
});
module.exports.router = router;
