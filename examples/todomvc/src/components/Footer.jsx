import todo from '../stores/todo';
import { filter, compose } from 'ramda';

const remaining = compose(filter(({ complete }) => !complete));

const Count = ({ remaining }) =>
  <span className="todo-count">
    <strong>{remaining.length}</strong>
    {` ${remaining.length === 1 ? 'item' : 'items'} left`}
  </span>;

const Footer = ({ items }) =>
  items.length < 1 ? '' :
  <footer className="footer">
    <Count remaining={remaining(items)}/>
  </footer>;

export default() =>
  <Footer items={todo()}/>;
