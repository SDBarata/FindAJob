import axios from "axios";
import React, { useEffect, useState } from "react";
//import api from "../../services/api";

function ShowJobs() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/api/jobs/").then((response) => {
      setJobs(response.data);
    });
  }, []);

  function handleClick() {
    return setJobs();
  }

  return (
    <div>
      <h1>{jobs}</h1>
      <form>
        <button onClick={handleClick}>Get available jobs!</button>
      </form>
    </div>
  );
}

export default ShowJobs;
