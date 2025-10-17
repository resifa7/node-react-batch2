import express from "express";
import MovieController from "../controllers/MovieController.js";

const router = express.Router();

router.get("/movie", MovieController.index);
router.post("/movie", MovieController.store);
router.get("/movie/:id", MovieController.show);
router.put("/movie/:id", MovieController.update);
router.delete("/movie/:id", MovieController.destroy);

router.post('/category', basicAuth, createCategory)
router.get('/category', readCategory)
router.get('/category/:id', readCategoryById)
router.put('/category/:id', basicAuth, updateCategory)
router.delete('/category/:id', basicAuth, deleteCategory)

export default router;
