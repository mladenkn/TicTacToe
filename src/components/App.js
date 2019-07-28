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
        path="/" 
        exact 
        component={({ history }) => 
          <HomeSection navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)} />
        } 
      />
      <Route 
        path="/play/:gameSize" 
        component={({ match, history }) => 
          <ControllableGameSection gameSize={parseInt(match.params.gameSize)} onGoBack={history.goBack} />
        } 
      />
    </Root>
  </Router>
)

export default App;