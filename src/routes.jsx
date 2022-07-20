import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={(props) => <Home {...props}/>} />
      <Route path="/logout" exact={true} component={(props) => <Home {...props} />} />
    </Switch>
  );
};

export default AppRouter;
