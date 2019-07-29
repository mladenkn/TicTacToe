import PropTypes from 'prop-types';
import GameSetupDialog from './GameSetupDialog';
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { roundStatus } from '../ticTacToeConstants';
import styled from 'styled-components';

const Heading = styled(Typography)`
  && {
    font-size: 1.15em;
    text-align: center;
    margin-bottom: 0.5em;
  }
`

const Message = styled(Typography)`
  && {
    font-size: 1em;
  }
`

const Actions = styled.div`
  margin-top: 0.35em;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
 && {
  font-size: 0.85em;
  min-width: auto;
 }
`;

const Stage1Root = styled.div`
 padding: 0.5em 0.7em 0.1em;
`

const GameRestartDialog = ({status, onAccept, onCancel, className}) => {
  
  let message;
  if(status === roundStatus.xWin)
    message = 'Player X has won!';
  else if(status === roundStatus.oWin)
    message = 'Player O has won!';
  else
    message = 'Draw!';

  const [stage, setStage] = useState(1);

  return (
    <div className={'GameRestartDialog ' + className}>
      {stage === 1  && (
        <Stage1Root>
          <Heading>{message}</Heading>
          <Message>Do you want to play again?</Message>        
          <Actions>
            <StyledButton onClick={onCancel} color='secondary'>No</StyledButton>
            <StyledButton onClick={() => setStage(2)} color='primary'>Yes</StyledButton>
          </Actions>
        </Stage1Root>
      )}
      {stage === 2  && <GameSetupDialog onAccept={onAccept} onCancel={onCancel} /> }
    </div>
  )
};

GameRestartDialog.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default GameRestartDialog;