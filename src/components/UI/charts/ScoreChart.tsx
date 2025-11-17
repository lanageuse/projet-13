import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { useDashboard } from '../../../contexts/DashboardContext';

/**
 * Composant graphique circulaire qui affiche le score de l'utilisateur.
 *
 * @component
 * @returns {JSX.Element} Graphique radial avec le pourcentage d'objectif atteint
 */
const ScoreChart: React.FC = () => {
  const {user} = useDashboard();

  // Données pour le graphique Recharts
  const rawChartData = user?.getScoreChartsData();

  return (
    <>
      <h3 className="absolute m-3 font-semibold">Score</h3>

      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          barSize={15}
          data={rawChartData}
          startAngle={90}
          endAngle={450}
          cx="50%"
          cy="50%"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            dataKey="percent"
            angleAxisId={0}
            data={rawChartData}
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Affichage du pourcentage centré */}
      <div className="absolute top-[42%] left-[42%] text-center">
        <span className="text-[26px] font-bold">
          {user?.getScorePercentage()}
        </span>
        <br />
        <span className="text-gray">
          de votre
          <br />
          objectif
        </span>
      </div>
    </>
  );
};

export default ScoreChart;
