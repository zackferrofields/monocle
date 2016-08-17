"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class Channel {
    constructor() {
        this.puts = [];
        this.takes = [];
    }
    put(data) {
        return new Promise(resolve => {
            this.puts.unshift(() => (resolve(), data));
            if (this.takes.length)
                this.takes.pop()(this.puts.pop()());
        });
    }
    take() {
        return new Promise(resolve => {
            this.takes.unshift(resolve);
            if (this.puts.length)
                this.takes.pop()(this.puts.pop()());
        });
    }
}
class Action extends Channel {
    constructor(actions) {
        super();
        this.actions = actions;
    }
    run(action = {}, state) {
        return this.actions
            .map(fn => fn(action))
            .reduceRight((x, fn) => fn(x), state);
    }
}
class App {
    constructor(stores, actions, types) {
        this.stores = stores;
        this.action = new Action(actions);
        this.dispatch = Object.entries(types)
            .map(([key, value]) => [key, this.dispatcher(value)])
            .reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {});
    }
    init(render) {
        return __awaiter(this, void 0, void 0, function* () {
            render(this.stores);
            while (true) {
                var action = yield this.action.take();
                this.stores = this.action.run(action, this.stores);
                render(this.stores);
            }
        });
    }
    dispatcher(type) {
        return payload => this.action.put({ type, payload });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=index.js.map