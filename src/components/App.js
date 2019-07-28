import React from 'react';
import styled from 'styled-components';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';

const HomeRoot = styled.div`
  padding: 30px;
`;

const App = () => (
  <Router>
      <Route 
        path="/" 
        exact 
        component={({ history }) => (
          <HomeRoot>
            <HomeSection navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)} />
          </HomeRoot>          
        )} 
      />
      <Route path="/play/:gameSize" component={GamePage} />
  </Router>
)

export default App;