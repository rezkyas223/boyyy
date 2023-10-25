const express = require("express");
const {
  addMovies,
  getMovies,
  getMoviesById,
  updateMovies,
  deleteMovies,
} = require("../controller/movies.controller");
const upload = require("../");

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.put("/movies", updateMovies);
router.delete("/movies/:id", deleteMovies);

module.exports = router;
