import { pow } from './solution';

describe('pow', () => {
  it('should perform integer exponentiation', () => {
    expect(pow({ x: 2, y: 10 })).toBe(1024);
  });
});
