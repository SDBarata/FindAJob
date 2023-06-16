import React, { useState } from "react";
import AddJobService from "../services/AddJobService";

export default function AddJob() {
  const [newJob, setNewJobs] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    jobtype: "",
  });

  function submitJob(event) {
    event.preventDefault();
    AddJobService.addJob(newJob);
    setNewJobs(newJob);
    setNewJobs({
      title: "",
      company: "",
      location: "",
      description: "",
      jobtype: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewJobs({ ...newJob, [name]: value });
  }

  return (
    <>
      <div className="create-job">
        <h2> Add a job</h2>
        <form className="addjob-input">
          <div className="input-block">
            <label for="title" className="label">
              <p>Job title *</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Add a title for the job"
                value={newJob.title}
              />
            </label>
          </div>
          <div className="input-block">
            <label for="company" className="label">
              <p>Company *</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="company"
                placeholder="Company's name"
                value={newJob.company}
              />
            </label>
          </div>
          <div className="input-block">
            <label for="location" className="label">
              <p>Location *</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="location"
                placeholder="Company's location"
                value={newJob.location}
              />
            </label>
          </div>
          <div className="input-block">
            <label for="description" className="label">
              <p>Description *</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="description"
                placeholder="Description"
                value={newJob.description}
              />
            </label>
          </div>
          <div className="input-block">
            <label for="jobtype" className="label">
              <p>Job type *</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="jobtype"
                placeholder="Add the jobtype"
                value={newJob.jobtype}
              />
            </label>
            <p>* Mandatory fields</p>
          </div>

          <button className="submit-button" type="submit" onClick={submitJob}>
            Add job
          </button>
        </form>
      </div>
    </>
  );
}
