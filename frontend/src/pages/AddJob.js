import React, { useState } from "react";
import AddJobService from "../services/AddJobService";

export default function AddJob() {
  const [newJob, setNewJobs] = useState({
    title: "",
    description: "",
  });

  function submitJob(event) {
    event.preventDefault();
    AddJobService.addJob(newJob);
    setNewJobs(newJob);
    setNewJobs({ title: "", description: "" });
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
                placeholder="Add a job!"
                value={newJob.title}
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
          <button type="submit" onClick={submitJob}>
            Add job
          </button>
        </form>
      </div>
    </>
  );
}
