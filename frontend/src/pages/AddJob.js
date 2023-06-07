import React, { useState } from "react";
import AddJobService from "../services/AddJobService";

export default function AddJob() {
  const [newJob, setNewJobs] = useState({
    title: "",
    company: "",
    description: "",
  });

  function submitJob(event) {
    event.preventDefault();
    AddJobService.addJob(newJob);
    setNewJobs(newJob);
    setNewJobs({ title: "", company: "", description: "" });
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
              <p>Title</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Job Title"
                value={newJob.title}
              />
            </label>
          </div>
          <div className="input-block">
            <label for="company" className="label">
              <p>Company</p>
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
            <label for="description" className="label">
              <p>Description</p>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="description"
                placeholder="Add a description!"
                value={newJob.description}
              />
            </label>
          </div>
          <button className="submit-button" type="submit" onClick={submitJob}>
            Add job
          </button>
        </form>
      </div>
    </>
  );
}
