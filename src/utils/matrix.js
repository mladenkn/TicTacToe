import { update, range } from "ramda";

export const createMatrix = (width, height, value) => {
  const r = [];
  for (let curIndex = 0;  curIndex < height;  curIndex++)
    r.push(Array(width).fill(value));
  return r;
}

export const getMatrixCollumns = (matrix) => {
  const lastColIndex = matrix[0].length;
  const rowsCount = matrix.length;
  const r = [];
  for (let curColIndex = 0;  curColIndex < lastColIndex;  curColIndex++) {    
    const column = range(0, rowsCount).map(rowIndex => matrix[rowIndex][curColIndex]);
    r.push(column);
  }
  return r;
}

// diagonals start from left
export const getMatrixDiagonals = (matrix) => {
  const diag1 = range(0, matrix.length).map(i => matrix[i][i])
  let diag2 = [];
  for (let rowIndex = matrix.length-1, colIndex = 0;  colIndex < matrix.length;  rowIndex--, colIndex++)
    diag2.push(matrix[rowIndex][colIndex])
  return [diag1, diag2]
}

export const updateMatrixCell = (matrix, pos, value) =>
  matrix.map((row, index) => {
    if (index === pos.x)
      return update(pos.y, value, row);
    else
      return row;
  })

export const filterMatrixCells = (matrix, filter) => {
  const r = [];
  for (let curRowIndex = 0; curRowIndex < matrix.length; curRowIndex++) {
    const row = matrix[curRowIndex];
    for (let curColIndex = 0; curColIndex < row.length; curColIndex++) {
      const value = row[curColIndex];
      const cell = {row: curRowIndex, col: curColIndex, value};
      if(filter(cell))
        r.push(cell)      
    }
  }
  return r;
}