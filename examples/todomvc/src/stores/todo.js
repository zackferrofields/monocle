import { lensProp, concat, compose } from 'ramda';
import { view, over } from 'ramda-lens';

let store = { todo:[
  { text: 'feed Willow', completed: true },
  { text: 'brush Willow', completed: false }
]};

const todo = lensProp('todo');

setTimeout(() => store = over(todo, compose(concat([{ text: 'buy food', completed: false }])), store), 500);

export default function() {
  return view(todo, store);
}
