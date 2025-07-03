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
