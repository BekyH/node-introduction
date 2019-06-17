const express = require('express');
const bodyparser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyparser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all leaders to you!');
})
.post((req,res,next)=>{
    res.end('will add the leader');
})
.put((req,res,next)=>{
    res.end('PUT is not suppoted in /leaders');
})
.delete((req,res,next)=>{
    res.end('Deleting all leaders');
});
leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('will send the leader: ' + req.params.leaderId);

})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST is not supported: ' + req.params.leaderId);

})
.put((req,res,next)=>{
    res.end('updating the leader: ' + req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end('deleting the leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;