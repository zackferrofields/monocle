import { types } from '../actionTypes';
import { removeTodo } from '../stores/todos';
import { filterAction } from './index';

export default ({ type, payload }) =>
  filterAction(type !== types.remove, removeTodo(payload));
