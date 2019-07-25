import React, { useState, Fragment } from 'react';
import Board from './Board';
import styled from 'styled-components';
import { cellContent } from '../redux/modules/ticTacToe';
import { Button, Dialog } from '@material-ui/core';
import GameSetupMenu from './GameSetupMenu'
import GameSection from './GameSection';

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.empty, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.empty, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
];

const AnyPageRoot = styled.div`
  padding: 30px;
`;

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

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('setup');
 
  const setupPage = (
    <SetuPageRoot>      
      <BoardContainer>
        <Board matrix={decorativeBoardMatrix} isDecorative />
      </BoardContainer>
      <Menu>
        <Button color='primary' variant='contained' onClick={() => setDialogOpen(true)}>Play now</Button>
      </Menu>
      <Dialog open={dialogOpen}>
        <GameSetupMenu onAccept={() => setCurrentPage('game')} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
  );

  switch(currentPage){
    case 'setup':
      return <AnyPageRoot>{setupPage}</AnyPageRoot>
    case 'game':
      return <AnyPageRoot><GameSection /></AnyPageRoot>;
  }
}

export default App;