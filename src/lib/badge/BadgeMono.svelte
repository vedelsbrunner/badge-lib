<script context="module" lang="ts">
  export type MonoVariant = import('./model').MonoVariant;
</script>

<script lang="ts">
  import BadgeTooltip from './_BadgeTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeCorners, BadgeTooltipOptions, MonoVariant as MonoVariantType } from './model';
  import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let variant: MonoVariantType = 'filled';
  export let corners: BadgeCorners = 'rounded';
  export let tooltip: BadgeTooltipOptions | undefined = undefined;
  export let interactive = false;

  $: iconName = badge?.icon ?? null;
  $: badgeColor = String(badge?.color ?? '').trim() || 'rgb(17, 24, 39)';
  const iconSize = 20;
  $: iconBgShape = (iconName === 'Info' ? 'square' : 'round') as BadgeIconBgShape;
</script>

{#if badge}
  <BadgeTooltip {badge} options={tooltip} {interactive} on:activate>
    <span slot="trigger">
      <span
        class="badge {variant}"
        style={`--badge-solid:${badgeColor};--badge-radius:${corners === 'rectangular' ? '4px' : '16px'};`}
      >
        {#if iconName}
          <span class="icon" aria-hidden="true">
            <BadgeIcon
              name={iconName}
              size={iconSize}
              bg={variant === 'outlined' ? 'var(--badge-solid)' : '#ffffff'}
              fg={variant === 'outlined' ? '#ffffff' : 'var(--badge-solid)'}
              bgOpacity={1}
              bgShape={iconBgShape}
            />
          </span>
        {/if}
        <span class="label">{badge.label}</span>
      </span>
    </span>
  </BadgeTooltip>
{/if}

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--badge-gap);
    padding: var(--badge-pad-y) var(--badge-pad-x);
    border-radius: var(--badge-radius, 16px);
    border: var(--badge-border-w) solid transparent;
    font-weight: 550;
    font-size: 12px;
    line-height: 1;
    font-family: var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );
    user-select: none;
    outline: none;
    transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;

    /* Tokens derived from the explicit `--badge-solid` color. */
    --badge-solid: rgb(17, 24, 39);
    --badge-border: color-mix(in srgb, var(--badge-solid) 65%, transparent);
    --badge-fg: color-mix(in srgb, var(--badge-solid) 72%, black);
    --badge-bg: color-mix(in srgb, var(--badge-solid) 14%, transparent);
    --badge-gap: 3px;
    --badge-pad-y: 3px;
    --badge-pad-x: 6px;
    --badge-border-w: 1px;
  }

  .badge.filled {
    background: var(--badge-solid);
    border-color: transparent;
    color: #ffffff;
  }

  .badge.outlined {
    background: transparent;
    border-color: var(--badge-border);
    color: var(--badge-fg);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  .icon :global(svg),
  .icon :global(img),
  .icon :global(ion-icon),
  .icon :global(iconify-icon) {
    width: 100%;
    height: 100%;
    display: block;
  }

  .label {
    white-space: nowrap;
  }

</style>
