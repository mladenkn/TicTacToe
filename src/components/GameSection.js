import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const LeftSection = styled.div`
  font-size: 2.2em;
`;

const Root = styled.div`
  display: flex;  
`;

const RightSection = styled.div`
  margin-left: 2em;
`;

const Results = styled.div`

`;

const Result = styled(Typography)`
  && {
    font-size: 0.8em;
    margin-bottom: 0.5em;
  }
`;

const NextPlayer = styled(Typography)`
  && {
    font-size: 0.8em;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
`;

const GameSection = ({matrix, resultHistory, onCellClick, nextPlayer}) => (
  <Root>
    <LeftSection>
      <Board onCellClick={onCellClick} matrix={matrix} />
    </LeftSection>
    <RightSection>
      <Results>
        <Result>X wins: {resultHistory.xWins}</Result>
        <Result>O wins: {resultHistory.oWins}</Result>
        <Result>Draws: {resultHistory.draws}</Result>
        <NextPlayer>Next player: {nextPlayer}</NextPlayer>
      </Results>
    </RightSection>
  </Root>
);

GameSection.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  resultHistory: PropTypes.shape({
    xWins: PropTypes.number,
    oWins: PropTypes.number,
    draws: PropTypes.number,
  }),
  onCellClick: PropTypes.func,
  nextPlayer: PropTypes.string,
}

export default GameSection;