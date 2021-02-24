const BitwiseAnd = (firstValue: number, secondValue: number): boolean => {
  const firstBinaryValue = firstValue;
  const secondBinaryValue = secondValue;
  // eslint-disable-next-line no-bitwise
  const result = firstBinaryValue & secondBinaryValue;
  return Boolean(result);
};

export default BitwiseAnd;
