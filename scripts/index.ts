type State = Object;
type StateModifier = (state: State) => State;

const identity = x => x;
const constant = x => y => x;

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

export const dispatch = (app: App, type: string, payload: any) =>
  app ? app.action.put({ type: app.types[type], payload }): null;

export const connect = (app: App) =>
  app ? constant(app.stores) : identity;

export class App {
  public action: Action;
  public dispatch: Object;
  public static dispatch = dispatch;
  public static connect = connect;
  constructor(public stores: Object, actions: Array<StateModifier>, public types: Object) {
    this.action = new Action(actions);
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
