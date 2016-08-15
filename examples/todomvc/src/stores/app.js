import { lensProp, over, compose, always } from 'ramda';

const DEFAULT_APP = {
  current: ''
};

const store = lensProp('app');
export const current = compose(store, lensProp('current'));

const init = over(store, always(DEFAULT_APP));

export const clearCurrent = () =>
  over(current, always(''));

export const changeCurrent = str =>
  over(current, always(str));

export default init;
