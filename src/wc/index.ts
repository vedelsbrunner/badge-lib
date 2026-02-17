import VisBadge from './VisBadge.ce.svelte';

// If the component has `customElement.tag` set, importing may auto-define it.
// Keep this idempotent so consumers can import multiple times safely.
if (!customElements.get('vis-badge')) {
  const ctor = (VisBadge as unknown as { element: CustomElementConstructor }).element;
  customElements.define('vis-badge', ctor);
}

// In dev, custom elements cannot be redefined after first registration.
// Force a full reload when the CE module updates so style/markup changes are visible.
const hot = (
  import.meta as ImportMeta & {
    hot?: {
      accept: (dep: string, cb: () => void) => void;
    };
  }
).hot;

if (hot) {
  hot.accept('./VisBadge.ce.svelte', () => {
    window.location.reload();
  });
}

export {};
