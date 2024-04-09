export default function appendToEachArrayValue(array, appendString) {
  let value = 0;
  const array2 = [];
  for (const item of array) {
    array2[value] = appendString + item;
    value += +1;
  }

  return array2;
}
