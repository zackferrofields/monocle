import { compose, map, identity } from 'ramda';
import * as utils from '../utils';
import add from './add';
import remove from './remove';
import complete from './complete';
import change from './change';
import clear from './clear';

const actions = [ add, remove, complete, change, clear ];

const channel = utils.channel();

export const put = utils.put(channel);

export const take = utils.take(channel);

export const filterAction = (bool, fn) => bool ? identity : fn;

export const run = action =>
  compose(...map(fn => fn(action), actions));
