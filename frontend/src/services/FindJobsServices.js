import React from "react";
import axios, { AxiosHeaders } from "axios";

const baseURL = "http://localhost:3000/api/jobs/";

const FindJobsService = {
  getJobs: async function () {
    try {
      const response = await axios.get(baseURL);
      return response;
    } catch (error) {
      console.log("Ups!! Cannot get the jobs for you!");
    }
  },

  deleteJob: async function (jobToDelete) {
    try {
      await axios.delete(`${baseURL}${jobToDelete}`);
    } catch (error) {
      console.log("Sorry job cannot be deleted!");
    }
  },

  deleteAllJobs: async function () {
    try {
      await axios.delete(baseURL);
    } catch (error) {
      console.log("Sorry jobs cannot be deleted!");
    }
  },
};

export default FindJobsService;
