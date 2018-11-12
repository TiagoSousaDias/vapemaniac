const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors);
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
//  if (process.env.NODE_ENV === 'production') res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//Define all Routes
//app.use('/',require('./routes/routes').router);


app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Server connected to port:'+port);
  }
});
