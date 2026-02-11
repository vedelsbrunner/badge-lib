import type { BadgeIconName } from './icons/BadgeIcon.svelte';

export type BadgeColor = string;

export type BadgeType = 'mono' | 'mini' | 'round' | 'roundcirculartext';

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

