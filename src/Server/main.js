const express = require("express");
const morgan = require("morgan");
const server = express();

const port = server.set("port", 4040);
server.use(express.json());
server.use(morgan("dev"));
server.listen(port, () => {
  console.log("Servidor en el puerto", port);
});
