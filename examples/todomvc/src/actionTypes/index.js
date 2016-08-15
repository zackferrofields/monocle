import { compose, map, fromPairs, toPairs } from 'ramda';
import { put } from '../action';

const create = type => payload => put({ type, payload });

const createTypes = compose(fromPairs, map(key => [ key, Symbol(key) ]));

const createActions = compose(fromPairs, map(([key, value]) => [ key, create(value) ]), toPairs);

export const types = createTypes([ 'add', 'remove', 'complete', 'change', 'clear' ]);

export default createActions(types);
