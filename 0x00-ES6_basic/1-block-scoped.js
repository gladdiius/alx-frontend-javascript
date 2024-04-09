export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
  // eslint-disable-next-line
    var task = true;
  // eslint-disable-next-line
    var task2 = false;
  }
  task = false;
  task2 = true;

  return [task, task2];
}
