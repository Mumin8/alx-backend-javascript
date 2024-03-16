function createInt8TypedArray(length, position, value) {
  // Error handling: Ensure position is within valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to access and modify the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position as an Int8
  dataView.setInt8(position, value);

  // Return the DataView for flexibility in accessing and modifying the data
  return dataView;
}

module.exports = createInt8TypedArray;
