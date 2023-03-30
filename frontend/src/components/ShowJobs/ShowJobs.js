import React from "react";
//import api from "../../services/api";

export default function ShowJobs(props) {
  function deleteClick(event) {
    event.preventDefault();
    props.onDelete(props.id);
  }

  return (
    <div>
      <h3>Job</h3>
      <li>{props.title}</li>
      <li>{props.description}</li>
      <form>
        <button onClick={deleteClick}>Remove Job</button>
      </form>
    </div>
  );
}
