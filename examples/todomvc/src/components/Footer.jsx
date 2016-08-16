import { filter, curry } from 'ramda';

const remaining = curry(filter(({ completed }) => !completed));

const Count = ({ remaining }) =>
  <span className="todo-count">
    <strong>{remaining.length}</strong>
    {` ${remaining.length === 1 ? 'item' : 'items'} left`}
  </span>;

const Footer = ({ items }) =>
  <footer className="footer">
    <Count remaining={remaining(items)}/>
  </footer>;

export default({ todos = [] }) =>
  <Footer items={todos}/>;
