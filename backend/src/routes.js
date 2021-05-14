const { Router } = require("express");

const ClientControle = require("./controllers/clientControler.js");

const router = Router();

router.get("/", ClientControle.index);
router.get("/:id", ClientControle.select);
router.post("/", ClientControle.create);
router.put("/:id", ClientControle.update);
router.delete("/:id", ClientControle.del);

module.exports = router;
