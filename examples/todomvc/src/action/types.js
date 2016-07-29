import { createActions, createTypes } from './index';

export const types = createTypes([ 'increment' ]);

export default createActions(types);
