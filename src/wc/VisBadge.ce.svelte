<svelte:options
  customElement={{
    tag: 'vis-badge',
    shadow: 'open',
    props: {
      // allow setting `badge` as a JS property
      badge: { type: 'Object' },

      // typed attribute coercion for common props
      size: { type: 'Number' },
      fixed: { type: 'Boolean' },
      offsetPx: { type: 'Number' },
      repeat: { type: 'Number' },
      sealFontScale: { type: 'Number' }
    }
  }}
/>

<script lang="ts">
  import Badge from '../lib/badge/Badge.svelte';
  import type { BadgeData } from '../lib/badge/types';
  import type { BadgeType, BadgeVariant } from '../lib/badge/Badge.svelte';
  import type { BadgeIconName } from '../lib/badge/icons/BadgeIcon.svelte';

  // Preferred API (Vue/React): set `el.badge = { ... }`
  export let badge: BadgeData | null = null;

  // Attribute-friendly API (plain HTML / simpler demos)
  export let label: string | null = null;
  export let color: string | null = null;
  export let icon: BadgeIconName | null = null;
  export let description: string | null = null;

  // Shared props
  export let type: BadgeType = 'mono';
  export let variant: BadgeVariant | undefined = undefined;
  export let size: number | undefined = undefined;

  // mini-only
  export let fixed: boolean = false;
  export let offsetPx: number = 16;
  export let expandDirection: 'left' | 'right' = 'right';

  // roundcirculartext-only
  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let sealFontScale: number = 0.12;

  const DEFAULT_COLOR = 'rgb(17, 24, 39)';

  $: computedBadge =
    badge ??
    ({
      label: (label ?? '').trim() || '—',
      color: (color ?? '').trim() || DEFAULT_COLOR,
      icon: icon ?? undefined,
      description: (description ?? '').trim() || undefined
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
  {ringText}
  {repeat}
  {separator}
  {sealFontScale}
/>

