const wrapi = (value: number, max: number, min = 0): number => {
  if (value > max) {
    return min;
  } else if (value < min) {
    return max;
  }

  return value;
};

export { wrapi };
