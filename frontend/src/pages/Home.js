import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Find your Job!</h1>
      <Link to="/jobs">See available jobs!</Link>
    </div>
  );
}
