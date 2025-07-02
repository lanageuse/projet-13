import type { JSX } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  YAxis,
} from 'recharts';

interface Session {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: Session[] = [
  {
    name: 'L',
    uv: 2300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface CursorProps {
  points: Array<{
    x: number;
    y: number;
  }>;
  width?: number;
  height?: number;
}

const CustomCursor: React.FC<CursorProps> = ({
  points,
  width = 0,
  height = 0,
}) => {
  if (!points || points.length === 0) return null;

  const { x, y } = points[0];

  return (
    <Rectangle
      fill="rgba(0,0,0,0.3)"
      x={x}
      y={y}
      width={width}
      height={height + height / 4}
    />
  );
};

const SessionChart: React.FC = (): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
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
          domain={['dataMin - 10', 'dataMax + 3000']}
          tick={false}
          hide={true}
          axisLine={false}
        />
        <XAxis
          dataKey="name"
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
          labelStyle={{ display: 'none' }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="url(#colorUv)"
          strokeWidth={2}
          fill="transparent"
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
