import type { KpiData } from '../types/apis';
import type { KpiProps } from '../types/kpi';
import Calories from '../assets/icons/burn.svg?react';
import Proteine from '../assets/icons/proteine.svg?react';
import Glucide from '../assets/icons/apple.svg?react';
import Lipides from '../assets/icons/cheeseburger.svg?react';

/**
 * Classe Kpi pour formater les données nutritionnelles
 */
export class Kpis {
  public readonly kpis: KpiProps[];

  constructor(kpis: KpiData | null) {
    if (!kpis) {
      this.kpis = [];
      return;
    }

    this.kpis = [
      {
        svg: Calories,
        color: 'red',
        value: kpis.calories,
        unity: 'kCal',
        ref: 'Calories',
      },
      {
        svg: Proteine,
        color: 'cyan',
        value: kpis.proteines,
        unity: 'g',
        ref: 'Proteines',
      },
      {
        svg: Glucide,
        color: 'yellow',
        value: kpis.glucides,
        unity: 'g',
        ref: 'Glucides',
      },
      {
        svg: Lipides,
        color: 'pink',
        value: kpis.lipides,
        unity: 'g',
        ref: 'Lipides',
      },
    ];
  }
}
