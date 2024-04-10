import handleResponseFromAPI from './2-then';

describe('handleResponseFromAPI', () => {
  it('should resolve with success response when the Promise resolves', async () => {
    const promise = Promise.resolve();
    const result = await handleResponseFromAPI(promise);
    expect(result).toEqual({ status: 200, body: 'success' });
  });

  it('should reject with Error object when the Promise rejects', async () => {
    const promise = Promise.reject();
    const result = await handleResponseFromAPI(promise);
    expect(result).toBeInstanceOf(Error);
  });

  it('should log "Got a response from the API" to the console', async () => {
    const promise = Promise.resolve();
    console.log = jest.fn();
    await handleResponseFromAPI(promise);
    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});
