///Routes Main file
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  console.log('HELLO Teste');
  res.send('HElLO');
});

router.use('https://vapemaniac.herokuapp.com:'+process.env.PORT+'/',require('./mystore').router);



module.exports.router = router;
