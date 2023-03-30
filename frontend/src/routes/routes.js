import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GetJobs from "../components/GetJobs/GetJobs";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={GetJobs} />
      </Switch>
    </BrowserRouter>
  );
}
