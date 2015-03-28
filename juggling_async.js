var http = require('http');

var results = [];
var returned = 0;
var required = process.argv.length - 2;

for (var i = 0; i < process.argv.length - 2; i++) {
  httpGet(i)
}

function httpGet(i) {
  http.get(process.argv[i+2], function(res) {
    var result = '';
    res.setEncoding('utf8');
    res.on('data', function(data) {
      result += data;
    });

    res.on('end', function() {
      returned++;
      results[i] = result;
      if (returned == required) {
        results.forEach(function(r) {
          console.log(r);
        });
      }
    });
  });
}