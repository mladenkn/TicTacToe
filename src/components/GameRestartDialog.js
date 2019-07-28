import PropTypes from 'prop-types';
import GameSetupDialog from './GameSetupDialog';
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { roundOutcomes } from '../ticTacToeConstants';
import styled from 'styled-components';

const Actions = styled.div`
  margin-top: 0.2em;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
 && {
  min-width: auto;
 }
`

const GameRestartDialog = ({outCome, onAccept, onCancel, className}) => {
  
  let message;
  if(outCome === roundOutcomes.xWin)
    message = 'Player X has won!';
  else if(outCome === roundOutcomes.oWin)
    message = 'Player O has won!';
  else
    message = 'Draw!';

  const [stage, setStage] = useState(1);

  if (stage === 1)
    return (
      <div className={className}>
        <Typography gutterBottom align='center' variant='h6'>{message}</Typography>
        <Typography>Do you want to play again?</Typography>        
        <Actions>
          <StyledButton onCancel={onCancel} color='secondary'>No</StyledButton>
          <StyledButton onClick={() => setStage(2)} color='primary'>Yes</StyledButton>
        </Actions>
      </div>
    );

  else 
    return <div className={className}><GameSetupDialog onAccept={onAccept} onCancel={onCancel} /></div>
};

GameRestartDialog.propTypes = {
  outCome: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
};

export default GameRestartDialog;