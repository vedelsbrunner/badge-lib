import { SvelteComponent } from "svelte";
export type BadgeType = 'mini' | 'normal' | 'big';
export type BadgeTone = 'neutral' | 'success' | 'info' | 'warning';
export type BadgeVariant = 'filled' | 'outlined';
export type BigStyle = 'round' | 'seal';
export type BigRoundVariant = 'solid' | 'ring' | 'double-ring' | 'stamp' | 'glow';
export type SealVariant = 'outlined' | 'filled';
import type { BadgeData, BadgeOnClick } from './types';
declare const __propDef: {
    props: {
        badge: BadgeData;
        /**
           * Generic badge size.
           * - mini: collapsed icon-only pill (expands on hover/focus)
           * - normal: standard pill badge
           * - big: high-priority badge (round or sealed)
           */ type?: "mini" | "normal" | "big";
        /**
           * Deprecated alias (kept for backwards compatibility).
           * Prefer `type="mini"`.
           */ variant?: "filled" | "outlined";
        mini?: boolean;
        onClick?: BadgeOnClick | null;
        analytics?: boolean;
        bigStyle?: "round" | "seal";
        bigVariant?: "solid" | "ring" | "double-ring" | "stamp" | "glow";
        bigSize?: number;
        sealVariant?: "filled" | "outlined";
        ringText?: string | null;
        repeat?: number;
        separator?: string;
        sealSize?: number;
        /**
           * Scales the ring text size relative to `sealSize`.
           * Increase slightly to make the ring text more readable.
           */ sealFontScale?: number;
        rotationMs?: number;
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
