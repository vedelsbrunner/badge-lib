<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Tooltip from '../components/Tooltip.svelte';
  import BadgeIcon from './icons/BadgeIcon.svelte';
  import type { BadgeTooltipOptions, TooltipPlacement } from './model';
  import type { BadgeActivateDetail, BadgeData } from './types';

  export let badge: BadgeData;
  export let options: BadgeTooltipOptions | undefined = undefined;
  export let interactive = false;

  const dispatch = createEventDispatcher<{ activate: BadgeActivateDetail }>();

  $: placement = (options?.placement ?? 'top') as TooltipPlacement;
  $: openDelayMs = Number.isFinite(options?.openDelayMs) ? Number(options?.openDelayMs) : 80;
  $: maxWidthPx = Number.isFinite(options?.maxWidthPx) ? Number(options?.maxWidthPx) : 280;
  $: contentMode = options?.contentMode === 'labelAndDescription' ? 'labelAndDescription' : 'description';
  $: enabled = options?.enabled ?? true;

  $: showTooltip = enabled && Boolean(badge?.description || badge?.actionText);
  $: hintIcon = badge?.actionIcon ?? null;

  function onActivate(source: BadgeActivateDetail['source']) {
    if (!interactive || !badge) return;
    dispatch('activate', { badge, source });
  }

  function onTriggerClick(event: MouseEvent) {
    onActivate(event.detail === 0 ? 'keyboard' : 'pointer');
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
    <div slot="content" class="bl_tooltipContent">
      {#if contentMode === 'labelAndDescription'}
        <strong>{badge.label}</strong>
      {/if}
      {#if badge.description}
        <span class="bl_tooltipDesc">{badge.description}</span>
      {/if}
      {#if badge.actionText}
        <div class="bl_tooltipActionHint" aria-hidden="true">
          <div class="bl_tooltipActionRow">
            {#if hintIcon}
              <span class="bl_tooltipActionIcon">
                <BadgeIcon name={hintIcon} size={13} fg="rgba(255, 255, 255, 0.92)" bg={null} bgOpacity={0} />
              </span>
            {/if}
            <span class="bl_tooltipActionText">{badge.actionText}</span>
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
</style>
