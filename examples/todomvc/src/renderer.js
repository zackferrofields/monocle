import snabbdom from 'snabbdom';
import snabbdomAttrs from 'snabbdom/modules/attributes';
import snabbdomClass from 'snabbdom/modules/class';
import snabbdomProps from 'snabbdom/modules/props';
import snabbdomStyle from 'snabbdom/modules/style';
import snabbdomEvents from 'snabbdom/modules/eventlisteners';

const patch = snabbdom.init([ snabbdomAttrs, snabbdomClass, snabbdomProps, snabbdomStyle, snabbdomEvents ]);

export default (Component, node) =>
  (tree = Component()) =>
    node = patch(node, tree);
