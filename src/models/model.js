const mongoose = require('mongoose');

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

module.exports = mongoose.model('Job', jobsSchema);