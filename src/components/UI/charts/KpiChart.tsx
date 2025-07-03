import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import useFetch from '../../../hooks/useFetch';
import type { PerformanceData } from '../../../types/api/performance';
import { ApiEndpoints } from '../../../types/api/Endpoints';
import { authorizedId } from '../../../types/api/User';

const KpiChart: React.FC = () => {
  const { state } = useFetch<PerformanceData>(
    authorizedId.cecilia,
    ApiEndpoints.UserPerformance
  );
  const { data } = state;
  const kindData = data?.kind;
  const performanceData = data?.data;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={performanceData}
        margin={{ left: 10, right: 20, top: 10, bottom: 10 }}
      >
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis
          dataKey="value"
          tick={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
          tickFormatter={(_value: string, index: number): string =>
            kindData?.[index + 1] || ''
          }
        />
        <Radar dataKey="value" fill="#e60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default KpiChart;
