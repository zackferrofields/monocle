import { lensProp, over, add } from 'ramda';
import { types } from '../actionTypes';

const count = lensProp('count');

export default ({ type, payload }) => state =>
  type !== types.increment ? state :
  over(count, add(payload), state);
