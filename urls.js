var url=require('url');
var fs=require('fs')
var http = require('http');
var adr = 'http://localhost:8080/home';
var q = url.parse(adr, true);
http.createServer(function (req, res)
 {

    var q=url.parse(req.url,true);

    var filename='index.html';
    fs.readFile(filename,function(err,data){
        if (err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 NOT FOUND");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);