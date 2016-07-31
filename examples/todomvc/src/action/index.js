import { compose, map } from 'ramda';
import * as utils from '../utils';
import increment from './increment';

const actions = [ increment ];

const channel = utils.channel();

export const put = utils.put(channel);

export const take = utils.take(channel);

export const run = action =>
  compose(...map(fn => fn(action), actions));
