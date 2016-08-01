import { types } from '../actionTypes';
import { addTodo } from '../stores/todos';
import { filterAction } from './index';

export default ({ type, payload: text }) =>
  filterAction(type !== types.add, addTodo({ text }));
