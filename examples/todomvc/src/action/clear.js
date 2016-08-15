import { types } from '../actionTypes';
import { clearCurrent } from '../stores/app';
import { filterAction } from './index';

export default ({ type }) =>
  filterAction(type !== types.clear, clearCurrent());
