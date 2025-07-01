import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

interface PerfData {
  subject: string;
  value: number;
}

const data: PerfData[] = [
  { subject: 'Intensité', value: 80 },
  { subject: 'Vitesse', value: 90 },
  { subject: 'Force', value: 70 },
  { subject: 'Endurance', value: 60 },
  { subject: 'Energie', value: 85 },
  { subject: 'Cardio', value: 75 },
];

const KpiChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={data}
        margin={{ left: 10, right: 20, top: 10, bottom: 10 }}
      >
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
        />
        <Radar
          name="score"
          dataKey="value"
          fill="#e60000"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default KpiChart;
