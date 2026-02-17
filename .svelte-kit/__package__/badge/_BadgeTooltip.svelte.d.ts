import { SvelteComponent } from "svelte";
import type { BadgeTooltipOptions } from './model';
import type { BadgeActivateDetail, BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        options?: BadgeTooltipOptions | undefined;
        interactive?: boolean;
    };
    events: {
        activate: CustomEvent<BadgeActivateDetail>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeTooltipProps = typeof __propDef.props;
export type BadgeTooltipEvents = typeof __propDef.events;
export type BadgeTooltipSlots = typeof __propDef.slots;
export default class BadgeTooltip extends SvelteComponent<BadgeTooltipProps, BadgeTooltipEvents, BadgeTooltipSlots> {
}
export {};
