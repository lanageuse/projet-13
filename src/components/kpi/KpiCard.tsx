import type React from 'react';
import type { KpiCardProps } from '../../types/ui';

/**
 * Carte KPI affichant une icône, une valeur et une référence (label).
 * @param {KpiCardProps} props Propriétés de la carte KPI (kpi)
 * @returns {JSX.Element} Composant visuel de la carte KPI
 */
const KpiCard: React.FC<KpiCardProps> = ({ kpi }) => {
  const { svg, color, value, unity, ref } = kpi;
  const Icon = svg;
  const bgColor: Record<string, string> = {
    red: 'bg-red/5',
    yellow: 'bg-yellow/5',
    cyan: 'bg-cyan/5',
    pink: 'bg-pink/5',
  };

  return (
    <div className="rounded-chart align-center flex gap-6 bg-gray-700 p-5">
      <div className={`rounded-chart ${bgColor[color]} p-6`}>
        <Icon className="opacity-100" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-xl font-black text-black">
          {value} {unity}
        </h2>
        <h3 className="text-gray text-sm">{ref}</h3>
      </div>
    </div>
  );
};

export default KpiCard;
