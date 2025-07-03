/**
 * Élément d'une légende de graphique d'activité.
 */
export type LegendPayloadItem = {
  color: string;
  type: string;
  value: string;
  id?: string;
};

/**
 * Propriétés attendues pour la légende d'activité.
 */
export type ActivityLegend = {
  payload?: LegendPayloadItem[];
};
