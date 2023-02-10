const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//main().catch(err => console.log(err));

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


/* async function main() {
    mongoose.set('strictQuery',false);
    await mongoose.connect('mongodb://27017/jobsDB');
    console.log("Connected");
} */

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


const Job = mongoose.model("Job", jobsSchema);

const firstJob = new Job({
    title: "Engineer",
    description: "I&C",
    company: "Siemens",
    location: "Everywhere",
    jobType: "Full time",
    jobFunction: "Instrumenttion nd control",
    salary: "1000",

});

firstJob.save()

/* Job.insertOne([firstJob], function(err){
    if(err) {
        console.log(err);
    }
    else {
        console.log("Pronto")
    }
}); */

/* app.route("/jobs")
    .get((req, res)) */


app.listen(3000, () => console.log("The server is running on 3000 port"));