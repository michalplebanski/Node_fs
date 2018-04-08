var fs = require('fs');
var colors = require('colors');

fs.readdir('./example', 'utf-8', function(err, data) {
	var info = data;
	fs.writeFile('./new.txt', info, function(err) {
		if (err) throw err;
		console.log('Information about that dir is inside a new.txt file'.green);
	});
});