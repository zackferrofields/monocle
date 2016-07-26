import todo from '../stores/todo';
import { map, curry } from 'ramda';
import Item from './Item';

const getTodos = curry(map(Item));

export default () =>
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <ul className="todo-list">{getTodos(todo())}</ul>
  </section>;
