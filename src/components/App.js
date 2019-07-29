import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/play/:gameSize" component={GamePage} />
    </div>
  </Router>
)

export default App;