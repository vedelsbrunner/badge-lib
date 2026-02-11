import { SvelteComponent } from "svelte";
export type BadgeType = 'mono' | 'mini' | 'round' | 'roundcirculartext';
export type BadgeVariant = import('./BadgeMono.svelte').MonoVariant | import('./BadgeMini.svelte').MiniVariant | import('./BadgeRound.svelte').RoundVariant | import('./BadgeRoundCircularText.svelte').RoundCircularTextVariant;
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        type?: BadgeType;
        variant?: BadgeVariant | undefined;
        size?: number | undefined;
        fixed?: boolean;
        offsetPx?: number;
        expandDirection?: "left" | "right";
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        sealFontScale?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
