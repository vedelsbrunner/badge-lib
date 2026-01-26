import { SvelteComponent } from "svelte";
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
declare const __propDef: {
    props: {
        placement?: TooltipPlacement;
        openDelayMs?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
        content: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FlowbiteTooltipProps = typeof __propDef.props;
export type FlowbiteTooltipEvents = typeof __propDef.events;
export type FlowbiteTooltipSlots = typeof __propDef.slots;
export default class FlowbiteTooltip extends SvelteComponent<FlowbiteTooltipProps, FlowbiteTooltipEvents, FlowbiteTooltipSlots> {
}
export {};
