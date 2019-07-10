const express = require("express");

const connectDB = require("../config/db");

const app = express();

// Connecting MONGODB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rentalRouter = require("./routes/rentalRoutes");

app.use("/rentals", rentalRouter);

module.exports = app;
