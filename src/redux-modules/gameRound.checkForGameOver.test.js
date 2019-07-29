import { getStatus } from './gameRound';
import { roundStatus, cellContent } from '../ticTacToeConstants';

describe('isGameover', () => {

  const {x, o, emptyCell: _} = cellContent

  test.only('still playing', () => {
    
    const run = (matrix) => {
      const status = getStatus(matrix)
      expect(status).toBe(roundStatus.playing)
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

  test('x isWin', () => {
    
    const run = (matrix) => {
      const status = getStatus(matrix)
      expect(status).toBe(roundStatus.xWin)
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

  test('o isWin', () => {
    
    const run = (matrix) => {
      const status = getStatus(matrix)
      expect(status).toBe(roundStatus.oWin)
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

  test('matrix full', () => {
    
    const run = (matrix) => {
      const status = getStatus(matrix)
      expect(status).toBe(roundStatus.matrixFull)
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