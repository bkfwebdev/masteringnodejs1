/*
 * Primary file for API
 *
 */

// Dependencies
const http = require("http");
const url = require("url");
 // Configure the server to respond to all requests with a string
var server = http.createServer(function(req,res){
  
// get url and parse it
var parsedUrl = url.parse(req.url,true);

// get the path
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g,'');

//get the query string as an object
var queryStringObject = parsedUrl.query;

//get the http method
var method = req.method.toLowerCase();

//get the headers as an object
var headers = req.headers;

// send the response
res.end('Hello World!\n');

// log the request path
console.log("the request was received with these headers",headers);
});

// Start the server
server.listen(3000,function(){
  console.log('The server is up and running now');
});

