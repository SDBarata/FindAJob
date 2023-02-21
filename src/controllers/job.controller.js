const Model = require("../models/model");

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Model.find();
    res.json(allJobs);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Model.findById(req.params.id);
    res.json(job);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const createJob = async (req, res) => {
  const {
    title,
    description,
    company,
    location,
    jobType,
    jobFunction,
    salary,
    creationDate,
    updatedDate,
  } = req.body;

  const job = new Model({
    title,
    description,
    company,
    location,
    jobType,
    jobFunction,
    salary,
    creationDate,
    updatedDate,
  });

  //Saves the data from the post request
  try {
    const jobToSave = await job.save();
    res.status(200).json(jobToSave);
  } catch (error) {
    //Catches the error message in case post request was unsuccessfully performed.
    res.status(400).json({ message: error.message });
  }
};

const editJob = async (req, res) => {
  try {
    const id = req.params.id;
    const updateJob = req.body;

    const job = await Model.findByIdAndUpdate(id, updateJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Model.findByIdAndDelete(id);
    res.send(`Job with ${job.title} has been deleted`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllJobs, getJobById, createJob, editJob, deleteJob };
