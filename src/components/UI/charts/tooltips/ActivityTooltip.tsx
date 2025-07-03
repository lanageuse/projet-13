import type { ActivityTooltip } from '../../../../types/charts/activityTooltip';

/**
 * Infobulle personnalisée pour le graphique d'activité.
 * @param {ActivityTooltip} props Propriétés de l'infobulle (active, payload)
 * @returns {JSX.Element} Contenu de l'infobulle ou div masquée
 */
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
