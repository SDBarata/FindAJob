import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="web-title">
          <a href="/">
            <h1> Find a Job! </h1>
          </a>
        </div>
        <nav className="nav-links">
          <div>
            <a href="/jobs" className="link1">
              Find a Job
            </a>
          </div>
          <div>
            <a href="/addjob" className="link2">
              Add a Job
            </a>
          </div>
          <div>
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
