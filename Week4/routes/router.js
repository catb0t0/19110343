const router = require("express").Router();
const {
  getAll,
  getById,
  add,
  getAllById,
  messageGetAll,
} = require("../controllers/index.js");

router.get("/", getAll);

router.get("/19110343/:id", getById);

router.post("/19110343/:id", add);

router.get("/message/:id", getAllById);

router.get("/message", messageGetAll);

module.exports = router;
