import { SvelteComponent } from "svelte";
import type { TooltipPlacement } from '../badge/model';
declare const __propDef: {
    props: {
        placement?: TooltipPlacement;
        openDelayMs?: number;
        maxWidthPx?: number;
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
