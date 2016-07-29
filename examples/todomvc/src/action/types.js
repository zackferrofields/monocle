import { create } from './index';

export const types = {
  increment: Symbol('increment')
};

export const increment = create(types.increment);

export default types;
