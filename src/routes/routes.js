const express = require("express");
const Model = require('../models/model');
const routes = express.Router();// ou então import { Router } from "express"; e cria-se um const routes = new Router();


routes.post('/', async (req, res) => {
    const job = new Model({
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

    //Saves the data from the post request
    try{
        const jobToSave = await job.save();
        res.status(200).json(jobToSave);
    }
    //Catches the error message in case post request was unsuccessfully performed.
    catch (error) {
        res.status(400).json({ message: error.message});
    }
})

routes.get('/', async (req, res) => {
    try {
        const job = await Model.find();
        res.json(job);
    }    
    
    catch {
        res.status(500).json({ message: error.message});
    }
})

routes.get('/:id', async (req, res) => {
    try {
        const job = await Model.findById(req.params.id);
        res.json(job);
    }    
    catch {
        res.status(500).json({ message: error.message});
    }
})

routes.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateJob = req.body;
        
        const job = await Model.findByIdAndUpdate(id, updateJob);
    }
    catch (error) {
        res.status(500).json({ message: error.message});
    }  
})


routes.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const job = await Model.findByIdAndDelete(id);
        res.send('Job with ${job.title} has been deleted')
        console.log("dasdasd ${id}")
    }
    catch (error) {
        res.status(500).json({ message: error.message})
    }  
})

module.exports = routes;