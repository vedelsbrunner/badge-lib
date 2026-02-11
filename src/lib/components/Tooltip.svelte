<script context="module" lang="ts">
  export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
</script>

<script lang="ts">
  import { tick } from 'svelte';

  export let placement: TooltipPlacement = 'top';
  export let openDelayMs = 80;

  let open = false;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let triggerEl: HTMLSpanElement | null = null;
  let tooltipEl: HTMLSpanElement | null = null;

  const GAP_PX = 10;
  const VIEWPORT_MARGIN_PX = 8;

  let effectivePlacement: TooltipPlacement = placement;
  let tooltipStyle = '';
  let arrowStyle = '';

  function onEnter() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => (open = true), openDelayMs);
  }

  function onLeave() {
    if (timer) clearTimeout(timer);
    timer = null;
    open = false;
  }

  function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
  }

  function computePlacement(preferred: TooltipPlacement, r: DOMRect, t: DOMRect): TooltipPlacement {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const fitsTop = r.top - GAP_PX - t.height >= VIEWPORT_MARGIN_PX;
    const fitsBottom = r.bottom + GAP_PX + t.height <= vh - VIEWPORT_MARGIN_PX;
    const fitsLeft = r.left - GAP_PX - t.width >= VIEWPORT_MARGIN_PX;
    const fitsRight = r.right + GAP_PX + t.width <= vw - VIEWPORT_MARGIN_PX;

    if (preferred === 'top' && !fitsTop && fitsBottom) return 'bottom';
    if (preferred === 'bottom' && !fitsBottom && fitsTop) return 'top';
    if (preferred === 'left' && !fitsLeft && fitsRight) return 'right';
    if (preferred === 'right' && !fitsRight && fitsLeft) return 'left';
    return preferred;
  }

  async function reposition() {
    if (!open || !triggerEl || !tooltipEl) return;
    await tick();

    const r = triggerEl.getBoundingClientRect();
    const t = tooltipEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    effectivePlacement = computePlacement(placement, r, t);

    let left = 0;
    let top = 0;

    if (effectivePlacement === 'top') {
      top = r.top - GAP_PX - t.height;
      left = r.left + r.width / 2 - t.width / 2;
    } else if (effectivePlacement === 'bottom') {
      top = r.bottom + GAP_PX;
      left = r.left + r.width / 2 - t.width / 2;
    } else if (effectivePlacement === 'left') {
      top = r.top + r.height / 2 - t.height / 2;
      left = r.left - GAP_PX - t.width;
    } else {
      top = r.top + r.height / 2 - t.height / 2;
      left = r.right + GAP_PX;
    }

    left = clamp(left, VIEWPORT_MARGIN_PX, vw - t.width - VIEWPORT_MARGIN_PX);
    top = clamp(top, VIEWPORT_MARGIN_PX, vh - t.height - VIEWPORT_MARGIN_PX);

    // Arrow position inside tooltip (keep it pointing at the trigger).
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const arrowLeft = clamp(cx - left - 4, 10, t.width - 10);
    const arrowTop = clamp(cy - top - 4, 10, t.height - 10);
    arrowStyle =
      effectivePlacement === 'top' || effectivePlacement === 'bottom'
        ? `left:${arrowLeft}px;`
        : `top:${arrowTop}px;`;

    tooltipStyle = `left:${Math.round(left)}px;top:${Math.round(top)}px;`;
  }

  $: if (open) reposition();
  $: if (!open) {
    tooltipStyle = '';
    arrowStyle = '';
    effectivePlacement = placement;
  }

  function onWindowChange() {
    reposition();
  }
</script>

<svelte:window on:resize={onWindowChange} on:scroll={onWindowChange} />

<span class="tooltipWrap" role="group" on:mouseenter={onEnter} on:mouseleave={onLeave} on:focusin={onEnter} on:focusout={onLeave}>
  <span class="trigger" bind:this={triggerEl}>
    <slot name="trigger" />
  </span>

  <span
    class="tooltip {open ? 'open' : ''} {effectivePlacement}"
    role="tooltip"
    aria-hidden={!open}
    bind:this={tooltipEl}
    style={tooltipStyle}
  >
    <span class="content">
      <slot name="content" />
    </span>
    <span class="arrow" aria-hidden="true" style={arrowStyle} />
  </span>
</span>

<style>
  .tooltipWrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
  }

  .tooltip {
    display: block;
    position: fixed;
    z-index: 2000;
    width: max-content;
    max-width: min(280px, 64vw);
    padding: 7px 9px;
    border-radius: 9px;
    border: 1px solid rgba(17, 24, 39, 0.14);
    background: rgba(17, 24, 39, 0.96);
    color: #ffffff;
    box-shadow: 0 10px 24px rgba(17, 24, 39, 0.2);
    font-size: 12px;
    line-height: 1.3;

    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    pointer-events: none;
    transition: opacity 130ms ease, transform 130ms ease;
  }

  .tooltip.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(17, 24, 39, 0.96);
    border-left: 1px solid rgba(17, 24, 39, 0.14);
    border-top: 1px solid rgba(17, 24, 39, 0.14);
    transform: rotate(45deg);
  }

  .tooltip.top .arrow {
    bottom: -4px;
  }

  .tooltip.bottom .arrow {
    top: -4px;
    transform: rotate(225deg);
  }

  .tooltip.left .arrow {
    right: -4px;
    transform: rotate(135deg);
  }

  .tooltip.right .arrow {
    left: -4px;
    transform: rotate(-45deg);
  }
</style>

