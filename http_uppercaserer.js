var http = require('http');

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;  
    });
    
    req.on('end', function() {
      res.end(body.toUpperCase());
    });
  }
}).listen(process.argv[2]);