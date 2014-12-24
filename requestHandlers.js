var generateBody = require("./generateBody");

function start(response) {
	  	console.log("Request handler 'start' was called.");

	 	generateBody(response); 
}

function upload(response) {
	  console.log("Request handler 'upload' was called.");
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello Upload");
	  response.end();
}

exports.start = start;
exports.upload = upload;