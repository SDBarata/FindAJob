import React, { useState, useEffect } from "react";
import FindJobsService from "../services/FindJobsServices";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    FindJobsService.getJobs()
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log("Ups!! Cannot get the jobs for you!");
      });
  }, [jobs]);

  function deleteJob(id) {
    FindJobsService.deleteJob(id);
  }

  function deleteAllJobs(event) {
    event.preventDefault();
    FindJobsService.deleteAllJobs();
  }

  return (
    <>
      <form>
        <button onClick={deleteAllJobs}>Remove all Jobs</button>
      </form>
      <div className="job-class">
        <ul className="job">
          {jobs.map((listOfJobs) => (
            <li key={listOfJobs._id}>
              <h3>{listOfJobs.title}</h3>
              <p>{listOfJobs.company}</p>
              <p>{listOfJobs.description}</p>
              <button type="button" onClick={() => deleteJob(listOfJobs._id)}>
                Remove Job
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
