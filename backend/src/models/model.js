const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  jobType: String,
  salary: Number,
  creationDate: Date,
  updatedDate: Date,
});

module.exports = mongoose.model("Job", jobsSchema);
