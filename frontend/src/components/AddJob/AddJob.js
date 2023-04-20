import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddJob() {
  const [newJob, setNewJobs] = useState({
    title: "",
    description: "",
  });

  const baseURL = "http://localhost:3000/api/jobs/";

  function submitJob(event) {
    event.preventDefault();
    const addJob = async () => {
      const response = axios.post(baseURL, newJob);
      setNewJobs(response);
    };
    addJob();
    setNewJobs({ title: "", description: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setNewJobs({ ...newJob, [name]: value });
  }

  return (
    <>
      <Link to="/">Homepage</Link>
      <div>
        <form className="create-job">
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Add a job!"
            value={newJob.title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Add a description!"
            value={newJob.description}
          />
          <button onClick={submitJob}></button>
        </form>
      </div>
    </>
  );
}
