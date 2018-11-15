const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
//const  passport = require('passport');

const app = express();
const port = process.env.PORT || 8080;



//MIddlewares
app.use(cors());
app.use(bodyParser.json());
//Static Folder
app.use(express.static(path.join(__dirname,'public')));

app.use('api/',require('./routes/routes').router);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Server connected to port:'+port);
  }
});
