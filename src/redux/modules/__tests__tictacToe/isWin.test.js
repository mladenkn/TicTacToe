import { cellContent, isWin } from '../ticTacToe'

describe('isGameover', () => {

  const {x, o, emptyCell: _} = cellContent

  test('still playing', () => {
    
    const run = (matrix) => {
      const {win, matrixFull} = isWin(matrix)
      expect(win).toBe(false)
      expect(matrixFull).toBe(false)
    }
    
    run([
      [_, o, x],
      [_, _, x],
      [o, x, _]
    ]);
    run([
      [x, o, x, _],
      [_, _, x, o],
      [o, x, _, _],
      [_, o, _, _],
    ]);
  })

  test('x win', () => {
    
    const run = (matrix) => {
      const {win, matrixFull, winner} = isWin(matrix)
      expect(win).toBe(true)
      expect(winner).toBe(x)
      expect(matrixFull).toBe(false)
    }

    run([
      [x, x, x],
      [_, _, o],
      [o, o, _],
    ]);
    run([
      [x, o, o],
      [x, _, o],
      [x, x, _],
    ]);
    run([
      [x, o, x, _],
      [_, x, x, o],
      [o, o, x, _],
      [_, o, x, o],
    ]);
  })

  test('o win', () => {
    
    const run = (matrix) => {
      const {win, matrixFull, winner} = isWin(matrix)
      expect(win).toBe(true)
      expect(winner).toBe(o)
      expect(matrixFull).toBe(false)
    }

    run([
      [x, x, o],
      [_, o, x],
      [o, x, _],
    ]);
    run([
      [x, x, o],
      [x, _, o],
      [_, x, o],
    ]);
    run([
      [x, o, x, _],
      [_, x, x, o],
      [o, x, x, _],
      [o, o, o, o],
    ]);
  })

  test('no win, matrix full', () => {
    
    const run = (matrix) => {
      const {win, matrixFull} = isWin(matrix)
      expect(win).toBe(false)
       expect(matrixFull).toBe(true)
    }

    run([
      [x, x, o],
      [o, o, x],
      [x, x, o],
    ]);
    run([
      [x, o, x, x],
      [o, x, x, o],
      [o, o, x, x],
      [o, x, o, o],
    ]);   
  })
})