var http = require('http');
var fs = require('fs');

var port = process.env.PORT || '8080';

http.createServer(function (req, res) {
    fs.readFile('Img.html', function(err,data)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });

}).listen(port);

console.log("App listening on " + port);