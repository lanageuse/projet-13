import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import useFetch from '../../../hooks/useFetch';
import type { PerformanceData } from '../../../types/api/performance';
import { ApiEndpoints } from '../../../types/api/endpoints';
import { adaptedPerformanceData } from '../../../adapters/adpaterPerformance';

/**
 * Composant graphique radar affiche les données de performance d'un utilisateur.
 *
 * Ce composant utilise Recharts pour créer un graphique radar interactif qui visualise
 * les différents types de performance (cardio, énergie, endurance, force, vitesse, intensité).
 * Les données sont récupérées via l'API et adaptées pour l'affichage.
 * {@link : https://recharts.org/en-US}
 *
 * @component
 * @example
 *
 * @returns {JSX.Element} Un graphique radar responsive affichant les performances utilisateur
 */
const PerformanceChart: React.FC = () => {
  /**
   * Récupération des données de performance via le hook useFetch
   * @type {FetchState<PerformanceData>}
   */
  const { state } = useFetch<PerformanceData>(ApiEndpoints.UserPerformance);

  /**
   * Extraction des données de performance depuis l'état
   * @type {PerformanceData | null}
   */
  const { data } = state;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={adaptedPerformanceData(data)}
        margin={{ left: 10, right: 20, top: 10, bottom: 10 }}
      >
        {/* Grille polaire pour structurer le graphique */}
        <PolarGrid />

        {/* Axe des angles avec les labels des types de performance */}
        <PolarAngleAxis
          dataKey="kindLabel"
          tick={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
        />

        {/* Zone radar avec les valeurs de performance */}
        <Radar dataKey="value" fill="#e60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
