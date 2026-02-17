import { SvelteComponent } from "svelte";
export type MonoVariant = import('./model').MonoVariant;
import type { BadgeTooltipOptions, MonoVariant as MonoVariantType } from './model';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: MonoVariantType;
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
export type BadgeMonoProps = typeof __propDef.props;
export type BadgeMonoEvents = typeof __propDef.events;
export type BadgeMonoSlots = typeof __propDef.slots;
export default class BadgeMono extends SvelteComponent<BadgeMonoProps, BadgeMonoEvents, BadgeMonoSlots> {
}
export {};
