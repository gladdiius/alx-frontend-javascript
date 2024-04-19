import cleanSet from "./8-clean_set.js";

test("Test cleanSet function with startString 'bon'", () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const startString = 'bon';
    const expectedResult = 'jovi-aparte-appetit';
  
    const result = cleanSet(set, startString);
  
    expect(result).toBe(expectedResult);
  });
  
  test("Test cleanSet function with empty startString", () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const startString = '';
    const expectedResult = 'bonjovi-bonaparte-bonappetit-banana';
  
    const result = cleanSet(set, startString);
  
    expect(result).toBe(expectedResult);
  });
  