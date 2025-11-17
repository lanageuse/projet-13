import type { PerformanceData } from '../types/apis';

/**
 * Interface pour les données de performance formatées
 */
interface FormattedPerformanceData {
  value: number;
  kind: number;
  kindLabel: string;
}

/**
 * Classe pour adapter les données de performance
 */
export class Performance {
  private performanceData: PerformanceData | null;

  constructor(data: PerformanceData | null) {
    this.performanceData = data;
  }

  /**
   * Convertit un type de performance en libellé français
   */
  private adapterLabel(kindType: string): string {
    const kindMap: Record<string, string> = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };
    return kindMap[kindType] ?? '';
  }

  /**
   * Adapte les données de performance en ajoutant les libellés traduits
   */
  adaptPerformanceData(): FormattedPerformanceData[] {
    if (!this.performanceData) return [];

    return this.performanceData.data.map((item) => ({
      ...item,
      kindLabel: this.adapterLabel(this.performanceData!.kind[item.kind]),
    }));
  }
}
