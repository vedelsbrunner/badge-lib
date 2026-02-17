# badge-lib

Reusable badge components extracted from the CoBenefits project.

## Usage
```html
<script type="module" src="https://vedelsbrunner.github.io/badge-lib/dist-wc/vis-badge.js"></script>
<vis-badge
  label="Open Data"
  tone="success"
  icon="OpenData"
  description="Dataset is available for download"
  type="mini"
  variant="filled"
></vis-badge>
```

## Main Props
- Content: `label`, `description`, `icon`, `tone`, `color`
- Type: `type` (`mono`, `mini`, `round`, `roundcirculartext`)
- Variant: `variant`
- Size/layout: `size`, `fixed`, `offsetPx`, `expandDirection`, `iconBgShape`, `ringText`, `repeat`, `separator`, `sealFontScale`
- Interaction hints: `interactive`, `actionText`, `actionIcon`
- Tooltip: `tooltipMode`, `tooltipPlacement`, `tooltipDelayMs`, `tooltipMaxWidthPx`

## Events
- Svelte API: `<Badge>` emits `activate` when `interactive` is true.
- Web component: when `interactive` is true, `<vis-badge>` emits `badge-activate`.
- `event.detail` shape: `{ badge, source }` where `source` is `'pointer'` or `'keyboard'`.

```js
const el = document.querySelector('vis-badge');
el.addEventListener('badge-activate', (event) => {
  console.log(event.detail.badge.label, event.detail.source);
});
```

## Optional Object API
If you prefer JS objects instead of many attributes, `badge` is still supported:
```js
const el = document.createElement('vis-badge');
el.badge = {
  label: 'Download',
  description: 'Download this chart as PNG',
  icon: 'Download',
  color: 'rgb(2, 136, 209)'
};
el.type = 'mini';
el.variant = 'filled';
```

## Multiline Tooltip Text
`description` and `actionText` support line breaks.

Use JavaScript:
```js
el.description = 'First line\\nSecond line\\n\\nThird paragraph';
```

Or HTML attributes:
```html
<vis-badge description="First line&#10;Second line"></vis-badge>
```

## Tooltip theming (advanced)
Override CSS custom properties globally:
- `--vis-badge-tooltip-bg`
- `--vis-badge-tooltip-fg`
- `--vis-badge-tooltip-border`
- `--vis-badge-tooltip-shadow`
- `--vis-badge-tooltip-font-family`
- `--vis-badge-tooltip-font-size`
- `--vis-badge-tooltip-line-height`
- `--vis-badge-tooltip-padding`
- `--vis-badge-tooltip-radius`
- `--vis-badge-tooltip-z-index`

## Web component release artifacts
Run:

```bash
npm run build:wc:release
```

This produces:
- `dist-wc/vis-badge.js` (latest),
- `dist-wc/vis-badge.v<version>.js` (semver alias),
- `dist-wc/vis-badge.v<version>.<hash>.js` (immutable),
- `dist-wc/manifest.json` (file names for consumers).
