import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ManageJobs from "./components/ManageJobs/ManageJobs";
import AddJob from "./components/AddJob/AddJob";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<ManageJobs />} />
        <Route path="/addjob" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}
