import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container'
import Signup from './components/Signup';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
