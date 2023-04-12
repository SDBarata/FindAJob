import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h1>Find your Job!</h1>
      <Link to="/jobs">Find a Job</Link>
      <Link to="/addjob">Add a Job</Link>
    </div>
  );
}
