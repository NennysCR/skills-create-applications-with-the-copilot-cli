/**
 * Calculator module
 * Supported operations:
 *  - addition (+)
 *  - subtraction (-)
 *  - multiplication (*)
 *  - division (/)
 *
 * Exposes: add(a, b), subtract(a, b), multiply(a, b), divide(a, b)
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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
