import { taskFirst, taskNext } from './0-constants.js';
test('but there is a "stop" in Christoph', () => {
    expect(`${taskFirst()} ${taskNext()}`).toMatch(/I prefer const when I can. But sometimes let is okay/);
});