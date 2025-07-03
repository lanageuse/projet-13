import type { PerformanceData } from '../types/api/performance';

/**
 * Adapte les données de performance en ajoutant les libellés traduits pour chaque type de performance.
 * @param data - Les données de performance à adapter ou null
 * @returns Un tableau des données adaptées avec les libellés, ou un tableau vide si les données sont null
 */
export function adaptedPerformanceData(data: PerformanceData | null) {
  if (!data) return [];
  return data.data.map((item) => ({
    ...item,
    kindLabel: adapterLabel(data.kind[item.kind]),
  }));
}
const adapterLabel = (index: string): string => {
  const kindMap: Record<string, string> = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };
  return kindMap[index] ?? '';
};
