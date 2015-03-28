var http = require('http');

http.createServer(function(req, res) {
  
  if (req.method == 'GET') {
    var url = req.url.split('?')[0];
    var query = req.url.split('?')[1];
    
    var p = query.split('=')[0];
    var v = query.split('=')[1];
    
    if (url == '/api/unixtime' && p == 'iso') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{"unixtime": ' + Date.parse(v).toString() + '}');
    }
    
    if (url == '/api/parsetime' && p == 'iso') {
      var date = new Date(Date.parse(v));

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{\n"hour": ' + date.getHours() + 
              ',\n"minute": ' + date.getMinutes() + 
              ',\n"second": ' + date.getSeconds() + '\n}');
    }
    
    res.writeHead(404);
  }
}).listen(process.argv[2]);