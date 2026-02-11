import { SvelteComponent } from "svelte";
export type RoundVariant = 'solid' | 'ring' | 'double-ring' | 'stamp' | 'glow';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: RoundVariant;
        size?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeRoundProps = typeof __propDef.props;
export type BadgeRoundEvents = typeof __propDef.events;
export type BadgeRoundSlots = typeof __propDef.slots;
export default class BadgeRound extends SvelteComponent<BadgeRoundProps, BadgeRoundEvents, BadgeRoundSlots> {
}
export {};
