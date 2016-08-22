import { filter, curry, compose } from 'ramda';
import app from '../app';
import { connect } from 'monocle';

const remaining = curry(filter(({ completed }) => !completed));

const Count = ({ remaining }) =>
  <span className="todo-count">
    <strong>{remaining.length}</strong>
    {` ${remaining.length === 1 ? 'item' : 'items'} left`}
  </span>;

const Footer = ({ todos = [] }) =>
  <footer className="footer">
    <Count remaining={remaining(todos)}/>
  </footer>;

export default compose(Footer, connect(app));
