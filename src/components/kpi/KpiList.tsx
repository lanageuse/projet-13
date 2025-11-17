import type React from 'react';
import type { KpiConfig } from '../../types/ui';
import { useDashboard } from '../../contexts/DashboardContext';
import KpiCard from '../../components/kpi/KpiCard';

/**
 * Affiche la liste des cartes KPI de l'utilisateur.
 * @returns {JSX.Element} Liste de composants KpiCard
 */
const KpiLists: React.FC = () => {
  const {kpis} = useDashboard();

  return (
    <>
      {kpis?.kpis.map((kpi: KpiConfig, index: number) => (
        <KpiCard key={index} kpi={kpi} />
      ))}
    </>
  );
};

export default KpiLists;
