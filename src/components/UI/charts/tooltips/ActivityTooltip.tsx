import type { ActivityTooltip } from '../../../../types/charts/activityTooltip';

export const CustomActivityTooltip = ({ active, payload }: ActivityTooltip) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="bg-red p-2 text-sm text-white"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {isVisible && (
        <>
          <p className="py-3">{`${payload[0].value} kg`}</p>
          <p className="py-3">{`${payload[1].value} Kcal`}</p>
        </>
      )}
    </div>
  );
};
