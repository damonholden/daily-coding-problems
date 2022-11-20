const { cons, car, cdr } = require('./solution');

describe('cons', () => {
  it('should return a function', () => {
    expect(cons(1, 2)).toBeInstanceOf(Function);
  });

  it('when the returned parameter is called with a passed in function, it should return the result of that function with the original cons original 2 parameters as the new parameters', () => {
    const result = cons(1, 2);
    expect(result(Math.max)).toBe(2);
    expect(result(Math.min)).toBe(1);
  });

  it('should return the first parameter with car', () => {
    expect(cons(1, 2)(car)).toBe(1);
  });

  it('should return the second parameter with cdr', () => {
    expect(cons(1, 2)(cdr)).toBe(2);
  });
});

describe('car', () => {
  it.only('should return the first parameter', () => {
    expect(car(1, 2)).toBe(1);
  });
});

describe('cdr', () => {
  it('should return the last parameter', () => {
    expect(car(1, 2)).toBe(2);
  });
});
