const cons = (a, b) => {
  const pair = (f) => {
    return f(a, b);
  };
  return pair;
};

// seems the only way to implement the solution is to pass in cdr or car
// definition as the sole parameter of the returned function of cons.

const car = (a, b) => a;

const cdr = (a, b) => b;

module.exports = { cons, car, cdr };
