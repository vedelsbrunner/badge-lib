<script context="module"></script>

<script>import BadgeMono from "./BadgeMono.svelte";
import BadgeMini from "./BadgeMini.svelte";
import BadgeRound from "./BadgeRound.svelte";
import BadgeRoundCircularText from "./BadgeRoundCircularText.svelte";
export let badge;
export let type = "mono";
export let variant = void 0;
export let size = void 0;
$: monoVariant = variant ?? "filled";
$: miniVariant = variant ?? "outlined";
$: roundVariant = variant ?? "solid";
$: roundCircularTextVariant = variant ?? "outlined";
export let fixed = false;
export let offsetPx = 16;
export let expandDirection = "right";
export let ringText = null;
export let repeat = 2;
export let separator = " \u2022 ";
export let sealFontScale = 0.12;
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

