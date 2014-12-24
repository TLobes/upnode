var generateBody = require("./generateBody"); // Do I need this?

function start(response) {
  	console.log("Request handler 'start' was called.");

 	// Hoping this call will replace the code in generateBody.js
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