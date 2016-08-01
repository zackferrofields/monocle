import { lensProp, lensIndex, over, compose, always, append, merge, remove } from 'ramda';

const DEFAULT_TODO = { text: '', completed: false };
const DEFAULT_TODOS = [];

const store = lensProp('todos');
const list = lensProp('todos');
const completed = lensProp('completed');

const toggle = value => !value;

const add = todo => append(merge(DEFAULT_TODO, todo));

const init = over(store, always(DEFAULT_TODOS));

export const toggleCompleted = i =>
  over(compose(list, lensIndex(i), completed), toggle);

export const addTodo = todo =>
  over(list, add(todo));

export const removeTodo = i =>
  over(list, remove(i, i));

export default init;
