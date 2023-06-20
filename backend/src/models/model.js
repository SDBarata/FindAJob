const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  jobtype: String,
  salary: Number,
  creationDate: Date,
  updatedDate: Date,
});

module.exports = mongoose.model("Job", jobsSchema);
