export const BADGE_TONE_COLORS = {
    neutral: 'rgb(17, 24, 39)',
    info: 'rgb(2, 136, 209)',
    success: 'rgb(46, 125, 50)',
    warning: 'rgb(237, 108, 2)',
    danger: 'rgb(198, 40, 40)'
};
function trimmed(value) {
    const text = String(value ?? '').trim();
    return text.length ? text : undefined;
}
function multiline(value) {
    const text = String(value ?? '')
        .replace(/\r\n?/g, '\n')
        .replace(/\\n/g, '\n')
        .trim();
    return text.length ? text : undefined;
}
function normalizedType(value) {
    const text = String(value ?? '').trim();
    if (text === 'mini' || text === 'round' || text === 'roundcirculartext')
        return text;
    return 'mono';
}
function fallbackActionText(label) {
    return /\bdownload\b/i.test(label) || /\bopen[-\s]*data\b/i.test(label) ? 'Click to download' : 'Click to interact';
}
function fallbackActionIcon(label) {
    return /\bdownload\b/i.test(label) || /\bopen[-\s]*data\b/i.test(label) ? 'Download' : 'Interactive';
}
function buildTooltip(input) {
    const merged = {};
    if (input.tooltipMode) {
        if (input.tooltipMode === 'off') {
            merged.enabled = false;
        }
        else if (input.tooltipMode === 'description') {
            merged.contentMode = 'description';
            merged.enabled = merged.enabled ?? true;
        }
        else if (input.tooltipMode === 'full') {
            merged.contentMode = 'labelAndDescription';
            merged.enabled = merged.enabled ?? true;
        }
        else {
            merged.contentMode = 'auto';
        }
    }
    if (input.tooltipPlacement)
        merged.placement = input.tooltipPlacement;
    if (Number.isFinite(input.tooltipDelayMs))
        merged.openDelayMs = Number(input.tooltipDelayMs);
    if (Number.isFinite(input.tooltipMaxWidthPx))
        merged.maxWidthPx = Number(input.tooltipMaxWidthPx);
    return Object.keys(merged).length ? merged : undefined;
}
export function normalizeVisBadgeInput(input) {
    const sourceBadge = input.badge ?? {};
    const type = normalizedType(input.type);
    const color = trimmed(input.color) ?? trimmed(sourceBadge.color) ?? (input.tone ? BADGE_TONE_COLORS[input.tone] : undefined) ?? BADGE_TONE_COLORS.neutral;
    const label = trimmed(input.label) ?? trimmed(sourceBadge.label) ?? '—';
    const description = multiline(input.description) ?? multiline(sourceBadge.description);
    const hint = multiline(input.hint);
    const actionText = multiline(input.actionText) ?? multiline(sourceBadge.actionText) ?? hint;
    const actionIcon = (input.actionIcon ?? sourceBadge.actionIcon ?? null);
    const icon = (input.icon ?? sourceBadge.icon ?? null);
    const interactive = Boolean(input.interactive);
    const badge = {
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
        size: Number.isFinite(input.size) ? Number(input.size) : undefined,
        fixed: Boolean(input.fixed ?? false),
        offsetPx: Number.isFinite(input.offsetPx) ? Number(input.offsetPx) : 16,
        expandDirection: (input.expandDirection || 'right'),
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
