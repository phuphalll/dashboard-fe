const isGreaterThanZero = (input: string): boolean => {
  const value = parseFloat(input.replace("%", ""));
  return value > 0;
};

export { isGreaterThanZero };
