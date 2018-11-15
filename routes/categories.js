const express = require('express');
const router = express.Router();
const Categories = require('../models/categories');

router.get('/catMenu',(req,res)=>{
  Categories.getMenuCategories((results)=>{
    console.log(results);
    res.json({results});
  });
});

module.exports.router = router;
