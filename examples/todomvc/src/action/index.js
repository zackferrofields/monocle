const channel = () =>
  ({ messages: [], takers: [], putters: [] });

const put = ({ putters, takers }, msg) =>
  new Promise(resolve => {
    putters.unshift(() => (resolve(), msg));
    if (takers.length) takers.pop()(putters.pop()());
  });

export const take = ({ putters, takers }) =>
  new Promise(resolve => {
    takers.unshift(resolve);
    if (putters.length) takers.pop()(putters.pop()());
  });

export const actions = channel();

export const create = type => payload =>
  (console.log(payload), put(actions, { type, payload }));

export default actions;
