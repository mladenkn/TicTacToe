import React from 'react'
import styled from 'styled-components';
import { Button, Slider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Board from './Board';
import { createMatrix } from '../utils/matrix';
import { players } from '../ticTacToeConstants';

const GameSizePickRow = styled.div`
  width: 12em;
`;

const GameSizeHeading = styled(Typography)`
  && {
    font-size: 1.15em;
  }
;`

const GameSizeInput = styled(Slider)`
  margin-top: 2.5em;
`;

const StyledCancelButton = styled(Button)`
  && {
    font-size: 0.85em;
    min-width: auto;
  }
`;

const StyledOKButton = styled(Button)`
  && {
    font-size: 0.85em;
    min-width: auto;
  }
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.2em;
  width: 12em;
`;

const Root = styled.div`
  padding: 0.5em 1.2em 0.3em;
  overflow-x: hidden;
`;

const StyledBoard = styled(Board)`
  && {
    display: flex;
    justify-content: center;
    font-size: 1em;
    height: 9em;
    align-items: center;
  }
`;

const GameSizeText = styled(Typography)`
  && {
    text-align: center;
    font-size: 1.07em;
    margin-top: 1em;
  }
`;

const GameSetupDialog = ({onAccept, onCancel, className}) => {

  const [gameSize, setGameSize] = useState(3);
  const matrix = createMatrix(gameSize, gameSize, '');

  return (
    <Root className={'GameSetupDialog ' + className}>
      <GameSizePickRow>
        <GameSizeHeading gutterBottom width='h6'>Pick Game Size:</GameSizeHeading>
        <GameSizeInput 
          value={gameSize}
          valueLabelDisplay="on" 
          onChangeCommitted={(_, v) => setGameSize(v)} 
          min={2} 
          max={6} 
          step={1} 
        />
      </GameSizePickRow>
      <GameSizeText>{gameSize} x {gameSize}</GameSizeText>
      <StyledBoard matrix={matrix} />
      <ActionsRow>
        <StyledCancelButton onClick={onCancel} color='secondary'>Cancel</StyledCancelButton>
        <StyledOKButton onClick={() => onAccept({gameSize, userPlayer: players.x})} color='primary'>OK</StyledOKButton>
      </ActionsRow>
    </Root>
  );
};

GameSetupDialog.propTypes = {
  className: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default GameSetupDialog;