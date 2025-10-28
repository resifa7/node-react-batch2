import express from "express";
import MovieController from "../controllers/MovieController.js";
import jwtAuth from "../middleware/jwtAuth.js";

const router = express.Router();

router.get("/", MovieController.index);
// router.post("/", jwtAuth, MovieController.store);
router.post("/", MovieController.store);
router.get("/:id", MovieController.show);
// router.put("/:id", jwtAuth, MovieController.update);
router.put("/:id", MovieController.update);
// router.delete("/:id", jwtAuth, MovieController.destroy);
router.delete("/:id", MovieController.destroy);

export default router;
