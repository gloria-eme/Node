const MovieRoutes = require("express").Router();

const {
  getMovies,
  getMovie,
  postMovie,
  deleteMovie,
  editMovie
} = require("../controllers/movie.controller");

MovieRoutes.get("/", getMovies);
MovieRoutes.get("/:id", getMovie);
MovieRoutes.post("/", postMovie);
MovieRoutes.delete("/:id", deleteMovie);
MovieRoutes.put("/edit/:id", editMovie)

module.exports = MovieRoutes;


