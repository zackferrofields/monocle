import renderer from './renderer';
import App from './components/App';
import channel, { put, take } from './action';
import actions, { types } from './action/types';

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

const loop = async () => {
  while (true) {
    const action = await take(channel);
    model = update(model, action);
    render(<App {...{ model }}/>);
  }
}

loop();
actions.increment(0);
