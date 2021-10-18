import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dog from "./Dog";
import Dogs from "./Dogs";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs/:name">
        <Dog dogs={dogs} />
      </Route>
      <Route exact path="/dogs">
        <Dogs dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
