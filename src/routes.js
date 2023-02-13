const express = require("express");
const model = require("./models/model")
import { Model } from "mongoose";
import JobController from "./controllers/JobController"
const routes = express.Router();// ou então import { Router } from "express"; e cria-se um const routes = new Router();


routes.post('/post', async (req, res) => {
    const newJob = new Model({
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
})


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