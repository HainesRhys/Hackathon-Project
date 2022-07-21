import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignInSide from "./pages/SignIn";
import SetupBudgetPage from "./pages/setup-budget";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<SignInSide/>} />
      <Route path="/logout" exact={true} element={<SignInSide />} />
      <Route path="/home" exact={true} element={<Home />} />
      
      <Route path="/set-budget" exact={true} element={ <SetupBudgetPage />} />
    </Routes>
  );
};

export default AppRouter;
