/**
 * Modules
 * */
const route = require("express").Router();

route.get("/user", (req, res) =>
  res.status(200).json({ data: { username: "rafis bebe" } })
);

module.exports = route;
