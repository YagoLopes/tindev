const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose
  .connect("mongodb://mongodb/tindev", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(err);
    process.exit(1); //quit the process
  });

server.use(express.json());

server.use(routes);
server.listen(4000);
