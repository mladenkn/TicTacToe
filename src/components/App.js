import React from 'react';
import styled from 'styled-components';
import ControllableGameSection from './ControllableGameSection';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Route } from "react-router-dom";


const Root = styled.div`
  padding: 30px;
`;

const App = () => (
  <Router>
    <Root>
      <Route 
        path="/play/:gameSize" 
        component={({ match }) => 
          <ControllableGameSection gameSize={parseInt(match.params.gameSize)} />
        } 
      />
      <Route 
        path="/" 
        exact 
        component={({ history }) => 
          <HomeSection navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)} />
        } 
      />
    </Root>
  </Router>
)

export default App;