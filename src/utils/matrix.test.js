import { createNullMatrix, allElementsAreEqual } from "./matrix";

describe('createNullMatrix', () => {

  test('', () => {
    const matrix = createNullMatrix(5, 4)
    expect(matrix.length).toBe(4)
    expect(matrix[1].length).toBe(5)
  })
})

describe('allElementsAreEqual', () => {

  test('does have', () => {
    expect(allElementsAreEqual([1, 1, 1])).toBe(true)
  })

  test('does not have', () => {
    expect(allElementsAreEqual([1, 1, 2])).toBe(false)
  })
})