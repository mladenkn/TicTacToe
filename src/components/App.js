import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';

const StyledHomeSection = styled(HomeSection)`
  padding: 30px;
  font-size: 2em;
`;

const GlobalStyle = createGlobalStyle`
  & .GameSetupDialog {
    font-size: 1.3em;
  }
`;

const App = () => (
  <Router>
      <Route 
        path="/" 
        exact 
        component={({ history }) => (
          <Fragment>
            <GlobalStyle />
            <StyledHomeSection navigateToGame={({ gameSize }) => history.push(`/play/${gameSize}`)} />
          </Fragment>
        )} 
      />
      <Route path="/play/:gameSize" component={GamePage} />
  </Router>
)

export default App;