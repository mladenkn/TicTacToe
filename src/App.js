import React from 'react';
import Board from './Board';

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


const makeStyle = () => ({
    root: {
        padding: 20
    }
})

const App = () => {

    const style = makeStyle();

    return (
        <div style={style.root}>
            <Board matrix={matrix} />
        </div>
    )
}

export default App;
