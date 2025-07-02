import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';

export type SessionTooltip = {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
};
