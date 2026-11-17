# tiny-cart

A tiny shopping cart for the command line: add up items, take off a percentage discount, print the price. Plain
JavaScript (ES modules), Node 18 or later (for `node --test`), no dependencies.

## Layout

- `src/cart.js`: the whole library. `cartTotal(items)` adds up `price * qty`; `applyDiscount(total, percent)` takes off
  `percent` per cent (0 to 100, otherwise a `RangeError`); `formatPrice(amount)` turns a number into what people read,
  for example `$4.50`.
- `cli.js`: `node cli.js <price>x<qty> ... [--discount <percent>]`. Each item is `<price>x<qty>` (quantity 1 when left
  out); `--discount` and its value may stand anywhere among the items.
- `test/`: `node:test` tests. `cart.test.js` for the library, `cli.test.js` runs the command itself.

## Commands

- Tests: `npm test` (runs `node --test`). Run them before every commit; a bug fix comes with a test that fails without it.
- Try it: `node cli.js 1.10x2 0.20x1 --discount 10`.

## Rules for changes

- Money is shown with exactly two decimals (`$13.00`, not `$13` or `$0.30000000000000004`). Round once, when the
  price is shown, not in between.
- A discount is a percentage of the total, never an amount of money.
- Keep the library free of dependencies and of input/output; `cli.js` does the reading and printing.
- Bugs are reported as GitHub issues on `aiterprise-net/jfohaewfhoi`. A fix goes on its own branch and reaches `main`
  only through a pull request a person merges.
- Commit messages and pull request text are public: say what changed and why, in plain words.
