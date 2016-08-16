"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class App {
    constructor(stores, actions) {
        this.stores = stores;
        this.actions = actions;
    }
    init(render) {
        return __awaiter(this, void 0, void 0, function* () {
            render(this.stores);
            while (true) {
                var action = yield this.actions.take();
                this.stores = this.actions.run(action)(this.stores);
                render(this.stores);
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
