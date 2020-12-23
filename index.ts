"use strict";
import {Module, module,IModuleParams} from '@appolo/engine';
import {IOptions} from "./src/IOptions";
import {SlackProvider} from "./src/slackProvider";

export {IOptions}  from "./src/IOptions"

export {SlackProvider}

@module()
export class SlackModule extends Module<IOptions> {

    public static for(options?:IOptions):IModuleParams{
        return {type:SlackModule,options}
    }

    protected readonly Defaults: Partial<IOptions> = {
        id: "slackProvider"
    };

    public get exports() {
        return [{id: this.moduleOptions.id, type: SlackProvider}]
    }

}
