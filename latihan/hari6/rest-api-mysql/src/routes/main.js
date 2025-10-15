const express = require("express");
const {
  movie,
  getMovieById,
  store,
  updateMovie,
  deleteMovie,
} = require("../controllers/MovieController");

const router = express.Router();

router.get("/movie", movie);
router.post("/movie", store);
router.get("/movie/:id", getMovieById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);


module.exports = {
  router,
};
