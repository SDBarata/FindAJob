import axios from "axios";
import React, { useState } from "react";

export default function AddJob() {
  const [addNewJob, setNewJobs] = useState({
    title: "",
    description: "",
  });

  const baseURL = "http://localhost:3000/api/jobs/";

  function handleClick() {
    const addJob = async () => {
      const response = axios.post(baseURL, addNewJob);
      setNewJobs(response);
    };
    addJob();
  }

  return (
    <div>
      <form>
        <input
          value={addNewJob.title}
          name="title"
          placeholder="Add a job!"
        ></input>
        <input
          value={addNewJob.description}
          name="description"
          placeholder="Add a description!"
        ></input>
        <button onClick={handleClick}></button>
      </form>
    </div>
  );
}
