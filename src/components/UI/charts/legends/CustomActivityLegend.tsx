import type {
  LegendPayloadItem,
  ActivityLegend,
} from '../../../../types/charts/ActivityLegend';

export const CustomActivityLegend = (props: ActivityLegend) => {
  const { payload } = props;
  return (
    <div className="flex flex-row-reverse justify-start gap-3">
      {payload?.map((item: LegendPayloadItem, index: number) => (
        <div key={index} className="flex items-center gap-1 text-sm">
          <span
            style={{ backgroundColor: item.color }}
            className="inline-block h-2 w-2 rounded-2xl"
          />
          {item.value}
        </div>
      ))}
    </div>
  );
};
