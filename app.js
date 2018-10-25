const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Server connected to port:'+port);
  }
});
