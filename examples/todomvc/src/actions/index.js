const channel = () =>
  ({ messages: [], takers: [], putters: [] });

export const put = ({ messages,  putters, takers }, msg) =>
  new Promise(resolve => {
    messages.unshift(msg);
    putters.unshift(resolve);
    if (takers.length) {
      putters.pop()();
      takers.pop()(messages.pop());
    }
  });

export const take = ({ messages,  putters, takers }) =>
  new Promise(resolve => {
    takers.unshift(resolve);
    if (putters.length) {
      putters.pop()();
      takers.pop()(messages.pop());
    }
  });

export const actions = channel();

export default actions;
