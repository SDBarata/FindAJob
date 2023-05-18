import axios from "axios";

const baseURL = "http://localhost:3000/api/jobs/";

const AddJobService = {
  addJob: async function (newJob) {
    try {
      axios.post(baseURL, newJob);
    } catch (error) {
      console.log("Ups!! Cannot add the job for you!");
    }
  },
};

export default AddJobService;
