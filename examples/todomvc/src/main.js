// import csp from 'js-csp';
import renderer from './renderer';
import App from './components/App';
import { put, take, actions } from './actions';
import increment from './actions/increment';

const node = document.querySelector('[app]');
const render = renderer(App, node);

let model = { count: 0 };

function update(model, action) {
  switch (action.actionType) {
  case 'incr':
    model.count += 1;
    return model;
  }
}

async function loop() {
  while (true) {
    const action = await take(actions);
    model = update(model, action);
    render(<App {...{ model }}/>);
  }
}

loop();
increment();
