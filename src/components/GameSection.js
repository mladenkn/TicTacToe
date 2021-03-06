import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const BoardContainer = styled.div`
  font-size: 2.2em;
  display: flex;
  justify-content: ${p => p.width === 'medium' ? 'initial' : 'center'};
`;

const Root = styled.div`
  display: flex;
  flex-direction: ${p => p.width === 'medium' ? 'small' : 'column'};
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.width === 'medium' ? '2em' : '0'};
  margin-top: ${p => p.width === 'medium' ? '0' : '1em'};
  align-items: ${p => p.width === 'medium' ? 'initial' : 'center'};
`;

const Result = styled(Typography)`
  && {
    font-size: 0.8em;
    margin-bottom: 0.5em;
  }
`;

const GameSection = ({className, matrix, resultHistory, onCellClick, width}) => (
  <Root className={className} width={width}>
    <BoardContainer>
      <Board onCellClick={onCellClick} matrix={matrix} />
    </BoardContainer>
    <StatsContainer width={width}>
      <Result>X wins: {resultHistory.xWinCount}</Result>
      <Result>O wins: {resultHistory.oWinCount}</Result>
      <Result>Draws: {resultHistory.matrixFullCount}</Result>
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
  width: PropTypes.oneOf(['small', 'medium']),
}

export default GameSection;