const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname='localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log("request for " + req.url + 'by method' + req.method);
    if(req.method=='GET'){
        var fileUrl;
        if(req.url=='/') fileUrl = '/index.html';

        
        else fileUrl = req.url;
        var filepath = path.resolve('./public' + fileUrl);
        const filetext = path.extname(filepath);
        if(filetext=='.html'){
            fs.exists(filepath,(exists)=>{
                if(!exists){
                     res.statusCode = 404;
                     res.setHeader('content-Type','text/html');
                     res.end('<html><body><h1>Error 404:' + fileUrl + 'not found</h1></body></html>');
                     return;
                }
                else{
                        res.statusCode = 200;
                         res.setHeader('content-Type','text/html');
                          fs.createReadStream(filepath).pipe(res);

                }
            });

        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                    ' not a HTML file</h1></body></html>');
                    return;
        }

        
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
                return;
  
    }
});
server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`);
})