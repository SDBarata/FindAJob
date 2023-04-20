import React from "react";
import { Link } from "react-router-dom";
//import api from "../../services/api";

export default function ShowJobs(props) {
  function deleteClick(event) {
    event.preventDefault();
    props.onDelete(props.id);
  }

  function deleteJobs(event) {
    event.preventDefault();
    props.onDeleteAll();
  }

  return (
    <>
      <span>
        <form>
          <button onClick={deleteJobs}>Remove all Jobs</button>
        </form>
      </span>
      <div>
        <h3>Job</h3>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <form>
          <button onClick={deleteClick}>Remove Job</button>
        </form>
      </div>
    </>
  );
}
