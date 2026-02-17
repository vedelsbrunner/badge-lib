<script context="module" lang="ts">
  export type BadgeType = import('./model').BadgeType;
  export type BadgeVariant = import('./model').BadgeVariant;
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BadgeMono from './BadgeMono.svelte';
  import BadgeMini from './BadgeMini.svelte';
  import BadgeRound from './BadgeRound.svelte';
  import BadgeRoundCircularText from './BadgeRoundCircularText.svelte';
  import { resolveTooltipOptions } from './model';
  import type { BadgeActivateDetail, BadgeData } from './types';
  import type {
    BadgeCorners,
    BadgeTooltipOptions,
    BadgeType as BadgeTypeDef,
    BadgeVariant as BadgeVariantDef,
    MiniVariant,
    MonoVariant,
    RoundCircularTextVariant,
    RoundVariant
  } from './model';
  import type { BadgeIconBgShape } from './icons/BadgeIcon.svelte';

  const dispatch = createEventDispatcher<{ activate: BadgeActivateDetail }>();

  export let badge: BadgeData;
  export let type: BadgeTypeDef = 'mono';
  export let interactive = false;
  export let corners: BadgeCorners = 'rounded';

  // Interpreted based on `type`.
  export let variant: BadgeVariantDef | undefined = undefined;
  export let size: number | undefined = undefined;

  function normalizeRoundVariant(value: BadgeVariantDef | undefined): RoundVariant {
    return value === 'ring' || value === 'double-ring' ? value : 'solid';
  }

  // Svelte template expressions are JS (not TS), so keep any TS casts in <script>.
  $: monoVariant = (variant ?? 'filled') as MonoVariant;
  $: miniVariant = (variant ?? 'outlined') as MiniVariant;
  $: roundVariant = normalizeRoundVariant(variant);
  $: roundCircularTextVariant = (variant ?? 'outlined') as RoundCircularTextVariant;

  // mini-only
  export let fixed: boolean = false;
  export let offsetPx: number = 16;
  export let expandDirection: 'left' | 'right' = 'right';
  export let iconBgShape: BadgeIconBgShape | undefined = undefined;

  // roundcirculartext-only
  export let ringText: string | null = null;
  export let repeat: number = 2;
  export let separator: string = ' • ';
  export let sealFontScale: number = 0.12;
  export let tooltip: BadgeTooltipOptions | undefined = undefined;

  $: tooltipOptions = resolveTooltipOptions(type, tooltip);

  function onActivate(event: CustomEvent<BadgeActivateDetail>) {
    dispatch('activate', event.detail);
  }
</script>

{#if type === 'mono'}
  <BadgeMono
    badge={badge}
    variant={monoVariant}
    {corners}
    tooltip={tooltipOptions}
    {interactive}
    on:activate={onActivate}
  />
{:else if type === 'mini'}
  <BadgeMini
    badge={badge}
    variant={miniVariant}
    {corners}
    {interactive}
    {fixed}
    {offsetPx}
    {expandDirection}
    iconBgShape={iconBgShape ?? 'round'}
    tooltip={tooltipOptions}
    on:activate={onActivate}
  />
{:else if type === 'round'}
  <BadgeRound
    badge={badge}
    variant={roundVariant}
    size={size ?? 44}
    tooltip={tooltipOptions}
    {interactive}
    on:activate={onActivate}
  />
{:else}
  <BadgeRoundCircularText
    badge={badge}
    variant={roundCircularTextVariant}
    tooltip={tooltipOptions}
    {interactive}
    {ringText}
    {repeat}
    {separator}
    size={size ?? 76}
    {sealFontScale}
    on:activate={onActivate}
  />
{/if}
