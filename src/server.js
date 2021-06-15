const express = require("express");
const nunjucks = require("nunjucks");

const port = 3001;
const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.json({"Hello": "World"});
});

server.listen(port, () => console.log(`Servidor rodando no http://localhost:${port}`));
