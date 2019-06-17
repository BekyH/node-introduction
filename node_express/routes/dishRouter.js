const express = require('express');
const bodyparser = require('body-parser');
const dishRouter = express.Router();
dishRouter.route('/')
.all((req,res,next)=>{ // this is common for all the request methods
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  })
  
  .get((req,res,next)=>{ // this is for the get request
      res.end('will send all the dishes to you!');
  })
.post((req,res,next)=>{ // this is for the post request
      res.end('will add the dishes: ' + req.body.name + ' with details: ' + req.body.description);
  })
  .put((req,res,next)=>{
      res.statusCode = 403;
     res.end('PUT operation is not supported in /dishes');
  })
  .delete((req,res,next)=>{
  res.end('Deleting all the dishes!');
  });
  