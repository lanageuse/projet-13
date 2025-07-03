/**
 * Propriétés du curseur personnalisé pour le graphique de sessions.
 * @property {{x: number, y: number}[]} points Coordonnées des points du curseur
 * @property {number} [width] Largeur optionnelle du curseur
 * @property {number} [height] Hauteur optionnelle du curseur
 */
export type CursorProps = {
  points: Array<{
    x: number;
    y: number;
  }>;
  width?: number;
  height?: number;
};
