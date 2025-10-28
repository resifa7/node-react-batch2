import express from "express";
import authRouter from "./auth.js";
import movieRouter from "./movie.js";
import categoryRouter from "./category.js";

const router = express.Router();

router.use("/", authRouter);
router.use("/movies", movieRouter);
router.use("/categories", categoryRouter);

export default router;
