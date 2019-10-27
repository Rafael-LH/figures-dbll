module.exports = req =>
  req.xhr ||
  !req.accepts("html") ||
  req.get("Content-Type") === "application/json";
