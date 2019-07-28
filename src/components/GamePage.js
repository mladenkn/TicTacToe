import React from 'react';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';
import { newRound } from '../redux/modules/gameRounds';
import { players } from '../ticTacToeConstants';
import ControllableGameSection from './ControllableGameSection';
import styled from 'styled-components';
import { Link } from '../utils/components';
import { homeUrl } from '../urls';

const Root = styled.div`
  padding: 30px;
  font-size: 0.9em;
`;

const BackButton = styled(Link)`
  && {
    display: flex;
    padding: 0.5em;
    margin-right: 0.55em;
    margin-bottom: 0.5em;
    text-transform: none;
    height: 2.6em;
    align-items: center;
  }
`;

const BackButtonText = styled(Typography)`
  && {
    margin-left: 0.5em;
    font-size: 1.05em;
  }
`;

const GameSection = styled(ControllableGameSection)`
  margin-left: 2.5em;
`;

const GamePage = ({match, history}) => {
  const gameSize = parseInt(match.params.gameSize);
  useDispatch()(newRound(gameSize, players.x));
  return (
    <Root>
      <BackButton underline='none' to={homeUrl}>
        <ArrowBackIcon />
        <BackButtonText>Back to Home</BackButtonText>
      </BackButton>
      <GameSection onRestart={({ gameSize }) => history.push(`/play/${gameSize}`)} />
    </Root>
  );
}

export default GamePage;