import React from "react";
//import api from "../../services/api";

export default function ShowJobs(props) {
  function deleteClick(event) {
    event.preventDefault();
    props.onDelete(props.id);
  }

  function deleteJobs(event) {
    event.preventDefault();
    console.log("entra aqui?");
    props.onDeleteAll();
  }

  return (
    <>
      <div>
        <h3>Job</h3>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <form>
          <button onClick={deleteClick}>Remove Job</button>
        </form>
      </div>

      <span>
        <form>
          <button onClick={deleteJobs}>Remove all Jobs</button>
        </form>
      </span>
    </>
  );
}
