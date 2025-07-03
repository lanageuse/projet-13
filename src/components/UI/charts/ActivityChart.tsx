import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import useFetch from '../../../hooks/useFetch';
import { ApiEndpoints } from '../../../types/api/endpoints';
import type { ActivityData } from '../../../types/api/activity';
import { CustomActivityLegend } from './legends/ActivityLegend';
import { CustomActivityTooltip } from './tooltips/ActivityTooltip';

/**
 * Composant graphique affichant l'activité quotidienne d'un utilisateur
 * {@link : https://recharts.org/en-US}
 * Ce composant utilise un graphique en barres pour visualiser :
 * - Le poids quotidien (en kg) sur l'axe Y de droite
 * - Les calories brûlées (en kCal) sur l'axe Y de gauche
 *
 * @component
 * @returns {JSX.Element} Un graphique en barres responsive avec les données d'activité
 *
 */
const ActivityChart: React.FC = () => {
  /** Récupération des données d'activité via l'API */
  const { state } = useFetch<ActivityData>(ApiEndpoints.UserActivity);
  const { data } = state;

  /** Sessions d'activité extraites des données API */
  const activityData = data?.sessions;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={activityData}>
        {/* Grille cartésienne avec lignes horizontales uniquement */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        {/* Légende personnalisée positionnée en haut à droite */}
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={60}
          content={<CustomActivityLegend />}
        />

        {/* Titre du graphique */}
        <text
          x={70}
          y={20}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15">Activité quotidienne</tspan>
        </text>

        {/* Axe X affichant les numéros de jour (1, 2, 3...) */}
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={5}
          tickFormatter={(_value: string, index: number): string =>
            (index + 1).toString()
          }
        />

        {/* Axe Y de droite pour le poids */}
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
        />

        {/* Axe Y de gauche pour les calories (masqué avec domaine ajusté) */}
        <YAxis
          yAxisId="left"
          orientation="left"
          hide={true}
          domain={['dataMin - 50', 'dataMax + 50']}
        />

        {/* Tooltip personnalisé avec tri inversé */}
        <Tooltip itemSorter={() => -1} content={<CustomActivityTooltip />} />

        {/* Barre pour le poids (kg) - axe de droite */}
        <Bar
          name={'Poids(kg)'}
          dataKey="kilogram"
          fill="black"
          barSize="10"
          radius={[10, 10, 0, 0]}
          yAxisId="right"
        />

        {/* Barre pour les calories brûlées (kCal) - axe de gauche */}
        <Bar
          name={'Calories brûlées (kCal)'}
          dataKey="calories"
          fill="red"
          barSize="10"
          radius={[10, 10, 0, 0]}
          yAxisId="left"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
