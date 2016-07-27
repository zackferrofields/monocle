import { put, actions } from './index';

export default () =>
  put(actions, { actionType: 'incr' });
