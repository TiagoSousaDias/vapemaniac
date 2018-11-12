const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(cors);
//Define all Routes
app.use('/',require('./routes/routes').router);

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
