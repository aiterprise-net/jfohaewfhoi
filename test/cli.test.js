import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const cli = fileURLToPath(new URL('../cli.js', import.meta.url));
const run = (...args) => execFileSync(process.execPath, [cli, ...args], { encoding: 'utf8' }).trim();

test('counts every item when there is no discount option', () => {
  assert.equal(run('5x2', '3x1'), '$13');
});

test('gives the same total with --discount 0', () => {
  assert.equal(run('5x2', '3x1', '--discount', '0'), '$13');
});
