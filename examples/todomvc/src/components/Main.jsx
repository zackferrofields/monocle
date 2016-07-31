import { map, curry, addIndex } from 'ramda';
import Item from './Item';

const mapIndexed = addIndex(map);
const getTodos = curry(mapIndexed(Item));

export default ({ todos }) =>
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <ul className="todo-list">{getTodos(todos)}</ul>
  </section>;
