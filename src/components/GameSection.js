import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const BoardContainer = styled.div`
  font-size: 2.2em;
  display: flex;
  justify-content: ${p => p.variant === 'row' ? 'initial' : 'center'};
`;

const Root = styled.div`
  display: flex;
  flex-direction: ${p => p.variant === 'row' ? 'row' : 'column'};
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.variant === 'row' ? '2em' : '0'};
  margin-top: ${p => p.variant === 'row' ? '0' : '1em'};
  align-items: ${p => p.variant === 'row' ? 'initial' : 'center'};
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

const GameSection = ({className, matrix, resultHistory, onCellClick, nextPlayer, variant}) => (
  <Root className={className} variant={variant}>
    <BoardContainer>
      <Board onCellClick={onCellClick} matrix={matrix} />
    </BoardContainer>
    <StatsContainer variant={variant}>
      <Result>X wins: {resultHistory.xWinCount}</Result>
      <Result>O wins: {resultHistory.oWinCount}</Result>
      <Result>Draws: {resultHistory.matrixFullCount}</Result>
      <NextPlayer>Next player: {nextPlayer}</NextPlayer>
    </StatsContainer>
  </Root>
);

GameSection.propTypes = {
  className: PropTypes.string,
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  resultHistory: PropTypes.shape({
    xWins: PropTypes.number,
    oWins: PropTypes.number,
    matrixFullCount: PropTypes.number,
  }).isRequired,
  onCellClick: PropTypes.func,
  nextPlayer: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['row', 'col']),
}

export default GameSection;