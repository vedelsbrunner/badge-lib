<script context="module" lang="ts">
  export type BadgeTooltipContentMode = 'description' | 'labelAndDescription';
</script>

<script lang="ts">
  import Tooltip, { type TooltipPlacement } from '../components/Tooltip.svelte';
  import type { BadgeData } from './types';

  export let badge: BadgeData;
  export let placement: TooltipPlacement = 'top';
  export let openDelayMs = 80;
  export let contentMode: BadgeTooltipContentMode = 'description';

  $: showTooltip = Boolean(badge?.description);
</script>

{#if showTooltip}
  <Tooltip {placement} {openDelayMs}>
    <span slot="trigger"><slot name="trigger" /></span>
    <span slot="content">
      {#if contentMode === 'labelAndDescription'}
        <strong>{badge.label}</strong>
      {/if}
      <span class="desc">{badge.description}</span>
    </span>
  </Tooltip>
{:else}
  <slot name="trigger" />
{/if}

<style>
  .desc {
    display: block;
  }
</style>

