import React from 'react';
import styled from 'styled-components';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';

const StyledHomeSection = styled(HomeSection)`
  padding: 30px;
  font-size: 2em;
`;

const App = () => (
  <Router>
      <Route 
        path="/" 
        exact 
        component={({ history }) => (
          <StyledHomeSection navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)} />
        )} 
      />
      <Route path="/play/:gameSize" component={GamePage} />
  </Router>
)

export default App;