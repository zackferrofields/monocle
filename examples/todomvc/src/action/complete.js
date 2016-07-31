import { lensProp, lensIndex, over, compose } from 'ramda';
import { types } from '../actionTypes';

const todos = lensProp('todos');
const completed = lensProp('completed');
const toggle = value => !value;

export default ({ type, payload }) => state =>
  type !== types.complete ? state :
  over(compose(todos, lensIndex(payload), completed), toggle, state);
