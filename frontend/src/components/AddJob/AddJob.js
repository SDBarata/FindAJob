import axios from "axios";
import React, { useState } from "react";

export default function AddJob() {
  const [addNewJob, setNewJobs] = useState({
    title: "",
    description: "",
  });

  const baseURL = "http://localhost:3000/api/jobs/";

  function handleClick(event) {
    event.preventDefault();
    const addJob = async () => {
      const response = axios.post(baseURL, addNewJob);
      setNewJobs(response);
    };
    addJob();
  }

  function handleChange(event) {
    console.log("entra?");
    const [name, value] = event.target;
    setNewJobs({ ...addNewJob, [name]: value });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={addNewJob.title}
          type="text"
          name="title"
          placeholder="Add a job!"
        ></input>
        <input
          onChange={handleChange}
          value={addNewJob.description}
          type="text"
          name="description"
          placeholder="Add a description!"
        ></input>
        <button onClick={handleClick}></button>
      </form>
    </div>
  );
}
