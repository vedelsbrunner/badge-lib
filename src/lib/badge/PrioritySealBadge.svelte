<script lang="ts">
  import BadgeRoundCircularText from './BadgeRoundCircularText.svelte';
  import type { BadgeData } from './types';
  import type { RoundCircularTextVariant } from './BadgeRoundCircularText.svelte';

  /**
   * Backwards-compatible wrapper around the circular-text seal badge.
   * Prefer using `BadgeRoundCircularText` directly.
   */
  export let badge: BadgeData;
  export let variant: RoundCircularTextVariant = 'outlined';

  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let size: number = 76;
</script>

<BadgeRoundCircularText {badge} {variant} {ringText} {repeat} {separator} {size} />

