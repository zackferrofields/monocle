import { compose, map, fromPairs, toPairs } from 'ramda';

const actions = { messages: [], takers: [], putters: [] };

const put = ({ putters, takers }, msg) =>
  new Promise(resolve => {
    putters.unshift(() => (resolve(), msg));
    if (takers.length) takers.pop()(putters.pop()());
  });

export const take = ({ putters, takers }) =>
  new Promise(resolve => {
    takers.unshift(resolve);
    if (putters.length) takers.pop()(putters.pop()());
  });

const create = type => payload =>
  put(actions, { type, payload });

export const createTypes = compose(fromPairs, map(key => [ key, Symbol(key) ]));

export const createActions = compose(fromPairs, map(([key, value]) => [ key, create(value) ]), toPairs);

export default actions;
