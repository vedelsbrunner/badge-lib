<script context="module" lang="ts">
  export type RoundVariant = 'solid' | 'ring' | 'double-ring' | 'stamp' | 'glow';
</script>

<script lang="ts">
  import BadgeTooltip from './_BadgeTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeData } from './types';
  import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';

  export let badge: BadgeData;
  export let variant: RoundVariant = 'solid';
  export let size: number = 44;

  $: iconName = badge?.icon ?? null;
  $: badgeColor = String(badge?.color ?? '').trim() || 'rgb(17, 24, 39)';
  $: iconBgShape = (iconName === 'Info' ? 'square' : 'round') as BadgeIconBgShape;

  function fullLabel(label: unknown): string {
    const cleaned = String(label ?? '').trim();
    return cleaned || '—';
  }

  $: rawLabel = fullLabel(badge?.label);
  $: labelLen = rawLabel.length;
  $: renderSize = Math.min(104, Math.max(size, 70 + Math.max(0, labelLen - 12) * 1.4));
  $: iconSize = Math.round(renderSize * 0.34);
  $: textSize = labelLen <= 12 ? 12 : labelLen <= 18 ? 11 : labelLen <= 26 ? 10 : 9;
</script>

{#if badge}
  <BadgeTooltip {badge} placement="top" openDelayMs={120} contentMode="labelAndDescription">
    <span slot="trigger" role="presentation" on:keydown={() => {}}>
      <span
        class="prio {variant} with-label"
        style={`--prio-solid:${badgeColor}; --prio-size:${renderSize}px; --prio-text-size:${textSize}px;`}
        role="note"
        aria-label={badge.label}
      >
        <span class="prio-inner" aria-hidden="true">
          {#if iconName}
            <BadgeIcon
              name={iconName}
              size={iconSize}
              bg={variant === 'solid' ? '#ffffff' : 'var(--prio-solid)'}
              bgOpacity={1}
              fg={variant === 'solid' ? 'var(--prio-solid)' : '#ffffff'}
              bgShape={iconBgShape}
            />
          {/if}
          <span class="prio-text">{rawLabel}</span>
        </span>
      </span>
    </span>
  </BadgeTooltip>
{/if}

<style>
  .prio {
    width: var(--prio-size);
    height: var(--prio-size);
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    outline: none;
    user-select: none;
    transition: transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);
    --prio-solid: rgb(17, 24, 39);
    --prio-border: color-mix(in srgb, var(--prio-solid) 65%, transparent);
    --prio-text: #ffffff;
  }

  .prio-inner {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .prio.with-label .prio-inner {
    flex-direction: column;
    gap: 2px;
    padding: 3px 5px 5px 5px;
    box-sizing: border-box;
  }

  .prio-text {
    font-size: var(--prio-text-size, 10px);
    font-weight: 550;
    letter-spacing: 0.02em;
    line-height: 1.05;
    color: var(--prio-text);
    text-align: center;
    white-space: normal;
    overflow-wrap: anywhere;
    opacity: 0.95;
  }

  .prio.solid {
    background: var(--prio-solid);
  }

  .prio.ring {
    background: #ffffff;
    box-shadow: inset 0 0 0 2px var(--prio-solid);
    --prio-text: var(--prio-solid);
  }

  .prio.double-ring {
    background: var(--prio-solid);
    box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid);
  }

  .prio.stamp {
    background: var(--prio-solid);
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.85);
    filter: saturate(1.05);
  }

  .prio.stamp .prio-inner {
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);
    background-size: 6px 6px;
    background-position: 0 0;
  }

  .prio.glow {
    background: var(--prio-solid);
    box-shadow: 0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92);
  }

</style>

