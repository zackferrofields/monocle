import renderer from './renderer';
import App from './components/App';
import { compose } from 'ramda';
import * as Actions from './action';
import actions from './actionTypes';
import todosStore from './stores/todos';
import appStore from './stores/app';
import Monocle from 'monocle';

const node = document.querySelector('[app]');
const render = compose(renderer(App, node), App);
const stores = compose(appStore, todosStore);

const Stores = stores({});
const application = new Monocle(Stores, Actions);
application.init(render);

actions.add('feed Willow');
actions.add('brush Willow');
actions.add('adore Willow');
