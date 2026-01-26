import { SvelteComponent } from "svelte";
import type { BadgeData, BadgeOnClick } from './types';
declare const __propDef: {
    props: {
        badges?: BadgeData[];
        onClickById?: Record<string | number, BadgeOnClick>;
        /**
           * If true, positions the widget fixed in the bottom-right corner.
           * If false, it will flow inline and you can position the wrapper yourself.
           */ fixed?: boolean;
        offsetPx?: number;
        /**
           * For a bottom-right cluster, expanding to the left avoids overflowing off-screen.
           */ expandDirection?: "left" | "right";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MiniBadgesProps = typeof __propDef.props;
export type MiniBadgesEvents = typeof __propDef.events;
export type MiniBadgesSlots = typeof __propDef.slots;
export default class MiniBadges extends SvelteComponent<MiniBadgesProps, MiniBadgesEvents, MiniBadgesSlots> {
}
export {};
