import type { JSX } from 'react';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';

interface ScoreData {
  uv: number;
  fill: string;
}

const data: ScoreData[] = [{ uv: 12, fill: '#e60000' }];
const ScoreChart: React.FC = (): JSX.Element => {
  return (
    <>
      <h3 className="absolute m-3 font-semibold">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          barSize={15}
          data={data}
          startAngle={90}
          endAngle={450}
          cx="50%"
          cy="50%"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="uv"
            angleAxisId={0}
            data={[data[0]]}
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-[42%] left-[42%] text-center">
        <span className="text-[26px] font-bold">{data[0].uv} %</span>
        <br />
        <span className="text-gray">
          de votre
          <br />
          objectif
        </span>
      </div>
    </>
  );
};

export default ScoreChart;
