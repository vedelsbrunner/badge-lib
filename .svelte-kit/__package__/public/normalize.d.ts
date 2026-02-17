import type { BadgeIconBgShape, BadgeIconName } from '../badge/icons/BadgeIcon.svelte';
import type { BadgeTooltipOptions, BadgeType, BadgeVariant, ExpandDirection, TooltipPlacement } from '../badge/model';
import type { BadgeData } from '../badge/types';
export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type BadgeTooltipMode = 'auto' | 'off' | 'description' | 'full';
export declare const BADGE_TONE_COLORS: Record<BadgeTone, string>;
export interface VisBadgeInput {
    label?: string | null;
    description?: string | null;
    tone?: BadgeTone | null;
    color?: string | null;
    icon?: BadgeIconName | null;
    hint?: string | null;
    interactive?: boolean;
    actionText?: string | null;
    actionIcon?: BadgeIconName | null;
    type?: BadgeType | null;
    variant?: BadgeVariant | null;
    size?: number | null;
    fixed?: boolean | null;
    offsetPx?: number | null;
    expandDirection?: ExpandDirection | null;
    iconBgShape?: BadgeIconBgShape | null;
    ringText?: string | null;
    repeat?: number | null;
    separator?: string | null;
    sealFontScale?: number | null;
    badge?: BadgeData | null;
    tooltipMode?: BadgeTooltipMode | null;
    tooltipPlacement?: TooltipPlacement | null;
    tooltipDelayMs?: number | null;
    tooltipMaxWidthPx?: number | null;
}
export interface NormalizedVisBadge {
    badge: BadgeData;
    type: BadgeType;
    variant?: BadgeVariant;
    size?: number;
    fixed: boolean;
    offsetPx: number;
    expandDirection: ExpandDirection;
    iconBgShape?: BadgeIconBgShape;
    ringText?: string | null;
    repeat: number;
    separator: string;
    sealFontScale: number;
    tooltip?: BadgeTooltipOptions;
}
export declare function normalizeVisBadgeInput(input: VisBadgeInput): NormalizedVisBadge;
