import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';
export type BadgeType = 'mono' | 'mini' | 'round' | 'roundcirculartext';
export type MonoVariant = 'filled' | 'outlined';
export type MiniVariant = 'filled' | 'outlined';
export type RoundVariant = 'solid' | 'ring' | 'double-ring';
export type RoundCircularTextVariant = 'outlined' | 'filled';
export type BadgeVariant = MonoVariant | MiniVariant | RoundVariant | RoundCircularTextVariant;
export type ExpandDirection = 'left' | 'right';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type BadgeTooltipContentMode = 'description' | 'labelAndDescription' | 'auto';
export interface BadgeTooltipOptions {
    enabled?: boolean;
    placement?: TooltipPlacement;
    openDelayMs?: number;
    contentMode?: BadgeTooltipContentMode;
    maxWidthPx?: number;
}
export interface BadgeRenderOptions {
    type?: BadgeType;
    variant?: BadgeVariant;
    size?: number;
    fixed?: boolean;
    offsetPx?: number;
    expandDirection?: ExpandDirection;
    iconBgShape?: BadgeIconBgShape | null;
    ringText?: string | null;
    repeat?: number;
    separator?: string;
    sealFontScale?: number;
    tooltip?: BadgeTooltipOptions;
}
export declare function resolveTooltipOptions(type: BadgeType, options?: BadgeTooltipOptions): Required<BadgeTooltipOptions>;
