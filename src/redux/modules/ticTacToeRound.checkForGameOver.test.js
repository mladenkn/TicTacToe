import { checkForGameOver } from './ticTacToeRound';
import { roundOutcomes, cellContent } from '../../ticTacToeConstants';

describe('isGameover', () => {

  const {x, o, emptyCell: _} = cellContent

  test.only('still playing', () => {
    
    const run = (matrix) => {
      const {outCome, isGameOver} = checkForGameOver(matrix)
      expect(isGameOver).toBe(false)
      expect(outCome).toBe(undefined)
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
      const {outCome, isGameOver} = checkForGameOver(matrix)
      expect(isGameOver).toBe(true)
      expect(outCome).toBe(roundOutcomes.xWin)
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
      const {outCome, isGameOver} = checkForGameOver(matrix)
      expect(isGameOver).toBe(true)
      expect(outCome).toBe(roundOutcomes.oWin)
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

  test('no isWin, matrix full', () => {
    
    const run = (matrix) => {
      const {outCome, isGameOver} = checkForGameOver(matrix)
      expect(isGameOver).toBe(true)
      expect(outCome).toBe(roundOutcomes.matrixFull)
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