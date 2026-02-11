<script context="module" lang="ts">
  export type RoundCircularTextVariant = 'outlined' | 'filled';
</script>

<script lang="ts">
  import FlowbiteTooltip from '../components/FlowbiteTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let variant: RoundCircularTextVariant = 'outlined';
  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let size: number = 76;
  export let sealFontScale: number = 0.12;

  $: iconName = badge?.icon ?? null;
  $: badgeColor = String(badge?.color ?? '').trim() || 'rgb(17, 24, 39)';

  function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
  }

  $: displayText = (ringText ?? badge?.label ?? '').trim() || '—';
  $: repeatSafe = clamp(Math.floor(repeat || 1), 1, 10);
  $: chars = [...Array(repeatSafe)]
    .map(() => [...displayText.toUpperCase()].concat([...separator.toUpperCase()]))
    .flat();
  $: ringFontPx = Math.round(size * sealFontScale);
  $: centerIcon = Math.round(size * 0.3);
</script>

{#if badge}
  <FlowbiteTooltip placement="top" openDelayMs={120}>
    <span slot="trigger" role="presentation" on:keydown={() => {}}>
      <span
        class="seal {variant}"
        style={`--seal-solid:${badgeColor}; --seal-size:${size}px; --seal-font:${ringFontPx}px;`}
        role="note"
        aria-label={badge.label}
      >
        <span class="ring" aria-hidden="true">
          {#each chars as char, index (index)}
            <span class="char" style={`--angle:${(1 / chars.length) * index}turn;`}>{char}</span>
          {/each}
        </span>

        <span class="center" aria-hidden="true">
          <span class="center-pill">
            {#if iconName}
              <BadgeIcon name={iconName} size={centerIcon} bg="var(--seal-solid)" fg="#ffffff" bgOpacity={1} />
            {/if}
          </span>
        </span>
      </span>
    </span>
    <span slot="content">
      <strong>{badge.label}</strong>
      {#if badge.description}
        <span class="desc">{badge.description}</span>
      {/if}
    </span>
  </FlowbiteTooltip>
{/if}

<style>
  .seal {
    position: relative;
    width: var(--seal-size);
    height: var(--seal-size);
    border-radius: 999px;
    display: inline-grid;
    place-items: center;
    outline: none;
    cursor: default;
    user-select: none;
    background: transparent;
    --seal-solid: rgb(17, 24, 39);
    --seal-ring: color-mix(in srgb, var(--seal-solid) 55%, transparent);
    --seal-line: color-mix(in srgb, var(--seal-solid) 18%, transparent);
    --seal-ring-fg: var(--seal-solid);
  }

  .seal.filled {
    background: var(--seal-solid);
    --seal-ring-fg: rgba(255, 255, 255, 0.92);
  }

  .ring {
    position: absolute;
    inset: 0;
    border-radius: 999px;
    font-size: var(--seal-font);
    color: var(--seal-ring-fg);
    opacity: 0.92;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 550;
  }

  .char {
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(var(--angle));
    text-align: center;
  }

  .center {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
  }

  .center-pill {
    width: calc(var(--seal-size) * 0.64);
    height: calc(var(--seal-size) * 0.64);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--seal-line);
    display: grid;
    place-items: center;
    opacity: 0.95;
  }

  .seal.filled .center-pill {
    border-color: rgba(255, 255, 255, 0.35);
    background: #ffffff;
    opacity: 1;
  }

  .desc {
    display: block;
    margin-top: 4px;
    opacity: 0.9;
  }
</style>

