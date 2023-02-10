const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.route("/")
    .get((req, res) => {
        Job.find(function (err, foundJob){
            if(!err) {
                res.send(foundJob);

            } 
            else {
                res.send(err);
            }
        })
    })

    .post((req, res) => {
        const newJob = new Job({
            title: req.body.title,
            description: req.body.description,
            company: req.body.company,
            location: req.body.location,
            jobType: req.body.jobType,
            jobFunction:req.body.jobFunction,
            salary: req.body.salary,
            creationDate: req.body.creationDate,
            updatedDate: req.body.updatedDate,
        });

        newJob.save(function (err) {
            if (!err) {
                res.send("The article was succefully added");
            }
            else {
                res.send(err);
            }
        });
    });

app.route("/myjob")

    .delete((req, res) => {
        Job.deleteOne(
            {title: req.params  });
        res.send("Job was succeffully removed")
    })




app.listen(3000, () => console.log("The server is running on 3000 port"));