const StreamRoutes = require("express").Router();

const {
  getStreams,
  getStream,
  postStream,
  deleteStream,
  updateStream,
  AddMovies
} = require("../controllers/stream.controller");

StreamRoutes.get("/", getStreams);
StreamRoutes.get("/stream", getStream);
StreamRoutes.post("/", postStream);
StreamRoutes.delete("/:id", deleteStream);
StreamRoutes.put("/:id", updateStream);
StreamRoutes.put("/:id"), AddMovies

module.exports = StreamRoutes;
