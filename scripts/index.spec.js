require('core-js/shim');
const test = require('tape');
const monocle = require('./index');

const App = monocle.App;
const Channel = monocle.Channel;
const Action = monocle.Action;
const dispatch = monocle.dispatch;
const connect = monocle.connect;
const add = Symbol('add');
const identity = x => x;

const stores = {};
const actions = [];
const types = { add };

test('Monocle.Channel', t => {
  t.plan(4);

  t.is(typeof Channel, 'function', 'should be a constructor');
  t.true(new Channel() instanceof Channel, 'should be an instance of `Channel`');

  t.test('Monocle.Channel.put', t => {
    t.plan(4);

    const channel = new Channel();
    t.is(typeof channel.put, 'function', 'should be a function');

    const length = channel.puts.length;
    const promise = channel.put(add);
    t.is(channel.puts.length, length + 1, 'should increment `channel.puts.length` by 1');
    t.is(typeof promise.then, 'function', 'should return a `thenable`');
    Promise.resolve(promise).then(() => t.pass('should resolve'));
    channel.take();
  });

  t.test('Monocle.Channel.take', t => {
    t.plan(4);

    const channel = new Channel();
    t.is(typeof channel.take, 'function', 'should be a function');

    const length = channel.take.length;
    const promise = channel.take();
    t.is(channel.takes.length, length + 1, 'should increment `channel.take.length` by 1');
    t.is(typeof promise.then, 'function', 'should return a `thenable`');
    Promise.resolve(promise).then(data => t.is(data, add, 'should resolve `add`'));
    channel.put(add);
  });
});

test('Monocle.Action', t => {
  t.plan(4);

  t.is(typeof Action, 'function', 'should be a constructor');
  t.true(new Action() instanceof Action, 'should be an instance of `Action`');
  t.true(new Action() instanceof Channel, 'should be an instance of `Channel`');

  t.test('Monocle.Action.run', t => {
    t.plan(4);

    const type = 'test:run';
    const payload = 1;

    const actions = [data => data.type !== type ? identity: () => data.payload];
    const action = new Action(actions);

    t.same(action.actions, actions, 'should contain `actions`');
    t.is(typeof action.run, 'function', 'should be a function');
    t.is(action.run({ type, payload }, 0), 1, 'should run actions');
    t.not(action.run({}, 0), 1, 'should not run actions');
  });
});

test('Monocle.dispatch', t => {
  t.plan(5);

  t.not(typeof dispatch, 'undefined', 'should not be undefined');
  t.same(dispatch, App.dispatch, 'should be `App.dispatch`');

  const app = new App(stores, actions, types);
  const promise = dispatch(app, 'constant', 'data');
  t.is(typeof promise.then, 'function', 'should return a `thenable`');
  t.doesNotThrow(dispatch, undefined, 'should not throw when `undefined`');
  t.false(dispatch(null), 'should be false');
});

test('Monocle.connect', t => {
  t.plan(5);

  t.not(typeof connect, 'undefined', 'should not be undefined');
  t.same(connect, App.connect, 'should be `App.connect`');

  const props = 'default value';
  const app = new App(stores, actions, types);
  t.same(connect(app), stores, 'should return `app.stores`');
  t.doesNotThrow(connect, undefined, 'should not throw when `undefined`');
  t.same(connect(null, props), props, 'should return `props`');
});

test('Monocle.App', t => {
  t.plan(4);

  t.is(typeof App, 'function', 'should be a constructor');
  t.same(App, monocle.default, 'should be `monocle.default`');
  t.true(new App(stores, actions, types) instanceof App, 'should be an instance of `App`');

  t.test('Monocle.App.init', t => {
    t.plan(3);

    const type = 'test:init';
    const message = 'should run';
    const actions = [data => data.type !== type ? identity: state => data.payload];
    const types = { constant: type };
    const app = new App(message, actions, types);

    t.is(typeof app.init, 'function', 'should be a function supplied');
    app.init(t.pass);
    dispatch(app, 'constant', 'should run again');
  });
});
