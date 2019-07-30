export const allElementsAreEqual = (array) => array.every(e => e === array[0])

export const range = (lowerBound, upperBound) => {
  const r = [];
  for (let i = lowerBound;  i < upperBound;  i++)
    r.push(i);
  return r;
}

export const randomArrayElement = arr => arr[~~(arr.length * Math.random())];
