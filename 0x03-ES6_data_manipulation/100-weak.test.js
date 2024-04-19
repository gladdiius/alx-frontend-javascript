import { queryAPI, weakMap } from './100-weak';

describe('queryAPI function', () => {
  beforeEach(() => {
    // Clear weakMap before each test
    weakMap.clear();
  });

  it('should track the number of times queryAPI is called for each endpoint', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(5);
  });

  it('should throw an error when the number of queries is >= 5', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);

    expect(() => {
      queryAPI(endpoint);
    }).toThrow('Endpoint load is high');
  });

  it('should handle multiple endpoints separately', () => {
    const endpoint1 = { protocol: 'http', name: 'getUsers' };
    const endpoint2 = { protocol: 'https', name: 'getPosts' };

    queryAPI(endpoint1);
    queryAPI(endpoint1);
    queryAPI(endpoint2);
    queryAPI(endpoint2);
    queryAPI(endpoint2);

    expect(weakMap.get(endpoint1)).toBe(2);
    expect(weakMap.get(endpoint2)).toBe(3);
  });

  it('should throw an error if argument is not an object', () => {
    const invalidEndpoint = 'invalidEndpoint';

    expect(() => {
      queryAPI(invalidEndpoint);
    }).toThrow('Cannot process');
  });
});
