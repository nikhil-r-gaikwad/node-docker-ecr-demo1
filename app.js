const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
    <body style="background-color: #e09155;">
    <h1>Hello Team !! This is nodejs+docker+ECR multiENV Project</h1>
    </body>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});