const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/',(req,res)=>{
  Products.getProducts((results)=>{
    res.json({results});
  });
});
router.get('/:code',(req,res)=>{
  Products.getProductsByCat(req.params.code,(results)=>{
      res.json({results});
  });
});
router.get('/:code/:group',(req,res)=>{
  Products.getProductsByCat(req.params.code,(results)=>{
      res.json({results});
  });
});
router.get('/:code/:group/:id',(req,res)=>{
  Products.getProductsByCat(req.params.code,(results)=>{
      res.json({results});
  });
});
module.exports.router = router;
