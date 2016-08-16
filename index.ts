type State = Object;
type Store = (state: Object) => Object;

interface Channel {
  take(): Promise<any>;
}

interface Actions extends Channel {
  run(action: Object): (x: State) => State;
}

class App {
  constructor(public stores: Object, public actions: Actions) { }
  public async init(render: Function) {
    render(this.stores);
    while(true) {
      var action = await this.actions.take();
      this.stores = this.actions.run(action)(this.stores);
      render(this.stores);
    }
  }
}

export default App;
