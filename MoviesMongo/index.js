const express = require("express");
const cors = require("cors");
const { connect } = require("./database/connect");

const MovieRoutes = require("./api/routes/movies.routes");
const StreamRoutes = require("./api/routes/streams.routes");

connect();

// const PORT = 3000;
const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);
server.use(cors());

// const router = express.Router();
// server.use("/apimovies", router);

server.use("/api/movies", MovieRoutes);
server.use("/api/streams", StreamRoutes);
server.use("api", (res) => res.setEncoding("Open"));

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

server.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

server.listen(process.env.PORT, () => {
  console.log(`Server running`);
});
