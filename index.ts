type State = Object;
type StateModifier = (state: State) => State;

interface ActionType {
  type: Symbol;
  payload: any;
  error?: boolean;
}

class Channel {
  public takes: Array<any>;
  public puts: Array<any>;
  constructor() {
    this.puts = [];
    this.takes = [];
  }
  public put(data: any) {
    return new Promise(resolve => {
      this.puts.unshift(() => (resolve(), data));
      if (this.takes.length) this.takes.pop()(this.puts.pop()());
    });
  }
  public take() {
    return new Promise(resolve => {
      this.takes.unshift(resolve);
      if (this.puts.length) this.takes.pop()(this.puts.pop()());
    });
  }
}

class Action extends Channel {
  constructor(private actions: Array<StateModifier>) {
    super();
  }
  public run(action = {}, state: State) {
    return this.actions
      .map(fn => fn(action))
      .reduceRight((x: State, fn) => fn(x), state);
  }
}
const dispatcher = channel => type => payload => channel.put.call(channel, { type, payload });

class App {
  public action: Action;
  public dispatch: Function;
  constructor(public stores: Object, actions: Array<StateModifier>, types: Object) {
    this.action = new Action(actions);
    this.dispatch = (<any>Object).entries(types)
      .map(([key, value]) => [ key, dispatcher(this.action)(value)])
      .reduce((acc, [ key, value ]) => Object.assign(acc, { [key]: value }) ,{});
  }
  public async init(render: Function) {
    render(this.stores);
    while(true) {
      var action = await this.action.take();
      this.stores = this.action.run(action, this.stores);
      render(this.stores);
    }
  }
}

export default App;
