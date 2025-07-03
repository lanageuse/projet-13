import type { SessionTooltip } from '../../../../types/charts/sessionTooltip';

/**
 * Infobulle personnalisée pour le graphique de sessions.
 * @param {SessionTooltip} props Propriétés de l'infobulle (active, payload)
 * @returns {JSX.Element|null} Affiche la durée de session en minutes ou null si inactif
 */
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
