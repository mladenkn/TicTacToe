export const allElementsAreEqual = (array) => array.every(e => e === array[0]);

export const randomArrayElement = arr => arr[~~(arr.length * Math.random())];