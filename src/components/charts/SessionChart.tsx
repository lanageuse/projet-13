import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Rectangle
} from 'recharts';
import { useDashboard } from '../../contexts/DashboardContext';
import type { ChartCursorProps, ChartTooltipProps } from '../../types/ui';



const SessionTooltip = ({ active, payload }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 text-xs font-bold text-black">
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const SessionCursor: React.FC<ChartCursorProps> = ({
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



const SessionChart: React.FC = () => {
  const { formattedSessions } = useDashboard();

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <AreaChart
        data={formattedSessions || []}
        margin={{
          top: 0,
          right: 0,
          left: 15,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(256, 256, 256, 0.1" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        <text
          x={110}
          y={40}
          fill="white"
          fontWeight={'bold'}
          textAnchor="middle"
          dominantBaseline="central"
          opacity={0.6}
        >
          <tspan className="text-lg">Durée moyenne des</tspan>
          <tspan x={65} dy={20} className="text-lg">
            sessions
          </tspan>
        </text>
        <YAxis
          name="min"
          dataKey="sessionLength"
          domain={['dataMin - 10', 'dataMax + 80']}
          tick={false}
          hide={true}
          axisLine={false}
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{
            fill: 'white',
            dx: -5,
            dy: -10,
            fontWeight: 'bold',
            panose1: 10,
          }}
          opacity={0.6}
        />
        <Tooltip
          itemStyle={{ color: 'black' }}
          contentStyle={{ border: 0 }}
          cursor={<SessionCursor points={[]} />}
          content={<SessionTooltip />}
        />
        <Area
          type="monotone"
          unit={' min'}
          dataKey="sessionLength"
          stackId="1"
          stroke="url(#colorUv)"
          strokeWidth={2}
          fill="transparent"
          strokeLinejoin="round"
          activeDot={{
            r: 6,
            fill: 'white',
            stroke: 'rgba(256,256,256,0.2)',
            strokeWidth: 12,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SessionChart;
