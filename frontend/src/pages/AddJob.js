import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div>
        <form className="create-job">
          <div className="title">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Add a job!"
              value={newJob.title}
            />
          </div>
          <div>
            <label for="description" className="form-label">
              Description
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Add a description!"
              value={newJob.description}
            />
          </div>
          <button type="submit" onClick={submitJob}>
            Add job
          </button>
        </form>
      </div>
    </>
  );
}
