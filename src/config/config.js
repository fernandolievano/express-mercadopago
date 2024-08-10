require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3005,
  DB_URL: process.env.DB_URL,
};
