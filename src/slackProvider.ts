"use strict";
import {define, init, inject, singleton} from '@appolo/inject'
import {IOptions} from "./IOptions";
import {ILogger} from "@appolo/logger";
import {IncomingWebhook, IncomingWebhookSendArguments} from '@slack/webhook'

@define()
@singleton()
export class SlackProvider  {

    private _slackWebHook: IncomingWebhook;
    @inject() logger: ILogger;

    @inject() protected moduleOptions: IOptions;

    @init()
    public initialize() {

        this._slackWebHook = new IncomingWebhook(this.moduleOptions.webHook);
    }

    public async sendWebHook(opts: IncomingWebhookSendArguments & { hook?: string }): Promise<void> {

        try {

            let webhook = this._slackWebHook;

            if (opts.hook) {
                webhook = new IncomingWebhook(opts.hook);
            }

            await webhook.send(opts);

        } catch (e) {

            this.logger.error("failed to send to slack", {e: e});

            throw new e;
        }


    }
}
