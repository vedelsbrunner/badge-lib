import { SvelteComponent } from "svelte";
export type RoundCircularTextVariant = import('./model').RoundCircularTextVariant;
import type { BadgeTooltipOptions, RoundCircularTextVariant as RoundCircularTextVariantType } from './model';
import type { BadgeData } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        variant?: RoundCircularTextVariantType;
        tooltip?: BadgeTooltipOptions | undefined;
        interactive?: boolean;
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        size?: number;
        sealFontScale?: number;
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
export type BadgeRoundCircularTextProps = typeof __propDef.props;
export type BadgeRoundCircularTextEvents = typeof __propDef.events;
export type BadgeRoundCircularTextSlots = typeof __propDef.slots;
export default class BadgeRoundCircularText extends SvelteComponent<BadgeRoundCircularTextProps, BadgeRoundCircularTextEvents, BadgeRoundCircularTextSlots> {
}
export {};
