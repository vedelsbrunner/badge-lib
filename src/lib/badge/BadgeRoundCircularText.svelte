<script context="module" lang="ts">
  export type RoundCircularTextVariant = import('./model').RoundCircularTextVariant;
</script>

<script lang="ts">
  import BadgeTooltip from './_BadgeTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeTooltipOptions, RoundCircularTextVariant as RoundCircularTextVariantType } from './model';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let variant: RoundCircularTextVariantType = 'outlined';
  export let tooltip: BadgeTooltipOptions | undefined = undefined;
  export let interactive = false;
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
  <BadgeTooltip {badge} options={tooltip} {interactive} on:activate>
    <span slot="trigger">
      <span
        class="seal {variant}"
        style={`--seal-solid:${badgeColor}; --seal-size:${size}px; --seal-font:${ringFontPx}px;`}
      >
        <span class="ring" aria-hidden="true">
          {#each chars as char, index (index)}
            <span class="char" style={`--angle:${(1 / chars.length) * index}turn;`}>{char}</span>
          {/each}
        </span>

        <span class="center" aria-hidden="true">
          <span class="center-pill">
            {#if iconName}
              <span class="icon" aria-hidden="true" style={`--seal-icon-size:${centerIcon}px;`}>
                <BadgeIcon name={iconName} size={centerIcon} bg="var(--seal-solid)" fg="#ffffff" bgOpacity={1} />
              </span>
            {/if}
          </span>
        </span>
      </span>
    </span>
  </BadgeTooltip>
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

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--seal-icon-size);
    height: var(--seal-icon-size);
  }

  .icon :global(svg),
  .icon :global(img),
  .icon :global(ion-icon),
  .icon :global(iconify-icon) {
    width: 100%;
    height: 100%;
    display: block;
  }

  .seal.filled .center-pill {
    border-color: rgba(255, 255, 255, 0.35);
    background: #ffffff;
    opacity: 1;
  }

</style>
