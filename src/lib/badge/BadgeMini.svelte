<script context="module" lang="ts">
  export type MiniVariant = import('./model').MiniVariant;
</script>

<script lang="ts">
  import BadgeTooltip from './_BadgeTooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';
  import type { BadgeTooltipOptions, MiniVariant as MiniVariantType } from './model';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let variant: MiniVariantType = 'outlined';
  export let iconBgShape: BadgeIconBgShape = 'round';
  export let tooltip: BadgeTooltipOptions | undefined = undefined;
  export let interactive = false;

  /**
   * If true, positions the mini badge fixed in the bottom-right corner.
   * If false, it will flow inline and you can position the wrapper yourself.
   */
  export let fixed: boolean = false;
  export let offsetPx: number = 16;

  /**
   * Controls whether the label expands left or right of the icon.
   */
  export let expandDirection: 'left' | 'right' = 'right';

  $: iconName = badge?.icon ?? null;
  $: badgeColor = String(badge?.color ?? '').trim() || 'rgb(17, 24, 39)';
  const iconSize = 24;
  $: iconBgShapeFinal = iconName === 'Info' ? 'square' : iconBgShape;
</script>

<div
  class="wrap {fixed ? 'fixed' : ''} {expandDirection}"
  style={fixed ? `right:${offsetPx}px;bottom:${offsetPx}px;` : undefined}
  aria-label="Mini badge"
>
  {#if badge}
    <BadgeTooltip {badge} options={tooltip} {interactive} on:activate>
      <span slot="trigger">
        <span class="badge mini {variant}" style={`--badge-solid:${badgeColor};`}>
          {#if iconName}
            <span class="icon" aria-hidden="true">
              <BadgeIcon
                name={iconName}
                size={iconSize}
                bg="var(--mini-icon-bg)"
                fg="var(--mini-icon-fg)"
                bgOpacity={1}
                bgShape={iconBgShapeFinal}
              />
            </span>
          {/if}
          <span class="label">{badge.label}</span>
        </span>
      </span>
    </BadgeTooltip>
  {/if}
</div>

<style>
  .wrap.fixed {
    position: fixed;
    z-index: 50;
  }

  .wrap {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    pointer-events: auto;
  }

  /* Expansion direction controls whether the label appears left or right of the icon. */
  .wrap.left :global(.badge.mini) {
    flex-direction: row-reverse;
  }

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
    transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease,
      padding 420ms cubic-bezier(0.2, 0, 0, 1);

    /* Tokens derived from the explicit `--badge-solid` color. */
    --badge-solid: rgb(17, 24, 39);
    --badge-border: color-mix(in srgb, var(--badge-solid) 65%, transparent);
    --badge-fg: color-mix(in srgb, var(--badge-solid) 72%, black);
    --badge-gap: 3px;
    --badge-pad-y: 3px;
    --badge-pad-x: 6px;
    --badge-border-w: 1px;

    /* Mini icon defaults (outlined-like): colored pill, white glyph */
    --mini-icon-bg: var(--badge-solid);
    --mini-icon-fg: #ffffff;
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
    width: 24px;
    height: 24px;
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

  /* Collapsed icon-only; expands on hover/focus. */
  .badge.mini {
    --badge-gap: 0px;
    --badge-pad-y: 0px;
    --badge-pad-x: 0px;
    --badge-border-w: 0px;
    border-color: transparent;
    background: transparent;
    font-size: 11px;
  }

  .badge.mini .label {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    line-height: 1.2;
    padding-bottom: 1px;
    transition: max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease;
  }

  .badge.mini:hover,
  .badge.mini:focus-visible {
    --badge-gap: 2px;
    --badge-pad-y: 2px;
    --badge-pad-x: 5px;
    --badge-border-w: 1px;
  }

  .badge.mini.outlined:hover,
  .badge.mini.outlined:focus-visible {
    border-color: var(--badge-border);
  }

  /* For filled mini badges, the base `.badge.mini` keeps background transparent.
     Re-introduce the solid background when expanded so text stays readable. */
  .badge.mini.filled:hover,
  .badge.mini.filled:focus-visible {
    background: var(--badge-solid);
    border-color: transparent;
    color: #ffffff;

    /* Invert the icon when expanded: white pill, colored glyph */
    --mini-icon-bg: #ffffff;
    --mini-icon-fg: var(--badge-solid);
  }

  .badge.mini:hover .label,
  .badge.mini:focus-visible .label {
    max-width: 220px;
    opacity: 1;
  }
</style>
