<script lang="ts">
  import BadgeRound from './BadgeRound.svelte';
  import type { BadgeData } from './types';
  import type { RoundVariant } from './BadgeRound.svelte';

  /**
   * Backwards-compatible wrapper around the round badge.
   * Prefer using `BadgeRound` directly.
   */
  export let badge: BadgeData;
  export let variant: RoundVariant = 'solid';
  export let size: number = 44;
</script>

<BadgeRound {badge} {variant} {size} />

