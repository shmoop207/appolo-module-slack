"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const webhook_1 = require("@slack/webhook");
let SlackProvider = class SlackProvider {
    initialize() {
        this._slackWebHook = new webhook_1.IncomingWebhook(this.moduleOptions.webHook);
    }
    async sendWebHook(opts) {
        try {
            let webhook = this._slackWebHook;
            if (opts.hook) {
                webhook = new webhook_1.IncomingWebhook(opts.hook);
            }
            await webhook.send(opts);
        }
        catch (e) {
            this.logger.error("failed to send to slack", { e: e });
            throw new e;
        }
    }
};
tslib_1.__decorate([
    inject_1.inject()
], SlackProvider.prototype, "logger", void 0);
tslib_1.__decorate([
    inject_1.inject()
], SlackProvider.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.init()
], SlackProvider.prototype, "initialize", null);
SlackProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], SlackProvider);
exports.SlackProvider = SlackProvider;
//# sourceMappingURL=slackProvider.js.map