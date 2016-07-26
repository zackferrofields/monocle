import TextField from './TextField';

const NEW_TODO = {
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  value: '',
  autofocus: true
};

export default () =>
  <header>
    <h1>todos</h1>
    <TextField {...NEW_TODO}/>
  </header>;
