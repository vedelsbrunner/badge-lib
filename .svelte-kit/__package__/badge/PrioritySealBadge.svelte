<script>import Badge from "./Badge.svelte";
export let badge;
export let variant = "outlined";
export let onClick = null;
export let ringText = null;
export let repeat = 2;
export let separator = " \u2022 ";
export let size = 76;
export let rotationMs = 2e5;
</script>

<Badge
  {badge}
  type="big"
  bigStyle="seal"
  sealVariant={variant}
  {onClick}
  {ringText}
  {repeat}
  {separator}
  sealSize={size}
  {rotationMs}
/>

