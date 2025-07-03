import { Rectangle } from 'recharts';
import type { CursorProps } from '../../../../types/charts/sessionCursor';

/**
 * Curseur personnalisé pour les graphiques de session.
 * Affiche un rectangle semi-transparent à la position du curseur.
 *
 * @component
 * @param {CursorProps} props - Propriétés du curseur
 * @param {Array} props.points - Points de coordonnées du curseur
 * @param {number} [props.width=0] - Largeur du curseur
 * @param {number} [props.height=0] - Hauteur du curseur
 *
 * @returns {JSX.Element|null} Rectangle de curseur ou null si pas de points
 */
export const CustomCursor: React.FC<CursorProps> = ({
  points,
  width = 0,
  height = 0,
}) => {
  // Pas d'affichage si aucun point fourni
  if (!points || points.length === 0) return null;

  // Utilise le premier point pour la position
  const { x, y } = points[0];

  return (
    <Rectangle
      fill="rgba(0,0,0,0.3)"
      x={x}
      y={y}
      width={width}
      height={height + height / 4} // Hauteur étendue de 25%
    />
  );
};
