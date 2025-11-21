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
import { useDashboard } from '../../contexts/DashboardContext';
import type {
  ChartLegendProps,
  ChartTooltipProps,
  LegendItem,
} from '../../types/ui';

/**
 * Légende personnalisée pour le graphique d'activité.
 * Composant interne utilisé uniquement par ActivityChart.
 */
const ActivityLegend = (props: ChartLegendProps) => {
  const { payload } = props;

  // Pas d'affichage si ale payload n'est pas fourni
  if (!payload || payload.length === 0) return null;
  return (
    <div className="flex flex-col-reverse flex-wrap justify-between gap-1 md:flex-row-reverse md:gap-3">
      <div className="flex w-full items-center justify-center gap-3 md:w-fit">
        {[...(payload ?? [])]
          .map((item: LegendItem, index: number) => (
            <div key={index} className="gap-1text-sm flex gap-1">
              <span
                style={{ backgroundColor: item.color, marginTop: '7px' }}
                className="inline-block h-2 w-2 rounded-2xl"
              />
              {item.value}
            </div>
          ))
          .reverse()}
      </div>
      <div className="w-full text-center text-[15px] font-medium md:w-fit md:text-left">
        Activité quotidienne
      </div>
    </div>
  );
};

/**
 * Infobulle personnalisée pour le graphique d'activité.
 * Composant interne utilisé uniquement par ActivityChart.
 */
const ActivityTooltip = ({ active, payload }: ChartTooltipProps) => {
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

/**
 * Composant graphique affichant l'activité quotidienne d'un utilisateur
 * Ce composant utilise un graphique en barres pour visualiser :
 * - Le poids quotidien (en kg) sur l'axe Y de droite
 * - Les calories brûlées (en kCal) sur l'axe Y de gauche
 *
 * @component
 * @returns {JSX.Element} Un graphique en barres responsive avec les données d'activité
 *
 */
const ActivityChart: React.FC = () => {
  const { activitySessions } = useDashboard();
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={320}>
      <BarChart data={activitySessions || []}>
        {/* Grille avec lignes horizontales uniquement */}
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          horizontalCoordinatesGenerator={() => [70, 180]}
        />

        {/* Légende personnalisée positionnée en haut à droite */}
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={65}
          content={<ActivityLegend />}
        />

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
          domain={['dataMin - 1', 'dataMax']}
          interval={0}
          allowDecimals={false}
        />

        {/* Axe Y de gauche pour les calories (masqué avec domaine ajusté) */}
        <YAxis
          yAxisId="left"
          orientation="left"
          hide={true}
          domain={['dataMin - 50', 'dataMax + 50']}
        />

        {/* Tooltip personnalisé avec tri inversé */}
        <Tooltip itemSorter={() => -1} content={<ActivityTooltip />} />

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
