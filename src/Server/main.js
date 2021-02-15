const express = require("express");
const morgan = require("morgan");
const path = require("path");
const database = require("./Database/connection");
const server = express();

server.set("puerto", 4040);
server.use(express.static(path.join(__dirname, "/public")));
server.use(express.json());
server.use(morgan("dev"));

server.listen(server.get("puerto"), async function() {
  console.log("Servidor corriendo en el puerto:", server.get("puerto"));
  try {
    await database.awaitConnect();
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error en la conexión", error);
  }
});
