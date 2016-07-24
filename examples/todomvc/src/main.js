import renderer from './renderer';
import app from './components/app';

const node = document.querySelector('[app]');
const render = renderer(app, node);
render();

setTimeout(() => render(app({ name: 'Zack' })), 1000);
