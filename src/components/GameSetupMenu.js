import React from 'react'
import styled from 'styled-components';
import { Button,  Input, Typography, DialogContent, DialogActions } from '@material-ui/core';
import PropTypes from 'prop-types';

const StyledDialogContent = styled(DialogContent)`
`;

const StyledInput = styled(Input)`
  width: 2.5em;
  margin-left: 1em;
`;

const GameSizePickRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledCancelButton = styled(Button)`
  margin-left: 2em;
`;

const StyledOKButton = styled(Button)`
  margin-left: 2em;
`;

const GameSetupMenu = ({onAccept, onCancel}) => (
    <StyledDialogContent>
      <GameSizePickRow>
        <Typography>Input Game Size:</Typography>
        <StyledInput disableUnderline value={3} type='number' />
      </GameSizePickRow>
      <DialogActions>
        <StyledCancelButton onClick={() => onCancel()} variant='contained' color='primary'>Cancel</StyledCancelButton>
        <StyledOKButton  onClick={() => onAccept()} variant='contained' color='secondary'>OK</StyledOKButton>
      </DialogActions>
    </StyledDialogContent>
);

GameSetupMenu.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default GameSetupMenu;