const express = require("express");
const {
  getMovies,
  getMovieById,
  store,
} = require("../controllers/MovieController");

const router = express.Router();

router.get("/movie", getMovies);
router.post("/movie", store);
router.get("/movie/:id", getMovieById);

module.exports = {
  router,
};
