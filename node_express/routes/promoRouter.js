const express = require('express');
const bodyparser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyparser.json());
promoRouter.route('/')
.all((req,res,next)=>{ // this is common for all the request methods
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  })
  
  .get((req,res,next)=>{ // this is for the get request
      res.end('will send all the promoss to you!');
  })
.post((req,res,next)=>{ // this is for the post request
      res.end('will add the promos: ');
  })
  .put((req,res,next)=>{
      res.statusCode = 403;
     res.end('PUT operation is not supported in /promos');
  })
  .delete((req,res,next)=>{
  res.end('Deleting all the promos!');
  });
  promoRouter.route('/:promoId')
  .get((req,res,next)=>{
      res.end('will send the promo with: ' + req.params.promoId);

  })
  .post((req,res,next)=>{
      res.end('POST is not suppored with: ' + req.params.promoId);
  })
  .put((req,res,next)=>{
      res.end('updating the promo with: ' + req.params.promoId);
  })
  .delete((req,res,next)=>{
      res.end('deleting the promo: ' + req.params.promoId);
  });
module.exports = promoRouter;