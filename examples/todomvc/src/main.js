import renderer from './renderer';
import App from './components/App';
import { put, take, run } from './action';
import actions, { types } from './actionTypes';

const node = document.querySelector('[app]');
const render = renderer(App, node);

let model = { count: 0 };

const loop = async () => {
  while (true) {
    const action = await take();
    model = run(action)(model);
    render(<App {...{ model }}/>);
  }
}

loop();
actions.increment(0);
