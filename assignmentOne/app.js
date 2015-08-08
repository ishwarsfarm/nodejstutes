var http = require('http');

var server = http.createServer(function(req,res){
    res.end("Hello Ishwar, Welcome to node HOME");
});

server.listen(3000);
