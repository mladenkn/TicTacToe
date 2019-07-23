import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;    
`

const TableCell = styled.td`
    border: 0.056em solid;
    text-align: center;
    font-size: 1em;
    font-weight: lighter;
    width: 1.2em;
    height: 1.2em;
`

export const Board = ({matrix}) => (
    <Table>
        <tbody>
            {matrix.map((row, rowID) => (
                <tr key={rowID}>
                    {row.map((content, cellID) => (
                        <TableCell key={`${rowID}.${cellID}`}>{content}</TableCell>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
)
 
Board.propTypes = {
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default Board;