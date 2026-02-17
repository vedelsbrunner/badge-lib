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

const DEFAULT_TOOLTIP_BY_TYPE: Record<BadgeType, Required<BadgeTooltipOptions>> = {
  mono: {
    enabled: true,
    placement: 'top',
    openDelayMs: 80,
    contentMode: 'description',
    maxWidthPx: 280
  },
  mini: {
    enabled: true,
    placement: 'top',
    openDelayMs: 420,
    contentMode: 'description',
    maxWidthPx: 280
  },
  round: {
    enabled: true,
    placement: 'top',
    openDelayMs: 120,
    contentMode: 'description',
    maxWidthPx: 300
  },
  roundcirculartext: {
    enabled: true,
    placement: 'top',
    openDelayMs: 120,
    contentMode: 'description',
    maxWidthPx: 300
  }
};

export function resolveTooltipOptions(type: BadgeType, options?: BadgeTooltipOptions): Required<BadgeTooltipOptions> {
  const defaults = DEFAULT_TOOLTIP_BY_TYPE[type];
  const merged: Required<BadgeTooltipOptions> = {
    ...defaults,
    ...(options ?? {})
  };

  if (merged.contentMode === 'auto') {
    merged.contentMode = defaults.contentMode;
  }

  if (!Number.isFinite(merged.openDelayMs)) {
    merged.openDelayMs = defaults.openDelayMs;
  }

  if (!Number.isFinite(merged.maxWidthPx) || merged.maxWidthPx < 120) {
    merged.maxWidthPx = defaults.maxWidthPx;
  }

  return merged;
}
