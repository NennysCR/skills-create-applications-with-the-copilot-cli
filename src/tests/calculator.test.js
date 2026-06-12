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
});

describe('Calculator module - edge cases', () => {
  test('division by zero throws RangeError', () => {
    expect(() => calc.divide(1, 0)).toThrow(RangeError);
    expect(() => calc.divide(1, 0)).toThrow('Division by zero');
  });

  test('non-numeric input throws TypeError', () => {
    expect(() => calc.add('a', 2)).toThrow(TypeError);
    expect(() => calc.subtract(1, 'b')).toThrow(TypeError);
    expect(() => calc.multiply('x', 'y')).toThrow(TypeError);
    expect(() => calc.divide('foo', 'bar')).toThrow(TypeError);
  });

  test('supports numeric strings by converting them', () => {
    expect(calc.add('2', '3')).toBe(5);
    expect(calc.multiply('6', 7)).toBe(42);
  });
});
