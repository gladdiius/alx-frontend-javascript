import setFromArray from "./6-set.js";

describe("setFromArray function", () => {
  
  it("should return a Set with unique values from the array", () => {
    const arr = [12, 32, 15, 78, 98, 15];

    const result = setFromArray(arr);
    
    // Check if result is an instance of Set
    expect(result).toBeInstanceOf(Set);

    // Check if Set has the correct size
    expect(result.size).toBe(5);

    // Check if Set contains the unique values from the array
    expect(result.has(12)).toBe(true);
    expect(result.has(32)).toBe(true);
    expect(result.has(15)).toBe(true);
    expect(result.has(78)).toBe(true);
    expect(result.has(98)).toBe(true);
  });

  it("should handle an empty array", () => {
    const arr = [];

    const result = setFromArray(arr);
    
    // Check if result is an instance of Set
    expect(result).toBeInstanceOf(Set);

    // Check if Set has size 0
    expect(result.size).toBe(0);
  });

});
