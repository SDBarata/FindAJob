import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import FindJobs from "./pages/FindJobs";
import AddJob from "./components/AddJob/AddJob";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<FindJobs />} />
        <Route path="/addjob" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}
