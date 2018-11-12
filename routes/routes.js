///Routes Main file
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.send('HElLO');
});

  router.use('/mystore',require('./mystore').router);



module.exports.router = router;
