var fs = require('fs');
var path = require('path');
var files = [];

module.exports = function (directory, ext, callback) {
	fs.readdir(directory, function(err, list) {
		if (err) return callback(err);
		list.forEach(function (file) {
			if (path.extname(file) === '.' + ext) {
				files.push(file);
			}
		});
		return callback(null, files);
	});
}

