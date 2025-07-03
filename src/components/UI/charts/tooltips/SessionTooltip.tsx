import type { SessionTooltip } from '../../../../types/charts/sessionTooltip';

export const CustomSessionTooltip = ({ active, payload }: SessionTooltip) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 text-xs font-bold text-black">
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};
