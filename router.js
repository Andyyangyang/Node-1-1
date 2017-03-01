var requestHandlers = require("./requestHandlers");

function route(pathname, response, request) {
console.log(5555555)
	var handle = {}
	handle["/"] = requestHandlers.start;
	handle["/start"] = requestHandlers.start;
	handle["/upload"] = requestHandlers.upload;
	handle["/show"] = requestHandlers.show;

	if (typeof handle[pathname] === 'function') {
	    handle[pathname](response, request);
	} else {
	    console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;