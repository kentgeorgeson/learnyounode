var http = require('http');
var fs = require('fs');

var server = http.createServer( function(request, response) {
	var rs = fs.createReadStream(process.argv[3]);
	rs.on('open', function () {
		rs.pipe(response);
	})
	rs.on('error', function(err) {
		res.end(err);
	})
})
server.listen(process.argv[2]);

