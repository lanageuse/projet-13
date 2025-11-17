import type React from 'react';
import type { KpiProps } from '../types/kpi';
import { useDashboard } from '../contexts/DashboardContext';
import KpiCard from '../components/UI/kpi/KpiCard';

/**
 * Affiche la liste des cartes KPI de l'utilisateur.
 * @returns {JSX.Element} Liste de composants KpiCard
 */
const KpiCards: React.FC = () => {
  const {kpis} = useDashboard();

  return (
    <>
      {kpis?.kpis.map((kpi: KpiProps, index: number) => (
        <KpiCard key={index} kpi={kpi} />
      ))}
    </>
  );
};

export default KpiCards;
