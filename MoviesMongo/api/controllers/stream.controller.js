const Stream = require("../models/stream.model");

const getStreams = async (req, res, next) => {
  try {
    const streams = await Stream.find().populate("stream");
    res.status(200).json(streams);
  } catch (error) {
    return next(error);
  }
};

const getStream = async (req, res, next) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findById(id).populate("stream");
    res.status(200).json(stream);
  } catch (error) {
    return next(error);
  }
};

const postStream = async (req, res, next) => {
  try {
    const stream = new Stream(req.body);
    stream.name = req.body.name;
    stream.movies = [];
    const streamInDB = await stream.save();
    return res.status(201).json(streamInDB);
  } catch (err) {
    return next(err);
  }
};

const AddMovies = async (req, res, next) => {
  try {
    // const { streamId } = req.body;
    // const { movieId } = req.body;
    const {id} = req.param
    const stream = new Stream(req.body)
    stream._id = id
    const updatestreams = await Stream.findByIdAndUpdate(id, stream,
      // { $push: { movies: movieId } },
      // { new: true }
    );
    return res.status(200).json(updatestreams);
  } catch (err) {
    return next(err);
  }
};

const updateStream = async (req, res, next) => {
  try {
    const { id } = req.params;
    const stream = new Stream(req.body);
    team._id = id;
    const updateStreamDB = await stream.findByIdAndUpdate(id, stream);
    return res.status(200).json(updateStreamDB);
  } catch (error) {
    return next(error);
  }
};

const deleteStream = async (req, res, next) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findByIdAndDelete(id);
    return res.status(200).json(stream);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getStreams,
  getStream,
  postStream,
  updateStream,
  deleteStream,
  AddMovies
};
