const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const hostname = 'localhost';
const port = 3000;
const app = express();//we are saying that this app uses express module
app.use(morgan('dev'));
app.use(bodyparser.json());
app.all('/dishes',(req,res,next)=>{ // this is common for all the request methods
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
});

app.get('/dishes',(req,res,next)=>{ // this is for the get request
    res.end('will send all the dishes to you!');
});
app.post('/dishes',(req,res,next)=>{ // this is for the post request
    res.end('will add the dishes: ' + req.body.name + ' with details: ' + req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
   res.end('PUT operation is not supported in /dishes');
});
app.delete('/dishes',(req,res,next)=>{
res.end('Deleting all the dishes!');
});

app.get('/dishes/:dishId',(req,res,next)=>{ // this is for the get request
    res.end('will send the details of the dish: ' + req.params.dishId + ' to you!');
});
app.post('/dishes/:dishId',(req,res,next)=>{ // this is for the post request
    res.statusCode = 403;
    res.end('POST operation is not supported in /dishes ' + req.params.dishId);
});
app.put('/dishes/:dishId',(req,res,next)=>{
   res.write('updating the dish: ' + req.params.dishId + '\n');
   res.end('will update the dish: ' + req.params.dishId + ' with detials: ' + res.body.description);
});
app.delete('/dishes/:dishId',(req,res,next)=>{
res.end('Deleting a dish: ' + req.params.dishId);
});
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is express</h1></body></html>');

});
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log('Server is running at http//:' + hostname +':' + port);
}); 