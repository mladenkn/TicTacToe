import { createMatrix, getMatrixCollumns, getMatrixDiagonals } from ".";

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
  })
})

test('getMatrixDiagonals', () => {
  const matrix = [
    [1, 0, 4],
    [0, 2, 0],
    [5, 0, 3],
  ]
  const [d1, d2] = getMatrixDiagonals(matrix)
 
  expect(d1[0]).toBe(1)
  expect(d1[1]).toBe(2)
  expect(d1[2]).toBe(3)

  expect(d2[0]).toBe(5)
  expect(d2[1]).toBe(2)
  expect(d2[2]).toBe(4)
})