import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowJobs from "../../pages/ShowJobs";
//import api from "../../services/api";
import AddJob from "../AddJob/AddJob";

export default function GetJobs() {
  const [jobs, setJobs] = useState([]);

  const baseURL = "http://localhost:3000/api/jobs/";

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(baseURL);

        setJobs(response.data);
      } catch (error) {
        console.log("Ups!! Cannot get the jobs for you!");
      }
    };
    getJobs();
  }, [jobs]);

  function deleteJob(id) {
    const jobToDelete = jobs[id]._id;
    const removeJob = async () => {
      try {
        const response = await axios.delete(`${baseURL}${jobToDelete}`);
      } catch (error) {
        console.log("Ups!! Cannot remove the jobs for you!");
      }
    };
    removeJob();
  }

  function AddJob() {
    const addJob = async () => {
      try {
        const response = await axios.post(baseURL);
      } catch (error) {
        console.log("Sorry the job cannot be inserted!");
      }
    };
    addJob();
  }

  return (
    <div>
      {jobs.map((listOfJobs, index) => {
        return (
          <ShowJobs
            key={index}
            id={index}
            title={listOfJobs.title}
            description={listOfJobs.description}
            onDelete={deleteJob}
          />
        );
      })}
      <AddJob />
    </div>
  );
}
