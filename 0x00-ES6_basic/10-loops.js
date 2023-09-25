export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  for (const [i, el] of arrayCopy.entries()) {
    arrayCopy[i] = appendString + el;
  }

  return arrayCopy;
}
