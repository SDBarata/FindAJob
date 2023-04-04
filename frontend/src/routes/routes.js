import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GetJobs from "../components/GetJobs/GetJobs";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jobs" element={<GetJobs />} />
      </Routes>
    </BrowserRouter>
  );
}
