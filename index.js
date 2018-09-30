/*
 * 
 * Primary file for API
 *
 */

// Dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
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

// get payload if any
decoder = new StringDecoder("utf-8");
var buffer = "";
req.on("data",function(data){
buffer += decoder.write(data);
});

req.on("end",function(){
  buffer += decoder.end();
//choose the handler this request should go to
//if one is not found use the not found handler
var chooseHandler = typeof(router[trimmedPath]) !== "undefined" ? rounter[trimmedPath] : theHandlers.notFound;

//construct the data object to send to the handler
var data {

  "trimmedPath" : trimmedPath,
  "queryStringObject" : queryStringObject,
  "method" : method,
  "headers" : headers,
  "payload" : buffer

};

//route the request to handler specified in the router
 chooseHandler(data,function(statusCode,payload){
   //use the status code called back by the handler or default to 200
   statusCode = typeof(statusCode) == "number" ? statusCode : 200;

   //use the payload called back by the handler or default to an empty object
   payload = typeof(payload) == "object" ? payload : {};

   //convert the payload to a string
   payloadString = JSON.stringify(payload);

   //return the response
   res.writeHead(statusCode);
   res.end(payloadString);

   // log the request path
console.log("returning this response:", statusCode, payloadString);
 });


});


});

// Start the server
server.listen(3000,function(){
  console.log('The server is up and running now');
});

// define handlers
var theHandlers = {};

//sample handler
theHandlers.sample = function(data,callback){
  // callback an http status code and a payload object
  callback(406,{'name':'sample handler'});
};

//not found handler
theHandlers.notFound = function(data,callback){
  callback(404);
};

// define router
var theRouter = {
  "sample":handlers.sample
}

