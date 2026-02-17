import { SvelteComponent } from "svelte";
export type RoundVariant = import('./model').RoundVariant;
import type { BadgeData } from './types';
import type { BadgeTooltipOptions, RoundVariant as RoundVariantType } from './model';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: RoundVariantType;
        size?: number;
        tooltip?: BadgeTooltipOptions | undefined;
        interactive?: boolean;
    };
    events: {
        activate: CustomEvent<import("./types").BadgeActivateDetail>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeRoundProps = typeof __propDef.props;
export type BadgeRoundEvents = typeof __propDef.events;
export type BadgeRoundSlots = typeof __propDef.slots;
export default class BadgeRound extends SvelteComponent<BadgeRoundProps, BadgeRoundEvents, BadgeRoundSlots> {
}
export {};
