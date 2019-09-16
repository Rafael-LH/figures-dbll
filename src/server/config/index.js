/**
 * Module dot env
 */
require("dotenv").config();

const CONFIG = {
  prod: process.env.NODE_ENV === "production",
  port: process.env.PORT || 9000,
  dbUser: process.env.DB_USER,
  dbPwd: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT
};

module.exports = CONFIG;
