let port = 3000;
let http = require("http");

let server = http.createServer(function(request, response){
  response.end("Hello world!!!!");
});

server.listen(port, function(){
  console.log("Server listening on port " + port);
});
