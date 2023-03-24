import axios from "axios";
import React, { useEffect, useState } from "react";
//import api from "../../services/api";

export default function ShowJobs() {
  const [jobs, setJobs] = useState([]);

  const baseURL = "http://localhost:3000/api/jobs";

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(baseURL);
      setJobs(response.data);
      console.log("resposta", response);
    };
    getJobs();
  }, []);

  return (
    <div>
      <h1>{jobs}</h1>
      <form>
        <button>Get available jobs!</button>
      </form>
    </div>
  );
}
