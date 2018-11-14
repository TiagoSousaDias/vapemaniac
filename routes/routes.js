const express = require('express');
const router = express.Router();
//const Products = require('../models/products');

router.get('/',(req,res)=>{
  res.send('HElLO');
});
  router.use('/products',require('./products').router);
  router.use('/categories',require('./categories').router);
  router.use('/slider',require('./slider').router);

module.exports.router = router;
