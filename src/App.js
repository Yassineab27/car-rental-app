const express = require("express");

const connectDB = require("../config/db");

const app = express();

// Connecting MONGODB
connectDB();

// Importing Routes
const rentalRouter = require("./routes/rentalRoutes");
const carRouter = require("./routes/carRoutes");

// Parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting Routes
app.use("/rentals", rentalRouter);
app.use("/cars", carRouter);

// Serve Statics in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}

module.exports = app;
