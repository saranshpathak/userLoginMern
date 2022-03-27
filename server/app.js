const express = require('express');
const app = express();
const connect = require('./config/db');
const auth = require('./router/auth');
const bodyParser = require('body-parser');
connect();

// app.use(express.json());
app.use(bodyParser.json());
//app.get('/',(req,res)=>{
    //res.send(`hi haterss`);
//  });

  app.use('/', auth); 

// console.log("Running Successfully");
app.listen(8000,()=>{
    console.log(`server is running on port 8000`);
}); 