const database = require("../Database/connection");
const get = async (req, res) => {
  try {
    const data = await database.awaitQuery("SELECT * FROM article ");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await database.awaitQuery(
      "SELECT * FROM article WHERE id = ?",
      [id]
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const post = async (req, res) => {
  const { name, description, price } = req.body;
  console.log(req.body);
  try {
    await database.awaitQuery(
      "INSERT INTO article (name, description, price) VALUES (?, ? , ?)",
      [name, description, price]
    );
    res.status(201).json("Articulo agregado");
  } catch (error) {
    res.status(500).json(error);
  }
};
const put = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    await database.awaitQuery(
      "UPDATE article SET name = ?, description = ?, price = ? WHERE id = ? ",
      [name, description, price, id]
    );
    res.status(201).json("Actualizado");
  } catch (error) {
    res.status(500).json(error);
  }
};
const Delete = async (req, res) => {
  const { id } = req.params;
  try {
    await database.awaitQuery("DELETE FROM article WHERE id = ?", [id]);
    res.status(200).json("Eliminado");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  get,
  post,
  put,
  Delete,
  getById,
};
