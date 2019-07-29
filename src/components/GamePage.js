import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';
import { newRound } from '../redux/modules/gameRounds';
import { players } from '../ticTacToeConstants';
import ControllableGameSection from './ControllableGameSection';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '../utils/components';
import { homeUrl } from '../urls';

const Root = styled.div`
  @media(max-width: 576px) {
    padding: 0.5em;
  }
  @media(min-width: 576px) {
    padding: 1.5em;
  }
  font-size: 1.5em;
`;

const BackLink = styled(Link)`
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

const BackLinkText = styled(Typography)`
  && {
    margin-left: 0.7em;
    font-size: 0.8em;
  }
`;

const GameSection = styled(ControllableGameSection)`
  @media(min-width: 576px) {
    margin-left: 2em;
  }
`;

const GlobalStyle = createGlobalStyle`
  & .GameRestartDialog {
    font-size: 1.15em;
  }
`;

const GamePage = ({match, history}) => {
  const gameSize = parseInt(match.params.gameSize);
  useDispatch()(newRound(gameSize, players.x));
  const gameSectionVariant = useMediaQuery('(max-width: 576px)') && gameSize > 2 ? 'col' : 'row';
  return (
    <Root>
      <GlobalStyle />
      <BackLink underline='none' to={homeUrl}>
        <ArrowBackIcon />
        <BackLinkText>Back to Home</BackLinkText>
      </BackLink>
      <GameSection variant={gameSectionVariant} onRestart={({ gameSize }) => history.push(`/play/${gameSize}`)} />
    </Root>
  );
}

export default GamePage;