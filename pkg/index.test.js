'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./index');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('subtract takes the second number from the first', () => {
  const { subtract } = require('./index');
  assert.strictEqual(subtract(5, 3), 2);
});
