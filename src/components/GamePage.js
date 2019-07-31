import React, { useEffect, Fragment } from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ControllableGameSection from './ControllableGameSection';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '../utils/components';
import { homeUrl } from '../urls';
import { withGameWithAILogic } from '../redux-connectors/useGameWithAILogic';
import useGameInitLogic from '../redux-connectors/useGameInitLogic';

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
 
const ConnectedGameSection = withGameWithAILogic('gameLogic')(GameSection);

const GameSectionContainer = ({gameSize, userPlayer}) => {
  const initLogic = useGameInitLogic();
  useEffect(() => { initLogic.init({gameSize, userPlayer}) }, []);
  const width = useMediaQuery('(max-width: 576px)') && gameSize > 2 ? 'small' : 'medium';
  return initLogic.inited ?
    <ConnectedGameSection width={width} onRestart={initLogic.init}/> :
    <Fragment />
}

const GamePage = ({match}) => {  
  const gameSize = parseInt(match.params.gameSize);
  const userPlayer = match.params.userPlayer.toUpperCase();
  return ( 
    <Root>
      <GlobalStyle />
      <BackLink underline='none' to={homeUrl}>
        <ArrowBackIcon />
        <BackLinkText>Back to Home</BackLinkText>
      </BackLink>
      <GameSectionContainer gameSize={gameSize} userPlayer={userPlayer} />
    </Root>
  );
}

export default GamePage;