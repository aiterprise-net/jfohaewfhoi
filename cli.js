#!/usr/bin/env node
// tiny-cart <price>x<qty> ... [--discount <percent>]
// Example: node cli.js 1.10x2 0.20x1 --discount 10
import { applyDiscount, cartTotal, formatPrice } from './src/cart.js';

const args = process.argv.slice(2);
const at = args.indexOf('--discount');
const percent = at >= 0 ? Number(args[at + 1]) : 0;
const items = args.filter((a, i) => at < 0 || (i !== at && i !== at + 1)).map((a) => {
  const [price, qty = '1'] = a.split('x');
  return { price: Number(price), qty: Number(qty) };
});
console.log(formatPrice(applyDiscount(cartTotal(items), percent)));
