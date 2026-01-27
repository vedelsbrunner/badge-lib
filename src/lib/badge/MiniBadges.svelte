<script lang="ts">
  import Badge from './Badge.svelte';
  import type { BadgeData, BadgeOnClick } from './types';

  export let badges: BadgeData[] = [];
  export let onClickById: Record<string | number, BadgeOnClick> = {};

  /**
   * If true, positions the widget fixed in the bottom-right corner.
   * If false, it will flow inline and you can position the wrapper yourself.
   */
  export let fixed: boolean = true;
  export let offsetPx: number = 16;

  /**
   * For a bottom-right cluster, expanding to the left avoids overflowing off-screen.
   */
  export let expandDirection: 'left' | 'right' = 'left';

  // Stable sort by label (and id as a tie-breaker).
  $: sortedBadges = [...badges].sort((a, b) => {
    const la = String(a?.label ?? '');
    const lb = String(b?.label ?? '');
    const byLabel = la.localeCompare(lb);
    if (byLabel !== 0) return byLabel;
    const ia = String(a?.id ?? '');
    const ib = String(b?.id ?? '');
    return ia.localeCompare(ib);
  });

  function keyFor(badge: BadgeData): string | number {
    return badge.id ?? badge.label;
  }
</script>

<div
  class="wrap {fixed ? 'fixed' : ''}"
  style={fixed ? `right:${offsetPx}px;bottom:${offsetPx}px;` : undefined}
  aria-label="Mini badges"
>
  <div class="row {expandDirection}">
    {#each sortedBadges as badge (badge.id ?? badge.label)}
      {#if badge}
        <Badge {badge} type="mini" variant="outlined" onClick={onClickById[keyFor(badge)] ?? null} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .wrap.fixed {
    position: fixed;
    z-index: 50;
  }

  .row {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0px;
    pointer-events: auto;
  }

  /* Expansion direction controls whether the label appears left or right of the icon.
     We reuse Badge styles; this only flips the internal layout. */
  .row.left :global(.badge.mini) {
    flex-direction: row-reverse;
  }
</style>

