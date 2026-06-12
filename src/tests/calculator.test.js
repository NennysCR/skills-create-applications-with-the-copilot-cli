const calc = require('../calculator');

describe('Calculator module - basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  // Tests inspired by images/calc-extended-operations.png
  test('modulo: 5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('square root: sqrt(16) = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });
});

describe('Calculator module - edge cases', () => {
  test('division by zero throws RangeError', () => {
    expect(() => calc.divide(1, 0)).toThrow(RangeError);
    expect(() => calc.divide(1, 0)).toThrow('Division by zero');
  });

  test('modulo by zero throws RangeError', () => {
    expect(() => calc.modulo(10, 0)).toThrow(RangeError);
    expect(() => calc.modulo(10, 0)).toThrow('Modulo by zero');
  });

  test('power with negative exponent and floats', () => {
    expect(calc.power(2, -3)).toBeCloseTo(0.125);
    expect(calc.power('2.5', '2')).toBeCloseTo(6.25);
  });

  test('squareRoot of zero and positive numbers', () => {
    expect(calc.squareRoot(0)).toBe(0);
    expect(calc.squareRoot('9')).toBe(3);
  });

  test('square root of negative numbers throws RangeError', () => {
    expect(() => calc.squareRoot(-1)).toThrow(RangeError);
    expect(() => calc.squareRoot(-1)).toThrow('Square root of negative number');
  });

  test('non-numeric input throws TypeError', () => {
    expect(() => calc.add('a', 2)).toThrow(TypeError);
    expect(() => calc.subtract(1, 'b')).toThrow(TypeError);
    expect(() => calc.multiply('x', 'y')).toThrow(TypeError);
    expect(() => calc.divide('foo', 'bar')).toThrow(TypeError);
    expect(() => calc.modulo('x', 2)).toThrow(TypeError);
    expect(() => calc.power('a', 2)).toThrow(TypeError);
    expect(() => calc.squareRoot('notanumber')).toThrow(TypeError);
  });

  test('supports numeric strings by converting them', () => {
    expect(calc.add('2', '3')).toBe(5);
    expect(calc.multiply('6', 7)).toBe(42);
  });
});
