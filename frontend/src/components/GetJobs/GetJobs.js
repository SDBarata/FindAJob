import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowJobs from "../ShowJobs/ShowJobs";
//import api from "../../services/api";

export default function GetJobs() {
  const [jobs, setJobs] = useState([]);

  const baseURL = "http://localhost:3000/api/jobs/";

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(baseURL);

        setJobs(response.data);
        console.log(jobs);
      } catch (error) {
        console.log("Ups!! Cannot get the jobs for you!");
      }
    };
    getJobs();
  }, []);

  function deleteJob(id) {
    setJobs(jobs.filter((listOfJobs, index) => index !== id));
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
    </div>
  );
}

/* function getAllJobs(event) {
  event.preventDefault();
  console.log("Dá não?");
  const getJobs = async () => {
    const response = await axios.get(baseURL);
    setJobs(response.data);
  };
  getJobs();
}
console.log(jobs);
<form>
  <button onClick={getAllJobs}>Get available jobs!</button>
</form>;  */
