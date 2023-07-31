const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("Database connection error: " + err);
      console.error(err);
      process.exit(1);
    })
}
