<script>import Badge from "./Badge.svelte";
export let badge;
export let fixed = false;
export let offsetPx = 16;
export let expandDirection = "right";
</script>

<div
  class="wrap {fixed ? 'fixed' : ''} {expandDirection}"
  style={fixed ? `right:${offsetPx}px;bottom:${offsetPx}px;` : undefined}
  aria-label="Mini badge"
>
  {#if badge}
    <Badge {badge} type="mini" variant="outlined" />
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

</style>

