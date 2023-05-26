import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1> Find a Job! </h1>
        </a>
        <nav className="nav-links">
          <span className="link1">
            <a href="/jobs" className="link1">
              Find a Job
            </a>
          </span>
          <span className="link2">
            <a href="/addjob" className="link2">
              Add a Job
            </a>
          </span>
        </nav>
      </header>
    </>
  );
}
