import React, { useEffect } from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { newRound } from '../redux-modules/gameRounds';
import ControllableGameSection from './ControllableGameSection';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '../utils/components';
import { homeUrl } from '../urls';
import { withGameLogic } from '../redux-connectors/useGameLogic';
import { useState } from 'react';
import { isNil } from 'ramda';

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

const useGameInitLogic = ({gameSize, firstPlayer}) => {  
  const dispatch = useDispatch();
  const inited = useSelector(s => !isNil(s.gameRounds.current));  
  const init = () => dispatch(newRound(gameSize, firstPlayer)); 
  return { inited, init };
}

const ConnectedGameSection = withGameLogic(GameSection);

const GamePage = ({match, history}) => {  
  const gameSectionVariant = useMediaQuery('(max-width: 576px)') && gameSize > 2 ? 'small' : 'medium';

  const gameSize = parseInt(match.params.gameSize);
  const firstPlayer = match.params.firstPlayer.toUpperCase();
  const initLogic = useGameInitLogic({gameSize, firstPlayer});
  useEffect(() => { initLogic.init() });

  return ( 
    initLogic.inited &&
    <Root>
      <GlobalStyle />
      <BackLink underline='none' to={homeUrl}>
        <ArrowBackIcon />
        <BackLinkText>Back to Home</BackLinkText>
      </BackLink>
      <ConnectedGameSection 
        width={gameSectionVariant} 
        onRestart={({ gameSize, firstPlayer }) => history.push(`/play/${gameSize}/${firstPlayer}`)}
      />
    </Root>
  );
}

export default GamePage;