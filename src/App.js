import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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
import "./assets/css/four-oh-four.css";
import "./assets/css/pie-chart.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/Dashboard/AddTransaction";
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import FourOhFour from "./components/FourOhFour";

const App = () => {
  return (
    <Router history={ history }>
        <Switch>
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
            <ProtectedRoute Component={ Dashboard } />
          </Route>
          <Route exact path="/profile">
            <ProtectedRoute Component={ Profile } />
          </Route>
          <Route exact path="/add-transaction">
            <ProtectedRoute Component={ AddTransaction } />
          </Route>
          <FourOhFour />
        </Switch>
    </Router>
  );
}

export default App;
