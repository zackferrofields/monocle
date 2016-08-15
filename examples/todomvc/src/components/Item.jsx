import { filter, map, compose, toPairs } from 'ramda';
import TextField from './TextField';
import actions from '../actionTypes';

const getClassName = compose(
  map(([ key ]) => key),
  filter(([, value]) => value),
  toPairs
);

const onchange = key => () => actions.complete(key);
const onclick = key => () => (console.log(key), actions.remove(key));

export default ({ text, completed, editing }, key) =>
  <li className={getClassName({ completed, editing })}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed}
        on-change={onchange(key)}/>
      <label>{text}</label>
      <button className="destroy" on-click={onclick(key)}/>
    </div>
    <TextField value={text} className="edit"/>
  </li>;
