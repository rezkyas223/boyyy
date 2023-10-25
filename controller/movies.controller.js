const moviesModel = require("../models/movies.model");
const errors = require("../services/errors");

const addMovies = async (req, res) => {
  try {
    const { title, genres, year } = req.body;
    const { photo } = JSON.stringify(req.file);

    moviesModel.create({
      id: 101,
      title: title,
      genres: genres,
      year: year,
      photo: photo,
    });

    res.status(200).json({ message: "Success add Movie" });
  } catch (error) {
    errors(res, 500, {
      message: "Cannot add movie!",
      error: error,
    });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await moviesModel.findAll();

    res.json(movies);
  } catch (error) {
    errors(res, 500, {
      message: "Cannot get all movie list!",
      error: error,
    });
  }
};

const getMoviesById = async (req, res) => {
  try {
    const id = await req.params.id;

    const moviesId = await moviesModel.findAll({
      where: {
        id: id,
      },
    });

    res.json(moviesId);
  } catch (error) {
    errors(res, 500, {
      message: "Cannot update movies, something went wrong!",
      error: error,
    });
  }
};

const updateMovies = async (req, res) => {
  try {
    const { id, title, genres, year, photo } = await req.body;

    await moviesModel.update(
      {
        title: title,
        genres: genres,
        year: year,
        photo: photo,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({ message: "Successfully updated data!" });
  } catch (error) {
    errors(res, 500, {
      message: "Cannot update movies, something went wrong!",
      error: error,
    });
  }
};

const deleteMovies = async (req, res) => {
  try {
    const id = await req.params.id;

    await moviesModel.destroy({
      where: {
        id: id
      }
    })
  } catch (error) {
    errors(res, 500, {
      message: "Cannot delete data!",
      error: error,
    });
  }
};

module.exports = {
  addMovies,
  getMovies,
  getMoviesById,
  updateMovies,
  deleteMovies
}
