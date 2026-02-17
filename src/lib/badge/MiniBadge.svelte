<script lang="ts">
  import Badge from './Badge.svelte';
  import type { BadgeCorners } from './model';
  import type { BadgeData } from './types';

  export let badge: BadgeData;

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
  export let corners: BadgeCorners = 'rounded';
</script>

<div
  class="wrap {fixed ? 'fixed' : ''} {expandDirection}"
  style={fixed ? `right:${offsetPx}px;bottom:${offsetPx}px;` : undefined}
  aria-label="Mini badge"
>
  {#if badge}
    <Badge {badge} type="mini" variant="outlined" {corners} />
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
