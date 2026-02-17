import type { BadgeIconBgShape, BadgeIconName } from '../badge/icons/BadgeIcon.svelte';
import type {
  BadgeCorners,
  BadgeTooltipOptions,
  BadgeType,
  BadgeVariant,
  ExpandDirection,
  TooltipPlacement
} from '../badge/model';
import type { BadgeData } from '../badge/types';

export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type BadgeTooltipMode = 'auto' | 'off' | 'description' | 'full';

export const BADGE_TONE_COLORS: Record<BadgeTone, string> = {
  neutral: 'rgb(17, 24, 39)',
  info: 'rgb(2, 136, 209)',
  success: 'rgb(46, 125, 50)',
  warning: 'rgb(237, 108, 2)',
  danger: 'rgb(198, 40, 40)'
};

export interface VisBadgeInput {
  // Minimal API
  label?: string | null;
  description?: string | null;
  tone?: BadgeTone | null;
  color?: string | null;
  icon?: BadgeIconName | null;
  hint?: string | null;
  interactive?: boolean;

  // Existing flat API compatibility
  actionText?: string | null;
  actionIcon?: BadgeIconName | null;
  type?: BadgeType | null;
  variant?: BadgeVariant | null;
  corners?: BadgeCorners | null;
  size?: number | null;
  fixed?: boolean | null;
  offsetPx?: number | null;
  expandDirection?: ExpandDirection | null;
  iconBgShape?: BadgeIconBgShape | null;
  ringText?: string | null;
  repeat?: number | null;
  separator?: string | null;
  sealFontScale?: number | null;

  // Structured API for advanced usage
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
  corners: BadgeCorners;
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

function trimmed(value: unknown): string | undefined {
  const text = String(value ?? '').trim();
  return text.length ? text : undefined;
}

function multiline(value: unknown): string | undefined {
  const text = String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/\\n/g, '\n')
    .trim();
  return text.length ? text : undefined;
}

function normalizedType(value: unknown): BadgeType {
  const text = String(value ?? '').trim();
  if (text === 'mini' || text === 'round' || text === 'roundcirculartext') return text;
  return 'mono';
}

function normalizedCorners(value: unknown): BadgeCorners {
  return String(value ?? '')
    .trim()
    .toLowerCase() === 'rectangular'
    ? 'rectangular'
    : 'rounded';
}

function fallbackActionText(label: string): string {
  return /\bdownload\b/i.test(label) || /\bopen[-\s]*data\b/i.test(label) ? 'Click to download' : 'Click to interact';
}

function fallbackActionIcon(label: string): BadgeIconName {
  return /\bdownload\b/i.test(label) || /\bopen[-\s]*data\b/i.test(label) ? 'Download' : 'Interactive';
}

function buildTooltip(input: VisBadgeInput): BadgeTooltipOptions | undefined {
  const merged: BadgeTooltipOptions = {};

  if (input.tooltipMode) {
    if (input.tooltipMode === 'off') {
      merged.enabled = false;
    } else if (input.tooltipMode === 'description') {
      merged.contentMode = 'description';
      merged.enabled = merged.enabled ?? true;
    } else if (input.tooltipMode === 'full') {
      merged.contentMode = 'labelAndDescription';
      merged.enabled = merged.enabled ?? true;
    } else {
      merged.contentMode = 'auto';
    }
  }

  if (input.tooltipPlacement) merged.placement = input.tooltipPlacement;
  if (Number.isFinite(input.tooltipDelayMs)) merged.openDelayMs = Number(input.tooltipDelayMs);
  if (Number.isFinite(input.tooltipMaxWidthPx)) merged.maxWidthPx = Number(input.tooltipMaxWidthPx);

  return Object.keys(merged).length ? merged : undefined;
}

export function normalizeVisBadgeInput(input: VisBadgeInput): NormalizedVisBadge {
  const sourceBadge: Partial<BadgeData> = input.badge ?? {};

  const type = normalizedType(input.type);
  const color = trimmed(input.color) ?? trimmed(sourceBadge.color) ?? (input.tone ? BADGE_TONE_COLORS[input.tone] : undefined) ?? BADGE_TONE_COLORS.neutral;
  const label = trimmed(input.label) ?? trimmed(sourceBadge.label) ?? '—';
  const description = multiline(input.description) ?? multiline(sourceBadge.description);
  const hint = multiline(input.hint);
  const actionText = multiline(input.actionText) ?? multiline(sourceBadge.actionText) ?? hint;
  const actionIcon = (input.actionIcon ?? sourceBadge.actionIcon ?? null) as BadgeIconName | null;
  const icon = (input.icon ?? sourceBadge.icon ?? null) as BadgeIconName | null;
  const interactive = Boolean(input.interactive);

  const badge: BadgeData = {
    ...sourceBadge,
    label,
    color,
    icon: icon ?? undefined,
    description,
    actionText: actionText ?? (interactive ? fallbackActionText(label) : undefined),
    actionIcon: actionIcon ?? (interactive ? fallbackActionIcon(label) : undefined)
  };

  // Preserve legacy category field while preferring `category`.
  const category = trimmed(sourceBadge.category) ?? trimmed(sourceBadge.type);
  if (category) {
    badge.category = category;
    badge.type = sourceBadge.type;
  }

  return {
    badge,
    type,
    variant: input.variant ?? undefined,
    corners: normalizedCorners(input.corners),
    size: Number.isFinite(input.size) ? Number(input.size) : undefined,
    fixed: Boolean(input.fixed ?? false),
    offsetPx: Number.isFinite(input.offsetPx) ? Number(input.offsetPx) : 16,
    expandDirection: (input.expandDirection || 'right') as ExpandDirection,
    iconBgShape: input.iconBgShape ?? undefined,
    ringText: input.ringText ?? null,
    repeat: Number.isFinite(input.repeat) ? Number(input.repeat) : 2,
    separator: trimmed(input.separator) ?? ' • ',
    sealFontScale: Number.isFinite(input.sealFontScale)
      ? Number(input.sealFontScale)
      : 0.12,
    tooltip: buildTooltip(input)
  };
}
