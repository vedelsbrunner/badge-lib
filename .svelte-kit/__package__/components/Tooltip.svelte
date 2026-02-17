<script>import { tick } from "svelte";
export let placement = "top";
export let openDelayMs = 80;
export let maxWidthPx = 280;
let open = false;
let timer = null;
let triggerEl = null;
let tooltipEl = null;
const GAP_PX = 10;
const VIEWPORT_MARGIN_PX = 8;
let effectivePlacement = placement;
let tooltipStyle = "";
let arrowStyle = "";
const GLOBAL_STYLE_ID = "badge-lib-tooltip-global-v1";
const GLOBAL_CSS = `
.bl_tooltip {
  display: block;
  position: fixed;
  z-index: var(--vis-badge-tooltip-z-index, 2000);
  width: max-content;
  max-width: min(var(--bl-tooltip-max-width, 280px), 64vw);
  padding: var(--vis-badge-tooltip-padding, 7px 9px);
  border-radius: var(--vis-badge-tooltip-radius, 9px);
  border: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  color: var(--vis-badge-tooltip-fg, #ffffff);
  box-shadow: var(--vis-badge-tooltip-shadow, 0 10px 24px rgba(17, 24, 39, 0.2));
  font-family: var(
    --vis-badge-tooltip-font-family,
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif
  );
  font-size: var(--vis-badge-tooltip-font-size, 12px);
  line-height: var(--vis-badge-tooltip-line-height, 1.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.bl_tooltip[data-open='true'] {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.bl_tooltipArrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  border-left: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  border-top: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  transform: rotate(45deg);
}

.bl_tooltip[data-placement='top'] .bl_tooltipArrow {
  bottom: -4px;
}

.bl_tooltip[data-placement='bottom'] .bl_tooltipArrow {
  top: -4px;
  transform: rotate(225deg);
}

.bl_tooltip[data-placement='left'] .bl_tooltipArrow {
  right: -4px;
  transform: rotate(135deg);
}

.bl_tooltip[data-placement='right'] .bl_tooltipArrow {
  left: -4px;
  transform: rotate(-45deg);
}
`;
function ensureGlobalStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(GLOBAL_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = GLOBAL_STYLE_ID;
  style.textContent = GLOBAL_CSS;
  document.head.appendChild(style);
}
function portalToBody(node) {
  ensureGlobalStyles();
  if (typeof document === "undefined") return;
  document.body.appendChild(node);
  return {
    destroy() {
      node.remove();
    }
  };
}
function onEnter() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => open = true, openDelayMs);
}
function onLeave() {
  if (timer) clearTimeout(timer);
  timer = null;
  open = false;
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function computePlacement(preferred, r, t) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const fitsTop = r.top - GAP_PX - t.height >= VIEWPORT_MARGIN_PX;
  const fitsBottom = r.bottom + GAP_PX + t.height <= vh - VIEWPORT_MARGIN_PX;
  const fitsLeft = r.left - GAP_PX - t.width >= VIEWPORT_MARGIN_PX;
  const fitsRight = r.right + GAP_PX + t.width <= vw - VIEWPORT_MARGIN_PX;
  if (preferred === "top" && !fitsTop && fitsBottom) return "bottom";
  if (preferred === "bottom" && !fitsBottom && fitsTop) return "top";
  if (preferred === "left" && !fitsLeft && fitsRight) return "right";
  if (preferred === "right" && !fitsRight && fitsLeft) return "left";
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
  if (effectivePlacement === "top") {
    top = r.top - GAP_PX - t.height;
    left = r.left + r.width / 2 - t.width / 2;
  } else if (effectivePlacement === "bottom") {
    top = r.bottom + GAP_PX;
    left = r.left + r.width / 2 - t.width / 2;
  } else if (effectivePlacement === "left") {
    top = r.top + r.height / 2 - t.height / 2;
    left = r.left - GAP_PX - t.width;
  } else {
    top = r.top + r.height / 2 - t.height / 2;
    left = r.right + GAP_PX;
  }
  left = clamp(left, VIEWPORT_MARGIN_PX, vw - t.width - VIEWPORT_MARGIN_PX);
  top = clamp(top, VIEWPORT_MARGIN_PX, vh - t.height - VIEWPORT_MARGIN_PX);
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const arrowLeft = clamp(cx - left - 4, 10, t.width - 10);
  const arrowTop = clamp(cy - top - 4, 10, t.height - 10);
  arrowStyle = effectivePlacement === "top" || effectivePlacement === "bottom" ? `left:${arrowLeft}px;` : `top:${arrowTop}px;`;
  tooltipStyle = `left:${Math.round(left)}px;top:${Math.round(top)}px;`;
}
$: if (open) reposition();
$: if (!open) {
  tooltipStyle = "";
  arrowStyle = "";
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
    class="bl_tooltip"
    role="tooltip"
    aria-hidden={!open}
    data-open={open}
    data-placement={effectivePlacement}
    bind:this={tooltipEl}
    style={`${tooltipStyle}--bl-tooltip-max-width:${Math.max(120, maxWidthPx)}px;`}
    use:portalToBody
  >
    <div class="content">
      <slot name="content" />
    </div>
    <span class="bl_tooltipArrow" aria-hidden="true" style={arrowStyle} />
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

  .content {
    display: block;
    width: 100%;
  }
</style>
