const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log(req);
  res.setHeader('Content-Type', 'text/plain');
 console.log("New Req Rec.");
  res.end("Hello World!\n");
});

myserver.listen(8000, () => {
  console.log("Server Started");
});
