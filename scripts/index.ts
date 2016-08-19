type State = Object;
type StateModifier = (state: State) => State;

interface ActionType {
  type: Symbol;
  payload: any;
  error?: boolean;
}

export class Channel {
  public takes: Array<Function>;
  public puts: Array<() => ActionType>;
  constructor() {
    this.puts = [];
    this.takes = [];
  }
  public put(data: ActionType) {
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

export class Action extends Channel {
  constructor(private actions: Array<StateModifier>) {
    super();
  }
  public run(action: Object, state: State) {
    return this.actions
      .map(fn => fn(action))
      .reduceRight((x: State, fn) => fn(x), state);
  }
}

export class App {
  public action: Action;
  public dispatch: Object;
  constructor(public stores: Object, actions: Array<StateModifier>, types: Object) {
    this.action = new Action(actions);
    this.dispatch = (<any>Object).entries(types)
      .map(type => [ type[0], this.dispatcher(type[1])])
      .reduce((acc, type) => Object.assign(acc, { [type[0]]: type[1] }) ,{});
  }
  public async init(render: Function) {
    render(this.stores);
    while(true) {
      var action = await this.action.take();
      this.stores = this.action.run(action, this.stores);
      render(this.stores);
    }
  }
  private dispatcher(type: Symbol) {
    return payload => this.action.put({ type, payload });
  }
}

export default App;
