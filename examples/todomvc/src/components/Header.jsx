import TextField from './TextField';
import { dispatch } from '../app';

const ENTER = 13;

const NEW_TODO = {
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  autofocus: true
};

const onkeyup = ({ keyCode, target }) =>
  keyCode !== ENTER ? false:
  dispatch.add(target.value);

const onchange = ({ target }) => dispatch.change(target.value);

export default ({ current }) =>
  <header>
    <h1>todos</h1>
    <TextField {...NEW_TODO} value={current} on-keyup={onkeyup} on-input={onchange}/>
  </header>;
