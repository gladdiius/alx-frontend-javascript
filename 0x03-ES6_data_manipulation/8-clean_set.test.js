import cleanSet from './8-clean_set';

describe('cleanSet', () => {
    
  
    test('should return an empty string when startString is empty', () => {
      const set = new Set(['apple', 'banana', 'avocado']);
      const startString = '';
      const expectedResult = '';
  
      const result = cleanSet(set, startString);
  
      expect(result).toBe(expectedResult);
    });
  
    test('should return an empty string when no set values start with the given startString', () => {
      const set = new Set(['apple', 'banana', 'avocado']);
      const startString = 'mango';
      const expectedResult = '';
  
      const result = cleanSet(set, startString);
  
      expect(result).toEqual(expectedResult);
    });
  });
  