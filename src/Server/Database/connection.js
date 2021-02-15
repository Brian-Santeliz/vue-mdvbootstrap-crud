const mysql = require("mysql-await");
const data = require("./config");
const database = mysql.createConnection(data);
module.exports = database;
