const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const database = require("./Database/connection");
const router = require("./Router/router");
const server = express();

server.set("puerto", 4040);
server.use(morgan("dev"));
server.use(cors());
server.use(express.static(path.join(__dirname, "/public")));
server.use(express.json());
server.use("/api", router);

server.listen(server.get("puerto"), async function() {
  console.log("Servidor corriendo en el puerto:", server.get("puerto"));
  try {
    await database.awaitConnect();
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error en la conexión", error);
  }
});
