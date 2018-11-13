const express = require('express');
const router = express.Router();
const slicer =  require('../models/slicer');

router.get('/:id',(req,res)=>{

   slicer.getSlider(req.params.id,(images)=>{
     res.json({
       images
     });
     });
});
module.exports.router = router;
