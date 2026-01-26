import { SvelteComponent } from "svelte";
import type { BadgeData, BadgeOnClick } from './types';
import type { SealVariant } from './Badge.svelte';
declare const __propDef: {
    props: {
        /**
           * Backwards-compatible wrapper around the generic `Badge` component.
           * Prefer:
           *   <Badge type="big" bigStyle="seal" ... />
           */ badge: BadgeData;
        variant?: SealVariant;
        onClick?: BadgeOnClick | null;
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        size?: number;
        rotationMs?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PrioritySealBadgeProps = typeof __propDef.props;
export type PrioritySealBadgeEvents = typeof __propDef.events;
export type PrioritySealBadgeSlots = typeof __propDef.slots;
export default class PrioritySealBadge extends SvelteComponent<PrioritySealBadgeProps, PrioritySealBadgeEvents, PrioritySealBadgeSlots> {
}
export {};
