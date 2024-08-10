const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/mercadopago");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/mp", routes);

// error handling
app.use(errorHandler);

module.exports = app;
