export default function getListStudentIds(array, locationOfUser) {
  if (Array.isArray(array)) {
    const filtered = array.filter((element) => element.location === locationOfUser);
    return filtered;
  }
  return [];
}
