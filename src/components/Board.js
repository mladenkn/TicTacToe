import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;    
`;

const TableCell = styled.td`
  border: 0.04em solid black;
  text-align: center;
  font-size: 1em;
  font-weight: lighter;
  width: 1.2em;
  height: 1.45em;
  color: ${ ({children}) => children === 'X' ? '#c51162' : '#303f9f' }
`;

export const Board = ({matrix, onCellClick, className}) => (
  <Table className={className}>
    <tbody>
      {matrix.map((row, rowID) => (
        <tr key={rowID}>
          {row.map((content, collumnID) => (
            <TableCell 
              onClick={() => onCellClick && onCellClick({row: rowID, col: collumnID})} 
              key={`${row}.${collumnID}`}
            >
              {content}
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

Board.propTypes = {
  className: PropTypes.string,
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClick: PropTypes.func,
}

export default Board;