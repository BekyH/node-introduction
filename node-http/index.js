const http = require('http'); //imports the http module
const fs = require('fs');     //imports the file system core module which allows to read and write files 
const path = require('path'); // imports the path core module which used to specify the path of the files
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
                          fs.createReadStream(filepath).pipe(res);//this method reads the file in the given path and add it to the response body

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