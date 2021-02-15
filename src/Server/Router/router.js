const { Router } = require("express");
const { get, post, put, Delete, getById } = require("../Controller/controller");

const router = Router();
router.get("/articles", get);
router.post("/articles", post);
router.put("/articles/:id", put);
router.delete("/articles/:id", Delete);
router.get("/articles/:id", getById);
module.exports = router;
