import { identity } from 'ramda';
import add from './add';
import remove from './remove';
import complete from './complete';
import change from './change';
import clear from './clear';

const actions = [ add, remove, complete, change, clear ];

export const filterAction = (bool, fn) => bool ? identity : fn;

export default actions;
