import React from "react";
//import api from "../../services/api";

export default function ShowJobs(props) {
  return (
    <span>
      <h3>Title</h3>
      {props.title}
      <h3>Description</h3>
      {props.description}
    </span>
  );
}

/* <form>
        <button onClick={getAllJobs}>Get available jobs!</button>
      </form> */
