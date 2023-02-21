const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

const initDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(url, () => {
    console.log("Connected to MongoDB");
  });
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database connected");
  });
};

module.exports = initDatabase;
