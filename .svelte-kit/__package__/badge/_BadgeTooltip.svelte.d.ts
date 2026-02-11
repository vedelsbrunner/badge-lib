import { SvelteComponent } from "svelte";
export type BadgeTooltipContentMode = 'description' | 'labelAndDescription';
import { type TooltipPlacement } from '../components/Tooltip.svelte';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        placement?: TooltipPlacement;
        openDelayMs?: number;
        contentMode?: BadgeTooltipContentMode;
    };
    events: {
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
