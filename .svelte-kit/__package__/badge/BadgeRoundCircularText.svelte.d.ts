import { SvelteComponent } from "svelte";
export type RoundCircularTextVariant = 'outlined' | 'filled';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: RoundCircularTextVariant;
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        size?: number;
        sealFontScale?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BadgeRoundCircularTextProps = typeof __propDef.props;
export type BadgeRoundCircularTextEvents = typeof __propDef.events;
export type BadgeRoundCircularTextSlots = typeof __propDef.slots;
export default class BadgeRoundCircularText extends SvelteComponent<BadgeRoundCircularTextProps, BadgeRoundCircularTextEvents, BadgeRoundCircularTextSlots> {
}
export {};
