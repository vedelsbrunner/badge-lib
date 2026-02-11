import { SvelteComponent } from "svelte";
export type MiniVariant = 'filled' | 'outlined';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: MiniVariant;
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
export type BadgeMiniProps = typeof __propDef.props;
export type BadgeMiniEvents = typeof __propDef.events;
export type BadgeMiniSlots = typeof __propDef.slots;
export default class BadgeMini extends SvelteComponent<BadgeMiniProps, BadgeMiniEvents, BadgeMiniSlots> {
}
export {};
