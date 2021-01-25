import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container"
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
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
      </Container>
    </Router>
  );
}

export default App;
