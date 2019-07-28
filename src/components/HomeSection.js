import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { Button, Dialog } from '@material-ui/core';
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

const StyledGameSetupDialog = styled(GameSetupDialog)`
  padding: 0.5em 0.5em 0;
`

const HomeSection = ({navigateToGame}) => {  
  const [dialogOpen, setDialogOpen] = useState(true);
  return (
    <SetuPageRoot>
      <BoardContainer>
        <Board matrix={decorativeBoardMatrix} isDecorative />
      </BoardContainer>
      <Menu>
        <Button color='primary' variant='contained' onClick={() => setDialogOpen(true)}>Play now</Button>
      </Menu>
      <Dialog open={dialogOpen}>
        <StyledGameSetupDialog onAccept={navigateToGame} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
    )
  ;
};

export default HomeSection;