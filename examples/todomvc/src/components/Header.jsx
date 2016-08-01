import TextField from './TextField';
import actions from '../actionTypes';

const ENTER = 13;

const NEW_TODO = {
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  value: '',
  autofocus: true
};

const onkeyup = ({ keyCode, target }) =>
  keyCode !== ENTER ? false:
  actions.add(target.value);

export default () =>
  <header>
    <h1>todos</h1>
    <TextField {...NEW_TODO} on-keyup={onkeyup}/>
  </header>;
