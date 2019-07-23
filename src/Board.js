import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = styled.table`
    borderColapse: collapse;    
`

const TableCell = styled.td`
    border: 1px solid
`

export const Board = ({matrix}) => (
    <Table>
        {matrix.map(row => (
            <tr>
                {row.map(c => <TableCell>{c}</TableCell>)}
            </tr>
        ))}
    </Table>
)

Board.propTypes = {
    
}

export default Board;