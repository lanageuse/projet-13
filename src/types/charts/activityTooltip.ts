import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';

/**
 * Propriétés de l'infobulle personnalisée pour le graphique d'activité.
 */
export type ActivityTooltip = {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
};
