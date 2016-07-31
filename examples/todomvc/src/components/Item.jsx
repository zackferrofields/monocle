import { filter, map, compose, toPairs } from 'ramda';
import TextField from './TextField';
import actions from '../actionTypes';

const getClassName = compose(
  map(([ key ]) => key),
  filter(([, value]) => value),
  toPairs
);

export default ({ text, completed, editing }, key) =>
  <li className={getClassName({ completed, editing })}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed}
        on-change={() => actions.complete(key)}/>
      <label>{text}</label>
      <button className="destroy"/>
    </div>
    <TextField value={text} className="edit"/>
  </li>;
