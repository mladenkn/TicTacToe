import PropTypes from 'prop-types';
import GameSetupDialog from './GameSetupDialog';
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { roundStatus } from '../ticTacToeConstants';
import styled from 'styled-components';
import { Fragment } from 'react';

const Actions = styled.div`
  margin-top: 0.3em;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
 && {
  min-width: auto;
 }
`;

const Stage1Root = styled.div`
 padding: 0.5em 0.7em 0.1em;
`

const GameRestartDialog = ({status, onAccept, onCancel}) => {
  
  let message;
  if(status === roundStatus.xWin)
    message = 'Player X has won!';
  else if(status === roundStatus.oWin)
    message = 'Player O has won!';
  else
    message = 'Draw!';

  const [stage, setStage] = useState(1);

  return (
    <Fragment>
      {stage === 1  && (
        <Stage1Root>
          <Typography gutterBottom align='center' variant='h6'>{message}</Typography>
          <Typography>Do you want to play again?</Typography>        
          <Actions>
            <StyledButton onCancel={onCancel} color='secondary'>No</StyledButton>
            <StyledButton onClick={() => setStage(2)} color='primary'>Yes</StyledButton>
          </Actions>
        </Stage1Root>
      )}
      {stage === 2  && <GameSetupDialog onAccept={onAccept} onCancel={onCancel} /> }
    </Fragment>
  )
};

GameRestartDialog.propTypes = {
  status: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
};

export default GameRestartDialog;