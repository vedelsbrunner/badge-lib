<script lang="ts">
  import {
    Badge,
    MiniBadges,
    PriorityBadge,
    PrioritySealBadge,
    BACKGROUND_READING_BADGE,
    BOX_PLOTS_BADGE,
    COMPARISON_AVERAGE_BADGE,
    INTERACTIVE_BADGE,
    MAJOR_FINDING_BADGE,
    MODELLED_DATA_BADGE,
    OPEN_DATA_BADGE,
    RAW_DATA_AVAILABLE_BADGE
  } from './lib';
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
      <Badge badge={BOX_PLOTS_BADGE} onClick={{ href: 'https://example.com', external: true, hint: { text: 'Open docs', icon: 'info' } }} />
      <Badge badge={INTERACTIVE_BADGE} onClick={{ action: () => alert('Action clicked'), hint: { text: 'Run action', icon: 'info' } }} />
    </div>
  </section>

  <section>
    <h2>Mini badges cluster</h2>
    <MiniBadges badges={[MAJOR_FINDING_BADGE, INTERACTIVE_BADGE, MODELLED_DATA_BADGE, BACKGROUND_READING_BADGE]} fixed={false} />
  </section>

  <section>
    <h2>Big badges</h2>
    <div class="row big">
      <PriorityBadge badge={MAJOR_FINDING_BADGE} variant="solid" size={54} />
      <PriorityBadge badge={BACKGROUND_READING_BADGE} variant="ring" size={54} />
      <PrioritySealBadge badge={OPEN_DATA_BADGE} variant="outlined" size={88} ringText="Open data" />
      <PrioritySealBadge badge={MODELLED_DATA_BADGE} variant="filled" size={88} ringText="Modelled" />
    </div>
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
</style>

