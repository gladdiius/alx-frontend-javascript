import getResponseFromAPI from './1-promise';

describe('getResponseFromAPI', () => {
  it('should resolve with success response when success is true', () => {
    const success = true;
    return expect(getResponseFromAPI(success)).resolves.toEqual({ status: 200, body: 'Success' });
  });

  it('should reject with error message when success is false', () => {
    const success = false;
    return expect(getResponseFromAPI(success)).rejects.toThrow('The fake API is not working currently');
  });
});
