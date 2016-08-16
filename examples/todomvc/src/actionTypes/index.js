import { compose, map, fromPairs, toPairs } from 'ramda';
import * as Action from '../action';

const create = (type, channel) => payload => channel.put.call(channel, { type, payload });

const createTypes = compose(fromPairs, map(key => [ key, Symbol(key) ]));

const createActions = channel => compose(fromPairs, map(([key, value]) => [ key, create(value, channel) ]), toPairs);

export const types = createTypes([ 'add', 'remove', 'complete', 'change', 'clear' ]);

export const register = channel => createActions(channel)(types);

export default register(Action);
