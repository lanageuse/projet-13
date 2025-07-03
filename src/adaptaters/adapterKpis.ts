import type { keyData } from '../types/api/User';
import type { KpiProps } from '../types/kpi';
import Calories from '../assets/icons/burn.svg?react';
import Proteine from '../assets/icons/proteine.svg?react';
import Glucide from '../assets/icons/apple.svg?react';
import Lipides from '../assets/icons/cheeseburger.svg?react';

export const adaptaterKpis = (userKeyData: keyData | null): KpiProps[] => {
  if (!userKeyData) return [];
  return [
    {
      svg: Calories,
      color: 'red',
      value: userKeyData?.calorieCount.toLocaleString('en') ?? 0,
      unity: 'kCal',
      ref: 'Calories',
    },
    {
      svg: Proteine,
      color: 'cyan',
      value: userKeyData?.proteinCount.toLocaleString('en') ?? 0,
      unity: 'g',
      ref: 'Proteines',
    },
    {
      svg: Glucide,
      color: 'yellow',
      value: userKeyData?.carbohydrateCount.toLocaleString('en') ?? 0,
      unity: 'g',
      ref: 'Glucides',
    },
    {
      svg: Lipides,
      color: 'pink',
      value: userKeyData?.lipidCount.toLocaleString('en') ?? 0,
      unity: 'g',
      ref: 'Lipides',
    },
  ];
};
