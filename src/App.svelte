<script lang="ts">
  import type { BadgeActivateDetail, BadgeData, BadgeType } from './lib';
  import {
    BACKGROUND_READING_BADGE,
    BOX_PLOTS_BADGE,
    CORRELATION_NOT_CAUSATION_BADGE,
    INTERACTIVE_BADGE,
    MAJOR_FINDING_BADGE,
    MODELLED_DATA_BADGE,
    OPEN_DATA_BADGE,
    RAW_DATA_AVAILABLE_BADGE
  } from './lib';

  type BadgeItem = {
    badge: BadgeData;
    type: BadgeType;
    variant: string;
    size?: number;
    ringText?: string;
    repeat?: number;
  };

  type ActionIcon = 'Download' | 'ExternalLink' | 'Interactive' | 'Warning' | 'Info';

  type ShowcaseRow = {
    title: string;
    noWrap?: boolean;
    badges: BadgeItem[];
  };

  const SHOWCASE_ROWS: ShowcaseRow[] = [
    {
      title: 'Mini Badges',
      badges: [
        {
          badge: OPEN_DATA_BADGE,
          type: 'mini',
          variant: 'filled'
        },
        {
          badge: INTERACTIVE_BADGE,
          type: 'mini',
          variant: 'filled'
        },
        {
          badge: RAW_DATA_AVAILABLE_BADGE,
          type: 'mini',
          variant: 'filled'
        },
        {
          badge: MAJOR_FINDING_BADGE,
          type: 'mini',
          variant: 'filled'
        },
        {
          badge: MODELLED_DATA_BADGE,
          type: 'mini',
          variant: 'outlined'
        },
        {
          badge: BACKGROUND_READING_BADGE,
          type: 'mini',
          variant: 'outlined'
        },
        {
          badge: BOX_PLOTS_BADGE,
          type: 'mini',
          variant: 'outlined'
        },
        {
          badge: CORRELATION_NOT_CAUSATION_BADGE,
          type: 'mini',
          variant: 'outlined'
        }
      ]
    },
    {
      title: 'Mono Badges',
      badges: [
        {
          badge: MAJOR_FINDING_BADGE,
          type: 'mono',
          variant: 'filled'
        },
        {
          badge: MODELLED_DATA_BADGE,
          type: 'mono',
          variant: 'filled'
        },
        {
          badge: OPEN_DATA_BADGE,
          type: 'mono',
          variant: 'outlined'
        },
        {
          badge: BACKGROUND_READING_BADGE,
          type: 'mono',
          variant: 'outlined'
        },
        {
          badge: CORRELATION_NOT_CAUSATION_BADGE,
          type: 'mono',
          variant: 'outlined'
        }
      ]
    },
    {
      title: 'Round Badges',
      noWrap: true,
      badges: [
        {
          badge: MAJOR_FINDING_BADGE,
          type: 'round',
          variant: 'solid',
          size: 78
        },
        {
          badge: MODELLED_DATA_BADGE,
          type: 'round',
          variant: 'ring',
          size: 78
        },
        {
          badge: CORRELATION_NOT_CAUSATION_BADGE,
          type: 'round',
          variant: 'double-ring',
          size: 78
        },
        {
          badge: OPEN_DATA_BADGE,
          type: 'roundcirculartext',
          variant: 'filled',
          size: 94,
          ringText: 'Open Data',
          repeat: 3
        },
        {
          badge: INTERACTIVE_BADGE,
          type: 'roundcirculartext',
          variant: 'outlined',
          size: 94,
          ringText: 'Interactive',
          repeat: 3
        },
        {
          badge: BACKGROUND_READING_BADGE,
          type: 'roundcirculartext',
          variant: 'outlined',
          size: 94,
          ringText: 'Background',
          repeat: 3
        }
      ]
    }
  ];

  const INSTALL_SNIPPET = `<script type="module" src="https://vedelsbrunner.github.io/badge-lib/dist-wc/vis-badge.js"><\/script>
<vis-badge
  label="Open Data"
  tone="success"
  icon="OpenData"
  description="Dataset is available for download"
  type="mini"
  variant="filled"
></vis-badge>`;

  let lastAction = 'None yet';

  function actionUrlForBadge(item: BadgeItem): string | null {
    if (item.badge.icon === 'OpenData') return 'https://www.peaceagreements.org';
    if (item.badge.label === 'Raw Data Available') return 'https://www.peaceagreements.org';
    return null;
  }

  function actionTextForBadge(item: BadgeItem): string {
    if (item.badge.actionText) return item.badge.actionText;
    if (item.badge.icon === 'OpenData') return 'Open source data';
    if (item.badge.label === 'Raw Data Available') return 'Download raw data';
    if (item.badge.icon === 'Interactive') return 'Explore interactive view';
    if (item.badge.icon === 'Warning') return 'Review caution notes';
    return 'View details';
  }

  function actionIconForBadge(item: BadgeItem): ActionIcon {
    if (item.badge.actionIcon === 'Download') return 'Download';
    if (item.badge.actionIcon === 'ExternalLink') return 'ExternalLink';
    if (item.badge.actionIcon === 'Interactive') return 'Interactive';
    if (item.badge.actionIcon === 'Warning') return 'Warning';
    if (item.badge.actionIcon === 'Info') return 'Info';
    if (item.badge.icon === 'OpenData' || item.badge.label === 'Raw Data Available') return 'Download';
    if (item.badge.icon === 'Interactive') return 'Interactive';
    if (item.badge.icon === 'Warning') return 'Warning';
    return 'ExternalLink';
  }

  function onBadgeActivate(item: BadgeItem, event: Event) {
    const detail = (event as CustomEvent<BadgeActivateDetail>).detail;
    const source = detail?.source ?? 'pointer';
    const actionText = actionTextForBadge(item);
    const url = actionUrlForBadge(item);

    lastAction = `${item.badge.label}: ${actionText} (${source})`;

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  function badgeActivateHandler(item: BadgeItem) {
    return (event: Event) => onBadgeActivate(item, event);
  }
</script>

<main class="demo">
  <header class="hero">
    <p class="eyebrow">badge-lib</p>
    <h1>Static Badge Showcase</h1>
    <p class="lede">A clean visual pass of the core badge styles, ordered from most practical to most expressive.</p>
  </header>

  <section class="gallery">
    {#each SHOWCASE_ROWS as row}
      <article class="row-card">
        <div class="row-header">
          <h2>{row.title}</h2>
        </div>

        <div class="badge-row" class:nowrap={row.noWrap} aria-label={`${row.title} examples`}>
          {#each row.badges as item}
            <vis-badge
              badge={item.badge}
              type={item.type}
              variant={item.variant}
              size={item.size}
              ringText={item.ringText}
              repeat={item.repeat}
              interactive={true}
              actionText={actionTextForBadge(item)}
              actionIcon={actionIconForBadge(item)}
              on:badge-activate={badgeActivateHandler(item)}
            ></vis-badge>
          {/each}
        </div>
      </article>
    {/each}
  </section>

  <section class="actions">
    <p>Last action: {lastAction}</p>
  </section>

  <section class="install">
    <h2>Install</h2>
    <p>Include the web component script:</p>
    <pre><code>{INSTALL_SNIPPET}</code></pre>
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

  :global(body) {
    margin: 0;
    background: #f6f8fb;
    color: #0f172a;
  }

  .demo {
    max-width: 1120px;
    margin: 0 auto;
    padding: 32px 20px 40px;
    font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  }

  .hero {
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 14px;
    padding: 22px 24px;
  }

  .eyebrow {
    margin: 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 11px;
    color: rgba(15, 23, 42, 0.56);
  }

  h1 {
    margin: 0;
    font-size: 32px;
    line-height: 1.1;
  }

  .lede {
    margin: 12px 0 0;
    font-size: 15px;
    max-width: 670px;
    color: rgba(15, 23, 42, 0.74);
  }

  .gallery {
    margin-top: 14px;
    display: grid;
    gap: 12px;
  }

  .row-card {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 12px;
    background: #ffffff;
    padding: 14px;
  }

  .row-header {
    margin-bottom: 12px;
  }

  h2 {
    margin: 0;
    font-size: 18px;
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    min-height: 74px;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 10px;
    background: rgba(248, 250, 253, 0.72);
    padding: 14px;
  }

  .badge-row.nowrap {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .install {
    margin-top: 14px;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 12px;
    background: #ffffff;
    padding: 16px;
  }

  .actions {
    margin-top: 14px;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 12px;
    background: #ffffff;
    padding: 12px 16px;
  }

  .actions p {
    margin: 0;
    font-size: 13px;
    color: rgba(15, 23, 42, 0.7);
  }

  .install p {
    margin: 8px 0 10px;
    font-size: 14px;
    color: rgba(15, 23, 42, 0.66);
  }

  pre {
    margin: 0;
    background: #0f172a;
    color: #e5eefc;
    border-radius: 10px;
    padding: 12px;
    overflow: auto;
  }

  code {
    font-family: 'IBM Plex Mono', Menlo, Consolas, monospace;
    font-size: 12px;
    line-height: 1.5;
  }
</style>
