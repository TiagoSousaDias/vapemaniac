const express = require('express');
const router = express.Router();
const Categories = require('../models/categories');

router.get('/catMenu',(req,res)=>{
  Categories.getMenuCategories((results)=>{
    res.json({results});
  });
});

router.get('/',(req,res)=>{
  Categories.getCategories((results)=>{
    res.json({results});
  });
});

module.exports.router = router;
