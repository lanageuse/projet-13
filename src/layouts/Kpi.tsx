import type { JSX } from 'react';
import type React from 'react';
import Calories from '../assets/icons/burn.svg?react';
import Proteine from '../assets/icons/proteine.svg?react';
import Glucide from '../assets/icons/apple.svg?react';
import Lipides from '../assets/icons/cheeseburger.svg?react';
import KpiCard from '../components/UI/kpi/KpiCard';
import type { KpiProps } from '../types/kpi';

const KpiCards: React.FC = (): JSX.Element => {
  const kpis: KpiProps[] = [
    {
      svg: Calories,
      color: 'red',
      value: 1930,
      unity: 'kCal',
      ref: 'Calories',
    },
    {
      svg: Proteine,
      color: 'cyan',
      value: 155,
      unity: 'g',
      ref: 'Proteines',
    },
    {
      svg: Glucide,
      color: 'yellow',
      value: 290,
      unity: 'g',
      ref: 'Glucides',
    },
    {
      svg: Lipides,
      color: 'pink',
      value: 50,
      unity: 'g',
      ref: 'Lipides',
    },
  ];

  return (
    <>
      {kpis.map((kpi: KpiProps, index: number) => (
        <KpiCard key={index} kpi={kpi} />
      ))}
    </>
  );
};

export default KpiCards;
