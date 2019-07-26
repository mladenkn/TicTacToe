export const players = {
  x: 'X',
  o: 'O',
}
const emptyCell = ''

export const cellContent = { ...players, emptyCell }

export const roundOutcomes = {
  xWin: 'xWin',
  oWin: 'oWin',
  matrixFull: 'matrixFull',
}