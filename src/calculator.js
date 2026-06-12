/**
 * Calculator module
 * Supported operations:
 *  - addition (+)
 *  - subtraction (-)
 *  - multiplication (*)
 *  - division (/)
 *  - modulo (%)
 *  - exponentiation (power)
 *  - square root
 *
 * Exposes: add(a, b), subtract(a, b), multiply(a, b), divide(a, b),
 *           modulo(a, b), power(base, exponent), squareRoot(n)
 */

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new TypeError(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}

function divide(a, b) {
  const nb = toNumber(b);
  if (nb === 0) throw new RangeError('Division by zero');
  return toNumber(a) / nb;
}

function modulo(a, b) {
  const nb = toNumber(b);
  if (nb === 0) throw new RangeError('Modulo by zero');
  return toNumber(a) % nb;
}

function power(base, exponent) {
  return Math.pow(toNumber(base), toNumber(exponent));
}

function squareRoot(n) {
  const nn = toNumber(n);
  if (nn < 0) throw new RangeError('Square root of negative number');
  return Math.sqrt(nn);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};
