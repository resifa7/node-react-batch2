import express from "express";
import MovieController from "../controllers/MovieController.js";

const router = express.Router();

router.get("/movie", MovieController.index);
router.post("/movie", MovieController.store);
router.get("/movie/:id", MovieController.show);
router.put("/movie/:id", MovieController.update);
router.delete("/movie/:id", MovieController.destroy);

export default router;
