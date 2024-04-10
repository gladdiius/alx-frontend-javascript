import loadBalancer from './7-load_balancer';

describe('loadBalancer', () => {
  it('should return the value of the first resolved promise', async () => {
    const promise1 = new Promise((resolve) => {
      setTimeout(resolve, 100, 'Promise 1 resolved');
    });

    const promise2 = new Promise((resolve) => {
      setTimeout(resolve, 200, 'Promise 2 resolved');
    });

    const result = await loadBalancer(promise1, promise2);
    expect(result).toBe('Promise 1 resolved');
  });

  it('should return the value of the first resolved promise when the second promise resolves first', async () => {
    const promise1 = new Promise((resolve) => {
      setTimeout(resolve, 200, 'Promise 1 resolved');
    });

    const promise2 = new Promise((resolve) => {
      setTimeout(resolve, 100, 'Promise 2 resolved');
    });

    const result = await loadBalancer(promise1, promise2);
    expect(result).toBe('Promise 2 resolved');
  });
});
