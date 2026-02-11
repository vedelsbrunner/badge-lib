<script context="module" lang="ts">
  import type { MonoVariant } from './BadgeMono.svelte';
  import type { MiniVariant } from './BadgeMini.svelte';
  import type { RoundVariant } from './BadgeRound.svelte';
  import type { RoundCircularTextVariant } from './BadgeRoundCircularText.svelte';

  export type BadgeType = 'mono' | 'mini' | 'round' | 'roundcirculartext';
  export type BadgeVariant = MonoVariant | MiniVariant | RoundVariant | RoundCircularTextVariant;
</script>

<script lang="ts">
  import BadgeMono from './BadgeMono.svelte';
  import BadgeMini from './BadgeMini.svelte';
  import BadgeRound from './BadgeRound.svelte';
  import BadgeRoundCircularText from './BadgeRoundCircularText.svelte';
  import type { BadgeData } from './types';
  import type { MonoVariant } from './BadgeMono.svelte';
  import type { MiniVariant } from './BadgeMini.svelte';
  import type { RoundVariant } from './BadgeRound.svelte';
  import type { RoundCircularTextVariant } from './BadgeRoundCircularText.svelte';

  export let badge: BadgeData;
  export let type: BadgeType = 'mono';

  // Interpreted based on `type`.
  export let variant: BadgeVariant | undefined = undefined;
  export let size: number | undefined = undefined;

  // Svelte template expressions are JS (not TS), so keep any TS casts in <script>.
  $: monoVariant = (variant ?? 'filled') as MonoVariant;
  $: miniVariant = (variant ?? 'outlined') as MiniVariant;
  $: roundVariant = (variant ?? 'solid') as RoundVariant;
  $: roundCircularTextVariant = (variant ?? 'outlined') as RoundCircularTextVariant;

  // mini-only
  export let fixed: boolean = false;
  export let offsetPx: number = 16;
  export let expandDirection: 'left' | 'right' = 'left';

  // roundcirculartext-only
  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let sealFontScale: number = 0.12;
</script>

{#if type === 'mono'}
  <BadgeMono badge={badge} variant={monoVariant} />
{:else if type === 'mini'}
  <BadgeMini
    badge={badge}
    variant={miniVariant}
    {fixed}
    {offsetPx}
    {expandDirection}
  />
{:else if type === 'round'}
  <BadgeRound badge={badge} variant={roundVariant} size={size ?? 44} />
{:else}
  <BadgeRoundCircularText
    badge={badge}
    variant={roundCircularTextVariant}
    {ringText}
    {repeat}
    {separator}
    size={size ?? 76}
    {sealFontScale}
  />
{/if}

