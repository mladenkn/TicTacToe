import React from 'react'
import styled from 'styled-components';
import { Button, Slider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const GameSizePickRow = styled.div`
  width: 12em;
`;

const GameSizeHeading = styled(Typography)`

;`

const GameSizeInput = styled(Slider)`
  margin-top: 2.5em;
`;

const StyledCancelButton = styled(Button)`
  && {
    min-width: auto;
  }
`;

const StyledOKButton = styled(Button)`
  && {
    min-width: auto;
  }
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.2em;
  width: 12em;
`

const GameSetupDialog = ({onAccept, onCancel, className}) => {

  const [gameSize, setGameSize] = useState(3)

  return (
    <div className={className}>
      <GameSizePickRow>
        <GameSizeHeading gutterBottom variant='h6'>Pick Game Size:</GameSizeHeading>
        <GameSizeInput 
          value={gameSize}
          valueLabelDisplay="on" 
          onChangeCommitted={(_, v) => setGameSize(v)} 
          min={2} 
          max={7} 
          step={1} 
        />
      </GameSizePickRow>
      <ActionsRow>
        <StyledCancelButton onClick={onCancel} color='secondary'>Cancel</StyledCancelButton>
        <StyledOKButton onClick={() => onAccept({gameSize})} color='primary'>OK</StyledOKButton>
      </ActionsRow>
    </div>
  );
};

GameSetupDialog.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default GameSetupDialog;