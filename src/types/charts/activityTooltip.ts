import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';

export type ActivityTooltip = {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
};
