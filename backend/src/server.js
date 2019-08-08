const express = require("express");
const mogoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect("mongodb://0.0.0.0:8081/timdev");

server.use(express.json());

server.use(routes);

server.listen(3333);
