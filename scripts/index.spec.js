const test = require('tape');
const { default: App } = require('./index');

const add = Symbol('add');
const stores = {};
const actions = {};
const types = {};

test('Monocle', t => {
  t.plan(1);
  t.pass();
});
