var http = require('http');
var bl = require('bl');
var map = require('map-async');

function printResults(err, results) {
	if (err) throw err;
	results.forEach(function (result) {
		console.log(result);
	})
}

function httpGet (url, callback) {
	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			if (err) return callback(err)
			callback(err, data.toString())
		}))
	})
}

map(process.argv.slice(2), httpGet, printResults);
