import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <a href="/">
            <h1> Find a Job! </h1>
          </a>
        </div>
        <nav className="nav-links">
          <div className="link1">
            <a href="/jobs" className="link1">
              Find a Job
            </a>
          </div>
          <div className="link2">
            <a href="/addjob" className="link2">
              Add a Job
            </a>
          </div>
          <div className="link3">
            <a href="/">Log in</a>
          </div>
          <div className="signup">
            <a href="/">Sign up</a>
          </div>
        </nav>
      </header>
    </>
  );
}
