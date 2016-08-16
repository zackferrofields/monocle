import renderer from './renderer';
import App from './components/App';
import { compose } from 'ramda';
import Actions from './action';
import { register } from './actionTypes';
import Stores from './stores';
import Monocle from 'monocle';

const node = document.querySelector('[app]');
const render = compose(renderer(node), App);

const application = new Monocle(Stores, Actions, register);
application.init(render);

export const { dispatch } = application;
