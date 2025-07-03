import { Rectangle } from 'recharts';
import type { CursorProps } from '../../../../types/charts/sessionCursor';

export const CustomCursor: React.FC<CursorProps> = ({
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
