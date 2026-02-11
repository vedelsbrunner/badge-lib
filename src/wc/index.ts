import VisBadge from './VisBadge.ce.svelte';

// If the component has `customElement.tag` set, importing may auto-define it.
// Keep this idempotent so consumers can import multiple times safely.
if (!customElements.get('vis-badge')) {
  const ctor = (VisBadge as unknown as { element: CustomElementConstructor }).element;
  customElements.define('vis-badge', ctor);
}

export {};

