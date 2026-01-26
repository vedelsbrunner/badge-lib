import { SvelteComponent } from "svelte";
import type { BadgeData, BadgeOnClick } from './types';
import type { BigRoundVariant } from './Badge.svelte';
declare const __propDef: {
    props: {
        /**
           * Backwards-compatible wrapper around the generic `Badge` component.
           * Prefer:
           *   <Badge type="big" bigStyle="round" ... />
           */ badge: BadgeData;
        variant?: BigRoundVariant;
        size?: number;
        onClick?: BadgeOnClick | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PriorityBadgeProps = typeof __propDef.props;
export type PriorityBadgeEvents = typeof __propDef.events;
export type PriorityBadgeSlots = typeof __propDef.slots;
export default class PriorityBadge extends SvelteComponent<PriorityBadgeProps, PriorityBadgeEvents, PriorityBadgeSlots> {
}
export {};
