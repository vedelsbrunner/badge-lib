<script context="module" lang="ts">
  export type BadgeTooltipContentMode = 'description' | 'labelAndDescription';
</script>

<script lang="ts">
  import Tooltip, { type TooltipPlacement } from '../components/Tooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let placement: TooltipPlacement = 'top';
  export let openDelayMs = 80;
  export let contentMode: BadgeTooltipContentMode = 'description';

  $: showTooltip = Boolean(badge?.description || badge?.actionText);
  $: hintIcon = badge?.actionIcon ?? null;
</script>

{#if showTooltip}
  <Tooltip {placement} {openDelayMs}>
    <span slot="trigger"><slot name="trigger" /></span>
    <span slot="content">
      {#if contentMode === 'labelAndDescription'}
        <strong>{badge.label}</strong>
      {/if}
      {#if badge.description}
        <span class="desc">{badge.description}</span>
      {/if}
      {#if badge.actionText}
        <div class="actionHint" aria-hidden="true">
          <span class="actionRow">
            {#if hintIcon}
              <span class="actionIcon">
                <BadgeIcon name={hintIcon} size={14} fg="rgba(255, 255, 255, 0.92)" bg={null} bgOpacity={0} />
              </span>
            {/if}
            <span class="actionText">{badge.actionText}</span>
          </span>
        </div>
      {/if}
    </span>
  </Tooltip>
{:else}
  <slot name="trigger" />
{/if}

<style>
  .desc {
    display: block;
    white-space: pre-line;
  }

  .actionHint {
    display: block;
    margin-top: 7px;
    padding-top: 7px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    opacity: 0.92;
    font-size: 11px;
    line-height: 1.2;
    width: 100%;
    text-align: center;
    font-weight: 650;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .actionRow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .actionText {
    display: inline-block;
    text-align: center;
    white-space: normal;
  }

  .actionIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>

