export const players = {
  x: 'X',
  o: 'O',
}
const emptyCell = ''

export const cellContent = { ...players, emptyCell }

export const roundStatus = {
  xWin: 'xWin',
  oWin: 'oWin',
  matrixFull: 'matrixFull',
  playing: 'playing',
}