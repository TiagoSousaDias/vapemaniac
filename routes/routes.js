const express = require('express');
const router = express.Router();
//const Products = require('../models/products');

router.get('/',(req,res)=>{
  res.send('HElLO');
});
  router.use('/products',require('./products').router);
  router.use('/slicer',require('./slicer').router);

module.exports.router = router;
