import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <div>
        <Link to="/jobs">Find a Job</Link>
        <br />
        <span>
          <Link to="/addjob">Add a Job</Link>
        </span>
      </div>
    </>
  );
}
