export const createMatrix = (width, height, value) => {
  const r = [];
  for (let curIndex = 0;  curIndex < height;  curIndex++)
    r.push(Array(width).fill(value));
  return r;
}
 
export const allElementsAreEqual = (array) => array.every(e => e === array[0])

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

export const range = (lowerBound, upperBound) => {
  const r = [];
  for (let i = lowerBound;  i < upperBound;  i++)
    r.push(i);
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