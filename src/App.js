import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history"
import "./assets/css/main.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/AddTransaction";
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
