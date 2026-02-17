<svelte:options
  customElement={{
    tag: 'vis-badge',
    shadow: 'open',
    props: {
      // Optional object API.
      badge: { type: 'Object' },

      // Typed coercion for common primitives.
      size: { type: 'Number' },
      interactive: { type: 'Boolean' },
      fixed: { type: 'Boolean' },
      offsetPx: { type: 'Number' },
      iconBgShape: { type: 'String', attribute: 'icon-bg-shape' },
      repeat: { type: 'Number' },
      sealFontScale: { type: 'Number' },
      tooltipDelayMs: { type: 'Number', attribute: 'tooltip-delay-ms' },
      tooltipMaxWidthPx: { type: 'Number', attribute: 'tooltip-max-width-px' }
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Badge from '../lib/badge/Badge.svelte';
  import { normalizeVisBadgeInput } from '../lib/public/normalize';
  import type { BadgeTone, BadgeTooltipMode } from '../lib/public/normalize';
  import type { BadgeType, BadgeVariant, TooltipPlacement } from '../lib/badge/model';
  import type { BadgeActivateDetail, BadgeData } from '../lib/badge/types';
  import type { BadgeIconName } from '../lib/badge/icons/BadgeIcon.svelte';
  import type { BadgeIconBgShape } from '../lib/badge/icons/BadgeIcon.svelte';

  const dispatch = createEventDispatcher<{ 'badge-activate': BadgeActivateDetail }>();

  // Optional object API.
  export let badge: BadgeData | null = null;

  // Minimal API.
  export let label: string | null = null;
  export let tone: BadgeTone | null = null;
  export let color: string | null = null;
  export let icon: BadgeIconName | null = null;
  export let description: string | null = null;
  export let hint: string | null = null;
  export let interactive: boolean = false;

  // Compatibility aliases.
  export let actionText: string | null = null;
  export let actionIcon: BadgeIconName | null = null;

  // Rendering controls.
  export let type: BadgeType | null = null;
  export let variant: BadgeVariant | null = null;
  export let size: number | null = null;

  // mini-only
  export let fixed: boolean | null = null;
  export let offsetPx: number | null = null;
  export let expandDirection: 'left' | 'right' | null = null;
  export let iconBgShape: BadgeIconBgShape | null = null;

  // roundcirculartext-only
  export let ringText: string | null = null;
  export let repeat: number | null = null;
  export let separator: string | null = null;
  export let sealFontScale: number | null = null;

  // Tooltip controls.
  export let tooltipMode: BadgeTooltipMode | null = null;
  export let tooltipPlacement: TooltipPlacement | null = null;
  export let tooltipDelayMs: number | null = null;
  export let tooltipMaxWidthPx: number | null = null;

  $: normalized = normalizeVisBadgeInput({
    badge,
    label,
    tone,
    color,
    icon,
    description,
    hint,
    interactive,
    actionText,
    actionIcon,
    type,
    variant,
    size,
    fixed,
    offsetPx,
    expandDirection,
    iconBgShape,
    ringText,
    repeat,
    separator,
    sealFontScale,
    tooltipMode,
    tooltipPlacement,
    tooltipDelayMs,
    tooltipMaxWidthPx
  });

  function onActivate(event: CustomEvent<BadgeActivateDetail>) {
    dispatch('badge-activate', event.detail);
  }
</script>

<Badge
  badge={normalized.badge}
  {interactive}
  type={normalized.type}
  variant={normalized.variant}
  size={normalized.size}
  fixed={normalized.fixed}
  offsetPx={normalized.offsetPx}
  expandDirection={normalized.expandDirection}
  iconBgShape={normalized.iconBgShape}
  ringText={normalized.ringText}
  repeat={normalized.repeat}
  separator={normalized.separator}
  sealFontScale={normalized.sealFontScale}
  tooltip={normalized.tooltip}
  on:activate={onActivate}
/>
