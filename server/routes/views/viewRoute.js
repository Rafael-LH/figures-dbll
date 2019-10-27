/**
 * Modules
 * */
const route = require("express").Router();

route.get("*", (req, res) => res.status(200).send("hello"));

module.exports = route;
