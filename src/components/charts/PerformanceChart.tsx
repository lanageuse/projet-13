import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useDashboard } from '../../contexts/DashboardContext';

/**
 * Composant graphique radar affiche les données de performance d'un utilisateur.
 *
 * Ce composant utilise Recharts pour créer un graphique radar interactif qui visualise
 * les différents types de performance (cardio, énergie, endurance, force, vitesse, intensité).
 * Les données sont récupérées via l'API et adaptées pour l'affichage.
 *
 * @returns {JSX.Element} Un graphique radar responsive affichant les performances utilisateur
 */
const PerformanceChart: React.FC = () => {
  const {formattedPerformance} = useDashboard()
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <RadarChart data={formattedPerformance || []} cx="50%" cy="50%" outerRadius="65%">
        {/* Grille pour structurer le graphique */}
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
