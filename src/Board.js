import React from 'react'
import PropTypes from 'prop-types'

const makeStyle = () => ({
    root: {
        borderColapse: 'collapse',
    },
    cell: {
        border: '1px solid'
    }
})

export const Board = ({matrix}) => {

    const style = makeStyle();
 
    return (
        <table style={style.root}>
            {matrix.map(row =>(
                <tr>
                    {row.map(c => (
                        <td style={style.cell}>{c}</td>       
                    ))}
                </tr>
            ))}
        </table>
    )
}

Board.propTypes = {
    
}

export default Board;