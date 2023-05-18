import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowJobsService from "../services/AddJobServices";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    ShowJobsService.getJobs()
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log("Ups!! Cannot get the jobs for you!");
      });
  }, [jobs]);

  function deleteJob(id) {
    ShowJobsService.deleteJob(id);
  }

  function deleteAllJobs(event) {
    event.preventDefault();
    ShowJobsService.deleteAllJobs();
  }

  return (
    <div>
      <Link to="/">Homepage</Link>
      <form>
        <button onClick={deleteAllJobs}>Remove all Jobs</button>
      </form>
      <ul>
        {jobs.map((listOfJobs) => (
          <li key={listOfJobs._id}>
            <p>{listOfJobs.title}</p>
            <p>{listOfJobs.description}</p>
            <button type="button" onClick={() => deleteJob(listOfJobs._id)}>
              Remove Job
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
