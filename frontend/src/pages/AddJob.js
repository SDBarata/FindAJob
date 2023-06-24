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
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="jobtype"
              placeholder="Add the job type (e.g. Full/Part-time)"
              value={newJob.jobtype}
            />
            <p>* Mandatory fields</p>
          </div>

          {/* <div className="jobtype-class">
            <button
              type="button"
              className="button-jobtype"
              aria-expanded="false"
              aria-label="jobtype-menu"
            ></button>
            "Full time"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="select-options"
              width="16"
              height="16"
              focusable="false"
            >
              <path
                d="M8 11L3 6h10z"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="" aria-hidden="true">
            <ul>
              <button value="fulltime" className="jobtype">
                <div className="label">"Full-time"</div>
              </button>
            </ul>
          </div> */}
          <div className="input-block">
            <label for="jobtype" className="label">
              Job type *
            </label>
            <div className="jobtype-class">
              <button type="button" className="jobtype-button button-menu1">
                <span className="icons-class"></span>
              </button>
              <button type="button" className="jobtype-button button-menu2">
                <span className="material-symbols-outlined">expand_more</span>
              </button>
              <div className="jobtype-list">
                <button type="button" className="button-list">
                  <span>"Full-time"</span>
                </button>
                <button type="button" className="button-list">
                  <span>"Part-time"</span>
                </button>
              </div>
            </div>
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
