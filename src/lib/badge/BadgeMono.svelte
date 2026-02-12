<script context="module" lang="ts">
  export type MonoVariant = 'filled' | 'outlined';
</script>

<script lang="ts">
  import BadgeTooltip from './_BadgeTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let variant: MonoVariant = 'filled';

  $: iconName = badge?.icon ?? null;
  $: badgeColor = String(badge?.color ?? '').trim() || 'rgb(17, 24, 39)';
  const iconSize = 20;
  $: iconBgShape = iconName === 'Info' ? 'square' : 'round';
</script>

{#if badge}
  <BadgeTooltip {badge} placement="top" openDelayMs={80} contentMode="description">
    <span slot="trigger" role="presentation" on:keydown={() => {}}>
      <span class="badge {variant}" style={`--badge-solid:${badgeColor};`} role="note" aria-label={badge.label}>
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
    border-radius: 16px;
    border: var(--badge-border-w) solid transparent;
    font-weight: 550;
    font-size: 12px;
    line-height: 1;
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
  }

  .label {
    white-space: nowrap;
  }

</style>

