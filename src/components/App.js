import React from 'react';
import styled from 'styled-components';
import ControllableGameSection from './ControllableGameSection';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { newRound } from '../redux/modules/ticTacToeRounds';
import { players } from '../ticTacToeConstants';

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
      <Route path="/play/:gameSize" component={GamePage} />
    </Root>
  </Router>
)

const GamePage = ({match, history}) => {
  const gameSize = parseInt(match.params.gameSize);
  useDispatch()(newRound(gameSize, players.x));
  return (
    <ControllableGameSection 
      onRestart={({ gameSize }) => history.push(`/play/${gameSize}`)}
      onGoBack={history.goBack} 
    />
  );
}

export default App;