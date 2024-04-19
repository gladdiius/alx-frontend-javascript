import createInt8TypedArray from "./5-typed_arrays.js";

describe("createInt8TypedArray function", () => {
  
  it("should create an Int8 TypedArray with the value at the specified position", () => {
    const length = 10;
    const position = 2;
    const value = 89;

    const result = createInt8TypedArray(length, position, value);
    
    // Check if result is a DataView
    expect(result).toBeInstanceOf(DataView);

    // Check if DataView has the correct byteLength
    expect(result.byteLength).toBe(length);

    // Check if DataView has the correct Int8 value at the specified position
    expect(result.getInt8(position)).toBe(value);
  });

  it("should throw an error if position is outside the range", () => {
    const length = 10;
    const position = 11;
    const value = 89;

    // Using Jest's expect().toThrow() to check for the thrown error
    expect(() => createInt8TypedArray(length, position, value)).toThrow('Position outside range');
  });

});
