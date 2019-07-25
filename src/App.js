import React, { useState, Fragment } from 'react';
import Board from './Board';
import styled from 'styled-components';
import { cellContent } from './redux/modules/ticTacToe';
import { Button, Dialog } from '@material-ui/core';
import GameSetupMenu from './GameSetupMenu'

const decorativeBoardMatrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.empty, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.empty, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
]

const AnyPageRoot = styled.div`
  padding: 30px;
`

const SetuPageRoot = styled.div`
  display: flex;
  display: flex;
`

const BoardContainer = styled.div`
  font-size: 2.2em;
`

const Menu = styled.div`
  margin-left: 2em;
`

const GamePageRoot = styled.div`

`

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('setup');
 
  const setupPage = (
    <SetuPageRoot>      
      <BoardContainer>
        <Board matrix={decorativeBoardMatrix} isDecorative />
      </BoardContainer>
      <Menu>
        <Button color='primary' onClick={() => setDialogOpen(true)}>Play now</Button>
      </Menu>
      <Dialog open={dialogOpen}>
        <GameSetupMenu onAccept={() => setCurrentPage('game')} onCancel={() => setDialogOpen(false)} />
      </Dialog>
    </SetuPageRoot>
  );

  const gamePage = (
    <GamePageRoot>
      <BoardContainer>
        <Board matrix={decorativeBoardMatrix} />
      </BoardContainer>
    </GamePageRoot>
  );

  switch(currentPage){
    case 'setup':
      return <AnyPageRoot>{setupPage}</AnyPageRoot>
    case 'game':
      return <AnyPageRoot>{gamePage}</AnyPageRoot>;
  }
}

export default App;