import renderer from './renderer';
import App from './components/App';
import { compose } from 'ramda';
import actions from './action';
import types from './actionTypes';
import stores from './stores';
import Monocle from 'monocle';

const node = document.querySelector('[app]');
const render = compose(renderer(node), App);

const application = new Monocle(stores, actions, types);
application.init(render);

export default application;
