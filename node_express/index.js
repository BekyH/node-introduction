const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const hostname = 'localhost';
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const port = 3000;
const app = express();//we are saying that this app uses express module
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishRouter);
app.use('/promos',promoRouter);
app.use('/promos/:promoId',promoRouter);
app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderRouter);
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