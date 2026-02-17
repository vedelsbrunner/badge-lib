const DEFAULT_TOOLTIP_BY_TYPE = {
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
        contentMode: 'labelAndDescription',
        maxWidthPx: 300
    },
    roundcirculartext: {
        enabled: true,
        placement: 'top',
        openDelayMs: 120,
        contentMode: 'labelAndDescription',
        maxWidthPx: 300
    }
};
export function resolveTooltipOptions(type, options) {
    const defaults = DEFAULT_TOOLTIP_BY_TYPE[type];
    const merged = {
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
