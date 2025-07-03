import type { JSX } from 'react';
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
import { authorizedId } from '../../../types/api/user';
import type { ActivityData } from '../../../types/api/activity';
import { CustomActivityLegend } from './legends/ActivityLegend';
import { CustomActivityTooltip } from './tooltips/ActivityTooltip';

const ActivityChart: React.FC = (): JSX.Element => {
  const { state } = useFetch<ActivityData>(
    authorizedId.cecilia,
    ApiEndpoints.UserActivity
  );
  const { data } = state;
  const activityData = data?.sessions;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={activityData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={60}
          content={<CustomActivityLegend />}
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
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={5}
          tickFormatter={(_value: string, index: number): string =>
            (index + 1).toString()
          }
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          hide={true}
          domain={['dataMin - 50', 'dataMax + 50']}
        />
        <Tooltip itemSorter={() => -1} content={<CustomActivityTooltip />} />
        <Bar
          name={'Poids(kg)'}
          dataKey="kilogram"
          fill="black"
          barSize="10"
          radius={[10, 10, 0, 0]}
          yAxisId="right"
        />
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
