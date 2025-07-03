import type { JSX } from 'react';
import type React from 'react';
import type { KpiProps } from '../types/kpi';
import { useUser } from '../contexts/UserContext';
import KpiCard from '../components/UI/kpi/KpiCard';
import { adaptaterKpis } from '../adaptaters/adapterKpis';

const KpiCards: React.FC = (): JSX.Element => {
  const data = useUser();
  const kpis = adaptaterKpis(data?.keyData ?? null);

  return (
    <>
      {kpis.map((kpi: KpiProps, index: number) => (
        <KpiCard key={index} kpi={kpi} />
      ))}
    </>
  );
};

export default KpiCards;
