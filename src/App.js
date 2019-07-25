import React from 'react';
import Board from './Board';
import styled from 'styled-components';
import { cellContent } from './redux/modules/ticTacToe';

const matrix = [
    [cellContent.x, cellContent.o, cellContent.empty, cellContent.x],
    [cellContent.x, cellContent.x, cellContent.o, cellContent.empty],
    [cellContent.o, cellContent.empty, cellContent.x, cellContent.o],
    [cellContent.empty, cellContent.empty, cellContent.x, cellContent.o],
]


const Root = styled.div`
    padding: 30px;
`

const BoardContainer = styled.div`
    font-size: 2.2em;
`

const App = () => (
    <Root>
      <BoardContainer>            
          <Board matrix={matrix} />
      </BoardContainer>
    </Root>
)

export default App;
