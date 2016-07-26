import TextField from './TextField';
import { filter, map, compose, toPairs } from 'ramda';

const getClassName = compose(
  map(([ key ]) => key),
  filter(([, value]) => value),
  toPairs
);

export default ({ text, completed, editing }) =>
  <li className={getClassName({ completed, editing })}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed}/>
      <label>{text}</label>
      <button className="destroy"/>
    </div>
    <TextField value={text} className="edit"/>
  </li>;
