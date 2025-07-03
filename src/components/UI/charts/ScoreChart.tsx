import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { useUser } from '../../../contexts/UserContext';

interface ScoreData {
  score: number | undefined;
  fill: string;
}

const ScoreChart: React.FC = () => {
  const data = useUser();
  const rawScore = data?.score ?? data?.todayScore ?? 0;
  const userScore = Math.round(rawScore * 100);
  const score: ScoreData[] = [{ score: userScore, fill: '#e60000' }];

  return (
    <>
      <h3 className="absolute m-3 font-semibold">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          barSize={15}
          data={score}
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
            dataKey="score"
            angleAxisId={0}
            data={[score[0]]}
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-[42%] left-[42%] text-center">
        <span className="text-[26px] font-bold">{score[0].score} %</span>
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
