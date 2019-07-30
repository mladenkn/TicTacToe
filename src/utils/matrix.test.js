import { createMatrix, getMatrixCollumns, getMatrixDiagonals, updateMatrixCell, filterMatrixCells } from "./matrix";

test('createNullMatrix', () => {
  const run = (width, height) => {
    const matrix = createMatrix(width, height, null);
    expect(matrix.length).toBe(height);
    expect(matrix[1].length).toBe(width);
  }
  run(3, 4);
  run(3, 3);
  run(5, 5);
})

describe('getMatrixCollumns', () => {

  test('', () => {
    const matrix = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ];
    const cols = getMatrixCollumns(matrix);
    expect(cols[0].every(e => e === 1)).toBe(true);
    expect(cols[1].every(e => e === 2)).toBe(true);
    expect(cols[2].every(e => e === 3)).toBe(true);
  });
})

test('getMatrixDiagonals', () => {
  const matrix = [
    [1, 0, 4],
    [0, 2, 0],
    [5, 0, 3],
  ];
  const [d1, d2] = getMatrixDiagonals(matrix);
  expect(d1).toEqual([1, 2, 3]);
  expect(d2).toEqual([5, 2, 4]);
});

test('update matrix cell', () => {
  const matrix = [
    [1, 0, 4],
    [0, 2, 0],
    [5, 0, 3],
  ];
  const newValue = 10;
  const updatedMatrix = updateMatrixCell(matrix, {x: 1, y: 1}, newValue);
  expect(updatedMatrix[0]).toEqual([1, 0, 4]);
  expect(updatedMatrix[1]).toEqual([0, newValue, 0]);
  expect(updatedMatrix[2]).toEqual([5, 0, 3]);
}); 

test('filterMatrixCells', () => {
  const matrix = [
    [1, 0, 4],
    [0, 2, 0],
    [5, 0, 3],
  ];
  const mapped = filterMatrixCells(matrix, cell => cell.value !== 0);  
  expect(mapped).toEqual([
    {row: 0, col: 0, value: 1},
    {row: 0, col: 2, value: 4},
    {row: 1, col: 1, value: 2},
    {row: 2, col: 0, value: 5},
    {row: 2, col: 2, value: 3},
  ]);
});