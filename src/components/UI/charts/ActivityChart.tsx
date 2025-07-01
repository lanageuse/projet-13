import type { JSX } from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

interface Chart {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
const data: Chart[] = [
  {
    name: '2',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2',
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: '2',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ActivityChart: React.FC = (): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          height={60}
        />
        <text
          x={70}
          y={20}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15">Activité quotidienne</tspan>
        </text>
        <XAxis dataKey="name" tickLine={false} tickMargin={5} />
        <YAxis orientation="right" axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ background: 'red', color: 'white', border: '0' }}
          itemStyle={{ color: 'white' }}
        />

        <Bar
          dataKey="pv"
          fill="black"
          barSize="10"
          radius={[10, 10, 0, 0]}
          activeBar={<Rectangle fill="black" />}
        />
        <Bar
          dataKey="uv"
          fill="red"
          barSize="10"
          radius={[10, 10, 0, 0]}
          activeBar={<Rectangle fill="red" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
