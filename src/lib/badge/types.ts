import type { BadgeIconName } from './icons/BadgeIcon.svelte';

export type BadgeColor = string;

export type BadgeHintIcon = 'download' | 'info';

export type BadgeHint =
  | string
  | {
      text: string;
      icon?: BadgeHintIcon;
    };

export type BadgeOnClick =
  | {
      /**
       * Destination.
       * - If external is true, this should be a full URL (https://...).
       * - If external is false/omitted, this should be an internal path (e.g. '/methods').
       */
      href: string;
      /**
       * When true, opens in a new tab.
       * When false/omitted, behaves as an internal link.
       */
      external?: boolean;
      /**
       * Optional tooltip hint for link clicks.
       */
      hint?: BadgeHint;
    }
  | {
      /**
       * Execute a local JS action (e.g., download data).
       */
      action: () => void;
      /**
       * Optional tooltip hint for action clicks.
       */
      hint?: BadgeHint;
      /**
       * Optional aria label override for accessibility.
       */
      ariaLabel?: string;
    };

export interface BadgeData {
  id?: string | number;
  label: string;
  description?: string;
  /**
   * Main color used to render the badge.
   * Accepts any valid CSS color string (e.g. '#2E7D32', 'rgb(46 125 50)', 'hsl(210 90% 40%)').
   */
  color: BadgeColor;
  /**
   * Optional icon.
   * If omitted, no icon is shown.
   */
  icon?: BadgeIconName;
  /**
   * Optional grouping/category for downstream filtering/analytics.
   * (Some badge definitions include this field.)
   */
  type?: string;
}

