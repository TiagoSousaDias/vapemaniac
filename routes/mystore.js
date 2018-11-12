const express = require('express');
const router = express.Router();
//Routes go Here

router.get('/',(req,res)=>{
  console.log('teste');
  res.send('Backoffice login');
});

module.exports.router = router;
