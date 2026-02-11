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
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponent<TooltipProps, TooltipEvents, TooltipSlots> {
}
export {};
