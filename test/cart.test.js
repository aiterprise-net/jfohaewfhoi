import assert from 'node:assert/strict';
import { test } from 'node:test';
import { applyDiscount, cartTotal } from '../src/cart.js';

test('adds up whole prices', () => {
  assert.equal(cartTotal([{ price: 2, qty: 3 }, { price: 5, qty: 1 }]), 11);
});

test('an empty cart costs nothing', () => {
  assert.equal(cartTotal([]), 0);
});

test('a discount must be from 0 to 100 per cent', () => {
  assert.throws(() => applyDiscount(10, 120), RangeError);
  assert.equal(applyDiscount(10, 0), 10);
});
