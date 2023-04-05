import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GetJobs from "./components/GetJobs/GetJobs";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<GetJobs />} />
      </Routes>
    </BrowserRouter>
  );
}
