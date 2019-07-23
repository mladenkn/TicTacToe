import React from 'react';
import Board from './Board';
import styled from 'styled-components'

const celContent = {
    empty: '',
    X: 'X',
    O: 'O'
}

const matrix = [
    [celContent.X, celContent.O, celContent.empty, celContent.X],
    [celContent.X, celContent.X, celContent.O, celContent.empty],
    [celContent.O, celContent.empty, celContent.X, celContent.O],
    [celContent.empty, celContent.empty, celContent.X, celContent.O],
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
