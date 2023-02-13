const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const Job = mongoose.model("Job", jobsSchema);

app.route("/api/jobs")
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
    })

    .delete((req, res) => {
        Job.deleteOne(
            {title: req.params  });
        res.send("Job was succeffully removed")
    });




app.listen(3000, () => console.log("The server is running on 3000 port"));