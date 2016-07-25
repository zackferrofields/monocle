import { lensProp, concat, compose } from 'ramda';
import { view, over } from 'ramda-lens';

let store = { todo:[{ complete: false }, { complete: true }] };
const todo = lensProp('todo');

setTimeout(() => store = over(todo, compose(concat([{  complete: false }])), store), 500);

export default function() {
  return view(todo, store);
}
