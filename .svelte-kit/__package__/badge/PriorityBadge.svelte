<script>import Badge from "./Badge.svelte";
export let badge;
export let variant = "solid";
export let size = 44;
export let onClick = null;
</script>

<Badge {badge} type="big" bigStyle="round" bigVariant={variant} bigSize={size} {onClick} />

