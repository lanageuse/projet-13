import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import useFetch from '../../../hooks/useFetch';
import type { PerformanceData } from '../../../types/api/performance';
import { ApiEndpoints } from '../../../types/api/endpoints';
import { authorizedId } from '../../../types/api/user';
import { adaptedPerformanceData } from '../../../adapters/adpaterPerformance';

const PerformanceChart: React.FC = () => {
  const { state } = useFetch<PerformanceData>(
    authorizedId.cecilia,
    ApiEndpoints.UserPerformance
  );
  const { data } = state;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={adaptedPerformanceData(data)}
        margin={{ left: 10, right: 20, top: 10, bottom: 10 }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kindLabel"
          tick={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
        />
        <Radar dataKey="value" fill="#e60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
