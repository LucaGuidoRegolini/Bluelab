import { Router } from "express";

import ClientControle from "./controllers/ClientControler.js";

const router = Router();

router.get("/", ClientControle.index);

router.post("/", ClientControle.create);

export default router;
