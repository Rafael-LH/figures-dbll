/**
 * Modules
 */
const express = require("express");
const Boom = require("boom");
const morgan = require("morgan");
const apiRotes = require("./routes/api/apiRoute");
const viewRoutes = require("./routes/views/viewRoute");
const { port } = require("./config");
const {
  errorLog,
  boomError,
  clientError
} = require("./utils/Midellwars/errorHandler");

// create server app instance
const app = express();

// midllwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// static files

// routes
app.use("/api/", apiRotes);
app.use("/", viewRoutes);

// Routes Not Found
app.use((req, res) => {
  const {
    output: { statusCode, payload }
  } = Boom.notFound();

  res.status(statusCode).json(payload);
});

// Custom handle errors
app.use(errorLog);
app.use(boomError);
app.use(clientError);

//  Run server
app.listen(port, () => console.log(`Server runing on ${port}`));
