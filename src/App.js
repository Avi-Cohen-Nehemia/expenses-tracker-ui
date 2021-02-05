import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history"
import "./assets/css/landing-page.css";
import "./assets/css/navbar.css";
import "./assets/css/dashboard.css";
import "./assets/css/spinner.css";
import "./assets/css/compare-card.css";
import "./assets/css/misc.css";
import "./assets/css/add-transaction.css";
import "./assets/css/profile.css";
import "./assets/css/transaction-list.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/Dashboard/AddTransaction";
import Profile from './components/Profile';

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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/add-transaction">
          <AddTransaction />
        </Route>
    </Router>
  );
}

export default App;
