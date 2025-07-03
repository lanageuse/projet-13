import type React from 'react';
import type { KpiProps } from '../types/kpi';
import { useUser } from '../contexts/UserContext';
import KpiCard from '../components/UI/kpi/KpiCard';
import { adapterKpis } from '../adapters/adapterKpis';

const KpiCards: React.FC = () => {
  const data = useUser();
  const kpis = adapterKpis(data?.keyData ?? null);

  return (
    <>
      {kpis.map((kpi: KpiProps, index: number) => (
        <KpiCard key={index} kpi={kpi} />
      ))}
    </>
  );
};

export default KpiCards;
