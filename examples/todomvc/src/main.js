import renderer from './renderer';
import App from './components/App';

const node = document.querySelector('[app]');
const render = renderer(App, node);
render();

setTimeout(() => render(App({ name: 'Zack' })), 1000);
