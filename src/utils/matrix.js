export const createNullMatrix = (width, height) => {
  const r = [];
  for (let curIndex = 0;  curIndex < height;  curIndex++)
    r.push(Array(width).fill(null));
  return r;
}

export const allElementsAreEqual = (array) => {
  for (let curIndex = 0;  curIndex < array.length;  curIndex++) {
    const curElement = array[curIndex];
    if(curIndex === 0)    
      continue;
    const prevElement = array[curIndex - 1];
    if(prevElement !== curElement)
      return false;
  }
  return true;
}

export const getMatrixCollumns = (matrix) => {

}