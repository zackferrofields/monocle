import renderer from './renderer';
import App from './components/App';
import { put, take, run } from './action';
import actions, { types } from './actionTypes';
import todosStore from './stores/todos';

const node = document.querySelector('[app]');
const render = renderer(App, node);

let model = { count: 0 };
model = todosStore(model);

const loop = async () => {
  render(<App {...{ model }}/>);
  while (true) {
    const action = await take();
    model = run(action)(model);
    render(<App {...{ model }}/>);
  }
}

loop();

actions.add('feed Willow');
actions.add('brush Willow');
actions.add('adore Willow');
