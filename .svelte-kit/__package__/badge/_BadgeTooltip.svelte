<script context="module"></script>

<script>import Tooltip, {} from "../components/Tooltip.svelte";
export let badge;
export let placement = "top";
export let openDelayMs = 80;
export let contentMode = "description";
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

