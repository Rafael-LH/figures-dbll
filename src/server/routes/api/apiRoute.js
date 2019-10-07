/**
 * Modules
 * */
const route = require("express").Router();
const Figures = require('../../services/Figures')

route.get("/user", async (req, res) => {
  const figures = new Figures()
  try {
    const list = await figures.getFigures()
    res.status(200).json({ data: list })
  } catch (error) {
    next(error)
  }
});

module.exports = route;
