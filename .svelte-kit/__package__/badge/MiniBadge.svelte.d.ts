import { SvelteComponent } from "svelte";
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        /**
           * If true, positions the mini badge fixed in the bottom-right corner.
           * If false, it will flow inline and you can position the wrapper yourself.
           */ fixed?: boolean;
        offsetPx?: number;
        /**
           * Controls whether the label expands left or right of the icon.
           */ expandDirection?: "left" | "right";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MiniBadgeProps = typeof __propDef.props;
export type MiniBadgeEvents = typeof __propDef.events;
export type MiniBadgeSlots = typeof __propDef.slots;
export default class MiniBadge extends SvelteComponent<MiniBadgeProps, MiniBadgeEvents, MiniBadgeSlots> {
}
export {};
