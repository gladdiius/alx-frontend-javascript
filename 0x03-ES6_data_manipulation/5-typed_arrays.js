const createInt8TypedArray = (length, position, value) => {
  // Check if position is within range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
};

export default createInt8TypedArray;
