function cleanSet(set, startString) {
  const result = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');

  return result;
}

export default cleanSet;
