import React from 'react'
import styled from 'styled-components';
import { Button, Slider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DialogContent = styled.div`
  padding: 1.1em;
  width: 14.6em;
`;

const GameSizePickRow = styled.div`
  width: 12em;
`;

const GameSizeHeading = styled(Typography)`

;`

const GameSizeInput = styled(Slider)`
  margin-top: 2.5em;
`;

const StyledCancelButton = styled(Button)`
`;

const StyledOKButton = styled(Button)`
  float: right;
`;

const DialogActions = styled.div`
  margin-top: 0.2em;
  width: 12em;
`

const GameSetupMenu = ({onAccept, onCancel}) => {

  const [gameSize, setGameSize] = useState(3)

  return (
    <DialogContent>
      <GameSizePickRow>
        <GameSizeHeading gutterBottom variant='h6'>Pick Game Size:</GameSizeHeading>
        <GameSizeInput 
          valueLabelDisplay="on" 
          onChangeCommitted={(_, v) => setGameSize(v)} 
          min={2} 
          max={7} 
          step={1} 
        />
      </GameSizePickRow>
      <DialogActions>
        <StyledCancelButton onClick={onCancel} variant='contained' color='secondary'>Cancel</StyledCancelButton>
        <StyledOKButton onClick={() => onAccept({gameSize})} variant='contained' color='primary'>OK</StyledOKButton>
      </DialogActions>
    </DialogContent>
  );
};

GameSetupMenu.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default GameSetupMenu;