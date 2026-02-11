import type { BadgeIconName } from './icons/BadgeIcon.svelte';

export type BadgeColor = string;

export type BadgeType = 'mono' | 'mini' | 'round' | 'roundcirculartext';

export interface BadgeData {
  id?: string | number;
  label: string;
  description?: string;
  /**
   * Optional hint for interactive badges (e.g. “Click to download”).
   * When set, the tooltip can show a secondary row to communicate the action.
   */
  actionText?: string;
  /**
   * Optional icon to accompany `actionText` in the tooltip.
   */
  actionIcon?: BadgeIconName;
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

