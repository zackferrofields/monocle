import { compose } from 'ramda';
import TextField from './TextField';
import actions from '../actionTypes';
import { current } from '../stores/app';

const ENTER = 13;

const NEW_TODO = {
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  autofocus: true
};

const onEnter = compose(actions.clear, actions.add);

const onkeyup = ({ keyCode, target }) =>
  keyCode !== ENTER ? false:
  onEnter(target.value);

const onchange = ({ target }) => actions.change(target.value);

export default ({ current }) =>
  <header>
    <h1>todos</h1>
    <TextField {...NEW_TODO} value={current} on-keyup={onkeyup} on-input={onchange}/>
  </header>;
