<script context="module"></script>

<script>import { createEventDispatcher } from "svelte";
import BadgeMono from "./BadgeMono.svelte";
import BadgeMini from "./BadgeMini.svelte";
import BadgeRound from "./BadgeRound.svelte";
import BadgeRoundCircularText from "./BadgeRoundCircularText.svelte";
import { resolveTooltipOptions } from "./model";
const dispatch = createEventDispatcher();
export let badge;
export let type = "mono";
export let interactive = false;
export let variant = void 0;
export let size = void 0;
function normalizeRoundVariant(value) {
  return value === "ring" || value === "double-ring" ? value : "solid";
}
$: monoVariant = variant ?? "filled";
$: miniVariant = variant ?? "outlined";
$: roundVariant = normalizeRoundVariant(variant);
$: roundCircularTextVariant = variant ?? "outlined";
export let fixed = false;
export let offsetPx = 16;
export let expandDirection = "right";
export let iconBgShape = void 0;
export let ringText = null;
export let repeat = 2;
export let separator = " \u2022 ";
export let sealFontScale = 0.12;
export let tooltip = void 0;
$: tooltipOptions = resolveTooltipOptions(type, tooltip);
function onActivate(event) {
  dispatch("activate", event.detail);
}
</script>

{#if type === 'mono'}
  <BadgeMono badge={badge} variant={monoVariant} tooltip={tooltipOptions} {interactive} on:activate={onActivate} />
{:else if type === 'mini'}
  <BadgeMini
    badge={badge}
    variant={miniVariant}
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
