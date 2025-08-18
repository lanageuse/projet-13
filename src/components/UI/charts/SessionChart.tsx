import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import useFetch from '../../../hooks/useFetch';
import { ApiEndpoints } from '../../../types/api/endpoints';
import type { AverageSessionData } from '../../../types/api/session';
import { CustomSessionTooltip } from './tooltips/SessionTooltip';
import { CustomCursor } from './cursor/CursorSession';
import { Session } from '../../../class/Session';

const SessionChart: React.FC = () => {
  const { state } = useFetch<AverageSessionData>(
    ApiEndpoints.UserAverageSessions,
    true
  );
  const { data } = state;
  const formattedSessionData = data?.sessions
    ? new Session(data?.sessions).formatSessions()
    : [];

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <AreaChart
        data={formattedSessionData}
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
          cursor={<CustomCursor points={[]} />}
          content={<CustomSessionTooltip />}
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
