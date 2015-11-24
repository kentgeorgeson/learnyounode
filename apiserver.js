var http = require('http');
var url = require('url');

var server = http.createServer( function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var pathname = url.parse(req.url, true).pathname;
	var query  = url.parse(req.url, true).query;
	var myDate = new Date(query.iso);
	if (pathname == '/api/parsetime') {
		var myHours = myDate.getHours();
		var myMinutes = myDate.getMinutes();
		var mySeconds = myDate.getSeconds();
		res.write('{\n "hour": ' + myHours + ', \n "minute": ' + myMinutes + ', \n "second": ' + mySeconds + '\n} ');
		res.end();
	} 
	if (pathname == '/api/unixtime') {
		res.write('{ "unixtime": ' + myDate.getTime() + ' }');
		res.end();
	}

})
server.listen(Number(process.argv[2]));
