import type {
  LegendPayloadItem,
  ActivityLegend,
} from '../../../../types/charts/activityLegend';

/**
 * Légende personnalisée pour le graphique d'activité.
 * @param props.payload Liste des éléments à afficher (couleur et label)
 * @returns JSX.Element|null
 */
export const CustomActivityLegend = (props: ActivityLegend) => {
  const { payload } = props;

  // Pas d'affichage si ale payload n'est pas fourni
  if (!payload || payload.length === 0) return null;
  return (
    <div className="flex flex-col-reverse flex-wrap justify-between gap-1 md:flex-row-reverse md:gap-3">
      <div className="flex w-full items-center justify-center gap-3 md:w-fit">
        {payload?.map((item: LegendPayloadItem, index: number) => (
          <div key={index} className="gap-1text-sm flex gap-1">
            <span
              style={{ backgroundColor: item.color, marginTop: '7px' }}
              className="inline-block h-2 w-2 rounded-2xl"
            />
            {item.value}
          </div>
        ))}
      </div>
      <div className="w-full text-center text-[15px] font-medium md:w-fit md:text-left">
        Activité quotidienne
      </div>
    </div>
  );
};
