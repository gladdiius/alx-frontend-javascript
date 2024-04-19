import hasValuesFromArray from "./7-has_array_values.js";

describe("hasValuesFromArray function", () => {

  it("should return true if all elements in the array exist in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1];

    const result = hasValuesFromArray(set, arr);

    expect(result).toBe(true);
  });

  it("should return false if at least one element in the array does not exist in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [10];

    const result = hasValuesFromArray(set, arr);

    expect(result).toBe(false);
  });

  it("should return false if some elements in the array do not exist in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1, 10];

    const result = hasValuesFromArray(set, arr);

    expect(result).toBe(false);
  });

  it("should handle an empty array", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [];

    const result = hasValuesFromArray(set, arr);

    expect(result).toBe(true);  // An empty array is always a subset
  });

  it("should handle an empty set", () => {
    const set = new Set();
    const arr = [1, 2, 3];

    const result = hasValuesFromArray(set, arr);

    expect(result).toBe(false);  // No values from an empty set can be in the array
  });

});
