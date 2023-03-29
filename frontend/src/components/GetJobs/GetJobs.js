import React, { useState, useEffect } from "react";
import axios from "axios";
import GetJobs from "../ShowJobs/ShowJobs";
//import api from "../../services/api";

export default function ShowJobs() {
  const [jobs, setJobs] = useState([]);

  const baseURL = "http://localhost:3000/api/jobs/";

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(baseURL);
      setJobs(response.data);
    };
    getJobs();
  }, []);

  return (
    <div>
      {jobs.map((listOfJobs, index) => {
        return (
          <GetJobs
            key={index}
            index={index}
            title={listOfJobs.title}
            description={listOfJobs.description}
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
