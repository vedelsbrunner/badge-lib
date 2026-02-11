<script context="module"></script>

<script>import BadgeTooltip from "./_BadgeTooltip.svelte";
import BadgeIcon from "./icons/BadgeIcon.svelte";
export let badge;
export let variant = "outlined";
export let fixed = false;
export let offsetPx = 16;
export let expandDirection = "right";
$: iconName = badge?.icon ?? null;
$: badgeColor = String(badge?.color ?? "").trim() || "rgb(17, 24, 39)";
const iconSize = 22;
</script>

<div
  class="wrap {fixed ? 'fixed' : ''} {expandDirection}"
  style={fixed ? `right:${offsetPx}px;bottom:${offsetPx}px;` : undefined}
  aria-label="Mini badge"
>
  {#if badge}
    <BadgeTooltip {badge} placement="top" openDelayMs={420} contentMode="description">
      <span slot="trigger" role="presentation" on:keydown={() => {}}>
        <span class="badge mini {variant}" style={`--badge-solid:${badgeColor};`} role="note" aria-label={badge.label}>
          {#if iconName}
            <span class="icon" aria-hidden="true">
              <BadgeIcon
                name={iconName}
                size={iconSize}
                bg={variant === 'outlined' ? 'var(--badge-solid)' : '#ffffff'}
                fg={variant === 'outlined' ? '#ffffff' : 'var(--badge-solid)'}
                bgOpacity={1}
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
    user-select: none;
    outline: none;
    transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease,
      padding 320ms cubic-bezier(0.2, 0, 0, 1);

    /* Tokens derived from the explicit `--badge-solid` color. */
    --badge-solid: rgb(17, 24, 39);
    --badge-border: color-mix(in srgb, var(--badge-solid) 65%, transparent);
    --badge-fg: color-mix(in srgb, var(--badge-solid) 72%, black);
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
    transition: max-width 320ms cubic-bezier(0.2, 0, 0, 1), opacity 200ms ease;
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

  .badge.mini:hover .label,
  .badge.mini:focus-visible .label {
    max-width: 220px;
    opacity: 1;
  }
</style>

