<script lang="ts">
  import { Badge } from './lib';
  import {
    BACKGROUND_READING_BADGE,
    BOX_PLOTS_BADGE,
    COMPARISON_AVERAGE_BADGE,
    INTERACTIVE_BADGE,
    MAJOR_FINDING_BADGE,
    MODELLED_DATA_BADGE,
    OPEN_DATA_BADGE,
    RAW_DATA_AVAILABLE_BADGE
  } from './demo/badges';

  let lastAction: string = '—';

  function onDemoAction(label: string) {
    lastAction = label;
  }

  function onKeyActivate(e: KeyboardEvent, label: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onDemoAction(label);
    }
  }

  function keyActivate(label: string) {
    return (e: KeyboardEvent) => onKeyActivate(e, label);
  }
</script>

<main>
  <h1>badge-lib demo</h1>

  <section>
    <h2>Normal badges</h2>
    <div class="row">
      <Badge badge={MAJOR_FINDING_BADGE} />
      <Badge badge={OPEN_DATA_BADGE} variant="outlined" />
      <Badge badge={RAW_DATA_AVAILABLE_BADGE} />
      <Badge badge={MODELLED_DATA_BADGE} />
      <Badge badge={COMPARISON_AVERAGE_BADGE} variant="outlined" />
      <Badge badge={BOX_PLOTS_BADGE} />
      <Badge badge={INTERACTIVE_BADGE} />
    </div>
  </section>

  <section>
    <h2>Mini badges cluster</h2>
    <div class="row">
      <Badge type="mini" badge={MAJOR_FINDING_BADGE} />
      <Badge type="mini" badge={INTERACTIVE_BADGE} />
      <Badge type="mini" badge={MODELLED_DATA_BADGE} />
      <Badge type="mini" badge={BACKGROUND_READING_BADGE} />
    </div>
  </section>

  <section>
    <h2>Big badges</h2>
    <div class="row big">
      <Badge type="round" badge={MAJOR_FINDING_BADGE} variant="solid" size={54} />
      <Badge type="round" badge={BACKGROUND_READING_BADGE} variant="ring" size={54} />
      <Badge type="roundcirculartext" badge={OPEN_DATA_BADGE} variant="outlined" size={88} ringText="Open data" />
      <Badge type="roundcirculartext" badge={MODELLED_DATA_BADGE} variant="filled" size={88} ringText="Modelled" />
    </div>
  </section>

  <section>
    <h2>Web component</h2>
    <div class="row big">
      <vis-badge
        type="mono"
        variant="filled"
        label={MAJOR_FINDING_BADGE.label}
        color={MAJOR_FINDING_BADGE.color}
        icon={MAJOR_FINDING_BADGE.icon}
        description={MAJOR_FINDING_BADGE.description}
      />
      <vis-badge
        type="mono"
        variant="outlined"
        label={OPEN_DATA_BADGE.label}
        color={OPEN_DATA_BADGE.color}
        icon={OPEN_DATA_BADGE.icon}
        description={OPEN_DATA_BADGE.description}
        actionIcon="Download"
        actionText="Click to download"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Download (web component)')}
        on:keydown={keyActivate('Download (web component)')}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        label={INTERACTIVE_BADGE.label}
        color={INTERACTIVE_BADGE.color}
        icon={INTERACTIVE_BADGE.icon}
        description={INTERACTIVE_BADGE.description}
        actionIcon="Interactive"
        actionText="Click to explore"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Explore (web component)')}
        on:keydown={keyActivate('Explore (web component)')}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        label={MODELLED_DATA_BADGE.label}
        color={MODELLED_DATA_BADGE.color}
        icon={MODELLED_DATA_BADGE.icon}
        description={MODELLED_DATA_BADGE.description}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        label="Download Chart"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="rgb(2, 136, 209)"
        icon="Download"
        actionIcon="Download"
        actionText="Click to download"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Download Chart (web component)')}
        on:keydown={keyActivate('Download Chart (web component)')}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        label="Expanded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="rgb(2, 136, 209)"
        icon="Expand"
        actionIcon="Expand"
        actionText="Click to expand"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Expanded (web component)')}
        on:keydown={keyActivate('Expanded (web component)')}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        icon-bg-shape="square"
        label="Download Chart (square)"
        description="Same badge but square icon background."
        color="rgb(2, 136, 209)"
        icon="Download"
        actionIcon="Download"
        actionText="Click to download"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Download Chart (square)')}
        on:keydown={keyActivate('Download Chart (square)')}
      />
      <vis-badge
        type="mini"
        variant="outlined"
        icon-bg-shape="square"
        label="Expanded (square)"
        description="Same badge but square icon background."
        color="rgb(2, 136, 209)"
        icon="Expand"
        actionIcon="Expand"
        actionText="Click to expand"
        role="button"
        tabindex="0"
        on:click={() => onDemoAction('Expanded (square)')}
        on:keydown={keyActivate('Expanded (square)')}
      />
      <vis-badge
        type="mini"
        variant="filled"
        icon-bg-shape="square"
        label="Open Data (square)"
        description="Open data: square icon background."
        color="rgb(46, 125, 50)"
        icon="OpenData"
      />
      <vis-badge
        type="mini"
        variant="filled"
        icon-bg-shape="square"
        label="Interactive (square)"
        description="Interactive: square icon background."
        color="rgb(2, 136, 209)"
        icon="Interactive"
      />
      <vis-badge
        type="mini"
        variant="outlined"
        icon-bg-shape="square"
        label="Warning (square)"
        description="Warning: square icon background."
        color="rgb(237, 108, 2)"
        icon="Warning"
      />
      <vis-badge
        type="mini"
        variant="outlined"
        icon-bg-shape="square"
        label="Info (square)"
        description="Info: square icon background."
        color="rgb(2, 136, 209)"
        icon="Info"
      />
      <vis-badge
        type="round"
        variant="solid"
        size={54}
        label={MAJOR_FINDING_BADGE.label}
        color={MAJOR_FINDING_BADGE.color}
        icon={MAJOR_FINDING_BADGE.icon}
        description={MAJOR_FINDING_BADGE.description}
      />
      <vis-badge
        type="round"
        variant="ring"
        size={54}
        label={BACKGROUND_READING_BADGE.label}
        color={BACKGROUND_READING_BADGE.color}
        icon={BACKGROUND_READING_BADGE.icon}
        description={BACKGROUND_READING_BADGE.description}
      />
      <div>
        <vis-badge
          type="roundcirculartext"
          variant="outlined"
          size={88}
          ringText="Open data"
          label={OPEN_DATA_BADGE.label}
          color={OPEN_DATA_BADGE.color}
          icon={OPEN_DATA_BADGE.icon}
          description={OPEN_DATA_BADGE.description}
        />
      </div>
      <div>
        <vis-badge
          type="roundcirculartext"
          variant="filled"
          size={88}
          ringText="Modelled"
          label={MODELLED_DATA_BADGE.label}
          color={MODELLED_DATA_BADGE.color}
          icon={MODELLED_DATA_BADGE.icon}
          description={MODELLED_DATA_BADGE.description}
        />
      </div>
    </div>
    <p class="demoAction">Last action: {lastAction}</p>
  </section>

</main>

<style>
  main {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    padding: 20px;
    color: #111827;
  }

  h1 {
    margin: 0 0 14px 0;
    font-size: 18px;
    font-weight: 750;
  }

  h2 {
    margin: 18px 0 10px 0;
    font-size: 14px;
    font-weight: 750;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }

  .row.big {
    gap: 18px;
  }

  section {
    border: 1px solid rgba(17, 24, 39, 0.08);
    border-radius: 12px;
    padding: 12px;
    background: rgba(17, 24, 39, 0.02);
    margin-top: 12px;
  }

  .demoAction {
    margin-top: 10px;
    font-size: 12px;
    opacity: 0.85;
  }
</style>

