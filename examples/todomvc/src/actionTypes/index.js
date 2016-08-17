import { compose, map, fromPairs } from 'ramda';

const createTypes = compose(fromPairs, map(key => [ key, Symbol(key) ]));

export const types = createTypes([ 'add', 'remove', 'complete', 'change', 'clear' ]);

export default types;
