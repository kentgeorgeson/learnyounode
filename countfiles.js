var fs = require('fs');

fs.readFile(process.argv[2], function logLength(error, file) {
	if (error) return console.error(error); 
	console.log(file.toString().split('\n').length -1);
});

