import { SvelteComponent } from "svelte";
export type MiniVariant = import('./model').MiniVariant;
import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';
import type { BadgeTooltipOptions, MiniVariant as MiniVariantType } from './model';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: MiniVariantType;
        iconBgShape?: BadgeIconBgShape;
        tooltip?: BadgeTooltipOptions | undefined;
        interactive?: boolean;
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
        activate: CustomEvent<import("./types").BadgeActivateDetail>;
    } & {
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
