import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignInSide from "./Pages/SignIn";
import SetupBudgetPage from "./Pages/setup-budget";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={(props) => <SignInSide {...props}/>} />
      <Route path="/logout" exact={true} component={(props) => <SignInSide {...props} />} />
      <Route path="/set-budget" exact={true} component={(props) => <SetupBudgetPage {...props} />} />
    </Switch>
  );
};

export default AppRouter;
