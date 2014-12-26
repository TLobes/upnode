var generateBody = require("./generateBody");
var querystring = require("querystring");

function start(response, postData) {
	console.log("Request handler 'start' was called.");

	generateBody(response); 
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent: " +  querystring.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;