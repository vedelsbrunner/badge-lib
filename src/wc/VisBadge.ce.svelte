<svelte:options
  customElement={{
    tag: 'vis-badge',
    shadow: 'open',
    props: {
      // allow setting `badge` as a JS property
      badge: { type: 'Object' },

      // typed attribute coercion for common props
      size: { type: 'Number' },
      interactive: { type: 'Boolean' },
      fixed: { type: 'Boolean' },
      offsetPx: { type: 'Number' },
      // allow kebab-case usage in HTML/Vue: icon-bg-shape="square"
      iconBgShape: { type: 'String', attribute: 'icon-bg-shape' },
      repeat: { type: 'Number' },
      sealFontScale: { type: 'Number' }
    },
    extend: (Base) =>
      class extends Base {
        addEventListener(type, listener, options) {
          if (type === 'click') {
            // When a consumer registers a click handler (Vue/React addEventListener),
            // automatically enable the interaction hint unless overridden.
            this.interactive = true;
          }
          return super.addEventListener(type, listener, options);
        }
      }
  }}
/>

<script lang="ts">
  import Badge from '../lib/badge/Badge.svelte';
  import type { BadgeData } from '../lib/badge/types';
  import type { BadgeType, BadgeVariant } from '../lib/badge/Badge.svelte';
  import type { BadgeIconName } from '../lib/badge/icons/BadgeIcon.svelte';
  import type { BadgeIconBgShape } from '../lib/badge/icons/BadgeIcon.svelte';

  // Preferred API (Vue/React): set `el.badge = { ... }`
  export let badge: BadgeData | null = null;

  // Attribute-friendly API (plain HTML / simpler demos)
  export let label: string | null = null;
  export let color: string | null = null;
  export let icon: BadgeIconName | null = null;
  export let description: string | null = null;
  export let actionText: string | null = null;
  export let actionIcon: BadgeIconName | null = null;
  export let interactive: boolean = false;

  // Shared props
  export let type: BadgeType = 'mono';
  export let variant: BadgeVariant | undefined = undefined;
  export let size: number | undefined = undefined;

  // mini-only
  export let fixed: boolean = false;
  export let offsetPx: number = 16;
  export let expandDirection: 'left' | 'right' = 'right';
  export let iconBgShape: BadgeIconBgShape | null = null;

  // roundcirculartext-only
  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let sealFontScale: number = 0.12;

  const DEFAULT_COLOR = 'rgb(17, 24, 39)';

  function isDownloadLikeLabel(s: string) {
    return /\bdownload\b/i.test(s) || /\bopen[-\s]*data\b/i.test(s);
  }

  $: computedBadge =
    badge ??
    ({
      label: (label ?? '').trim() || '—',
      color: (color ?? '').trim() || DEFAULT_COLOR,
      icon: icon ?? undefined,
      description: (description ?? '').trim() || undefined,
      actionText:
        (actionText ?? '').trim() ||
        (interactive ? (isDownloadLikeLabel((label ?? '').trim()) ? 'Click to download' : 'Click to interact') : undefined),
      actionIcon:
        actionIcon ??
        (interactive ? (isDownloadLikeLabel((label ?? '').trim()) ? 'Download' : 'Interactive') : undefined)
    } satisfies BadgeData);
</script>

<Badge
  badge={computedBadge}
  {type}
  {variant}
  {size}
  {fixed}
  {offsetPx}
  {expandDirection}
  iconBgShape={iconBgShape ?? undefined}
  {ringText}
  {repeat}
  {separator}
  {sealFontScale}
/>

