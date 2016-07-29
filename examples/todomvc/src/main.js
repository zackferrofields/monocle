// import csp from 'js-csp';
import renderer from './renderer';
import App from './components/App';
import { put, take, actions } from './action';
import { increment, types } from './action/types';

const node = document.querySelector('[app]');
const render = renderer(App, node);

let model = { count: 0 };

function update(model, { type, payload}) {
  switch (type) {
  case types.increment:
    model.count += payload;
  }
  return model;
}

async function loop() {
  while (true) {
    const action = await take(actions);
    model = update(model, action);
    render(<App {...{ model }}/>);
  }
}

loop();
increment(0);
