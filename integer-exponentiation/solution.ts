function pow({ x, y }: { x: number; y: number }): number {
  let result = x;
  for (let iterator = 1; iterator < y; iterator++) {
    result *= x;
  }

  return result;
}

export { pow };
