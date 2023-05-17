import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowJobs from "../../pages/ShowJobs";
import ShowJobsService from "../../services/AddJobServices";

export default function ManageJobs() {
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
    const jobToDelete = jobs[id]._id;
    ShowJobsService.deleteJob(jobToDelete);
  }

  function deleteAllJobs() {
    ShowJobsService.deleteAllJobs();
  }

  return (
    <div>
      <Link to="/">Homepage</Link>
      {jobs.map((listOfJobs, index) => {
        return (
          <ShowJobs
            key={index}
            id={index}
            title={listOfJobs.title}
            description={listOfJobs.description}
            onDelete={deleteJob}
            onDeleteAll={deleteAllJobs}
          />
        );
      })}
    </div>
  );
}
