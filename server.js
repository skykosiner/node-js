const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content type
});

server.listen(3000, "localhost", () => {
  console.log(`Server started on ${port}`);
});
