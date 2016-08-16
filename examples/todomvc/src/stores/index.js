import { compose } from 'ramda';
import app from './app';
import todos from './todos';

const stores = compose(app, todos);

export default stores({});
