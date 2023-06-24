import React, { useState } from "react";
import AddJobService from "../services/AddJobService";

export default function AddJob() {
  const [newJob, setNewJobs] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    jobtype: "",
  });

  function submitJob(event) {
    event.preventDefault();
    AddJobService.addJob(newJob);
    setNewJobs(newJob);
    setNewJobs({
      title: "",
      company: "",
      location: "",
      description: "",
      jobtype: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setNewJobs({ ...newJob, [name]: value });
  }

  return (
    <>
      <div className="create-job">
        <h2> Add a job</h2>
        <form className="addjob-input">
          <div className="input-block">
            <label for="title" className="label">
              Job title *
            </label>
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Add a title for the job"
              value={newJob.title}
            />
          </div>
          <div className="input-block">
            <label for="company" className="label">
              Company *
            </label>
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="company"
              placeholder="Company's name"
              value={newJob.company}
            />
          </div>
          <div className="input-block">
            <label for="location" className="label">
              Location *
            </label>
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="location"
              placeholder="Company's location"
              value={newJob.location}
            />
          </div>
          <div className="input-block">
            <label for="description" className="label">
              Description *
            </label>
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Description"
              value={newJob.description}
            />
          </div>
          <div className="input-block">
            <label for="jobtype" className="label">
              Job type *
            </label>
            <select className="jobtype-class">
              <option
                value={(newJob.jobtype = "Full-time")}
                onChangeValue={handleChange}
              >
                Full-time
              </option>
              <option
                value={(newJob.jobtype = "Part-time")}
                onChangeValue={handleChange}
              >
                Part-time
              </option>
              <option
                value={(newJob.jobtype = "Contract")}
                onChangeValue={handleChange}
              >
                Contract
              </option>
              <option
                value={(newJob.jobtype = "Temporary")}
                onChangeValue={handleChange}
              >
                Temporary
              </option>
              <option
                value={(newJob.jobtype = "Internship")}
                onChangeValue={handleChange}
              >
                Internship
              </option>
              <option
                value={(newJob.jobtype = "Volunteer")}
                onChangeValue={handleChange}
              >
                Voluteer
              </option>
              <option
                value={(newJob.jobtype = "Other")}
                onChangeValue={handleChange}
              >
                Other
              </option>
            </select>
            <p>* Mandatory fields</p>
          </div>
        </form>

        <div className="addjob-button">
          <button className="submit-button" type="submit" onClick={submitJob}>
            Add job
          </button>
        </div>
      </div>
    </>
  );
}
