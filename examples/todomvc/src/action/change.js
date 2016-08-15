import { types } from '../actionTypes';
import { changeCurrent } from '../stores/app';
import { filterAction } from './index';

export default ({ type, payload }) =>
  filterAction(type !== types.change, changeCurrent(payload));
