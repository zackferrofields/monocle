import { types } from '../actionTypes';
import { toggleCompleted } from '../stores/todos';

export default ({ type, payload }) => state =>
  type !== types.complete ? state : toggleCompleted(payload)(state);
