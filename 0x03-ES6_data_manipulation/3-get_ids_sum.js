export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    const sum = array.reduce((acc, next) => acc + next.id, 0);
    return sum;
  }
  return [];
}
