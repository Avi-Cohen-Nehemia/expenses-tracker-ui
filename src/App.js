import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history"
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/Dashboard/AddTransaction";

const App = () => {
  return (
    <Router history={ history }>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/add-transaction">
          <AddTransaction />
        </Route>
    </Router>
  );
}

export default App;
