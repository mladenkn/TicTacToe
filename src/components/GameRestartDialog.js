import PropTypes from 'prop-types';
import GameSetupDialog from './GameSetupDialog';
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';

const GameRestartDialog = ({outCome, onAccept, onCancel}) => {
  
  let message;
  if(outCome === 'x win')
    message = 'Player X has won!';
  else if(outCome === 'o win')
    message = 'Player O has won!';
  else
    message = 'Draw!';

  const [stage, setStage] = useState(1);

  if (stage === 1)
    return (
      <div>
        <Typography>{message}</Typography>
        <Typography>Do you want to restart the game?</Typography>        
        <div>
          <Button color='secondary'>No</Button>
          <Button onClick={() => setStage(2)} color='primary'>Yes</Button>
        </div>
      </div>
    );

  else 
      return <GameSetupDialog onAccept={onAccept} onCancel={onCancel} />
};

GameRestartDialog.propTypes = {
  outCome: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
};

export default GameRestartDialog;