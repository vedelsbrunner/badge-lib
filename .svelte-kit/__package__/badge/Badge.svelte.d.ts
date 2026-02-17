import { SvelteComponent } from "svelte";
export type BadgeType = import('./model').BadgeType;
export type BadgeVariant = import('./model').BadgeVariant;
import type { BadgeActivateDetail, BadgeData } from './types';
import type { BadgeTooltipOptions, BadgeType as BadgeTypeDef, BadgeVariant as BadgeVariantDef } from './model';
import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';
declare const __propDef: {
    props: {
        badge: BadgeData;
        type?: BadgeTypeDef;
        interactive?: boolean;
        variant?: BadgeVariantDef | undefined;
        size?: number | undefined;
        fixed?: boolean;
        offsetPx?: number;
        expandDirection?: "left" | "right";
        iconBgShape?: BadgeIconBgShape | undefined;
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        sealFontScale?: number;
        tooltip?: BadgeTooltipOptions | undefined;
    };
    events: {
        activate: CustomEvent<BadgeActivateDetail>;
    } & {
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
