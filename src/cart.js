// A tiny shopping cart: add up the items, take off a discount, show the price.

/** The total of the items: price times quantity for each. */
export function cartTotal(items) {
  let total = 0;
  for (const item of items) total += item.price * item.qty;
  return total;
}

/** The total after a discount of `percent` per cent (0 to 100). */
export function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be from 0 to 100');
  return total - percent;
}

/** A price as people read it, for example $4.50. */
export function formatPrice(amount) {
  return '$' + amount;
}
