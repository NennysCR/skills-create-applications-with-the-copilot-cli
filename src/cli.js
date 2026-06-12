#!/usr/bin/env node

/**
 * CLI wrapper for the calculator module
 * Supports the four basic operations shown in the provided image (÷, ×, −, +)
 * Usage examples:
 *   node src/cli.js add 2 3
 *   node src/cli.js + 2 3
 *   node src/cli.js            -> starts interactive prompt
 */

const readline = require('readline');
const calc = require('./calculator');

function printUsage() {
  console.log('Usage: cli.js <operation> <num1> <num2>');
  console.log('Operations: add (+), subtract (-), multiply (* or x), divide (/)');
  console.log('Or run without args to start an interactive prompt.');
}

function applyOperation(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return calc.add(a, b);
    case 'subtract':
    case '-':
    case 'sub':
      return calc.subtract(a, b);
    case 'multiply':
    case '*':
    case 'x':
    case 'X':
      return calc.multiply(a, b);
    case 'divide':
    case '/':
    case 'div':
    case '÷':
      return calc.divide(a, b);
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
}

function runOnce(argv) {
  if (argv.length < 3) {
    printUsage();
    return;
  }
  const [op, a, b] = argv;
  try {
    const result = applyOperation(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

function startREPL() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.setPrompt('calc> ');
  console.log('Basic CLI calculator. Enter expressions like: 2 + 3  OR  add 2 3');
  console.log("Type 'exit' or press Ctrl+C to quit");
  rl.prompt();
  rl.on('line', (line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      rl.prompt();
      return;
    }
    if (trimmed === 'exit' || trimmed === 'quit') {
      rl.close();
      return;
    }
    // Try to parse "a op b" or "op a b"
    const parts = trimmed.split(/\s+/);
    let op, a, b;
    if (parts.length === 3 && /[+\-*/xX÷]/.test(parts[1])) {
      a = parts[0];
      op = parts[1];
      b = parts[2];
    } else if (parts.length === 3) {
      op = parts[0];
      a = parts[1];
      b = parts[2];
    } else {
      console.log('Could not parse input. Examples: "2 + 3" or "add 2 3"');
      rl.prompt();
      return;
    }
    try {
      const res = applyOperation(op, a, b);
      console.log(res);
    } catch (err) {
      console.error('Error:', err.message);
    }
    rl.prompt();
  });
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) startREPL();
  else runOnce(args);
}

module.exports = { runOnce, startREPL };
