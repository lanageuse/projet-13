import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';

/**
 * Propriétés de l'infobulle personnalisée pour le graphique de sessions.
 */
export type SessionTooltip = {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
};
