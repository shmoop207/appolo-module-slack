"use strict";
var SlackModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackModule = exports.SlackProvider = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const slackProvider_1 = require("./src/slackProvider");
Object.defineProperty(exports, "SlackProvider", { enumerable: true, get: function () { return slackProvider_1.SlackProvider; } });
let SlackModule = SlackModule_1 = class SlackModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "slackProvider"
        };
    }
    static for(options) {
        return { type: SlackModule_1, options };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: slackProvider_1.SlackProvider }];
    }
};
SlackModule = SlackModule_1 = tslib_1.__decorate([
    engine_1.module()
], SlackModule);
exports.SlackModule = SlackModule;
//# sourceMappingURL=index.js.map