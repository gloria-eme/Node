const Movie = require("../models/Movie.model");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    return next(err);
  }
};

//endpoint get que devuelve una película según su _id
const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const moviebyid = await Movie.findById(id);
    return res.status(200).json(moviebyid);
  } catch (err) {
    return next(err);
  }
};

const postMovie = async (req, res, next) => {
  try {
    const movie = new Movie();
    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.year = req.body.year;
    movie.genre = req.body.genre;
    const movieInDB = await movie.save();
    return res.status(201).json(movieInDB);
  } catch (err) {
    return next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    return res.status(200).json("Movie deleted");
  } catch (err) {
    return next(err);
  }
};

const editMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = new Movie(req.body);
    movie._id = id;
    const updateMovie = await Movie.findByIdAndUpdate(id);
    return res.status(200).json(updateMovie);
  } catch (err) {
    return next(err);
  }
};
//endpoint get que devuelve un valor por su género.
// const getGenreMovie = async (req, next) => {
//   const { genre } = req.params;
//   try {
//     const moviebygenre = await Movie.find({ genre: genre });
//     res.status(200).json(moviebygenre);
//   } catch (err) {
//     next(err);
//   }
// };

// const getYearMovie =  async (req, res, next) => {
//   const year = req.params.year;
//   try {
//     const movieyear = await Movie.find({ year: { $gt: year } });
//     if (movieyear) {
//       return res.status(200).json(movieyear);
//     } else {
//       return res.status(404).json("No movie found");
//     }
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  getMovies,
  getMovie,
  postMovie,
  deleteMovie,
  editMovie,
};
