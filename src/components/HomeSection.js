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
  display: flex;
`;

const Menu = styled.div`
  margin-left: 2em;
`;

const BoardContainer = styled.div`
  font-size: 2.2em;
`;

const HomeSection = ({navigateToGame}) => {  
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <SetuPageRoot>
      <BoardContainer>
        <Board matrix={decorativeBoardMatrix} isDecorative />
      </BoardContainer>
      <Menu>
        <Fab variant="extended" onClick={() => setDialogOpen(true)} color="primary">Play now</Fab>
      </Menu>
      <Dialog open={dialogOpen}>
        <GameSetupDialog onAccept={navigateToGame} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
  );
}

export default HomeSection;