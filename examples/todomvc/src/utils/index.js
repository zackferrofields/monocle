// channel:: () -> Channel
export const channel = () => ({ takes: [], puts: [] });

// put:: Channel -> a -> Promise
export const put = ({ puts, takes }) => msg =>
  new Promise(resolve => {
    puts.unshift(() => (resolve(), msg));
    if (takes.length) takes.pop()(puts.pop()());
  });

// take:: Channel -> () -> Promise
export const take = ({ puts, takes }) => () =>
  new Promise(resolve => {
    takes.unshift(resolve);
    if (puts.length) takes.pop()(puts.pop()());
  });
