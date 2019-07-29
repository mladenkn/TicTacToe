import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { Fab, Dialog } from '@material-ui/core';
import GameSetupDialog from './GameSetupDialog'
import { cellContent } from '../ticTacToeConstants';

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.empty, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.empty, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
];

const SetuPageRoot = styled.div`
  display: flex;
`;

const Menu = styled.div`
  margin-left: 2em;
`;

const StyledBoard = styled(Board)`
  font-size: 2.4em;
`;

const PlayNowButton = styled(Fab)`
  && {
    font-size: 1em;
    height: 1.8em;
  }
`

const HomeSection = ({navigateToGame, className}) => {  
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <SetuPageRoot className={className}>
      <StyledBoard matrix={decorativeBoardMatrix} />
      <Menu>
        <PlayNowButton variant="extended" onClick={() => setDialogOpen(true)} color="primary">
          Play now
        </PlayNowButton>
      </Menu>
      <Dialog open={dialogOpen}>
        <GameSetupDialog onAccept={navigateToGame} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
  );
}

export default HomeSection;