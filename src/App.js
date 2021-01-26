import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history"
import "./App.css";
import Container from "react-bootstrap/Container"
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/Dashboard/AddTransaction";

const App = () => {
  return (
    <Router history={ history }>
      <Container>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/add-transaction">
          <AddTransaction />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
