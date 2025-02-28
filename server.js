var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {

  console.log(req.url);

  fs.readFile('.' + req.url, (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    if (!err) {
      res.end(data);
    } else {
      res.end('html not found');
    }
  });

}).listen(8888, () => {
  console.log('Server running at http://127.0.0.1:8888/');
});

