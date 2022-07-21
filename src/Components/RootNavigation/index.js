import React from "react";
import { Route, Switch, Router } from "react-router";
import SignInSide from "../../Pages/SignIn.js";
import SetupBudgetPage from "../../Pages/setup-budget.jsx";
import ResultsPage from "../../Pages/ResultsPage/index.tsx";
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();

const RootNavigation = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={SignInSide} />
        <Route path="/logout" component={SignInSide} />
        <Route exact path="/set-budget" component={SetupBudgetPage} />
        <Route exact path="/Results" component={ResultsPage} />
      </Switch>
    </Router>
  );
};

export default RootNavigation;
