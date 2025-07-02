export type LegendPayloadItem = {
  color: string;
  type: string;
  value: string;
  id?: string;
};
export type ActivityLegend = {
  payload?: LegendPayloadItem[];
};
