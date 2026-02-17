<script>import { createEventDispatcher } from "svelte";
import Tooltip from "../components/Tooltip.svelte";
import BadgeIcon from "./icons/BadgeIcon.svelte";
export let badge;
export let options = void 0;
export let interactive = false;
const dispatch = createEventDispatcher();
$: placement = options?.placement ?? "top";
$: openDelayMs = Number.isFinite(options?.openDelayMs) ? Number(options?.openDelayMs) : 80;
$: maxWidthPx = Number.isFinite(options?.maxWidthPx) ? Number(options?.maxWidthPx) : 280;
$: contentMode = options?.contentMode === "labelAndDescription" ? "labelAndDescription" : "description";
$: enabled = options?.enabled ?? true;
$: showTooltip = enabled && Boolean(badge?.description || badge?.actionText);
$: hintIcon = badge?.actionIcon ?? null;
function onActivate(source) {
  if (!interactive || !badge) return;
  dispatch("activate", { badge, source });
}
function onTriggerClick(event) {
  onActivate(event.detail === 0 ? "keyboard" : "pointer");
}
</script>

{#if showTooltip}
  <Tooltip {placement} {openDelayMs} {maxWidthPx}>
    <span slot="trigger">
      {#if interactive}
        <button class="triggerButton interactive" type="button" aria-label={badge?.label} on:click={onTriggerClick}>
          <slot name="trigger" />
        </button>
      {:else}
        <slot name="trigger" />
      {/if}
    </span>
    <div slot="content" class="tooltipContent">
      {#if contentMode === 'labelAndDescription'}
        <strong>{badge.label}</strong>
      {/if}
      {#if badge.description}
        <span class="desc">{badge.description}</span>
      {/if}
      {#if badge.actionText}
        <div class="actionHint" aria-hidden="true">
          <div class="actionRow">
            {#if hintIcon}
              <span class="actionIcon" style="display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;line-height:0;">
                <BadgeIcon name={hintIcon} size={14} fg="rgba(255, 255, 255, 0.92)" bg={null} bgOpacity={0} />
              </span>
            {/if}
            <span class="actionText" style="display:inline-flex;align-items:center;justify-content:center;text-align:center;">{badge.actionText}</span>
          </div>
        </div>
      {/if}
    </div>
  </Tooltip>
{:else}
  {#if interactive}
    <button class="triggerButton interactive" type="button" aria-label={badge?.label} on:click={onTriggerClick}>
      <slot name="trigger" />
    </button>
  {:else}
    <span>
      <slot name="trigger" />
    </span>
  {/if}
{/if}

<style>
  .triggerButton {
    all: unset;
    display: inline-flex;
    align-items: center;
  }

  .interactive {
    cursor: pointer;
  }

  .tooltipContent {
    display: block;
    width: 100%;
  }

  .desc {
    display: block;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  .actionHint {
    display: grid;
    place-items: center;
    margin-top: 7px;
    padding-top: 7px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    opacity: 0.95;
    font-size: 11px;
    line-height: 1.35;
    width: 100%;
    text-align: center;
    font-weight: 560;
    letter-spacing: 0.01em;
  }

  .actionRow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: fit-content;
    max-width: 100%;
    margin-inline: auto;
    text-align: center;
  }

  .actionText {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: pre-line;
    overflow-wrap: anywhere;
    line-height: 1.35;
  }

  .actionIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 14px;
    height: 14px;
    line-height: 0;
  }

  .actionIcon :global(svg) {
    display: block;
    width: 14px;
    height: 14px;
  }
</style>
