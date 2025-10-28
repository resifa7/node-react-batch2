import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import jwtAuth from "../middleware/jwtAuth.js";

const router = express.Router();

router.get("/", CategoryController.index);
router.post("/", CategoryController.store);
router.get("/:id", CategoryController.show);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.destroy);

export default router;
