const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/jobsDB'
mongoose.set("strictQuery", false);
mongoose.connect(url, () => {
  console.log("Connected to MongoDB");
});

const jobsSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
    jobType: String,
    jobFunction: String,
    salary: Number,
    creationDate: Date,
    updatedDate: Date
});

module.exports = mongoose.model("Job", jobsSchema);