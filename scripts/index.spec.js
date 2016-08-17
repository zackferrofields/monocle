const test = require('tape');
const monocle = require('./index');

const App = monocle.default;

const add = Symbol('add');
const stores = {};
const actions = {};
const types = {};

test('Monocle', t => {
  t.plan(2);
  const app = new App(stores, actions, types);
  t.true(app instanceof App, '`app` should be an instance of `App`');
  t.same(Object.keys(types), Object.keys(app.dispatch), '`app.dispatch` should mirror `types`');
});
